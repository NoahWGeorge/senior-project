import { Grid, GridItem } from "@chakra-ui/layout";
import NavBar from "./components/NavBar";
import WavePic from './assets/OceanWave.gif'
import PicGrid from "./components/PicGrid";
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import about from "./pages/about";
import gallery from "./pages/gallery";
import SignUpForm from "./pages/SignUpForm";
import { ShoppingCart } from "./pages/ShoppingCart";

function App() {
  return ( 

    <Grid templateAreas={{
      base: '"nav" "main" "footer"'
    }}
  >
      <GridItem area ='nav'> <NavBar onHomeClick={function (): void {
        //throw new Error("Function not implemented.");
      } } onGalleryClick={function (): void {
        //throw new Error("Function not implemented.");
      } } onAboutClick={function (): void {
        //throw new Error("Function not implemented.");
      } } /></GridItem>
      <Routes>
        <Route path="/" Component={Home}> </Route>
        <Route path="/about" Component={about}> </Route>
        <Route path="/gallery" Component={gallery}> </Route>
        <Route path="/SignUpForm" Component={SignUpForm}> </Route>
        <Route path="/ShoppingCart" Component={ShoppingCart}> </Route>

       

      </Routes>
      
      <GridItem pl='2' bg='dark grey' area={'footer'}>  <Footer/>
      </GridItem>
  </Grid>

  );
  
}

export default App;
