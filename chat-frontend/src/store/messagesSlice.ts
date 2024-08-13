import {Message} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {createMessage, fetchMessages} from './messagesThunk.ts';

export interface MessagesState {
  messages: Message[];
  messagesFetching: boolean;
  isSending: boolean;
}

const initialState: MessagesState = {
  messages: [],
  messagesFetching: false,
  isSending: false,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.messagesFetching = true;
    })
      .addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
        state.messagesFetching = false;
        state.messages = messages;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.messagesFetching = false;
      });
    builder.addCase(createMessage.pending, (state) => {
      state.isSending = true;
    })
      .addCase(createMessage.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(createMessage.rejected, (state) => {
        state.isSending = false;
      });
  },
  selectors: {
    selectMessages: (state) => state.messages,
    selectFetching: (state) => state.messagesFetching,
    selectSending: (state) => state.isSending,
  },
});
export const messagesReducer = messagesSlice.reducer;

export const {
  selectMessages,
  selectSending,
  selectFetching
} = messagesSlice.selectors;