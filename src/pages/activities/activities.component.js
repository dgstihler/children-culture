import template from "./activities.html";
import "./activities.scss";

export default {
  template,
  controller
};

function controller($stateParams, $timeout, $state) {
  const $ctrl = this;
  $ctrl.percent = 0;

  $ctrl.resetResult = function () {
    $ctrl.imgResult = require('../../images/ponto-de-interrogacao.jpg')
    $ctrl.descriptionResult = "Clique em uma das opções para responder!";
  }

  $ctrl.resetResult();

  $ctrl.verificaResposta = function (opcao) {
    if (opcao == "C") {
      $ctrl.imgResult = require('../../images/correct.png');
      $ctrl.descriptionResult = "Resposta correta!";
      $ctrl.plusPct();

      $timeout(function () {
        $ctrl.resetResult();
        $ctrl.populatinCards(++$ctrl.index);
      }, 1500)
    } else {
      $ctrl.imgResult = require('../../images/errado.png')
      $ctrl.descriptionResult = "Tente novamente!";
    }
  }

  $ctrl.brasil = [[{
    "title": "Aperto de Mão",
    "description": "Clique para responder!",
    "img": require("../../images/aperto-de-mao.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "C",
    "action": $ctrl.verificaResposta
  },
  {
    "title": "Revêrencia",
    "description": "Clique para responder!",
    "img": require("../../images/reverencia.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "E",
    "action": $ctrl.verificaResposta
  }],
  [{
    "title": "Hashis",
    "description": "Clique para responder!",
    "img": require("../../images/talher-japones.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "E",
    "action": $ctrl.verificaResposta
  },
  {
    "title": "Talher",
    "description": "Clique para responder!",
    "img": require("../../images/talher-brasil.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "C",
    "action": $ctrl.verificaResposta
  }]];

  $ctrl.japao = [[{
    "title": "Revêrencia",
    "description": "Clique para responder!",
    "img": require("../../images/reverencia.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "C",
    "action": $ctrl.verificaResposta
  },
  {
    "title": "Aperto de Mão",
    "description": "Clique para responder!",
    "img": require("../../images/aperto-de-mao.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "E",
    "action": $ctrl.verificaResposta
  }],
  [{
    "title": "Hashis",
    "description": "Clique para responder!",
    "img": require("../../images/talher-japones.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "C",
    "action": $ctrl.verificaResposta
  },
  {
    "title": "Talher",
    "description": "Clique para responder!",
    "img": require("../../images/talher-brasil.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "E",
    "action": $ctrl.verificaResposta
  }]];

  $ctrl.france = [[{
    "title": "Revêrencia",
    "description": "Clique para responder!",
    "img": require("../../images/reverencia.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "E",
    "action": $ctrl.verificaResposta
  },
  {
    "title": "Bonjour",
    "description": "Clique para responder!",
    "img": require("../../images/bonjour.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "C",
    "action": $ctrl.verificaResposta
  }],
  [{
    "title": "Hashis",
    "description": "Clique para responder!",
    "img": require("../../images/talher-japones.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "E",
    "action": $ctrl.verificaResposta
  },
  {
    "title": "Talher",
    "description": "Clique para responder!",
    "img": require("../../images/talher-brasil.jpg"),
    "labelButton": require("../../images/verified.png"),
    "opcao": "C",
    "action": $ctrl.verificaResposta
  }]];

  $ctrl.getPercent = function (pct) {
    return pct == 50 ? 'fifty-pct' : pct == 100 ? 'complete-pct' : 'null-pct';
  }

  $ctrl.plusPct = function () {
    if ($ctrl.percent != 100) $ctrl.percent += 50;
  }

  $ctrl.populatinCards = function (index) {
    $ctrl.index = index || 0;
    if ($stateParams.type == 'br') {
      $ctrl.cards = $ctrl.brasil[index || 0];
      if (!$ctrl.cards) {
        $stateParams.dones.br = true;
        $state.go('home', {
          "done": $stateParams.dones
        });
      }
    } else if ($stateParams.type == 'jp') {
      $ctrl.cards = $ctrl.japao[index || 0];
      if (!$ctrl.cards) {
        $stateParams.dones.jp = true;
        $state.go('home', {
          "done": $stateParams.dones
        });
      }
    } else if ($stateParams.type == 'france') {
      $ctrl.cards = $ctrl.france[index || 0];
      if (!$ctrl.cards) {
        $stateParams.dones.france = true;
        $state.go('home', {
          "done": $stateParams.dones
        });
      }
    }
  }
  $ctrl.populatinCards(0);
  console.log("iniciou o componente")
}
