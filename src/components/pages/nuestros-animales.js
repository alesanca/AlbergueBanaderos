import React from 'react';

const NuestrosAnimales = () => {
    return (
        <div>
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
        animalList: []
      };
    }
  
    componentDidMount(type) {
      fetch("http://localhost:8080/api/animals" , {
          method: 'GET'
      })
        .then(res => res.json())
        .then( 
          (result) => {
            const res = result.filter(animal => animal.tipo == type);
            this.setState({
              isLoaded: true,
              animalList: res
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
      const { error, isLoaded, animalList } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="escaparate">
            {animalList.map(item => (
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
