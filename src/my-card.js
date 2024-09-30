import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "";
    this.image= null;
    this.link='#';
    this.buttonTitle="";
    this.text="";
    this.fancy=false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]) {
        display:block;
        background-color:pink;
        border:2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      img{
        height:150px;
        width:150px;
      
      }
      a{
        text-decoration:none;
        border-radius:5px;
      }  
      
      button{
        display:inline-block;
        color:white;
        background-color:blue;
        border-radius:6px;
        padding:4px;
        margin:4px;
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      {
        color:blue;
        font-size:16px;
      }
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        color:blue;
      }

    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  
  render() {
    return html`
    <div>
      <h3>${this.title}</h3>
      <img src="${this.image}"><br>
      <a href="${this.link}"><button>${this.buttonTitle}</button></a>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}" >
      <summary>Description</summary>
        <div>
          <slot name="my-text">${this.text}</slot>
        </div>
      </details>
    </div>
    <slot></slot>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      buttonTitle: { type: String },
      text: { type: String },
      fancy: { type: Boolean, reflect: true}
      
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
