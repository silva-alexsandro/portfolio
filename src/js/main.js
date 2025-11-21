import { loadRepos, setupViewToggle } from "./handlegithubAPI.js";
import { initTabs } from "./tabs.js";

$(document).ready(function () {
  initTabs();
   loadRepos();
  setupViewToggle();
});
