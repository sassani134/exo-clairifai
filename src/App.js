import React, { Component, useState, useEffect } from "react";
import Clarifai from "clarifai";
import './App.css';

import ImageSearchForm from "./Components/ImageSearchForm/ImageSearchForm";
import ImageDetect from "./Components/ImageDetect/ImageDetect";

const app = new Clarifai.App({
  // apiKey:{process.env.CLARIFAI_KEY} ,
  apiKey:'55a3ae99555c40a391ad37c30a29a856',

});


function App() {

  // Add the State for input and grab image
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

   const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onSubmit = () => {
    setImageUrl(input);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
  }



  return (
    <div className="App">
      <ImageSearchForm />
      <ImageDetect />
    </div>
  );
}

export default App;
