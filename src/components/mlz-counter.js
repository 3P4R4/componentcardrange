import { LitElement, html, css } from "lit";

export class mlzCounter extends LitElement {
  constructor() {
    super();
    this.counter = "0";
    this.valor = "0";
  }

  static properties = {
    counter: {
      type: Number,
      reflect: true,
      cuenta: "cuenta",
    },
    valor: {
      type: Number
    }
  };

  increment() {
    /*  let cantidad = this.shadowRoot.querySelector("input").value;  */ // Evitar replicar codigo
    this.counter += parseInt(this.cantidad);
  }

  decrement() {
    this.counter -= parseInt(this.cantidad);
  }

  reset() {
    this.counter = 0;
  }

  cambioValor(e) {
    this.valor = e.target.value;
    console.log(this.valor);
  }

  /* re-utilizando codigo */
  get cantidad() {
    /* Fijase que utilizo -- querySelector("input") -- donde -input- es por que solo hay un input en el componente */
    return this.shadowRoot.querySelector("input#input").value;
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        border: 1px solid #000;
        margin-left: 20px;
        text-align: center;
      }
      h2 {
        color: #8f8f8f;
      }
      #input {
        width: 80%;
        text-align: center;
        border-radius: 5px;
        font-size: 22px;
      }
      div#contenedorInput {
        margin: 10px 0;
      }
      div#contenedorBtn {
        margin: 25px 0;
      }
      button {
        width: 100px;
        height: 30px;
        font-size: 20px;
      }
      input[type="range"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height: 0.4rem;
        width: 80%;
        border-radius: 0.7rem;
        background-image: linear-gradient(45deg, #d1b8e5, #8dd8cc);
        box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);
      }
      input[type="range"]::-moz-range-thumb {
        -moz-appearance: none;
        appearance: none;
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);
        border: none;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 0.35rem;
        width: 0.35rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);
        border: none;
      }
      input[type="range"]::-webkit-slider-runnable-track,
      input[type="range"]::-moz-range-track {
        -webkit-appearance: none;
      }
    `,
  ];

  render() {
    return html`
      <slot></slot>
      <h2>${this.counter}</h2>
      <div id="contenedorInput">
        <input id="input" type="number" value=${this.valor} />
      </div>
      <div class="wrapper">
        <input 
        type="range" 
        value="1" 
        min=1
        max=100
        @change = ${this.cambioValor}
        />
      </div>
      <div id="contenedorBtn">
        <button @click=${this.increment}>+1</button>
        <button @click=${this.decrement}>-1</button>
      </div>
      <div id="resetBtn">
        <button id="reset" @click=${this.reset}>Reset</button>
      </div>
    `;
  }
}
customElements.define("mlz-counter", mlzCounter);
