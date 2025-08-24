import Navbar from './nav/page';
import Firstpage from './firstpage';
import Portfolio from './portfolio/page';
import About from './about/page';
import Contact from './contact/page';
import Journal from './journal/page';
import Services from './services/page';
import Skills from './skills/page';
import Testimonial from './testimonial/page';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section id='home'><Firstpage /></section>
      <section id='portfolio'><Portfolio /></section>
      <section id='about'><About /></section>
      <section id='services'><Services /></section>
      <section id='skills'><Skills /></section>
      <section id='testimonial'><Testimonial /></section>
      <section id='journal'><Journal /></section>
      <section id='contact'><Contact /></section>
    </div>
  );
}
