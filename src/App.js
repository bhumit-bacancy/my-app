import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Home from "./components/Home";
import { Routes, Route, Outlet } from 'react-router-dom';
import BookList from "./components/BookList";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import BookLayout from "./components/BookLayout";
import BookRoute from "./BookRoute";
import NotFound from "./components/NotFound";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar title="MyApp" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/*" element={<BookRoute />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
