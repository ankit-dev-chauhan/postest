import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Text from "../../components/basic/text";
import { colors } from "../../constants/colors";
import styles from "./styles.module.scss";

export const PrintDifferenceLetter = () => {
  return (
    <div>
      <Container fluid className={`${styles.invoicePage} d-center`}>
        <div>
          <div className={`text-center pb-2`}>
            <Text size={12} fontWeight={700} color={colors?.black}>
              Weight Difference Note
            </Text>
          </div>
          <div style={{ borderBlock: '1px solid #FD9149' }} className='d-center justify-content-between p-2'>
            <div style={{ lineheight: '10px' }}>
              <div>
                <Text size={6} fontWeight={700} color={colors?.black}>
                  INVOICE DATE
                </Text>
              </div>
              <div>
                <Text size={7} fontWeight={400} color={colors?.black}>
                  07-Jan-2023
                </Text>
              </div>
            </div>
            <div style={{ lineheight: '10px' }}>
              <div>
                <Text size={6} fontWeight={700} color={colors?.black}>
                  INVOICE NUMBER
                </Text>
              </div>
              <div>
                <Text size={7} fontWeight={400} color={colors?.black}>
                  INV-080722-3000-2000
                </Text>
              </div>
            </div>
            <div style={{ lineheight: '10px' }}>
              <div>
                <Text size={6} fontWeight={700} color={colors?.black}>
                  DATE OF ORDER
                </Text>
              </div>
              <div>
                <Text size={7} fontWeight={400} color={colors?.black}>
                  07-Jan-2023
                </Text>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Text size={8} fontWeight={700} color={colors?.black}>
                Dear Ashish Sood,
              </Text>
            </div>
            <div>
              <Text size={8} fontWeight={400} color={colors?.black}>
                Thank you for shopping with us!
              </Text>
            </div>
            <div>
              <Text size={8} fontWeight={400} color={colors?.black}>
                We would like to bring to your notice that there is a difference in Gold and Diamond weight for<b> The Gurleen Nose Pin</b>
              </Text>
            </div>
            <div className="py-2">
              <div style={{ lineheight: '7px' }}>
                <Text size={8} fontWeight={400} color={colors?.black}>
                  This happens because, once an order is placed, each product is individually crafted as per your customization needs. In this process, at times, a small
                  variation in weight may occur.
                </Text>
              </div>
            </div>
            <div>
              <div style={{ lineheight: '7px' }}>
                <Text size={8} fontWeight={400} color={colors?.black}>
                  Mentioned here is the detailed price break-up for product(s) under Order ID <b>(ORD-LR-080722-00-Y-18K-3000-4000)</b>, along with the exact weight difference(s) in the products received by you.
                </Text>
              </div>
            </div>
          </div>
          <div className={`${styles.invoiceBgImage} pt-3`}>
            <Table bordered>
              <tbody className="text-center">
                <tr className={`${styles.thBorder}`}>
                  <td rowSpan={2}></td>
                  <th colSpan={2}>
                    <Text size={8} fontWeight={700} color={colors?.black}>GOLD</Text>
                  </th>
                  <th colSpan={2}>
                    <Text size={8} fontWeight={700} color={colors?.black}>DIAMOND</Text>
                  </th>
                  <th colSpan={2}>
                    <Text size={8} fontWeight={700} color={colors?.black}>GEMSTONES</Text>
                  </th>
                  <th colSpan={2}>
                    <Text size={8} fontWeight={700} color={colors?.black}>SOLITAIRE</Text>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Weight</Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Price</Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Weight</Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Price</Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}></Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Price</Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Weight</Text>
                  </td>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>Total Price</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>PROMISED</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.42 gram</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>1,753.00/-</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.0350 carats</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>3,118.00/-</Text>
                  </td>
                  <td></td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00/-</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00 carots</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00/-</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>ACTUAL</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.42 gram</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>1,711.00/-</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.0350 carats</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>3,518.00/-</Text>
                  </td>
                  <td></td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00/-</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00 carots</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00/-</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text size={8} fontWeight={600} color={colors?.black}>DIFFERENCE</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.42 gram</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>42.00/-</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.0350 carats</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>-446.00/-</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>N/A</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>N/A</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0 carots</Text>
                  </td>
                  <td>
                    <Text size={7} fontWeight={600} color={colors?.black}>0.00/-</Text>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div>
              <div>
                <Text size={8} fontWeight={400} color={colors?.black}>
                  Price Difference = 42.00 + -446.00 + 0 + 0.00. GST (3%) = -12.00 Total amount = <b>Rs. 417.00</b>
                </Text>
              </div>
              <div className='py-2'>
                <div style={{ lineheight: '7px' }}>
                  <Text size={8} fontWeight={400} color={colors?.black}>
                    We are constantly trying to give the price benefit to our customers. Therefore, we have charged you as per the exact specifications of the products at
                    the time of order placement. We have not charged you for the additional amount mentioned here.
                  </Text>
                </div>
              </div>
              <div>
                <Text size={8} fontWeight={400} color={colors?.black}>
                  For any queries or assistance, do feel free to reach us at<b>1800-202-070</b> (9am-10pm, 7 days a week) or <b>info@garnetlanee.com</b>
                </Text>
              </div>
              <div>
                <Text size={8} fontWeight={400} color={colors?.black}>
                  Looking forward to having you shop with us again!
                </Text>
              </div>
              <div className='py-3'>
                <div style={{ lineheight: '7px' }}>
                  <Text size={8} fontWeight={400} color={colors?.black}>
                    Regards
                  </Text>
                </div>
                <div style={{ lineheight: '7px' }}>
                  <Text size={8} fontWeight={400} color={colors?.black}>
                    Team Garnet Lanee
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
