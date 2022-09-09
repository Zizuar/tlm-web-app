import axios from 'axios';

export const fetchPresaves = async () => {
  const apiBaseUrl = 'https://tlm-static-us.s3.us-east-2.amazonaws.com/presaves.json';
  return await axios.get(apiBaseUrl);
};
