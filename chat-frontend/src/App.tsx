import {Container} from '@mui/material';
import Chat from './containers/Chat/Chat.tsx';

const App = () => {
  return (
    <>
      <Container sx={{mt: 5}} maxWidth="sm">
        <Chat/>
      </Container>
    </>
  );
};

export default App;
