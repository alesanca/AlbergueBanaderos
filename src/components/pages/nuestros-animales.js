import React from "react";
import "../../assets/css/nuestrosAnimales.css";

export class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      filteredAnimals: [],
    };
  }

  handleApplyFilter(type) {
    this.setState({
      filteredAnimals: this.state.animals.filter(
        (animal) => animal.tipo === type
      ),
    });
  }

  componentDidMount() {
    let params = new URLSearchParams(window.location.search);
    let type = params.get("type");
    fetch("http://localhost:8080/api/animals")
      .then((res) => res.json())
      .then((result) => {
        let filteredAnimals = result;
        let animals = result;

        if (type)
          filteredAnimals = animals.filter((animal) => animal.tipo === type);

        this.setState({
          animals,
          filteredAnimals,
        });
      });
  }

  render() {
    return (
      <>
        <div className="menuForm">
          <h3>Filtrar por:</h3>
          <p>Tipo animal</p>
          <button onClick={() => this.handleApplyFilter("Perro")}>
            Adopta un perro
          </button>
          <button onClick={() => this.handleApplyFilter("Gato")}>
            Adopta un gato
          </button>
        </div>
        <div className="escaparate">
          {this.state.filteredAnimals.map((a) => (
            <div key={a.id} className="individual">
              <img src={a.url} alt="foto del animal"></img>
              <h2>{a.nombre}</h2>
            </div>
          ))}
        </div>
      </>
    );
  }
}

