import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className=" max-w-7xl mx-auto shadow-xl shadow-slate-800">
      <Navbar />
      <div className=" mt-[-7vh]">
        <Home />
      </div>
    </div>
  );
}

export default App;
