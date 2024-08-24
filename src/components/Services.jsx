import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import servicos from '../datasets/services';
import './Services.css';

const Services = () => (
  <CardGroup className="services-card-group">
    {servicos.map((service) => (
      <Card key={service.id} className="service-card">
        <Card.Img variant="top" src={service.imagem} />
        <Card.Body>
          <Card.Title>{service.titulo}</Card.Title>
          <Card.Text>{service.descricao}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </CardGroup>
);

export default Services;
