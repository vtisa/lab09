import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { codigo: 1, descripcion: 'coca-cola', precio: 2.5 },
        { codigo: 2, descripcion: 'inka-cola', precio: 2.2 },
        { codigo: 3, descripcion: 'fanta', precio: 1.7 }
      ]
    };
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-primary">Listado de Artículos</h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borrar?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td className="text-success font-weight-bold">s/. {elemento.precio.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.borrar(elemento.codigo)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  borrar(cod) {
    var temp = this.state.articulos.filter((el) => el.codigo !== cod);
    this.setState({ articulos: temp });
  }
}

export default App