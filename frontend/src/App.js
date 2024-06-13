import { Box, Heading, Container } from '@chakra-ui/react';
import Notifications from './Components/Notifications';
import VideoPlayer from './Components/VideoPlayer';
import Options from './Components/Options';

function App() {
    return (
        <Box>
          <Container maxW="1200px" mt="8">
            <Heading as="h2" size="2xl"> Video Chat App </Heading>
            <VideoPlayer />
            <Options />
            <Notifications />
          </Container>
        </Box>
    );
}
export default App;
