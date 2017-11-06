import template from "./home.html";
import "./home.scss";

export default {
  template,
  controller
};

function controller($state, $stateParams) {
  const $ctrl = this;
  $ctrl.dones = {};
  $ctrl.dones.br = $stateParams.done.br ? $stateParams.done.br : $ctrl.dones.br ? $ctrl.dones.br : false;
  $ctrl.dones.jp = $stateParams.done.jp ? $stateParams.done.jp : $ctrl.dones.jp ? $ctrl.dones.jp : false;
  $ctrl.dones.france = $stateParams.done.france ? $stateParams.done.france : $ctrl.dones.france ? $ctrl.dones.france : false;
  console.log("iniciou o componente")

  $ctrl.getStyle = function (state) {
    return state == 'br' ? 'navbar-br' : state == 'jp' ? 'navbar-japao' : state == 'france' ? 'navbar-france' : state == 'ing' ? 'navbar-ing' : 'navbar-br';
  }

  $ctrl.click = function (type) {
    angular.element(document.getElementById('nav')).removeClass('navbar-br');
    angular.element(document.getElementById('nav')).removeClass('navbar-japao');
    angular.element(document.getElementById('nav')).removeClass('navbar-france');
    angular.element(document.getElementById('nav')).removeClass('navbar-ing');

    angular.element(document.getElementById('foot')).removeClass('navbar-br');
    angular.element(document.getElementById('foot')).removeClass('navbar-japao');
    angular.element(document.getElementById('foot')).removeClass('navbar-france');
    angular.element(document.getElementById('foot')).removeClass('navbar-ing');

    angular.element(document.getElementById('nav')).addClass($ctrl.getStyle(type));
    angular.element(document.getElementById('foot')).addClass($ctrl.getStyle(type));

    $state.go('activities', {
      "type": type,
      "dones": $ctrl.dones
    });
  }

  $ctrl.cards = [{
    "title": "Brasil",
    "description": "Cultura",
    "img": require("../../images/brasil.png"),
    "type": "br",
    "labelButton": $ctrl.dones.br ? require("../../images/done.png") : require("../../images/play.png"),
    "action": $ctrl.click
  },
  {
    "title": "Japão",
    "description": "Cultura",
    "img": require("../../images/japao.png"),
    "type": "jp",
    "labelButton": $ctrl.dones.jp ? require("../../images/done.png") : require("../../images/play.png"),
    "action": $ctrl.click
  },
  {
    "title": "França",
    "description": "Cultura",
    "img": require("../../images/france.png"),
    "type": "france",
    "labelButton": $ctrl.dones.france ? require("../../images/done.png") : require("../../images/play.png"),
    "action": $ctrl.click
  }];
}