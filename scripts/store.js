'use strict';
const Store = (function () {

  const splitArr = ((arr, chunkSize) => {
    var groups = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  });

  return {
    events: [],
    splitArr,
    eventsPage: false
  };

}());