import { Box, ChakraProvider, HStack, VStack, Stack, useMediaQuery, Flex } from '@chakra-ui/react';
import './App.css';
import Cards from './features/Cards/Cards';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  const [isLargerThan700] = useMediaQuery('(min-width: 1000px)')

  return (
    <ChakraProvider>
      <Flex flexWrap='wrap' width={'100%'} >
        <Box width={isLargerThan700 ? "80%" : "100%"}>
          <Header />
          <Cards/>
        </Box>
        <Box width={isLargerThan700 ? "20%" : "100%"}>
          <Subreddits />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
