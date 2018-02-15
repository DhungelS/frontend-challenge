'use strict';
/*global Store, Api*/

const Mix = (function () {


  function render() {
    let viewEvents = Store.events;
    const eventListView = generateEvents(viewEvents);

    const groupsList = Store.splitArr(eventListView, 4)

    $('.deck-one').html(groupsList[0]);
    $('.deck-two').html(groupsList[1]);
    $('.deck-three').html(groupsList[2]);

    const eventInfoView = generateEvents(viewEvents)
    $('.events-row-one').html(eventInfoView);
    // const groupsEvents = Store.splitArr(eventInfoView, 4)
    // console.log(groupsEvents);
    // $('.events-row-one').html(groupsEvents[0])


  }

  function generateEventList(item) {

    if (Store.eventsPage) {

      return (`
      <div class="col">
        <div class="card" style="width: 20rem;">
          <img class="card-img-top" src="${item.image}" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">I'm Going!</a>
          </div>
        </div>
      </div>
  `);
    }

    else {
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

  }

  function handleEventsPageClicked() {
    $('.events-page').on('click', function () {
      Store.eventsPage === true;
    });
  }

  function generateEvents(events) {
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