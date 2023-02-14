import { init } from "./utils/initDroneLayer.js";
import { useEffect } from "react";
import './index.css';
function App() {

  useEffect(() => {
    init()
  }, [])
  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">this loading-page from Deaa</h1>
        <p className="text"> there can make your dics or write what you want about project
          
        </p>
        <p>
          <button className="btn">English lang</button>
          <button className="btn">German lang</button>
        </p>
      </div>


      <div className="pricing">
        <h1 className="text">My Packages</h1>
      </div>

      <div className="cards">
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">write something</p>
            <p className="info">Basic</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>



        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">write something 2</p>
            <p className="info">Standard</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>



        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">write something 3</p>
            <p className="info">Premium</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
