import ChatList from '../../components/ChatList/ChatList';
import ChatForm from '../../components/ChatForm/ChatForm';
import {useEffect, useState} from 'react';
import {Message} from '../../types';
import axiosApi from '../../axiosApi';
import {toast} from 'react-toastify';
import {CircularProgress, Grid} from '@mui/material';

const Chat = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [fetchingMessages, setFetchingMessages] = useState(false);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setFetchingMessages(true);
        const {data: messages} = await axiosApi.get<Message[]>('/messages');
        setMessages([...messages]);
        setFetchingMessages(false);
      } catch (e) {
        toast.error('error cant get messages');
      }

    };
    void fetchMessages();
  }, []);
  useEffect(() => {
    const interval = setInterval(async () => {
      const copyMessages = [...messages];
      const lastItem = copyMessages.pop();
      if (lastItem !== undefined) {
        const lastMessageTime: string = lastItem.datetime;
        const {data: newMessages} = await axiosApi.get<Message[]>(`/messages?datetime=${lastMessageTime}`);
        if (newMessages.length > 0) {
          toast.success('Found new messages');
          setMessages(prevState => {
            return [...prevState, ...newMessages];
          });
          clearInterval(interval);
        }
      }
    }, 2000);
  }, [messages]);

  return (
    <>
      {fetchingMessages ?
        <Grid container spacing={2} alignItems="center" justifyContent="center"><CircularProgress/></Grid>
        : <ChatList messages={messages}/>
      }

      <ChatForm/>
    </>
  );
};

export default Chat;