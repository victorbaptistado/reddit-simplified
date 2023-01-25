import { Input, HStack } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <HStack justify={'space-around'} padding={'1.5rem'}>
      <p>Icon</p>
      <Input type={"search"} width={"20rem"}/>
    </HStack>
  )
}

export default Header