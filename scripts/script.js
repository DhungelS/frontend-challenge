'use strict';
/*global Store, Api*/

const Mix = (function () {


  function render() {
    let viewEvents = Store.events;
    const eventListView = generateEventItems(viewEvents);

    const groupsList = Store.splitArr(eventListView, 4)

    $('.deck-one').html(groupsList[0]);
    $('.deck-two').html(groupsList[1]);
    $('.deck-three').html(groupsList[2]);

    const eventInfoView = generateEventLists(viewEvents)
    console.log(eventInfoView);
    $('.events-row-one').html(eventInfoView);
    // const groupsEvents = Store.splitArr(eventInfoView, 4)
    // console.log(groupsEvents);
    // $('.events-row-one').html(groupsEvents[0])


  }

  function generateEventList(item) {

    return (`
      <div class="col">
        <div class="card" style="width: 20rem;">
          <img class="card-img-top" src="${item.image}" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">${item.description}</h4>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">I'm Going!</a>
          </div>
        </div>
      </div>
  `);

  }

  function generateEventItem(item) {

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

  function handleEventsPageClicked() {
    $('.events-page').on('click', function (event) {
      Store.eventsPage = true;
    });
  }

  function generateEventItems(events) {
    return events.map(event => {
      return generateEventItem(event);
    });

  }

  function generateEventLists(events) {
    return events.map(event => {
      return generateEventList(event);
    });

  }

  function bindEventListeners() {
    handleEventsPageClicked();

  }

  return {
    render,
    bindEventListeners
  };

}());