import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Text from "../../components/basic/text";
import { colors } from "../../constants/colors";
import styles from "./styles.module.scss";

export const PrintInvoicePdf = () => {
  return (
    <div>
      <Container fluid className={`${styles.invoicePage} d-center`}>
        <div>
          <div className={`text-center pb-2`}>
            <Text size={12} fontWeight={700} color={colors?.black}>
              INVOICE
            </Text>
          </div>
          <Row>
            <Col md={4}>
              <div>
                <div><Text size={10} fontWeight={800} color={colors?.black}>Customer Billing Address</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Ashish Sood</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Ashishsood580@gmail.com</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Near Bellagio Plaza, Fatehgarh Sahib, Sirhind</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Fatehgarh Sahib</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Punjab, India</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>140406</Text></div>
              </div>
              <div>
                <div><Text size={10} fontWeight={800} color={colors?.black}>Customer Billing Address</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Ashish Sood</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Ashishsood580@gmail.com</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Near Bellagio Plaza, Fatehgarh Sahib, Sirhind</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Fatehgarh Sahib</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Punjab, India</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>140406</Text></div>
                <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>9888898866</Text></div>
              </div>
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
                    <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>07-Jan-2023</Text></div>
                  </div>
                  <div>
                    <div><Text size={10} fontWeight={800} color={colors?.black}>ORDER ID / DATE</Text></div>
                    <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>ORD-LR-080722-00-Y-18K-3000-4000</Text></div>
                    <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>07-Jan-2023</Text></div>
                  </div>
                  <div>
                    <div><Text size={10} fontWeight={800} color={colors?.black}>DISPATCH DOCUMENT NO</Text></div>
                    <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>ONL/MUM/SP/318732</Text></div>
                  </div>
                </Col>
                <Col md={6} className='d-flex align-items-end'>
                  <div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>INVOICE NUMBER</Text></div>
                      <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>INV-080722-3000-2000</Text></div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>PAYMENT MODE</Text></div>
                      <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>COD</Text></div>
                    </div>
                    <div>
                      <div><Text size={10} fontWeight={800} color={colors?.black}>DISPATCH THROUGH</Text></div>
                      <div style={{ lineheight: '10px' }}><Text size={8} fontWeight={400} color={colors?.black}>Bluedart</Text></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={styles.orangeBorder}></div>
          <div className={`${styles.invoiceBgImage}`}>
            <Table className={`responsive`} >
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
                <tr>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>1</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>The Gurleen Nose Pin</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>1</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>0.420</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>0.01 / 0.04</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>0.420</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>2,610.00</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>7,481.00</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>1,305.00</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>6,176.00</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>0.00</Text>
                  </td>
                  <td>
                    <Text className={'d-block'} size="6px" lineheight={1.4} fontWeight={400} color={colors.newBlack}>6,361.00</Text>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className='m-2'>
              <div className="d-flex justify-content-between">
                <div>
                  <Text size={8} fontWeight={800} color={colors?.black}>
                    TOTAL AMOUNT
                  </Text>
                </div>
                <div>
                  <Text size={8} fontWeight={800} color={colors?.black}>
                    Rs. 6361.00
                  </Text>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-end">
                <div>
                  <div style={{ lineheight: '10px' }}>
                    <Text size={7} fontWeight={500} color={colors?.black}>
                      Invoice Amount (In Words): Six Thousand Three Hundred Sixty One Rupees only
                    </Text>
                  </div>
                  <div style={{ lineheight: '10px' }}>
                    <Text size={7} fontWeight={500} color={colors?.black}>
                      Less: Advance paid (Voucher(s): 0.00 Garnet Cash: 0.00 Gift card(s): 0.00)
                    </Text>
                  </div>
                </div>
                <div>
                  <div >
                    <Text size={7} fontWeight={500} color={colors?.black}>
                      Rs. 0.00
                    </Text>
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
                  <Text size={8} fontWeight={800} color={colors?.black}>
                    Rs. 6361.00
                  </Text>
                </div>
              </div>
            </div>
            <div className={`${styles.marginImage} ${styles.orangeBorder}`}></div>
          </div>
          <div className='text-center'>
            <Text size={10} fontWeight={700} color={colors?.roseGold}>
              Received By and On
            </Text>
          </div>
        </div>
      </Container>
    </div>
  )
}
