'use strict'

const Api = (function () {

  const BASE_URL ='http://www.mocky.io/v2/5a84b573300000610069b054'

  const getItems = function(){
    return $.ajax({
      type: 'GET',
      url: BASE_URL,
      dataType: 'json'
    });
  };

  return{
    getItems
  }
}());