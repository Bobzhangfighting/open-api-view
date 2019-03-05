import axios from 'axios'
import { Loading } from 'element-ui';

// 'development' 'production' 'test'
let env_config = process.env.NODE_ENV;

let apiUrl="";
if("development" == env_config)
{
  apiUrl='http://localhost:9120/';
}
else if("production" == env_config)
{
  // apiUrl='http://192.168.243.21:9050/';
}
else ;

let teamConnector = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});


// 添加请求拦截器
let loadingInstance1;
teamConnector.interceptors.request.use(
  function(config)
  {
      loadingInstance1 = Loading.service({ fullscreen: true });
     return config;
  },
  function (error)
  {
    console.log(error);
    return Promise.reject(error);

  });

// 添加响应拦截器
teamConnector.interceptors.response.use(

  function(response)
  {
    loadingInstance1.close();
    return response.data;
  },

  function(error)
  {
     loadingInstance1.close();
     return Promise.reject(error)
  });

let teamAPI = function(params,succeedOperation,failedOperation)
{
  teamConnector(params).then(succeedOperation).catch(failedOperation);
}

let team_container = {
  teamAPI:teamAPI,
  apiUrl:apiUrl
}

export default team_container;
