import { GridItem } from '@chakra-ui/react'
import React from 'react'
import PicGrid from '../components/PicGrid'
import WavePic from '../assets/OceanWave.gif'


const Home = () => {
  return (
    <GridItem area ='main' backgroundImage={WavePic}  backgroundSize='cover'> <h1 className="title"  >Welcome to the Gallery</h1><h2 className="subtitle">Here is a list of our featured items:</h2>
        <PicGrid/>
      <h4 className='bodytitle'>What is Digital Art?</h4>
      <h3 className="bodytext">An NFT is like a fancy digital certificate of ownership that says you own that picture of yourself on the unicycle. It's kind of like owning a rare Pokémon card or a limited edition action figure, except instead of something physical, it's just a digital file.
      But why would anyone want to buy an NFT? Well, it's all about owning something unique and special. You see, even though there may be other pictures of you riding a unicycle while juggling flaming pineapples out there, there's only one NFT that proves you're the rightful owner of that specific picture. And if someone really wants to own a piece of your digital legacy, they might be willing to pay big bucks for it.
      </h3>
      
       
      </GridItem>
  )
}

export default Home