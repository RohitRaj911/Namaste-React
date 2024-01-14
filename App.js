/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */
 import React from "react";
 import ReactDOM from "react-dom/client";

 //React Element
const Title = (
  <h1 id="title" key="h2">Namaste React</h1>
);

//Functional Element
const FunctionalTitle = ()=>(
  <h1 id="title1" key="h1">Namaste React-Functional Type</h1>
);

//FuntionalComponenet
const HeaderComponent = () => {
  return (
    <div>
    {/*include react element inside functional Component*/}
      {Title}  
      {/*METHOD2: include functional compnent inside functional Component*/}
        <FunctionalTitle/>
      <h1>Namaste React Functional Component h1 Tag</h1>
      <h2>This is a H2 tag.</h2>
    </div>
  );
};

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing/render a react element inside the root
  //async defer
  //root.render(heading)

  //render a functional component 
  //root.render(<HeaderComponent/>)
  root.render(<HeaderComponent/>);