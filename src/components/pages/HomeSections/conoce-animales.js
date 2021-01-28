import React from 'react'
import '../../../assets/css/home.css';

const ConoceAnimales = () => {
    return (
        <div className="conoceAnimales">
            <h2> Conoce alguno de nuestros animales </h2>
            <p>
            En el Albergue Insular de Animales de Gran Canaria queremos dar la misma oportunidad a todos los animales, por ello te mostramos aquí algunos de forma aleatoria, sin distinción. ¡Porque todos ellos se merecen una oportunidad!
            </p>
           <MyComponent />
            <button className="MC_btn"> Ver todos los animales </button>
        </div>
    )
}

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        animals: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/api/animals" , {
          method: 'GET'
      })
        .then(res => res.json())
        .then( 
          (result) => {
            result.slice(0 , 4);
            this.setState({
              isLoaded: true,
              animals: result
            }
            
            );
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, animals } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="escaparate">
            {animals.map(item => (
              <div key={item.id} className="individual">
                <img src={item.url} alt="foto del animal"></img>
                <h2>{item.nombre}</h2>
              </div>
            ))}
          </div>
        );
      }
    }
  }

export default ConoceAnimales;