import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import Together from "./components/projects/Together";
import Dust from "./components/projects/Dust";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/together" element={<Together />} />
          <Route path="/project/dust" element={<Dust />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
