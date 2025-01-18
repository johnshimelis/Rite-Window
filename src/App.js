// import logo from './logo.svg';
import Header from './components/header';
import Hero from './components/hero';
import FeaturedExample from './components/featuredExample';
import Offerings from './components/offerings';
import SetUsApart from './components/setUsApart';
import Steps from './components/steps';
import FreeQuoteSection from './components/freeQuote';
import OurLocation from './components/ourLocation';
import Delighting from './components/delighting';
import OurPartners from './components/ourPartners';
import Footer from './components/footer';
import Location from './components/location';
import Copyright from './components/copyright';
import OurTeam from './components/ourTeam';
import Customers from './components/customers';

function App() {
  return (
    <div className="App ">
      <Header />
      <Hero />
      <FeaturedExample />
      <Offerings/>
      <SetUsApart/>
      <Steps/>
      <FreeQuoteSection/>
      <OurLocation/>
      <Customers/>
      <Delighting/>
      <OurPartners/>
      <OurTeam/>
      <Footer/>
      <Location/>
      <Copyright/>
    </div>
  );
}

export default App;
