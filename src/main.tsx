import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme ={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <BrowserRouter><App /></BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

