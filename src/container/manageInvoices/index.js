import Image from "next/image";
import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Button from "../../components/basic/button";
import Text from "../../components/basic/text";
import TableComponent from "../../components/common/Table";
import { colors } from "../../constants/colors";
import Pagination from "../../components/common/pagination";
import { glSizeIcon } from "../home/searchProduct/image";
import styles from "./styles.module.scss";
import NewTitleHeader from "../components/titleHeader/NewTitleHeader";
import { useOrdersDetail } from "./orderDetail/hooks";
import OrdersDetail from "./orderDetail";
import { useEditInvoices } from "./editInvoice/hooks";
import EditInvoices from "./editInvoice";
import Link from "next/link";
import TitleHeader from "../components/titleHeader";
import BreadcrumbText from "../../components/basic/BreadcrumbText";
import { useManageInvoices } from "./hooks";
import { CommonTableSkeleton } from "../../skeleton/components/commonTableSkeleton";
import { TableSkeleton } from "../../skeleton/components/tableSkeleton";
import NewProgressBar from "../components/progressBar";
import { AddButton } from "../../components/common/addButton";
import { InvoicePdf } from "./invoicePdf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ManageInvoiceData = (props) => {
  const {
    showOrderDetailForm,
    handleShowOrderDetailForm,
    handleCloseOrderDetailForm,
    handleOpenOrderDetailForm,
  } = useOrdersDetail();
  const {
    showEditInvoiceForm,
    setShowEditInvoiceForm,
    handleCloseEditInvoice,
    handleShowOEditInvoice,
  } = useEditInvoices();
  const {
    form,
    manageInvoiceData,
    invoices,
    isLoadingSkt,
    isFetching,
    setForm,
    handleChange,
    currentPage,

    HandleSubmit,
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
    count,
    setCurrentPage,
    HandleSortBy,
    HandleUpdateInvoice,
    fetchLatestId,
    FetchStore,
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
    tab,
    setTab,
    findFormErrors,
    handleProceedToPricingDetails,
    setAddressArray,
    user,
    invoiceData,
    setInvoiceData,
    handleGetMakingPrice,
    AddMoreProductPrice,
    RemoveProductPrice,
    newPriceState,
    byInvoiceIdRef,
    isVerifiedOtp,
    setIsVerifiedOtp,
    setOtpMessage,
    otpMessage,
    handleDeliveryAddressChange,
    setDeliveryAddressArray,
    deliveryAddressArray,
    HandlefetchUserByNumber,
    GetStorePincodeAddress,
    PostOffice,
    custom,
    setCustom,
    GenNewInvoice
  } = useManageInvoices();
  const componentRef = useRef();

  const TableHead = () => {
    return (
      <>
        <thead className={`${styles.tableHeadings}`}>
          <tr className={`${styles.trTag}`}>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                SR.NO
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                CUSTOMER NAME
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                ORDER ID
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                INVOICE ID
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                STORE ID
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                CREATED_ON
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                CREATED_BY
              </Text>
            </th>
            <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                ACTION
              </Text>
            </th>
            {/* <th className={`${styles.iventoryTable}`}>
              <Text size={11} fontWeight={700} color={colors?.black}>
                ACTION
              </Text>
            </th> */}
          </tr>
        </thead>
      </>
    );
  };
  const [isDate, setIsDate] = useState(false)
  const downloadInvoicePdf = () => {
    const input = document.getElementById("reportpdf");
    var pdf = new jsPDF("p", "pt", "a4");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/jpg", 1.0);
      // window.open(imgData);
      const unit = "pt";
      const size = [200, 400];
      const mobileSize = [750, 1580];
      const orientation = "portrait";
      let width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPG", 10, 0, width - 20, height - 10);
      pdf.save(`invoice.pdf`);
    });
  };

  return (
    <div>
      {showOrderDetailForm ? (
        <OrdersDetail
          handleShowOrderDetailForm={handleShowOrderDetailForm}
          handleCloseOrderDetailForm={handleCloseOrderDetailForm}
          form={form}
          setForm={setForm}
          AddMoreProductPrice={AddMoreProductPrice}
        />
      ) : showEditInvoiceForm ? (
        <EditInvoices
        GenNewInvoice={GenNewInvoice}
          custom={custom}
          setCustom={setCustom}
          HandlefetchUserByNumber={HandlefetchUserByNumber}
          handleShowOEditInvoice={handleShowOEditInvoice}
          HandleSubmit={HandleSubmit}
          searchname={searchname}
          isLoading={isLoading}
          searchFilter={searchFilter}
          fetchProductbyid={fetchProductbyid}
          productIds={productIds}
          pdf={pdf}
          pdfDataValue={pdfDataValue}
          invoiceData={invoiceData}
          price={price}
          srNo={srNo}
          store={store}
          handleCloseEditInvoice={handleCloseEditInvoice}
          form={form}
          setForm={setForm}
          handleChange={handleChange}
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
          tab={tab}
          setTab={setTab}
          findFormErrors={findFormErrors}
          handleProceedToPricingDetails={handleProceedToPricingDetails}
          fetchUserByNumber={fetchUserByNumber}
          setAddressArray={setAddressArray}
          user={user}
          componentRef={componentRef}
          setInvoiceData={setInvoiceData}
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
      ) : (
        <div>
          {
            (!invoices || isLoadingSkt) ?
              <>
                <CommonTableSkeleton />
              </>
              :
              <>
                <div className={'mb-4'}>
                  <NewProgressBar />
                </div>
                <Container fluid>
                  <Row>
                    <Col md={12}>
                      <BreadcrumbText>
                        <Breadcrumb>
                          <Breadcrumb.Item>home</Breadcrumb.Item>
                          <Breadcrumb.Item>INVOICES</Breadcrumb.Item>
                          <Breadcrumb.Item active>MANAGE INVOICES</Breadcrumb.Item>
                        </Breadcrumb>
                      </BreadcrumbText>
                    </Col>
                    <Col md={12}>
                      <Row className="mb-3">
                        <Col md={5} lg={4} className="mt-4">
                          <Link href="/dashboard" passHref>
                            <div role={"button"}>
                              <TitleHeader
                                title={"MANAGE INVOICES"}
                                icon={glSizeIcon}
                              // aniIcon={}
                              />
                            </div>
                          </Link>
                        </Col>
                        <Col md={12} lg={8} className="">
                          <Row>
                            <Col md={6} lg={6}>
                              <Row className="align-items-center">
                                <Col md={3}>
                                  <div className="text-md-end">
                                    <Text
                                      size={13}
                                      fontWeight={700}
                                      color={colors?.black}
                                    >
                                      Search By
                                    </Text>
                                  </div>
                                </Col>
                                <Col md={9} className="">
                                  <div>
                                    <Form.Group
                                      className={` d-flex`}
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Control
                                        className={`text-center ${styles.searchInputBox}`}
                                        ref={byInvoiceIdRef}
                                        placeholder="CUSTOMER NAME - ORDER ID - INVOICE ID"
                                        value={byInvoiceIdRef?.current?.value}
                                        onChange={(e) => searchFilter(e)}
                                      // isMulti
                                      ></Form.Control>
                                      <div className={`${styles.searchIconDiv}`}>
                                        <Image
                                          src="/icons/common-icon/searchIcon.svg"
                                          width={15}
                                          height={15}
                                        />
                                      </div>
                                    </Form.Group>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={3} lg={3}>
                              <div className="d-flex justify-content-evenly">
                                <div className="me-2">
                                  <Text
                                    size={11}
                                    fontWeight={700}
                                    color={colors?.black}
                                  >
                                    By Created_at:
                                  </Text>
                                </div>
                                <div>
                                  <div className="d-flex">
                                    <div className="me-2">
                                      <div className="d-flex">
                                        <div className="me-2 position-relative">
                                          <div className={`${styles.quesadilla}`}>
                                            <input
                                              type={isDate ? `date` : `text`}
                                              onFocus={() => setIsDate(true)}
                                              onBlur={() => setIsDate(false)}
                                              name="from_date"
                                              placeholder="From date"
                                              onChange={handleChange}
                                              className={`${styles.inputBoxFromToDate} ${styles.enchilada}`} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex">
                                    <div className="me-2 position-relative">
                                      <div className="d-flex">
                                        <div className="me-2 position-relative">
                                          <div className={`${styles.quesadilla}`}>
                                            <input
                                              type={isDate ? `date` : `text`}
                                              onFocus={() => setIsDate(true)}
                                              onBlur={() => setIsDate(false)}
                                              placeholder="To date"
                                              name="to_date"
                                              onChange={handleChange}
                                              className={`${styles.inputBoxFromToDate} ${styles.enchilada}`} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="d-flex mt-2">
                                      <div className="">
                                        <Button
                                          className={`${styles.searchResetBtn} me-1`}
                                        // onClick={() => HandleGlfilter()}
                                        >
                                          Search
                                        </Button>
                                      </div>
                                      <div>
                                        <Button className={`${styles.searchResetBtn}`}>
                                          Reset
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md={3} lg={3}>
                              <div className="d-flex">
                                <AddButton title={'Add New'} handleClick={() => {
                                  handleShowOEditInvoice();
                                  setForm("");
                                  fetchLatestId();
                                  FetchStore();
                                }} />
                              </div>
                              <div
                                role="button"
                                className={`mt-2 ${styles.sortByBox} d-center`}
                              >
                                <div className={`me-2`}>
                                  <div>
                                    <Image
                                      className={`align-items-center`}
                                      src="/icons/products/sort-by-line.svg"
                                      alt="sort-img"
                                      width={15}
                                      height={10}
                                    />
                                  </div>
                                </div>
                                <Form.Select
                                  className={`${styles.formSelect}`}
                                  aria-label="Default select example"
                                  name="sortBy"
                                  value={form?.sortBy}
                                  onChange={handleChange}
                                  onClick={() => HandleSortBy()}
                                >
                                  <option>Sort by</option>
                                  <option value="thisWeek">This week</option>
                                  <option value="thisMonth">This month</option>
                                  <option value="recentJoin">Recently Added</option>
                                </Form.Select>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      {/* DISPLAY NONE PDF FOR DOWNLOAD */}
                      {/* <div className=" overflow-auto d-none">
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
                      </div> */}
                      {
                        isFetching ?
                          <TableSkeleton />
                          :
                          <div className={`border-bottom`}>
                            <TableComponent
                              TableHead={TableHead}
                              type="manageInvoiceList"
                              invoices={invoices}
                              setForm={setForm}
                              showEditInvoiceForm={handleShowOEditInvoice}
                              setAdvancePay={setAdvancePay}
                              setPriceState={setPriceState}
                              setSwipeData={setSwipeData}
                              setBankData={setBankData}
                              // manageInvoiceList={manageInvoiceList}
                              handleShowOrderDetailForm={handleShowOrderDetailForm}
                              manageInvoiceData={manageInvoiceData}
                              addressArray={addressArray}
                              setAddressArray={setAddressArray}
                              setDeliveryAddressArray={setDeliveryAddressArray}
                              setTab={setTab}
                              setShowEditInvoiceForm={setShowEditInvoiceForm}
                              setInvoiceData={setInvoiceData}
                              componentRef={componentRef}
                              downloadInvoicePdf={downloadInvoicePdf}
                            />
                          </div>
                      }
                      <Pagination
                        pageSize={10}
                        totalCount={count}
                        currentPage={currentPage}
                        onPageChange={(page) => { setCurrentPage(page) }}
                      />
                    </Col>
                  </Row>
                </Container>
              </>
          }
        </div>
      )}


    </div>
  );
};

export default ManageInvoiceData;