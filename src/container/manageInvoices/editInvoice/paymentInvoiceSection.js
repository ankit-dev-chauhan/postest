import React, { useState } from 'react';
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import Button from '../../../components/basic/button';
import Text from '../../../components/basic/text';
import { colors } from '../../../constants/colors';
import style from "../../../container/checkout/checkout.module.scss";
import styles from "./styles.module.scss";
const PaymentInvoice = (props) => {
    const {
        form,
        handleChange,
        HandleCashChange,
        swipeData,
        handlSwipeChange,
        setSwipeData,
        bankData,
        setBankData,
        handlBankTransferChange
    } = props;

    return (
        <div>
            <div className={`${style.ornageBorderDiv} overflow-auto`}>
                {form?.paymentMethod === 'cash' && <section className="pt-3 pb-5">
                    <div className="pt-4">
                        <Text
                            color={colors.black}
                            size={11}
                            fontWeight={700}
                            lineheight
                        >
                            ENTER NOTE / COIN QUANTITY
                        </Text>
                    </div>
                    <Row className="pt-4">
                        <Col md={6}>
                            <div className={`d-flex justify-content-evenly`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        2000 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="twoThousandNotes"
                                        value={form?.twoThousandNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        200 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="twoHundredNotes"
                                        value={form?.twoHundredNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        50 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfFiftyNotes"
                                        value={form?.noOfFiftyNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3 `}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        10 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfTenNotes"
                                        value={form?.noOfTenNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        2 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfTwoNotes"
                                        value={form?.noOfTwoNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={`d-flex justify-content-evenly`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        500 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfFiveHundredNotes"
                                        value={form?.noOfFiveHundredNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        100 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfHundredNotes"
                                        value={form?.noOfHundredNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        20 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfTwentyRupeeNotes"
                                        value={form?.noOfTwentyRupeeNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3 `}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        5 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfFiveRupeeNotes"
                                        value={form?.noOfFiveRupeeNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                            <div className={`d-flex justify-content-evenly pt-3`}>
                                <div>
                                    <Form.Check
                                        inline
                                        // label="Search By "
                                        name="group1"
                                        value="Search By"
                                        type="radio"
                                        className={`radioPayBtn`}
                                        id={`inline-radio-1`}
                                    />
                                </div>
                                <div>
                                    <Text
                                        color={colors.black}
                                        size={11}
                                        fontWeight={700}
                                        lineheight
                                    >
                                        1 X
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        min='0'
                                        name="noOfOneRupeeNotes"
                                        value={form?.noOfOneRupeeNotes}
                                        onChange={handleChange}
                                        placeholder='Enter'
                                        className={` numberInput text-center ${style.enterButton} ${styles.inputBoxForm} outline-0`} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>}
                {form?.paymentMethod === 'swipe' && <section className="pt-3 pb-5">
                    <Text
                        color={colors.black}
                        size={11}
                        fontWeight={700}
                        lineheight
                    >
                        SWIPE
                    </Text>
                    <Row className="pt-4">
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>AMOUNT</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`numberInput formInput`}
                                            type="number"
                                            name="amount"
                                            value={Number(swipeData[0]?.swipe?.amount)}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>CARD NUMBER</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`numberInput formInput`}
                                            type="number"
                                            name="cardNumber"
                                            value={swipeData[0]?.swipe?.cardNumber}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>CARD TYPE</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group
                                        className={`inputSelectBox`}
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Select
                                            name="cardType"
                                            value={swipeData[0]?.swipe?.cardType}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            className={`formInput`}
                                        >
                                            <option value="select">Select</option>
                                            <option value="online">Online</option>
                                            <option value="offline">Offline</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>RR NUMBER</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`formInput`}
                                            type="text"
                                            name="rrNumber"
                                            value={swipeData[0]?.swipe?.rrNumber}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>APPROVAL CODE</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`formInput`}
                                            type="text"
                                            name="approvalCode"
                                            value={swipeData[0]?.swipe?.approvalCode}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>COUNTRY</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`formInput`}
                                            type="text"
                                            name="country"
                                            value={swipeData[0]?.swipe?.country}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <Row>
                                <Col md={2}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>REMARKS</Text>
                                </Col>
                                <Col md={10} className='pe-5'>
                                    <Form.Group>
                                        <Form.Control
                                            className={`formInput`}
                                            type="text"
                                            name="remarks"
                                            value={swipeData[0]?.swipe?.remarks}
                                            onChange={(event) => handlSwipeChange(event, 0, 'swipe')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>}
                {form?.paymentMethod === 'bankTransfer' && <section className="pt-3 pb-5">
                    <Text
                        color={colors.black}
                        size={11}
                        fontWeight={700}
                        lineheight
                    >
                        SWIPE
                    </Text>
                    <Row className="pt-4">
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>AMOUNT</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`numberInput formInput`}
                                            type="number"
                                            name="amount"
                                            value={Number(bankData[0]?.bankDetails?.amount)}
                                            onChange={(event) => handlBankTransferChange(event, 0, 'bank')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>RR NUMBER</Text>
                                </Col>
                                <Col md={7}>
                                    <Form.Group>
                                        <Form.Control
                                            className={`formInput`}
                                            type="text"
                                            name="rrNumber"
                                            value={bankData[0]?.bank?.rrNumber}
                                            onChange={(event) => handlBankTransferChange(event, 0, 'bank')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="py-2 mt-3">
                        <Col>
                            <Row>
                                <Col md={2}>
                                    <Text size={11} fontWeight={700} color={colors?.black}>REMARKS</Text>
                                </Col>
                                <Col md={10} className='pe-5'>
                                    <Form.Group>
                                        <Form.Control
                                            className={`formInput`}
                                            type="text"
                                            name="remarks"
                                            value={bankData[0]?.bank?.remarks}
                                            onChange={(event) => handlBankTransferChange(event, 0, 'bank')}
                                            placeholder="Enter"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>}
            </div>
            <div className=" py-5 d-flex justify-content-end">
                <input
                    type='number'
                    min='0'
                    name="total"
                    value={form?.paymentMethod === 'cash' ? Number(HandleCashChange())?.toFixed(2) : form?.paymentMethod === 'swipe' ? Number(swipeData[0]?.swipe?.amount)?.toFixed(2) : form?.paymentMethod === 'bankTransfer' && Number(bankData[0]?.bankDetails?.amount)?.toFixed(2)}
                    placeholder='TOTAL AMOUNT'
                    className={`w-25 numberInput text-center ${styles.inputBoxForm} outline-0 p-3`}
                    readOnly='true' />
            </div>
        </div>
    )
}

export default PaymentInvoice