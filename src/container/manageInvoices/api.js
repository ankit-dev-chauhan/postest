import { api, apiEndPoints } from "../../api"

export const getManageInvoices = async (payload, sortBy, invoiceId) => {
  const { data } = await api.get(apiEndPoints.invoice, {
    params: {
      pagination: true,
      pageNumber: payload,
      pageSize: 10,
      sortby: sortBy,
      q: invoiceId
    },
  });
  return {
    data,
  };
};
export const GetCustomiseData = async ({ productId, priceArrIndex }) => {
  const data = await api.get(apiEndPoints.singleproductByGl(productId),{
    params:{
      type:'glnumber'
    }
  });
  return {
    data,
    priceArrIndex
  };
}
export const editInvoice = async (payload) => {
  const { data } = await api.post(apiEndPoints.invoice, payload);

  return data;
};
export const UpdateEditInvoice = async (payload) => {
  const { data } = await api.put(apiEndPoints.updateInvoice(payload?._id), payload);

  return data;
};
export const FetchLatestId = async () => {
  const response = await api.post(apiEndPoints.fetchInvoiceId);
  return response;
}
export const GetStoreForInvoice = async () => {
  const response = await api.get(apiEndPoints.storeForInvoice, {
    params: {
      pagination: true,
      admin: true
    }
  })
  return response
}
export const checkCoupon = async (coupon, userId, products, total) => {
  const response = await api.post(apiEndPoints.checkCoupon(coupon), {
    user_id: userId,
    products: products,
    totalPrice: total,
    isCoupon: true,
    couponName: coupon
  });
  return response;
};
export const getUsers = async (currentPage, phone) => {
  const { data } = await api.get(apiEndPoints.user, {
    params: {
      pagination: true,
      pageNumber: currentPage,
      phone: phone,
    },
  });
  return {
    data,
  };
};
export const GetUserWallet = async (id) => {
  const response = await api.get(apiEndPoints.wallet, {
    params: { userId: id }
  })
  return response
}
export const otpRequest = async (number) => {
  const response = await api.post(apiEndPoints.getOtp, {
    phone: `91` + number,
  });
  return response;
};
export const otpVerification = async (number, otp) => {
  const response = await api.post(apiEndPoints.verifyOtp, {
    phone: `91` + number,
    otp: otp,
  });
  return response;
};