import * as artemisInterface from './artemis_interface.js';
import Chart from 'chart.js';


const getEncodeNumbers = () => {
  fetch('http://localhost:3000/api/v1/encode_numbers')
  .then(response => {
    return response.json();
  }).then(parsedResponse => {
    $('#pending-encodes').text(parsedResponse.pending)
    $('#completed-encodes').text(parsedResponse.encoded)
    $('#percent-complete').text(`${parsedResponse.percent}%`)
  })
};

const getEncodesByDay= () => {
  fetch('http://localhost:3000/api/v1/encodes_by_day')
  .then(response => {
    return response.json();
  }).then(parsedResponse => {
    var data = [
  {
    x: Object.keys(parsedResponse),
    y: Object.values(parsedResponse),
    type: 'scatter',
    fill: 'tozeroy',
    color: '#00B8FF',
    fillcolor: 'rgba(0, 184, 255, 0.3)'
  }
];
 var layout = {
    paper_bgcolor:'rgba(0,0,0,0)',
    plot_bgcolor:'rgba(0,0,0,0)',

   xaxis: {
    showgrid: false
   },
   yaxis: {
    showgrid: false
   }
 }
Plotly.newPlot('myChart', data, layout, {displayModeBar: false});
  })
};
export { getEncodeNumbers, getEncodesByDay };
