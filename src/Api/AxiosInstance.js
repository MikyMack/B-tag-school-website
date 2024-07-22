import axios from 'axios';


const AxiosInstance = axios.create({
    baseURL: 'https://admin.btagglobal.com/api', 
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default AxiosInstance;

  // 'http://localhost/BTAG/api'