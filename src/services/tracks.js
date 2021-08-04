import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URI}/tracks`;

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const create = async (track) => {
  const res = await axios.post(baseUrl, track);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create };
