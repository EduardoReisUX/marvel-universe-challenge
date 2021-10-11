import axios from "axios";
import md5 from "crypto-js/md5";

const PUBLIC_KEY = "77024ac9aa61d221928c3863a557a749";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private api key here";

const TIME = Number(new Date());
const HASH = String(md5(`${TIME + PRIVATE_KEY + PUBLIC_KEY}`));

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  method: "GET",
  params: {
    ts: TIME,
    apikey: PUBLIC_KEY,
    hash: HASH,
  },
});

export default api;
