'use strict';
/*global Store, Api*/

const Mix = (function () {


  function render() {
    let viewEvents = Store.events;
    const currentView = generateEventLists(viewEvents);

    const groups = [];

    for (let i = 0; i < currentView.length; i += 4) {
      groups.push(currentView.slice(i, i + 4));
    }
    
    $('.deck-one').html(groups[0]);
    $('.deck-two').html(groups[1]);
    $('.deck-three').html(groups[2]);
  }

  function generateEventList(item) {
    return (`
    <a href = "#">
    <div class="card card-nav-tabs" style="width: 20rem;">
    <div class="card-header card-header-success">
     ${item.description}
    </div>
  </div>
  </a>
        `);
  }

  function generateEventLists(events) {
    return events.map(event => {
      return generateEventList(event);
    });

  }

  function bindEventListeners() {


  }

  return {
    render,
    bindEventListeners
  };

}());