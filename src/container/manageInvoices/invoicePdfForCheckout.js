import React from "react";
import Image from "next/image";
import { Container, Row, Col, Table } from "react-bootstrap";
import Text from "../../components/basic/text";
import { colors } from "../../constants/colors";
import styles from "./styles.module.scss";
import { NumberToWord } from "../../components/common/numberToText/numberToText";
import moment from "moment";
import _ from 'lodash';

export const InvoicePdfForCheckout = (props) => {
  const {
    HandlePaymentPaid,
    componentRef
  } = props
  const {
    walletUseAmt,
    cashAmt,
    swipeAmt,
    bankAmt,
    totalPaid,
    paymentSuccessFull,
    bankData,
    swipeData,
    HandleCashChange,
    checkout,
    products,
    user,
    form,
    addressArray } = HandlePaymentPaid()

  return (
    <div className="mx-5 px-5 d-none">
      <Container className={`mx-5 px-5`}>
        <div>
          <div className={`d-center justify-content-between`}>
            <div>
              <div><Image src="/icons/login-icon/gl-logo.svg" height="37px" width="220px" alt='logo' /></div>
              <div className="pt-3">
                <Text size={13} fontWeight={600} color={colors?.black}>GSTIN No.
                  <Text size={11} fontWeight={400} color={colors?.black}> 03HFJPS5388G1ZW</Text>
                </Text>
              </div>
              <div>
                <Text size={11} fontWeight={400} color={colors?.black}>
                  Deals in all kinds of Gold and Diamond Jewelry that are 100% BIS Hallmarked
                </Text>
              </div>
            </div>
            <div className="d-center">
              <div className={`${styles.invoiceInfo} me-3`}>
                <div>1800-202-0270</div>
                <div>info@garnetlanee.com</div>
                <div>www.garnetlanee.com</div>
                <div>Sco.19, Sector 82 JLPL Mohali Airport Road , 160055</div>
                <div>99888-98866</div>
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
          <div ref={componentRef}>
            <div className={`text-center pb-2`}>
              <Text size={12} fontWeight={700} color={colors?.black}>
                INVOICE
              </Text>
            </div>
            <Row>
              <Col md={4}>
                {addressArray?.length > 0 && <div>
                  <div><Text size={10} fontWeight={800} color={colors?.black}>Customer Billing Address</Text></div>
                  <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.receipentName}</Text></div>
                  <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.receipentNumber}</Text></div>
                  {addressArray[0]?.shippingAddress?.email ? <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.email}</Text></div> : ''}
                  {addressArray[0]?.shippingAddress?.flat ? <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.flat}, {addressArray[0]?.shippingAddress?.locality},</Text></div>
                    : ''}                  {/* <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}></Text></div> */}
                  <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.city}, {addressArray[0]?.shippingAddress?.street}, {addressArray[0]?.shippingAddress?.state},</Text></div>
                  <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.pincode}</Text></div>
                </div>}

                {addressArray?.length > 0 && <div>
                  <div>
                    <Text size={10} fontWeight={800} color={colors?.black}>Customer Delivery Address</Text>
                  </div>
                  <div style={{ lineheight: '10px' }}>
                    <Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.receipentName}</Text>
                  </div>
                  <div style={{ lineheight: '10px' }}>
                    <Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.receipentNumber}</Text>
                  </div>
                  {addressArray[0]?.shippingAddress?.email ? <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.email}</Text></div> : ''}
                  <div style={{ lineheight: '10px' }}>
                    <Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.flat}, {addressArray[0]?.shippingAddress?.locality},
                    </Text>
                  </div>
                  {/* <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}></Text></div> */}
                  <div style={{ lineheight: '10px' }}>
                    <Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.city}, {addressArray[0]?.shippingAddress?.street}, {addressArray[0]?.shippingAddress?.state},</Text>
                  </div>
                  <div style={{ lineheight: '10px' }}>
                    <Text size={8} fontWeight={400} color={colors?.black}>{addressArray[0]?.shippingAddress?.pincode}</Text>
                  </div>
                </div>
              }
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>Garnet Lanee</Text></div>
                      <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Sco.19, Second Floor,Sector 82 JLPL Mohali Airport Road,140308.</Text></div>
                      <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>03HFJPS5388G1ZW</Text></div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>INVOICE DATE</Text></div>
                      <div style={{ lineheight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>
                          {`${moment(form?.invoiceDate).format("DD-MMMM-YYYY")}`}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>ORDER ID / DATE</Text></div>
                      <div style={{ lineheight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>{form?.invoiceId}</Text>
                      </div>
                      <div style={{ lineheight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>
                          {`${moment(form?.orderDate).format("DD-MMMM-YYYY")}`}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>DISPATCH DOCUMENT NO</Text></div>
                      <div style={{ lineheight: '10px' }}>
                        <Text size={8} fontWeight={400} color={colors?.black}>
                          {`${form?.dispatchDocNo || `--`}`}
                        </Text></div>
                    </div>
                  </Col>
                  <Col md={6} className='d-flex align-items-end'>
                    <div>
                      <div>
                        <div><Text size={10} fontWeight={800} color={colors?.black}>INVOICE NUMBER</Text></div>
                        <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>
                          {form?.invoiceId}
                        </Text>
                        </div>
                      </div>
                      <div>
                        <div><Text size={10} fontWeight={800} color={colors?.black}>PAYMENT MODE</Text></div>
                        <div style={{ lineheight: '10px' }} className={`text-uppercase`}>
                          <Text size={8} fontWeight={400} color={colors?.black}>
                            {form?.paymentMethod}
                          </Text>
                        </div>
                      </div>
                      <div>
                        <div><Text size={10} fontWeight={800} color={colors?.black}>DISPATCH THROUGH</Text></div>
                        <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>
                          {`${form?.dispatchThrough || `--`}`}
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
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>SL NO</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>PRODUCT DESCRIPTION </Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>QTY</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>GROSS WT.</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>DIAMOND/ STONE/ SOLITAIRE WEIGHT</Text></th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>NET WT.</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>MAKING CHARGES</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>PRODUCT VALUE</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>DISCOUNT AMOUNT</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>TAXABLE AMOUNT</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>CGST SGST IGST</Text>
                      </th>
                      <th>
                        <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>TOTAL PRICE</Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ borderBlock: '1px solid #FD9149' }}>
                    {
                      products?.length > 0 && products?.map((stock, key) => {
                        return (
                          <tr className="bg-transparent" key={key}>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`${form?.srNo}`}</Text>
                            </td>
                            <td className="px-0">

                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={800} color={colors.newBlack}>
                                {stock?.productId?.title || ''}
                              </Text>
                              <div>
                                <div>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`Product Details`}</Text>
                                </div>
                                <div>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                    {`${stock?.stockItemId?.karotType} ${stock?.stockItemId?.stockType?.split(" ")[0]} ${stock?.stockItemId?.diamondClarity}`}
                                  </Text>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`Certificate No. :`}</Text>
                                </div>
                                <div>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`${stock?.stockItemId?.productCertiNum}`}</Text>
                                </div>
                              </div>
                              <div>
                                <div colSpan={2}>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`Product ID:`}</Text>
                                  <Text className={' d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`${stock?.stockItemId?.productId}`}</Text>
                                </div>
                              </div>
                              <div>
                                <div colSpan={2}>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`HSN: 7102`}</Text>
                                  {/* <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`7102`}</Text> */}
                                </div>
                              </div>

                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>{`1`}</Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {/* {priceState[0]?.gross_weight?.grossWeight ? `${priceState[0]?.gross_weight?.grossWeight}` : ''} */}
                                {stock?.stockItemId?.netWeight || `--`}
                              </Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {stock?.stockItemId?.diamondWeight ? `${stock?.stockItemId?.diamondWeight} ` : ''}
                                {stock?.stockItemId?.stoneWeight ? ` /${stock?.stockItemId?.stoneWeight}` : ''}
                                {stock?.stockItemId?.solitaireOneWeight ? `/${stock?.stockItemId?.solitaireOneWeight}` : ''}
                                {stock?.stockItemId?.solitaireTwoWeight ? `/${stock?.stockItemId?.solitaireTwoWeight}` : ''}
                              </Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {stock?.stockItemId?.netWeight ? `${stock?.stockItemId?.netWeight}` : ''}
                              </Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {stock?.makingCharge ? `${Number(stock?.makingCharge)?.toFixed(2)}` : `0.00`}
                              </Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {stock?.preDiscountValue ? `${stock?.preDiscountValue}.00` : `0.00`}
                              </Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {`${stock?.discountValue}.00`}
                              </Text>
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {`${stock?.totalWithoutGst}`}
                              </Text>
                            </td>
                            <td>
                              {
                                <div>
                                  <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                    {_.lowerCase(form?.storeState) === _.lowerCase(addressArray[0]?.shippingAddress?.state) ? `${stock?.gstVal / 2}` : `${stock?.gstVal}.00`}
                                  </Text>

                                  <Text className={'mt-1 d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                    {_.lowerCase(form?.storeState) === _.lowerCase(addressArray[0]?.shippingAddress?.state) ? `(1.50%)` : `(3%)`}
                                  </Text>
                                </div>}
                              {<div>
                                <Text className={'mt-1 d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                  {_.lowerCase(form?.storeState) === _.lowerCase(addressArray[0]?.shippingAddress?.state) ? `${stock?.gstVal / 2}` : ``}
                                </Text>

                                <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                  {_.lowerCase(form?.storeState) === _.lowerCase(addressArray[0]?.shippingAddress?.state) ? `(1.50%)` : ``}
                                </Text>
                              </div>
                              }
                              {/* { (form?.saleType === "jewelleryIndia" || form?.saleType === 'diamIndia') && <div>
                                <Text className={'mt-1 d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                  {form?.saleType === 'jewelleryIndia' ? `0.03` : form?.saleType === 'diamIndia' && `0.15`}
                                </Text>
                                <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                  {form?.saleType === 'jewelleryIndia' ? `(3%)` : form?.saleType === 'diamIndia' && `(1.50%)`}
                                </Text>
                              </div>
                              } */}
                            </td>
                            <td>
                              <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>
                                {`${stock?.postDisountValue}.00`}
                              </Text>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </div>
              <div className='m-2'>
                <div className="d-flex justify-content-between">
                  <div>
                    <Text size={8} fontWeight={800} color={colors?.black}>
                      TOTAL AMOUNT
                    </Text>
                  </div>
                  <div>
                    <Text size={8} fontWeight={800} color={colors?.black}>
                      Rs. {`${Number(totalPaid?.toFixed(2)) + Number(form?.roundOffTotalAmt ? form?.roundOffTotalAmt : 0)}`}
                    </Text>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <div style={{ lineheight: '10px' }}>
                      <Text className={`text-capitalize`} size={7} fontWeight={500} color={colors?.black}>
                        Invoice Amount (In Words): {`${NumberToWord(parseInt(totalPaid + Number(form?.roundOffTotalAmt ? form?.roundOffTotalAmt : 0)))}`}
                      </Text>
                    </div>
                    <div style={{ lineheight: '10px' }}>
                      {
                        <Text size={7} fontWeight={500} color={colors?.black}>
                          Less: Advance paid (Voucher(s): {`${Number(walletUseAmt ? walletUseAmt : 0)?.toFixed(2)}`}
                          {/* Garnet Cash: {`${Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt)?.toFixed(2)}`} */}
                          Gift card(s): {`0.00`})
                        </Text>
                      }
                    </div>
                  </div>
                  <div>
                    <div >
                      <Text size={7} fontWeight={500} color={colors?.black}>
                        Rs.{Number(walletUseAmt ? walletUseAmt : 0)} </Text>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <Text size={8} fontWeight={800} color={colors?.black}>
                      BALANCE AMOUNT TO BE PAID
                    </Text>
                  </div>
                  <div>
                    {/* <Text size={8} fontWeight={800} color={colors?.black}>
                      Rs. 00.00
                    </Text> */}
                    <Text size={8} fontWeight={800} color={colors?.black}>
                      Rs. {`${Number(totalPaid?.toFixed(2)) + Number(form?.roundOffTotalAmt ? form?.roundOffTotalAmt : 0)}`}
                    </Text>
                  </div>
                </div>
              </div>
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
              <div style={{ lineheight: '12px' }} className='p-1'>
                <Text size={10} fontWeight={500} color={colors?.black}>
                  We here confirm that  all the sales made is in date is in  correspondence with Central Goods and Service Tax Act, 2017. This saleswould be showcased in our taxable sales during filling tax for which we sha;; be paying the tax to the IT department of India
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}
