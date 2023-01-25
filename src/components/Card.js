import { Box, Button, Divider, Heading, HStack, Image, Stack, Text, Icon, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp} from 'react-icons/fa'

const Card = (props) => {
  return (
  <Box maxW='sm' >
    <Box>
      <Stack mt='6' spacing='3'>
        <Heading textAlign={'center'} size='md'>Living room Sofa</Heading>
        <HStack>
          <VStack width={"10%"}>
            <Icon boxSize={35} as={FaLongArrowAltUp}/>
            <Icon boxSize={35} as={FaLongArrowAltDown}/>
          </VStack>
          <Image
          width={"90%"}
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          />
        </HStack>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
      </Stack>
    </Box>
    <Divider />
    <Box>
      <HStack justifyContent={"space-evenly"}>
        <Text variant='solid' colorScheme='blue'>
          User Name
        </Text>
        <Text variant='ghost' colorScheme='blue'>
          Hour Posted
        </Text>
        <Button variant='ghost' colorScheme='blue'>
          Comment
        </Button>
      </HStack>
    </Box>
  </Box>
  )
}

export default Card