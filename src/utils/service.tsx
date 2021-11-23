import Axios from 'axios';
const URL: string = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
export const postRegister = (data: any) => 
    Axios.post(URL, data);