import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({ slider, error }) => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {slider && slider.map((elem) => (
                <Carousel.Item key={elem.id}>
                    <img
                        className="d-block w-100"
                        src={elem.url}
                        alt={elem.title}
                    />
                    <Carousel.Caption>
                        <h3>{elem.title}</h3>
                        <p>ID: {elem.id}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider;