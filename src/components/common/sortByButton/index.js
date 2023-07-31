import React from 'react';
import { Form } from 'react-bootstrap';
import { sortByLine } from '../../../container/home/searchProduct/image';

const SortByButton = (props) => {
  const { title = 'Sort By', handleChange, options } = props;
  return (
    <button className='sortBtn d-center ps-3 w-100'>
      <img
        src={sortByLine}
        alt="add-btn"
        width={12}
        height={12}
      />
      <Form.Select
        className={`formSelect`}
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option value=''> {title} </option>
        {options?.map((item, key) => {
          return (
            <option key={key} value={item?.value}>{ item?.name} </option>
          )
        })}
      </Form.Select>
    </button>
  );
};

export default SortByButton