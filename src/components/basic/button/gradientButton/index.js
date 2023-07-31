import React from 'react' 
import styles from './styles.module.scss'

const GradientBtn = (props) => {
   const { title = 'GradientBtn', handleClick } = props;
   return (
      <div>
        <button className={styles.button}  onClick={handleClick}>
            <span>
               {title}
            </span>
         </button>

      </div>
   )
}

export default GradientBtn
