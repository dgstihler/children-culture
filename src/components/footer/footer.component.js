"use strict";
import template from "./footer.html";
import './footer.scss';

class FooterController {

  constructor() {
    "ngInject";
    this.year = new Date().getFullYear();
  }
}

export default {
  template: template,
  controller: FooterController
};