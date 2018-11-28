function buildRoute(routeType, routeId) => {
  var baseUrl = '/api/v1/'
  var routeLookup: { 'encodeNumbers': baseUrl + '/encode_numbers',
                     'countByDay':    baseUrl + '/count_by_day'}
  return routeLookup[routeType]
}

function execute_get(routeType, routeId) => {

}
