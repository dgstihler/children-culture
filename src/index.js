import uiRouter from "@uirouter/angularjs";
import angular from "angular";
import routes from "./routes";

// components
import navBarComponent from './components/navbar/navbar.component';
import footerComponent from './components/footer/footer.component';
import cardComponent from './components/card/card.component';

// pages
import homeComponent from './pages/home/home.component';
import activitiesComponent from './pages/activities/activities.component';

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
  .component('homeComponent', homeComponent)
  .component('activitiesComponent', activitiesComponent)

  .config(routes)
  ;
