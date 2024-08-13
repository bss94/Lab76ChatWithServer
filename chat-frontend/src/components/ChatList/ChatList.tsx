import ChatItem from './ChatItem.tsx';
import {Grid} from '@mui/material';

const ChatList = () => {
  return (
    <Grid container spacing={2} direction="column" height={'550px'}>
      <ChatItem message={'asdad'} author={'aaaaaa'} datetime={'xxxxxxx'}/>
      <ChatItem message={'asdad'} author={'aaaaaa'} datetime={'xxxxxxx'}/>
      <ChatItem message={'asdad'} author={'aaaaaa'}
                datetime={'xxxxxxx'}/>

    </Grid>
  );
};

export default ChatList;