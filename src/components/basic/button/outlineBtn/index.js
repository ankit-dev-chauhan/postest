import React from 'react'
import { Button } from 'react-bootstrap' 
import styles from './styles.module.scss'

const OutlineBtn = () => {
   return (
      <div>
         <Button variant='' className={styles.outlineOrange} >
            OutlineBtn!
         </Button>
      </div>
   )
}

export default OutlineBtn