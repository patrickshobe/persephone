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

export { getEncodeNumbers };
