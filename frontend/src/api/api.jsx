import axios from "axios";

const url = "http://localhost:8000";

export async function postReviewsHospital(datas){
    const res = await axios.post(`${url}/postreviewhospital`,datas);
    return res.data;
}


export async function getReviewsHospital(datas){
    const res = await axios.post(`${url}/getreviewhospital`,datas);
    return res.data;
}

export async function addDoctor(data) {
    const res = await axios.post(`${url}/adddoctor`,data,{headers:{Authorization:localStorage.getItem("deshlog")}})
    return res.data
}