import React, { useEffect, useState } from 'react'
import getData from '../services/api-client';
import { SimpleGrid } from '@chakra-ui/react'
import Picture from '../models/Picture';
import NftCard from './NftCard';


const PicGrid = () => {
    const [Assets, setAssets] = useState<Picture[]>([]);
    const [error, setError] = useState('');

    useEffect(() =>{
        async function getAssets(){
            const data = await getData()
            if (data != null)
                setAssets(data.assets)
        } 
        
       getAssets()

    }, [])
  return (
    <SimpleGrid columns={4} spacing={10} padding={10}>
        {Assets.map((asset) => ( <NftCard key={asset.name} assets={asset} />
        ))}
    </SimpleGrid>
  )
}

export default PicGrid