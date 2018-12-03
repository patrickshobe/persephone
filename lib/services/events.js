import * as artemisInterface from './artemis_interface.js';

$(document).ready(() => {
  artemisInterface.getEncodeNumbers()
  artemisInterface.getEncodesByDay()
  artemisInterface.getEncodeTable()
  setTimeout(function(){
  artemisInterface.getEncodeNumbers()
  artemisInterface.getEncodesByDay()
  artemisInterface.getEncodeTable()
  },60000)

});
