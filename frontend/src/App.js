import Blogs from "./Components/Page1/Blogs";
import Footer from "./Components/Page1/Footer";
import HeroSec from "./Components/Page1/HeroSec";
import Navbar from "./Components/Page1/Navbar";
import Plans from "./Components/Page1/Plans";
import Products from "./Components/Page1/Products";
import HomeState from "./contextApi/HomePage/HomeState";

function App() {
  return (
    <div>
      <HomeState>
        <Navbar />
        <HeroSec />
        <Plans />
        <Products />
        <Blogs />
        <Footer />
      </HomeState>
    </div>
  );
}

export default App;
