import React from "react";
import Image from "next/image";
import { Container, Row, Col, Table } from "react-bootstrap";
import Text from "../../components/basic/text";
import { colors } from "../../constants/colors";
import styles from "./styles.module.scss";
import { NumberToWord } from "../../components/common/numberToText/numberToText";
import moment from "moment";
import _, { some } from "lodash";

export const InvoicePdf = (props) => {
  const {
    pdfDataValue,
    invoiceData,
    priceState,
    form,
    advancePay,
    addressArray,
    deliveryAddressArray,
    componentRef,
    setTab
  } = props;

  const HandleGst = (gstText) => {
    let gt = gstText?.split(",")
    return (
      <div>
        {gt[0] !== 'undefined' ? gt[0] : ''}
        <br />{gt[1] || ''}
        <br />{gt[2] || ''}
        <br />{gt[3] !== 'undefined' ? gt[3] : ''}
        <br />{gt[4] || ''}
      </div>
    )
  }
  const handleTotalAmount = () => {
    // const totalPrice = _.sumBy(invoiceData?.InvoiceItems, Number('totalPrice'));
    const totalPrice = _.sumBy(invoiceData?.InvoiceItems, item => Number(item.totalPrice));
    return totalPrice;
  }
  const CheckAddressIsEmpty = (address) => {
    const hasData = some(address, (obj) => {
      return Object.values(obj?.shippingAddress).some((value) => !!value);
    });
    return hasData;
  }
  console.log(addressArray, 'inv data')
  return (
    <div>
      <Container fluid>
        <div className={`${styles.invoiceBox} ps-3`}>
          <div className={`d-center justify-content-between`}>
            <div>
              <div className="my-4"><Image src="/icons/login-icon/gl-logo.svg" height="37px" width="220px" alt='logo' /></div>
              <div className="mt-3">
                <Text size={10} fontWeight={700} color={colors?.black}>GSTIN No.
                  <Text size={10} fontWeight={500} color={colors?.black}> 03HFJPS5388G1ZW</Text>
                </Text>
              </div>
              <div style={{ lineHeight: "11px" }}>
                <Text size={9} fontWeight={400} color={colors?.black}>
                  Deals in all kinds of Gold and Diamond Jewelry that are 100% BIS Hallmarked
                </Text>
              </div>
            </div>
            <div className="d-center">
              <div className="text-end me-2">
                <div>
                  <Text size={9} lineHeight={12} fontWeight={500} color={colors?.black}>
                    1800-202-0270
                  </Text>
                </div>
                <div>
                  <Text size={9} lineHeight={12} fontWeight={500} color={colors?.black}>
                    info@garnetlanee.com
                  </Text>
                </div>
                <div>
                  <Text size={9} lineHeight={12} fontWeight={500} color={colors?.black}>
                    www.garnetlanee.com
                  </Text>
                </div>
                <div>
                  <Text size={9} lineHeight={12} fontWeight={500} color={colors?.black}>
                    Sco.19, Sector 82
                  </Text>
                </div>
                <div>
                  <Text size={9} lineHeight={12} fontWeight={500} color={colors?.black}>
                    JLPL Mohali Airport Road , 160055
                  </Text>
                </div>
                <div>
                  <Text size={9} lineHeight={12} fontWeight={500} color={colors?.black}>
                    99888-98866
                  </Text>
                </div>
              </div>

              <div className={`${styles.infoIcons} py-1`}>
                <div className='text-center'>
                  <Image src="/icons/common-icon/callIcon.svg" height="10px" width="10px" alt='logo' />
                </div>
                <div className='text-center'>
                  <Image src="/icons/common-icon/TelegramIcon.svg" height="10px" width="10px" alt='logo' />
                </div>
                <div className='text-center'>
                  <Image src="/icons/common-icon/linkIcon.svg" height="10px" width="10px" alt='logo' />
                </div>
                <div className='text-center'>
                  <Image src="/icons/common-icon/locationIcon.svg" height="10px" width="10px" alt='logo' />
                </div>
                <div className='text-center'>
                  <Image src="/icons/common-icon/whatsAppIcon.svg" height="10px" width="10px" alt='logo' />
                </div>
              </div>
            </div>
          </div>

          <div ref={componentRef} id="reportpdf">
            <div className={`text-center pb-2`}>
              <Text size={20} lineHeight={36} className="bayon" fontWeight={400} color={colors?.black}>
                INVOICE
              </Text>
            </div>
            <Row>
              <Col md={4}>
                {addressArray?.length > 0 && CheckAddressIsEmpty(addressArray) && <div>
                  <div style={{ lineHeight: "11px" }}><Text size={10} fontWeight={800} color={colors?.black}>Customer Billing Address</Text></div>
                  <div style={{ lineHeight: "11px", marginTop: "4px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.receipentName}</Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{`${addressArray[0]?.shippingAddress?.phone}`}</Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.email}</Text></div>
                  {addressArray[0]?.shippingAddress?.flat &&
                    <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.flat},</Text></div>
                  }
                  {addressArray[0]?.shippingAddress?.landmark &&
                    <div style={{ lineHeight: "11px" }}>
                      <Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.landmark}
                      </Text>
                    </div>
                  }
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.city},</Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.state},</Text></div>
                  {addressArray[0]?.shippingAddress?.country &&
                    <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.country},</Text></div>
                  }                  
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.pincode}</Text></div>
                </div>}

                {deliveryAddressArray?.length > 0 && CheckAddressIsEmpty(deliveryAddressArray) && <div>
                  <div style={{ lineHeight: "11px", marginTop: "4px" }}><Text size={10} fontWeight={800} color={colors?.black}>Customer Delivery Address</Text></div>
                  <div style={{ lineHeight: "11px", marginTop: "4px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.receipentName}</Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.phone}</Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.email}</Text></div>
                  {deliveryAddressArray[0]?.shippingAddress?.flat &&
                    <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.flat}, {deliveryAddressArray[0]?.shippingAddress?.locality},</Text></div>
                  }
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}></Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.city},</Text></div>
                  {deliveryAddressArray[0]?.shippingAddress?.street &&
                    <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.street},</Text></div>
                  }                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.state},</Text></div>
                  <div style={{ lineHeight: "11px" }}><Text size={8} fontWeight={400} color={colors?.black}>{deliveryAddressArray[0]?.shippingAddress?.pincode}</Text></div>
                </div>}
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <div>
                      <div style={{ lineHeight: '11px' }}><Text size={10} fontWeight={800} color={colors?.black}>Garnet Lanee</Text></div>
                      <div style={{ lineHeight: '11px', marginTop: "4px" }}><Text size={8} fontWeight={400} color={colors?.black}>Sco.19, Second Floor,Sector 82 JLPL Mohali Airport Road,140308.</Text></div>
                      <div style={{ lineHeight: '11px' }}><Text size={8} fontWeight={400} color={colors?.black}>03HFJPS5388G1ZW</Text></div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>INVOICE DATE</Text></div>
                      <div style={{ lineHeight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>
                          {`${moment(form?.invoiceDate).format("DD-MMMM-YYYY")}`}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>ORDER ID / DATE</Text></div>
                      <div style={{ lineHeight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{pdfDataValue?.invoiceId}</Text></div>
                      <div style={{ lineHeight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>
                          {`${moment(form?.orderDate).format("DD-MMMM-YYYY")}`}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>DISPATCH DOCUMENT NO</Text></div>
                      <div style={{ lineHeight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>
                          {`${form?.dispatchDocNo || form?.parentInvoiceId?.dispatchDocNo}`}
                        </Text></div>
                    </div>
                  </Col>
                  <Col md={6} className='d-flex align-items-end'>
                    <div>
                      <div>
                        <div><Text size={10} fontWeight={800} color={colors?.black}>INVOICE NUMBER</Text></div>
                        <div style={{ lineHeight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>
                          {form?.invoiceId}
                        </Text>
                        </div>
                      </div>
                      <div>
                        <div><Text size={10} fontWeight={800} color={colors?.black}>PAYMENT MODE</Text></div>
                        <div style={{ lineHeight: '10px' }}>
                          <Text size={8} fontWeight={400} color={colors?.black}>
                            {(form?.paymentMethod)?.toUpperCase() || (form?.parentInvoiceId?.paymentMethod)?.toUpperCase()}
                          </Text>
                        </div>
                      </div>
                      <div>
                        <div><Text size={10} fontWeight={800} color={colors?.black}>DISPATCH THROUGH</Text></div>
                        <div style={{ lineHeight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>
                          {`${form?.dispatchThrough || form?.parentInvoiceId?.dispatchThrough}`}
                        </Text></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className={styles.orangeBorder}></div>
            <div className={`${styles.invoiceBgImage}`}>
              <div className={`invoiceTable`}>
                <Table responsive>
                  <thead style={{ verticalAlign: 'baseline' }}>
                    <tr>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>SL NO</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>PRODUCT DESCRIPTION </Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>QTY</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>GROSS WT.</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>DIAMOND/ STONE/ SOLITAIRE WEIGHT</Text></th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>NET WT.</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>MAKING CHARGES</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>PRODUCT VALUE</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>DISCOUNT AMOUNT</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>TAXABLE AMOUNT</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>CGST SGST IGST</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={11} fontWeight={800} color={colors.newBlack}>TOTAL PRICE</Text>
                      </th>
                    </tr>
                  </thead>
                  {form?.pdf !== 'view' ?
                    <tbody>
                      {
                        invoiceData?.InvoiceItems?.length > 0 &&
                        invoiceData?.InvoiceItems?.map((invoice, key) => {
                          return (
                            <tr key={key} className={`bg-transparent border-light`}>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${key + 1}.s`}</Text>
                              </td>
                              <td className="px-0 text-start">
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                  {invoice?.product?.title || invoice?.productId?.title}
                                </Text>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="text-start">
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Product Details:`}</Text>
                                      </td>
                                      <td>
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Customised`}</Text>
                                        {/* <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoice?.karot ? `${invoice?.karot},` : ''} ${invoice?.diamondColor || invoice?.metalColor}, ${invoice?.diamondClarity ? invoice?.diamondClarity : ''}`}</Text> */}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="text-start">
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Certificate No. :`}</Text>
                                      </td>
                                      <td>
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoiceData?.orderDetail?.certificationNumber || `GLON1313`}`}</Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td colSpan={2} className="text-start">
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Product ID:`}</Text>
                                        <Text className={' d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoice?.productId?.productId || `--`}`}</Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td colSpan={2} className="text-start d-flex">
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`HSN:`}</Text>
                                        <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoice?.hsnCode || `7113`}`}</Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`1`}</Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                  {invoice?.productPriceDetails?.netWeight ? `${invoice?.productPriceDetails?.netWeight}` : ''}
                                </Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                  {invoice?.productPriceDetails?.diamond ? `${invoice?.productPriceDetails?.diamond}` : ''}
                                  {invoice?.productPriceDetails?.stoneWeight ? ` / ${invoice?.productPriceDetails?.stoneWeight}` : ''}
                                  {invoice?.productPriceDetails?.solitaire1Weight ? ` / ${invoice?.productPriceDetails?.solitaire1Weight}` : ''}
                                  {invoice?.productPriceDetails?.solitaire2Weight ? ` / ${invoice?.productPriceDetails?.solitaire2Weight}` : ''}
                                </Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                  {invoice?.productPriceDetails?.netWeight ? `${invoice?.productPriceDetails?.netWeight}` : ''}
                                </Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                  {invoice?.makingCharge ? invoice?.makingCharge : `0.00`}
                                </Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${Number(invoice?.totalPrice)?.toFixed(2)}`}</Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoice?.discount}`}</Text>
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                  {`${invoice?.taxableAmount}`}
                                </Text>
                              </td>
                              <td>
                                {
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                                    {HandleGst(invoice?.gst)}
                                  </Text>
                                }
                              </td>
                              <td>
                                <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${Number(invoice?.totalPrice)?.toFixed(2)}`}</Text>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                    :
                    <tbody>
                      <tr className={`bg-transparent border-light`}>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`1.`}</Text>
                        </td>
                        <td className="px-0 text-start">
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                            {invoiceData?.product?.title || invoiceData?.productId?.title}
                          </Text>
                          <table>
                            <tbody>
                              <tr>
                                <td className="text-start">
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Product Details:`}</Text>
                                </td>
                                <td>
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Customised`}</Text>
                                  {/* <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoiceData?.karot ? `${invoiceData?.karot},` : ''} ${invoiceData?.diamondColor || invoice?.metalColor}, ${invoice?.diamondClarity ? invoice?.diamondClarity : ''}`}</Text> */}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table>
                            <tbody>
                              <tr>
                                <td className="text-start">
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Certificate No. :`}</Text>
                                </td>
                                <td>
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoiceData?.orderDetail?.certificationNumber || `GLON1313`}`}</Text>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table>
                            <tbody>
                              <tr>
                                <td colSpan={2} className="text-start">
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`Product ID:`}</Text>
                                  <Text className={' d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoiceData?.product?.productId || `--`}`}</Text>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table>
                            <tbody>
                              <tr>
                                <td colSpan={2} className="text-start d-flex">
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`HSN:`}</Text>
                                  <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoiceData?.hsnCode || `7113`}`}</Text>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`1`}</Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                            {invoiceData?.productPriceDetails?.netWeight ? `${invoiceData?.productPriceDetails?.netWeight}` : ''}
                          </Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                            {invoiceData?.productPriceDetails?.diamond ? `${invoiceData?.productPriceDetails?.diamond}` : ''}
                            {invoiceData?.productPriceDetails?.stoneWeight ? ` / ${invoiceData?.productPriceDetails?.stoneWeight}` : ''}
                            {invoiceData?.productPriceDetails?.solitaire1Weight ? ` / ${invoiceData?.productPriceDetails?.solitaire1Weight}` : ''}
                            {invoiceData?.productPriceDetails?.solitaire2Weight ? ` / ${invoiceData?.productPriceDetails?.solitaire2Weight}` : ''}
                          </Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                            {invoiceData?.productPriceDetails?.netWeight ? `${invoiceData?.productPriceDetails?.netWeight}` : ''}
                          </Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                            {invoiceData?.makingCharge ? invoiceData?.makingCharge : `0.00`}
                          </Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${Number(invoiceData?.totalPrice)?.toFixed(2)}`}</Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${invoiceData?.discount}`}</Text>
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                            {`${invoiceData?.taxableAmount}`}
                          </Text>
                        </td>
                        <td>
                          {
                            <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>
                              {HandleGst(invoiceData?.gst)}
                            </Text>
                          }
                        </td>
                        <td>
                          <Text className={'d-block'} size="5px" lineheight={1.4} fontWeight={500} color={colors.black}>{`${Number(invoiceData?.totalPrice)?.toFixed(2)}`}</Text>
                        </td>
                      </tr>
                    </tbody>
                  }
                </Table>
              </div>
              {form?.pdf !== 'view' ?
                <div className='m-2'>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Text size={8} fontWeight={800} color={colors?.black}>
                        TOTAL AMOUNT
                      </Text>
                    </div>
                    <div>
                      <Text size={8} fontWeight={800} color={colors?.black}>
                        Rs. {(handleTotalAmount())?.toFixed(2)}
                      </Text>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <div style={{ lineHeight: '10px' }}>
                        <Text className={`text-capitalize`} size={7} fontWeight={500} color={colors?.black}>
                          Invoice Amount (In Words): {`${NumberToWord(parseInt(handleTotalAmount()))}`}
                        </Text>
                      </div>
                      {advancePay?.length > 0 && <div style={{ lineHeight: '10px' }}>
                        {advancePay?.length > 0 && <Text size={7} fontWeight={500} color={colors?.black}>
                          Less: Advance paid (Voucher(s): {`${Number(advancePay[0]?.advance?.advanceUseAmt ? advancePay[0]?.advance?.advanceUseAmt : 0)?.toFixed(2)}`} Garnet Cash: {`${Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt ? advancePay[0]?.garnetWallet?.garneWallettUseAmt : 0)?.toFixed(2)}`} Gift card(s): {`0.00`})
                        </Text>}
                      </div>}
                    </div>
                    {advancePay?.length > 0 &&
                      <div>
                        <div >
                          <Text size={7} fontWeight={500} color={colors?.black}>
                            Rs.{Number(advancePay[0]?.advance?.advanceUseAmt ? advancePay[0]?.advance?.advanceUseAmt : 0) + Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt ? advancePay[0]?.garnetWallet?.garneWallettUseAmt : 0)}
                          </Text>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Text size={8} fontWeight={800} color={colors?.black}>
                        BALANCE AMOUNT TO BE PAID
                      </Text>
                    </div>
                    <div>
                      <Text size={8} fontWeight={800} color={colors?.black}>
                        Rs. {(handleTotalAmount())?.toFixed(2)}</Text>
                    </div>
                  </div>
                </div>
                :
                <div className='m-2'>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Text size={8} fontWeight={800} color={colors?.black}>
                        TOTAL AMOUNT
                      </Text>
                    </div>
                    <div>
                        <Text size={8} fontWeight={800} color={colors?.black}>
                          Rs. {`${Number(invoiceData?.totalPrice)?.toFixed(2)}`}
                        </Text> 
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <div style={{ lineHeight: '10px' }}>
                        <Text className={`text-capitalize`} size={7} fontWeight={500} color={colors?.black}>
                          Invoice Amount (In Words): {`${NumberToWord(parseInt(Number(invoiceData?.totalPrice)))}`}
                        </Text>
                      </div>
                      {advancePay?.length > 0 && <div style={{ lineHeight: '10px' }}>
                        {advancePay?.length > 0 && <Text size={7} fontWeight={500} color={colors?.black}>
                          Less: Advance paid (Voucher(s): {`${Number(advancePay[0]?.advance?.advanceUseAmt ? advancePay[0]?.advance?.advanceUseAmt : 0)?.toFixed(2)}`} Garnet Cash: {`${Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt ? advancePay[0]?.garnetWallet?.garneWallettUseAmt : 0)?.toFixed(2)}`} Gift card(s): {`0.00`})
                        </Text>}
                      </div>}
                    </div>
                    {advancePay?.length > 0 &&
                      <div>
                        <div >
                          <Text size={7} fontWeight={500} color={colors?.black}>
                            Rs.{Number(advancePay[0]?.advance?.advanceUseAmt ? advancePay[0]?.advance?.advanceUseAmt : 0) + Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt ? advancePay[0]?.garnetWallet?.garneWallettUseAmt : 0)}
                          </Text>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Text size={8} fontWeight={800} color={colors?.black}>
                        BALANCE AMOUNT TO BE PAID
                      </Text>
                    </div>
                    <div>
                    <Text size={8} fontWeight={800} color={colors?.black}>
                          Rs. {`${Number(invoiceData?.totalPrice)?.toFixed(2)}`}
                        </Text> 
                    </div>
                  </div>
                </div>}
              <div className={`${styles.marginImage} ${styles.orangeBorder}`}></div>
            </div>
          </div>
          <div className={`d-flex`}>
            <div className={`${styles.infoIcons}`}></div>
            <div className="w-100 ">
              <div className='text-center'>
                <Text size={10} fontWeight={700} color={colors?.roseGold}>
                  Received By and On
                </Text>
              </div>
              <div className="d-center justify-content-between ">
                <div className='p-1'>
                  <Text size={13} fontWeight={500} color={colors?.black}>
                    TERMS & CONDITIONS
                  </Text>
                </div>
                <div className={styles.newOrangeBorder}></div>
              </div>
              <div style={{ lineHeight: '12px' }} className='p-1'>
                <Text size={10} fontWeight={500} color={colors?.black}>
                  We here confirm that  all the sales made is in date is in  correspondence with Central Goods and Service Tax Act, 2017. This saleswould be showcased in our taxable sales during filling tax for which we shall be paying the tax to the IT department of India
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}
