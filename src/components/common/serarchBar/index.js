import Image from "next/image";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { colors } from "../../../constants/colors";
import Text from "../../basic/text";
import styles from "./styles.module.scss";
import { AddButton } from "../../../components/common/addButton";
import {exportFormat} from "/src/utils/helper/exportFormat";
const SearchBar = (props) => {
  const { searchname, searchReturnInput, HandleSearch } = props;
  return (
    <div>
      <Row>
        <Col md={3} sm={4} className={`mt1 ps-lg-0 ${styles.contentMargin}`}>
          <Text
            color={colors.black}
            size={13}
            fontWeight={700}
            lineheight="14px"
            className={`${styles.font10}`}
          >
            SEARCH BY
          </Text>
        </Col>
        <Col md={9} sm={8} className={`ps-md-0 ${styles.contentMargin_2}`}>
          <div>
            <Form.Group
              className={`mb-md-4 d-flex mr-1`}
              controlId="formBasicEmail"
            >
              <Form.Control
                className={styles.searchInputBox}
                placeholder="DATE"
                value={searchname}
                ref={searchReturnInput}
                onChange={HandleSearch}
              />
              <div className={`${styles.searchIconDiv}`} role="button">
                <Image
                  src="/icons/common-icon/searchIcon.svg"
                  width={15}
                  height={15}
                  onClick={HandleSearch}
                />
              </div>
            </Form.Group>
          </div>
          
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
