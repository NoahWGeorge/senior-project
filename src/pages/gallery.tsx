import { GridItem, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import PicGrid from '../components/PicGrid'
import WavePic from '../assets/OceanWave.gif'


const gallery = () => {
  const [search, setSearch] = useState<string>('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      setSearch(event.currentTarget.value)
    }
  }

  return (
    <GridItem area ='main' backgroundImage={WavePic}  backgroundSize='cover'> 
    <h1 className="title"  >The Gallery is a great place to explore...</h1>
    <h2 className="searchAssets">Here are some recommended searches: </h2>
    <ul className='NFTlist'>
      <li>world-of-men-collection-1</li>
      <li>b-apetaverse-45</li>
      <li>cryptopunks</li>
      <li>beatenapes</li>
      <li>multicybers</li>
      </ul>
    <Stack spacing={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='white'
          fontSize='1.2em'
          children={<SearchIcon color='gray.300' />}
        />
    <Input onKeyDown={handleKeyDown} placeholder='search for a NFT' />

    
  </InputGroup>
</Stack>
    <PicGrid search = {search}/>
  
  
   
  </GridItem>
)
  }


export default gallery