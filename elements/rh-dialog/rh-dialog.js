import Rhelement from "../rhelement/rhelement.js";
import dialogPolyfill from "../../dialog-polyfill/dialog-polyfill.js";

/*
 * DO NOT EDIT. This will be autopopulated with the
 * html from cp-dialog.html and css from
 * cp-dialog.scss
 */
const template = document.createElement("template");
template.innerHTML = `
<style>dialog {
  position: absolute;
  left: 0;
  right: 0;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: -webkit-fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 1em;
  background: white;
  color: black;
  display: block; }

dialog:not([open]) {
  display: none; }

dialog + .backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1); }

._dialog_overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }

dialog.fixed {
  position: fixed;
  top: 50%;
  transform: translate(0, -50%); }</style>
<dialog>
    <slot></slot>
  </dialog>
`;
/* end DO NOT EDIT */

class RhDialog extends Rhelement {
  constructor() {
    super("rh-dialog", template);
  }

  connectedCallback() {
    super.connectedCallback();

    const dialog = this.shadowRoot.querySelector("dialog");
    dialogPolyfill.registerDialog(dialog);

    const openButton = document.querySelector(
      this.getAttribute("data-trigger")
    );

    const cancelButton = document.querySelector("#cancel");

    openButton.addEventListener("click", function() {
      dialog.showModal();
    });

    cancelButton.addEventListener("click", function() {
      dialog.close();
    });
  }

  disconnectedCallback() {}
}

window.customElements.define("rh-dialog", RhDialog);
