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
    this.title = "My card";
    this.id= "";
    this.class="";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h2{
        margin: 4px;
      }
      .control-wrapper{
      display:flex;
        
      }
      .wrapper{
        background-color: orange;
        margin:16px;
        padding:8px;
        
        text-align:center;
        
      }
      .fancy{
        background-color:red;
        margin:8px;
        padding:4px;
        text-align:right;
      }
      #card-title{
        color:blue;
        text-align:center;
        font-family:Sans-serif;
        
      }
      .card-image{
        height: 40vh;
        width: 200px;
        padding: 25px;
      }

      .card-text{
        color: blue;
        text-align:center;
        overflow:auto;
      }

      button:hover{
        background-color:red;
      }
      button{
        border:square;
        display:inline-flex;
        text-decoration:none;
        padding:4px;
        border-radius:8px;
        background-color:green; 
      }
      @media screen and (min-width:801px),(max-width:499px){
        button{
          display:none
        }
      }
      @media screen and (max-height:499px){
        html{
          max-width:500px;
          margin:auto;
          
        }
      }

    `;
  }
  paragraphTemplate(){

  }
  header1Template(){

  }
  header2Template(){

  }

  render() {
    return html`
    <button id=${this.id}>${this.title}</button>
    `;
  }

  static get properties() {
    return {
      id: {type: String },
      title: { type: String },
      button: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
