import axios from "axios";
const KEY = '541d3a3e77434134b7eebc7ded2a5e46';

export default axios.create({
    baseURL: "https://api-factory.simbirsoft1.com/api/db/",
    headers: { 
    "Access-Control-Allow-Headers": "X-Api-Factory-Application-Id, Authorization",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",

}
  });