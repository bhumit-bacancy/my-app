import React, { useState } from "react";
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
import DemoHook from "./components/DemoHook";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionComponent />
      </ThemeProvider>
    </>
  )
}

export default App;
