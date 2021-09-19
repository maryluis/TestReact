import axios from "axios";
import { url} from "./";



async function getPro() {
    const products = await axios.get(url);
    return products;
}


export default getPro;