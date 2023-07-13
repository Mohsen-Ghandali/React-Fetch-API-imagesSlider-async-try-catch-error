import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider"

const App = () => {
  let [slider, setSlider] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("trigger");
    const fetchSlider = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/photos");
        let res = await data.json();
        setSlider(res);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSlider();

    return ()=>{
      console.log("clean up");
      setSlider(null);
    }
  }, [setSlider]);
  
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12">

          { error ? (
             <h4 className="col-12 bg-danger py-3 text-center fw-bold">{error}</h4>
            ) : (

          <Slider slider={slider} />

            )}
        </div>
      </div>
    </div>
  );
}

export default App;

