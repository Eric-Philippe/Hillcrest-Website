import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderComponentProps {
  settings?: {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    [key: string]: any; // Pour permettre des propriétés supplémentaires
  };
  images: string[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  settings = {},
  images,
}) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <Slider {...mergedSettings} className="carousel-container">
      {images.map((image, index) => (
        <div key={index} className="carousel-image-container">
          <img src={image} alt={`Slide ${index}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
