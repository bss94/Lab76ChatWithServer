import ChatList from '../../components/ChatList/ChatList.tsx';
import ChatForm from '../../components/ChatForm/ChatForm.tsx';
import {useAppDispatch} from '../../app/hooks.ts';
import {useEffect} from 'react';
import {fetchMessages} from '../../store/messagesThunk.ts';
import {toast} from 'react-toastify';

const Chat = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    try{
      dispatch(fetchMessages())
    }catch (e){
      toast.error('Error getting messages');
    }
  },[dispatch])

  return (
    <>
      <ChatList/>
      <ChatForm/>
    </>
  );
};

export default Chat;