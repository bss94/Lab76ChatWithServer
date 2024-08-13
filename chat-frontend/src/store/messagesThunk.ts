import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {FormMessage, Message} from '../types.ts';

export const fetchMessages = createAsyncThunk<Message[]>(
  'messages/fetchMessages',
  async ()=>{
    const {data:messages} = await axiosApi.get<Message[]>('/messages');
    return messages;
  }
)
export const createMessage = createAsyncThunk<void,FormMessage>(
  'messages/createMessage',
  async (newMessage)=>{
    await axiosApi.post('/messages', newMessage);
  }
)

export const fetchNewMessages = createAsyncThunk<Message[],string>(
  'messages/fetchNewMessages',
  async (datetime)=>{
    const {data:messages}=await axiosApi.get<Message[]>(`/messages?datetime=${datetime}`)
    return messages
  }
)