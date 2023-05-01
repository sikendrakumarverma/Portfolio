// import logo from './logo.svg';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Project from './components/Projects/Project';
import Contact from './components/Contacts/Contact';

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <About/>
      <Services/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
