import { axiosInstance } from 'src/libs/axios';

interface PostProp {
  id: string;
  val: string | number;
}

const API_URL = import.meta.env.PROD ? 'haystack' : 'http://192.168.1.123:88/haystack';

export const postDataPointValue = async ({ id, val }: PostProp) => {
  const value = encodeURIComponent(val);
  const { data } = await axiosInstance.get(`${API_URL}/pointWrite?id=${id}&level=17&val=${value}`);
  //   const { data } = await axiosInstance.post(`${API_URL}/pointWrite`, {
  //     id: id,
  //     val: value,
  //     level: 17
  //   });

  return data;
};
