import React from "react";
import "../../assets/css/nuestrosAnimales.css";

const NuestrosAnimales = () => <AnimalList />;

class AnimalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
    };
  }

  componentDidMount() {
    let params = new URLSearchParams(window.location.search);
    let type = params.get("type");
    fetch("http://localhost:8080/api/animals")
      .then((res) => res.json())
      .then((result) => {
        let animals = result;

        if (type) animals = result.filter((animal) => animal.tipo === type);

        this.setState({
          animals,
        });
      });
  }

  render() {
    return (
      <div className="escaparate">
        {this.state.animals.map((a) => (
          <div key={a.id} className="individual">
            <img src={a.url} alt="foto del animal"></img>
            <h2>{a.nombre}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default NuestrosAnimales;
