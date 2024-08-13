import {FormMessage} from '../../types.ts';
import {ChangeEvent, FormEvent, useState} from 'react';
import {Box, Button, FormControl, Grid, InputLabel, OutlinedInput, TextField} from '@mui/material';
import {useAppDispatch} from '../../app/hooks.ts';
import {createMessage} from '../../store/messagesThunk.ts';

const initialState: FormMessage = {
  author: '',
  message: ''
};

const ChatForm = () => {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<FormMessage>({
    ...initialState
  });
 // const [sending, setSending] = useState<boolean>(false);

  const onHandleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const onFormSubmit = async (event:FormEvent)=>{
    event.preventDefault();
    await dispatch(createMessage({...formState}))

  }

  return (
    <Grid container spacing={2}>
    <Box
      component="form"
      sx={{
        width: '100%',
        m:2,
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
      <Button type="submit" variant="outlined" sx={{mt:1}}>send</Button>
    </Box>
    </Grid>
  );
};

export default ChatForm;