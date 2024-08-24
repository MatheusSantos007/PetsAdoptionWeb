import React from 'react';
import { Carousel } from 'react-bootstrap';
import dependencies from '../datasets/dependencies';
import './Carousel.css';

const ImageCarousel = () => (
  <Carousel className="image-carousel">
    {dependencies.map((dep) => (
      <Carousel.Item key={dep.id}>
        <img className="d-block w-100" src={dep.imagem} alt={dep.titulo} />
        <Carousel.Caption>
          <h3>{dep.titulo}</h3>
          <p>{dep.descricao}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default ImageCarousel;
