import axios from 'axios';

const API_HOST = import.meta.env.PROD ? 'haystack' : 'http://192.168.1.123:88/haystack';

export const getDatapoints = async () => {
  const { data } = await axios.get(`${API_HOST}/read?filter=point`, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });

  return data;
};
