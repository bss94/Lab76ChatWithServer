import ChatItem from './ChatItem.tsx';
import {CircularProgress, Grid} from '@mui/material';
import {useAppSelector} from '../../app/hooks.ts';
import {selectFetching, selectMessages} from '../../store/messagesSlice.ts';

const ChatList = () => {
  const fetching = useAppSelector(selectFetching)
  const messages = useAppSelector(selectMessages)

  return (
    <Grid container spacing={2} direction="column">
      {fetching?<div><CircularProgress size="lg" /> </div>  :
      messages.map((item)=>{
        return <ChatItem message={item.message} author={item.author} datetime={item.datetime} key={item.id}/>
      })
      }
    </Grid>
  );
};

export default ChatList;