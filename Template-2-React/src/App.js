import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/header.component";
import Landing from "./components/Landing/landing.component";
import Services from "./components/Services/services.component";
import Design from "./components/design/design.component";
import Portofolio from "./components/portofolio/portofolio.component";
import Video from "./components/video/video.component";
import About from "./components/about/about.component";
import Stats from "./components/stats/stats.conponent";
import Skills from "./components/skills/skills.component";
import Quote from "./components/quote/quote.component";
import Pricing from "./components/pricing/pricing.conponent";
import Subscribe from "./components/subscribe/subscribe.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
const App = () => (
  <div className="app">
    <Header />
    <Landing />
    <Services />
    <Design />
    <Portofolio />
    <Video />
    <About />
    <Stats />
    <Skills />
    <Quote />
    <Pricing />
    <Subscribe />
    <Contact />
    <Footer />
  </div>
);

export default App;
