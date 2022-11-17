import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/home';
import Contact from './Pages/contact';
function App() {
  return (
    <>
      <Router>

    <Header/>
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>    <Footer/>
          </Router>
          </>
  );
}

export default App;
