import template from "./card.html";
import './card.scss';

class CardController {

  constructor() {
    "ngInject";
    // this.image = require('../../images/brasil-emblema-da-bandeira-by-Vexels.svg')
  }
}

export default {
  template: template,
  controller: CardController,
  bindings: {
    title: '@',
    description: '@',
    labelButton: '@',
    img: '&'
  }
};