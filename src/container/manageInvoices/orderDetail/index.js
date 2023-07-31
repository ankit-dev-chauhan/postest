import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Form, Row, Breadcrumb, Table } from "react-bootstrap";
import Button from "../../../components/basic/button";
import GradientBtn from "../../../components/basic/button/gradientButton";
import Text from "../../../components/basic/text";
import { AddButton } from "../../../components/common/addButton";
import { colors } from "../../../constants/colors";
import NewProgressBar from "../../components/progressBar";
import TitleHeader from "../../components/titleHeader";
import NewTitleHeader from "../../components/titleHeader/NewTitleHeader";
import { invoiceAniIcon } from "../../home/searchProduct/animatedIcons";
import { invoiceIcon, ringIcon } from "../../home/searchProduct/image";
import styles from "../styles.module.scss";
import EditOrderPriceBreakUp from "./viewOrderPriceBreakUp";
import { useEditOrderPriceBreakUp } from "./viewOrderPriceBreakUp/hooks";
import BreadcrumbText from "/src/components/basic/BreadcrumbText";

const OrdersDetail = (props) => {
  const {
    showOrderDetailForm,
    setShowOrdersDetails,
    handleShowOrderDetailForm,
    handleCloseOrderDetailForm,
  } = props;

  const {
    showEditOrderPriceBreakUp,
    handleShowEditOrderPriceBreakUp,
    handleCloseEditOrderPriceBreakUp,
  } = useEditOrderPriceBreakUp();
  return (
    <>
      {showEditOrderPriceBreakUp ? (
        <EditOrderPriceBreakUp
          handleShowEditOrderPriceBreakUp={handleShowEditOrderPriceBreakUp}
          handleCloseEditOrderPriceBreakUp={handleCloseEditOrderPriceBreakUp}
        />
      ) : (
        <>
          <div className={"mb-4"}>
            <NewProgressBar />
          </div>
          <div className="mb-5">
            <Container fluid>
              <div>
                <Row>
                  <Col md={12}>
                    <BreadcrumbText>
                      <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Invoices</Breadcrumb.Item>
                        <Breadcrumb.Item>Manage Invoices</Breadcrumb.Item>
                        <Breadcrumb.Item active>ORDER Detail</Breadcrumb.Item>
                      </Breadcrumb>
                    </BreadcrumbText>
                  </Col>
                  <Col
                    md={4}
                    className="mb-4 mt-2"
                    onClick={() => {
                      handleCloseOrderDetailForm();
                    }}
                  >
                      <NewTitleHeader title={"ORDER DETAIL"} icon={invoiceIcon} aniIcon={invoiceAniIcon} />
                  </Col>
                  <Col md={6}></Col>
                  <Col md={2} sm={6}>
                    <div className="d-flex justify-content-center">
                      <AddButton title={"Export PDF"} />
                    </div>
                  </Col>
                </Row>
              </div>
              <Form>
                <div className="mx-lg-5 mx-md-3">
                  <Row>
                    <Col md={8} className="mt-5">
                      <Row>
                        <Col
                          md={12}
                          sm={12}
                          className="d-flex justify-content-center my-1"
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-evenly">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Customer Data
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      :
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Ashish Sood
                                    </Text>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          md={12}
                          sm={12}
                          className="d-flex justify-content-center my-1 "
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-evenly">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Order ID
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      :
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      GLON-1921-10XYS
                                    </Text>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          md={6}
                          sm={6}
                          className="d-flex justify-content-center my-1"
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-evenly  ">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Invoice ID
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      :
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      INV-080722-3000-2000
                                    </Text>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col
                          md={6}
                          sm={6}
                          className="d-flex justify-content-center my-1"
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-evenly  ">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      GL Design Number
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      :
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      ER-2613-GL
                                    </Text>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          md={6}
                          sm={6}
                          className="d-flex justify-content-center my-1"
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-center  ">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Payment Details
                                    </Text>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col
                          md={6}
                          sm={6}
                          className="d-flex justify-content-center my-1"
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-center ">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Shipping Address
                                    </Text>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          md={12}
                          sm={12}
                          className="d-flex justify-content-center my-1"
                        >
                          <div
                            role="button"
                            className={`${styles.borderStyleNew} py-2`}
                          >
                            <Row>
                              <Col md={12}>
                                <div className="d-flex align-items-center justify-content-evenly ">
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      Delivery Status
                                    </Text>
                                  </div>
                                  <div>
                                    <Text
                                      size={12}
                                      fontWeight={700}
                                      color={colors?.blackShade}
                                    >
                                      :
                                    </Text>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-center">
                                    <div>
                                      <Text
                                        size={12}
                                        fontWeight={700}
                                        color={colors?.blackShade}
                                      >
                                        Delivered
                                      </Text>
                                    </div>
                                    <div className="px-2">
                                      <Image
                                        src="/icons/products/green-gold-ellipse.svg"
                                        width={10}
                                        height={10}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <Col
                          md={12}
                          className="d-flex align-items-center justify-content-center mb-3"
                        >
                          <div className="px-2">
                            <Image
                              src="/icons/products/green-gold-ellipse.svg"
                              width={10}
                              height={10}
                            />
                          </div>
                          <div>
                            <Text
                              size={18}
                              fontWeight={700}
                              color={colors?.blackShade}
                              lineheight="35px"
                            >
                              Active
                            </Text>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="d-flex justify-content-center">
                          <div className={`${styles.imgDiv}`}>
                            <Image
                              src={ringIcon}
                              alt="ring"
                              width={200}
                              height={200}
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="px-2">
                        <Row>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <Text
                              size={20}
                              fontWeight={900}
                              lineheight="35px"
                              className="gradientText2"
                            >
                              Carry Forward Ring
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12} sm={12} className="my-1">
                            <div
                              role="button"
                              className={`${styles.borderStyleNew} py-2 `}
                            >
                              <Row>
                                <Col md={12}>
                                  <div className="d-flex align-items-center justify-content-around">
                                    <div>
                                      <Text
                                        size={11}
                                        fontWeight={600}
                                        color={colors?.blackShade}
                                      >
                                        Delivered On
                                      </Text>
                                    </div>
                                    <div>
                                      <Text
                                        size={11}
                                        fontWeight={600}
                                        color={colors?.blackShade}
                                      >
                                        :
                                      </Text>
                                    </div>
                                    <div>
                                      <Text
                                        size={11}
                                        fontWeight={600}
                                        color={colors?.blackShade}
                                      >
                                        10 Nov 2022
                                      </Text>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            lg={6}
                            md={12}
                            sm={12}
                            className="d-flex justify-content-center my-1"
                          >
                            <div
                              role="button"
                              className={`${styles.borderStyleNewSmallBtn} py-2`}
                            >
                              <Row>
                                <div
                                  className={`d-flex align-items-center justify-content-center px-3`}
                                >
                                  <Col md={12}>
                                    <div
                                      className={`d-flex align-items-center justify-content-center`}
                                    >
                                      <Text
                                        size={12}
                                        fontWeight={500}
                                        color={colors?.blackShade}
                                      >
                                        Download Invoice
                                      </Text>
                                    </div>
                                  </Col>
                                </div>
                              </Row>
                            </div>
                          </Col>
                          <Col
                            lg={6}
                            md={12}
                            sm={12}
                            className="d-flex justify-content-center my-1"
                          >
                            <div
                              role="button"
                              className={`${styles.borderStyleNewSmallBtn} py-2`}
                            >
                              <Row>
                                <div
                                  className={`d-flex align-items-center justify-content-center px-3`}
                                >
                                  <Col md={3} className="px-2 mx-0">
                                    <Image
                                      src="/icons/common-icon/redCrossIcon.svg"
                                      alt="stop-icon"
                                      width={15}
                                      height={15}
                                    />
                                  </Col>
                                  <Col md={9}>
                                    <div
                                      className={`d-flex align-items-center justify-content-start`}
                                    >
                                      <Text
                                        size={12}
                                        fontWeight={500}
                                        color={colors?.blackShade}
                                      >
                                        Cancel Invoice
                                      </Text>
                                    </div>
                                  </Col>
                                </div>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <div className="d-flex justify-content-end my-1">
                              <GradientBtn title='  Track Status' />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <div className="d-flex justify-content-end my-1">
                              <GradientBtn title='View Price Break' handleClick={() => {
                                handleShowEditOrderPriceBreakUp();
                              }} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default OrdersDetail;
