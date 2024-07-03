import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-[1160px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
