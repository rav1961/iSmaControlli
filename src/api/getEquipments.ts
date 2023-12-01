import axios from 'axios';

const API_HOST = import.meta.env.PROD ? window.location.host : 'http://192.168.1.123:88';

export const getEquipments = async () => {
  const { data } = await axios.get(`${API_HOST}/haystack/read?filter=equip`, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });

  return data;
};
