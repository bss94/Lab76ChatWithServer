export interface IMessage {
  id: string,
  author: string,
  message: string,
  datetime: string
}

export interface IReqMessage {
  author: string,
  message: string,
}