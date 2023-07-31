import React from "react";
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Button from "../../../components/basic/button";
import NewTitleHeader from "../../components/titleHeader/NewTitleHeader";
import Text from "../../../components/basic/text";
import { colors } from "../../../constants/colors";
import BreadcrumbText from "../../../components/basic/BreadcrumbText";
import { diamondIcon, goldCoinIcon, } from "../../home/searchProduct/image";
import { useManageInvoices } from "../hooks";
import Image from "next/image";
import { autogenId } from "../../../utils/helper/date";
import { hasValueInObject } from "../../../utils/helper";
import { toast } from "react-toastify";
import Form1Skeleton from "../../../skeleton/components/FormSkeleton/form1";
import GradientBtn from "../../../components/basic/button/gradientButton";
import { invoiceAniIcon } from "../../home/searchProduct/animatedIcons";

const EditInvoice = (props) => {
  const {
    setForm,
    handleCloseEditInvoice,
    errors,
    form,
    handleSubmit,
    handleChange,
    setTab,
    srNo,
    store,
    HandleUpdateInvoice,
    findFormErrors,
    handleProceedToPricingDetails
  } = props;


  return (
    <>{
      !diamondIcon ?
        <Form1Skeleton />
        :
        <div>
          <Container fluid>
            <Row>
              <Col md={12} className="mb-3">
                {/* <BreadcrumbText>
                  <Breadcrumb>
                    <Breadcrumb.Item>home</Breadcrumb.Item>
                    <Breadcrumb.Item>INVOICES</Breadcrumb.Item>
                    <Breadcrumb.Item>MANAGE INVOICES</Breadcrumb.Item>
                    <Breadcrumb.Item active>EDIT INVOICE</Breadcrumb.Item>
                  </Breadcrumb>
                </BreadcrumbText> */}
              </Col>
              <Col md={10} className="mb-3">
                <Row className="mt-3">
                  <Col md={8}>
                    <div
                      onClick={(e) => {
                        handleCloseEditInvoice();
                      }}
                      role="button"
                    >
                      <NewTitleHeader title={"EDIT INVOICE"} icon={goldCoinIcon} aniIcon={invoiceAniIcon} />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="d-flex mt-2">
                      <div></div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="mb-5">
              <Form>
                <Row>
                  <Col md={8} className="border-bottom mt-3">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={4}>
                            <Text size={9} fontWeight={700} color={colors?.black}>
                              SR NO
                            </Text>
                          </Col>
                          <Col md={8}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control
                                className={`numberInput ${styles.inputBoxForm}`}
                                type="text"
                                name="srNo"
                                value={form?.srNo ? form?.srNo : srNo}
                                onChange={handleChange}
                                style={{
                                  borderColor: errors?.title ? "red" : "#fd9149",
                                  borderWidth: 1,
                                }}
                                readOnly={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Row>
                      <Col md={6} className="border-bottom mt-3">
                        <Row>
                          <Col md={4} >
                            <Text size={9} fontWeight={700} color={colors?.black}>
                              INVOICE ID
                            </Text>
                          </Col>
                          <Col md={8} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control
                                className={styles.inputBoxForm}
                                type="text"
                                name="invoiceId"
                                placeholder={autogenId('invoiceid', form, form?.srNo ? form?.srNo : srNo, '')}
                                // value={autogenId('invoiceid',form,form?.srNo ? form?.srNo : srNo,'')}
                                onChange={handleChange}
                                style={{
                                  borderColor: errors?.title ? "red" : "#fd9149",
                                  borderWidth: 1,
                                }}
                                readOnly={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6} className="border-bottom mt-3">
                        <Row>
                          <Col md={4} >
                            <Text size={9} fontWeight={700} color={colors?.black}>
                              SALES PERSON
                              <Text size={9} color={colors?.red}>
                                *
                              </Text>
                            </Text>
                          </Col>
                          <Col md={8} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control
                                className={styles.inputBoxForm}
                                type="text"
                                name="salesPerson"
                                placeholder="Enter"
                                value={form?.salesPerson}
                                onChange={handleChange}
                                style={{
                                  borderColor: errors?.title ? "red" : "#fd9149",
                                  borderWidth: 1,
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </div>
            <Row>
              <Col md={12} className="mb-3">
                <Row className="mt-3">
                  <Col md={8}>
                    <div>
                      <NewTitleHeader onClick={(e) => {
                        handleCloseEditInvoice();
                      }} title={"ORDER DETAILS"} icon={goldCoinIcon} aniIcon={invoiceAniIcon} />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="d-flex mt-2">
                      <div></div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <div className="mb-5">
                  {
                    <Form>
                      <Row>
                        <Col md={12}>

                          <Row>
                            <Col md={6} className="border-bottom mt-3">
                              <Row>
                                <Col md={4} >
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    CERTIFICATION LAB<Text size={9} color={colors?.red}>*</Text>
                                  </Text>
                                </Col>
                                <Col md={8} >
                                  <Form.Group
                                    className={`mb-3 inputSelectBox`}
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Form.Select
                                      // closeMenuOnSelect={false}
                                      // isMulti
                                      value={form?.certificationLab}
                                      name={"certificationLab"}
                                      onChange={handleChange}
                                      className={clsx(styles.inputBox)}
                                    >
                                      <option value="">Select</option>
                                      <option value="IGI">IGI</option>
                                      <option value="SGL">SGL</option>
                                      <option value="GL">GL</option>

                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={6} className="border-bottom mt-3">
                              <Row>
                                <Col md={4} >
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    CERTIFICATION NUMBER
                                  </Text>
                                </Col>
                                <Col md={8} >
                                  {/* <Form.Group
                                className={`mb-3 inputSelectBox`}
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Select
                                  // closeMenuOnSelect={false}
                                  // isMulti
                                  value={form?.certificationNumber}
                                  name={"certificationNumber"}
                                  onChange={handleChange}
                                  className={clsx(styles.inputBox)}
                                >
                                  <option value="select">Select</option>
                                  <option value="9">9</option>
                                </Form.Select>
                              </Form.Group> */}

                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Control
                                      className={`numberInput ${styles.inputBoxForm}`}
                                      type="number"
                                      min='0'
                                      name="certificationNumber"
                                      value={form?.certificationNumber}
                                      placeholder='Enter'
                                      onChange={handleChange}
                                      style={{
                                        borderColor: errors?.title
                                          ? "red"
                                          : "#fd9149",
                                        borderWidth: 1,
                                      }}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6} className="mt-3">
                              <Row>
                                <Col md={4} >
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    ORDER REMARKS
                                  </Text>
                                </Col>
                                <Col md={8}>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      as="textarea"
                                      className={styles.height_enter}
                                      type="text"
                                      name={"orderRemark"}
                                      placeholder="Enter"
                                      value={form?.orderRemark}
                                      onChange={handleChange}
                                      style={{
                                        borderColor: errors?.title
                                          ? "red"
                                          : "#fd9149",
                                        borderWidth: 1,
                                      }}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>

                          </Row>
                        </Col>
                      </Row>
                    </Form>

                  }

                </div>
                <Row>
                  <Col md={12} className="mb-3">
                    <Row className="mt-3">
                      <Col md={8}>
                        <div>
                          <NewTitleHeader
                            onClick={(e) => {
                              handleCloseEditInvoice();
                            }}
                            title={"SOLITIARE"} icon={diamondIcon} aniIcon={invoiceAniIcon} />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="d-flex mt-2">
                          <div></div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="mb-5">
                  <Form>
                    <Row>
                      <Col md={12} className="border-bottom mt-3">
                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  SOLITAIRE STOCK NO
                                </Text>
                              </Col>
                              <Col md={8}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Control
                                    className={styles.inputBoxForm}
                                    type="text"
                                    name="solitaireStockNo"
                                    placeholder="Enter"
                                    value={form?.solitaireStockNo}
                                    onChange={handleChange}
                                    style={{
                                      borderColor: errors?.title
                                        ? "red"
                                        : "#fd9149",
                                      borderWidth: 1,
                                    }}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Row>
                          <Col md={6} className="border-bottom mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  CERTIFICATION LAB
                                </Text>
                              </Col>
                              <Col md={8} >
                                <Form.Group
                                  className={`mb-3 inputSelectBox`}
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Select
                                    // closeMenuOnSelect={false}
                                    // isMulti
                                    value={form?.solitaireCertificationLab}
                                    name="solitaireCertificationLab"
                                    options={""}
                                    onChange={handleChange}
                                    className={clsx(styles.inputBox)}
                                  >
                                    <option value="select">Select</option>
                                    <option value="IGI">IGI</option>
                                    <option value="SGL">SGL</option>
                                    <option value="GL">GL</option>

                                  </Form.Select>
                                </Form.Group> 
                              </Col>
                            </Row>
                          </Col>
                          <Col md={6} className="border-bottom mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  SIZE
                                </Text>
                              </Col>
                              <Col md={8} >
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Control
                                    className={styles.inputBoxForm}
                                    type="text"
                                    name="solitaireSize"
                                    value={form?.solitaireSize}
                                    onChange={handleChange}
                                    style={{
                                      borderColor: errors?.title
                                        ? "red"
                                        : "#fd9149",
                                      borderWidth: 1,
                                    }}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} className="border-bottom mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  CARAT
                                </Text>
                              </Col>
                              <Col md={8} >
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Control
                                    className={styles.inputBoxForm}
                                    type="text"
                                    name="solitaireCarat"
                                    placeholder="Enter"
                                    value={form?.solitaireCarat}
                                    onChange={handleChange}
                                    style={{
                                      borderColor: errors?.title
                                        ? "red"
                                        : "#fd9149",
                                      borderWidth: 1,
                                    }}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                          <Col md={6} className="border-bottom mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  CUT
                                </Text>
                              </Col>
                              <Col md={8} >
                                <Form.Group
                                  className={`mb-3 inputSelectBox`}
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Select
                                    // closeMenuOnSelect={false}
                                    // isMulti
                                    value={form?.solitaireCut}
                                    name="solitaireCut"
                                    options={""}
                                    onChange={handleChange}
                                    className={clsx(styles.inputBox)}
                                  >
                                    <option>Select</option>
                                    <option value="fair">Fair</option>
                                    <option value="good">Good</option>
                                    <option value="very good">Very Good</option>
                                    <option value="excellent">Excellent</option>
                                    <option value="ideal">Ideal</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} className="border-bottom mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  SHAPE
                                </Text>
                              </Col>
                              <Col md={8} >
                                <Form.Group
                                  className={`mb-3 inputSelectBox`}
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Select
                                    // closeMenuOnSelect={false}
                                    // isMulti
                                    value={form?.solitaireShape}
                                    name="solitaireShape"
                                    options={""}
                                    onChange={handleChange}
                                    className={clsx(styles.inputBox)}
                                  >
                                    <option>Select</option>
                                    <option value="round brilliant cut">Round Brilliant Cut</option>
                                    <option value="pear cut">Pear Cut</option>
                                    <option value="heart cut">Heart Cut</option>
                                    <option value="princess">Princess</option>
                                    <option value="Asscher">Asscher</option>
                                    <option value="marquisse">Marquisse</option>
                                    <option value="oval">Oval</option>
                                    <option value="emreald">Emreald</option>
                                    <option value="radiant">Radiant</option>
                                    <option value="cushion">Cushion</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                          <Col md={6} className="border-bottom mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  COLOR
                                </Text>
                              </Col>
                              <Col md={8} >
                                <Form.Group
                                  className={`mb-3 inputSelectBox`}
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Select
                                    // closeMenuOnSelect={false}
                                    // isMulti
                                    value={form?.solitaireColor}
                                    name="solitaireColor"
                                    options={""}
                                    onChange={handleChange}
                                    className={clsx(styles.inputBox)}
                                  >
                                    <option>Select</option>
                                    <option value="d">D</option>
                                    <option value="e">E</option>
                                    <option value="f">F</option>
                                    <option value="g">G</option>
                                    <option value="h">H</option>
                                    <option value="i">I</option>
                                    <option value="j">J</option>
                                    <option value="k">K</option>
                                    <option value="l">L</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} className=" mt-3">
                            <Row>
                              <Col md={4} >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.black}
                                >
                                  {/* COLOR<Text size={9} color={colors?.red}>*</Text> */}
                                </Text>
                              </Col>
                              <Col md={8} ></Col>
                            </Row>
                          </Col>
                          <Col md={6} className=" mt-3">
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className='p-5 center'>
                  <GradientBtn title='NEXT' handleClick={() => { handleProceedToPricingDetails() }} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    }
    </>
  );
};

export default EditInvoice;
