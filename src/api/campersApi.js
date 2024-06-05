import axios from 'axios';
const BASE_URL = 'https://65c63eb3e5b94dfca2e142a3.mockapi.io/api/v1';

export const fetchCampersAll = async () => {
  const { data } = await axios.get(`${BASE_URL}/adverts`);
  return data;
};

export const fetchCCampersToggle = async ( body) => {
  const { data } = await axios.put(`${BASE_URL}/adverts/${body.id}`, {
    favorite: !body.favorite,
  });
  return data;
};