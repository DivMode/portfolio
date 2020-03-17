import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Nav />
    <Hero />
    <Portfolio />
    <Contact />
    <Footer />
  </>
);

export default Home;
