import express from 'express';
import fileDb from "../fileDb";
import {IReqMessage} from '../types';

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const products = await fileDb.getItems();
  res.send(products);
});

messagesRouter.post('/', async (req, res) => {
  if(req.body.author && req.body.message){
    const message: IReqMessage = {
      author: req.body.author,
      message: req.body.message,
    };
    const savedProduct = await fileDb.addItem(message);
    res.send(savedProduct);
  }else {
    res.status(400).send({"error": "Author and message must be present in the request"})
  }

});

export default messagesRouter;