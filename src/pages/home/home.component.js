"use strict";
import template from "./home.html";
import './home.scss';

class HomeController {

  constructor() {
    "ngInject";
    this.cards = [{
      'title': 'Brasil',
      'description': 'Cultura',
      'img': require('../../images/brasil.png'),
      'labelButton': 'Ver'
    }]
  }
}

export default {
  template: template,
  controller: HomeController
};