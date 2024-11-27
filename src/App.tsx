import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import OurSolution from './components/OurSolution';
import OurWork from './components/OurWork';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="app-wrapper">
      <div>
        <SpeedInsights />
      </div>
      <Header />
      <section id="hero" className="">
        <Hero />
      </section>
      <main className="flex flex-col items-center gap-16">
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
