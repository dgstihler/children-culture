"use strict";
import template from "./card.html";
import './card.scss';

class CardController {

  constructor() {
    "ngInject";

  }
}

export default {
  template: template,
  controller: CardController,
  bindings: {
    title: '@',
    description: '@',
    labelButton: '@',
    img: '@'
  }
};