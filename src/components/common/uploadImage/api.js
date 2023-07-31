import { api, apiEndPoints } from "../../../api";

export const uploadProfileImage = async (payload) => {
    const { data } = await api.post(apiEndPoints.imageUpload, payload);
    return {
      data,
    };
  };