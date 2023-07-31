import Image from 'next/image'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
const SideIcons = (props) => {
  const Router = useRouter();
  const { menuIcon, title, setTitle, sidebar} = props;

  return (
    <main>
      <div className={styles.margin}></div>
      { sidebar?.length>0 && sidebar?.map((item, key) => {
          if(item?.parent=="1"){
        return (
          <div
            key={key}
            onClick={() => {
              Router.push(item?.path);
              setTitle(item?.title)
            }}
            className={`${title === item?.title ? styles.newBgColor : styles.main} d-center m-1`}
          >
            <Image src={item.icon} width={20} height={20} />
          </div>
        )
      }

      })
      }
    </main>
  )
}

export default SideIcons