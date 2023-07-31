import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";
import { required } from "../../utils/form-validators"
import {
  GetCustomiseData,
  getManageInvoices,
  editInvoice,
  FetchLatestId,
  GetStoreForInvoice,
  UpdateEditInvoice,
  checkCoupon,
  getUsers,
  GetUserWallet,
  otpRequest,
  otpVerification
} from "./api";
import { getAllProductsDetail } from '../products/add-stock/api';
import { debounce, property } from "lodash";
import { BANGLES_SIZE, BRACELET_SIZE, KAROT, RING_SIZE } from "../../constants/sizeData";
import { hasValueInObject } from "../../utils/helper";
import { addWallet } from "../wallets/api";
import moment from "moment";
import { SearchPincode } from "../manageStore/api";

export const useManageInvoices = () => {

  const { form, setForm, setInForm, handleChange } = useForm();
  const [counter, setCounter] = useState([0])
  const [searchname, setSearchname] = useState('');
  const searchnames = useRef('');
  // const count = [1]
  const [price, setPrice] = useState()
  const [pdf, setPdf] = useState()
  const [pdfDataValue, setPdfDataValue] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState({});
  const [tab, setTab] = useState("ENTER DETAIL");
  const [invoiceData, setInvoiceData] = useState();
  const [isVerifiedOtp, setIsVerifiedOtp] = useState(false);
  const loginUserType = JSON.parse(localStorage.getItem('userInfo'))
  const [custom, setCustom] = useState([]);

  const EmployeeAddressArray = [
    {
      billingAddress: {
        receipentName: '',
        email: '',
        phone: '',
        pincode: '',
        flat: '',
        customerId: '',
        address: '',
        city: '',
        state: '',
        landmark: '',
        country: '',
        gst: ''
      },
      shippingAddress: {
        receipentName: '',
        phone: '',
        pincode: '',
        customerId: '',
        address: '',
        flat: '',
        city: '',
        state: '',
        landmark: '',
        country: '',
        gst: ''
      }
    }
  ]

  const [addressArray, setAddressArray] = useState(EmployeeAddressArray)
  const DeliveryAddressArray = [
    {
      billingAddress: {
        receipentName: '',
        email: '',
        phone: '',
        pincode: '',
        flat: '',
        customerId: '',
        address: '',
        city: '',
        state: '',
        landmark: '',
        country: '',
        gst: ''
      },
      shippingAddress: {
        receipentName: '',
        phone: '',
        pincode: '',
        customerId: '',
        address: '',
        flat: '',
        city: '',
        state: '',
        landmark: '',
        country: '',
        gst: ''
      }
    }
  ]
  const [deliveryAddressArray, setDeliveryAddressArray] = useState(DeliveryAddressArray)
  const PriceArray = [
    {
      grossWeight: '',
      grossPriceCt: '',
      grossDiscInPerc: '',
      grossTotal: '',
      netWeight: '',
      netPriceCt: '',
      netDiscInPerc: '',
      netTotal: '',
      diamond: '',
      diamPriceCt: '',
      diamDiscInPerc: '',
      diamondTotal: '',
      stoneWeight: '',
      stonePriceCt: '',
      stoneDiscInPerc: '',
      stoneTaxableAmount: '',
      stoneTotal: '',
      makingChargeWt: '',
      makingChargePriceCt: '',
      makingChargePrice: '',
      makingChargeDiscInPerc: '',
      makingChargeTaxableAmount: '',
      makingChargeTotal: '',
      solitaire1Weight: '',
      solitaire1PriceCt: '',
      solitaire1DiscInPerc: '',
      solitaireOneTaxableAmount: '',
      solitaireOneTotal: '',
      solitaire2Weight: '',
      solitaire2PriceCt: '',
      solitaire2DiscInPerc: '',
      name: '',
      val: '',
      roundOff: '',
      val: '',
      productId: '',
      designNo: '',
      karot: '',
      diamondColor: '',
      hsnCode: '',
      size: '',
      premiumPrice: '',
      totalTaxableAmount: '',
      makingCharge: "",
      productValue: "",
      discount: "",
      taxableAmount: "",
      totalPrice: "",

      orderId: "",

      isDiamondCheck: "",
      isDiscountCheck: "",
      isStone: "",
      isSolitaireCheck: "",
      isPremiumPriceCheck: "",
      isPromocodeCheck: "",

      productType: ""
    }
  ]
  const [priceState, setPriceState] = useState(PriceArray)
  const byInvoiceIdRef = useRef();

  const { data: { pinAddress: PostOffice } = {}, refetch: FetchPincode } = useQuery('inv_pincode', () => SearchPincode(deliveryAddressArray[0]?.shippingAddress?.pincode), {
    onSuccess: data => {
      const { pinAddress, msg, isSuccess } = data;
      if (isSuccess) {
        // setForm({
        //   country: pinAddress[0]?.Country,
        //   state: pinAddress[0]?.State,
        //   city: pinAddress?.length === 1 && `${pinAddress[0]?.Name} (${pinAddress[0]?.District})`
        // })
        let addrObj = {
          shippingAddress: {
            ...deliveryAddressArray[0]?.shippingAddress,
            country: pinAddress[0]?.Country,
            state: pinAddress[0]?.State,
            city: pinAddress?.length === 1 && `${pinAddress[0]?.Name} (${pinAddress[0]?.District})`
          }
        }
        setDeliveryAddressArray((prevState) => { return [addrObj] });
        toast.success(msg)
      }
    },
    enabled: false
  })
  const GetStorePincodeAddress = (pin) => {
    FetchPincode()
  }
  const findFormErrors = () => {
    const newErrors = {};
    // newErrors.glsNumber = required(form?.glsNumber);
    newErrors.salesPerson = required(form?.salesPerson);
    newErrors.certificationLab = required(form?.certificationLab);
    // newErrors.solitaireCertificationLab = required(form?.solitaireCertificationLab);
    // newErrors.solitaireCut = required(form?.solitaireCut);
    // newErrors.solitaireSize = required(form?.solitaireSize);
    // newErrors.solitaireCarat = required(form?.solitaireCarat);
    // newErrors.solitaireColor = required(form?.solitaireColor);

    return newErrors;
  };
  const PricingDetailFormError = () => {
    const newErrors = {};
    newErrors.storeId = required(form?.storeId);
    newErrors.invoiceDate = required(form?.invoiceDate);
    newErrors.saleType = required(form?.saleType);
    newErrors.orderDate = required(form?.orderDate);
    // newErrors.orderId = required(form?.orderId);
    // newErrors.paymentMode = required(form?.paymentMode);
    newErrors.dispatchDocNo = required(form?.dispatchDocNo);
    newErrors.dispatchThrough = required(form?.dispatchThrough);
    newErrors.companyAddress = required(form?.companyAddress);
    newErrors.customerBilling = required(addressArray[0]?.shippingAddress?.phone);
    newErrors.paymentMethod = required(form?.paymentMethod);
    return newErrors;
  }
  const handleProceedToPricingDetails = (e) => {
    const newErrors = findFormErrors();
    if (hasValueInObject(newErrors, true)) {
      if (newErrors.salesPerson == true) {
        toast.error("Please Enter sales person");
      } else if (newErrors.certificationLab == true) {
        toast.error("Please Enter Certification Lab");
      } else if (newErrors.solitaireCut == true) {
        toast.error("Please Enter Legal Firm solitaire cut");
      } else if (newErrors.solitaireCertificationLab == true) {
        toast.error("Please Enter solitaire certification lab");
      } else if (newErrors.solitaireSize == true) {
        toast.error("Please Enter solitaire size");
      } else if (newErrors.solitaireCarat == true) {
        toast.error("Please Enter solitaire carat");
      } else if (newErrors.solitaireColor == true) {
        toast.error("Please Enter solitaire color");
      }
    } else {
      setTab('ENTER PRICING DETAILS')
    }
  }
  const searchFilter = (e) => {
    let name = e.target.value;
    setSearchname((prevState) => {
      return name;
    }
    );
    searchnames.current = name;
    setCurrentPage(1)
    debounceOpr(byInvoiceIdRef?.current?.value)
  }

  const debounceOpr = useCallback(debounce(() => refetch(), 1000), [])
  const { data: { data: { invoices, count } = {} } = {}, refetch, isLoading: isLoadingSkt, isFetching } = useQuery('getManageInvoices', () => getManageInvoices(currentPage, form?.sortBy, byInvoiceIdRef?.current?.value), {
    onSuccess: (data) => {
      // setPdfData(data?.data?.invoices)
    },
  })
  useEffect(() => {
    refetch()
  }, [currentPage])
  const glRef = useRef()
  const fetchProductbyid = (e, index, glsDesignNo) => {
    let name = e.target.value;
    if (name) {
      fetchInvoiceByidMutate({ productId: name, priceArrIndex: index })
      FetchCustomData({ productId: name, priceArrIndex: index })
    }
    searchnames.current = name;
  }
  const { mutate: fetchInvoiceByidMutate } = useMutation((payload) => getAllProductsDetail(payload), {
    onSuccess: async (data) => {
      const { data: { product, isSuccess, msg } = {}, priceStateIndex } = data
      if (isSuccess) {
        if (product?.length > 0) {
          toast.success(msg);
          setForm(({ ...form, product: product[0] }))
          let productObj = {
            productId: product[0]?.productId,
            designNo: product[0]?.glDesignNumber
          }
          priceState[priceStateIndex] = {
            ...priceState[priceStateIndex],
            ...productObj,
            netDiscInPerc: 0,
            diamDiscInPerc: 0,
            stoneDiscInPerc: 0,
            makingChargeDiscInPerc: 0,
            solitaire1DiscInPerc: 0,
            solitaire2DiscInPerc: 0,
            productType: product[0]?.productType
          };
        } else {
          toast.error("Product not found");
        }
      } else if (data?.data?.message) {
        console.log("error message");
      }
    },
  }
  );
  const { mutate: FetchCustomData } = useMutation((payload) => GetCustomiseData(payload), {
    onSuccess: data => {
      const { data: { data: { isSuccess, caratColor, size } = {} } = {}, priceArrIndex } = data;
      if (isSuccess) {
        custom[priceArrIndex] = {
          caratColor: caratColor,
          sizes: size
        }
      }
    }
  })


  const { data: { data: { srNo } = {} } = {}, refetch: fetchLatestId } = useQuery('invoice_srno', () => FetchLatestId(), {
    onSuccess: (data) => {
      const { data: { srNo: srno, isSuccess, msg } = {} } = data
      if (isSuccess) {
        setForm({ ...form, srNo: form?.srNo ? form?.srNo : srno })
      }
    },
    enabled: false
  })
  const { data: { data: { storeDetails: store } = {} } = {}, refetch: FetchStore } = useQuery('invoice_store', () => GetStoreForInvoice(), {
    enabled: false
  })
  useEffect(() => {
    fetchLatestId()
    FetchStore()
  }, [])
 
  const HandleSortBy = () => {
    refetch()
  }

  const HandlefetchUserByNumber = () => {
    if (addressArray[0]?.shippingAddress?.phone) {
      fetchUserByNumber()
    }
    else {
      setForm({ ...addressArray[0]?.shippingAddress, phone: '' });
      toast.error("Phone is require to search")
    }
  }
  const { data: { data: { user } = {} } = {}, refetch: fetchUserByNumber } = useQuery('user', (d) => getUsers('', addressArray[0]?.shippingAddress?.phone), {
    onSuccess: data => {
      const { data: { isSuccess, msg, user: userData } = {} } = data;
      if (isSuccess) {
        if (userData?.length > 0 && userData[0]?.address?.length > 0 && addressArray[0]?.shippingAddress?.phone) {
          // setAddressArray(userData[0]?.address)
          let addrObj = [{
            shippingAddress: {
              ...userData[0]?.address[0]?.shippingAddress,
              customerId: userData[0]?.userId,
              phone: addressArray[0]?.shippingAddress?.phone
            }
          }]
          // setAddressArray((prevState) => { return [addrObj] });
          setAddressArray(addrObj)
          toast.success(msg)
        }
      }
    },
    enabled: false
  })
  const { data: { data: { Wallet } = {} } = {}, refetch: fetchUserWallet } = useQuery('userWallets', () => GetUserWallet(user[0]?._id), {
    onSuccess: data => {
      const { data: { isSuccess, msg } = {} } = data;
    },
    enabled: false
  })
  const handleEmployeeChange = (event, index, property_name) => {
    const { target: { name, value } = {} } = event;
    const newList = addressArray?.map((item, i) => {
      if (i !== parseInt(index)) return { ...item };
      if (property_name === 'billingAddress') {
        return { ...item, billingAddress: { ...item?.billingAddress, [name]: value } }
      } else if (property_name === 'shippingAddress') {
        return { ...item, shippingAddress: { ...item?.shippingAddress, [name]: value } }
      }
    })
    setAddressArray((prevState) => { return newList });
  }
  const handleDeliveryAddressChange = (event, index, property_name) => {
    const { target: { name, value } = {} } = event;
    const newList = deliveryAddressArray?.map((item, i) => {
      if (i !== parseInt(index)) return { ...item };
      if (property_name === 'billingAddress') {
        return { ...item, billingAddress: { ...item?.billingAddress, [name]: value } }
      } else if (property_name === 'shippingAddress') {
        return { ...item, shippingAddress: { ...item?.shippingAddress, [name]: value } }
      }
    })
    setDeliveryAddressArray((prevState) => { return newList });
  }
  useEffect(() => {
    if (user?.length > 0 && user[0]?._id) {
      fetchUserWallet()
    }
  }, [user])
  const { mutate: verifyCoupon } = useMutation(
    () => checkCoupon(form?.promoCode, user?.length > 0 && user[0]?._id, [form?.product], 5000), {
    onSuccess: data => {
      const { data: { isSuccess, msg, discount } } = data;
      if (isSuccess) {
        toast?.success(msg)
        setForm({ ...form, discount: discount })
      } else toast?.success(msg)
    }
  })
  const newPriceState = useRef(PriceArray)

  const handlePriceChange = (event, index, ele_name) => {
    const { target: { name, value } = {} } = event;
    const newList = priceState.map((data, i) => {
      if (i !== parseInt(index)) return { ...data };
      if (ele_name === 'gross_weight') {
        return { ...data, ...data?.gross_weight, [name]: (value) };
      } else if (ele_name === 'orderId') {
        return { ...data, ...data?.net_weight, [name]: (value) };
      }
      else if (ele_name === 'net_weight') {
        return { ...data, ...data?.net_weight, [name]: (value) };
      }
      else if (ele_name === 'diamond_weight') {
        return { ...data, ...data?.diamond_weight, [name]: (value) };
      }
      else if (ele_name === 'stone_weight') {
        return { ...data, ...data?.stone_weight, [name]: (value) };
      }
      else if (ele_name === 'making_charge') {
        return { ...data, ...data?.makingCharges, [name]: (value) };
      }
      else if (ele_name === 'solitaireOne') {
        return { ...data, ...data?.solitaireOne, [name]: (value) };
      }
      else if (ele_name === 'solitaireTwo') {
        return { ...data, ...data?.solitaireTwo, [name]: (value) };
      }
      else if (ele_name === 'hsnCode') {
        return { ...data, ...data?.hsnCode, [name]: value };
      }
      else if (ele_name === 'diamond') {
        return { ...data, ...data?.diamond, [name]: (value) };
      }
      else if (ele_name === 'karot') {
        return { ...data, ...data?.karot, [name]: value };
      }
      else if (ele_name === 'designNo') {
        return { ...data, ...data?.designNo, [name]: value };
      }
      else if (ele_name === 'premiumPrice') {
        return { ...data, ...data?.premiumPrice, [name]: (value) };
      }
      else if (ele_name === 'diamondColor') {
        return { ...data, ...data?.diamondColor, [name]: value };
      }
      else if (ele_name === "isDiamondCheck") {
        return { ...data, ...data?.isDiamondCheck, [name]: event?.target?.checked }
      }
      else if (ele_name === "isDiscountCheck") {
        return { ...data, ...data?.isDiscountCheck, [name]: event?.target?.checked }
      }
      else if (ele_name === "isStone") {
        return { ...data, ...data?.isDiamondCheck, [name]: event?.target?.checked }
      }
      else if (ele_name === "isStone") {
        return { ...data, ...data?.isDiamondCheck, [name]: event?.target?.checked }
      }
      else if (ele_name === "isSolitaireCheck") {
        return { ...data, ...data?.isDiamondCheck, [name]: event?.target?.checked }
      }
      else if (ele_name === "isPremiumPriceCheck") {
        return { ...data, ...data?.isDiamondCheck, [name]: event?.target?.checked }
      }
      else if (ele_name === 'isPromocodeCheck') {
        return { ...data, ...data?.isPromocodeCheck, [name]: (event?.target?.checked) };
      }
      else if (ele_name === 'productType') {
        return { ...data, ...data?.productType, [name]: (value) };
      }
    });
    setPriceState([...newList]);
  }

  const handleGetGrossPrice = (type, index) => {
    if (type === 'grossPrice') {
      let gp = priceState?.grossWeight * priceState?.grossPriceCt
      return !isNaN(gp) ? gp : 0;
    }
    else if (type === 'grossDiscountPrice') {
      let grossDiscountPrice = priceState?.grossWeight * priceState?.grossPriceCt * (priceState?.grossDiscInPerc / 100)
      return !isNaN(grossDiscountPrice) ? grossDiscountPrice : 0;
    }
    else if (type === 'grossTexableAmt') {
      const grossta = (priceState?.grossWeight * priceState?.grossPriceCt) - (priceState?.grossWeight * priceState?.grossPriceCt * (priceState?.grossDiscInPerc / 100))
      return !isNaN(grossta) ? grossta : 0;
    }
    else if (type === 'grossTotalAmt') {
      const totaAmt = ((priceState?.grossWeight * priceState?.grossPriceCt) - (priceState?.grossWeight * priceState?.grossPriceCt * (priceState?.grossDiscInPerc / 100)))
      return !isNaN(totaAmt) ? totaAmt : 0;
    }
  }
  const GetNetPrice = (type, index) => {
    if (type === 'netPrice') {
      const np = priceState[index]?.netWeight * priceState[index]?.netPriceCt;
      return !isNaN(np) ? np : 0;
    }
    else if (type === 'netDiscAmt') {
      const np = priceState[index]?.netWeight * priceState[index]?.netPriceCt;
      const d = np * (priceState[index]?.netDiscInPerc / 100)
      return !isNaN(d) ? d : 0;
    } else if (type === 'netTaxableAmt') {
      const np = priceState[index]?.netWeight * priceState[index]?.netPriceCt;
      const ntxa = (priceState[index]?.netWeight * priceState[index]?.netPriceCt) - (np * (priceState[index]?.netDiscInPerc / 100));
      return !isNaN(ntxa) ? ntxa : 0;
    } else if (type === 'netTotalAmt') {
      const np = priceState[index]?.netWeight * priceState[index]?.netPriceCt;
      const ntxa = (priceState[index]?.netWeight * priceState[index]?.netPriceCt) - (np * (priceState[index]?.netDiscInPerc / 100));
      return !isNaN(ntxa) ? ntxa : 0;
    }
  }
  const GetDiamondPrice = (type, index) => {
    if (type === 'diamPrice') {
      const np = priceState[index]?.diamond * priceState[index]?.diamPriceCt;
      return !isNaN(np) ? np : 0;
    }
    else if (type === 'diamDiscAmt') {
      const np = priceState[index]?.diamond * priceState[index]?.diamPriceCt;
      const d = np * (priceState[index]?.diamDiscInPerc / 100)
      return !isNaN(d) ? d : 0;
    } else if (type === 'diamTaxableAmt') {
      const np = priceState[index]?.diamond * priceState[index]?.diamPriceCt;
      const d = np * (priceState[index]?.diamDiscInPerc / 100);
      const ntxa = np - d;
      return !iisNaN(ntxa) ? ntxa : 0;
    } else if (type === 'diamTotalAmt') {
      const np = priceState[index]?.diamond * priceState[index]?.diamPriceCt;
      const d = np * (priceState[index]?.diamDiscInPerc / 100);
      const ntxa = np - d;

      return !isNaN(ntxa) ? ntxa : 0;
    }

  }
  const GetStonePrice = (type, index) => {
    if (type === 'stonePrice') {
      const sp = priceState[index]?.stoneWeight * priceState[index]?.stonePriceCt;
      return !isNaN(sp) ? sp : 0;
    }
    else if (type === 'stoneDiscAmt') {
      const sp = priceState[index]?.stoneWeight * priceState[index]?.stonePriceCt;
      const d = sp * (priceState[index]?.stoneDiscInPerc / 100)
      return !isNaN(d) ? d : 0;
    } else if (type === 'stoneTaxableAmt') {
      const sp = priceState[index]?.stoneWeight * priceState[index]?.stonePriceCt;
      const d = sp * (priceState[index]?.stoneDiscInPerc / 100)
      const stxa = sp - d;
      return !isNaN(stxa) ? stxa : 0;
    } else if (type === 'stoneTotalAmt') {
      const sp = priceState[index]?.stoneWeight * priceState[index]?.stonePriceCt;
      const d = sp * (priceState[index]?.stoneDiscInPerc / 100)
      const stxa = sp - d;
      return !isNaN(stxa) ? stxa : 0;
    }
  }
  const handleGetMakingPrice = (type, index) => {
    if (type === 'makingChargePrice') {
      const mp = Number(priceState[index]?.makingChargeWt) * Number(priceState[index]?.makingChargePriceCt)
      return !isNaN(mp) ? mp : 0
    } else if (type === 'makingChargeDiscAmt') {
      const mp = Number(priceState[index]?.makingChargeWt) * Number(priceState[index]?.makingChargePriceCt)
      const d = mp * (priceState[index]?.makingChargeDiscInPerc / 100)
      return !isNaN(d) ? d : 0;
    } else if (type === 'makingChargeTotalAmt') {
      const mp = Number(priceState[index]?.makingChargeWt) * Number(priceState[index]?.makingChargePriceCt)
      const d = mp * (priceState[index]?.makingChargeDiscInPerc / 100)
      const mpr = mp - d;

      return !isNaN(mpr) ? mpr : 0;
    }
  }
  const GetSolitaireOnePrice = (type, index) => {
    if (type === 'solitaire1Price') {
      const sp = priceState[index]?.solitaire1Weight * priceState[index]?.solitaire1PriceCt;
      return !isNaN(sp) ? sp : 0;
    }
    else if (type === 'solitaire1DiscAmt') {
      const sp = priceState[index]?.solitaire1Weight * priceState[index]?.solitaire1PriceCt;
      const d = sp * (priceState[index]?.solitaire1DiscInPerc / 100)
      return !isNaN(d) ? d : 0;
    } else if (type === 'solitaire1TaxableAmt') {
      const sp = priceState[index]?.solitaire1Weight * priceState[index]?.solitaire1PriceCt;
      const d = sp * (priceState[index]?.solitaire1DiscInPerc / 100)
      const stxa = sp - d;
      return !isNaN(stxa) ? stxa : 0;
    } else if (type === 'solitaire1TotalAmt') {
      const sp = priceState[index]?.solitaire1Weight * priceState[index]?.solitaire1PriceCt;
      const d = sp * (priceState[index]?.solitaire1DiscInPerc / 100)
      const stxa = sp - d;

      return !isNaN(stxa) ? stxa : 0;
    }
  }
  const GetSolitaireTwoPrice = (type, index) => {
    if (type === 'solitaire2Price') {
      const sp = priceState[index]?.solitaire2Weight * priceState[index]?.solitaire2PriceCt;
      return !isNaN(sp) ? sp : 0;
    }
    else if (type === 'solitaire2DiscAmt') {
      const sp = priceState[index]?.solitaire2Weight * priceState[index]?.solitaire2PriceCt;
      const d = sp * (priceState[index]?.solitaire2DiscInPerc / 100)
      return !isNaN(d) ? d : 0;
    } else if (type === 'solitaire2TaxableAmt') {
      const sp = priceState[index]?.solitaire2Weight * priceState[index]?.solitaire2PriceCt;
      const d = sp * (priceState[index]?.solitaire2DiscInPerc / 100)
      const stxa = sp - d;
      return !isNaN(stxa) ? stxa : 0;
    } else if (type === 'solitaire2TotalAmt') {
      const sp = priceState[index]?.solitaire2Weight * priceState[index]?.solitaire2PriceCt;
      const d = sp * (priceState[index]?.solitaire2DiscInPerc / 100)
      const stxa = sp - d;

      return !isNaN(stxa) ? stxa : 0;
    }
  }
  const handleGetGrandTotal = (type, index) => {

    if (type === 'beforeTax') {
      let sum = GetNetPrice('netTotalAmt', index) + GetDiamondPrice('diamTotalAmt', index) + GetStonePrice('stoneTotalAmt', index) + GetSolitaireOnePrice('solitaire1TotalAmt', index) + GetSolitaireTwoPrice('solitaire2TotalAmt', index)
      let allTotal = handleGetMakingPrice('makingChargeTotalAmt', index) + (Number(priceState[index]?.premiumPrice) ? Number(priceState[index]?.premiumPrice) : 0) + sum
      let total = allTotal - (form?.discount ? form?.discount : 0)

      return total;
    } else if (type === 'gst') {
      let sum = GetNetPrice('netTotalAmt', index) + GetDiamondPrice('diamTotalAmt', index) + GetStonePrice('stoneTotalAmt', index) + GetSolitaireOnePrice('solitaire1TotalAmt', index) + GetSolitaireTwoPrice('solitaire2TotalAmt', index)
      let allTotal = handleGetMakingPrice('makingChargeTotalAmt', index) + (Number(priceState[index]?.premiumPrice) ? Number(priceState[index]?.premiumPrice) : 0) + sum
      let tax = form?.saleType === 'diamIndia' ? 0.015 : form?.saleType === 'diamState' ? 0.0075 : (form?.saleType === 'jewelleryState' || form?.saleType === 'jewelleryIndia') ? 0.03 : 0;
      let gst = (allTotal - (form?.discount ? form?.discount : 0)) * tax;
      return gst;
    }
    else if (type === 'afterTax') {
      let sum = GetNetPrice('netTotalAmt', index) + GetDiamondPrice('diamTotalAmt', index) + GetStonePrice('stoneTotalAmt', index) + GetSolitaireOnePrice('solitaire1TotalAmt', index) + GetSolitaireTwoPrice('solitaire2TotalAmt', index)
      let allTotal = handleGetMakingPrice('makingChargeTotalAmt', index) + (Number(priceState[index]?.premiumPrice) ? Number(priceState[index]?.premiumPrice) : 0) + sum
      let tax = form?.saleType === 'diamIndia' ? 0.015 : form?.saleType === 'diamState' ? 0.0075 * 2 : (form?.saleType === 'jewelleryState' || form?.saleType === 'jewelleryIndia') ? 0.03 : 0;
      let afterAddingGst = allTotal * tax;
      //coupon
      let finalAmt = Number(allTotal + afterAddingGst) - (form?.discount ? form?.discount : 0)
      return finalAmt;
    }
    else if (type === 'totalDiscount') {
      let totalDiscount = GetNetPrice('netDiscAmt', index) + GetDiamondPrice('diamDiscAmt', index) + GetStonePrice('stoneDiscAmt', index) + GetSolitaireOnePrice('solitaire1DiscAmt', index) + GetSolitaireTwoPrice('solitaire2DiscAmt', index);
      return totalDiscount;
    }
    else if (type === 'totalPrice') {
      let totalSum = GetNetPrice('netPrice', index) + GetDiamondPrice('diamPrice', index) + GetStonePrice('stonePrice', index) + GetSolitaireOnePrice('solitaire1Price', index) + GetSolitaireTwoPrice('solitaire2Price', index)
      return totalSum;
    }
  }
  //verify user function
  const handleGetOtpButton = (phone) => {
    if (phone?.length == 10) {
      // dispatch(setUserNumber(phone));
      getNewOtp(phone);
    } else {
      setError(true);
      toast.error("Phone number incorrect", {
        autoClose: 2000,
        hideProgressBar: false,
      });
    }
  };

  const AddMoreProductPrice = (index) => {
    let priceArr = PriceArray[0]
    setPriceState([...priceState, priceArr])

  }
  const RemoveProductPrice = (index) => {
    let list = priceState;
    list.splice(index, 1)
    setPriceState([...priceState]);
  }

  const [otpMessage, setOtpMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [openOtpPage, setOtpPage] = useState('')
  const { mutate: getNewOtp } = useMutation(
    (phone) => otpRequest(phone),
    {
      onSuccess: (data) => {
        if (data?.data?.is_success) {
          if (data?.data?.msg === "User Blocked!") {
            toast.error(
              "Your Account is Blocked!  Please contact customer care",
              {
                autoClose: 4000,
                hideProgressBar: false,
              }
            );
          } else {
            toast.success(data?.data?.msg, {
              autoClose: 4000,
              hideProgressBar: false,
            });
            setIsVerifiedOtp(true)
            setOtpMessage(data?.data?.msg);
          }
        }
      },
      onError: () => {
        toast.error("An Error occured while sending OTP", {
          autoClose: 2000,
          hideProgressBar: false,
        });
      },
    }
  );
  // verify OTP
  const { mutate: verifyOtp } = useMutation(
    () => otpVerification(addressArray[0]?.shippingAddress?.phone, form?.garnetWalletOtp),
    {
      onSuccess: (data) => {
        if (data?.data?.is_success) {
          setOtpMessage(data?.data?.msg);
          setIsVerifiedOtp(data?.data?.msg === "Signin User!" || data?.data?.msg === "Login User!")
          toast.success(`Otp verified successfully!`)
          handleWalletUpdate()
        } else {
          setOtpMessage('');
          setIsVerifiedOtp(false)
          toast.warning(data?.data?.msg)
        }
      },
      onError: (data) => {
        toast.error(data?.data?.msg, {
          autoClose: 2000,
          hideProgressBar: false,
        })
      },
      enabled: false,

    }
  );
  const handleWalletUpdate = (e, data) => {
    let payload = {
      // srNo: form?.srNo,
      transactionId: moment().format("MMMMDDYYYY"),
      userId: user?.length > 0 && user[0]?._id,
      phone: form?.phone,
      amount: advancePay?.length > 0 && Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt),
      amountType: 'Transactional',
      //   moneyAddType: form?.moneyAddType,
      tType: 'debit',
      //   amountValidity: form?.amountValidity,
      //   amountValidityDate: form?.amountValidityDate,
      details: advancePay?.length > 0 && `${Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt)} paid from invoice.`,
      source: "pos checkout", // //
      //   sendWhatsapp: form?.phone,
      //   sendMail: form?.sendMail,
      //   emailId: form?.emailId,
      whatsAppNumber: form?.phone,
      perticulars: 'Garnet Wallet', // //
      transactionDate: moment().format("MMMM DD,YYYY | hh:mma")
    }
    saveWalletDetail(payload)
  }
  const { mutate: saveWalletDetail } = useMutation((payload) => addWallet(payload), {
    onSuccess: ({ data }) => {
      if (data?.isSuccess) {
        toast.success(data?.msg)
        fetchUserWallet();
      }
    },
  });
  //payment method section
  const HandleCashChange = (type) => {
    const oneRupeeCash = (form?.noOfOneRupeeNotes !== '' ? Number(form?.noOfOneRupeeNotes ? form?.noOfOneRupeeNotes : 0) * 1 : 0);
    const noOfTwoCash = (form?.noOfTwoNotes !== '' ? Number(form?.noOfTwoNotes ? form?.noOfTwoNotes : 0) * 2 : 0);
    const noOfFiveRupeeCash = (form?.noOfFiveRupeeNotes !== '' ? Number(form?.noOfFiveRupeeNotes ? form?.noOfFiveRupeeNotes : 0) * 5 : 0);
    const noOfTenCash = (form?.noOfTenNotes !== '' ? Number(form?.noOfTenNotes ? form?.noOfTenNotes : 0) * 10 : 0);
    const noOfTwentyRupeeCash = (form?.noOfTwentyRupeeNotes !== '' ? Number(form?.noOfTwentyRupeeNotes ? form?.noOfTwentyRupeeNotes : 0) * 20 : 0);
    const noOfFiftyCash = (form?.noOfFiftyNotes !== '' ? Number(form?.noOfFiftyNotes ? form?.noOfFiftyNotes : 0) * 50 : 0);
    const noOfHundredCash = (form?.noOfHundredNotes !== '' ? Number(form?.noOfHundredNotes ? form?.noOfHundredNotes : 0) * 100 : 0);
    const twoHundredCash = (form?.twoHundredNotes !== '' ? Number(form?.twoHundredNotes ? form?.twoHundredNotes : 0) * 200 : 0);
    const noOfFiveHundredCash = (form?.noOfFiveHundredNotes !== '' ? Number(form?.noOfFiveHundredNotes ? form?.noOfFiveHundredNotes : 0) * 500 : 0);
    const twoThousandCash = (form?.twoThousandNotes !== '' ? Number(form?.twoThousandNotes ? form?.twoThousandNotes : 0) * 2000 : 0);

    const totalCash =
      + Number(oneRupeeCash)
      + Number(noOfTwoCash)
      + Number(noOfFiveRupeeCash)
      + Number(noOfTenCash)
      + Number(noOfTwentyRupeeCash)
      + Number(noOfFiftyCash)
      + Number(noOfHundredCash)
      + Number(twoHundredCash)
      + Number(noOfFiveHundredCash)
      + Number(twoThousandCash)

    return Number(totalCash);
  }
  const SWIPE_ARRAY = [{
    swipe: {
      amount: '',
      cardNumber: '',
      cardType: '',
      rrNumber: '',
      approvalCode: '',
      country: '',
      remarks: ''
    }
  }]
  const [swipeData, setSwipeData] = useState(SWIPE_ARRAY)
  const handlSwipeChange = (event, index, ele_name) => {
    const { target: { name, value } = {} } = event;
    const newList = swipeData.map((data, i) => {
      if (i !== parseInt(index)) return { ...data };
      if (ele_name === 'swipe') {
        return { ...data, swipe: { ...data?.swipe, [name]: value } };
      }
    });
    setSwipeData([...newList]);
  }
  const BANK_TRANSFER_ARRAY = [{
    bankDetails: {
      amount: '',
      rrNumber: '',
      remarks: ''
    }
  }]
  const [bankData, setBankData] = useState(BANK_TRANSFER_ARRAY)
  const handlBankTransferChange = (event, index, ele_name) => {
    const { target: { name, value } = {} } = event;
    const newList = bankData.map((data, i) => {
      if (i !== parseInt(index)) return { ...data };
      if (ele_name === 'bank') {
        return { ...data, bankDetails: { ...data?.bankDetails, [name]: value } };
      }
    });
    setBankData([...newList]);
  }

  // advance paid section
  const lessAdvancePaidArr = [
    {
      advance: {
        advanceAmt: '',
        advanceUseAmt: ''
      },
      garnetCash: {
        garnetAmt: Wallet?.length > 0 ? Wallet[0]?.promotionalWalletBalance : '',
        garnetUseAmt: ''
      },
      garnetWallet: {
        garnetWallet: Wallet?.length > 0 ? Wallet[0]?.garnetWalletBalance : '',
        garneWallettUseAmt: ''
      },
      giftCard: {
        giftAmt: '',
        giftUseAmt: ''
      }
    }
  ];
  const [advancePay, setAdvancePay] = useState([{ ...lessAdvancePaidArr, garnetWallet: Wallet?.length > 0 ? Wallet[0]?.garnetWalletBalance : 0 }])
  const handleAdvancePaymentChange = (event, index, property_name) => {
    const { target: { name, value } = {} } = event;
    const newList = advancePay?.map((item, i) => {
      if (i !== parseInt(index)) return { ...item };
      if (property_name === 'advance') {
        return { ...item, advance: { ...item?.advance, [name]: value } }
      } else if (property_name === 'garnetCash') {
        return { ...item, garnetCash: { ...item?.garnetCash, [name]: value } }
      } else if (property_name === 'garnetWallet') {

        return { ...item, garnetWallet: { ...item?.garnetWallet, garneWallettUseAmt: value, garnetWalletTotalAmt: (Wallet?.length > 0 ? Wallet[0]?.promotionalWalletBalance : 0) - value } }

      } else if (property_name === 'giftCard') {
        return { ...item, giftCard: { ...item?.giftCard, [name]: value } }
      }
    })
    setAdvancePay([...newList]);
  }

  const GetAdvanceTotal = (type) => {
    let advanceTotal = Number(advancePay[0]?.advance?.advanceUseAmt ? advancePay[0]?.advance?.advanceUseAmt : 0)
      + Number(advancePay[0]?.garnetWallet?.garneWallettUseAmt ? advancePay[0]?.garnetWallet?.garneWallettUseAmt : 0)
      + Number(advancePay[0]?.garnetCash?.garnetUseAmt ? advancePay[0]?.garnetCash?.garnetUseAmt : 0)
      + Number(advancePay[0]?.giftCard?.giftUseAmt ? advancePay[0]?.giftCard?.giftUseAmt : 0);

    const sumOfPriceArrTotal = priceState.reduce((total, item, index) => {
      return total + Number(handleGetGrandTotal('afterTax', index))
    }, 0)
    return sumOfPriceArrTotal - Number(isVerifiedOtp ? advanceTotal : 0);
  }
  const HandleSubmit = () => {
    const newErrors = PricingDetailFormError();
    if (hasValueInObject(newErrors, true)) {
      if (newErrors.storeId == true) {
        toast.error("Please Select Store");
      } else if (newErrors.invoiceDate == true) {
        toast.error("Please Select Invoice Date");
      } else if (newErrors.saleType == true) {
        toast.error("Please Select Sale Type");
      } else if (newErrors.orderDate == true) {
        toast.error("Please Enter Order Date");
      }
      else if (newErrors.dispatchDocNo == true) {
        toast.error("Please Enter dispatch doc no");
      } else if (newErrors.dispatchThrough == true) {
        toast.error("Please Enter dispatch throung");
      } else if (newErrors.companyAddress == true) {
        toast.error("Please Enter company address");
      } else if (newErrors.customerBilling == true) {
        toast.error("Please Enter Customer Billing address")
      } else if (newErrors.paymentMethod == true) {
        toast.error("Please Select Payment method");
      }
    } else {
      let payload = {
        ...form,
        notes: {
          noOfOneRupeeNotes: form?.noOfOneRupeeNotes,
          noOfTwoNotes: form?.noOfTwoNotes,
          noOfFiveRupeeNotes: form?.noOfFiveRupeeNotes,
          noOfTenNotes: form?.noOfTenNotes,
          noOfTwentyRupeeNotes: form?.noOfTwentyRupeeNotes,
          noOfFiftyNotes: form?.noOfFiftyNotes,
          noOfHundredNotes: form?.noOfHundredNotes,
          twoHundredNotes: form?.twoHundredNotes,
          noOfFiveHundredNotes: form?.noOfFiveHundredNotes,
          twoThousandNotes: form?.twoThousandNotes
        },
        pbPremiumPrice: form?.premiumPrice,
        productPriceDetails: priceState, // array
        advancePaid: advancePay,
        bankTransfer: bankData,
        swipe: swipeData,
        // walletId: Wallet?.length > 0 && Wallet[0]?._id,
        userId: user?._id,
        addressArray: addressArray,
        deliveryAddressArray: deliveryAddressArray,
        cash: HandleCashChange(),
        createdBy: loginUserType?.type,
        storeId: form?.storeId,
        //
        // makingCharge:"",
        // productValue:"",
        // discount:"",
        // taxableAmount:"",
        // totalPrice:"",

      }
      editedInvoice(payload);
      setTab(isLoading ? 'ENTER PRICING DETAILS' : 'INVOICE')
    }
  };
  const { mutate: editedInvoice, isLoading } = useMutation(
    (payload) => editInvoice(payload),
    {
      onSuccess: async (data) => {
        if (data?.isSuccess) {
          toast.success(data?.msg)
          setPdf(data?.data?.response)
          setPdfDataValue(data?.data?.pdfData)
          setInvoiceData(data?.data?.Invoice[0])
          setPrice(data?.data?.price)
          refetch()
        }
      },
    }
  );
  const HandleUpdateInvoice = () => {
    let payload = {
      ...form,
      notes: {
        noOfOneRupeeNotes: form?.noOfOneRupeeNotes,
        noOfTwoNotes: form?.noOfTwoNotes,
        noOfFiveRupeeNotes: form?.noOfFiveRupeeNotes,
        noOfTenNotes: form?.noOfTenNotes,
        noOfTwentyRupeeNotes: form?.noOfTwentyRupeeNotes,
        noOfFiftyNotes: form?.noOfFiftyNotes,
        noOfHundredNotes: form?.noOfHundredNotes,
        twoHundredNotes: form?.twoHundredNotes,
        noOfFiveHundredNotes: form?.noOfFiveHundredNotes,
        twoThousandNotes: form?.twoThousandNotes
      },
      pbPremiumPrice: form?.premiumPrice,
      productPriceDetails: priceState, // array
      advancePaid: advancePay,
      bankTransfer: bankData,
      swipe: swipeData,
      // walletId: Wallet?.length > 0 && Wallet[0]?._id,
      userId: user?._id,
      addressArray: addressArray,
      deliveryAddressArray: deliveryAddressArray,
      cash: HandleCashChange(),
      createdBy: loginUserType?.type,
      storeId: form?.storeId
    }
    UpdateInvoice(payload);
    setTab(isLoading ? 'ENTER PRICING DETAILS' : 'INVOICE')

  };
  const { mutate: UpdateInvoice } = useMutation(
    (payload) => UpdateEditInvoice(payload),
    {
      onSuccess: async (data) => {
        if (data?.isSuccess) {
          setPdf(data?.data?.response)
          setPdfDataValue(data?.data?.pdfData)
          setInvoiceData(data?.data?.invoice)
          setPrice(data?.data?.price)
          // refetch()
        }
      },
    }
  );
  const GenNewInvoice = () => {
    fetchLatestId()
    setPriceState(PriceArray)
    setAddressArray(EmployeeAddressArray)
    setDeliveryAddressArray(DeliveryAddressArray)
    setSwipeData(SWIPE_ARRAY)
    setBankData(BANK_TRANSFER_ARRAY)
  };
  console.log(swipeData,'s w i p e d a t a')
  return {
    GenNewInvoice,
    RemoveProductPrice,
    count,
    counter,
    form,
    pdf,
    searchname,
    invoices,
    isLoadingSkt,
    isFetching,
    isLoading,
    searchFilter,
    fetchProductbyid,
    setForm,
    handleChange,
    setInForm,
    HandleSubmit,
    pdfDataValue,
    currentPage,
    setCurrentPage,
    price,
    srNo,
    store,
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
    HandlefetchUserByNumber,
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
    newPriceState,
    byInvoiceIdRef,
    isVerifiedOtp,
    setIsVerifiedOtp,
    setOtpMessage,
    otpMessage,

    handleDeliveryAddressChange,
    setDeliveryAddressArray,
    deliveryAddressArray,
    PostOffice,
    GetStorePincodeAddress,

    custom,
    setCustom
  }
}