import React, { useState } from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n:3 })
  const number = searchParams.get("n")
  return (
    <>
      <div className="container">
        <NavLink to="/books/1">Book 1</NavLink>
        <br></br>
        <NavLink to="/books/2">Book 2</NavLink>
        <br />
        <NavLink to={`/books/${number}`}>Book {number}</NavLink>
        <br />
        <NavLink to="/books/new">New Book</NavLink>
        <Outlet context={{ hello: "world"}}/>
        <input type="number" value={number} onChange={e => setSearchParams( { n: e.target.value})} />
      </div>
    </>
  );
}
