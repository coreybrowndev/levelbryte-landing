import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurWork from './components/OurWork';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section>
          <OurWork />
        </section>
      </main>
    </div>
  );
}

export default App;
