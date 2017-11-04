import angular from "angular";
import "angular-ui-router";
import routes from "./routes";

import UserController from "./controllers/UserController";
// components
import navBarComponent from './components/navbar/navbar.component';
import footerComponent from './components/footer/footer.component';
import cardComponent from './components/card/card.component';

// pages
import homeComponent from './pages/home/home.component';

// scss
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

angular
  .module("app", ["ui.router",])
  
  //components
  .component('navbar', navBarComponent)
  .component('footer', footerComponent)
  .component('card', cardComponent)
  
  // pages
  .component('homePage', homeComponent)
  .controller("UserController", UserController)

  .config(routes)
  ;
