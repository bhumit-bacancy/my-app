import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, [])
  return (
    <>
      <div className="container">
        <h1>NotFound</h1>
      </div>
    </>
  );
}
