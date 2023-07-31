import React from 'react';
import { addBtnIcon } from '../../../container/home/searchProduct/image';
import styles from './styles.module.scss'

export const AddButton = (props) => {
  const { title = '', handleClick } = props;

  return (
    <button className={`${styles.addBtn} w-100 text-capitalize`} onClick={handleClick}>
      <img
        className={`me-2`}
        src={addBtnIcon}
        alt="add-btn"
        width={12}
        height={12}
      />
      <span>{title}</span>
    </button>
  );
};