import React, { useEffect, useState } from "react";
import styles from "./table.module.scss";
import { Col, Row, Table, Form, Accordion, Modal } from "react-bootstrap";
import { colors } from "../../../constants/colors";
import Text from "../../basic/text";
import Button from "../../basic/button";
import Image from "next/image";
import { useWalletTab } from "./hooks";
import { CommonTableSkeleton } from "../../../skeleton/components/commonTableSkeleton";
import {
  greenTick,
  userIcon,
  ringIcon,
  arrowcircle,
  noImage,
} from "../../../container/home/searchProduct/image";
import moment, { isMoment } from "moment";
import SpinnerLoader from "../../../components/common/loaders";
import { useOrdersDetail } from "../../../container/manageInvoices/orderDetail/hooks";
import Link from "next/link";
import clsx from "clsx";
import { useGLC } from "../../../deliveries/generatePickup/hooks";
import LazyImage from "../../basic/lazy-image";
import { Select } from "antd";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import GradientBtn from "../../basic/button/gradientButton";

export const TAB_MENU_NEW = [
  { id: 1, title: "GARNET LANEE WALLET", tabName: "GL_WALLET" },
  { id: 2, title: "PROMOTIONAL WALLET", tabName: "PROMOTIONAL_WALLET" },
];
const TableComponent = (props) => {
  const {
    componentRef,
    downloadInvoicePdf,
    setDeliveryAddressArray,
    handleShowManageCreditNoteForm,
    exclusive,
    HandleCollection,
    UpdateCollectionActive,
    collections,
    upddateBannerActive,
    banner,
    TableHead,
    type,
    manufacturer,
    form,
    setForm,
    setShowAddAmountForm,
    occasions,
    Wallet,
    setShowTransactionHistory,
    updateData,
    productData,
    setShowMetaTagForm,
    setManufacturerList,
    handleShowOrderIdForm,
    designation,
    handleActiveInactiveStatus,
    handleShowAccessForm,
    vieweditpermission,
    handleShowOccasionForm,
    stylesdata,
    handleShowStylesForm,
    themes,
    handleShowThemesForm,
    curatedby,
    handleShowCuratedByForm,
    setShowDeliverydaysForm,
    handleShowDeliveryDaysForm,
    handleShowOrderDetailForm,
    solitiares,
    handleShowSolitiaresForm,
    handleShowUpdateSolitaireStockForm,
    handleShowUpdateStonesForm,
    stone,
    stocks,
    generatedPickup,
    certificates,
    handleShowGenerateCertification,
    certficatedata,
    setStock,
    handleGlcpage,
    selectedCategorydata,
    storeDetails,
    setShowAddNewStore,
    handleCloseStoreForm,
    handleShowStoreForm,
    storeEmplyeeDetails,
    handleEmployeeStatus,
    deletestore,
    stocktype,
    order,
    handleShowOrdersDetails,
    handleShowShippingAddress,
    manageInvoiceData,
    RingSizeRequest,
    requestAddress,
    AssignDelivery,
    handleChange,
    ringSizerTitle,
    downloadLabel,
    setDownloadLabel,
    label,
    handleShowModal,
    getTrack,
    setLabel,
    invoices,
    showNewOrdersDetail,
    setShowNewOrdersDetail,
    showEditInvoiceForm,
    setAdvancePay,
    setPriceState,
    setSwipeData,
    setBankData,
    setshowDetails,
    handleShowOrderDetails,
    handleShow,
    singleUser,
    setStaff,
    ReturnReasons,
    setShowAddReturnReason,
    RepairReasons,
    setShowAddReapairReason,
    setShowAddDailyWalkinsForm,
    setSingleInventory,
    downloadPdf,
    inventoryRef,
    removestocks,
    setAddressArray,
    setTab,
    setShowEditInvoiceForm,
    fireBaseCart,
    wishlist,
    setInvoiceData,
    shopByGender,
    currentPage,
    expressDelivery,
    DeleteBanner, 
    handleSaveExpressD,
    offers,
    updateOfferStatus,
    setSelectedStartDate,
    setSelectedEndDate
  } = props;
  
  const {
    tabView,
    manageWallet,
    setManageWallet,
    handleShowWalletTab,
    editShow,
    setEditShow,
    handleEditShow,
    handleEditClose,
  } = useWalletTab(props);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[]);
  return (
    <div>
      <Row>
        <Col md={12} className={`px-0 ${styles.iventoryTableScrollBar}`}>
          <div className={` text-center ${styles.tblBorder} table-responsive`}>
            <Table>
              {!manageWallet && TableHead()}
              {type == "orderstatus" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            100
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={greenTick}
                              alt="bar-code"
                              width={35}
                              height={35}
                            />
                          </div>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            ASHISH SOOD
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            PRD-LR-
                          </Text>
                        </td>
                        <td role="button" onClick={handleShowOrderIdForm}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            Order Id
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            RING
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            DIAMOND
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            29 Sep 2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            Order Id
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022
                          </Text>
                        </td>
                        <td>
                          {/* <Button className={styles.viewEditBtn}><Text size={9} fontWeight={700} color={colors?.roseGold}>View / Edit</Text></Button> */}
                          <Form.Select
                            role="button"
                            className={styles.selectBoxInput}
                            aria-label="Default select example"
                          >
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </td>
                        <td>
                          <div
                            role="button"
                            className={`d-flex align-items-center justify-content-center ${styles.okBtn}`}
                          >
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors.white}
                            >
                              OK
                            </Text>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "lentjewellery" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key} className={`border-bottom `}>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            5
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            5
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            Ashish
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            Ashish
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            Ashish
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className="py-3">
                          <Text size={11} fontWeight={400} color={colors.black}>
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className="py-3">
                          <div
                            role="button"
                            className={`d-flex align-items-center justify-content-center ${styles.downloadButton}`}
                          >
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors.roseGold}
                            >
                              Download
                            </Text>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "lentPageList" && (
                <tbody className="bg-light">
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key} className={`border-bottom `}>
                        <td>
                          <div>
                            <Form.Check
                              inline
                              name="group1"
                              type="checkbox"
                              className={``}
                              id={`inline-radio-1`}
                            />
                          </div>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            1
                          </Text>
                        </td>
                        <td>
                          <Image src={ringIcon} width={30} height={30} />
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            LR-2112-12-18KY-50001-A1
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            28,470 /-
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            2.200 / 2.110 Gm
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            0.10 Cts / 20
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            -
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            -
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            0.10 Cts / 1
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            Blocked
                          </Text>
                        </td>
                        <td>
                          <Text size={11} fontWeight={400} color={colors.black}>
                            Elante Mall
                          </Text>
                        </td>
                        <td className="d-flex justify-content-center">
                          <div
                            className={`d-flex align-items-center justify-content-center`}
                          >
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "trackOrderDetailslist" && (
                <tbody className="text-start position-relative">
                  <div className="tracking-line"></div>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, key) => {
                    return (
                      <tr key={key} className="">
                        <td className="py-3">
                          <div className="d-flex align-items-center w-100">
                            <div className="tracking-icon"></div>
                            <div className="tracking-content d-center justify-content-between ms-2 w-100">
                              <div>
                                <Text
                                  size={14}
                                  fontWeight={600}
                                  color={colors?.black}
                                >
                                  Return Request By Customer
                                </Text>
                              </div>
                              <div>
                                <Text
                                  size={12}
                                  fontWeight={500}
                                  color={colors?.golden}
                                  className="fst-italic"
                                >
                                  Thu | June 16 | 2.55 PM
                                </Text>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "shippingAddressDataName" && (
                <tbody className="text-start mb-5">
                  {/* {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, key) => {
                    return ( */}
                  <tr>
                    <td>
                      <div className="d-flex gap-1">
                        <Text size={14} fontWeight={700} color={colors?.black}>
                          Name :
                        </Text>
                        <Text size={13} fontWeight={500} color={colors?.black}>
                          {requestAddress?.name}
                        </Text>
                      </div>
                    </td>
                    <td className="">
                      <div className="d-flex gap-1">
                        <Text
                          size={14}
                          fontWeight={700}
                          color={colors?.black}
                        ></Text>
                        <Text
                          size={13}
                          fontWeight={500}
                          color={colors?.black}
                        ></Text>
                      </div>
                    </td>
                  </tr>
                  {/* );
                  })
                  } */}
                </tbody>
              )}

              {type == "shippingAddressData" && (
                <tbody className="text-start mb-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, key) => {
                    return (
                      <tr key={key} className="">
                        <td className="">
                          <div className="d-flex gap-1">
                            <Text
                              size={14}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              Name :
                            </Text>
                            <Text
                              size={13}
                              fontWeight={500}
                              color={colors?.black}
                            >
                              Abhimanyu
                            </Text>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "billingAddressData" && (
                <tbody className="text-start mb-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, key) => {
                    return (
                      <tr key={key} className="">
                        <td className="">
                          <div className="d-flex gap-1">
                            <Text
                              size={14}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              Name :
                            </Text>
                            <Text
                              size={13}
                              fontWeight={500}
                              color={colors?.black}
                            >
                              Ashis Sood
                            </Text>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "completedOrdersList" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            6
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={40}
                              height={40}
                            />
                          </div>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            3000-2022-8000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            LRB-1130-GL
                          </Text>
                        </td>
                        <td role="button" onClick={handleShowOrderIdForm}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            ORD-LR-080722-00-Y-18-3000-4000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            CUSTOMER
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            08-Nov-2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            Shipped to Manufactor
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            GLST1
                          </Text>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              onClick={() => {
                                setForm(pdata);
                                setShowMetaTagForm(true);

                                // setManufacturerList('addForm')
                              }}
                              className={styles.viewEditBtn}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              onClick={() => {
                                setForm(pdata);
                                setShowMetaTagForm(true);

                                // setManufacturerList('addForm')
                              }}
                              className={styles.viewEditBtn}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Download
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "manageOrdersList" && (
                <tbody>
                  {order?.[0] &&
                    order.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.srno ? data?.srno : `--`}
                            </Text>
                          </td>
                          <td>
                            <div>

                              <Image
                                src={data?.OrderItem && data?.OrderItem.length > 0 && data?.OrderItem[0].bannerImage ? data?.OrderItem[0].bannerImage
                                  : noImage}
                                alt="bar-code"
                                width={50}
                                height={50}
                              />
                            </div>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.customerdata?.length > 0 ? data?.customerdata[0]?.name
                                : `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {/* PRD-LR- */}
                              {data?.OrderItem?.length > 0 ? data?.OrderItem[0].glDesignNumber
                                : `--`}
                            </Text>
                          </td>

                          <td role="button" onClick={handleShowOrdersDetails}>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.orderId ? data?.orderId : `--`}
                            </Text>
                          </td>
                          <td role="button" onClick={handleShowOrdersDetails}>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.lots?.length > 0 ? data?.lots[0].lotId : `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.store_id
                                ? data?.store_id
                                : `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.orderStatus === "newOrder"
                                ? `New Order`
                                : `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.deliveryDate ? data?.deliveryDate : `--`}
                            </Text>
                          </td>
                          <td>
                            <div className={`px-1`}>
                              <Text
                                size={12}
                                fontWeight={700}
                                color={colors?.black}
                              >
                                {data?.orderStatus === "newOrder"
                                  ? `New Order`
                                  : `--`}
                              </Text>
                            </div>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(data?.createdAt).format(
                                "MMMM DD,YYYY | hh:mma"
                              )}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(data?.updatedAt).format(
                                "MMMM DD,YYYY | hh:mma"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                // onClick={() => {
                                //   setForm(pdata);
                                //   setShowMetaTagForm(true);


                                // }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "logsListing" && (
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, key) => {
                    return (
                      <tr className={` ${styles.textDirection}`}>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                            lineheight="16px"
                          >
                            Today 12:30:3013:630
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                            lineheight="16px"
                          >
                            INFO
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                            lineheight="16px"
                          >
                            sdn.hg.core
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                            lineheight="16px"
                          >
                            Component resolve
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                            lineheight="16px"
                          >
                            Message goes here
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                            lineheight="16px"
                          >
                            216.58.278.165
                          </Text>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "newOrdersList" && (
                <tbody>
                  {[1, 2, 3, 4].map((data, key) => {
                    return (
                      <tr>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            8
                          </Text>
                        </td>
                        <td>
                          <Image
                            src="/icons/common-icon/userIcon.svg"
                            width={25}
                            height={25}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ASHISH SOOD
                          </Text>
                        </td>
                        <td
                          role="button"
                          onClick={() => {
                            setShowNewOrdersDetail("orderDetails");
                          }}
                        >
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            RPR-LR-080722
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-300
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Customer
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            8-Nov-2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022
                          </Text>
                        </td>
                        <td className="d-center">
                          <div>
                            <Form.Group
                              className={`inputSelectBox`}
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select
                                closeMenuOnSelect={false}
                                value={""}
                                name=""
                                options={""}
                                onChange={""}
                                className={`formInput`}
                              >
                                <option value="select">Select</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div>
                            <div
                              role="button"
                              className={`${styles.okBtn} d-center ms-3`}
                            >
                              <Text
                                size={12}
                                fontWeight={400}
                                color={colors.white}
                              >
                                OK
                              </Text>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "manageCertificationList" && (
                <tbody>
                  {certificates.length > 0 ? (
                    certificates?.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.srno}
                            </Text>
                          </td>
                          <td className={`py-2`} role="button">
                            <Link
                              href={{
                                pathname: "/manageCertification/reports/[id]",
                                query: { id: data.certificationNumber },
                              }}
                            >
                              <Text
                                size={11}
                                fontWeight={400}
                                color={colors?.black}
                              >
                                {data.certificationNumber}
                              </Text>
                            </Link>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {selectedCategorydata?.length > 0
                                ? selectedCategorydata?.filter(
                                  (f) => f._id == data.productType
                                )?.[0]?.title
                                : ""}

                              {/* 
                              {data.productType} */}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.shapeCut}
                            </Text>
                          </td>
                          <td onClick={handleShowOrderIdForm}>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.grossWeight}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.netWeight}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.diamondWeight}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.color}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data.clarity}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.goldKarot}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data.updatedAt}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <div className="d-flex justify-content-center">
                                <Button
                                  onClick={() => {
                                    setForm(data);
                                    handleShowGenerateCertification();
                                  }}
                                  className={styles.viewEditBtn}
                                >
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.roseGold}
                                  >
                                    View / Edit
                                  </Text>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div
                              role="button"
                              className="d-flex justify-content-center"
                            >
                              <div className="">
                                <img
                                  src="/icons/settings/shareIcon.svg"
                                  alt="bar-code"
                                  width={15}
                                  height={15}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={12}>
                        {/* <h6 className="text-center">
                          Certificates not found...
                        </h6> */}
                        <div
                          className={`d-flex justify-content-center pt-3 pb-4`}
                        >
                          {loading ? (
                            <SpinnerLoader />
                          ) : (
                            `Certificates not found...`
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
              {type == "certificationReportData" && (
                <tbody>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        SUMMARY NO.
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.certificationNumber}
                      </Text>
                    </td>
                  </tr>

                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        DESCRIPTION
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.description}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        SHAPE/CUT
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.shapeCut}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        GROSS WEIGHT
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.grossWeight}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        NET WEIGHT
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.netWeight}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        TOTAL EST. WT.
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text
                        size={12}
                        fontWeight={500}
                        color={colors?.black}
                      ></Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        COLOR
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.color}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        CLARITY
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.clarity}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        KAROT
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        {certficatedata?.goldKarot}
                      </Text>
                    </td>
                  </tr>
                  <tr className="">
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        COMMENTS
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={11} fontWeight={500} color={colors?.black}>
                        :
                      </Text>
                    </td>
                    <td className={``}>
                      <Text size={12} fontWeight={500} color={colors?.black}>
                        One Diamond Ring
                      </Text>
                    </td>
                  </tr>
                </tbody>
              )}
              {type == "updateProduct" && (
                <tbody>
                  {productData &&
                    productData.length > 0 &&
                    productData.map((pdata, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2 ${styles.stockTable}`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.srno}
                            </Text>
                          </td>
                          <td className={`${styles.stockTable}`}>
                            <div>
                              <Image
                                src={
                                  pdata?.bannerImage?.yellowGold
                                    ? pdata.bannerImage.yellowGold
                                    : noImage
                                }
                                alt="bar-code"
                                width={35}
                                height={35}
                              />
                            </div>
                          </td>
                          <td className={`${styles.stockTable}`}>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {pdata?.title}
                            </Text>
                          </td>
                          <td className={`${styles.stockTable}`}>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {pdata?.glDesignNumber}
                            </Text>
                          </td>
                          <td className={`${styles.stockTable}`}>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.metaTag}
                            </Text>
                          </td>
                          <td x>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.metaDescription}
                            </Text>
                          </td>
                          <td className={`${styles.stockTable}`}>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(pdata?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td className={`${styles.stockTable} px-3`}>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(pdata);
                                  setShowMetaTagForm(true);

                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  className={`${styles.font8}`}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "manageInvoiceList" && (
                <tbody>
                  {invoices?.length > 0 &&
                    invoices.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.srNo}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.parentInvoiceId?.customerDetails?.receipentName || `--`}
                            </Text>
                          </td>
                          <td role="button" // onClick={handleShowOrderDetailForm}
                          >
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.orderId || data?.billingId || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.invoiceId || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.parentInvoiceId?.storeId || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(data?.createdAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.createdBy || `--`}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm({
                                    ...data,
                                    ...data?.notes,
                                    ...data?.orderDetail,
                                    ...data?.solitaire,
                                    pdf: "view"
                                  });
                                  setInvoiceData(data)
                                  setAddressArray([{ shippingAddress: data?.parentInvoiceId?.customerDetails }])
                                  setDeliveryAddressArray([{ shippingAddress: data?.parentInvoiceId?.customerDeliveryAddress }])
                                  // showEditInvoiceForm();
                                  setAdvancePay(data?.advancePaid);
                                  setPriceState([data?.InvoiceItems?.productPriceDetails]);
                                  setSwipeData(data?.swipe);
                                  setBankData(data?.bankTransfer);
                                  setShowEditInvoiceForm(true)
                                  setTab("INVOICE")
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View
                                </Text>
                              </Button>
                            </div>
                          </td>
                          {/* <td>
                            <div className="d-flex justify-content-center">
                              <Button className={styles.viewEditBtn} onClick={(e)=>downloadInvoicePdf(e)}>
                                <Text size={9} fontWeight={700} color={colors?.roseGold}>
                                  Download
                                </Text>
                              </Button>

                              <ReactToPrint
                                trigger={() =>
                                  <Button className={`${styles.viewEditBtn}`}
                                  style={{fontSize:"9px",color:"#f77433"}}
                                  >
                                    Download
                                  </Button>}
                                content={() => componentRef.current}
                              />
                            </div>
                          </td> */}
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "manageCreditNoteList" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            553603
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            ASHISH SOOD
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            3000-2022-8000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            CN-08072022-3000-9000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            INV-08072022-3000-2000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            50000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {`${data?.userType || `--`}`}
                          </Text>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              onClick={() => {
                                setForm(data);
                                handleShowManageCreditNoteForm(true);

                                // setManufacturerList('addForm')
                              }}
                              className={styles.viewEditBtn}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Download
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "manageCashDepositChallansList" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            553603
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            ASHISH SOOD
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            GL-2021-1000XYS
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            50000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            <a href="#" className={`${styles.list_Style}`}>
                              uploads/cash_challan20220609_112116.jpg
                            </a>
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            GLST1
                          </Text>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              onClick={() => {
                                setForm(pdata);
                                setShowMetaTagForm(true);

                                // setManufacturerList('addForm')
                              }}
                              className={styles.viewEditBtn}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "generatePickup" && (
                <tbody>
                  {generatedPickup?.length > 0 &&
                    generatedPickup?.map((data, key) => {
                      return (
                        <tr key={key} className="align-middle">
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {(1 - 1) * 10 + (key + 1)}
                            </Text>
                          </td>
                          <td>
                            <div>
                              {data.image ? (
                                <Image
                                  src={data?.image}
                                  alt="bar-code"
                                  width={40}
                                  height={40}
                                />
                              ) : (
                                <>{`${data?.deliveryResponse?.GenerateWayBillResult
                                  ? data?.deliveryResponse?.GenerateWayBillResult?.AWBNo
                                  : "--"
                                  }`}</>

                              )}
                            </div>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {`${data?.detail?.glsId ? data?.detail?.glsId : "--"
                                }`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {`${data?.orderData?.orderId
                                ? data?.orderData?.orderId
                                : "--"
                                }`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {`${data?.customerDetail?.customerName
                                ? data?.customerDetail?.customerName
                                : "--"
                                }`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {/* {`${data?.customerDetail?.number}`} */}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {`${data?.detail?.deliveryType
                                ? data?.detail?.deliveryType
                                : "--"
                                }`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {`${data?.orderData?.deliveryDate
                                ? data?.orderData?.deliveryDate
                                : "--"
                                }`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {`${data?.otherData?.deliveryPartnerType ===
                                "bluedart"
                                ? "Bluedart"
                                : data?.otherData?.deliveryPartnerTypu
                                }`}
                            </Text>
                          </td>
                          <td>
                            <div
                              role={"button"}
                              onClick={() => {
                                setLabel(data), setDownloadLabel(true);
                              }}
                              className={`${styles.viewOkBtn} h-100 w-75 mx-auto`}
                            >
                              Label
                            </div>
                            <div
                              role={"button"}
                              onClick={() => {
                                handleShowModal,
                                  getTrack(
                                    data?.otherData?.deliveryPartnerType ===
                                      "bluedart"
                                      ? data?.deliveryResponse
                                        ?.GenerateWayBillResult?.AWBNo
                                      : label?.deliveryResponse?.AWBNo,
                                    data?.otherData?.deliveryPartnerType
                                  );
                              }}
                              className={`${styles.viewOkBtn} h-100 w-75 mx-auto mt-1 `}
                            >
                              Track
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateOccasions" && (
                <tbody>
                  {occasions?.length > 0 ? (
                    occasions?.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.srno}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data.title}
                            </Text>
                          </td>
                          {/* <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.category?.title}
                            </Text>
                          </td> */}
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.numofproduct}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                className={`${styles.customCheck}`}
                                value={data?.active}
                                checked={data?.active}
                                onChange={() => {
                                  handleActiveInactiveStatus(
                                    data?._id,
                                    data.active ? false : true
                                  );
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(data);
                                  handleShowOccasionForm();
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7}>
                        {/* <h6 className="text-center">Occasions not found...</h6> */}
                        <div
                          className={`d-flex justify-content-center pt-3 pb-4`}
                        >
                          {loading ? (
                            <SpinnerLoader />
                          ) : (
                            `Occasions not found...`
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
              {type == "updateStyles" && (
                <tbody>
                  {stylesdata?.length > 0 ? (
                    stylesdata?.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {(10 * Number(currentPage - 1)) + (key + 1)}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data.title}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.category?.title}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.numofproduct}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                className={`${styles.customCheck}`}
                                value={data?.active}
                                checked={data?.active}
                                onChange={() => {
                                  handleActiveInactiveStatus(
                                    data?._id,
                                    data.active ? false : true
                                  );
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(data);
                                  handleShowStylesForm();
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7}>
                        {/* <h6 className="text-center">Styles not found...</h6> */}
                        <div
                          className={`d-flex justify-content-center pt-3 pb-4`}
                        >
                          {loading ? <SpinnerLoader /> : `Styles not found...`}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
              {type == "productListing" && (
                <tbody>
                  {stocks?.length > 0 &&
                    stocks?.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.srno}
                            </Text>
                          </td>

                          <td>
                            {stocktype == "goldcoins" ? (
                              <Image
                                src={
                                  data?.products?.length > 0
                                    ? data?.products[0]?.bannerImage?.yellowGold
                                      ? data?.products[0]?.bannerImage
                                        ?.yellowGold
                                      : noImage
                                    : noImage
                                }
                                alt="bar-code"
                                width={35}
                                height={35}
                              />
                            ) : (
                              <Image
                                src={
                                  data?.bannerImage
                                    ? data?.bannerImage
                                    : noImage
                                }
                                alt="bar-code"
                                width={35}
                                height={35}
                              />
                            )}
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.products?.[0]?.title}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.glsId}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.glDesignNumber}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.stockType != "goldcoins"
                                ? data?.karotType
                                : data?.coinKarot}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.stockType != "goldcoins"
                                ? data?.products?.[0]?.productType
                                : "Gold Coins"}

                              {/* {data?.products?.[0]?.productType} */}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              Online
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.createdAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                className={`${styles.customCheck}`}
                                value={data?.active}
                                checked={data?.active}
                                onChange={() => {
                                  handleActiveInactiveStatus(
                                    data?._id,
                                    data.active ? false : true
                                  );
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(data);
                                  // setStock('Gold Products')
                                  handleGlcpage();
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateThemes" && (
                <tbody>
                  {themes &&
                    themes.length > 0 &&
                    themes.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.srno}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data.title}
                            </Text>
                          </td>
                          {/* <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.category?.title}
                            </Text>
                          </td> */}
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.numofproduct}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                className={`${styles.customCheck}`}
                                value={data?.active}
                                checked={data?.active}
                                onChange={() => {
                                  handleActiveInactiveStatus(
                                    data?._id,
                                    data.active ? false : true
                                  );
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(data);
                                  handleShowThemesForm();
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateCuratedBy" && (
                <tbody>
                  {curatedby &&
                    curatedby.length > 0 &&
                    curatedby.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {data?.srno}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data.title}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {data?.numofproduct}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                className={`${styles.customCheck}`}
                                value={data?.active}
                                checked={data?.active}
                                onChange={() => {
                                  handleActiveInactiveStatus(
                                    data?._id,
                                    data.active ? false : true
                                  );
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(data);
                                  handleShowCuratedByForm();
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}

              {type == "updateStones" && (
                <tbody>
                  {stone &&
                    stone.length > 0 &&
                    stone.map((pdata, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.srno}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.code}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.title}
                            </Text>
                          </td>
                          {/* <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.size}
                            </Text>
                          </td> */}
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.color}
                            </Text>
                          </td>
                          {/* <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.clarity}
                            </Text>
                          </td> */}
                          {/* <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.shape}
                            </Text>
                          </td> */}
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.per_ct}
                            </Text>
                          </td>
                          {/* <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {parseInt(pdata?.per_ct) * pdata?.size}
                            </Text>
                          </td> */}

                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(pdata?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(pdata);
                                  handleShowUpdateStonesForm();

                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateSolitiaresstock" && (
                <tbody>
                  {solitiares &&
                    solitiares.length > 0 &&
                    solitiares.map((pdata, key) => {

                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.srno}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.solitaireStockId}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.glDesignNumber}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.store?.storeId
                                ? pdata?.store?.storeId
                                : `--`}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.solitaireSize}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.solitaireColor}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.solitaireClarity}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.shape}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.cut}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.per_price}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(pdata?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(pdata);
                                  handleShowUpdateSolitaireStockForm();

                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateStonestock" && (
                <tbody>
                  {stocks.length > 0 &&
                    stocks.map((pdata, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.srno}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.stoneStockId}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.glDesignNumber}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.store?.storeId
                                ? pdata?.store?.storeId
                                : `--`}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.stoneSize}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.stoneColor}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.stoneClarity}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.shape}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.cut}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.per_price}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(pdata?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(pdata);
                                  handleShowUpdateStonesForm();

                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateSolitiares" && (
                <tbody>
                  {solitiares &&
                    solitiares.length > 0 &&
                    solitiares.map((pdata, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.srno}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.code}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.size}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.color}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.clarity}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.shape}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.cut}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.per_ct}
                            </Text>
                          </td>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.per_price}
                            </Text>
                          </td>

                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(pdata?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(pdata);
                                  handleShowUpdateSolitaireStockForm();

                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type == "updateDeliveryDays" && (
                <tbody>
                  {productData &&
                    productData.length > 0 &&
                    productData.map((pdata, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.srno}
                            </Text>
                          </td>
                          <td>
                            <div>
                              <Image
                                src={
                                  pdata?.bannerImage?.yellowGold
                                    ? pdata.bannerImage.yellowGold
                                    : noImage
                                }
                                alt="bar-code"
                                width={35}
                                height={35}
                              />
                            </div>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {pdata?.title}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {pdata?.glDesignNumber}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {pdata?.deliveryDays}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(pdata?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => {
                                  setForm(pdata);
                                  handleShowDeliveryDaysForm();
                                  // setManufacturerList('addForm')
                                }}
                                className={styles.viewEditBtn}
                              >
                                <Text
                                  size={9}
                                  fontWeight={700}
                                  color={colors?.roseGold}
                                >
                                  View / Edit
                                </Text>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type === "manufacturerList" && (
                <tbody>
                  {manufacturer?.length > 0 ? (
                    manufacturer.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {item?.srNo ? `${item?.srNo}` : `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {item?.name}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {item?.uniqueId}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              PRD-LR-
                            </Text>
                          </td>
                          <td>
                            <div>
                              <Image
                                src={greenTick}
                                alt="bar-code"
                                width={15}
                                height={15}
                              />
                            </div>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {item?.createdAt}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {item?.updatedAt}
                            </Text>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setForm(item);
                                item?.staff?.length > 0 &&
                                  setStaff({ ...item?.staff[0] });
                                setManufacturerList("addForm");
                              }}
                              className={styles.viewEditBtn}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <>
                      {loading ? (
                        // <SpinnerLoader />
                        <CommonTableSkeleton />
                      ) : (
                        `Manufacture list not found...`
                      )}
                    </>
                  )}
                </tbody>
              )}
              {type == "repairingItemList" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            6
                          </Text>
                        </td>
                        <td>
                          <Image src={ringIcon} width={40} height={40} />
                        </td>
                        <td role="button" onClick={handleShowOrderDetailForm}>
                          <Text
                            size={12}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            3000-2022-8000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            LRB-1130-GL
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={800}
                            color={colors?.black}
                          >
                            ORD-LR-080722-00-Y-18-3000-4000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            CUSTOMER
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            08-Nov-2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={800}
                            color={colors?.black}
                          >
                            Shipped To Manufactor
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Form.Group
                              //   className={`inputSelectBox`}
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select
                                closeMenuOnSelect={false}
                                isMulti
                                name="customerName"
                                placeholder="Select"
                                options={""}
                                className={clsx(styles.inputBoxCategoryName)}
                              >
                                <option value="select">Select</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              onClick={() => {
                                setForm(pdata);
                                setShowMetaTagForm(true);
                              }}
                              className={styles.viewOkBtn}
                            >
                              OK
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type == "ringSizerRequest" && (
                <tbody>
                  {RingSizeRequest?.[0] &&
                    RingSizeRequest.map((ringRequest, key) => {
                      return (
                        <tr key={key}>
                          <td className={`py-2`}>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {ringRequest?.srNo || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={600}
                              color={colors?.black}
                            >
                              {ringRequest?.name}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={600}
                              color={colors?.black}
                            >
                              {/* SIZER-020202023-001 */}
                              {ringRequest?.requestId || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {ringRequest?.sizeType || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {ringRequest?.email || `--`}
                            </Text>
                          </td>
                          <td
                            role="button"
                            onClick={() => {
                              handleShowShippingAddress(ringRequest);
                            }}
                          >
                            <Text
                              size={11}
                              fontWeight={700}
                              color={colors?.black}
                            >
                              {ringRequest?.address || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {ringRequest?.expectedDeliveryDate || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={500}
                              color={colors?.black}
                            >
                              {ringRequest?.pincode || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={800}
                              color={colors?.black}
                            >
                              {ringRequest?.status || `--`}
                            </Text>
                          </td>
                          <td>
                            <Text
                              size={11}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {moment(ringRequest?.createdAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td>
                          {(ringSizerTitle === "NEW REQUEST" ||
                            ringSizerTitle === "") && (
                              <td>
                                <div className="d-flex justify-content-center">
                                  <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Select
                                      // name="assignToDelivery"
                                      placeholder="Select"
                                      onChange={(e) => {
                                        setForm({
                                          ...form,
                                          _id: ringRequest?._id,
                                          assignToDelivery: e.target.value,
                                        });
                                      }}
                                      options={""}
                                      className={clsx(
                                        styles.inputBoxCategoryName
                                      )}
                                    >
                                      <option>Select</option>
                                      <option value="Bluedart">Bluedart</option>
                                      <option value="Delhivery">Delhivery</option>
                                      <option value="Criticalog">
                                        Criticalog
                                      </option>
                                    </Form.Select>
                                  </Form.Group>
                                </div>
                              </td>
                            )}
                          {(ringSizerTitle === "NEW REQUEST" ||
                            ringSizerTitle === "") && (
                              <td>
                                <div className="d-flex justify-content-center">
                                  <Button
                                    onClick={() => {
                                      AssignDelivery(ringRequest);
                                    }}
                                    className={styles.viewOkBtn}
                                  >
                                    OK
                                  </Button>
                                </div>
                              </td>
                            )}
                        </tr>
                      );
                    })}
                </tbody>
              )}
              {type === "mainBanner" && (
                <tbody>
                  {banner?.length > 0 && banner?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.title || `--`}
                          </Text>
                        </td>
                        <td>
                          <Image
                            src={item?.image ? item?.image : `/--`}
                            width={150}
                            height={36}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.url || `--`}
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.priority}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(item?.createdAt).format("MMMM DD, YYYY  | hh:mm a")}
                          </Text>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              setForm(item);
                              handleShow();
                            }}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="active"
                              className={`${styles.customCheck}`}
                              value={item?.active}
                              checked={item?.active}
                              onClick={() => upddateBannerActive(item?._id, item?.active)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
               {type === "offers" && (
                <tbody>
                  {offers?.length > 0 && offers?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.srNo}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.title || `--`}
                          </Text>
                        </td>
                        <td>
                          <Image
                            src={item?.image ? item?.image : `/--`}
                            width={150}
                            height={36}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.url || `--`}
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.priority}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(item?.createdAt).format("MMMM DD, YYYY  | hh:mm a")}
                          </Text>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              setForm(item);
                              handleShow();
                              setSelectedStartDate(new Date(item?.startDate))
                              setSelectedEndDate(new Date(item?.endDate))        
                            }}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="active"
                              className={`${styles.customCheck}`}
                              value={item?.active}
                              checked={item?.active}
                              onClick={() => updateOfferStatus(item?._id, item?.active)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "category" && (
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Image
                            src="/icons/banner-section/bangles.svg"
                            width={30}
                            height={30}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Rings
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            www.garnetlanee.com/rings.html
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <Button
                            onClick={handleShow}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="active"
                              className={`${styles.customCheck}`}
                            // value={data?.active}
                            // checked={data?.active}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "shopByGender" && (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data, index) => {
                    return (
                      <tr>
                        <td className="py-2">
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={14}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            Womens
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={14}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            www.garnetlanee.com/rings.html
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <Button
                            onClick={handleShow}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="active"
                              className={`${styles.customCheck}`}
                            // value={data?.active}
                            // checked={data?.active}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "exclusive" && (
                <tbody>
                  {exclusive?.length > 0 && exclusive?.map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.title || `--`}
                          </Text>
                        </td>
                        <td>
                          <Image
                            src={data?.image || `/`}
                            width={150}
                            height={36}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.description || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.url || `--`}
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format("MMMM DD, YYYY  | hh:mm a")}
                          </Text>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              setForm(data)
                              handleShow()
                            }}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
               {type === "shopbyGenderdata" && (
                <tbody>
                  {shopByGender?.length > 0 && shopByGender?.map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.title || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.url || `--`}
                          </Text>
                        </td>
                        <td>
                          <Image
                            src={data?.image || `/`}
                            width={150}
                            height={36}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format("MMMM DD, YYYY  | hh:mm a")}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.createdAt).format("MMMM DD, YYYY  | hh:mm a")}
                          </Text>
                        </td>
                        <td>
                          <Button
                            onClick={()=>{
                              setForm(data)
                              handleShow()
                            }}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "dashBoardExclusive" && (
                <tbody>
                  {collections?.length > 0 && collections?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index + 1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.title}
                          </Text>
                        </td>
                        <td>
                          <Image
                            src={data?.image}
                            width={150}
                            height={36}
                          />
                        </td>

                        <td>
                          <div className={`d-flex justify-content-evenly `}>
                            {/* <div
                              className={`d-flex align-items-center border-right`}
                              onClick={()=>{
                                HandleCollection(data?._id,'delete')
                              }}
                            >
                              <LazyImage
                                src="/icons/common-icon/deleteIcon.svg"
                                className={`d-flex pe-2`}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.black}
                              >
                                Delete
                              </Text>
                            </div> */}
                            <div
                              className={`d-flex align-items-center`}
                              role="button"
                              onClick={() => {
                                setForm(data)
                                handleShow()
                              }}>
                              <LazyImage
                                src="/icons/settings/editNewIcon.svg"
                                className={`d-flex me-2 `}
                                width={8}
                                height={8}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Edit
                              </Text>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            name="active"
                            className={`${styles.customCheck}`}
                            value={data?.active}
                            checked={data?.active}
                            onClick={() => UpdateCollectionActive(data?._id, data?.active)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "expressDelivery" && (
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            1
                          </Text>
                        </td>

                        <td>
                          <Image
                            src="/icons/banner-section/tableImage.svg"
                            width={150}
                            height={36}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            www.garnetlanee.com/rings.html
                          </Text>
                        </td>

                        <td>
                          <Button
                            onClick={() => {
                              setEditShow(true);
                            }}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "expressDeliverySpecialDiscount" && (
                <tbody>
                  {expressDelivery?.map((data, index) => {
                    return (
                      <tr >
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {index+1}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data.title}
                          </Text>
                        </td>
                        <td>
                          <LazyImage
                            src={data?.image}
                            width={150}
                            height={36}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data.url}
                          </Text>
                        </td>

                        <td>
                          <div className={`d-flex justify-content-center `}>
                            <div
                              className={`d-flex align-items-center ${styles.borderRight}`}
                              onClick={()=>{
                                DeleteBanner(data?._id)
                              }}
                            >
                              <LazyImage
                                src="/icons/common-icon/deleteIcon.svg"
                                className={`d-flex pe-2`}
                              />

                              <Text
                                size={11}
                                fontWeight={400}
                                color={colors?.black}
                              >
                                Delete
                              </Text>
                            </div>
                            <div className={`d-flex align-items-center ps-3`} 
                             onClick={()=>{
                              setForm(data)
                              handleShow()
                            }}>
                              <LazyImage
                                src="/icons/settings/editNewIcon.svg"
                                className={`d-flex me-2 `}
                                width={8}
                                height={8}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Edit
                              </Text>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "customerReview" && (
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            1
                          </Text>
                        </td>
                        <td>
                          <Image
                            src="/icons/products/product1.svg"
                            width={40}
                            height={40}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Carry Forward Diamond Ring
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            PRD-LR-2112-GL-2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-GL
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            RING
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className={`${styles.actionbtnTable}`}>
                          <div className="d-flex justify-content-center">
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Select
                                placeholder="Select"
                                options={""}
                                className={clsx(styles.inputBoxCategoryName)}
                              >
                                <option>Select</option>
                                <option value="">Option1</option>
                                <option value="">Option2</option>
                                <option value="">Option3</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div
                            role="button"
                            className={`d-flex align-items-center justify-content-center ${styles.okBtn}`}
                          >
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors.white}
                            >
                              OK
                            </Text>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="active"
                              className={`${styles.customCheck}`}
                            // value={data?.active}
                            // checked={data?.active}
                            />
                          </div>
                        </td>
                        <td>
                          <Button
                            onClick={handleShow}
                            className={styles.viewEditBtn}
                          >
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "header" && (
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            1
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Express Delivery
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Elegance in Style
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            www.garnetlanee.com/rings.html
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Elegance in Style
                          </Text>
                        </td>

                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="active"
                              className={`${styles.customCheck}`}
                            // value={data?.active}
                            // checked={data?.active}
                            />
                          </div>
                        </td>
                        <td>
                          <div className={`d-flex justify-content-evenly `}>
                            <div className={`d-flex align-items-center border-right`}>
                              <LazyImage
                                src="/icons/common-icon/deleteIcon.svg"
                                className={`d-flex pe-2`}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.black}
                              >
                                Delete
                              </Text>
                            </div>
                            <div className={`d-flex align-items-center`}>
                              <LazyImage
                                src="/icons/settings/editNewIcon.svg"
                                className={`d-flex me-2 `}
                                width={8}
                                height={8}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Edit
                              </Text>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {type === "salesReport" && (
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                    return (
                      <tr>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            1
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Sales Reports
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            15
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Elante Mall , Chandigarh
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>

                        <td>
                          <Button className={styles.viewEditBtn}>
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                            >
                              View
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              <tbody>
                {type === "permission" &&
                  designation?.length > 0 &&
                  designation.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.srno}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.name}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(item?.createdAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(item?.updatedAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        <td>
                          <Button className={styles.viewEditBtn}>
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                              onClick={() => {
                                vieweditpermission(item?._id);
                              }}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                        <td>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            name="active"
                            className={`${styles.customCheck}`}
                            value={item?.active}
                            checked={item?.active}
                            onChange={() => {
                              handleActiveInactiveStatus(
                                item?.id,
                                item.active ? false : true
                              );
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                {type === "manageStore" &&
                  storeDetails?.[0] &&
                  storeDetails.map((store, index) => {
                    return (
                      <tr key={index}>
                        <td
                          // onClick={() => {
                          // deletestore(store?._id);
                          //   deletestore("628f539a6bc5217534c00f68");

                          // }}
                          className={`py-2`}
                        >
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {`${store?.srNo}`}
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={
                                store?.bannerImage
                                  ? store?.bannerImage
                                  : userIcon
                              }
                              alt="bar-code"
                              width={29.67}
                              height={30}
                            />
                          </div>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {store?.legalFirmName
                              ? `${store?.legalFirmName}`
                              : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {store?.storeId ? `${store?.storeId}` : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {store?.userName ? `${store?.userName}` : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {store?.storeType ? `${store?.storeType}` : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {store?.gstNumber ? `${store?.gstNumber}` : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {store?.email ? `${store?.email}` : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(store?.createdAt).format(
                              "DD/MM/YYYY  | h:mm:ss"
                            )}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(store?.updatedAt).format(
                              "DD/MM/YYYY  | h:mm:ss"
                            )}
                          </Text>
                        </td>
                        <td>
                          <Button className={styles.viewEditBtn}>
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.roseGold}
                              onClick={() => {
                                setForm(store);
                                handleShowStoreForm();
                              }}
                            >
                              View / Edit
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}

                {type === "manageInventory" &&
                  stocks?.length > 0 &&
                  stocks?.length > 0 &&
                  stocks.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srno}
                          </Text>
                        </td>
                        <td className={`py-2`}>
                          <Image
                            src={
                              data?.products?.length > 0
                                ? data?.products[0]?.bannerImage?.yellowGold
                                  ? data?.products[0]?.bannerImage?.yellowGold
                                  : noImage
                                : noImage
                            }
                            alt="bar-code"
                            width={35}
                            height={35}
                          />
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.glsId}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.products?.length > 0
                              ? data?.products[0]?.productId
                                ? data?.products[0]?.productId
                                : ""
                              : ""}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.categorydata?.length > 0
                              ? data?.categorydata[0]?.title
                                ? data?.categorydata[0]?.title
                                : ""
                              : ""}
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.weight}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.netWeight}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.diamondWeight}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.numofproduct}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.karotType}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.diamondPeices || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.diamondColor}/{data?.diamondClarity}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.metalColor}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.stockdatas?.length > 0 &&
                              data?.stockdatas.map((sdata, key) => {
                                if (sdata?.stockType == "Solitaire") {
                                  return sdata?.solitaireSize + ",";
                                }
                              })}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.stockdatas?.length > 0 &&
                              data?.stockdatas.map((sdata, key) => {
                                if (sdata?.stockType == "Solitaire") {
                                  return sdata?.solitaireStockId + ",";
                                }
                              })}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.stoneWeight}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.stoneQuantity}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.certification}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.productCertiNum}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.orderId}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.storeId}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.active == true ? "Yes" : "No"}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          ></Text>
                        </td>
                        {/* <td>
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors?.black}
                            >
                              {" "}
                              {moment(data?.updatedAt).format(
                                "MMMM DD, YYYY  | hh:mm a"
                              )}
                            </Text>
                          </td> */}
                        {/* <td>
                            <div className="d-flex justify-content-evenly">
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                className={`${styles.customCheck}`}
                                value={data?.active}
                                checked={data?.active}
                                onChange={() => {
                                  handleActiveInactiveStatus(
                                    data?._id,
                                    data.active ? false : true
                                  );
                                }}
                              />
                            </div>inventoryRef
                          </td> */}
                        <td>
                          <div className="d-flex justify-content-center">
                            <ReactToPrint
                              trigger={() => (
                                <Button className={styles.viewEditBtn}>
                                  <Text
                                    size={9}
                                    fontWeight={700}
                                    color={colors?.roseGold}
                                  >
                                    Download
                                  </Text>
                                </Button>
                              )}
                              content={() => inventoryRef.current}
                            />
                            {/* <Button
                              onClick={() => {
                                downloadPdf()
                                setSingleInventory(data)
                              }
                              }
                              className={styles.viewEditBtn}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Download
                              </Text>
                            </Button> */}
                            <Button
                              onClick={() => {
                                // setForm(data);
                                // handleShowThemesForm();
                                handleShowOrderDetails();
                                setSingleInventory(data);
                              }}
                              className={`${styles.viewBtn}`}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.black5}
                              >
                                view
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "acceptStock" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={30}
                              height={30}
                            />
                          </div>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-12-18KY-200000-A1
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            GL-2021-1000XYS
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Ring
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-1130-GL
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            3.780
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            3.280
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Quickship
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            12
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewBlueBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.purple}
                              >
                                View{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div className={`${styles.btnDiv}`}>
                            <Button className={`me-3 ${styles.downloadBtn}`}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Download{" "}
                              </Text>
                            </Button>
                            <Button className={`${styles.okBtn}`}>
                              <Text
                                size={10}
                                fontWeight={700}
                                color={colors?.white}
                              >
                                OK
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "dailyWalkins" &&
                  storeDetails?.length > 0 &&
                  storeDetails.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srNo || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.name || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.storeId || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.dailyWalkin || `--`}
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={greenTick}
                              alt="bar-code"
                              width={15}
                              height={15}
                            />
                          </div>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "DD MMMM YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        {/* <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn} onClick={()=>{
                              setForm(data)
                              setShowAddDailyWalkinsForm(true)
                            }}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit{" "}
                              </Text>
                            </Button>
                          </div>
                        </td> */}
                      </tr>
                    );
                  })}
                {type === "repairReason" &&
                  RepairReasons?.length > 0 &&
                  RepairReasons.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srNo || `--`}
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.reason || `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.createdAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        <td role="button">
                          <div className="d-flex justify-content-center">
                            <Button
                              className={styles.viewEditBtn}
                              onClick={() => {
                                setForm(data), setShowAddReapairReason(true);
                              }}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.black}
                              >
                                {" "}
                                Edit{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "returnReason" &&
                  ReturnReasons?.length > 0 &&
                  ReturnReasons.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srNo}
                          </Text>
                        </td>

                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.reason}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.createdAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>
                        <td
                          onClick={() => {
                            setShowAddReturnReason(true);
                            setForm(data);
                          }}
                        >
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.black}
                              >
                                {" "}
                                Edit{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "paymentDetails" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={45}
                              height={45}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-12-18KY-200000-A1
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            PRD-LR-2112-GL-2022
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LT-080722-001
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            COD
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Urgent
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={greenTick}
                              alt="bar-code"
                              width={15}
                              height={15}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>

                        <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewBlueBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.purple}
                              >
                                View{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "stockTransfer" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={45}
                              height={45}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-12-18KY-200000-A1
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            PRD-LR-2112-GL-2022
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-3000-3001-400
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LT-080722-001
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {" "}
                            RINGs
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Urgent
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={greenTick}
                              alt="bar-code"
                              width={15}
                              height={15}
                            />
                          </div>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>

                        <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewBlueBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.purple}
                              >
                                View{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                        <td className={`d-center`}>
                          <Form.Group
                            className={`inputSelectBox`}
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              className={`formInput`}
                              aria-label="Default select example"
                            >
                              <option>Select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                          <div
                            role="button"
                            className={`mx-2 center ${styles.okBtn}`}
                          >
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors.white}
                            >
                              OK
                            </Text>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "stockRequest" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={45}
                              height={45}
                            />
                          </div>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-12-18KY-200000-A1
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            PRD-LR-2112-GL-2022
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-3000-3001-400
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LT-080722-001
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {" "}
                            RINGs
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Urgent
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={greenTick}
                              alt="bar-code"
                              width={15}
                              height={15}
                            />
                          </div>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>

                        <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewBlueBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.purple}
                              >
                                View{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                        <td className={`${styles.actionbtnTable}`}>
                          <div>
                            <Button className={styles.deleteBtn}>
                              <Image
                                src="/icons/common-icon/binIcon.svg"
                                width={10}
                                height={15}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                Delete{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "manageEmployee" &&
                  storeEmplyeeDetails?.[0] &&
                  storeEmplyeeDetails.map((employee, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {employee?.srNo ? employee?.srNo : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {employee?.empName ? employee?.empName : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {employee?.empId ? employee?.empId : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {employee?.storeId?.storeId
                              ? employee?.storeId?.storeId
                              : `--`}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {`--`}
                          </Text>
                        </td>

                        <td>
                          <div>
                            {employee?.active ? (
                              <Image
                                src={greenTick}
                                alt="bar-code"
                                width={15}
                                height={15}
                              />
                            ) : (
                              `--`
                            )}
                          </div>
                        </td>
                        <td className={`${styles.stockTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(employee?.createdAt).format(
                              "MMMM DD, YYYY  | hh:mm a"
                            )}
                          </Text>
                        </td>

                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Button
                              className={styles.viewEditBtn}
                              onClick={() => {
                                {
                                  handleEmployeeStatus(
                                    "view_edit",
                                    employee?._id,
                                    ""
                                  );
                                  setForm(employee);
                                }
                              }}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit{" "}
                              </Text>
                            </Button>
                            <div>
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="active"
                                value={employee?.active}
                                checked={employee?.active}
                                onChange={() => {
                                  handleEmployeeStatus(
                                    "status",
                                    employee?._id,
                                    employee.active ? false : true
                                  );
                                }}
                                className={`${styles.customCheck}`}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "wallet" &&
                  !manageWallet &&
                  Wallet?.length > 0 &&
                  Wallet?.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.srNo ? item?.srNo : "-"}
                          </Text>
                        </td>
                        <td onClick={() => setManageWallet(true)} role="button">
                          {" "}
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.userId?.name}
                          </Text>
                        </td>
                        <td>
                          {" "}
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.userId?.userId}
                          </Text>
                        </td>
                        {/* <td >
                          <Text size={12} fontWeight={400} color={colors?.black}>
                            {item?.transactionId ? item?.transactionId : "-"}
                          </Text>
                        </td> */}
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.amountType ? item?.amountType : "-"}
                          </Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >{`₹${item.garnetWalletBalance}.00`}</Text>
                        </td>
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >{`₹${item.promotionalWalletBalance}.00`}</Text>
                        </td>

                        <td>
                          <div>
                            {item?.active ? (
                              <Image
                                src={greenTick}
                                alt="bar-code"
                                width={15}
                                height={15}
                              />
                            ) : (
                              "-"
                            )}
                          </div>
                        </td>
                        {/* <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {item?.tType ? item?.tType : "-"}
                          </Text>
                        </td> */}
                        <td>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(item?.updatedAt).format(
                              "DD/MM/YYYY  | h:mm:ss"
                            )}
                          </Text>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}
                              onClick={() => {
                                setForm({ walletId: item?._id })
                                setShowTransactionHistory(true)
                              }}
                            >
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "verifyStock" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-12-18KY-200000-A1
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            PRD-LR-2112-GL-2022
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            300 ITEMS
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            300 ITEMS
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewBlueBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.purple}
                              >
                                View{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>
                        <td className={`d-center`}>
                          <Form.Group
                            className={`inputSelectBox`}
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              className={`formInput`}
                              aria-label="Default select example"
                            >
                              <option>Select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                          <div
                            role="button"
                            className={`mx-2 center ${styles.okBtn}`}
                          >
                            <Text
                              size={12}
                              fontWeight={400}
                              color={colors.white}
                            >
                              OK
                            </Text>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "verifyNow" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={29.67}
                              height={30}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-12-18KY-200000-A1
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            PRD-LR-2112-GL-2022
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Ring
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={greenTick}
                              alt="bar-code"
                              width={15}
                              height={15}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ARSHDEEP
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Button className={`${styles.viewBlueBtn} mx-auto`}>
                            <Text
                              size={9}
                              fontWeight={700}
                              color={colors?.purple}
                            >
                              View{" "}
                            </Text>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                {type === "deliveries" &&
                  [1, 2, 3, 4, 5].map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2  ${styles.textTruncation} `}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            5
                          </Text>
                        </td>
                        <td>
                          <div>
                            <Image
                              src={ringIcon}
                              alt="bar-code"
                              width={30}
                              height={30}
                            />
                          </div>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            3000-2022-8000
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            LRB-1130-GL
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            ORD-LR-080722
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            ST-GL-3000
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            Customer
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            08-Nov-2022
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            Shipped to Manufactor
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className={styles.tdWidth}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            26-08-2022 | 7:10:00 AM
                          </Text>
                        </td>
                        <td className={styles.textTruncation}>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "cart" &&
                  stocks?.length > 0 ?
                  stocks.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {Number(key + 1)}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={data?.stock?.bannerImage || data?.stockId?.bannerImage}
                              alt="bar-code"
                              width={45}
                              height={45}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.stock?.glDesignNumber || data?.stockId?.glDesignNumber}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.stock?.glsId || data?.stockId?.glsId}
                          </Text>
                        </td>
                        {/* <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            LR-2112-GL
                          </Text>
                        </td> */}
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.category?.title || data?.categoryId?.title || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.stock?.stockType || data?.stockId?.stockType}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.isSaleable || data?.stockId?.isSaleable}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.postDisountValue}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.stock?.createdAt).format(
                              "MMMM DD,YYYY | hh:mma"
                            )}
                          </Text>
                        </td>

                        {form?.title !== 'All' && <td className={`${styles.iventoryTable}`}>
                          <div className={`d-flex align-items-center`}>
                            <Button
                              className={`${styles.viewEditBtn}`}
                              onClick={(e) => {
                                removestocks(data?.stock, key);
                              }}
                            >
                              <Image
                                src="/icons/common-icon/binIcon.svg"
                                width={10}
                                height={15}
                              />
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                                className={`ms-2`}
                              >
                                Delete{" "}
                              </Text>
                            </Button>
                          </div>
                        </td>}
                      </tr>
                    );
                  })
                  : ''
                }
                {type === "wishlist" &&
                  wishlist?.length > 0 &&
                  wishlist.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srno}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={
                                data?.bannerImage?.yellowGold ||
                                "/icons/common-icon/userIcon.svg"
                              }
                              alt="bar-code"
                              width={35}
                              height={35}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.title}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.productId || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {data?.preDesignNumber || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={500}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "MMMM DD,YYYY | hh:mma"
                            )}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={12}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {singleUser?.userType || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "addedToCart" &&
                  fireBaseCart?.products?.length > 0 &&
                  fireBaseCart?.products?.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srno || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={
                                data?.bannerImage?.yellowGold ||
                                "/icons/common-icon/userIcon.svg"
                              }
                              alt="bar-code"
                              width={35}
                              height={35}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.title}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.productId || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {data?.preDesignNumber || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {/* {data?.price || `--`} */}
                            {data?.product_price ? `${data?.product_price}` : `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {data?.views || data?.__v || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={500}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "MMMM DD,YYYY | hh:mma"
                            )}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {singleUser?.userType || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "recentlyViewed" &&
                  singleUser?.recentlyViewed?.length > 0 &&
                  singleUser?.recentlyViewed.map((data, key) => {
                    return (
                      <tr key={key}>A
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srno || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={
                                data?.bannerImage?.yellowGold ||
                                "/icons/common-icon/userIcon.svg"
                              }
                              alt="bar-code"
                              width={35}
                              height={35}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.title}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={700}
                            color={colors?.black}
                          >
                            {data?.productId || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {data?.preDesignNumber || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {data?.price || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {data?.__v}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={500}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "MMMM DD,YYYY | hh:mma"
                            )}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={600}
                            color={colors?.black}
                          >
                            {singleUser?.userType || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {type === "orderList" &&
                  singleUser?.orders?.length > 0 &&
                  singleUser?.orders.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className={`py-2`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.srno || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div>
                            <Image
                              src={data?.productImage}
                              alt="bar-code"
                              width={35}
                              height={35}
                            />
                          </div>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.title || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.productId?.glDesignNumber || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.invoiceNo || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.orderType || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.storeId || `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.orderDate).format("MMMM DD,YYYY")}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {data?.orderStatus === "newOrder"
                              ? `New Order`
                              : `--`}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.deliveryDate).format("MMMM DD,YYYY")}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <Text
                            size={11}
                            fontWeight={400}
                            color={colors?.black}
                          >
                            {moment(data?.updatedAt).format(
                              "MMMM DD,YYYY | hh:mma"
                            )}
                          </Text>
                        </td>
                        <td className={`${styles.iventoryTable}`}>
                          <div className="d-flex justify-content-center">
                            <Button className={styles.viewEditBtn}>
                              <Text
                                size={9}
                                fontWeight={700}
                                color={colors?.roseGold}
                              >
                                View / Edit
                              </Text>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/*BANNNER EDITNEW */}
      <Modal
        show={editShow}
        onHide={handleEditClose}
        contentClassName=" py-4 px-5 "
        dialogClassName={`${styles.modalDialog} d-center`}
      >
        <Row className="pt-3">
          <Col md={12}>
            <Text size={14} fontWeight={600} color={colors?.black}>
              Banner Title
            </Text>
            <div className="pt-2">
              <Form.Group>
                <Form.Control
                  className={`modalInput`}
                  type="text"
                  name="title"
                  onChange={""}
                  placeholder="Enter"
                />
              </Form.Group>
            </div>
          </Col>

          <Col md={12} className="">
            <Text size={14} fontWeight={600} color={colors?.black}>
              URL
            </Text>
            <div className="pt-2">
              <Form.Group>
                <Form.Control
                  className={`modalInput`}
                  type="text"
                  name="title"
                  onChange={""}
                  placeholder="Enter"
                />
              </Form.Group>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="pt-3">
            <Row>
              <Col md={5}>
                <div className="d-flex">
                  <Text size={14} fontWeight={600} color={colors?.black}>
                    Category Priority:-
                  </Text>
                </div>
              </Col>
              <Col md={1}>
                <Form.Group>
                  <Form.Control
                    className={``}
                    type="text"
                    name="title"
                    onChange={""}
                    placeholder=""
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="">
            <Row className="py-3">
              <Col md={3}>
                <Text size={14} fontWeight={600} color={colors?.black}>
                  Image :
                </Text>
              </Col>
              <Col md={6}>
                <div className={styles.fileUploadDiv} role="button">
                  <label
                    role="button"
                    htmlFor="file"
                    className={`d-flex justify-content-center align-items-center `}
                  >
                    Upload File
                    <LazyImage
                      src={`/icons/banner-section/fileUpload.svg`}
                      containerClass={`${styles.wrapper} ps-3`}
                      width={15}
                      height={15}
                    />
                  </label>
                  <>
                    <input
                      id="file"
                      name="image"
                      type="file"
                      className="d-none"
                    />
                  </>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="p-5 center">
              <GradientBtn title="Submit" />
            </div>
          </Col>
        </Row>
      </Modal>
    </div >
  );
};

export default TableComponent;
