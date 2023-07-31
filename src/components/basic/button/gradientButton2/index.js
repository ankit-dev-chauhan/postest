import React from 'react'
import styles from './styles.module.scss'

const GradientBtn2 = (props) => {
   const {
      title = 'GradientBtn',
      form,
      stocks,
      HandleProceedToCheckout } = props;
   return (
      <div>
         <button className={styles.button} onClick={() => HandleProceedToCheckout(form, stocks)}>
            <span>
               {title}
            </span>
         </button>
      </div>
   )
}

export default GradientBtn2
