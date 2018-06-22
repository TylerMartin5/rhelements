import Rhelement from "../rhelement/rhelement.js";

/*
 * DO NOT EDIT. This will be autopopulated with the
 * html from rdc-band-layout.html and css from
 * rdc-band-layout.scss
 */
const template = document.createElement("template");
template.innerHTML = `
<style>:host {
  display: block; }</style>
<slot></slot>
`;
/* end DO NOT EDIT */

class RdcBandLayout extends Rhelement {
  constructor() {
    super("rdc-band-layout", template);
  }
}

window.customElements.define("rdc-band-layout", RdcBandLayout);
