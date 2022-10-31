import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel
      style={{
        height: "70vh",
        width: "80%",
        overflow: "hidden",
        margin: "20px auto",
      }}
    >
      <Carousel.Item interval={1500}>
        <img
          style={{ height: "70vh" }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sports for fun</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          style={{ height: "70vh", overflow: "hidden" }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Establish your goal</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          style={{ height: "70vh", overflow: "hidden" }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/416747/pexels-photo-416747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Healthy and Fit Lifestyle</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
