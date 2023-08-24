import HeroSec from "./Components/Page1/HeroSec";
import Navbar from "./Components/Page1/Navbar";
import Plans from "./Components/Page1/Plans";
import HomeState from "./contextApi/HomePage/HomeState";

function App() {
  return (
    <div>
      <HomeState>
        <Navbar />
        <HeroSec />
        <Plans />
      </HomeState>
    </div>
  );
}

export default App;
