import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import dayjs from 'dayjs';

interface Props {
  message: string;
  author: string;
  datetime: string;
}

const ChatItem: React.FC<Props> = ({
  author, datetime, message,
}) => {
const setDate = (date: string) => {
  const currentDate = new Date().toISOString();
  if(dayjs(date).format('DD.MM.YYYY') === dayjs(currentDate).format('DD.MM.YYYY')){
    return 'Today ' + dayjs(date).format('HH:mm')
  }else if(dayjs(date).format('MM.YYYY') === dayjs(currentDate).format('MM.YYYY')
  && (parseFloat(dayjs(currentDate).format('DD')) - parseFloat(dayjs(date).format('DD')))===1){
    return 'Yesterday ' + dayjs(date).format('HH:mm')
  }else if(dayjs(date).format('YYYY') === dayjs(currentDate).format('YYYY')){
    return dayjs(date).format('DD.MM HH:mm')
  }else dayjs(date).format('DD.MM.YYYY HH:mm')
}
  return (
    <Card sx={{mb: 1,width:'100%'}}>
      <CardContent>
        <Typography sx={{fontSize: 12}} color="text.secondary">
          {setDate(datetime)}
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