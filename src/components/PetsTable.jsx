import React from 'react';
import { Table } from 'react-bootstrap';
import pets from '../datasets/pets';
import './PetsTable.css';

const PetsTable = () => (
  <div className="pets-table-container">
    <h2>Pets Disponíveis para Adoção</h2>
    <p className="description">Encontre seu novo amigo entre os pets disponíveis para adoção abaixo.</p>
    <Table striped bordered hover responsive className="pets-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Descrição</th>
          <th>Imagem</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.nome}</td>
            <td>{pet.idade}</td>
            <td>{pet.raca}</td>
            <td>{pet.descricao}</td>
            <td><img src={pet.imagem} alt={pet.nome} width="50" className="pet-image" /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default PetsTable;
