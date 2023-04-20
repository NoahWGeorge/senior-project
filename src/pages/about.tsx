import WavePic from '../assets/OceanWave.gif'
import "../App.css"
import DigiArt1 from '../assets/DigiArt1.png'
import DigiArt2 from '../assets/DigiArt2.png'
import { Flex, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

const about = () => {
  return (
    <GridItem area ='main' backgroundImage={WavePic}  backgroundSize='cover'> 
    <h1 className="abouttitle"  >What is so great about digital art?</h1>
    <Flex  direction={'column'}>
    <h3 className="bodytext">Why should the world care about digital art, you ask? Well, for starters, it's a great way to avoid getting paint all over your clothes. Plus, who wants to deal with the hassle of cleaning brushes and palettes when you can just click a few buttons and create a masterpiece?
    But in all seriousness, digital art is becoming increasingly important in our tech-driven world. As we spend more and more time online, we're consuming and creating digital content at an unprecedented rate. And let's face it, a lot of that content is pretty boring. But digital art has the power to captivate and inspire us in ways that traditional art can't always match.</h3>
    </Flex>
    <Flex direction={'column'} >
    <h1 className="abouttitle" >
     Why I care about digital art
    </h1>
    <h3 className='bodytext'>
      During my time as a CS major at Elizabethtown College I wasn't always just into code. Before coming to this college, I studied at Hagerstown Community College where 
      I was a Graphic Design major so with this project I felt as if I could integrate the two by creating a website that not only shows off my code skills and ability to learn 
      but also show examples of my artwork and my love for art. For example, here are some of my own digital art pieces:
      </h3>
      
    
    </Flex>
    <button className="digiart1">
            <Image src={DigiArt1} boxSize="500px" ></Image>{" "} 
            
          </button>
    <button className="digiart2">
             <Image src={DigiArt2} boxSize="500px" ></Image>{" "}
            
          </button>
    
    
  
  
   
  </GridItem>
   
  )
}

export default about