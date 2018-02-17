'use strict'

const Api = (function () {

  const BASE_URL = 'https://www.mocky.io/v2/5a8505c73000002a0069b0c0';

  const getItems = function () {
    return $.ajax({
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true,
      type: 'GET',
      url: BASE_URL,
    });
  };


  return {
    getItems
  };
}());