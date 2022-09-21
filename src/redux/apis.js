import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const NEWS_API_KEY="b27d14cc921f4ca689b31c0febba29c7"
export const getNews=async()=>{
    console.log("reahed function");
    const {data}=await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-08-21&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`)
    console.log("data",data);
    data.articles.map(item=>{
        item.uniqueid=uuidv4()
    })
    return data.articles
}