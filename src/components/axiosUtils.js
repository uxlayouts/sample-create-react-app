import axios from 'axios';
const dataAPI = 'http://localhost:3030';

const getStoryPage = (number) => {
  return axios.get(dataAPI + '/stories&_limit=12?_page=' + number);
};

const getStory = (id) => {
  return axios.get(dataAPI + '/stories/' + id);
};

const saveStory = (dataObject) => {
  return axios.post('/user', dataObject);
};

const deleteStory = (id) => {
  return axios.delete('/stories/' + id);
};

export default { getStoryPage, getStory, saveStory, deleteStory };
