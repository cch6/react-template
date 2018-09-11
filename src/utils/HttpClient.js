import axios from 'axios'
import config from '../config/index'

const {API_BASE_URL} = config

Object.assign(axios.defaults, {
  baseURL: API_BASE_URL,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  withCredentials: false
})

// const xhrQueue = []
/**
 * 请求前钩子函数
 */
/* axios.interceptors.request.use(function (config) {
  /!* if( config.showLoading ){
   xhrQueue.push(1);

   }*!/
  //console.log(config);
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  //console.log(response);
  return response;
}); */

export {axios}
