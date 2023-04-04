import WavePic from '../assets/OceanWave.gif'
import "../App.css"
import { Flex, GridItem } from '@chakra-ui/react'
import React from 'react'

const about = () => {
  return (
    <GridItem area ='main' backgroundImage={WavePic}  backgroundSize='cover'> 
    <h1 className="abouttitle"  >What is so great about digital art?</h1>
    <Flex>
    <h3 className="bodytext">Why should the world care about digital art, you ask? Well, for starters, it's a great way to avoid getting paint all over your clothes. Plus, who wants to deal with the hassle of cleaning brushes and palettes when you can just click a few buttons and create a masterpiece?
    But in all seriousness, digital art is becoming increasingly important in our tech-driven world. As we spend more and more time online, we're consuming and creating digital content at an unprecedented rate. And let's face it, a lot of that content is pretty boring. But digital art has the power to captivate and inspire us in ways that traditional art can't always match.</h3>
    </Flex>
    <Flex>
    <h3 className="bodytext" >
     Why I care about digital art

    </h3>
    </Flex>
    
    
  
  
   
  </GridItem>
   
  )
}

export default about