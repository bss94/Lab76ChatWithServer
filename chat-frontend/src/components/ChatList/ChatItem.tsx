import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

interface Props{
  message: string;
  author: string;
  datetime:string
}

const ChatItem:React.FC<Props> = ({
  author,datetime,message,
}) => {
  return (
    <Card sx={{mb: 1}}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        DATETIME {datetime}
        </Typography>
        <Typography variant="h6" component="div">
         Author {author}
        </Typography>
        <Typography variant="body2">
         MESSAGE {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChatItem;