import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import Main from "./components/main/Main";
import "./App.css"

function App() {

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Main />
        <Rightbar />
      </div>
    </>
  );
}

export default App;
