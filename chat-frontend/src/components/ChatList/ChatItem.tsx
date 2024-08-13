import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

interface Props {
  message: string;
  author: string;
  datetime: string;
}

const ChatItem: React.FC<Props> = ({
  author, datetime, message,
}) => {
  return (

    <Card sx={{mb: 1,width:'100%'}}>
      <CardContent>
        <Typography sx={{fontSize: 12}} color="text.secondary">
          {datetime}
        </Typography>
        <Typography variant="h6" component="div">
          {author} send:
        </Typography>
        <Typography variant="body2">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChatItem;