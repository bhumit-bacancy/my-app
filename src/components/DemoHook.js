import React, { useEffect, useState } from "react";

export default function DemoHook() {
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([])
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.org/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourceType])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)

    return () => { 
      window.removeEventListener('resize', handleWindowWidth) //this return function will code run first for clean up, for more refer below you tube video
    }//https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2
  }, [])
  return (
    // <>
    //   <div className="container">
    //     <button className="my-2" onClick={() => setResourceType("posts")}>Posts</button>
    //     <button className="my-2" onClick={() => setResourceType("users")}>Users</button>
    //     <button className="my-2" onClick={() => setResourceType("comments")}>Comments</button>
    //     <br />
    //     {resourceType}

    //     {items.map(item => {
    //       return <pre>{JSON.stringify(item)}</pre>
    //     })}
    //   </div>
    // </>

    <div className="container">
      {windowWidth}
    </div>
  );
}
