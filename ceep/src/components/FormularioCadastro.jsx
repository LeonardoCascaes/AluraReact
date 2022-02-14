import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva Sua Nota..."></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;