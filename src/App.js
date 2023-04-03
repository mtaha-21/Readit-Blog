import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NavigationBar from "./components/NavigationBar";
import BlogList from "./components/BlogList";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <BlogList />
    </>
  );
}

export default App;
