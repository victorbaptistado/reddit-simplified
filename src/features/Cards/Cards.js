import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Card'

const Cards = (props) => {
  return (
    <Flex justifyContent={"space-evenly"} padding={"3rem"} flexWrap="wrap">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Flex>
  )
}

export default Cards