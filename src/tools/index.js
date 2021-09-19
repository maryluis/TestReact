import getPro from "./getPro";
import dataGetter from "./dataGetter";
import scrollObj from "./dataCopy";

const url = "https://api.thedogapi.com/v1/breeds?limit=10&page=0";

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

export {url, getPro, dataGetter, scrollObj, delay};