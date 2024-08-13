import {FormMessage} from '../../types';
import {ChangeEvent, FormEvent, useState} from 'react';
import {Box, FormControl, Grid, InputLabel, OutlinedInput, TextField} from '@mui/material';
import axiosApi from '../../axiosApi';
import {toast} from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const initialState: FormMessage = {
  author: '',
  message: ''
};

const ChatForm = () => {

  const [formState, setFormState] = useState<FormMessage>({
    ...initialState
  });
  const [sending, setSending] = useState<boolean>(false);

  const onHandleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const sendMessage = async (message:FormMessage)=>{
    try {
      setSending(true);
      await axiosApi.post('/messages', message);
      setSending(false);
    } catch (e) {
      toast.error('bad request');
    }
  }
  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(formState)
    setFormState(prevState => ({...prevState,message:''}))
  };

  return (
    <Grid container spacing={2}>
      <Box
        component="form"
        sx={{
          width: '100%',
          m: 2,
        }}
        autoComplete="off"
        onSubmit={onFormSubmit}
      >
        <Grid container alignItems="center">
          <FormControl fullWidth sx={{my: 2,}}>
            <InputLabel htmlFor="author">Author</InputLabel>
            <OutlinedInput
              id="author"
              placeholder="Enter author of message"
              label="Author"
              value={formState.author}
              name={'author'}
              required
              onChange={onHandleChange}
            />
          </FormControl>
        </Grid>
        <TextField
          id="message"
          label="Message"
          multiline
          fullWidth
          rows={4}
          placeholder="Enter message"
          name="message"
          value={formState.message}
          required
          onChange={onHandleChange}
        />
        <LoadingButton
          sx={{my:2}}
          type="submit"
          endIcon={<SendIcon/>}
          loading={sending}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
      </Box>
    </Grid>
  );
};

export default ChatForm;