import {promises as fs} from 'fs';
import {IMessage, IReqMessage} from "./types";
import {randomUUID} from "crypto";

const fileName = './db.json';

let data: IMessage[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
      console.error(e);
    }
  },

  async getItems() {
    if (data.length > 30) {
      return data.slice(data.length - 30);
    } else {
      return data;
    }
  },
  async getItemsFromDatetime(datetime: string) {
    const index = data.findIndex(el => el.datetime === datetime);
    if (index > -1) {
      return data.slice(index + 1);
    } else {
      return [];
    }
  },

  async addItem(item: IReqMessage) {
    const message: IMessage = {
      id: randomUUID(),
      ...item,
      datetime: new Date().toISOString()
    };
    data.push(message);
    await this.save();
    return message;
  },

  async save() {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2),);
  },
};

export default fileDb;