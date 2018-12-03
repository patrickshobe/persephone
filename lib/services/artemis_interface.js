import * as artemisInterface from './artemis_interface.js';
import Chart from 'chart.js';


const getEncodeTable = () => {
  fetch('http://25.64.106.41:3200/api/v1/encode_records')
  .then(response => {
    return response.json();
  }).then(parsedResponse => {
    parsedResponse.forEach(function(record) {
     $('#record-table').append(
      `<tr>
        <td class='encode-row'> ${ record.title   } </td>
        <td class='encode-row centered-row'> ${ record.series  } </td>
        <td class='encode-row centered-row'> ${ record.season  } </td>
        <td class='encode-row centered-row'> ${ record.episode } </td>
       </tr>`
     );
    })
  })
};

const getEncodeNumbers = () => {
  fetch('http://25.64.106.41:3200/api/v1/encode_numbers')
  .then(response => {
    return response.json();
  }).then(parsedResponse => {
    $('#pending-encodes').text(parsedResponse.pending)
    $('#completed-encodes').text(parsedResponse.encoded)
    $('#percent-complete').text(`${parsedResponse.percent}%`)
  })
};

const getEncodesByDay= () => {
  fetch('http://25.64.106.41:3200/api/v1/encodes_by_day')
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
export { getEncodeNumbers, getEncodesByDay, getEncodeTable };
