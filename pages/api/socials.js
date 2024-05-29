// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { socials } from "./data/socials";


export default function handler(req, res) {
  //если метод соответсвует GET, то только в этом случае воэвращать список соцсетей
  if(req.method === "GET"){
    res.status(200).json( socials );
  }
  
  
}
