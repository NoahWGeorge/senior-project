import { GridItem, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React from 'react'
import PicGrid from '../components/PicGrid'
import WavePic from '../assets/OceanWave.gif'

const gallery = () => {
  return (
    <GridItem area ='main' backgroundImage={WavePic}  backgroundSize='cover'> 
    <h1 className="title"  >The Gallery is a great place to explore...</h1>
    <Stack spacing={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='white'
          fontSize='1.2em'
          children={<SearchIcon color='gray.300' />}
        />
    <Input placeholder='search for a NFT' />
    
  </InputGroup>
</Stack>
    <PicGrid/>
  
  
   
  </GridItem>
)
  }


export default gallery