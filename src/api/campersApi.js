import axios from 'axios';
const BASE_URL = 'https://65c63eb3e5b94dfca2e142a3.mockapi.io/api/v1';

export const fetchCampersAll = async () => {
  const { data } = await axios.get(`${BASE_URL}/adverts`);
  // console.log(data);
  return data;
};

// export const fetchCampersAdd = async body => {
//   const { data } = await axios.post(`${BASE_URL}/cadverts`, body);
//   // console.log(data);
//   return data;
// };

// export const fetchCampersDelId = async id => {
//   const { data } = await axios.delete(`${BASE_URL}/adverts/${id}`);
//   // console.log(id);
//   return data;
// };

export const fetchCCampersToggle = async ( body) => {
  // console.log(body)
  const { data } = await axios.put(`${BASE_URL}/adverts/${body.id}`, body);
   
  console.log(data);
  return data;
};