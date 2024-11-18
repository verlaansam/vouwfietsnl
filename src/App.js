import './App.css';
import Nav from './components/Nav';
import Header from './components/Header'
import Section from './components/Section';
import BrandBlock from './components/BrandBlock';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <BrandBlock />
      <Section />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
