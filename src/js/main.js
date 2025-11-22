import { downloadcv } from "./download-cv.js";
import { loadRepos, setupViewToggle } from "./handlegithubAPI.js";
import { initTabs } from "./tabs.js";

$(document).ready(function () {
  initTabs();
  loadRepos();
  setupViewToggle();
  $("#download-btn-cv").on("click",downloadcv);
});
