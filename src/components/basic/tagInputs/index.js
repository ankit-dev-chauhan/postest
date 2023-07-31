import { useState } from 'react'
import styles from "./styles.module.scss"
function TagsInput(props){
  
    // const
    // {
    //   tags,
    //   setTags
    // } = props
    const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }
    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }
    return (
        <div className={`${styles.tagsinputcontainer}`}>
            { tags && tags.map((tag, index) => (
                <div className={`${styles.tagitem}`} key={index}>
                    <span className={`${styles.text}`}>{tag}</span>
                    <span className={`${styles.close}`} onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input type="text" className={`${styles.tagsinput}`} placeholder="Type category size" onKeyDown={handleKeyDown} />
        </div>
    )
}

export default TagsInput