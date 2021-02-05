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
  setRedirect = (type) => {
    this.setState({
      redirect: true,
      type: type
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/nuestros-animales",
        search : "?type=" + this.state.type,
       }}/>;
    }
  };
  render() {
    return (
      <>
        {this.renderRedirect()}
        <button onClick={() => this.setRedirect("Perro")}>Adopta un perro</button>
        <button onClick={() => this.setRedirect("Gato")}>Adopta un gato</button>
      </>
    );
  }
}

export default ProximoAmigo;
