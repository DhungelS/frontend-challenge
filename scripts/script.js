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
    $('.events').html(eventInfoView);

  }

  function generateEventList(item) {

    return (`
      <div class="col">
        <div class="card" style="width: 20rem;">
          <img class="card-img-top" src="${item.image}" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">${item.description}</h4>
            <p class="card-text">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tincidunt felis ultrices, varius nibh et, dapibus nulla.</p>
            <p>${item.location}, ${item.city}</p>
            <p>Duration: ${item.duration} hours</p>
            <b>Date: ${item.date}</b>
            <p><b>Time: ${item.time}</b></p>
            <div id="map"></div>
            </p>
            <a href="#" class="btn btn-primary">I'm Going!</a>
          </div>
        </div>
      </div>
  `);

  }

  function generateEventItem(item) {

    return (`
    <a href = "./events.html">
    <div class="card card-nav-tabs" style="width: 20rem;">
    <div class="card-header card-header-success">
     ${item.description}
    </div>
  </div>
  </a>
      `);
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


  }

  return {
    render,
    bindEventListeners
  };

}());