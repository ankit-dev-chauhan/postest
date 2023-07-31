import React, { useRef, useState } from "react";
import { Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "../../../components/basic/button";
import NewTitleHeader from "../../components/titleHeader/NewTitleHeader";
import Text from "../../../components/basic/text";
import { colors } from "../../../constants/colors";
import { profileIcon } from "../../home/searchProduct/image";
import AddInvoice from "./addInvoice";
import EditInvoice from "./editInvoice";
import { InvoicePdf } from "../invoicePdf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ReactToPrint from "react-to-print";
import { useManageInvoices } from "../hooks";
import { hasValueInObject } from "../../../utils/helper";
import { toast } from "react-toastify";
import NewProgressBar from "../../components/progressBar";
import { useRouter } from "next/router";
import { invoiceAniIcon } from "../../home/searchProduct/animatedIcons";
import NewInvoiceForm from "./newInvoice";

const EditInvoices = props => {
  const {
    handleCloseEditInvoice,
    HandleSubmit,
    handleChange,
    setForm,
    form,
    searchname,
    isLoading,
    searchFilter,
    fetchProductbyid,
    productIds,
    pdf,
    pdfDataValue,
    price,
    srNo,
    store,
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
    tab,
    setTab,
    findFormErrors,
    handleProceedToPricingDetails,
    setAddressArray,
    user,
    invoiceData,
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
    GetStorePincodeAddress,
    PostOffice,
    custom,
    setCustom,
    componentRef,
    GenNewInvoice
  } = props;
  const router = useRouter()
  const downloadPdf = () => {
    const input = document.getElementById("reportpdf");
    var pdf = new jsPDF("p", "pt", "a4");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      // window.open(imgData);
      const unit = "pt";
      const size = [200, 400];
      const mobileSize = [750, 1580];
      const orientation = "portrait";
      let width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 10, 0, width - 20, height - 10);
      pdf.save(`report.pdf`);
    });
  };

  return (
    <>
      <div className={'mb-4'}>
        <NewProgressBar />
      </div>
      <div className="px-3">
        <div className={`${styles.progressDiv} mx-auto d-grid align-items-end`}>
          <div className="d-center justify-content-around">
            <div className="text-center">
              <Image
                role="button"
                // onClick={() => !form?._id && setTab("ENTER DETAIL")}
                src="/icons/common-icon/fillProgressCheck.svg"
                alt="checkImage"
                height={33}
                width={33}
              />
              <div>
                <Text
                  color={colors.black}
                  size={15}
                  fontWeight={400}
                  lineheight="19px"
                >{`ENTER DETAIL`}</Text>
              </div>
            </div>
            <div className="text-center">
              <Image
                role="button"
                // onClick={() => !form?._id && handleProceedToPricingDetails()}
                src={
                  tab === "ENTER DETAIL"
                    ? "/icons/common-icon/blankProgressCheck.svg"
                    : "/icons/common-icon/fillProgressCheck.svg"
                }
                alt="checkImage"
                height={33}
                width={33}
              />
              <div>
                {tab === "ENTER DETAIL"
                  ? <Text
                    color={colors.lightGray1}
                    size={15}
                    fontWeight={400}
                    lineheight="19px"
                  >{`ENTER PRICING DETAILS`}</Text>
                  : <Text
                    color={colors.black}
                    size={15}
                    fontWeight={400}
                    lineheight="19px"
                  >{`ENTER PRICING DETAILS`}</Text>}
              </div>
            </div>
            <div className="text-center">
              <Image
                role="button"
                // onClick={() => {
                //   setTab("INVOICE");
                // }}
                src={
                  tab === "INVOICE"
                    ? "/icons/common-icon/fillProgressCheck.svg"
                    : "/icons/common-icon/blankProgressCheck.svg"
                }
                alt="checkImage"
                height={33}
                width={33}
              />
              <div>
                {tab === "INVOICE"
                  ? <Text
                    color={colors.black}
                    size={15}
                    fontWeight={400}
                    lineheight="19px"
                  >{`VIEW DETAILS`}</Text>
                  : <Text
                    color={colors.lightGray1}
                    size={15}
                    fontWeight={400}
                    lineheight="19px"
                  >{`VIEW DETAILS`}</Text>}
              </div>
            </div>
          </div>
          <div>
            {tab === "ENTER PRICING DETAILS"
              ? <ProgressBar
                className={`${styles.progressBar}`}
                now={52}
                key={1}
              />
              : tab === "INVOICE"
                ? <ProgressBar
                  className={`${styles.progressBar}`}
                  now={100}
                  key={1}
                />
                : <ProgressBar
                  className={`${styles.progressBar}`}
                  now={20}
                  key={1}
                />}
          </div>
        </div>
        {tab === "ENTER DETAIL" &&
          <>
            <EditInvoice
              srNo={srNo}
              store={store}
              setTab={setTab}
              setForm={setForm}
              form={form}
              productIds={productIds}
              handleChange={handleChange}
              HandleSubmit={HandleSubmit}
              handleCloseEditInvoice={handleCloseEditInvoice}
              HandleUpdateInvoice={HandleUpdateInvoice}
              verifyCoupon={verifyCoupon}
              addressArray={addressArray}
              findFormErrors={findFormErrors}
              handleProceedToPricingDetails={handleProceedToPricingDetails}
              fetchUserByNumber={fetchUserByNumber}
              HandlefetchUserByNumber={HandlefetchUserByNumber}
              invoiceData={invoiceData}
              AddMoreProductPrice={AddMoreProductPrice}
              RemoveProductPrice={RemoveProductPrice}
              handleDeliveryAddressChange={handleDeliveryAddressChange}
              setDeliveryAddressArray={setDeliveryAddressArray}
              deliveryAddressArray={deliveryAddressArray}
            />
          </>
        }
        {tab === "ENTER PRICING DETAILS" &&
          <AddInvoice
            custom={custom}
            setCustom={setCustom}

            srNo={srNo}
            store={store}
            setTab={setTab}
            setForm={setForm}
            searchname={searchname}
            isLoading={isLoading}
            searchFilter={searchFilter}
            fetchProductbyid={fetchProductbyid}
            form={form}
            handleChange={handleChange}
            HandleSubmit={HandleSubmit}
            handleCloseEditInvoice={handleCloseEditInvoice}
            HandleUpdateInvoice={HandleUpdateInvoice}
            PriceArray={PriceArray}
            priceState={priceState}
            setPriceState={setPriceState}
            handlePriceChange={handlePriceChange}
            handleGetGrossPrice={handleGetGrossPrice}
            GetNetPrice={GetNetPrice}
            GetDiamondPrice={GetDiamondPrice}
            GetStonePrice={GetStonePrice}
            GetSolitaireOnePrice={GetSolitaireOnePrice}
            GetSolitaireTwoPrice={GetSolitaireTwoPrice}
            handleGetGrandTotal={handleGetGrandTotal}
            verifyCoupon={verifyCoupon}
            showOtpInput={showOtpInput}
            setShowOtpInput={setShowOtpInput}
            addressArray={addressArray}
            handleEmployeeChange={handleEmployeeChange}
            Wallet={Wallet}
            handleGetOtpButton={handleGetOtpButton}
            verifyOtp={verifyOtp}
            HandleCashChange={HandleCashChange}
            swipeData={swipeData}
            handlSwipeChange={handlSwipeChange}
            setSwipeData={setSwipeData}
            bankData={bankData}
            setBankData={setBankData}
            handlBankTransferChange={handlBankTransferChange}
            advancePay={advancePay}
            setAdvancePay={setAdvancePay}
            handleAdvancePaymentChange={handleAdvancePaymentChange}
            GetAdvanceTotal={GetAdvanceTotal}
            lessAdvancePaidArr={lessAdvancePaidArr}
            findFormErrors={findFormErrors}
            handleProceedToPricingDetails={handleProceedToPricingDetails}
            fetchUserByNumber={fetchUserByNumber}
            HandlefetchUserByNumber={HandlefetchUserByNumber}
            setAddressArray={setAddressArray}
            user={user}
            handleGetMakingPrice={handleGetMakingPrice}
            AddMoreProductPrice={AddMoreProductPrice}
            RemoveProductPrice={RemoveProductPrice}
            newPriceState={newPriceState}
            isVerifiedOtp={isVerifiedOtp}
            setIsVerifiedOtp={setIsVerifiedOtp}
            setOtpMessage={setOtpMessage}
            otpMessage={otpMessage}
            GetStorePincodeAddress={GetStorePincodeAddress}
            PostOffice={PostOffice}
            handleDeliveryAddressChange={handleDeliveryAddressChange}
            setDeliveryAddressArray={setDeliveryAddressArray}
            deliveryAddressArray={deliveryAddressArray}
          />
        }
        {tab === "INVOICE" &&
          <Container fluid>
            <div className="mt-5">
              <Row>
                <Col md={12} className="my-3">
                  <Row>
                    <Col md={4}>
                      <div
                        onClick={() => {
                          router.reload()
                        }}
                        role="button"
                      >
                        <NewTitleHeader title={"INVOICE"} icon={profileIcon} aniIcon={invoiceAniIcon} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className=" overflow-auto">
              <div fluid className={`${styles.InvoicePdf} mt-5`}>
                <InvoicePdf
                  pdf={pdf}
                  componentRef={componentRef}
                  price={price}
                  invoiceData={invoiceData}
                  pdfDataValue={pdfDataValue}
                  priceState={priceState}
                  addressArray={addressArray}
                  deliveryAddressArray={deliveryAddressArray}
                  form={form}
                  setTab={setTab}
                  handleGetGrandTotal={handleGetGrandTotal}
                  GetAdvanceTotal={GetAdvanceTotal}
                  advancePay={advancePay}
                  handleGetMakingPrice={handleGetMakingPrice}
                  
                />
              </div>
            </div>
            <div
              className={`${styles.invoiceBtn} d-center justify-content-evenly py-5`}
            >
              <Row>
                <Col md={6}>
                  <div >
                    <ReactToPrint
                      trigger={() =>
                        <button
                          className={`${styles.pdfDownloadBtn} text-white mx-auto px-4 py-1 my-2`}
                        >
                          Download PDF
                        </button>}
                      content={() => componentRef.current}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <button
                    className={`${styles.pdfDownloadBtn} text-white mx-auto px-4 py-1 my-2`}
                    onClick={() => {
                      setTab("ENTER DETAIL"), 
                      setForm("");
                      GenNewInvoice()
                    }}
                  >New Invoice
                  </button>
                </Col>
              </Row>
            </div>
            {/* <div
            className={`${styles.invoiceBtn} d-center justify-content-evenly py-5`}
          >
            <div onClick={() => downloadPdf()}>
              <ReactToPrint
                trigger={() =>
                  <button
                    className={`${styles.pdfDownloadBtn} text-white px-5 py-1 my-4`}
                  >
                    Download PDF
                  </button>}
                content={() => componentRef.current}
              />
            </div>

            <div
              role="button"
              onClick={() => {
                setTab("ENTER DETAIL"), setForm("");
              }}
            >
              <Text
                color={colors.white}
                size={14}
                fontWeight={600}
                lineheight="18px"
                className={`${styles.newInvoice} d-center`}
              >
                {`New Invoice`}
              </Text>
            </div>
          </div> */}
          </Container>}
      </div>
    </>
  );
};

export default EditInvoices;
