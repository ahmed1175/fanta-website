

import Banner from "./component/Banner";
import Blog from "./component/blog";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Products from "./component/products";
import TextBanner from "./component/TextBanner";

function App() {
  return (
    <main className=" overflow-x-hidden overflow-y-hidden">
      <Hero />
      <Products />
     <Banner />
     <TextBanner />
     <Blog />
     <Faq />
     <Footer />
    </main>
  );
}

export default App;
