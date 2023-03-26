import { Card, CardBody, Heading, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import Picture  from '../models/Picture'

interface Props{
assets: Picture
}

const NftCard = ({assets}: Props ) => {
  return (
    <Card borderRadius={20} overflow='hidden' >
      <Image src={assets.image_url} />
      <CardBody>
        <Heading> {assets.name} </Heading>
        <CardFooter>
          {assets.description}
          
        </CardFooter>
        
      </CardBody>

    </Card>
  )
}

export default NftCard