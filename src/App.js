
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Institution from './pages/Institution';
import NewsandEvents from './pages/NewsandEvents';
import Contact from './pages/Contact';
import Footer from './components/Header/Footer/Footer';
import CardDetail from './components/institution/CardDetail';

function App() {
  return (


    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/institution' element={<Institution/>}/>
      <Route path='/newsandevents' element={<NewsandEvents/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/card/:slug' element={<CardDetail/>} />
    </Routes>
    <Footer/>
    </>
  )

   


}

export default App;
