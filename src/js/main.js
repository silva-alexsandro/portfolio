import { githubAPI } from "./api/github.js";
import { handleMenu } from "./pages/header-hamburgue.js";

$(document).ready(function () {
  githubAPI();
  handleMenu();
});
