import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import OurSolution from './components/OurSolution';
import OurWork from './components/OurWork';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="flex flex-col items-center gap-14">
        <section id="hero" className="">
          <Hero />
        </section>
        <section className="w-full">
          <OurSolution />
        </section>
        <section>
          <OurWork />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
