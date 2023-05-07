import Header from './components/Header/Header';
import About from './components/About/About';
import Works from './components/Works/Works';
import Project from './components/Projects/Project';
import Contact from './components/Contacts/Contact';
import GoToTopBtn from './components/GoToTop/Scroll';

import './App.css';

function App() {
  return (
    <div >
    <GoToTopBtn/>
      <Header />
      <About/>
      <Works/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
