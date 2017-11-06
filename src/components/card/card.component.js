import template from "./card.html";
import navbarController from '../navbar/navbar.component';
import './card.scss';

export default {
  template,
  controller,
  bindToController: true,
  bindings: {
    title: '@',
    type: '@',
    description: '@',
    labelButton: '@',
    img: '@',
    action: '=',
    opcao: "@"
  }
};

function controller($state) {
  console.log('card iniciado');
  const $ctrl = this;

  $ctrl.click = function () {
    $ctrl.action($ctrl.type || $ctrl.opcao);
  }
}