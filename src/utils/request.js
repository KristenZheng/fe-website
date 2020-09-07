import axios from 'axios';
import QS from 'qs';
const baseApi = process.env.VUE_APP_API_URL;

const service = axios.create({
  baseURL: baseApi,
  withCredentials: false,
  responseType: 'json',
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    const { code } = res;
    switch (code) {
      case 0:
        return res.data;
        break;
      case 500:
        console.log(res.msg);
        break;
    }
  },
  error => {
    return Promise.reject(error.response.data);
  }
)

export const http = {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      service.get(url, { params: params })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        })
    });
  },

  post: (url, params) => {
		return new Promise((resolve, reject) => {         
      service.post(url, QS.stringify(params))        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
    });
	},
}