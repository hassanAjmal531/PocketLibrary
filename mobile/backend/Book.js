import axios from "axios";
const config = require ("./config");

const search = async(query) => {
    await axios.get(`GET https://www.googleapis.com/books/v1/volumes?q=${query}&filter=free-ebooks&key= ${config.apiKey}`)

}
export default module = search;