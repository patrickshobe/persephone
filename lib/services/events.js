import * as artemisInterface from './artemis_interface.js';

const clear = () => {
  $("#pending-record-table .pending-row").remove();
}


const getData = () => {
  artemisInterface.getEncodeNumbers()
  artemisInterface.getEncodesByDay()
  artemisInterface.getEncodeTable()
  artemisInterface.getPendingEncodes()
}
$(document).ready(() => {
  getData()
  setTimeout(function(){
    clear()
    getData()
  },60000)

});



