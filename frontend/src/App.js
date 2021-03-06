import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Navbar bg = "dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>Online Clothing Retailer</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
        </Container>
        </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
