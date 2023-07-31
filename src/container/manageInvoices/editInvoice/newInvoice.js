import React, { useEffect, useState } from "react";
import { Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Image from "next/image";
import moment from "moment";
import Button from "../../../components/basic/button";
import NewTitleHeader from "../../components/titleHeader/NewTitleHeader";
import Text from "../../../components/basic/text";
import { colors } from "../../../constants/colors";
import { goldCoinIcon, greenTick, plusGreenIcon, profileIcon } from "../../home/searchProduct/image";
import { useManageInvoices } from "../hooks";
import { autogenId } from "../../../utils/helper/date";
import PaymentInvoice from "./paymentInvoiceSection";
import NewCalender from "../../components/calender";
import EditViewpriceSkeleton from "../../../skeleton/invoiceSkeleton/manageInvoiceSkt/editViewprice";
import GradientBtn from "../../../components/basic/button/gradientButton";
import { invoiceAniIcon } from "../../home/searchProduct/animatedIcons";
import _ from "lodash";

const NewInvoiceForm = (props) => {
    const {
        srNo,
        store,
        setTab,
        setForm,
        form,
        user,
        productIds,
        handleChange,
        HandleSubmit,
        handleCloseEditInvoice,
        HandleUpdateInvoice,
        verifyCoupon,
        addressArray,
        findFormErrors,
        handleProceedToPricingDetails,
        fetchUserByNumber,
        HandlefetchUserByNumber,
        invoiceData,
        AddMoreProductPrice,
        RemoveProductPrice,
        handleDeliveryAddressChange,
        setDeliveryAddressArray,
        deliveryAddressArray,
    } = props;
    const [showCustomerDetail, setShowCustomerDetail] = useState(false);
    const closeCustomerDetailModal = () => setShowCustomerDetail(false);
    const showCustomerDetailModal = () => setShowCustomerDetail(true);

    const [showCustomerDeliveryModal, setShowCustomerDeliveryModal] = useState(false);
    const closeCustomerDeliveryAddressModal = () => setShowCustomerDeliveryModal(false);
    const showCustomerDeliveryAddressModal = () => setShowCustomerDeliveryModal(true);

    useEffect(() => {
        setForm({
            ...form,
            srNo: form?.srNo ? form?.srNo : srNo,
            invoiceId: autogenId('invoiceid', form, form?.srNo ? form?.srNo : srNo, '')
        })
    }, [form?.store])
    useEffect(() => {
        if (user?.length > 0) {
            if (user[0]?.address?.length > 0) {
                setAddressArray([{
                    shippingAddress: {
                        ...user[0]?.address[0]?.shippingAddress,
                        phone: addressArray[0]?.shippingAddress?.phone,
                        pincode: addressArray[0]?.shippingAddress?.pincode || user[0]?.address[0]?.shippingAddress?.pincode
                    }
                }])
            } else {
                setAddressArray(addressArray)
            }
        }
    }, [user])
    const handleSetCompanyAddress = (storeId) => {
        let storeD = _.find(store, { storeId });
        setForm({
            ...form,
            companyAddress: `${storeD?.street}, ${storeD?.city}, ${storeD?.state}, ${storeD?.country}, ${storeD?.pincode}`,
        })
    }
    return (
        <div>
            <Row className="mt-5">
                <Col md={12}>
                    <Row>
                        <Col md={5}>
                            <div onClick={() => setTab('ENTER DETAIL')} role='button' >
                                <NewTitleHeader
                                    title={"EDIT / VIEW PRICE UP "}
                                    icon={profileIcon}
                                    aniIcon={invoiceAniIcon}
                                />
                            </div>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6} className="text-md-end mt-3 mt-md-0">
                                            <Text
                                                size={9}
                                                fontWeight={700}
                                                color={colors?.black}
                                            >
                                                INVOICE ID
                                            </Text>
                                        </Col>
                                        <Col md={6} className=" ">
                                            <Form.Group>
                                                <Form.Control
                                                    className={styles.inputBoxForm}
                                                    type="text"
                                                    name="invoiceId"
                                                    value={form?.invoiceId}
                                                    disabled
                                                    readOnly={true}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6} className="text-md-end">
                                            <Text
                                                size={9}
                                                fontWeight={700}
                                                color={colors?.black}
                                            >
                                                STORE<Text size={9} color={colors?.red}>*</Text>
                                            </Text>
                                        </Col>
                                        <Col md={6} className=" ">
                                            <Form.Group
                                                className={`mb-3 inputSelectBox`}
                                                controlId="exampleForm.ControlInput1"
                                            >
                                                <Form.Select
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    value={form?.storeId}
                                                    name="storeId"
                                                    onChange={(e) => {
                                                        handleChange(e)
                                                    }}
                                                    onClick={(e) => handleSetCompanyAddress(e.target.value)}
                                                    className={clsx(styles.inputBox)}
                                                >
                                                    <option value="">Select</option>
                                                    {
                                                        store?.[0] && store?.map((str, key) => {
                                                            return (
                                                                <option key={key} value={str?.storeId}>{str?.storeId}</option>
                                                            )
                                                        })
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="my-5">
                <Form>
                    <Row>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        CUSTOMER BILLING ADDRESS<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className="d-flex align-items-center">
                                    <Form.Group>
                                        <Form.Control
                                            className={`${styles.inputBoxForm}`}
                                            type="text"
                                            name="customershippingAddresss"
                                            value={addressArray?.length > 0 && addressArray[0]?.shippingAddress?.receipentName}
                                            onClick={showCustomerDetailModal}
                                            readOnly="true"
                                        />
                                    </Form.Group>
                                    <div role="button" className={`ps-2`} onClick={showCustomerDetailModal}>
                                        <Image
                                            src={plusGreenIcon}
                                            role="button"
                                            alt="bar-code"
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        INVOICE DATE<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6}>
                                    <NewCalender
                                        name="invoiceDate"
                                        value={form?.invoiceDate}
                                        onChange={handleChange}
                                        className={`${styles.inputBoxFromToDate}`}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="text-md-end">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        SALE TYPE<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className=" ">
                                    <Form.Group
                                        className={`mb-3 inputSelectBox`}
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Select
                                            closeMenuOnSelect={false}
                                            isMulti
                                            value={form?.saleType}
                                            name="saleType"
                                            options={""}
                                            onChange={handleChange}
                                            className={`text-uppercase ${clsx(styles.inputBox)}`}
                                        >
                                            <option value="jewelleryState">{form?.saleType ? form?.saleType : `Select`}</option>
                                            <option value="diamState">DIAM STATE</option>
                                            <option value="diamIndia">DIAM INDIA</option>
                                            <option value="jewelleryState">JEWELLERY STATE</option>
                                            <option value="jewelleryIndia">JEWELLERY INDIA</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        CUSTOMER DELIVERY ADDRESS<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className="d-flex align-items-center">
                                    <Form.Group>
                                        <Form.Control
                                            className={`${styles.inputBoxForm}`}
                                            type="text"
                                            name="customerDeliveryAddresss"
                                            value={deliveryAddressArray?.length > 0 && deliveryAddressArray[0]?.shippingAddress?.receipentName}
                                            onClick={showCustomerDeliveryAddressModal}
                                            readOnly="true"
                                        />
                                    </Form.Group>
                                    <div role="button" className={`ps-2`} onClick={showCustomerDeliveryAddressModal}>
                                        <Image
                                            src={plusGreenIcon}
                                            role="button"
                                            alt="bar-code"
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        ORDER ID / DATE<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <NewCalender
                                            className={`${styles.inputBoxForm}`}
                                            name="orderDate"
                                            value={form?.orderDate}
                                            onChange={handleChange}
                                        />
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="text-md-end">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        COMPANY ADDRESS<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className=" ">
                                    <Form.Group>
                                        <Form.Control
                                            className={`${styles.inputBoxForm}`}
                                            type="text"
                                            name="companyAddress"
                                            value={form?.companyAddress}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        DELIVERY BY<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className=" ">
                                    <Form.Group className={`mb-3 inputSelectBox`} controlId="exampleForm.ControlInput1">
                                        <Form.Select
                                            closeMenuOnSelect={false}
                                            isMulti
                                            value={form?.deliveryBy}
                                            name="deliveryBy"
                                            options={""}
                                            onChange={handleChange}
                                            className={`text-uppercase ${clsx(styles.inputBox)}`}
                                        >
                                            <option value="">Select</option>
                                            <option value="Hand to hand">Hand to hand</option>
                                            <option value="Logistics">Logistics</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        DISPATCH DOC NO<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className=" ">
                                    <Form.Group
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            className={styles.inputBoxForm}
                                            type="text"
                                            name="dispatchDocNo"
                                            value={form?.dispatchDocNo}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className='my-2'>
                            <Row>
                                <Col md={6} className="text-md-end">
                                    <Text
                                        size={9}
                                        fontWeight={700}
                                        color={colors?.black}
                                    >
                                        DISPATCH THROUGH<Text size={9} color={colors?.red}>*</Text>
                                    </Text>
                                </Col>
                                <Col md={6} className=" ">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            className={styles.inputBoxForm}
                                            type="text"
                                            name="dispatchThrough"
                                            value={form?.dispatchThrough}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default NewInvoiceForm;