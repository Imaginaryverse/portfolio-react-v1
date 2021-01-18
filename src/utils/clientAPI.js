import axios from 'axios';

const baseUrl = 'https://www.antonbertilsson.se/.netlify/functions';

export const sendMessage = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/contact`, {
      email: data.email ? data.email : 'error: email missing',
      message: data.message ? data.message : 'error: message missing',
      name: data.name ? data.name : 'error: name missing',
      subject: data.subject ? data.subject : 'error: subject missing',
      nm_key: 'Wf5Q3fXhkjGS27NJ',
    });
    return response;
  } catch (error) {
    console.warn(error);
  }
};
