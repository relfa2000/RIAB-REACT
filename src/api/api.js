import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.1.239:3000',
});


export const loginUser = async (email, password) => {
  return API.post('/login', { email, password });
};

export const uploadVideo = async (token, videoUri) => {
  const formData = new FormData();
  formData.append('video', {
    uri: videoUri,
    type: 'video/mp4',
    name: 'exercise.mp4',
  });

  return API.post('/upload-video', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};
