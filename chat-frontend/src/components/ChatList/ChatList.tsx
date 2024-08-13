import ChatItem from './ChatItem.tsx';
import {Grid} from '@mui/material';
import {Message} from '../../types.ts';
import React from 'react';

interface Props {
  messages: Message[];
}

const ChatList: React.FC<Props> = ({messages}) => {
  return (
    <Grid container spacing={2} direction="column">
      {messages.map((item) => {
        return <ChatItem message={item.message} author={item.author} datetime={item.datetime} key={item.id}/>;
      })}
    </Grid>
  );
};

export default ChatList;