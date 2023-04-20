import { Card, CardBody, Heading, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import Picture  from '../models/Picture'

interface Props{
assets: Picture
}

const NftCard = ({assets}: Props ) => {
  return (
    <a href = {assets.permalink}>
    <Card borderRadius={20} overflow='hidden' >
      <Image src={assets.image_url} />
      <CardBody>
        <Heading> {assets.name} </Heading>
        <CardFooter>
          
          
        </CardFooter>
        
      </CardBody>

    </Card>
    </a>
  )
}

export default NftCard