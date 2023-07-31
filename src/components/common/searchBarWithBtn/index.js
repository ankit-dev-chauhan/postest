import Image from "next/image";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../basic/button";
import Text from "../../basic/text";
import { AddButton } from "../addButton";
import styles from "./styles.module.scss";

const SearchBarWithBtn = (props) => {
  return (
    <div>
      <Row>
        <Col lg={2}></Col>
        <Col md={2} lg={2} className={styles.searchLining}>
          <Text size={13} fontWeight={700} color={colors?.black}>
            SEARCH BY
          </Text>
        </Col>
        <Col md={6} lg={5}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control
                type="designNo"
                className={`text-center ${styles.inputBox}`}
                placeholder="DESIGN NUMBER - PRODUCT NAME - PRODUCT ID"
                value={searchname}
                onChange={(e) => searchFilter(e)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={3} md={4} xs={12}>
          <div className="d-flex justify-content-end">
          <AddButton title={'Add New Design'}   handleClick={(e) => {
                handleShowPopUps();
                // setForm()
                formReset();
                // setForm(_.set( {images: imageData}));
              }}/>
          </div>
          <div
            role="button"
            className={`${styles.sortByBox} d-center mt-2 mb-3`}
          >
            <Image
              className={`align-items-center`}
              src="/icons/products/sort-by-line.svg"
              alt="sort-img"
              width={15}
              height={10}
            />
            <Form.Select
              className={`${styles.formSelect}`}
              onChange={sortbyfilter}
            >
              <option value="">Sort by</option>
              <option value="thisWeek">This week</option>
              <option value="thisMonth">This month</option>
              <option value="recentAdded">Recently Added</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBarWithBtn;
