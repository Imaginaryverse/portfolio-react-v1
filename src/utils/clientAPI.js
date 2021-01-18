import axios from 'axios';

const baseUrl = '';

export const sendMessage = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/contact`, {
      email: data.email ? data.email : 'error: email missing',
      message: data.message ? data.message : 'error: message missing',
      name: data.name ? data.name : 'error: name missing',
      subject: data.subject ? data.subject : 'error: subject missing',
      nm_key: '1234',
    });
    return response;
  } catch (error) {
    console.warn(error);
  }
};
