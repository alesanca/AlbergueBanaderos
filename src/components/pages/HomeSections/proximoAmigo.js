import React from "react";
import { Redirect } from "react-router";

const ProximoAmigo = () => {
  return (
    <div className="nextFriend">
      <h1> Tu próximo amigo está esperándote </h1>
      <Adopta />
    </div>
  );
};

class Adopta extends React.Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/nuestros-animales",
        search : "?type=Perro"
       }}/>;
    }
  };
  render() {
    return (
      <>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Adopta un perro</button>
        
      </>
    );
  }
}

export default ProximoAmigo;
