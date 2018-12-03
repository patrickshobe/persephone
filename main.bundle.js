/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// This file is in the entry point in your webpack config.
	__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _artemis_interface = __webpack_require__(2);

	var artemisInterface = _interopRequireWildcard(_artemis_interface);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	$(document).ready(function () {
	  artemisInterface.getEncodeNumbers();
	  artemisInterface.getEncodesByDay();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getEncodesByDay = exports.getEncodeNumbers = undefined;

	var _artemis_interface = __webpack_require__(2);

	var artemisInterface = _interopRequireWildcard(_artemis_interface);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var getEncodeNumbers = function getEncodeNumbers() {
	  fetch('http://localhost:3000/api/v1/encode_numbers').then(function (response) {
	    return response.json();
	  }).then(function (parsedResponse) {
	    $('#pending-encodes').text(parsedResponse.pending);
	    $('#completed-encodes').text(parsedResponse.encoded);
	    $('#percent-complete').text(parsedResponse.percent + '%');
	  });
	};

	var getEncodesByDay = function getEncodesByDay() {
	  fetch('http://localhost:3000/api/v1/encodes_by_day').then(function (response) {
	    return response.json();
	  }).then(function (parsedResponse) {
	    var ctx = document.getElementById("myChart").getContext('2d');
	    var chart = new Chart(ctx, {
	      type: 'line',
	      data: parsedResponse,
	      options: {
	        scales: {
	          xAxes: [{
	            type: 'time'
	          }]
	        }
	      }
	    });
	  });
	};
	exports.getEncodeNumbers = getEncodeNumbers;
	exports.getEncodesByDay = getEncodesByDay;

/***/ })
/******/ ]);