const Hero = () => {
  return (
    <>
      <main className="container">
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="buttons-hero">
            <button className="btn-shop">Shop Now</button>
            <button className="sec-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On :</p>
            <div className="brand-icon">
              <img src="./Images/flipkart.png" alt="Flipkart" />
              <img src="./Images/amazon.png" alt="Amazon" />
            </div>
          </div>
        </div>
        <div className="shoe-img">
          <img src="./Images/KD17+EP.png" alt="Shoe" />
        </div>
      </main>
    </>
  );
};

export default Hero;
