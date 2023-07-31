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
import { toast } from "react-toastify";

const AddInvoice = (props) => {
  const {
    custom,
    setCustom,

    handleCloseEditInvoice,
    invoiceId,
    errors,
    form,
    HandleSubmit,
    handleChange,
    setTab,
    searchname,
    isLoading,
    searchFilter,
    fetchProductbyid,
    srNo,
    store,
    setForm,
    HandleUpdateInvoice,
    PriceArray,
    priceState,
    setPriceState,
    handlePriceChange,
    handleGetGrossPrice,
    GetNetPrice,
    GetDiamondPrice,
    GetStonePrice,
    GetSolitaireOnePrice,
    GetSolitaireTwoPrice,
    handleGetGrandTotal,
    verifyCoupon,
    showOtpInput,
    setShowOtpInput,
    addressArray,
    handleEmployeeChange,
    Wallet,
    handleGetOtpButton,
    verifyOtp,

    HandleCashChange,
    swipeData,
    handlSwipeChange,
    setSwipeData,
    bankData,
    setBankData,
    handlBankTransferChange,

    advancePay,
    setAdvancePay,
    handleAdvancePaymentChange,
    GetAdvanceTotal,
    lessAdvancePaidArr,
    fetchUserByNumber,
    HandlefetchUserByNumber,
    setAddressArray,
    user,
    handleGetMakingPrice,
    AddMoreProductPrice,
    RemoveProductPrice,
    newPriceState,
    isVerifiedOtp,
    setIsVerifiedOtp,
    setOtpMessage,
    otpMessage,
    handleDeliveryAddressChange,
    setDeliveryAddressArray,
    deliveryAddressArray,
    PostOffice,
    GetStorePincodeAddress
  } = props;
  const [openAdvanceSection, setOpenAdvanceSection] = useState(false)
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
    if (storeId !== '') {
      let storeD = _.find(store, { storeId });
      setForm({
        ...form,
        companyAddress: `${storeD?.street}, ${storeD?.city}, ${storeD?.state}, ${storeD?.country}, ${storeD?.pincode}`,
      })
    } else {
      setForm({
        ...form,
        companyAddress: ``,
      })

    }
  }
  const handleFocus = (e) => {
    e.target.select()
  }
  return (
    <>{
      !goldCoinIcon ?
        <EditViewpriceSkeleton />
        :
        <div>
          <Container fluid>
            <div className='mt-5'>
              <Row>
                <Col md={12} className="my-3">
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
                        <Col md={6} className='my-2'>
                          <Row>
                            <Col md={6} >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.black}
                              >
                                INVOICE ID
                              </Text>
                            </Col>
                            <Col md={6} className=" ">
                              <Form.Group
                                className="mb-3"
                              >
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="invoiceId"
                                  value={form?.invoiceId}
                                  disabled
                                  style={{
                                    borderColor: errors?.title
                                      ? "red"
                                      : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                  readOnly={true}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className='my-2'>
                          <Row>
                            <Col md={6} >
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
              <div>
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
                        <Col md={6} >
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
                          <Text size={9} fontWeight={700} color={colors?.black}>
                            ORDER ID / DATE<Text size={9} color={colors?.red}>*</Text>
                          </Text>
                        </Col>
                        <Col md={6}>
                          <div>
                            <NewCalender className={`${styles.inputBoxForm}`} name="orderDate"
                              value={form?.orderDate}
                              onChange={handleChange}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={4} className='my-2'>
                      <Row>
                        <Col md={6} >
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
                          <Form.Group className={`mb-3 inputSelectBox`} >
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
                        <Col md={6} >
                          <Text
                            size={9}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            DISPATCH THROUGH<Text size={9} color={colors?.red}>*</Text>
                          </Text>
                        </Col>
                        <Col md={6} className=" ">
                          <Form.Group className={`mb-3 inputSelectBox`} >
                            <Form.Select
                              closeMenuOnSelect={false}
                              isMulti
                              value={form?.dispatchThrough}
                              name="dispatchThrough"
                              options={""}
                              onChange={handleChange}
                              className={`text-uppercase ${clsx(styles.inputBox)}`}
                            >
                              <option value="">Select</option>
                              <option value="OUTLET">OUTLET</option>
                              <option value="BLUEDART">BLUEDART</option>
                              <option value="CRITICALOG">CRITICALOG</option>
                              <option value="DELHIVERY">DELHIVERY</option>
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
                  </Row>
                </Form>
              </div>
            </div>
            {console.log(custom, 'custom custom')}
            {
              priceState?.length > 0 && priceState?.map((priceArr, key) => {
                return (
                  <>
                    <Row className="my-3">
                      <Col md={5}>
                        <div onClick={() => setTab('ENTER DETAIL')} role='button' >
                          <NewTitleHeader
                            title={`PRODUCT DETAIL - ${key + 1}`}
                            icon={profileIcon}
                            aniIcon={invoiceAniIcon}
                          />
                        </div>
                      </Col>
                    </Row>
                    <section className={`${styles.priceDiv}`}>
                      <Row>
                        <Col md="12">
                          <Row>
                            <Col md="4">
                              <div className={`d-flex justify-content-between`}>
                                <div>
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    DESIGN NUMBER
                                  </Text>
                                </div>
                                <div>
                                  <input
                                    className={`${styles.inputBox} border-0`}
                                    type='text'
                                    name={"designNo"}
                                    placeholder="Enter"
                                    // value={searchname}
                                    onBlur={(e) => fetchProductbyid(e, key, form?.designNo)}
                                    value={form?.designNo}
                                    onChange={(e) => handlePriceChange(e, key, 'designNo')}
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col md="4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Text
                                      size={9}
                                      fontWeight={700}
                                      color={colors?.black}
                                    >
                                      KAROT
                                    </Text>
                                  </div>
                                </Col>
                                <Col md="6">
                                  <Form.Group className={`mb-3 inputSelectBox`} >
                                    <Form.Select
                                      closeMenuOnSelect={false}
                                      isMulti
                                      name="karot"
                                      value={priceArr?.karot}
                                      onChange={(e) => handlePriceChange(e, key, 'karot')}
                                      className={`text-uppercase ${clsx(styles.inputBox)}`}
                                    >
                                      <option value="">Select</option>
                                      {
                                        custom[key]?.caratColor?.length > 0 && custom[key]?.caratColor?.map((color, index) => {
                                          return (
                                            <option index={index} value={color}>{color}</option>
                                          )
                                        })
                                      }
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                            <Col md="4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Text size={9} fontWeight={700} color={colors?.black}>
                                      DIAMOND COLOUR / . CLARITY
                                    </Text>
                                  </div>
                                </Col>
                                <Col md="6">
                                  <Form.Group className={`mb-3 inputSelectBox`} >
                                    <Form.Select
                                      closeMenuOnSelect={false}
                                      isMulti
                                      name="diamondColor"
                                      value={priceArr?.diamondColor}
                                      onChange={(e) => handlePriceChange(e, key, 'diamondColor')}
                                      className={`text-uppercase ${clsx(styles.inputBox)}`}
                                    >
                                      <option value="">Select</option>
                                      <option value="IJ-SI">IJ-SI</option>
                                      <option value="GH-VS/SI">GH-VS/SI</option>
                                      <option value="GH-VVS">GH-VVS</option>
                                      <option value="EF-VVS">EF-VVS</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <Row>
                            <Col md="4">
                              <div className={`d-flex justify-content-between`}>
                                <div>
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    HSN CODE*
                                  </Text>
                                </div>
                                <div>
                                  <input
                                    className={`${styles.inputBox} border-0`}
                                    type='text'
                                    placeholder="Enter"
                                    name="hsnCode"
                                    value={priceArr?.hsnCode}
                                    onChange={(e) => handlePriceChange(e, key, 'hsnCode')}
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col md="4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Text
                                      size={9}
                                      fontWeight={700}
                                      color={colors?.black}
                                    >
                                      PRODUCT TYPE
                                    </Text>
                                  </div>
                                </Col>
                                <Col md="6">
                                  {/* <div className='simpleText addDisable'>
                                    {form?.product?.productType}
                                  </div> */}
                                  <div>
                                    <input
                                      className={`${styles.inputBox} border-0`}
                                      type='text'
                                      placeholder="Enter"
                                      name="productType"
                                      value={priceArr?.productType}
                                      onChange={(e) => handlePriceChange(e, key, 'productType')}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col md="4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Text size={9} fontWeight={700} color={colors?.black}>
                                      SIZE
                                    </Text>
                                  </div>
                                </Col>
                                <Col md="6">
                                  <Form.Group className={`mb-3 inputSelectBox`} >
                                    <Form.Select
                                      closeMenuOnSelect={false}
                                      isMulti
                                      name="size"
                                      value={form?.size}
                                      onChange={handleChange}
                                      className={`text-uppercase ${clsx(styles.inputBox)}`}
                                    >
                                      <option value="">Select</option>
                                      {
                                        custom[key]?.sizes?.length > 0 && custom[key]?.sizes[0]?.map((item, index) => {
                                          return (
                                            <option index={index} selected={item?.size === "12" ? true : false} value={item?.size}>{`${item?.size}`}</option>
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
                      <Row>
                        <Col md="12">
                          <Row>
                            <Col md="4">
                              <div className={`d-flex justify-content-between`}>
                                <div>
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    ORDER ID
                                  </Text>
                                </div>
                                <div>
                                  <input
                                    className={`${styles.inputBox} border-0`}
                                    type='text'
                                    name="orderId"
                                    placeholder="Enter"
                                    value={priceArr?.orderId}
                                    onChange={(e) => handlePriceChange(e, key, 'orderId')}
                                  />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className={`justify-content-end`}>
                        <Col md="6">
                          <Row className={` justify-content-end`}>
                            <Col md="12">
                              <div className={`checkout-checkbox`} >
                                <Form.Check
                                  style={{ fontSize: "11px", fontWeight: "500 !important" }}
                                  inline
                                  label="DIAM"
                                  name="isDiamondCheck"
                                  type="checkbox"
                                  checked={priceArr?.isDiamondCheck}
                                  onChange={(e) => handlePriceChange(e, key, 'isDiamondCheck')}
                                />
                                <Form.Check
                                  style={{ fontSize: "11px", fontWeight: "500 !important" }}
                                  type="checkbox"
                                  inline
                                  label="DISCOUNT"
                                  name="isDiscountCheck"
                                  checked={priceArr?.isDiscountCheck}
                                  onChange={(e) => handlePriceChange(e, key, 'isDiscountCheck')}
                                />
                                <Form.Check
                                  style={{ fontSize: "11px", fontWeight: "500 !important" }}
                                  type="checkbox"
                                  inline
                                  label="STONE"
                                  name="isStone"
                                  checked={priceArr?.isStone}
                                  onChange={(e) => handlePriceChange(e, key, 'isStone')}
                                />
                                <Form.Check
                                  style={{ fontSize: "11px", fontWeight: "500 !important" }}
                                  type="checkbox"
                                  inline
                                  label="SOLITAIRE"
                                  name="isSolitaireCheck"
                                  checked={priceArr?.isSolitaireCheck}
                                  onChange={(e) => handlePriceChange(e, key, 'isSolitaireCheck')}
                                />
                                <Form.Check
                                  style={{ fontSize: "11px", fontWeight: "500 !important" }}
                                  type="checkbox"
                                  inline
                                  label="PREMIUM PRICE"
                                  name="isPremiumPriceCheck"
                                  checked={priceArr?.isPremiumPriceCheck}
                                  onChange={(e) => handlePriceChange(e, key, 'isPremiumPriceCheck')}
                                />
                                <Form.Check
                                  style={{ fontSize: "11px", fontWeight: "500 !important" }}
                                  type="checkbox"
                                  inline
                                  label="PROMO CODE"
                                  name="isPromocodeCheck"
                                  checked={priceArr?.isPromocodeCheck}
                                  onChange={(e) => handlePriceChange(e, key, 'isPromocodeCheck')}
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <div>
                        <Table>
                          <thead>
                            <tr className={`bg-light`}>
                              <th>
                                <Text size={10} fontWeight={700} color={colors?.black}>DESCRIPTIONS</Text>
                              </th>
                              <th>
                                <Text size={10} fontWeight={700} color={colors?.black}>WEIGHT</Text>
                              </th>
                              <th>
                                <Text size={10} fontWeight={700} color={colors?.black}>PRICE-GM/CT </Text>
                              </th>
                              <th>
                                <Text size={10} fontWeight={700} color={colors?.black}>PRICE</Text>
                              </th>
                              {priceArr?.isDiscountCheck &&
                                <th>
                                  <Text size={10} fontWeight={700} color={colors?.black}>DISC IN PERC</Text>
                                </th>
                              }
                              {priceArr?.isDiscountCheck &&
                                <th>
                                  <Text size={10} fontWeight={700} color={colors?.black}>DISC AMOUNT</Text>
                                </th>
                              }
                              <th>
                                <Text size={10} fontWeight={700} color={colors?.black}> AMOUNT</Text>
                              </th>
                            </tr>
                          </thead>
                          <tbody className={`${styles.tbodyChild}`}>
                            <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>GROSS WEIGHT</Text>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  name="grossPriceCt"
                                  placeholder="Enter"
                                  value={priceArr?.grossPriceCt}
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  name="grossWeight"
                                  placeholder="Enter"
                                  // value={priceArr?.grossWeight}
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  name="grossWeight"
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} readOnly="true" />
                              </td>
                              {priceArr?.isDiscountCheck &&
                                <td>
                                  <input
                                    type='text'
                                    name="grossWeight"
                                    placeholder="Enter"
                                    // value={priceArr?.grossWeight}
                                    onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} readOnly="true" />
                                </td>}
                              {priceArr?.isDiscountCheck &&
                                <td>
                                  <input
                                    type='text'
                                    name="grossWeight"
                                    // value={priceArr?.grossWeight}
                                    onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} readOnly="true" />
                                </td>}
                              <td>
                                <input
                                  type='text'
                                  name="grossWeight"
                                  // value={priceArr?.grossWeight}
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} readOnly="true" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>NET WEIGHT</Text>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  name="netWeight"
                                  placeholder="Enter"
                                  value={priceArr?.netWeight ? priceArr?.netWeight : ''}
                                  onChange={(e) => handlePriceChange(e, key, 'net_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  placeholder="Enter"
                                  name="netPriceCt"
                                  value={priceArr?.netPriceCt ? priceArr?.netPriceCt : ''}
                                  onChange={(e) => handlePriceChange(e, key, 'net_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />

                              </td>
                              <td>
                                <div className={`simpleText addDisable`}>
                                  {(GetNetPrice('netPrice', key))?.toFixed(2)}
                                </div>
                              </td>
                              {
                                priceArr?.isDiscountCheck &&
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="netDiscInPerc"
                                    value={priceArr?.netDiscInPerc ? priceArr?.netDiscInPerc : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'net_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                              }
                              {priceArr?.isDiscountCheck &&
                                <td>
                                  <div className={`simpleText addDisable`}>
                                    {(GetNetPrice('netDiscAmt', key))?.toFixed(2)}
                                  </div>
                                </td>
                              }
                              <td>
                                <div className={`simpleText addDisable`}>
                                  {(GetNetPrice('netTotalAmt', key))?.toFixed(2)}
                                </div>
                              </td>
                            </tr>
                            {
                              priceArr?.isDiamondCheck &&
                              <tr>
                                <td>
                                  <Text size={10} fontWeight={700} color={colors?.black}>DIAM WEIGHT</Text>
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="diamond"
                                    value={priceArr?.diamond ? priceArr?.diamond : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'diamond_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="diamPriceCt"
                                    value={priceArr?.diamPriceCt ? priceArr?.diamPriceCt : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'diamond_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetDiamondPrice('diamPrice', key))?.toFixed(2)}
                                  </div>
                                </td>
                                {priceArr?.isDiscountCheck &&
                                  <td>
                                    <input
                                      type='text'
                                      placeholder="Enter"
                                      name="diamDiscInPerc"
                                      value={priceArr?.diamDiscInPerc ? priceArr?.diamDiscInPerc : ''}
                                      onChange={(e) => handlePriceChange(e, key, 'diamond_weight')}
                                      className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                  </td>}
                                {priceArr?.isDiscountCheck &&
                                  <td>
                                    <div className="simpleText addDisable">
                                      {(GetDiamondPrice('diamDiscAmt', key))?.toFixed(2)}
                                    </div>
                                  </td>
                                }
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetDiamondPrice('diamTotalAmt', key))?.toFixed(2)}
                                  </div>
                                </td>
                              </tr>
                            }
                            {priceArr?.isStone &&
                              <tr>
                                <td>
                                  <Text size={10} fontWeight={700} color={colors?.black}>STONE WEIGHT</Text>
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="stoneWeight"
                                    value={priceArr?.stoneWeight ? priceArr?.stoneWeight : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'stone_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="stonePriceCt"
                                    value={priceArr?.stonePriceCt ? priceArr?.stonePriceCt : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'stone_weight')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetStonePrice('stonePrice', key))?.toFixed(2)}
                                  </div>
                                </td>
                                {priceArr?.isDiscountCheck &&
                                  <td>
                                    <input
                                      type='text'
                                      placeholder="Enter"
                                      name="stoneDiscInPerc"
                                      onFocus={handleFocus}
                                      value={priceArr?.stoneDiscInPerc ? priceArr?.stoneDiscInPerc : ''}
                                      onChange={(e) => handlePriceChange(e, key, 'stone_weight')}
                                      className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                  </td>
                                }
                                {priceArr?.isDiscountCheck &&
                                  <td>
                                    <div className="simpleText addDisable">
                                      {(GetStonePrice('stoneDiscAmt', key))?.toFixed(2)}
                                    </div>
                                  </td>
                                }
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetStonePrice('stoneTotalAmt', key))?.toFixed(2)}
                                  </div>
                                </td>
                              </tr>
                            }
                            <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>MAKING CHARGES</Text>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  placeholder="Enter"
                                  name="makingChargeWt"
                                  value={priceArr?.makingChargeWt ? priceArr?.makingChargeWt : ''}
                                  onChange={(e) => handlePriceChange(e, key, 'making_charge')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  placeholder="Enter"
                                  name="makingChargePriceCt"
                                  value={priceArr?.makingChargePriceCt ? priceArr?.makingChargePriceCt : ''}
                                  onChange={(e) => handlePriceChange(e, key, 'making_charge')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                              <td>
                                <div className="simpleText addDisable">
                                  {(handleGetMakingPrice('makingChargePrice', key))?.toFixed(2)}
                                </div>
                              </td>
                              {priceArr?.isDiscountCheck &&
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="makingChargeDiscInPerc"
                                    value={priceArr?.makingChargeDiscInPerc ? priceArr?.makingChargeDiscInPerc : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'making_charge')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                              }
                              {priceArr?.isDiscountCheck &&
                                <td>
                                  <div className="simpleText addDisable">
                                    {(handleGetMakingPrice('makingChargeDiscAmt', key))?.toFixed(2)}
                                  </div>
                                </td>
                              }
                              <td>
                                <div className="simpleText addDisable">
                                  {(handleGetMakingPrice('makingChargeTotalAmt', key))?.toFixed(2)}
                                </div>
                              </td>
                            </tr>
                            {
                              priceArr?.isSolitaireCheck &&
                              <tr>
                                <td>
                                  <Text size={10} fontWeight={700} color={colors?.black}>SOLITAIRE 1</Text>
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="solitaire1Weight"
                                    value={priceArr?.solitaire1Weight ? priceArr?.solitaire1Weight : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'solitaireOne')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="solitaire1PriceCt"
                                    value={priceArr?.solitaire1PriceCt ? priceArr?.solitaire1PriceCt : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'solitaireOne')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetSolitaireOnePrice('solitaire1Price', key))?.toFixed(2)}
                                  </div>
                                </td>
                                {
                                  priceArr?.isDiscountCheck &&
                                  <>
                                    <td>
                                      <input
                                        type='text'
                                        placeholder="Enter"
                                        name="solitaire1DiscInPerc"
                                        value={priceArr?.solitaire1DiscInPerc ? priceArr?.solitaire1DiscInPerc : ''}
                                        onChange={(e) => handlePriceChange(e, key, 'solitaireOne')}
                                        className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                    </td>
                                    <td>
                                      <div className="simpleText addDisable">
                                        {(GetSolitaireOnePrice('solitaire1DiscAmt', key))?.toFixed(2)}
                                      </div>
                                    </td>
                                  </>
                                }
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetSolitaireOnePrice('solitaire1TotalAmt', key))?.toFixed(2)}
                                  </div>
                                </td>
                              </tr>
                            }
                            {
                              priceArr?.isSolitaireCheck &&
                              <tr>
                                <td>
                                  <Text size={10} fontWeight={700} color={colors?.black}>SOLITAIRE 2</Text>
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="solitaire2Weight"
                                    value={priceArr?.solitaire2Weight ? priceArr?.solitaire2Weight : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'solitaireTwo')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="solitaire2PriceCt"
                                    value={priceArr?.solitaire2PriceCt ? priceArr?.solitaire2PriceCt : ''}
                                    onChange={(e) => handlePriceChange(e, key, 'solitaireTwo')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetSolitaireTwoPrice('solitaire2Price', key))?.toFixed(2)}
                                  </div>
                                </td>
                                {
                                  priceArr?.isDiscountCheck &&
                                  <>
                                    <td>
                                      <input
                                        type='text'
                                        placeholder="Enter"
                                        name="solitaire2DiscInPerc"
                                        value={priceArr?.solitaire2DiscInPerc ? priceArr?.solitaire2DiscInPerc : ''}
                                        onChange={(e) => handlePriceChange(e, key, 'solitaireTwo')}
                                        className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                    </td>
                                    <td>
                                      <div className="simpleText addDisable">
                                        {(GetSolitaireTwoPrice('solitaire2DiscAmt', key))?.toFixed(2)}
                                      </div>
                                    </td>
                                  </>
                                }
                                <td>
                                  <div className="simpleText addDisable">
                                    {(GetSolitaireTwoPrice('solitaire2TotalAmt', key))?.toFixed(2)}
                                  </div>
                                </td>
                              </tr>
                            }
                            {
                              priceArr?.isPremiumPriceCheck &&
                              <tr>
                                <td>
                                  <Text size={10} fontWeight={700} color={colors?.black}>PREMIUM PRICE</Text>
                                </td>
                                <td colSpan={priceArr?.isDiscountCheck ? "5" : "3"}></td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="premiumPrice"
                                    value={(priceArr?.premiumPrice ? priceArr?.premiumPrice : '')}
                                    onChange={(e) => handlePriceChange(e, key, 'premiumPrice')}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                              </tr>
                            }
                            {
                              priceArr?.isPromocodeCheck &&
                              <tr>
                                <td>
                                  <Text size={10} fontWeight={700} color={colors?.black}>PROMOCODE</Text>
                                </td>
                                <td colSpan={priceArr?.isDiscountCheck ? "5" : "3"}></td>
                                <td>
                                  <input
                                    type='text'
                                    placeholder="Enter"
                                    name="prmomoCode"
                                    value={form?.promoCode}
                                    onChange={handleChange}
                                    onBlur={() => verifyCoupon()}
                                    className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                                </td>
                              </tr>
                            }
                            {(form?.saleType === 'jewelleryState' || form?.saleType === 'diamState') && <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>CGST</Text>
                              </td>
                              <td colSpan={priceArr?.isDiscountCheck ? "5" : "3"}></td>
                              <td>
                                <input
                                  type='text'
                                  name="grossWeight"
                                  // value={form?.saleType === 'jewelleryState' || form?.saleType === 'diamState' ? `1.5% (${(handleGetGrandTotal('gst', key) / 2)?.toFixed(2)})` : ``}
                                  value={
                                    form?.saleType === 'jewelleryState' ? `1.5% (${(handleGetGrandTotal('gst', key) / 2)?.toFixed(2)})` :
                                      form?.saleType === 'diamState' && `0.75% (${(handleGetGrandTotal('gst', key))?.toFixed(2)})`
                                  }
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                            </tr>
                            }
                            {(form?.saleType === 'jewelleryState' || form?.saleType === 'diamState') && <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>SGST</Text>
                              </td>
                              <td colSpan={priceArr?.isDiscountCheck ? "5" : "3"}></td>
                              <td>
                                <input
                                  type='text'
                                  name="grossWeight"
                                  // value={form?.saleType === 'jewelleryState' || form?.saleType === 'diamState' ? `1.5% (${(handleGetGrandTotal('gst', key) / 2)?.toFixed(2)})` : ``}
                                  value={
                                    form?.saleType === 'jewelleryState' ? `1.5% (${(handleGetGrandTotal('gst', key) / 2)?.toFixed(2)})` :
                                      form?.saleType === 'diamState' && `0.75% (${(handleGetGrandTotal('gst', key))?.toFixed(2)})`
                                  }
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                            </tr>}
                            {(form?.saleType === 'jewelleryIndia' || form?.saleType === 'diamIndia') && <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>IGST</Text>
                              </td>
                              <td colSpan={priceArr?.isPromocodeCheck ? "5" : "3"}></td>
                              <td>
                                <input
                                  type='text'
                                  name="grossWeight"
                                  // value={(form?.saleType === 'jewelleryIndia' || form?.saleType === 'diamIndia') ? `3% (${(handleGetGrandTotal('gst', key))?.toFixed(2)})` : ''}
                                  value={
                                    form?.saleType === "diamIndia" ? `1.5% ${(handleGetGrandTotal('gst', key))?.toFixed(2)}` :
                                      form?.saleType === "jewelleryIndia" && `3% ${(handleGetGrandTotal('gst', key))?.toFixed(2)}`
                                  }
                                  onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                                  className={` numberInput text-center ${priceArr?.isDiscountCheck ? `tdInput` : ``} ${styles.inputBoxForm} outline-0`} />
                              </td>
                            </tr>}
                            <tr>
                              <td>
                                <Text size={10} fontWeight={700} color={colors?.black}>TOTAL AMOUNT</Text>
                              </td>
                              <td colSpan={priceArr?.isDiscountCheck ? "5" : "3"}></td>
                              <td>
                                <div className={`simpleText addDisable`}>
                                  {`${(handleGetGrandTotal('afterTax', key))?.toFixed(2)}`}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        <Row className="justify-content-end mb-2">
                          <Col md="2">
                            {key + 1 < priceState?.length ?
                              <div role="button" onClick={() => RemoveProductPrice(key)}>
                                <span className={`${styles.AddNewBtn} me-1`} type="button">
                                  <Text
                                    size={9}
                                    fontWeight={600}
                                    color={colors?.white}
                                    className='mx-auto'
                                  >
                                    Remove Product
                                  </Text>
                                </span>
                              </div>
                              :
                              (priceState?.length == 1 && key == 0) ?
                                <div role="button" className={`w-100`} onClick={() => AddMoreProductPrice(key)}>
                                  <span className={`${styles.AddNewBtn} me-1`} type="button">
                                    <Text
                                      size={9}
                                      fontWeight={600}
                                      color={colors?.white}
                                      className='mx-auto'
                                    >
                                      Add Product
                                    </Text>
                                  </span>
                                </div>
                                :
                                <div className={`d-flex`}>
                                  <div role="button" className={`w-100`} onClick={() => RemoveProductPrice(key)}>
                                    <span className={`${styles.AddNewBtn} me-2`} type="button">
                                      <Text
                                        size={9}
                                        fontWeight={600}
                                        color={colors?.white}
                                        className='mx-auto'
                                      >
                                        Remove Product
                                      </Text>
                                    </span>
                                  </div>
                                  <div role="button" className={`w-100`} onClick={() => AddMoreProductPrice(key)}>
                                    <span className={`${styles.AddNewBtn} me-1`} type="button">
                                      <Text
                                        size={9}
                                        fontWeight={600}
                                        color={colors?.white}
                                        className='mx-auto'
                                      >
                                        Add Product
                                      </Text>
                                    </span>
                                  </div>
                                </div>
                            }
                          </Col>
                        </Row>
                      </div>
                    </section>
                  </>
                )
              })
            }
            <section>
              <Row className="my-3">
                <Col md="5">
                  <div onClick={() => setTab('ENTER DETAIL')} role='button' >
                    <NewTitleHeader title={"ADVANCE PAYMENT / GARNET CASH"} icon={profileIcon} aniIcon={invoiceAniIcon} />
                  </div>
                </Col>
                <Col md="6">
                  <Row className="py-3">
                    <Col md={6} className=" ">
                      <Form.Group className={`d-center justify-content-around`}>
                        <div className={`checkout-checkbox`}>
                          <Form.Check
                            role="button"
                            inline
                            name="advanceSection"
                            value={true}
                            onChange={handleChange}
                            type="radio"
                            label="Yes"
                          />
                        </div>
                        <div className={`checkout-checkbox`}>
                          <Form.Check
                            role="button"
                            inline
                            name="advanceSection"
                            value={false}
                            onChange={handleChange}
                            type="radio"
                            label="No"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </section>
            {
              form?.advanceSection === 'true' &&
              <section>
                <Row>
                  <Col md="7">
                    <Table>
                      <thead>
                        <tr className={`bg-light`}>
                          <th>
                            <Text size={10} fontWeight={700} color={colors?.black}>DESCRIPTIONS</Text>
                          </th>
                          <th>
                            <Text size={10} fontWeight={700} color={colors?.black}>AMOUNT</Text>
                          </th>
                          <th>
                            <Text size={10} fontWeight={700} color={colors?.black}>USE AMOUNT</Text>
                          </th>
                          <th>
                            <Text size={10} fontWeight={700} color={colors?.black}>TOTAL</Text>
                          </th>
                        </tr>
                      </thead>
                      <tbody className={`${styles.tbodyChild}`}>
                        <tr>
                          <td className="text-start">
                            <Text size={10} fontWeight={700} color={colors?.black}>ADVANCE PAID</Text>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                placeholder="Enter"
                                name="advanceAmt"
                                value={advancePay[0]?.advance?.advanceAmt}
                                onChange={(event) => handleAdvancePaymentChange(event, 0, 'advance')}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                placeholder="Enter"
                                name="advanceUseAmt"
                                value={advancePay[0]?.advance?.advanceUseAmt}
                                onChange={(e) => {
                                  if ((e.target.value) <= Wallet[0]?.garnetWalletBalance) {
                                    handleAdvancePaymentChange(e, 0, 'advance')
                                    setOtpMessage('')
                                    setIsVerifiedOtp(false)
                                  } else {
                                    toast.warning(`Number must be between 1 and ${Wallet[0]?.garnetWalletBalance}.`);
                                    setIsVerifiedOtp(false)
                                    setOtpMessage('')
                                    setForm({ ...form, useAmount: '', otp: '' })
                                  }
                                }}
                                // value={form?.useAmount}
                                readOnly={(otpMessage === "Signin User!" || otpMessage === "Login User!") && true}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="advanceTotalAmt"
                                value={(advancePay[0]?.advance?.advanceUseAmt)?.toFixed(2)}
                                // readOnly='true'
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <Text size={10} fontWeight={700} color={colors?.black}>GARNET CASH</Text>
                          </td>
                          <td>
                            <div>
                              <input
                                type='text'
                                min='0'
                                name="garnetAmt"
                                value={Wallet?.length > 0 ? Number(Wallet[0]?.promotionalWalletBalance) > 0 ? Number(Wallet[0]?.promotionalWalletBalance) : '' : ''}
                                onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetCash')}
                                readOnly="true"
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='text'
                                name="garnetUseAmt"
                                value={advancePay[0]?.garnetCash?.garnetUseAmt}
                                onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetCash')}
                                readOnly={(Wallet?.length > 0 && Number(Wallet[0]?.promotionalWalletBalance) > 0) ? false : true}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='Number'
                                name="garnetTotalAmt"
                                value={Number(advancePay[0]?.garnetCash?.garnetUseAmt)?.toFixed(2)}
                                readOnly="true"
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <Text size={10} fontWeight={700} color={colors?.black}>GARNET WALLET</Text>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="garnetWallet"
                                value={Wallet?.length > 0 ? Number(Wallet[0]?.garnetWalletBalance) > 0 ? Wallet[0]?.garnetWalletBalance : '' : ''}
                                readOnly="true"
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="garneWallettUseAmt"
                                value={advancePay[0]?.garnetWallet?.garneWallettUseAmt}
                                onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetWallet')}
                                readOnly={Wallet?.length > 0 && Number(Wallet[0]?.garnetWalletBalance) > 0 ? false : true}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="garnetWalletTotalAmt"
                                value={Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt)?.toFixed(2)}
                                readOnly="true"
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <Text size={10} fontWeight={700} color={colors?.black}>GIFT CARD</Text>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="giftAmt"
                                value={advancePay[0]?.giftCard?.giftAmt}
                                onChange={(event) => handleAdvancePaymentChange(event, 0, 'giftCard')}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="giftUseAmt"
                                value={advancePay[0]?.giftCard?.giftUseAmt}
                                onChange={(event) => handleAdvancePaymentChange(event, 0, 'giftCard')}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="giftTotalAmt"
                                value={Number(advancePay[0]?.giftCard?.giftUseAmt)?.toFixed(2)}
                                readOnly="true"
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-center">
                            <span className={`${styles.plusIcon} me-1`} onClick={() => setForm({ ...form, roundFigure: Number(form?.roundFigure ? form?.roundFigure : GetAdvanceTotal()) - Number(form?.roundOffTotalAmt) })}>
                              -
                            </span>
                            <Text size={10} fontWeight={700} color={colors?.black}>ROUND OFF</Text>
                            <span className={`${styles.plusIcon} ms-1`} onClick={() => setForm({ ...form, roundFigure: Number(form?.roundFigure ? form?.roundFigure : GetAdvanceTotal()) + Number(form?.roundOffTotalAmt) })}>
                              +
                            </span>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="roundOff"
                                value={form?.roundOff}
                                onChange={handleChange}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="roundOffUseAmt"
                                value={Number(GetAdvanceTotal('afterTax'))?.toFixed(2)}
                                readOnly="true"
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type='number'
                                name="roundOffTotalAmt"
                                value={form?.roundOffTotalAmt}
                                onChange={handleChange}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <Text size={10} fontWeight={700} color={colors?.black}>GRAND TOTAL</Text>
                          </td>
                          <td colSpan="2"></td>
                          <td>
                            <div>
                              <input
                                type='number'
                                min='0'
                                name="totalAmt"
                                value={Number(form?.roundFigure ? form?.roundFigure : GetAdvanceTotal('afterTax'))?.toFixed(2)}
                                defaultValue={0}
                                onChange={handleChange}
                                className={` numberInput text-center tdInput ${styles.inputBoxForm} outline-0`} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="5">
                    <div className={`w-100 h-100`}>
                      <Row className="w-100 h-100 align-items-center">
                        {!showOtpInput ? <Col md="3">
                          <div>
                            <span
                              className={`${styles.AddNewBtn} me-1`}
                              type="button"
                              onClick={() => {
                                handleGetOtpButton(addressArray[0]?.shippingAddress?.phone),
                                  setShowOtpInput(true)
                              }}
                            >
                              <Text
                                size={9}
                                fontWeight={600}
                                color={colors?.white}
                                className='mx-auto'
                              >
                                SEND OTP
                              </Text>
                            </span>
                          </div>
                        </Col>
                          :
                          <Col md="6">
                            <Row>
                              <Col md="7" className="position-relative">
                                <input
                                  type='number'
                                  min='0'
                                  name="garnetWalletOtp"
                                  value={form?.garnetWalletOtp}
                                  onChange={handleChange}
                                  placeholder='Enter Otp'
                                  className={`w-100 numberInput ${styles.inputBoxForm} outline-0`} />
                                <div role="button" className="text-end"
                                  onClick={() => {
                                    handleGetOtpButton(addressArray[0]?.shippingAddress?.phone)
                                  }}>
                                  <Text
                                    size={11}
                                    fontWeight={600}
                                    color={colors?.blackNew}
                                    className='mx-auto'
                                  >
                                    Resend OTP
                                  </Text>
                                </div>
                                {
                                  (otpMessage === "Signin User!" || otpMessage === "Login User!") &&
                                  <div className={`${styles.checkIconPosition}`}>
                                    <Image
                                      src={greenTick}
                                      alt="bar-code"
                                      width={15}
                                      height={15}
                                    />
                                  </div>
                                }
                              </Col>
                              <Col md="5">
                                <div>
                                  <span
                                    className={`${styles.AddNewBtn}`}
                                    type="button"
                                    onClick={() => { verifyOtp() }}
                                  >
                                    <Text
                                      size={9}
                                      fontWeight={600}
                                      color={colors?.white}
                                      className='mx-auto'
                                    >
                                      VERIFY
                                    </Text>
                                  </span>
                                </div>
                              </Col>
                            </Row>
                          </Col>}
                      </Row>
                    </div>
                  </Col>
                </Row>
              </section>
            }
            <>
              {/* <------------old ui------------> */}
              {
                //   priceState?.length > 0 && priceState?.map((priceArr, key) => {
                //     return (
                //       <div key={key} className={`mt-3`}>
                //         <div className={`${styles.newInvoiceTable} overflow-scroll`}>
                //           <Table bordered>
                //             <tbody className={`${styles.tableBorder}`}>
                //               <tr>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>SR . NO</Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>DESIGN NUMBER</Text>
                //                 </th>
                //                 <th colSpan={2}>
                //                   <Text size={8} fontWeight={700} color={colors?.black} className='pe-5 me-4'>DETAILS</Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>DESCRIPTIONS</Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>WEIGHT</Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>PRICE-GM/CT </Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>PRICE</Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>DISC IN PERC</Text>
                //                 </th>
                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>DISC AMOUNT</Text>
                //                 </th>
                //                 {/* <th>
                //   <Text size={8} fontWeight={700} color={colors?.black}>TAXABLE AMOUNT</Text>
                // </th> */}

                //                 <th>
                //                   <Text size={8} fontWeight={700} color={colors?.black}>AMOUNT</Text>
                //                 </th>
                //                 <th></th>
                //               </tr>
                //               <tr>
                //                 <td rowSpan={11} className='align-middle text-center'><Text size={8} fontWeight={600} color={colors?.black}>{key + 1}</Text></td>
                //                 <td rowSpan={11} className='align-middle text-center'>
                //                   <Text size={8} fontWeight={600} color={colors?.black}>
                //                     <input
                //                       className={`${styles.inputBoxTd} border-0`}
                //                       type='text'
                //                       name={"designNo"}
                //                       placeholder="Enter"
                //                       // value={searchname}
                //                       onBlur={(e) => fetchProductbyid(e, key, priceArr?.designNo)}
                //                       value={priceArr?.designNo}
                //                       onChange={(e) => handlePriceChange(e, key, 'designNo')}

                //                     />
                //                   </Text>
                //                 </td>
                //                 <td></td>
                //                 <td><span className="px-4"></span></td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>GROSS WEIGHT</Text></td>
                //                 <td>
                //                   <input
                //                     type='number'
                //                     min='0'
                //                     name="grossWeight"
                //                     value={priceArr?.grossWeight}
                //                     onChange={(e) => handlePriceChange(e, key, 'gross_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td></td>
                //                 <td> </td>
                //                 <td></td>
                //                 <td></td>
                //                 <td> </td>
                //               </tr>
                //               <tr>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>KAROT</Text></td>
                //                 <td>
                //                   <Form.Select size="sm"
                //                     className={`border-0 shadow-none`}
                //                     name="karot"
                //                     value={priceArr?.karot}
                //                     onChange={(e) => handlePriceChange(e, key, 'karot')}
                //                   >
                //                     <option value=''>select</option>
                //                     {
                //                       form?.product?.karot?.length > 0 && form?.product?.karot?.map((item, key) => {
                //                         return item !== null && (
                //                           <option key={key} value={item}>{`${item}`}</option>
                //                         )
                //                       })
                //                     }
                //                   </Form.Select>
                //                 </td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>NET WEIGHT</Text></td>
                //                 <td>
                //                   <input
                //                     type="text"
                //                     name="netWeight"
                //                     value={priceArr?.netWeight ? priceArr?.netWeight : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'net_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="netPriceCt"
                //                     value={priceArr?.netPriceCt ? priceArr?.netPriceCt : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'net_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='number'
                //                     name="netPrice"
                //                     value={(GetNetPrice('netPrice', key))?.toFixed(2)}
                //                     // onChange={(e) => handlePriceChange(e, 1, 'netPrice')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`}
                //                     readOnly="true" />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="netDiscInPerc"
                //                     value={priceArr?.netDiscInPerc ? priceArr?.netDiscInPerc : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'net_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="netDiscAmt"
                //                     value={(GetNetPrice('netDiscAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`}
                //                     readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="netTotalAmt"
                //                     value={(GetNetPrice('netTotalAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`}
                //                     readOnly='true' />
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black} className='w-100'>DIAMOND COLOUR</Text></td>
                //                 <td>
                //                   <Form.Select size="sm"
                //                     className={`border-0 shadow-none`}
                //                     name="diamondColor"
                //                     value={priceArr?.diamondColor}
                //                     onChange={(e) => handlePriceChange(e, key, 'diamondColor')}
                //                   >
                //                     <option value=''>select</option>
                //                     {
                //                       form?.product?.clarity?.length > 0 && form?.product?.clarity?.map((item, key) => {
                //                         return (
                //                           <option key={key} value={item}>{`${item}`}</option>
                //                         )
                //                       })
                //                     }
                //                   </Form.Select>
                //                 </td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>DIAM WEIGHT</Text></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="diamond"
                //                     value={priceArr?.diamond ? priceArr?.diamond : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'diamond_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="diamPriceCt"
                //                     value={priceArr?.diamPriceCt ? priceArr?.diamPriceCt : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'diamond_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} /></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="diamPrice"
                //                     value={(GetDiamondPrice('diamPrice', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="diamDiscInPerc"
                //                     value={priceArr?.diamDiscInPerc ? priceArr?.diamDiscInPerc : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'diamond_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} /></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="diamDiscAmt"
                //                     value={(GetDiamondPrice('diamDiscAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`}
                //                     readOnly='true' /></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="diamTotalAmt"
                //                     value={(GetDiamondPrice('diamTotalAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>HSN CODE</Text></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="hsnCode"
                //                     value={priceArr?.hsnCode}
                //                     onChange={(e) => handlePriceChange(e, key, 'hsnCode')}
                //                     className={`${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>STONE WEIGHT</Text></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="stoneWeight"
                //                     value={priceArr?.stoneWeight ? priceArr?.stoneWeight : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'stone_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="stonePriceCt"
                //                     value={priceArr?.stonePriceCt ? priceArr?.stonePriceCt : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'stone_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="stonePrice"
                //                     value={(GetStonePrice('stonePrice', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="stoneDiscInPerc"
                //                     value={priceArr?.stoneDiscInPerc ? priceArr?.stoneDiscInPerc : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'stone_weight')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="stoneDiscAmt"
                //                     value={(GetStonePrice('stoneDiscAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="stoneTotalAmt"
                //                     value={(GetStonePrice('stoneTotalAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>PRODUCT TYPE</Text></td>
                //                 <td>
                //                   <Text size={8} fontWeight={600} color={colors?.black}>{form?.product?.productType}</Text>
                //                 </td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}> MAKING CHARGES</Text></td>
                //                 <input
                //                   type='text'
                //                   name="makingChargeWt"
                //                   value={priceArr?.makingChargeWt ? priceArr?.makingChargeWt : ''}
                //                   onChange={(e) => handlePriceChange(e, key, 'making_charge')}
                //                   className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="makingChargePriceCt"
                //                     value={priceArr?.makingChargePriceCt ? priceArr?.makingChargePriceCt : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'making_charge')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="makingChargePrice"
                //                     value={(handleGetMakingPrice('makingChargePrice', key))?.toFixed(2)}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`}
                //                     readOnly="true" />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="makingChargeDiscInPerc"
                //                     value={priceArr?.makingChargeDiscInPerc ? priceArr?.makingChargeDiscInPerc : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'making_charge')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="makingChargeDiscAmt"
                //                     value={(handleGetMakingPrice('makingChargeDiscAmt', key))?.toFixed(2)}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`}
                //                     readOnly="true" />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="makingChargeTotalAmt"
                //                     value={(handleGetMakingPrice('makingChargeTotalAmt', key))?.toFixed(2)}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>SIZE</Text></td>
                //                 <td>
                //                   <Form.Select size="sm"
                //                     className={`border-0`}
                //                     name="size"
                //                     value={form?.size}
                //                     onChange={handleChange}
                //                     placeholder='select'
                //                   >
                //                     {
                //                       form?.sizes?.length > 0 && form?.sizes?.map((item, key) => {
                //                         return (
                //                           <option key={key} selected={item?.size === "12" ? true : false} value={item?.size}>{`${item?.size}`}</option>
                //                         )
                //                       })
                //                     }
                //                   </Form.Select>
                //                 </td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}>SOLITAIRE 1</Text></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire1Weight"
                //                     value={priceArr?.solitaire1Weight ? priceArr?.solitaire1Weight : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'solitaireOne')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire1PriceCt"
                //                     value={priceArr?.solitaire1PriceCt ? priceArr?.solitaire1PriceCt : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'solitaireOne')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire1Price"
                //                     value={(GetSolitaireOnePrice('solitaire1Price', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire1DiscInPerc"
                //                     value={priceArr?.solitaire1DiscInPerc ? priceArr?.solitaire1DiscInPerc : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'solitaireOne')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire1DiscAmt"
                //                     value={(GetSolitaireOnePrice('solitaire1DiscAmt', key))?.toFixed(2)}
                //                     onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire1TotalAmt"
                //                     value={(GetSolitaireOnePrice('solitaire1TotalAmt', key))?.toFixed(2)}
                //                     onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td></td>
                //                 <td></td>
                //                 <td><Text size={7} fontWeight={600} color={colors?.black}>SOLITAIRE 2 </Text></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire2Weight"
                //                     value={priceArr?.solitaire2Weight ? priceArr?.solitaire2Weight : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'solitaireTwo')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire2PriceCt"
                //                     value={priceArr?.solitaire2PriceCt ? priceArr?.solitaire2PriceCt : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'solitaireTwo')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire2Price"
                //                     value={(GetSolitaireTwoPrice('solitaire2Price', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire2DiscInPerc"
                //                     value={priceArr?.solitaire2DiscInPerc ? priceArr?.solitaire2DiscInPerc : ''}
                //                     onChange={(e) => handlePriceChange(e, key, 'solitaireTwo')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire2DiscAmt"
                //                     value={(GetSolitaireTwoPrice('solitaire2DiscAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="solitaire2TotalAmt"
                //                     value={(GetSolitaireTwoPrice('solitaire2TotalAmt', key))?.toFixed(2)}
                //                     // onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td colSpan={2}></td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}> PREMIUM PRICE</Text></td>
                //                 <td colSpan={5}></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="premiumPrice"
                //                     value={Number(priceArr?.premiumPrice ? priceArr?.premiumPrice : '')}
                //                     onChange={(e) => handlePriceChange(e, key, 'premiumPrice')}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td></td>
                //                 <td></td>
                //                 <td><Text size={8} fontWeight={600} color={colors?.black}> PROMO CODE</Text></td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="promoCode"
                //                     value={form?.promoCode}
                //                     onChange={handleChange}
                //                     onBlur={() => verifyCoupon()}
                //                     className={`numberInput ${styles.inputBoxTd} border-0`} />
                //                 </td>
                //                 <td colSpan={4}> </td>
                //                 <td>
                //                   <input
                //                     type='text'
                //                     name="totalTaxableAmount"
                //                     value={Number(handleGetGrandTotal('beforeTax', key))?.toFixed(2)}
                //                     onChange={(e) => handlePriceChange(e, key, 'totalTaxableAmount')}
                //                     // disabled
                //                     className={`numberInput ${styles.inputBoxTd} border-0 fw-bold`} readOnly='true' />
                //                 </td>
                //                 <td>
                //                   <Text size={9} fontWeight={600} color={colors?.black}> Taxable Amount</Text>
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td></td>
                //                 <td><Text size={9} fontWeight={600} color={colors?.black}></Text></td>
                //                 <td>
                //                   {
                //                     form?.saleType === 'diamIndia' || form?.saleType === 'jewelleryIndia' ?
                //                       <Text size={9} fontWeight={600} color={colors?.black}> IGST</Text>
                //                       :
                //                       <Text size={9} fontWeight={600} color={colors?.black}> CGST</Text>
                //                   }
                //                 </td>
                //                 <td></td>
                //                 <td colSpan={3}> </td>
                //                 <td>
                //                   {
                //                     form?.saleType === 'diamIndia' &&
                //                     <input
                //                       type='text'
                //                       name="promoCode"
                //                       value={`1.50%`}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'jewelleryIndia' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={`3%`}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'diamState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={`0.75%`}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'jewelleryState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={`1.5%`}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                 </td>
                //                 <td>
                //                   {
                //                     form?.saleType === 'diamIndia' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={(handleGetGrandTotal('gst', key))?.toFixed(2)}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'jewelleryIndia' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={(handleGetGrandTotal('gst', key))?.toFixed(2)}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'diamState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={(handleGetGrandTotal('gst', key))?.toFixed(2)}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'jewelleryState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={(handleGetGrandTotal('gst', key) / 2)?.toFixed(2)}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td></td>
                //                 <td></td>
                //                 <td>
                //                   {
                //                     form?.saleType === 'diamIndia' || form?.saleType === 'jewelleryIndia' ?
                //                       ``
                //                       :
                //                       <Text size={9} fontWeight={600} color={colors?.black}> SGST</Text>
                //                   }
                //                 </td>
                //                 <td>

                //                 </td>
                //                 <td colSpan={3}> </td>
                //                 <td>
                //                   {
                //                     form?.saleType === 'diamState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={`0.75%`}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'jewelleryState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={`1.5%`}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                 </td>
                //                 <td>
                //                   {
                //                     form?.saleType === 'diamState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={(handleGetGrandTotal('gst', key))?.toFixed(2)}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                   {
                //                     form?.saleType === 'jewelleryState' &&
                //                     <input
                //                       type='text'
                //                       name=""
                //                       value={(handleGetGrandTotal('gst', key) / 2)?.toFixed(2)}
                //                       // onChange={handleChange}
                //                       className={`numberInput ${styles.inputBoxTd} border-0`} readOnly='true' />
                //                   }
                //                 </td>
                //               </tr>
                //               <tr>
                //                 <td colSpan={10}></td>
                //                 <td className='py-2'>
                //                   <input
                //                     type='text'
                //                     min='0'
                //                     name="grandTotal"
                //                     value={(handleGetGrandTotal('afterTax', key))?.toFixed(2)}
                //                     onChange={handleChange}
                //                     className={`numberInput ${styles.inputBoxTd} border-0 fw-bold`} readOnly="true" />
                //                 </td>
                //               </tr>
                //             </tbody>
                //           </Table>
                //         </div>
                //         <Row className="justify-content-end mb-2">
                //           <Col md="2">
                //             {key + 1 < priceState?.length ?
                //               <div role="button" onClick={() => RemoveProductPrice(key)}>
                //                 <span className={`${styles.AddNewBtn} me-1`} type="button">
                //                   <Text
                //                     size={9}
                //                     fontWeight={600}
                //                     color={colors?.white}
                //                     className='mx-auto'
                //                   >
                //                     Remove Product
                //                   </Text>
                //                 </span>
                //               </div>
                //               :
                //               (priceState?.length == 1 && key == 0) ?
                //                 <div role="button" className={`w-100`} onClick={() => AddMoreProductPrice(key)}>
                //                   <span className={`${styles.AddNewBtn} me-1`} type="button">
                //                     <Text
                //                       size={9}
                //                       fontWeight={600}
                //                       color={colors?.white}
                //                       className='mx-auto'
                //                     >
                //                       Add Product
                //                     </Text>
                //                   </span>
                //                 </div>
                //                 :
                //                 <div className={`d-flex`}>
                //                   <div role="button" className={`w-100`} onClick={() => RemoveProductPrice(key)}>
                //                     <span className={`${styles.AddNewBtn} me-2`} type="button">
                //                       <Text
                //                         size={9}
                //                         fontWeight={600}
                //                         color={colors?.white}
                //                         className='mx-auto'
                //                       >
                //                         Remove Product
                //                       </Text>
                //                     </span>
                //                   </div>

                //                   <div role="button" className={`w-100`} onClick={() => AddMoreProductPrice(key)}>
                //                     <span className={`${styles.AddNewBtn} me-1`} type="button">
                //                       <Text
                //                         size={9}
                //                         fontWeight={600}
                //                         color={colors?.white}
                //                         className='mx-auto'
                //                       >
                //                         Add Product
                //                       </Text>
                //                     </span>
                //                   </div>
                //                 </div>

                //             }
                //           </Col>
                //         </Row>
                //       </div>
                //     )
                //   })
              }
            </>

            {/* <div className="mt-5">
              <Text size={11} fontWeight={600} color={colors?.black}>LESS ADVANCE PAID</Text>
              <Row className='align-items-center'>
                <Col md={6}>
                  <Table bordered>
                    <tbody className={`text-center ${styles.tableBorder}`}>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="text-center"><Text size={8} fontWeight={600} color={colors?.black}>AMOUNT</Text></td>
                        <td className="text-center"><Text size={8} fontWeight={600} color={colors?.black}>USE AMOUNT</Text></td>
                        <td className="text-center"><Text size={8} fontWeight={600} color={colors?.black}>TOTAL AMOUNT</Text></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><Text size={8} fontWeight={600} color={colors?.black}>ADVANCE PAID</Text></td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="advanceAmt"
                            value={advancePay[0]?.advance?.advanceAmt}
                            onChange={(event) => handleAdvancePaymentChange(event, 0, 'advance')}
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="advanceUseAmt"
                            value={advancePay[0]?.advance?.advanceUseAmt}
                            className={`numberInput ${styles.inputBoxTd} border-0`}
                            onChange={(e) => {
                              if (parseInt(e.target.value) <= Wallet[0]?.garnetWalletBalance) {
                                handleAdvancePaymentChange(e, 0, 'advance')
                                setOtpMessage('')
                                setIsVerifiedOtp(false)
                              } else {
                                toast.warning(`Number must be between 1 and ${Wallet[0]?.garnetWalletBalance}.`);
                                setIsVerifiedOtp(false)
                                setOtpMessage('')
                                setForm({ ...form, useAmount: '', otp: '' })
                              }
                            }}
                            // value={form?.useAmount}
                            readOnly={(otpMessage === "Signin User!" || otpMessage === "Login User!") && true}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="advanceTotalAmt"
                            // value={Number(GetAdvanceTotal('advance'))?.toFixed(2)}
                            value={Number(advancePay[0]?.advance?.advanceUseAmt)?.toFixed(2)}
                            // onChange={handleChange}
                            readOnly='true'
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><Text size={8} fontWeight={600} color={colors?.black}>GARNET CASH</Text></td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="garnetAmt"
                            value={Wallet?.length > 0 ? Number(Wallet[0]?.promotionalWalletBalance) > 0 ? Number(Wallet[0]?.promotionalWalletBalance) : '' : ''}
                            onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetCash')}
                            className={`numberInput ${styles.inputBoxTd} border-0`}
                            readOnly="true"
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            name="garnetUseAmt"
                            value={advancePay[0]?.garnetCash?.garnetUseAmt}
                            onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetCash')}
                            className={`numberInput ${styles.inputBoxTd} border-0`}
                            readOnly={(Wallet?.length > 0 && Number(Wallet[0]?.promotionalWalletBalance) > 0) ? false : true}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="garnetTotalAmt"
                            value={Number(advancePay[0]?.garnetCash?.garnetUseAmt)?.toFixed(2)}
                            readOnly="true"
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><Text size={7} fontWeight={600} color={colors?.black}>GARNET WALLET</Text></td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="garnetWallet"
                            // value={advancePay[0]?.garnetWallet?.garnetWallet}
                            value={Wallet?.length > 0 ? Number(Wallet[0]?.garnetWalletBalance) > 0 ? Wallet[0]?.garnetWalletBalance : '' : ''}
                            // onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetWallet')}
                            className={`numberInput ${styles.inputBoxTd} border-0`} readOnly="true" />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="garneWallettUseAmt"
                            value={advancePay[0]?.garnetWallet?.garneWallettUseAmt}
                            onChange={(event) => handleAdvancePaymentChange(event, 0, 'garnetWallet')}
                            className={`numberInput ${styles.inputBoxTd} border-0`}
                            readOnly={Wallet?.length > 0 && Number(Wallet[0]?.garnetWalletBalance) > 0 ? false : true}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="garnetWalletTotalAmt"
                            value={Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt)?.toFixed(2)}
                            readOnly="true"
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><Text size={8} fontWeight={600} color={colors?.black}>GIFT CARD</Text></td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="giftAmt"
                            value={advancePay[0]?.giftCard?.giftAmt}
                            onChange={(event) => handleAdvancePaymentChange(event, 0, 'giftCard')}
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="giftUseAmt"
                            value={advancePay[0]?.giftCard?.giftUseAmt}
                            onChange={(event) => handleAdvancePaymentChange(event, 0, 'giftCard')}
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="giftTotalAmt"
                            value={Number(advancePay[0]?.giftCard?.giftUseAmt)?.toFixed(2)}
                            readOnly="true"
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="d-flex align-items-center">
                          <span className={`${styles.plusIcon}`} onClick={() => setForm({ ...form, roundFigure: Number(form?.roundFigure ? form?.roundFigure : GetAdvanceTotal()) - Number(form?.roundOffTotalAmt) })}>
                            -
                          </span>
                          <Text size={8} fontWeight={600} color={colors?.black}>ROUND OFF</Text>
                          <span className={`${styles.plusIcon}`} onClick={() => setForm({ ...form, roundFigure: Number(form?.roundFigure ? form?.roundFigure : GetAdvanceTotal()) + Number(form?.roundOffTotalAmt) })}>
                            +
                          </span>
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="roundOff"
                            value={form?.roundOff}
                            onChange={handleChange}
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="roundOffUseAmt"
                            value={Number(GetAdvanceTotal('afterTax'))?.toFixed(2)}
                            className={`numberInput ${styles.inputBoxTd} border-0`} readOnly="true" />
                        </td>

                        <td>
                          <input
                            type='number'
                            min='0'
                            name="roundOffTotalAmt"
                            value={form?.roundOffTotalAmt}
                            onChange={handleChange}
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                      </tr>
                      <tr>
                        <td className='py-3' colSpan={3}></td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="useAmt"
                            // value={(handleGetGrandTotal('afterTax'))?.toFixed(2)}
                            // onChange={handleChange}
                            className={`numberInput ${styles.inputBoxTd} border-0`} />
                        </td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            name="totalAmt"
                            value={Number(form?.roundFigure ? form?.roundFigure : GetAdvanceTotal('afterTax'))?.toFixed(2)}
                            defaultValue={0}
                            onChange={handleChange}
                            className={`numberInput ${styles.inputBoxTd} border-0`} readOnly="true" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={6}>
                  <Row>
                    {!showOtpInput ? <Col md="3">
                      <div>
                        <span
                          className={`${styles.AddNewBtn} me-1`}
                          type="button"
                          onClick={() => {
                            handleGetOtpButton(addressArray[0]?.shippingAddress?.phone),
                              setShowOtpInput(true)
                          }}
                        >
                          <Text
                            size={9}
                            fontWeight={600}
                            color={colors?.white}
                            className='mx-auto'
                          >
                            SEND OTP
                          </Text>
                        </span>
                      </div>
                    </Col>
                      :
                      <Col md="6">
                        <Row>
                          <Col md="7" className="position-relative">
                            <input
                              type='number'
                              min='0'
                              name="garnetWalletOtp"
                              value={form?.garnetWalletOtp}
                              onChange={handleChange}
                              placeholder='Enter Otp'
                              className={`w-100 numberInput ${styles.inputBoxForm} outline-0`} />
                            <div role="button" className="text-end"
                              onClick={() => {
                                handleGetOtpButton(addressArray[0]?.shippingAddress?.phone)
                              }}>
                              <Text
                                size={11}
                                fontWeight={600}
                                color={colors?.blackNew}
                                className='mx-auto'
                              >
                                Resend OTP
                              </Text>
                            </div>
                            {
                              (otpMessage === "Signin User!" || otpMessage === "Login User!") &&
                              <div className={`${styles.checkIconPosition}`}>
                                <Image
                                  src={greenTick}
                                  alt="bar-code"
                                  width={15}
                                  height={15}
                                />
                              </div>
                            }
                          </Col>
                          <Col md="5">
                            <div>
                              <span
                                className={`${styles.AddNewBtn}`}
                                type="button"
                                onClick={() => { verifyOtp() }}
                              >
                                <Text
                                  size={9}
                                  fontWeight={600}
                                  color={colors?.white}
                                  className='mx-auto'
                                >
                                  VERIFY
                                </Text>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </Col>}
                  </Row>
                </Col>
              </Row>
            </div> */}
            <div>
              <Row>
                <Col md={12} className="my-3">
                  <Row>
                    <Col md={8}>
                      <div onClick={() => setTab('ENTER DETAIL')} role='button' >
                        <NewTitleHeader
                          title={"PAYMENT MODE"}
                          icon={goldCoinIcon}
                          aniIcon={invoiceAniIcon}
                        />
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
                <Row>
                  <Col md={8}>
                    <Form>
                      <Row>
                        <Col md={12}>
                          <Row className={`pb-3 mb-3`}>
                            <Col md={6} className=" mt-3">
                              <div className="d-flex align-items-center justify-content-center">
                                <Row>
                                  <Col md={4} className="d-flex align-items-center">
                                    <Text
                                      size={9}
                                      fontWeight={700}
                                      color={colors?.black}
                                    >
                                      PAYMENT METHOD
                                    </Text>
                                  </Col>
                                  <Col
                                    md={8}
                                    className="d-flex align-items-center justify-content-center "
                                  >
                                    <Form.Group
                                      className={` inputSelectBox`}
                                    >
                                      <Form.Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        value={form?.paymentMethod}
                                        name="paymentMethod"
                                        onChange={handleChange}
                                        className={clsx(styles.inputBox)}
                                      >
                                        <option value="">Select</option>
                                        <option value="cash">CASH</option>
                                        <option value="swipe">SWIPE</option>
                                        <option value="bankTransfer">BANK TRANSFER</option>
                                      </Form.Select>
                                    </Form.Group>

                                  </Col>
                                </Row>
                              </div>
                            </Col>
                            {(form?.paymentMethod === 'swipe' || form?.paymentMethod === 'bankTransfer') &&
                              <Col md={6} className="mt-3">
                                <Row>
                                  <Col md={4} className="text-end">
                                    <Text
                                      size={9}
                                      fontWeight={700}
                                      color={colors?.black}
                                    >
                                      Select Swipe
                                    </Text>
                                  </Col>
                                  <Col md={8} className=" ">
                                    {form?.paymentMethod === 'swipe' && <Form.Group
                                      className={` inputSelectBox`}
                                    >
                                      <Form.Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        name="swipeMethod"
                                        value={form?.swipeMethod}
                                        onChange={handleChange}
                                        className={clsx(styles.inputBox)}
                                      >
                                        <option value="">Select</option>
                                        <option value="card">CARD</option>
                                        <option value="payByLink">PAY BY LINK</option>
                                        <option value="qrCodeOrUpi">QR CODE / UPI</option>
                                      </Form.Select>
                                    </Form.Group>}
                                    {form?.paymentMethod === 'bankTransfer' && <Form.Group
                                      className={` inputSelectBox`}
                                    >
                                      <Form.Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        name="bankSwipeMethod"
                                        value={form?.swipeMethod}
                                        onChange={handleChange}
                                        className={clsx(styles.inputBox)}
                                      >
                                        <option value="">Select</option>
                                        <option value="upi">UPI</option>
                                        <option value="emi">EMI</option>
                                        <option value="rtgs">RTGS</option>
                                        <option value="neft">NEFT</option>
                                        <option value="cheque">CHEQUE</option>
                                      </Form.Select>
                                    </Form.Group>}
                                  </Col>
                                </Row>
                              </Col>}
                          </Row>
                          {(form?.paymentMethod === 'swipe' || form?.paymentMethod === 'bankTransfer' || form?.paymentMethod === 'cash') && <Row>
                            <Col md={12} className="border-bottom">
                              <PaymentInvoice
                                form={form}
                                handleChange={handleChange}
                                HandleCashChange={HandleCashChange}
                                swipeData={swipeData}
                                handlSwipeChange={handlSwipeChange}
                                setSwipeData={setSwipeData}
                                bankData={bankData}
                                setBankData={setBankData}
                                handlBankTransferChange={handlBankTransferChange}
                              />
                            </Col>
                          </Row>}
                          <Row>
                            <Col md={12} className="border-bottom">
                              <Row>
                                <Col md={6}>
                                  <Row>
                                    <Col md={4} className="mt-3">
                                      <Text
                                        size={10}
                                        fontWeight={700}
                                        color={colors?.black}
                                      >
                                        CREATED_AT:
                                      </Text>
                                    </Col>
                                    <Col md={8} className="">
                                      <Form.Group
                                        className="mb-3 mt-3"

                                      >
                                        <div className="d-flex">
                                          <Image
                                            src="/icons/products/calender-icon.svg"
                                            alt='calender-icon'
                                            role="button"
                                            height={15}
                                            width={15}
                                          />
                                          <Form.Control
                                            className={styles.inputBoxFormNone}
                                            type="text"
                                            value={moment(form?.createdAt).format(
                                              "MMMM DD, YYYY  | hh:mm a"
                                            )}
                                            readOnly={true}
                                          />
                                        </div>
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
                                <Col md={6}>
                                  <Row>
                                    <Col md={4} className="mt-3">
                                      <Text
                                        size={10}
                                        fontWeight={700}
                                        color={colors?.black}
                                      >
                                        UPDATED_AT:
                                      </Text>
                                    </Col>
                                    <Col md={8} className="">
                                      <Form.Group
                                        className="mb-3 mt-3"

                                      >
                                        <div className="d-flex">
                                          <Image
                                            src="/icons/products/calender-icon.svg"
                                            alt='calender-icon'
                                            role="button"
                                            height={15}
                                            width={15}
                                          />
                                          <Form.Control
                                            className={styles.inputBoxFormNone}
                                            type="text"
                                            value={moment(form?.updatedAt).format(
                                              "MMMM DD, YYYY  | hh:mm a"
                                            )}
                                            readOnly={true}
                                          />
                                        </div>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className='p-5 center'>
                      <GradientBtn title={`Submit`}
                        handleClick={HandleSubmit} />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <Modal show={showCustomerDetail} onHide={closeCustomerDetailModal} className={`${styles.modalDiv}`}>
              <Modal.Header closeButton className={`border-0 shadow-none closeBtn `}></Modal.Header>

              <div className='p-5'>
                <section>
                  <Row className="py-4">
                    <Col md={4}>
                      <div onClick={closeCustomerDetailModal} role='button' >
                        <NewTitleHeader title={"CUSTOMER DETAILS"} icon={profileIcon} aniIcon={invoiceAniIcon} />
                      </div>
                    </Col>
                  </Row>
                  <div className="mb-5">
                    <Form>
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                CUSTOMER NAME
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="receipentName"
                                  value={addressArray[0]?.shippingAddress?.receipentName}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                PHONE
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={`numberInput ${styles.inputBoxForm}`}
                                  type="number"
                                  min="0"
                                  placeholder="Enter"
                                  name="phone"
                                  value={addressArray[0]?.shippingAddress?.phone}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  onBlur={() => HandlefetchUserByNumber()}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                PINCODE
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="pincode"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.pincode}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                CUSTOMER ID
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  placeholder="Enter"
                                  name="customerId"
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  value={addressArray[0]?.shippingAddress?.customerId}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                ADDRESS
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="flat"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.flat}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                LANDMARK
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="landmark"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.landmark}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                CITY
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="city"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.city}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                STATE
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="state"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.state}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                COUNTRY
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="country"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.country}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                GST DETAILS (Optional)
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="gst"
                                  placeholder="Enter"
                                  value={addressArray[0]?.shippingAddress?.gst}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
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
                    </Form>
                  </div>
                </section>

              </div>
            </Modal>
            {/* C U S T O M E R  D E L I V E R Y  A D D R E S S */}
            <Modal show={showCustomerDeliveryModal} onHide={closeCustomerDeliveryAddressModal} className={`${styles.modalDiv}`}>
              <Modal.Header closeButton className={`border-0 shadow-none closeBtn `}></Modal.Header>
              <div className='p-5'>
                <section>
                  <Row className="py-4">
                    <Col md={4}>
                      <div onClick={closeCustomerDeliveryAddressModal} role='button' >
                        <NewTitleHeader title={"CUSTOMER DELIVERY ADDRESS"} icon={profileIcon} aniIcon={invoiceAniIcon} />
                      </div>
                    </Col>
                  </Row>
                  <div className="mb-5">
                    <Form>
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                CUSTOMER NAME
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="receipentName"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  value={deliveryAddressArray[0]?.shippingAddress?.receipentName}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                PHONE
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={`numberInput ${styles.inputBoxForm}`}
                                  type="number"
                                  min="0"
                                  placeholder="Enter"
                                  name="phone"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  value={deliveryAddressArray[0]?.shippingAddress?.phone}
                                  // onBlur={() => fetchUserByNumber()}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                PINCODE
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="pincode"
                                  placeholder="Enter"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  onBlur={(e) => GetStorePincodeAddress(e.target.value)}
                                  value={deliveryAddressArray[0]?.shippingAddress?.pincode}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                GST DETAILS (Optional)
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="gst"
                                  placeholder="Enter"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  value={deliveryAddressArray[0]?.shippingAddress?.gst}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          {/* <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                CUSTOMER ID
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  placeholder="Enter"
                                  name="customerId"
                                  value={addressArray[0]?.shippingAddress?.customerId}
                                  onChange={(event) => handleEmployeeChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row> */}
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                ADDRESS
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="flat"
                                  placeholder="Enter"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  value={deliveryAddressArray[0]?.shippingAddress?.flat}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                LANDMARK
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="landmark"
                                  placeholder="Enter"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  value={deliveryAddressArray[0]?.shippingAddress?.landmark}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                CITY
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              {/* <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="city"
                                  placeholder="Enter"
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  value={deliveryAddressArray[0]?.shippingAddress?.city}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group> */}

                              <Form.Select
                                className={`mb-3 ${styles.formInput} shadow-none`}
                                aria-label="Default select example"
                                type="text"
                                name="city"
                                onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                value={deliveryAddressArray[0]?.shippingAddress?.city}
                              >
                                <option>Select</option>
                                {PostOffice?.length > 0 &&
                                  PostOffice?.map((address, key) => {
                                    return (
                                      <option
                                        key={key}
                                        value={`${address?.Name} (${address?.District})`}
                                      >{`${address?.Name} (${address?.District})`}</option>
                                    );
                                  })}
                              </Form.Select>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                STATE
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="state"
                                  placeholder="Enter"
                                  value={deliveryAddressArray[0]?.shippingAddress?.state}
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
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
                      <Row>
                        <Col md={6} className="border-bottom mt-3">
                          <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                COUNTRY
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="country"
                                  placeholder="Enter"
                                  value={deliveryAddressArray[0]?.shippingAddress?.country}
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} className="border-bottom mt-3">
                          {/* <Row>
                            <Col md={4} className=" ">
                              <Text size={9} fontWeight={700} color={colors?.black}>
                                GST DETAILS (Optional)
                              </Text>
                            </Col>
                            <Col md={8} className=" ">
                              <Form.Group className="mb-3">
                                <Form.Control
                                  className={styles.inputBoxForm}
                                  type="text"
                                  name="gst"
                                  placeholder="Enter"
                                  value={deliveryAddressArray[0]?.shippingAddress?.gst}
                                  onChange={(event) => handleDeliveryAddressChange(event, 0, 'shippingAddress')}
                                  style={{
                                    borderColor: errors?.title ? "red" : "#fd9149",
                                    borderWidth: 1,
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row> */}
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </section>

              </div>
            </Modal>
          </Container>
        </div>
    }</>
  )
}

export default AddInvoice;