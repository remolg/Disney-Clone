import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Header } from './components/Header';
import './App.css'
import { Home } from './components/Home';
import { Detail } from './components/Detail';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
