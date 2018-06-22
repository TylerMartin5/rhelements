import Rhelement from "../rhelement/rhelement.js";

/*
 * DO NOT EDIT. This will be autopopulated with the
 * html from rdc-sass.html and css from
 * rdc-sass.scss
 */
const template = document.createElement("template");
template.innerHTML = `
<style>:host {
  display: block; }</style>
<slot></slot>
`;
/* end DO NOT EDIT */

class RdcSass extends Rhelement {
  constructor() {
    super("rdc-sass", template);
  }
}

window.customElements.define("rdc-sass", RdcSass);
