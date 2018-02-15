'use strict';

$(document).ready(function () {
  Mix.bindEventListeners();
  Mix.render();
  Api.getItems()
    .then((response) => {
      Store.events = response;
      Mix.render();
    });
});



