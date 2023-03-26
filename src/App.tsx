import { Grid, GridItem } from "@chakra-ui/layout";
import NavBar from "./components/NavBar";
import logo from './assets/OceanWave.gif'
import PicGrid from "./components/PicGrid";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";






function App() {
  return ( 

    <Grid templateAreas={{
      base: '"nav" "main"'
    }}
  >
      <GridItem area ='nav'> <NavBar onHomeClick={function (): void {
        throw new Error("Function not implemented.");
      } } onGalleryClick={function (): void {
        throw new Error("Function not implemented.");
      } } onAboutClick={function (): void {
        throw new Error("Function not implemented.");
      } } /></GridItem>
      <GridItem area ='main' backgroundImage={logo}> <h1 >Welcome to the Gallery</h1><h2>Here is a list of our featured items:</h2>
        <PicGrid/>
       
      </GridItem>
  </Grid>

  );
  
}

export default App;
