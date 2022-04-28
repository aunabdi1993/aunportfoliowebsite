import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

console.log(process.env.REACT_APP_GMAIL_USERNAME);
console.log(process.env.REACT_APP_GMAIL_PASSWORD);

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Contact />
    </Layout>
  );
};


export default Home;