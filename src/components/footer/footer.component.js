import template from "./footer.html";
import "./footer.scss";

function controller() {
  const $ctrl = this;
  this.year = new Date().getFullYear();
}


export default {
  template,
  controller,
  bindToController: true
};
