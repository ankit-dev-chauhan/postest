import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePagination, DOTS } from "./usePagination";
import {  Breadcrumb, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { colors } from '../../../constants/colors'
import Button from '../../basic/button'
import Text from '../../basic/text'
import styles from "./styles.module.scss"
import { useRouter } from "next/router";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount = 0,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const [page, setPage] = useState("");

  // const handlePageChange = () => {
  //     onPageChange(Number(page))
  //     setPage('')
  // }
  const handlePageChangeNum = (e) => {
    // onPageChange(Number(page))
    setPage("");
  };
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange?.length - 1];
  let firstPage = 1;
  return (
    <div className={styles.paginationMainDiv}>
      <Container fluid>
        <Row>
          <Col md={8} sm={8} className={`d-flex justify-content-end ${styles.contentCenter}`}>
            <Row>
              <Col md={4} xs={3}>
                <div className="d-flex justify-content-center">
                  <Button
                    className={`${styles.prevNxtBtn} ${
                      currentPage === firstPage && styles.disabled
                    }`}
                    onClick={onPrevious}
                    style={{
                      visibility: currentPage === firstPage && "hidden",
                    }}
                  >
                    <Image
                      src="/icons/products/prev-icon.svg"
                      width={8}
                      height={5}
                      alt={"next"}
                    />
                    <Text
                      className={`ms-md-2 ms-0`}
                      color={colors.lightBlack}
                      size={12}
                      fontWeight={500}
                      lineheight="14px"
                    >
                      Prev
                    </Text>
                  </Button>
                </div>
              </Col>
              <Col md={4} xs={6}>
                <Row>
                  {paginationRange.map((pageNumber) => {
                    if (pageNumber === DOTS) {
                      return (
                        <Col
                          key={`paginationRange-${pageNumber}`}
                          md={3}
                          xs={3}
                          className={`px-0`}
                        >
                          <Button className={styles.btnNum}>&#8230;</Button>
                        </Col>
                      );
                    }
                    return (
                      <Col
                        key={`paginationRange-${pageNumber}`}
                        md={3}
                        xs={3}
                        className={`px-0 pb-1`}
                      >
                        <Button
                          className={
                            pageNumber === currentPage
                              ? styles.btnNumSelected
                              : styles.btnNum
                          }
                          onClick={() => onPageChange(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      </Col>
                    );
                  })}
                  {/* <Col md={4} xs={4} className={`ps-0 pe-2`}>
                            <Button className={styles.btnNumSelected}>1</Button>
                        </Col>
                        <Col md={4} xs={4} className={`ps-0 pe-2`}>
                            <Button className={styles.btnNum}>2</Button>
                        </Col>
                        <Col md={4} xs={4} className={`px-0`}>
                            <Button className={styles.btnNum}>3</Button>
                        </Col> */}
                </Row>
              </Col>
              <Col md={2} xs={3}>
                <div className="d-flex justify-content-center">
                  <Button
                    className={`${styles.prevNxtBtn} ${
                      currentPage === lastPage && styles.disabled
                    }`}
                    style={{ visibility: currentPage === lastPage && "hidden" }}
                    onClick={onNext}
                  >
                    <Image
                      src="/icons/products/next-icon.svg"
                      width={8}
                      height={5}
                      alt={"next"}
                    />
                    <Text
                      className={`ms-md-2 ms-0`}
                      color={colors.lightBlack}
                      size={12}
                      fontWeight={500}
                      lineheight="14px"
                    >
                      Next
                    </Text>
                  </Button>
                </div>
              </Col>{" "}
            </Row>
          </Col>
          <Col md={4} sm={4} className={`d-flex ${styles.contentPage}`}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className={`${styles.btnPage} numberInput`}
                    type="number"
                    placeholder="Page"
                    value={page}
                    onChange={(e) => {
                      setPage(event.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col className="pt-1">
                <Button
                  className={styles.btnGo}
                  onClick={() =>
                    onPageChange(Number(page ? page : currentPage))
                  }
                >
                  Go
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pagination;
