'use strict'

const Api = (function () {

  const BASE_URL ='http://www.mocky.io/v2/5a8505c73000002a0069b0c0';

  const getItems = function(){
    return $.ajax({
      type: 'GET',
      url: BASE_URL,
      dataType: 'json'
    });
  };

  return{
    getItems
  };
}());