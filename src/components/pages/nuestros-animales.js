import React from 'react';

const NuestrosAnimales = () => {
    return (
        <div className="listSection">
            <AnimalList />
        </div>
    )
}

class AnimalList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        animals: []
      };
    }
  
    componentDidMount(type) {
      fetch("http://localhost:8080/api/animals")
        .then(res => res.json())
        .then( 
          (result) => {
              
              if(type){
                return this.setState({
                    isLoaded: true,
                    animals : result
                  })
              }

            const animals = result.filter(animal => animal.tipo == type);
            this.setState({
              isLoaded: true,
              animals
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


export default NuestrosAnimales;
