import { Grid, GridItem } from "@chakra-ui/layout";
import React from "react";



function App() {
  return ( 
    <Grid templateAreas={{
      base: '"nav" "main"'
    }}>
      <GridItem area ='nav' bg='blue'>nav</GridItem>
      <GridItem area ='main' bg='grey'>main</GridItem>
  </Grid>

  );
  
}

export default App;
