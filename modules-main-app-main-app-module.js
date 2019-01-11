(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-app-main-app-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    // console.log('score', score, finalScore)

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // console.log('FINAL SCORE', finalScore)

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        this._log('\n\nOutput:\n\n', JSON.stringify(results));
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),

/***/ "./node_modules/ng2-charts/charts/charts.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-charts/charts/charts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var chart_js_1 = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new chart_js_1.Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "datasets", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "labels", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaseChartDirective.prototype, "chartType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "colors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaseChartDirective.prototype, "legend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseChartDirective.prototype, "chartClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseChartDirective.prototype, "chartHover", void 0);
BaseChartDirective = __decorate([
    core_1.Directive({ selector: 'canvas[baseChart]', exportAs: 'base-chart' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BaseChartDirective);
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    core_1.NgModule({
        declarations: [
            BaseChartDirective
        ],
        exports: [
            BaseChartDirective
        ],
        imports: []
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ "./node_modules/ng2-charts/index.js":
/*!******************************************!*\
  !*** ./node_modules/ng2-charts/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./charts/charts */ "./node_modules/ng2-charts/charts/charts.js"));


/***/ }),

/***/ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js ***!
  \***********************************************************/
/*! exports provided: FileSaverService, FileSaverDirective, FileSaverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverService", function() { return FileSaverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverDirective", function() { return FileSaverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverModule", function() { return FileSaverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var FileSaverService = /** @class */ (function () {
    function FileSaverService() {
    }
    FileSaverService.prototype.genType = function (fileName) {
        if (!fileName || fileName.lastIndexOf('.') === -1)
            return 'text/plain';
        var type = fileName.substr(fileName.lastIndexOf('.') + 1);
        switch (type) {
            case 'txt':
                return 'text/plain';
            case 'xml':
            case 'html':
                return "text/" + type;
            case 'json':
                return 'octet/stream';
            default:
                return "application/" + type;
        }
    };
    FileSaverService.prototype.save = function (blob, fileName, filtType) {
        if (!blob) {
            throw new Error('必须指定Blod');
        }
        Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(new Blob([blob], { type: filtType || blob.type || this.genType(fileName) }), decodeURI(fileName || 'download'));
    };
    FileSaverService.prototype.saveText = function (txt, fileName) {
        var blob = new Blob([txt]);
        this.save(blob, fileName);
    };
    FileSaverService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    FileSaverService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function FileSaverService_Factory() { return new FileSaverService(); }, token: FileSaverService, providedIn: "root" });
    return FileSaverService;
}());

var FileSaverDirective = /** @class */ (function () {
    function FileSaverDirective(el, _FileSaverService, _httpClient) {
        this.el = el;
        this._FileSaverService = _FileSaverService;
        this._httpClient = _httpClient;
        this.method = 'GET';
        /** 成功回调 */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** 错误回调 */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileSaverDirective.prototype.getName = function (res) {
        return decodeURI(this.fileName ||
            res.headers.get('filename') ||
            res.headers.get('x-filename'));
    };
    FileSaverDirective.prototype.onclick = function () {
        var _this = this;
        var _http = this.http;
        if (!_http) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), _data = this.query || {};
            // tslint:disable-next-line:forin
            for (var item in _data) {
                params.set(item, _data[item]);
            }
            _http = this._httpClient.request(this.method, this.url, {
                observe: 'response',
                responseType: 'blob',
                headers: this.header,
                params: params
            });
        }
        this.el.nativeElement.disabled = true;
        _http.subscribe(function (res) {
            if (res.status !== 200 || res.body.size <= 0) {
                _this.error.emit(res);
                return;
            }
            _this._FileSaverService.save(res.body, _this.getName(res));
            _this.success.emit(res);
        }, function (err) {
            _this.error.emit(err);
        }, function () {
            _this.el.nativeElement.disabled = false;
        });
    };
    FileSaverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[fileSaver]' },] }
    ];
    /** @nocollapse */
    FileSaverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: FileSaverService },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FileSaverDirective.propDecorators = {
        method: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        http: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return FileSaverDirective;
}());

var FileSaverModule = /** @class */ (function () {
    function FileSaverModule() {
    }
    FileSaverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                    declarations: [FileSaverDirective],
                    exports: [FileSaverDirective],
                },] }
    ];
    return FileSaverModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGVzYXZlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWZpbGVzYXZlci9zcmMvZmlsZXNhdmVyLnNlcnZpY2UudHMiLCJuZzovL25neC1maWxlc2F2ZXIvc3JjL2ZpbGVzYXZlci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1maWxlc2F2ZXIvc3JjL2ZpbGVzYXZlci5tb2R1bGUudHMiLCJuZzovL25neC1maWxlc2F2ZXIvbmd4LWZpbGVzYXZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEZpbGVTYXZlclNlcnZpY2Uge1xyXG4gIGdlblR5cGUoZmlsZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFmaWxlTmFtZSB8fCBmaWxlTmFtZS5sYXN0SW5kZXhPZignLicpID09PSAtMSkgcmV0dXJuICd0ZXh0L3BsYWluJztcclxuICAgIGNvbnN0IHR5cGUgPSBmaWxlTmFtZS5zdWJzdHIoZmlsZU5hbWUubGFzdEluZGV4T2YoJy4nKSArIDEpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3R4dCc6XHJcbiAgICAgICAgcmV0dXJuICd0ZXh0L3BsYWluJztcclxuICAgICAgY2FzZSAneG1sJzpcclxuICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgcmV0dXJuIGB0ZXh0LyR7dHlwZX1gO1xyXG4gICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICByZXR1cm4gJ29jdGV0L3N0cmVhbSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGBhcHBsaWNhdGlvbi8ke3R5cGV9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmUoYmxvYjogQmxvYiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZpbHRUeXBlPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfDpcK/woXDqcKhwrvDpsKMwofDpcKuwppCbG9kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFzKG5ldyBCbG9iKFtibG9iXSwgeyB0eXBlOiBmaWx0VHlwZSB8fCBibG9iLnR5cGUgfHwgdGhpcy5nZW5UeXBlKGZpbGVOYW1lKSB9KSwgZGVjb2RlVVJJKGZpbGVOYW1lIHx8ICdkb3dubG9hZCcpKTtcclxuICB9XHJcblxyXG4gIHNhdmVUZXh0KHR4dDogc3RyaW5nLCBmaWxlTmFtZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt0eHRdKTtcclxuICAgIHRoaXMuc2F2ZShibG9iLCBmaWxlTmFtZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRmlsZVNhdmVyU2VydmljZSB9IGZyb20gJy4vZmlsZXNhdmVyLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpbGVTYXZlcl0nIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2F2ZXJEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG1ldGhvZCA9ICdHRVQnO1xyXG4gIEBJbnB1dCgpIGh0dHA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcclxuICBASW5wdXQoKSBxdWVyeTogYW55O1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogYW55O1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgLyoqIMOmwojCkMOlworCn8OlwpvCnsOowrDCgyAqL1xyXG4gIEBPdXRwdXQoKSBzdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8qKiDDqcKUwpnDqMKvwq/DpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KCkgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX0ZpbGVTYXZlclNlcnZpY2U6IEZpbGVTYXZlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBnZXROYW1lKHJlczogSHR0cFJlc3BvbnNlPEJsb2I+KSB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJKFxyXG4gICAgICB0aGlzLmZpbGVOYW1lIHx8XHJcbiAgICAgIHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fFxyXG4gICAgICByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbmNsaWNrKCkge1xyXG4gICAgbGV0IF9odHRwID0gdGhpcy5odHRwO1xyXG4gICAgaWYgKCFfaHR0cCkge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLFxyXG4gICAgICAgIF9kYXRhID0gdGhpcy5xdWVyeSB8fCB7fTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBpbiBfZGF0YSkge1xyXG4gICAgICAgIHBhcmFtcy5zZXQoaXRlbSwgX2RhdGFbaXRlbV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfaHR0cCA9IHRoaXMuX2h0dHBDbGllbnQucmVxdWVzdCh0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyLFxyXG4gICAgICAgIHBhcmFtc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgX2h0dHAuc3Vic2NyaWJlKFxyXG4gICAgICByZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkuc2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yLmVtaXQocmVzKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fRmlsZVNhdmVyU2VydmljZS5zYXZlKHJlcy5ib2R5LCB0aGlzLmdldE5hbWUocmVzKSk7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzLmVtaXQocmVzKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEZpbGVTYXZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZmlsZXNhdmVyLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtGaWxlU2F2ZXJEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtGaWxlU2F2ZXJEaXJlY3RpdmVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVNhdmVyTW9kdWxlIHt9XHJcbiIsIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBR0E7S0E4QkM7SUE1QkMsa0NBQU8sR0FBUCxVQUFRLFFBQWlCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLFlBQVksQ0FBQztRQUN2RSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsUUFBUSxJQUFJO1lBQ1YsS0FBSyxLQUFLO2dCQUNSLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxNQUFNO2dCQUNULE9BQU8sVUFBUSxJQUFNLENBQUM7WUFDeEIsS0FBSyxNQUFNO2dCQUNULE9BQU8sY0FBYyxDQUFDO1lBQ3hCO2dCQUNFLE9BQU8saUJBQWUsSUFBTSxDQUFDO1NBQ2hDO0tBQ0Y7SUFFRCwrQkFBSSxHQUFKLFVBQUssSUFBVSxFQUFFLFFBQWlCLEVBQUUsUUFBaUI7UUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7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

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/distinctUntilChanged.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/distinctUntilChanged.js ***!
  \**************************************************************************/
/*! exports provided: distinctUntilChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"]; });


//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/filter.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/filter.js ***!
  \************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"]; });


//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/pluck.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/pluck.js ***!
  \***********************************************************/
/*! exports provided: pluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"]; });


//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/takeUntil.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/takeUntil.js ***!
  \***************************************************************/
/*! exports provided: takeUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"]; });


//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/tap.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/tap.js ***!
  \*********************************************************/
/*! exports provided: tap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"]; });


//# sourceMappingURL=tap.js.map

/***/ }),

/***/ "./src/app/@pages/components/slider/slider-handle.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/components/slider/slider-handle.component.ts ***!
  \*********************************************************************/
/*! exports provided: pgSliderHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSliderHandleComponent", function() { return pgSliderHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.component */ "./src/app/@pages/components/slider/slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgSliderHandleComponent = /** @class */ (function () {
    function pgSliderHandleComponent(_slider) {
        this._slider = _slider;
        this.style = {};
        this._showToolTip = false;
    }
    Object.defineProperty(pgSliderHandleComponent.prototype, "Active", {
        set: function (value) {
            this._showToolTip = value;
        },
        enumerable: true,
        configurable: true
    });
    pgSliderHandleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.Offset) {
            this._updateStyle();
        }
        if (changes.Value) {
            this._updateTooltipTitle(); // [For tooltip]
        }
    };
    pgSliderHandleComponent.prototype._updateTooltipTitle = function () {
        this.tooltipTitle = this.TipFormatter ? this.TipFormatter(this.Value) : "" + this.Value;
    };
    pgSliderHandleComponent.prototype._updateStyle = function () {
        this.style[this.Vertical ? 'bottom' : 'left'] = this.Offset + "%";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderHandleComponent.prototype, "ClassName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderHandleComponent.prototype, "Vertical", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderHandleComponent.prototype, "Offset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderHandleComponent.prototype, "Value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgSliderHandleComponent.prototype, "TipFormatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderHandleComponent.prototype, "Active", null);
    pgSliderHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-slider-handle',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div [class]=\"ClassName\" [ngStyle]=\"style\">\n      <div class=\"tooltip fade top\" [class.show]=\"_showToolTip\" style=\"top: -33px;left: -7px;\">\n        <div class=\"tooltip-inner\">\n          <span>{{tooltipTitle}}</span>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_slider_component__WEBPACK_IMPORTED_MODULE_1__["pgSliderComponent"]])
    ], pgSliderHandleComponent);
    return pgSliderHandleComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/slider/slider-marks.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/slider/slider-marks.component.ts ***!
  \********************************************************************/
/*! exports provided: pgSliderMarksComponent, Marks, MarksArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSliderMarksComponent", function() { return pgSliderMarksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marks", function() { return Marks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksArray", function() { return MarksArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgSliderMarksComponent = /** @class */ (function () {
    function pgSliderMarksComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.LowerBound = null;
        this.UpperBound = null;
    }
    Object.defineProperty(pgSliderMarksComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderMarksComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSliderMarksComponent.prototype.ngOnChanges = function (changes) {
        if (changes.MarksArray) {
            this.buildAttrs();
        }
        if (changes.MarksArray || changes.LowerBound || changes.UpperBound) {
            this.togglePointActive();
        }
    };
    pgSliderMarksComponent.prototype.trackById = function (index, attr) {
        return attr.id;
    };
    pgSliderMarksComponent.prototype.buildAttrs = function () {
        var _this = this;
        var range = this.Max - this.Min;
        this.attrs = this.MarksArray.map(function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            // calc styles
            var label = config;
            var style;
            if (_this.Vertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: (value - _this.Min) / range * 100 + "%"
                };
            }
            else {
                var marksCount = _this.MarksArray.length;
                var unit = 100 / (marksCount - 1);
                var markWidth = unit * 0.9;
                style = {
                    width: markWidth + "%",
                    marginLeft: -markWidth / 2 + "%",
                    left: (value - _this.Min) / range * 100 + "%"
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = __assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value: value,
                offset: offset,
                classes: (_a = {},
                    _a[_this.ClassName + "-text"] = true,
                    _a),
                style: style,
                label: label
            };
        }); // END - map
    };
    pgSliderMarksComponent.prototype.togglePointActive = function () {
        var _this = this;
        if (this.attrs && this.LowerBound !== null && this.UpperBound !== null) {
            this.attrs.forEach(function (attr) {
                var value = attr.value;
                var isActive = (!_this.Included && value === _this.UpperBound) ||
                    (_this.Included && value <= _this.UpperBound && value >= _this.LowerBound);
                attr.classes[_this.ClassName + "-text-active"] = isActive;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "LowerBound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "UpperBound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", MarksArray)
    ], pgSliderMarksComponent.prototype, "MarksArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderMarksComponent.prototype, "ClassName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "Min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "Max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderMarksComponent.prototype, "Vertical", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderMarksComponent.prototype, "Included", null);
    pgSliderMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-slider-marks',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div [class]=\"ClassName\">\n      <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\" [innerHTML]=\"attr.label\"></span>\n    </div>\n  "
        })
    ], pgSliderMarksComponent);
    return pgSliderMarksComponent;
}());

var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());

// TODO: extends Array could cause unexpected behavior when targeting es5 or below
var MarksArray = /** @class */ (function (_super) {
    __extends(MarksArray, _super);
    function MarksArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarksArray;
}(Array));



/***/ }),

/***/ "./src/app/@pages/components/slider/slider-step.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@pages/components/slider/slider-step.component.ts ***!
  \*******************************************************************/
/*! exports provided: pgSliderStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSliderStepComponent", function() { return pgSliderStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _slider_marks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-marks.component */ "./src/app/@pages/components/slider/slider-marks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgSliderStepComponent = /** @class */ (function () {
    function pgSliderStepComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.LowerBound = null;
        this.UpperBound = null;
    }
    Object.defineProperty(pgSliderStepComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderStepComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSliderStepComponent.prototype.ngOnChanges = function (changes) {
        if (changes.MarksArray) {
            this.buildAttrs();
        }
        if (changes.MarksArray || changes.LowerBound || changes.UpperBound) {
            this.togglePointActive();
        }
    };
    pgSliderStepComponent.prototype.trackById = function (index, attr) {
        return attr.id;
    };
    pgSliderStepComponent.prototype.buildAttrs = function () {
        var orient = this.Vertical ? 'bottom' : 'left';
        var prefixCls = this.PrefixCls;
        this.attrs = this.MarksArray.map(function (mark) {
            var _a, _b;
            var value = mark.value, offset = mark.offset;
            return {
                id: value,
                value: value,
                offset: offset,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a),
                classes: (_b = {},
                    _b[prefixCls + "-dot"] = true,
                    _b[prefixCls + "-dot-active"] = false,
                    _b)
            };
        });
    };
    pgSliderStepComponent.prototype.togglePointActive = function () {
        var _this = this;
        if (this.attrs && this.LowerBound !== null && this.UpperBound !== null) {
            this.attrs.forEach(function (attr) {
                var value = attr.value;
                var isActive = (!_this.Included && value === _this.UpperBound) ||
                    (_this.Included && value <= _this.UpperBound && value >= _this.LowerBound);
                attr.classes[_this.PrefixCls + "-dot-active"] = isActive;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderStepComponent.prototype, "LowerBound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderStepComponent.prototype, "UpperBound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _slider_marks_component__WEBPACK_IMPORTED_MODULE_2__["MarksArray"])
    ], pgSliderStepComponent.prototype, "MarksArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderStepComponent.prototype, "PrefixCls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderStepComponent.prototype, "Vertical", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderStepComponent.prototype, "Included", null);
    pgSliderStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-slider-step',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"{{PrefixCls}}-step\">\n      <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\n    </div>\n  "
        })
    ], pgSliderStepComponent);
    return pgSliderStepComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/slider/slider-track.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/slider/slider-track.component.ts ***!
  \********************************************************************/
/*! exports provided: pgSliderTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSliderTrackComponent", function() { return pgSliderTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgSliderTrackComponent = /** @class */ (function () {
    function pgSliderTrackComponent() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    Object.defineProperty(pgSliderTrackComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderTrackComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSliderTrackComponent.prototype.ngOnChanges = function (changes) {
        if (changes.Included) {
            this.style.visibility = this.Included ? 'visible' : 'hidden';
        }
        if (changes.Vertical || changes.Offset || changes.Length) {
            if (this.Vertical) {
                this.style.bottom = this.Offset + "%";
                this.style.height = this.Length + "%";
            }
            else {
                this.style.left = this.Offset + "%";
                this.style.width = this.Length + "%";
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderTrackComponent.prototype, "Offset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderTrackComponent.prototype, "Length", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderTrackComponent.prototype, "ClassName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderTrackComponent.prototype, "Vertical", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderTrackComponent.prototype, "Included", null);
    pgSliderTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-slider-track',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div [class]=\"ClassName\" [ngStyle]=\"style\"></div>\n  "
        })
    ], pgSliderTrackComponent);
    return pgSliderTrackComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/slider/slider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/slider/slider.component.ts ***!
  \**************************************************************/
/*! exports provided: SliderHandle, pgSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderHandle", function() { return SliderHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSliderComponent", function() { return pgSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm5/observable/merge.js");
/* harmony import */ var rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var rxjs_operators_pluck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators/pluck */ "./node_modules/rxjs-compat/_esm5/operators/pluck.js");
/* harmony import */ var rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators/takeUntil */ "./node_modules/rxjs-compat/_esm5/operators/takeUntil.js");
/* harmony import */ var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators/tap */ "./node_modules/rxjs-compat/_esm5/operators/tap.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _slider_marks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider-marks.component */ "./src/app/@pages/components/slider/slider-marks.component.ts");
/* harmony import */ var _slider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider.service */ "./src/app/@pages/components/slider/slider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
* Author : NG-ZORRO - ANT UI
* Github : https://github.com/NG-ZORRO/ng-zorro-antd
* Copyright Reserved : MIT LICENSE
* Modified : Ace Revox
*/













var SliderHandle = /** @class */ (function () {
    function SliderHandle() {
    }
    return SliderHandle;
}());

var pgSliderComponent = /** @class */ (function () {
    // |--------------------------------------------------------------------------------------------
    // | Lifecycle hooks
    // |--------------------------------------------------------------------------------------------
    function pgSliderComponent(utils) {
        this.utils = utils;
        this._color = "";
        // Debugging
        this.DebugId = null; // set this id will print debug informations to console
        // Static configurations (properties that can only specify once)
        this.Step = 1;
        this.Marks = null;
        this.Min = 0;
        this.Max = 100;
        this.DefaultValue = null;
        this.Tooltip = false;
        this.OnAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Inside properties
        this._disabled = false;
        this._dots = false;
        this._included = true;
        this._range = false;
        this._vertical = false;
        this.value = null; // CORE value state
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.prefixCls = 'pg-slider';
        this.activeValueIndex = null; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.bounds = { lower: null, upper: null }; // now for pg-slider-step
        this.isDragging = false; // Current dragging state
    }
    pgSliderComponent_1 = pgSliderComponent;
    Object.defineProperty(pgSliderComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        // Dynamic property settings
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(_util_convert__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "TooltipForceVisiblity", {
        set: function (value) {
            //this._showHandleTooltip(this.Range ? this.activeValueIndex : 0);
            this._toolTipForce = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Range", {
        get: function () {
            return this._range;
        },
        set: function (value) {
            this._range = Object(_util_convert__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Dots", {
        get: function () {
            return this._dots;
        },
        set: function (value) {
            this._dots = Object(_util_convert__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(_util_convert__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    // |--------------------------------------------------------------------------------------------
    // | value accessors & ngModel accessors
    // |--------------------------------------------------------------------------------------------
    pgSliderComponent.prototype.setValue = function (val, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log("[ngModel:setValue/writeValue]Update track & handles");
            this.updateTrackAndHandles();
            // if (!this.isValueEqual(this.value, val)) {
            //   this.log(`[ngModel:setValue/writeValue]onValueChange`, val);
            //   if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
            //     this.onValueChange(this.value);
            //   }
            // }
        }
        else { // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            if (!this.isValueEqual(this.value, val)) {
                this.value = val;
                this.log("[Normal:setValue]Update track & handles");
                this.updateTrackAndHandles();
                this.log("[Normal:setValue]onValueChange", val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    };
    pgSliderComponent.prototype.getValue = function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.Range) { // clone & sort range values
            return this.utils.cloneArray(this.value).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    // clone & sort current value and convert them to offsets, then return the new one
    pgSliderComponent.prototype.getValueToOffset = function (value) {
        var _this = this;
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.Range ?
            normalizedValue.map(function (val) { return _this.valueToOffset(val); }) :
            this.valueToOffset(normalizedValue);
    };
    pgSliderComponent.prototype.writeValue = function (val) {
        if (typeof this.onValueChange !== 'function') {
            return;
        } // ignore the first initial call
        this.log("[ngModel/writeValue]current writing value = ", val);
        this.setValue(val, true);
    };
    pgSliderComponent.prototype.registerOnChange = function (fn) {
        this.onValueChange = fn;
    };
    pgSliderComponent.prototype.registerOnTouched = function (fn) { };
    pgSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    };
    // initialize event binding, class init, etc. (called only once)
    pgSliderComponent.prototype.ngOnInit = function () {
        // initial checking
        this.checkValidValue(this.DefaultValue); // check DefaultValue
        // default handles
        this.handles = this._generateHandles(this.Range ? 2 : 1);
        // initialize
        this.sliderDOM = this.slider.nativeElement;
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        } // init with default value
        this.marksArray = this.Marks === null ? null : this.toMarksArray(this.Marks);
        // event bindings
        this.createDrag();
        // initialize drag's disabled status
        this.toggleDragDisabled(this.Disabled);
        // the first time to init classes
        this.setClassMap();
        if (this._toolTipForce) {
            this._showHandleTooltip(this.Range ? this.activeValueIndex : 0);
        }
    };
    pgSliderComponent.prototype.ngOnChanges = function (changes) {
        var Disabled = changes.Disabled, Marks = changes.Marks;
        if (Disabled && !Disabled.firstChange) {
            this.toggleDragDisabled(Disabled.currentValue);
            this.setClassMap();
        }
        else if (Marks && !Marks.firstChange) {
            this.marksArray = this.Marks ? this.toMarksArray(this.Marks) : null;
        }
    };
    pgSliderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeDrag();
    };
    // |--------------------------------------------------------------------------------------------
    // | Basic flow functions
    // |--------------------------------------------------------------------------------------------
    pgSliderComponent.prototype.setClassMap = function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this._color] = true,
            _a[this.prefixCls + "-disabled"] = this.Disabled,
            _a[this.prefixCls + "-vertical"] = this.Vertical,
            _a[this.prefixCls + "-with-marks"] = this.marksArray ? this.marksArray.length : 0,
            _a);
    };
    // find the cloest value to be activated (only for range = true)
    pgSliderComponent.prototype.setActiveValueIndex = function (pointerValue) {
        if (this.Range) {
            var minimal_1 = null;
            var gap_1;
            var activeIndex_1;
            // TODO: using type guard, remove type cast
            this.getValue().forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    pgSliderComponent.prototype.setActiveValue = function (pointerValue) {
        if (this.Range) {
            // TODO: using type guard, remove type cast
            var newValue = this.utils.cloneArray(this.value);
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    pgSliderComponent.prototype.updateTrackAndHandles = function () {
        var _this = this;
        var value = this.getValue();
        var offset = this.getValueToOffset(value);
        var valueSorted = this.getValue(true);
        var offsetSorted = this.getValueToOffset(valueSorted);
        var boundParts = this.Range ? valueSorted : [0, valueSorted];
        var trackParts = this.Range ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = _this.Range ? offset[index] : offset;
            handle.value = _this.Range ? value[index] : value;
        });
        this.bounds.lower = boundParts[0], this.bounds.upper = boundParts[1];
        this.track.offset = trackParts[0], this.track.length = trackParts[1];
    };
    pgSliderComponent.prototype.toMarksArray = function (marks) {
        var marksArray = [];
        for (var key in marks) {
            var mark = marks[key];
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.Min || val > this.Max) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    };
    // |--------------------------------------------------------------------------------------------
    // | Event listeners & bindings
    // |--------------------------------------------------------------------------------------------
    pgSliderComponent.prototype.onDragStart = function (value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        if (this.Tooltip) {
            this._showHandleTooltip(this.Range ? this.activeValueIndex : 0);
        }
    };
    pgSliderComponent.prototype.onDragMove = function (value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    };
    pgSliderComponent.prototype.onDragEnd = function () {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.OnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    };
    pgSliderComponent.prototype.createDrag = function () {
        var _this = this;
        var sliderDOM = this.sliderDOM;
        var orientField = this.Vertical ? 'pageY' : 'pageX';
        // TODO: using named interface
        var mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        var touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return !_this.utils.isNotTouchEvent(e); }
        };
        // make observables
        [mouse, touch].forEach(function (source) {
            // TODO: remove any
            // TODO: filterFunc doesn't match filter in touch, should be checked
            /* tslint:disable-next-line:no-any */
            var _a = source, start = _a.start, move = _a.move, end = _a.end, pluckKey = _a.pluckKey, _b = _a.filterFunc, filterFunc = _b === void 0 ? (function () { return true; }) : _b;
            // start
            source.startPlucked$ = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(sliderDOM, start).pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFunc), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__["tap"])(_this.utils.pauseEvent), rxjs_operators_pluck__WEBPACK_IMPORTED_MODULE_7__["pluck"].apply(void 0, pluckKey), Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function (position) { return _this.findClosestValue(position); }));
            // end
            source.end$ = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, end);
            // resolve move
            source.moveResolved$ = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, move).pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFunc), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__["tap"])(_this.utils.pauseEvent), rxjs_operators_pluck__WEBPACK_IMPORTED_MODULE_7__["pluck"].apply(void 0, pluckKey), Object(rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function (position) { return _this.findClosestValue(position); }), Object(rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__["merge"])(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__["merge"])(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__["merge"])(mouse.end$, touch.end$);
    };
    pgSliderComponent.prototype.subscribeDrag = function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[subscribeDrag]this.dragstart$ = ', this.dragstart$);
        if (periods.indexOf('start') !== -1 && this.dragstart$ && !this.dragstart_) {
            this.dragstart_ = this.dragstart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragmove$ && !this.dragmove_) {
            this.dragmove_ = this.dragmove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragend$ && !this.dragend_) {
            this.dragend_ = this.dragend$.subscribe(this.onDragEnd.bind(this));
        }
    };
    pgSliderComponent.prototype.unsubscribeDrag = function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[unsubscribeDrag]this.dragstart_ = ', this.dragstart_);
        if (periods.indexOf('start') !== -1 && this.dragstart_) {
            this.dragstart_.unsubscribe();
            this.dragstart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragmove_) {
            this.dragmove_.unsubscribe();
            this.dragmove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragend_) {
            this.dragend_.unsubscribe();
            this.dragend_ = null;
        }
    };
    pgSliderComponent.prototype.toggleDragMoving = function (movable) {
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    pgSliderComponent.prototype.toggleDragDisabled = function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    // |--------------------------------------------------------------------------------------------
    // | Util functions (tools)
    // |--------------------------------------------------------------------------------------------
    // find the closest value depend on pointer's position
    pgSliderComponent.prototype.findClosestValue = function (position) {
        var sliderStart = this.getSliderStartPosition();
        var sliderLength = this.getSliderLength();
        var ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        var val = (this.Max - this.Min) * (this.Vertical ? 1 - ratio : ratio) + this.Min;
        var points = (this.Marks === null ? [] : Object.keys(this.Marks).map(parseFloat));
        // push closest step
        if (this.Step !== null && !this.Dots) {
            var closestOne = Math.round(val / this.Step) * this.Step;
            points.push(closestOne);
        }
        // calculate gaps
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        var closest = points[gaps.indexOf(Math.min.apply(Math, gaps))];
        // return the fixed
        return this.Step === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.Step)));
    };
    pgSliderComponent.prototype.valueToOffset = function (value) {
        return this.utils.valueToOffset(this.Min, this.Max, value);
    };
    pgSliderComponent.prototype.getSliderStartPosition = function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        var offset = this.utils.getElementOffset(this.sliderDOM);
        return this.Vertical ? offset.top : offset.left;
    };
    pgSliderComponent.prototype.getSliderLength = function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        var sliderDOM = this.sliderDOM;
        return this.Vertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    // cache DOM layout/reflow operations for performance (may not necessary?)
    pgSliderComponent.prototype.cacheSliderProperty = function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    pgSliderComponent.prototype.formatValue = function (value) {
        var _this = this;
        var res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            res = this.DefaultValue === null ?
                (this.Range ? [this.Min, this.Max] : this.Min) : this.DefaultValue;
        }
        else { // format
            // TODO: using type guard, remove type cast
            res = this.Range ?
                value.map(function (val) { return _this.utils.correctNumLimit(val, _this.Min, _this.Max); }) :
                this.utils.correctNumLimit(value, this.Min, this.Max);
        }
        return res;
    };
    // check if value is valid and throw error if value-type/range not match
    pgSliderComponent.prototype.checkValidValue = function (value) {
        var range = this.Range;
        if (value === null || value === undefined) {
            return false;
        } // it's an invalid value, just return
        var isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            var parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            throw new Error("The \"Range\" can't match the \"Value\"'s type, please check these properties: \"Range\", \"Value\", \"DefaultValue\".");
        }
        return true;
    };
    pgSliderComponent.prototype.isValueEqual = function (value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            var len = value.length;
            for (var i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    };
    // print debug info
    // TODO: should not kept in component
    /* tslint:disable-next-line:no-any */
    pgSliderComponent.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.DebugId !== null) {
            var args = ["[pg-slider][#" + this.DebugId + "] "].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    };
    // Show one handle's tooltip and hide others'
    pgSliderComponent.prototype._showHandleTooltip = function (handleIndex) {
        var _this = this;
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            _this.handles[index].active = index === handleIndex;
        });
    };
    pgSliderComponent.prototype._hideAllHandleTooltip = function () {
        if (!this._showHandleTooltip)
            this.handles.forEach(function (handle) { return handle.active = false; });
    };
    pgSliderComponent.prototype._generateHandles = function (amount) {
        var handles = [];
        for (var i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    };
    var pgSliderComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "DebugId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "Step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _slider_marks_component__WEBPACK_IMPORTED_MODULE_11__["Marks"])
    ], pgSliderComponent.prototype, "Marks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "Min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "Max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "DefaultValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], pgSliderComponent.prototype, "Tooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgSliderComponent.prototype, "TipFormatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "OnAfterChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Vertical", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "TooltipForceVisiblity", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Range", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Dots", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Included", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSliderComponent.prototype, "Color", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgSliderComponent.prototype, "slider", void 0);
    pgSliderComponent = pgSliderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-slider',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return pgSliderComponent_1; }),
                    multi: true
                }],
            template: "\n    <div #slider [ngClass]=\"classMap\" >\n      <div class=\"pg-slider-rail\"></div>\n      <pg-slider-track\n        ClassName=\"{{prefixCls}}-track\"\n        [Vertical]=\"Vertical\"\n        [Included]=\"Included\"\n        [Offset]=\"track.offset\"\n        [Length]=\"track.length\"\n      ></pg-slider-track>\n      <pg-slider-step *ngIf=\"marksArray\"\n        PrefixCls=\"{{prefixCls}}\"\n        [Vertical]=\"Vertical\"\n        [LowerBound]=\"bounds.lower\"\n        [UpperBound]=\"bounds.upper\"\n        [MarksArray]=\"marksArray\"\n        [Included]=\"Included\"\n      ></pg-slider-step>\n      <pg-slider-handle\n        *ngFor=\"let handle of handles;\"\n        ClassName=\"{{prefixCls}}-handle\"\n        [Vertical]=\"Vertical\"\n        [Offset]=\"handle.offset\"\n        [Value]=\"handle.value\"\n        [Active]=\"handle.active\"\n        [TipFormatter]=\"TipFormatter\"\n      ></pg-slider-handle>\n      <pg-slider-marks *ngIf=\"marksArray\"\n        ClassName=\"{{prefixCls}}-mark\"\n        [Vertical]=\"Vertical\"\n        [Min]=\"Min\"\n        [Max]=\"Max\"\n        [LowerBound]=\"bounds.lower\"\n        [UpperBound]=\"bounds.upper\"\n        [MarksArray]=\"marksArray\"\n        [Included]=\"Included\"\n      ></pg-slider-marks>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./slider.scss */ "./src/app/@pages/components/slider/slider.scss")]
        }),
        __metadata("design:paramtypes", [_slider_service__WEBPACK_IMPORTED_MODULE_12__["SliderService"]])
    ], pgSliderComponent);
    return pgSliderComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/slider/slider.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/@pages/components/slider/slider.module.ts ***!
  \***********************************************************/
/*! exports provided: pgSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSliderModule", function() { return pgSliderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _slider_handle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-handle.component */ "./src/app/@pages/components/slider/slider-handle.component.ts");
/* harmony import */ var _slider_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-marks.component */ "./src/app/@pages/components/slider/slider-marks.component.ts");
/* harmony import */ var _slider_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider-step.component */ "./src/app/@pages/components/slider/slider-step.component.ts");
/* harmony import */ var _slider_track_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-track.component */ "./src/app/@pages/components/slider/slider-track.component.ts");
/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider.component */ "./src/app/@pages/components/slider/slider.component.ts");
/* harmony import */ var _slider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider.service */ "./src/app/@pages/components/slider/slider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
* Author : NG-ZORRO - ANT UI
* Github : https://github.com/NG-ZORRO/ng-zorro-antd
* Copyright Reserved : MIT LICENSE
* Modified : Ace Revox
*/









var pgSliderModule = /** @class */ (function () {
    function pgSliderModule() {
    }
    pgSliderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_slider_component__WEBPACK_IMPORTED_MODULE_7__["pgSliderComponent"], _slider_track_component__WEBPACK_IMPORTED_MODULE_6__["pgSliderTrackComponent"], _slider_handle_component__WEBPACK_IMPORTED_MODULE_3__["pgSliderHandleComponent"], _slider_step_component__WEBPACK_IMPORTED_MODULE_5__["pgSliderStepComponent"], _slider_marks_component__WEBPACK_IMPORTED_MODULE_4__["pgSliderMarksComponent"]],
            declarations: [_slider_component__WEBPACK_IMPORTED_MODULE_7__["pgSliderComponent"], _slider_track_component__WEBPACK_IMPORTED_MODULE_6__["pgSliderTrackComponent"], _slider_handle_component__WEBPACK_IMPORTED_MODULE_3__["pgSliderHandleComponent"], _slider_step_component__WEBPACK_IMPORTED_MODULE_5__["pgSliderStepComponent"], _slider_marks_component__WEBPACK_IMPORTED_MODULE_4__["pgSliderMarksComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]],
            providers: [_slider_service__WEBPACK_IMPORTED_MODULE_8__["SliderService"]]
        })
    ], pgSliderModule);
    return pgSliderModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/slider/slider.scss":
/*!******************************************************!*\
  !*** ./src/app/@pages/components/slider/slider.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/@pages/components/slider/slider.service.ts":
/*!************************************************************!*\
  !*** ./src/app/@pages/components/slider/slider.service.ts ***!
  \************************************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderService = /** @class */ (function () {
    function SliderService() {
    }
    SliderService.prototype.pauseEvent = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    SliderService.prototype.getPrecision = function (num) {
        var numStr = num.toString();
        var dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    };
    SliderService.prototype.cloneArray = function (arr) {
        return arr.slice();
    };
    SliderService.prototype.isNotTouchEvent = function (e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    };
    // convert value to offset in percent
    SliderService.prototype.valueToOffset = function (min, max, value) {
        return (value - min) / (max - min) * 100;
    };
    SliderService.prototype.correctNumLimit = function (num, min, max) {
        var res = +num;
        if (isNaN(res)) {
            return min;
        }
        if (num < min) {
            res = min;
        }
        else if (num > max) {
            res = max;
        }
        return res;
    };
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param elem HTMLElement ref
     */
    SliderService.prototype.getElementOffset = function (elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
        var rect = elem.getBoundingClientRect();
        var win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    };
    SliderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SliderService);
    return SliderService;
}());



/***/ }),

/***/ "./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-details\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-lg-7\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-overview></icon-overview>\r\n              <p>\r\n                <span>Overview</span>\r\n                <span>\r\n                  *All values are annual -\r\n                  {{ overviewDetails?.definitionName | lowercase }}\r\n                </span>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-table striped\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Gross Income</div>\r\n                <div class=\"item value width-80\">\r\n                  {{\r\n                    overviewDetails?.grossIncome\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Operating Expenses</div>\r\n                <div class=\"item value width-80\">\r\n                  {{\r\n                    overviewDetails?.operatingExpenses\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-separator\"></div>\r\n            <div class=\"card-table\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <p class=\"card-text bold font-12\">NET Income</p>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-info label-value\">\r\n                    <span class=\"value\">\r\n                      {{\r\n                        overviewDetails?.netIncome\r\n                          | currency: 'USD':'symbol':'1.2-2'\r\n                      }}\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <p class=\"card-text bold font-12\">NET Yield</p>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-default label-value\">\r\n                    <span class=\"value\">\r\n                      {{ overviewDetails?.netYield }}%\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-lg-6\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-income></icon-income>\r\n              <p>\r\n                <span>Income Detail</span>\r\n                <span>\r\n                  *All values are annual -\r\n                  {{ incomeDetails?.definitionName | lowercase }}\r\n                </span>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-table striped\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Average Nightly Rate</div>\r\n                <div class=\"item value width-80 text-bold\">\r\n                  {{\r\n                    incomeDetails?.averageNightlyRate\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Occupancy Rate</div>\r\n                <div class=\"item value width-80 text-bold\">\r\n                  {{ incomeDetails?.occupancyRate }}%\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-separator\"></div>\r\n            <div class=\"card-table\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <p class=\"card-text bold font-12\">GROSS Income</p>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-info label-value\">\r\n                    <span class=\"value\">\r\n                      {{\r\n                        incomeDetails?.grossIncome\r\n                          | currency: 'USD':'symbol':'1.2-2'\r\n                      }}\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <p class=\"card-text bold font-12\">GROSS Yield</p>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-info label-value\">\r\n                    <span class=\"value\">\r\n                      {{ incomeDetails?.grossYield }}%\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-lg-6\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-expense></icon-expense>\r\n              <p>\r\n                <span>Expense Detail</span>\r\n                <span>*All values are annual - projected</span>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-table striped\">\r\n              <div class=\"card-column\" *ngFor=\"let expense of expenseDetails\">\r\n                <div class=\"item\">{{ expense.propertyExpenseTypeName }}</div>\r\n                <div class=\"item value\">\r\n                  {{ expense.expenseAmount | currency: 'USD':'symbol':'1.2-2' }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-separator\"></div>\r\n            <div class=\"card-table\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <p class=\"card-text bold font-12\">TOTAL Expense</p>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-info label-value\">\r\n                    <span class=\"value\">\r\n                      {{ totalExpense | currency: 'USD':'symbol':'1.2-2' }}\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-lg-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-capital></icon-capital>\r\n              <p><span>Capital Detail</span></p>\r\n            </div>\r\n            <div class=\"card-table striped\">\r\n              <div class=\"card-column\" *ngFor=\"let capital of capitalDetails\">\r\n                <div class=\"item\">\r\n                  {{ capital.propertyAcquisitionExpenseTypeName }}\r\n                </div>\r\n                <div class=\"item value\">\r\n                  {{ capital.expenseAmount | currency: 'USD':'symbol':'1.2-2' }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-separator\"></div>\r\n            <div class=\"card-table\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <p class=\"card-text bold font-12\">Property Value</p>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-info label-value\">\r\n                    <span class=\"value\">\r\n                      {{ propertyValue | currency: 'USD':'symbol':'1.2-2' }}\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-growth></icon-growth>\r\n              <p><span>Capital Growth</span></p>\r\n            </div>\r\n            <div>\r\n              <p class=\"card-text\">{{ capitalGrowth?.capitalGrowthSummary }}</p>\r\n              <p class=\"card-text bold font-12 uppercase\">\r\n                {{ capitalGrowthYears }} Year projected capital growth\r\n              </p>\r\n            </div>\r\n            <div class=\"card-chart\">\r\n              <custom-chart\r\n                [ChartData]=\"capitalList\"\r\n                [ChartTypeId]=\"0\"\r\n                [ChartLegend]=\"true\"\r\n                *ngIf=\"capitalList\"\r\n              ></custom-chart>\r\n            </div>\r\n            <div class=\"card-separator mt-2\"></div>\r\n            <div class=\"collapse\" [ngClass]=\"{ show: isCollapsed }\">\r\n              <div class=\"card card-body\">\r\n                <p class=\"card-text bold font-12 uppercase mb-2\">\r\n                  Projected Capital Growth Values\r\n                </p>\r\n                <table class=\"table table-bordered mb-3\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"30%\" class=\"bg\">Year</th>\r\n                      <th>Value</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let capital of capitalList\">\r\n                      <td class=\"bg\">{{ capital.year }}</td>\r\n                      <td>{{ capital.value | currency: 'USD' }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"disclamer\">\r\n                  <p class=\"title mb-1\">\r\n                    <icon-info-yellow class=\"svg-icon mr-1\"></icon-info-yellow>\r\n                    Disclamer\r\n                  </p>\r\n                  <p class=\"desc\">\r\n                    This uses averages and returns may differ based lorem ipsum.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div\r\n              class=\"card-table\"\r\n              [ngClass]=\"{ 'mt-3': isCollapsed }\"\r\n              (click)=\"isCollapsed = !isCollapsed\"\r\n              role=\"button\"\r\n            >\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <a class=\"btn-link no-underline\">\r\n                    {{ isCollapsed ? 'Hide' : 'View' }} Projected Capital Values\r\n                  </a>\r\n                </div>\r\n                <div class=\"item value\">\r\n                  <label class=\"label label-primary label-value\">\r\n                    <i *ngIf=\"!isCollapsed\" class=\"fa fa-plus\"></i>\r\n                    <i *ngIf=\"isCollapsed\" class=\"fa fa-minus\"></i>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TabFinancialDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFinancialDetailsComponent", function() { return TabFinancialDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabFinancialDetailsComponent = /** @class */ (function () {
    function TabFinancialDetailsComponent() {
        this.isCollapsed = false;
    }
    Object.defineProperty(TabFinancialDetailsComponent.prototype, "expensesList", {
        set: function (list) {
            this.expenseDetails = list;
            this.totalExpense = (list && list.length && list[0].totalExpense) || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabFinancialDetailsComponent.prototype, "capitalDetailsList", {
        set: function (list) {
            this.capitalDetails = list;
            this.propertyValue = (list && list.length && list[0].propertyValue) || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabFinancialDetailsComponent.prototype, "capitalGrowthList", {
        set: function (list) {
            if (!list || !list.length) {
                return;
            }
            this.capitalGrowthYears = list.length;
            this.capitalList = list;
            this.capitalGrowth = list[0] || {};
        },
        enumerable: true,
        configurable: true
    });
    TabFinancialDetailsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabFinancialDetailsComponent.prototype, "overviewDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabFinancialDetailsComponent.prototype, "incomeDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TabFinancialDetailsComponent.prototype, "expensesList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TabFinancialDetailsComponent.prototype, "capitalDetailsList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myChart'),
        __metadata("design:type", Object)
    ], TabFinancialDetailsComponent.prototype, "myChart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TabFinancialDetailsComponent.prototype, "capitalGrowthList", null);
    TabFinancialDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-financial-details',
            template: __webpack_require__(/*! ./tab-financial-details.component.html */ "./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.html"),
            styles: [__webpack_require__(/*! ./tab-financial-details.component.scss */ "./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabFinancialDetailsComponent);
    return TabFinancialDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-property-details tab-details\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-lg-6\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card-title\">\r\n          <icon-timeline></icon-timeline>\r\n          <p><span>Timeline</span></p>\r\n        </div>\r\n        <div>\r\n          <vertical-timeline\r\n            *ngIf=\"timelines\"\r\n            [PropertyTimelines]=\"timelines\"\r\n          ></vertical-timeline>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card-title\">\r\n          <icon-property></icon-property>\r\n          <p><span>Property Layout</span></p>\r\n        </div>\r\n        <div\r\n          class=\"floor-plan-image\"\r\n          setImage=\"{{ floorPlanLayout.filePath }}\"\r\n          (click)=\"showImageViewer(floorPlanLayout.filePath)\"\r\n        ></div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6 col-lg-6 col-md-6 col-sm-6\">\r\n            {{ floorPlanLayout.propertyName }}\r\n          </div>\r\n          <div class=\"col-6 col-lg-6 col-md-6 col-sm-6 row\">\r\n            <div class=\"col-6 col-lg-6 col-md-6 col-sm-6\">\r\n              <div class=\"count-beds\">\r\n                {{ floorPlanLayout.noOfBedrooms }} BEDS\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6 col-lg-6 col-md-6 col-sm-6\">\r\n              <div class=\"count-baths\">\r\n                {{ floorPlanLayout.noOfBathrooms }} BATHS\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p class=\"floor-plan-description\">{{ floorPlanLayout.caption }}</p>\r\n      </div>\r\n      <div\r\n        class=\"card-wrapper\"\r\n        [ngClass]=\"{ 'coming-soon': !isWalkThroughShow }\"\r\n      >\r\n        <div class=\"card-title\">\r\n          <icon-video></icon-video>\r\n          <p><span>Walkthrough Video</span></p>\r\n        </div>\r\n        <div class=\"thumbnail\" [ngClass]=\"{ ready: isWalkThroughShow }\">\r\n          <div\r\n            class=\"image\"\r\n            [ngStyle]=\"{\r\n              background: 'url(' + images + ') center center no-repeat'\r\n            }\"\r\n          ></div>\r\n          <div class=\"coming-flag\" *ngIf=\"!isWalkThroughShow\">\r\n            <div class=\"coming-flag-wrapper\">\r\n              <icon-hour-glass class=\"icon-md\"></icon-hour-glass> Coming Soon...\r\n            </div>\r\n          </div>\r\n          <div class=\"play-button\" *ngIf=\"isWalkThroughShow\">\r\n            <button\r\n              class=\"btn\"\r\n              (click)=\"playVideo(video?.videoUrl, 'Walkthrough Video')\"\r\n            >\r\n              <i class=\"fa fa-play\"></i>\r\n            </button>\r\n          </div>\r\n          <span class=\"badge placeholder\" *ngIf=\"!video.caption\"> blank </span>\r\n          <span class=\"badge placeholder\" *ngIf=\"!video.caption\"> blank </span>\r\n          <span class=\"badge placeholder\" *ngIf=\"!video.caption\"> blank </span>\r\n          <span class=\"badge\" *ngIf=\"!video.caption\"> blank </span>\r\n        </div>\r\n        <!-- <video-player\r\n          [link]=\"videoLink\"\r\n          *ngIf=\"videoLink && !isWalkThroughShow\"\r\n          [Height]=\"videoHeight\"\r\n        ></video-player> -->\r\n        <p class=\"video-description\" *ngIf=\"video.caption\">\r\n          {{ video.caption }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <!--\r\n      <div class=\"col-12 col-lg-4\">\r\n        <div class=\"card-wrapper\">\r\n          <div class=\"card-title\">\r\n            <icon-timeline></icon-timeline>\r\n            <p><span>Timeline</span></p>\r\n          </div>\r\n          <div>\r\n            <vertical-timeline\r\n              *ngIf=\"timelines\"\r\n              [PropertyTimelines]=\"timelines\"\r\n            ></vertical-timeline>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.floor-plan-image {\n  background: #ddd;\n  width: 100%;\n  height: 200px;\n  position: relative;\n  background-size: cover !important;\n  cursor: pointer; }\n.floor-plan-image + .row > div:first-child {\n    font-size: 14px;\n    font-weight: bold;\n    color: #2c2c2c;\n    margin: 1em 0;\n    line-height: 18px; }\n.floor-plan-image + .row > div:nth-child(2) {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center; }\n.floor-plan-image + .row > div:nth-child(2) > div {\n      padding: 0 0 0 0.5em; }\n.floor-plan-image + .row > div:nth-child(2) > div > div {\n        color: white;\n        width: 100%;\n        height: 25px;\n        border-radius: 3px;\n        font-size: 11px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n.floor-plan-image + .row > div:nth-child(2) > div > .count-beds {\n        background-color: #48b0f7; }\n.floor-plan-image + .row > div:nth-child(2) > div > .count-baths {\n        background-color: #10cfbd; }\n.video-description,\n.floor-plan-description {\n  font-size: 14px;\n  line-height: 20px;\n  color: #626262; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TabPropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPropertyDetailsComponent", function() { return TabPropertyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_photo_viewer_photo_viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/photo-viewer/photo-viewer.service */ "./src/app/shared/services/photo-viewer/photo-viewer.service.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabPropertyDetailsComponent = /** @class */ (function () {
    function TabPropertyDetailsComponent(_photoViewerService, _videoPlayer) {
        this._photoViewerService = _photoViewerService;
        this._videoPlayer = _videoPlayer;
        this.videoHeight = 200;
        this.isWalkThroughShow = true;
        this.images = '/assets/img/walkthrough.jpg';
    }
    Object.defineProperty(TabPropertyDetailsComponent.prototype, "FloorPlanLayout", {
        set: function (layout) {
            this.floorPlanLayout = layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPropertyDetailsComponent.prototype, "Timelines", {
        set: function (timelines) {
            this.timelines = timelines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPropertyDetailsComponent.prototype, "Video", {
        set: function (video) {
            this.video = video;
            this.isWalkThroughShow = !!(video && video.videoUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPropertyDetailsComponent.prototype, "Images", {
        set: function (images) {
            if (images && images.length) {
                this.images = "" + _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + images[0].filePath;
            }
        },
        enumerable: true,
        configurable: true
    });
    TabPropertyDetailsComponent.prototype.ngOnInit = function () { };
    TabPropertyDetailsComponent.prototype.showImageViewer = function (filePath) {
        this._photoViewerService.toggle();
        this._photoViewerService.setImage(filePath);
    };
    TabPropertyDetailsComponent.prototype.playVideo = function (videoLink, title) {
        this._videoPlayer.toggle();
        this._videoPlayer.setVideo(videoLink);
        this._videoPlayer.setTitle(title);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabPropertyDetailsComponent.prototype, "FloorPlanLayout", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabPropertyDetailsComponent.prototype, "Timelines", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabPropertyDetailsComponent.prototype, "Video", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TabPropertyDetailsComponent.prototype, "Images", null);
    TabPropertyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-property-details',
            template: __webpack_require__(/*! ./tab-property-details.component.html */ "./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.html"),
            styles: [__webpack_require__(/*! ./tab-property-details.component.scss */ "./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_photo_viewer_photo_viewer_service__WEBPACK_IMPORTED_MODULE_1__["PhotoViewerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerService"]])
    ], TabPropertyDetailsComponent);
    return TabPropertyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-details\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card-title\">\r\n          <icon-location-card></icon-location-card>\r\n          <p><span>The Neighborhood</span></p>\r\n        </div>\r\n        <div>\r\n          <p class=\"card-text font-16 bold color-dark\">\r\n            {{ propertyLocation.propertyAddress }}\r\n          </p>\r\n          <p class=\"card-text\">\r\n            {{ propertyLocation.neighbourhoodDescription }}\r\n          </p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div\r\n            class=\"col-lg-6 col-md-6 col-sm-12 col-12\"\r\n            *ngIf=\"propertyLocation && showMap\"\r\n          >\r\n            <photo-carousel\r\n              [PropertyImages]=\"propertyLocation.neighborhoodPhotos\"\r\n              [SlideHeight]=\"slideHeight\"\r\n            ></photo-carousel>\r\n            <p class=\"neighborhood-photos-text\">Neighborhood Photos</p>\r\n            <p\r\n              class=\"area-map-link\"\r\n              (click)=\"\r\n                showMap = !showMap;\r\n                showNeighborhoodPhotos = !showNeighborhoodPhotos\r\n              \"\r\n            >\r\n              View Area Map\r\n            </p>\r\n          </div>\r\n          <div\r\n            class=\"col-lg-6 col-md-6 col-sm-12 col-12\"\r\n            *ngIf=\"googleMapData && showNeighborhoodPhotos\"\r\n          >\r\n            <google-map\r\n              [PropertyLocations]=\"googleMapData\"\r\n              [MapHeight]=\"mapHeight\"\r\n              [IsForPropertyDetails]=\"true\"\r\n            ></google-map>\r\n            <p class=\"area-map-text\">Area Map</p>\r\n            <p\r\n              class=\"neighborhood-photos-link\"\r\n              (click)=\"\r\n                showMap = !showMap;\r\n                showNeighborhoodPhotos = !showNeighborhoodPhotos\r\n              \"\r\n            >\r\n              Neighborhood Photos\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-lg-6\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card-title\">\r\n          <icon-location-card></icon-location-card>\r\n          <p><span>Suburb Performance</span></p>\r\n        </div>\r\n        <div>\r\n          <p class=\"card-text\">\r\n            {{ propertyLocation.suburbPerformanceSummary }}\r\n          </p>\r\n        </div>\r\n        <div class=\"card-separator\"></div>\r\n        <div class=\"card-chart\">\r\n          <div class=\"card-chart-header\">\r\n            <p class=\"header-item card-text font-12 bold uppercase\">\r\n              Short-Term Rental Performance\r\n            </p>\r\n            <div class=\"header-item labels\">\r\n              <div class=\"labels-box warning\">\r\n                <span>Average Rate</span>\r\n                <span class=\"value\">{{\r\n                  propertyLocation.suburbAverageRate\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}</span>\r\n              </div>\r\n              <div class=\"labels-box complete\">\r\n                <span>Occupancy</span>\r\n                <span class=\"value\"\r\n                  >{{\r\n                    propertyLocation.suburbOccupancy | number: '1.2-2'\r\n                  }}%</span\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <custom-chart\r\n            [ChartData]=\"propertyLocation.suburbPerformance\"\r\n            [ChartTypeId]=\"1\"\r\n            *ngIf=\"propertyLocation\"\r\n          ></custom-chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card-title\">\r\n          <div\r\n            class=\"region-logo\"\r\n            setImage=\"{{propertyLocation.flagImagePath}}\"\r\n          ></div>\r\n          <p>\r\n            <span>{{ propertyLocation.countryName }}</span>\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <p class=\"card-text\">\r\n            {{ propertyLocation.countryCapitalGrowthSummary }}\r\n          </p>\r\n          <div class=\"card-chart\">\r\n            <div class=\"card-chart-header\">\r\n              <p class=\"header-item card-text font-12 bold uppercase\">\r\n                Capital Growth Average\r\n              </p>\r\n              <div class=\"header-item labels\">\r\n                <p class=\"labels-normal uppercase\">Average</p>\r\n                <div class=\"labels-circle\">\r\n                  <i class=\"fa fa-arrow-up\"></i>\r\n                  <span>{{ propertyLocation.averageGrowth }}%</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <custom-chart\r\n              [ChartData]=\"propertyLocation.capitalGrowth\"\r\n              [ChartTypeId]=\"0\"\r\n              *ngIf=\"propertyLocation\"\r\n            ></custom-chart>\r\n            <!--\r\n              <p class=\"cga-text-bottom\">\r\n                For more in depth details about this market\r\n              </p>\r\n              <div class=\"col-12 col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"guide-button\">Read Cayman Guide</div>\r\n              </div>\r\n            -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".neighborhood-photos-text,\n.area-map-text {\n  font-size: 16px;\n  font-weight: bold;\n  color: #788195;\n  margin: 0.5em 0; }\n\n.neighborhood-photos-link,\n.area-map-link {\n  display: none; }\n\n.guide-button {\n  width: 100%;\n  height: 45px;\n  font-size: 14px;\n  font-weight: bold;\n  display: flex;\n  color: white;\n  justify-content: center;\n  align-items: center;\n  background-color: #10cfbd;\n  cursor: pointer;\n  margin-bottom: 2em;\n  letter-spacing: 1px; }\n\n.cga-text-bottom {\n  font-size: 12px;\n  color: #626262;\n  margin: 1.5em 0 1em 0; }\n\n.cga-text-bottom + div {\n    padding: 0; }\n\n.region-logo {\n  height: 35px;\n  width: 35px;\n  background-size: cover !important;\n  position: relative;\n  border-radius: 100px; }\n\n.region-logo + p {\n    margin: 0 0 0 0.8em; }\n\n@media (max-width: 767px) {\n  .neighborhood-photos-text,\n  .area-map-text {\n    display: none; }\n  .neighborhood-photos-link,\n  .area-map-link {\n    display: block;\n    font-size: 16px;\n    font-weight: bold;\n    color: #10cfbd;\n    margin: 0.5em 0;\n    cursor: pointer;\n    text-decoration: underline;\n    float: right; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TabPropertyLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPropertyLocationComponent", function() { return TabPropertyLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabPropertyLocationComponent = /** @class */ (function () {
    function TabPropertyLocationComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.slideHeight = "300px";
        this.googleMapData = [];
        this.showMap = true;
        this.showNeighborhoodPhotos = true;
        this.mapHeight = "250px;";
        this.mapControlPosition = "LEFT_TOP";
    }
    TabPropertyLocationComponent.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            _this.updateElements();
            _this.changeDetectorRef.detectChanges();
        }, 500);
    };
    Object.defineProperty(TabPropertyLocationComponent.prototype, "PropertyLocationInfo", {
        set: function (info) {
            this.propertyLocation = info;
            this.googleMapData = [];
            var marker = {};
            marker.locationLatitude = this.propertyLocation.locationLatitude;
            marker.locationLongitude = this.propertyLocation.locationLongitude;
            marker.propertyID = this.propertyLocation.propertyID;
            marker.propertyAddress = this.propertyLocation.propertyAddress;
            marker.propertyName = this.propertyLocation.propertyName;
            this.googleMapData.push(marker);
        },
        enumerable: true,
        configurable: true
    });
    TabPropertyLocationComponent.prototype.ngOnInit = function () {
        this.updateElements();
    };
    TabPropertyLocationComponent.prototype.updateElements = function () {
        var checkMobile = window.innerWidth < 768;
        this.slideHeight = checkMobile ? "250px" : "300px";
        this.mapHeight = checkMobile ? "250px" : "300px";
        this.mapControlPosition = checkMobile ? "RIGHT_BOTTOM" : "LEFT_TOP";
        if (checkMobile) {
            this.showNeighborhoodPhotos = false;
            this.showMap = true;
        }
        else {
            this.showNeighborhoodPhotos = true;
            this.showMap = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabPropertyLocationComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabPropertyLocationComponent.prototype, "PropertyLocationInfo", null);
    TabPropertyLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-property-location',
            template: __webpack_require__(/*! ./tab-property-location.component.html */ "./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.html"),
            styles: [__webpack_require__(/*! ./tab-property-location.component.scss */ "./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TabPropertyLocationComponent);
    return TabPropertyLocationComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/components/tab-summary/tab-summary.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-summary/tab-summary.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-details tab-summary\">\r\n  <div class=\"row d-block d-lg-none\">\r\n    <div class=\"col-12\">\r\n      <button class=\"btn btn-complete btn-cons btn-property\">\r\n        <icon-building-white></icon-building-white>\r\n        <p>\r\n          <span>Property Value</span>\r\n          <span>{{ propertyValue | currency: 'USD':'symbol':'1.0' }}</span>\r\n        </p>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-lg-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-overview></icon-overview>\r\n              <p><span>Overview</span></p>\r\n            </div>\r\n            <div>\r\n              <p\r\n                class=\"card-text\"\r\n                *ngFor=\"let overview of summaryData?.overviewArr\"\r\n              >\r\n                {{ overview }}\r\n              </p>\r\n              <a\r\n                class=\"btn-link\"\r\n                (click)=\"openOtherTabs(tabsIndex.PROPERTY_DETAILS)\"\r\n                >Read More & Watch Walkthrough Video</a\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-location-card></icon-location-card>\r\n              <p><span>Location</span></p>\r\n            </div>\r\n            <div>\r\n              <p\r\n                class=\"card-text\"\r\n                *ngFor=\"let locationSummary of summaryData?.locationSummaryArr\"\r\n              >\r\n                {{ locationSummary }}\r\n              </p>\r\n              <a\r\n                class=\"btn-link\"\r\n                (click)=\"openOtherTabs(tabsIndex.PROPERTY_LOCATION)\"\r\n                >Read more about the Exuma islands</a\r\n              >\r\n              <div class=\"mt-3 mb-4\" *ngIf=\"summaryDataArr\">\r\n                <google-map\r\n                  [PropertyLocations]=\"summaryDataArr\"\r\n                  [IsForPropertyDetails]=\"true\"\r\n                ></google-map>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-document></icon-document>\r\n              <p><span>Private Placement Memorandum</span></p>\r\n            </div>\r\n            <div class=\"document-preview\">\r\n              <img\r\n                class=\"preview\"\r\n                src=\"/assets/img/demo-details/document-preview.png\"\r\n              />\r\n              <div class=\"details\">\r\n                <p>{{ summaryPrivatDocs?.caption }}</p>\r\n                <a class=\"download-docs\" (click)=\"downloadDocs()\">\r\n                  Download PPM as PDF\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-financial></icon-financial>\r\n              <p>\r\n                <span>Financial Summary</span>\r\n                <span>*All values are projected</span>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-table column-mb-15\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Gross Yield</div>\r\n                <div class=\"item value width-100 text-bold mobile-cirle-bg\">\r\n                  {{ summaryData?.grossYield | number: '.2-2' }}%\r\n                </div>\r\n              </div>\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Net Yield</div>\r\n                <div class=\"item value width-100 text-bold mobile-cirle-bg\">\r\n                  {{ summaryData?.netYield | number: '.2-2' }}%\r\n                </div>\r\n              </div>\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">Capital Growth</div>\r\n                <div class=\"item value width-100 text-bold mobile-cirle-bg\">\r\n                  {{ summaryData?.capitalGrowth | number: '.2-2' }}%\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-separator\"></div>\r\n            <div class=\"card-table\">\r\n              <div class=\"card-column\">\r\n                <div class=\"item\">\r\n                  <a\r\n                    class=\"btn-link\"\r\n                    (click)=\"openOtherTabs(tabsIndex.FINANCIAL_DETAILS)\"\r\n                  >\r\n                    View Financial Details\r\n                  </a>\r\n                </div>\r\n                <div class=\"item value width-100\">\r\n                  <label class=\"label label-info label-value\">\r\n                    <span>Total Return</span>\r\n                    <span class=\"value\">\r\n                      {{ summaryData?.totalReturn | number: '.2-2' }}%\r\n                    </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"card-wrapper\">\r\n            <div class=\"card-title\">\r\n              <icon-business-case></icon-business-case>\r\n              <p><span>Business Case</span></p>\r\n            </div>\r\n            <div>\r\n              <p\r\n                class=\"card-text\"\r\n                *ngFor=\"let businessCase of summaryData?.businessCaseArr\"\r\n              >\r\n                {{ businessCase }}\r\n              </p>\r\n              <p class=\"card-text bold\" *ngIf=\"summaryData?.videoURL\">\r\n                Watch the video below for more information\r\n              </p>\r\n\r\n              <div class=\"thumbnail\" *ngIf=\"summaryData?.videoURL\">\r\n                <div\r\n                  class=\"image\"\r\n                  [ngStyle]=\"{\r\n                    background: 'url(' + images + ') center center no-repeat'\r\n                  }\"\r\n                ></div>\r\n                <div class=\"play-button\">\r\n                  <button\r\n                    class=\"btn\"\r\n                    (click)=\"playVideo(summaryData?.videoURL, 'Business Case')\"\r\n                  >\r\n                    <i class=\"fa fa-play\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n              <a\r\n                class=\"btn-link\"\r\n                (click)=\"openOtherTabs(tabsIndex.PROPERTY_DETAILS)\"\r\n              >\r\n                View Timeline Details\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-summary/tab-summary.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-summary/tab-summary.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.tab-summary .btn-property {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 30px; }\n.tab-summary .btn-property p {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    margin-bottom: 0;\n    margin-left: 20px; }\n.tab-summary .btn-property p span:nth-child(1) {\n      font-size: 14px;\n      color: #daeffd; }\n.tab-summary .btn-property p span:nth-child(2) {\n      font-size: 18px;\n      color: #ffffff;\n      font-weight: bold; }\n.tab-summary .card-wrapper .document-preview {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px; }\n.tab-summary .card-wrapper .document-preview .preview {\n    height: 136px; }\n.tab-summary .card-wrapper .document-preview .details {\n    flex-grow: 1;\n    padding: 0 10px;\n    display: flex;\n    flex-direction: column; }\n.tab-summary .card-wrapper .document-preview .details p {\n      font-family: \"Roboto\", Arial, sans-serif;\n      font-size: 14px;\n      color: #626262;\n      line-height: 18px; }\n.tab-summary .card-wrapper .document-preview .details .download-docs {\n      cursor: pointer;\n      font-family: \"Roboto\", Arial, sans-serif;\n      font-weight: bold;\n      font-size: 14px;\n      color: #877abc;\n      text-decoration: underline; }\n@media (max-width: 575px) {\n  .tab-summary .card-wrapper .document-preview {\n    flex-direction: column; }\n    .tab-summary .card-wrapper .document-preview .preview {\n      height: 200px;\n      margin-bottom: 20px; }\n    .tab-summary .card-wrapper .document-preview .details p {\n      margin-bottom: 15px; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/components/tab-summary/tab-summary.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/main-app/components/tab-summary/tab-summary.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TabSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSummaryComponent", function() { return TabSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/property-details */ "./src/app/shared/constants/property-details.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabSummaryComponent = /** @class */ (function () {
    function TabSummaryComponent(http, _FileSaverService, _videoPlayer) {
        this.http = http;
        this._FileSaverService = _FileSaverService;
        this._videoPlayer = _videoPlayer;
        this.images = '/assets/img/walkthrough.jpg';
        this.changeActiveTabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabsIndex = _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_1__["TABS"];
    }
    Object.defineProperty(TabSummaryComponent.prototype, "Images", {
        set: function (images) {
            if (images && images.length) {
                this.images = "" + _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + images[0].filePath;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabSummaryComponent.prototype, "summaryDetails", {
        set: function (data) {
            this.summaryData = data || {};
            this.summaryDataArr = data ? [data] : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabSummaryComponent.prototype, "privateDocs", {
        set: function (data) {
            if (data) {
                this.privateDocsPath = "" + _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + data.filePath;
                this.summaryPrivatDocs = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    TabSummaryComponent.prototype.ngOnInit = function () { };
    TabSummaryComponent.prototype.openOtherTabs = function (idx) {
        this.changeActiveTabs.emit(idx);
    };
    TabSummaryComponent.prototype.downloadDocs = function () {
        var _this = this;
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob
        });
        this.http.get(this.privateDocsPath, options).subscribe(function (res) {
            _this._FileSaverService.save(res._body, _this.summaryPrivatDocs.fileName);
        });
    };
    TabSummaryComponent.prototype.playVideo = function (videoLink, title) {
        this._videoPlayer.toggle();
        this._videoPlayer.setVideo(videoLink);
        this._videoPlayer.setTitle(title);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TabSummaryComponent.prototype, "Images", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabSummaryComponent.prototype, "summaryDetails", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabSummaryComponent.prototype, "privateDocs", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabSummaryComponent.prototype, "propertyValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], TabSummaryComponent.prototype, "callback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TabSummaryComponent.prototype, "changeActiveTabs", void 0);
    TabSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-summary',
            template: __webpack_require__(/*! ./tab-summary.component.html */ "./src/app/modules/main-app/components/tab-summary/tab-summary.component.html"),
            styles: [__webpack_require__(/*! ./tab-summary.component.scss */ "./src/app/modules/main-app/components/tab-summary/tab-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__["FileSaverService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["VideoPlayerService"]])
    ], TabSummaryComponent);
    return TabSummaryComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/main-app-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/main-app/main-app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, MainAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAppRoutingModule", function() { return MainAppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_properties_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/properties/properties.component */ "./src/app/modules/main-app/pages/properties/properties.component.ts");
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/layouts */ "./src/app/@pages/layouts/index.ts");
/* harmony import */ var _pages_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/property-details/property-details.component */ "./src/app/modules/main-app/pages/property-details/property-details.component.ts");
/* harmony import */ var _pages_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/purchase/purchase.component */ "./src/app/modules/main-app/pages/purchase/purchase.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/modules/main-app/pages/home/home.component.ts");
/* harmony import */ var _pages_how_does_it_work_how_does_it_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/how-does-it-work/how-does-it-work.component */ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.ts");
/* harmony import */ var _pages_why_invest_why_invest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/why-invest/why-invest.component */ "./src/app/modules/main-app/pages/why-invest/why-invest.component.ts");
/* harmony import */ var _shared_guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/guards */ "./src/app/shared/guards/index.ts");
/* harmony import */ var _modules_main_app_pages_help_center_help_center_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/main-app/pages/help-center/help-center.component */ "./src/app/modules/main-app/pages/help-center/help-center.component.ts");
/* harmony import */ var _pages_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/returns/returns.component */ "./src/app/modules/main-app/pages/returns/returns.component.ts");
/* harmony import */ var _pages_selling_exiting_selling_exiting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/selling-exiting/selling-exiting.component */ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.ts");
/* harmony import */ var _pages_who_does_it_suit_who_does_it_suit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/who-does-it-suit/who-does-it-suit.component */ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.ts");
/* harmony import */ var _pages_staying_property_staying_property_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/staying-property/staying-property.component */ "./src/app/modules/main-app/pages/staying-property/staying-property.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/modules/main-app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_managed_managed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/managed/managed.component */ "./src/app/modules/main-app/pages/managed/managed.component.ts");
/* harmony import */ var _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/marketplace/marketplace.component */ "./src/app/modules/main-app/pages/marketplace/marketplace.component.ts");
/* harmony import */ var _pages_our_fees_our_fees_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/our-fees/our-fees.component */ "./src/app/modules/main-app/pages/our-fees/our-fees.component.ts");
/* harmony import */ var _pages_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/comparison/comparison.component */ "./src/app/modules/main-app/pages/comparison/comparison.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '',
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_3__["ExecutiveLayout"],
        data: { module: 'mainApp' },
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
            { path: 'how', component: _pages_how_does_it_work_how_does_it_work_component__WEBPACK_IMPORTED_MODULE_7__["HowDoesItWorkComponent"] },
            { path: 'why-invest', component: _pages_why_invest_why_invest_component__WEBPACK_IMPORTED_MODULE_8__["WhyInvestComponent"] },
            { path: 'properties', component: _pages_properties_properties_component__WEBPACK_IMPORTED_MODULE_2__["PropertiesComponent"] },
            { path: 'help', component: _modules_main_app_pages_help_center_help_center_component__WEBPACK_IMPORTED_MODULE_10__["HelpCenterComponent"] },
            { path: 'returns', component: _pages_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__["ReturnsComponent"] },
            { path: 'selling-exiting', component: _pages_selling_exiting_selling_exiting_component__WEBPACK_IMPORTED_MODULE_12__["SellingExitingComponent"] },
            { path: 'who', component: _pages_who_does_it_suit_who_does_it_suit_component__WEBPACK_IMPORTED_MODULE_13__["WhoDoesItSuitComponent"] },
            { path: 'about', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsComponent"] },
            { path: 'manage', component: _pages_managed_managed_component__WEBPACK_IMPORTED_MODULE_16__["ManagedComponent"] },
            { path: 'stay-property', component: _pages_staying_property_staying_property_component__WEBPACK_IMPORTED_MODULE_14__["StayingPropertyComponent"] },
            { path: 'marketplace', component: _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_17__["MarketplaceComponent"] },
            { path: 'our-fees', component: _pages_our_fees_our_fees_component__WEBPACK_IMPORTED_MODULE_18__["OurFeesComponent"] },
            { path: 'comparison', component: _pages_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_19__["ComparisonComponent"] },
            {
                path: 'property',
                children: [
                    {
                        path: ':id',
                        component: _pages_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_4__["PropertyDetailsComponent"]
                    },
                    { path: '**', component: _pages_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_4__["PropertyDetailsComponent"] }
                ]
            },
            {
                path: 'purchase',
                component: _pages_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseComponent"],
                canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            }
        ]
    }
];
var MainAppRoutingModule = /** @class */ (function () {
    function MainAppRoutingModule() {
    }
    MainAppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MainAppRoutingModule);
    return MainAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/main-app/main-app.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main-app/main-app.module.ts ***!
  \*****************************************************/
/*! exports provided: MainAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAppModule", function() { return MainAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _main_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-app-routing.module */ "./src/app/modules/main-app/main-app-routing.module.ts");
/* harmony import */ var _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared-app.module */ "./src/app/shared/shared-app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _pages_properties_properties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/properties/properties.component */ "./src/app/modules/main-app/pages/properties/properties.component.ts");
/* harmony import */ var _pages_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/property-details/property-details.component */ "./src/app/modules/main-app/pages/property-details/property-details.component.ts");
/* harmony import */ var _pages_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/purchase/purchase.component */ "./src/app/modules/main-app/pages/purchase/purchase.component.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pages/pages.module */ "./src/app/@pages/pages.module.ts");
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @pages/components/select/select.module */ "./src/app/@pages/components/select/select.module.ts");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @pages/components/tabs/tabs.module */ "./src/app/@pages/components/tabs/tabs.module.ts");
/* harmony import */ var _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @pages/components/progress/progress.module */ "./src/app/@pages/components/progress/progress.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var _components_tab_property_details_tab_property_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tab-property-details/tab-property-details.component */ "./src/app/modules/main-app/components/tab-property-details/tab-property-details.component.ts");
/* harmony import */ var _components_tab_summary_tab_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tab-summary/tab-summary.component */ "./src/app/modules/main-app/components/tab-summary/tab-summary.component.ts");
/* harmony import */ var _components_tab_financial_details_tab_financial_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tab-financial-details/tab-financial-details.component */ "./src/app/modules/main-app/components/tab-financial-details/tab-financial-details.component.ts");
/* harmony import */ var _components_tab_property_location_tab_property_location_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tab-property-location/tab-property-location.component */ "./src/app/modules/main-app/components/tab-property-location/tab-property-location.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/modules/main-app/pages/home/home.component.ts");
/* harmony import */ var _pages_how_does_it_work_how_does_it_work_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/how-does-it-work/how-does-it-work.component */ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.ts");
/* harmony import */ var _pages_why_invest_why_invest_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/why-invest/why-invest.component */ "./src/app/modules/main-app/pages/why-invest/why-invest.component.ts");
/* harmony import */ var _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @pages/components/slider/slider.module */ "./src/app/@pages/components/slider/slider.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_main_app_pages_help_center_help_center_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @modules/main-app/pages/help-center/help-center.component */ "./src/app/modules/main-app/pages/help-center/help-center.component.ts");
/* harmony import */ var _modules_main_app_pages_help_center_pipes_FilterFaq_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @modules/main-app/pages/help-center/pipes/FilterFaq.pipe */ "./src/app/modules/main-app/pages/help-center/pipes/FilterFaq.pipe.ts");
/* harmony import */ var _pages_returns_returns_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/returns/returns.component */ "./src/app/modules/main-app/pages/returns/returns.component.ts");
/* harmony import */ var _pages_selling_exiting_selling_exiting_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/selling-exiting/selling-exiting.component */ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.ts");
/* harmony import */ var _pages_who_does_it_suit_who_does_it_suit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/who-does-it-suit/who-does-it-suit.component */ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/modules/main-app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_managed_managed_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/managed/managed.component */ "./src/app/modules/main-app/pages/managed/managed.component.ts");
/* harmony import */ var _pages_staying_property_staying_property_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/staying-property/staying-property.component */ "./src/app/modules/main-app/pages/staying-property/staying-property.component.ts");
/* harmony import */ var _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/marketplace/marketplace.component */ "./src/app/modules/main-app/pages/marketplace/marketplace.component.ts");
/* harmony import */ var _pages_our_fees_our_fees_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/our-fees/our-fees.component */ "./src/app/modules/main-app/pages/our-fees/our-fees.component.ts");
/* harmony import */ var _pages_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/comparison/comparison.component */ "./src/app/modules/main-app/pages/comparison/comparison.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var MainAppModule = /** @class */ (function () {
    function MainAppModule() {
    }
    MainAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _main_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainAppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_5__["SharedAppModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__["PagesModule"],
                _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_13__["pgSelectModule"],
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_14__["pgTabsModule"],
                _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_15__["ProgressModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_16__["ChartsModule"],
                _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_25__["pgSliderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_26__["TabsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_26__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_26__["CollapseModule"].forRoot(),
                ngx_filesaver__WEBPACK_IMPORTED_MODULE_17__["FileSaverModule"]
            ],
            declarations: [
                _pages_properties_properties_component__WEBPACK_IMPORTED_MODULE_8__["PropertiesComponent"],
                _pages_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_9__["PropertyDetailsComponent"],
                _components_tab_property_details_tab_property_details_component__WEBPACK_IMPORTED_MODULE_18__["TabPropertyDetailsComponent"],
                _components_tab_summary_tab_summary_component__WEBPACK_IMPORTED_MODULE_19__["TabSummaryComponent"],
                _components_tab_financial_details_tab_financial_details_component__WEBPACK_IMPORTED_MODULE_20__["TabFinancialDetailsComponent"],
                _components_tab_property_location_tab_property_location_component__WEBPACK_IMPORTED_MODULE_21__["TabPropertyLocationComponent"],
                _pages_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _pages_how_does_it_work_how_does_it_work_component__WEBPACK_IMPORTED_MODULE_23__["HowDoesItWorkComponent"],
                _pages_why_invest_why_invest_component__WEBPACK_IMPORTED_MODULE_24__["WhyInvestComponent"],
                _modules_main_app_pages_help_center_help_center_component__WEBPACK_IMPORTED_MODULE_27__["HelpCenterComponent"],
                _pages_returns_returns_component__WEBPACK_IMPORTED_MODULE_29__["ReturnsComponent"],
                _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__["AboutUsComponent"],
                _pages_who_does_it_suit_who_does_it_suit_component__WEBPACK_IMPORTED_MODULE_31__["WhoDoesItSuitComponent"],
                _pages_selling_exiting_selling_exiting_component__WEBPACK_IMPORTED_MODULE_30__["SellingExitingComponent"],
                _pages_managed_managed_component__WEBPACK_IMPORTED_MODULE_33__["ManagedComponent"],
                _pages_staying_property_staying_property_component__WEBPACK_IMPORTED_MODULE_34__["StayingPropertyComponent"],
                _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_35__["MarketplaceComponent"],
                _pages_our_fees_our_fees_component__WEBPACK_IMPORTED_MODULE_36__["OurFeesComponent"],
                _pages_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_37__["ComparisonComponent"],
                _modules_main_app_pages_help_center_pipes_FilterFaq_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterFaq"],
            ]
        })
    ], MainAppModule);
    return MainAppModule;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/about-us/about-us.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/about-us/about-us.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\r\n  rel=\"stylesheet\"\r\n  href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\"\r\n  integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n<!-- Header Banner -->\r\n<section id=\"header-bannerId\">\r\n  <div class=\"header-banner-coontainer\">\r\n    <div class=\"container\">\r\n      <h3>OUR VISION</h3>\r\n      <p>\r\n        We founded partbnb to enable everyone to enjoy in the huge benefits of\r\n        owning a vacation rental property. We believe that everyone should have\r\n        access to this market, regardless of the amount that they will have to\r\n        invest. We love tthe locations where we buy property, and know that you\r\n        will too. We hope our owners will make use of the ability to use the\r\n        properties at a discounted rate, and get that feeling that we do of\r\n        pride in every property owned.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Header Banner end -->\r\n<!-- Content -->\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"center-text\">\r\n        <h3 class=\"content-title\">Management Team</h3>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"row mb-5\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/James@2x.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    James Punnet <br />\r\n                    <span class=\"content-card-title-description\"\r\n                      >Founder & CEO</span\r\n                    >\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    James as a serial entrepreneur James has been involved in\r\n                    numerous startup businesses including founding a LifeDirect,\r\n                    a very successul insurance startup now owned by the largest\r\n                    online marketplace in NZ(TradeMe). <br /><br />\r\n                    James started in the insurance space but more recently has\r\n                    moved into the Home\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Craig@2x.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Craig Milligan <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Chief Propety Hunter\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    Craig is passionate about property and traveling the world\r\n                    and Partnb embodies both of these ideas. He grew up in New\r\n                    Zealand, but has spend the past 10 years living overseas in\r\n                    the United Kingdom and Singapore. He has spent the past 18\r\n                    years working in the Information Technology space across a\r\n                    broad spectrum of industries and locations. <br />\r\n                    Craig has also built a property portfolio of short term\r\n                    rental properties around New Zealand and leverages James\r\n                    management business to run them.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Tom@2x.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Tom Herbert <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Chief Technology Officer\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    Originally born in the UK, Tom grew up in the Cayman Islands\r\n                    and his first job at age 14 was building and selling\r\n                    computers. He returned to the UK and spent his twenties\r\n                    climbing the corporate ladder of insurance software\r\n                    development, before ultimately ditching the suit and tie in\r\n                    2017 to form his own startup - BlackFin Technology - to\r\n                    focus on building cool tech like Partbnb.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mb-5\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Amanda@2x.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Amanda Ruth Garcia <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Social Media Manager\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    Amanda is a natural born influencer. She loves solving\r\n                    problems using her creativity. But at the same time, she has\r\n                    a good head over her shoulders and attacks every situation\r\n                    using wisdom and experience that she has gained through her\r\n                    working years. <br /><br />\r\n                    She has been involved in advertising and marketing ever\r\n                    since her college days, graduating with a degree in\r\n                    Communication Arts. As she got involved with different\r\n                    projects, she believes that social media is a dynamic and\r\n                    effective tool that will be able to reach people that were\r\n                    previously unreachable. As the lead for Partbnb's social\r\n                    media efforts, Amanda works hard in creating and publishing\r\n                    content that would not only encourage future investors but\r\n                    also educate and help them be the best investors there can\r\n                    be.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Carol@2x.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Carolyn Ocasiones <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Customer Services Manager\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    Carolyn is a prudent process specialist and strategic\r\n                    problem solver. Identifying potential issues and risks, as\r\n                    well as, applying appropriate sustainable solutions are one\r\n                    of her valued strengths. This contributed to her various\r\n                    roles in customer service, quality, finance, administration,\r\n                    and management. As Head of Partbnb’s Customer Service,\r\n                    Carolyn acts as a liaison between investors and Customer\r\n                    Support team ensuring utmost positive experience for their\r\n                    investors. Carolyn, along with the rest of Partbnb team,\r\n                    strives to build trust and strong longstanding alliance with\r\n                    Partbnb’s investors.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Mar@2x.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Mar John Morales <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Chief Designer\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    Mar John is a design enthusiast based in the Philippines. He\r\n                    has been serving designs for numerous clients around the\r\n                    globe for 3 years. <br />\r\n                    <br />\r\n                    After graduating from a BS Information Technology course, he\r\n                    entered the world of Interface Design and has been working\r\n                    on this field since then. MJ specializes on turning raw\r\n                    ideas into usable, and device friendly designs.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- To show advisory board please set hide-content class to inline and uncommen hr -->\r\n    <!-- <hr /> -->\r\n    <div class=\"container my-5 py-5 hide-content\">\r\n      <div class=\"center-text\">\r\n        <h3 class=\"content-title\">Advisory Board</h3>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/James@2x Copy.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Rachel Alexander <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Position Here\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    So strongly and metaphysically did I conceive of my\r\n                    situation then, that while earnestly watching his motions, I\r\n                    seemed distinctly to perceive that my own individuality was\r\n                    now merged in a joint stock company of two; that my free\r\n                    will had received a mortal wound; and that another's mistake\r\n                    or misfortune might plunge innocent me into unmerited\r\n                    disaster and death.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Craig@2x Copy.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Christina Cox <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Position Here\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    So strongly and metaphysically did I conceive of my\r\n                    situation then, that while earnestly watching his motions, I\r\n                    seemed distinctly to perceive that my own individuality was\r\n                    now merged in a joint stock company of two; that my free\r\n                    will had received a mortal wound; and that another's mistake\r\n                    or misfortune might plunge innocent me into unmerited\r\n                    disaster and death.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Tom@2x Copy.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Ronald Woods <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Position Here\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    So strongly and metaphysically did I conceive of my\r\n                    situation then, that while earnestly watching his motions, I\r\n                    seemed distinctly to perceive that my own individuality was\r\n                    now merged in a joint stock company of two; that my free\r\n                    will had received a mortal wound; and that another's mistake\r\n                    or misfortune might plunge innocent me into unmerited\r\n                    disaster and death.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Amanda@2x Copy.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Doris Schneider <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Position Here\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    The monkey-rope is found in all whalers; but it was only in\r\n                    the Pequod that the monkey and his holder were ever tied\r\n                    together. This improvement upon the original usage was\r\n                    introduced by no less a man than Stubb, in order to afford\r\n                    the imperilled harpooneer the strongest possible guarantee\r\n                    for the faithfulness and vigilance of his monkey-rope\r\n                    holder.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card h-100 border-0\">\r\n              <div class=\"card-body\">\r\n                <div class=\"center-text mb-4\">\r\n                  <img\r\n                    src=\"../../../../../assets/about-us/Carol@2x Copy.png\"\r\n                    alt=\"Card image cap\"\r\n                    class=\"image-size\"\r\n                  />\r\n                </div>\r\n                <div class=\"center-text\">\r\n                  <h3 class=\"content-card-title\">\r\n                    Jack Arnold <br />\r\n                    <span class=\"content-card-title-description\">\r\n                      Position Here\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n                <div class=\"member-bio\">\r\n                  <p class=\"card-text\">\r\n                    The monkey-rope is found in all whalers; but it was only in\r\n                    the Pequod that the monkey and his holder were ever tied\r\n                    together. This improvement upon the original usage was\r\n                    introduced by no less a man than Stubb, in order to afford\r\n                    the imperilled harpooneer the strongest possible guarantee\r\n                    for the faithfulness and vigilance of his monkey-rope\r\n                    holder.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer border-0\">\r\n                <div class=\"right-text\">\r\n                  <a\r\n                    (click)=\"toggleClass($event)\"\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"read-more-paragraph\"\r\n                  >\r\n                    Read More <i class=\"fas fa-plus-circle\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Content end -->\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/about-us/about-us.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/about-us/about-us.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#header-bannerId {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#header-bannerId .header-banner-coontainer {\n    text-align: center;\n    color: #fff;\n    height: 100%;\n    width: 100%;\n    background-image: url('Header@2x.png');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover; }\n#header-bannerId .header-banner-coontainer h3 {\n      margin: 0;\n      padding-top: 104px;\n      font-size: 40px;\n      line-height: 40px;\n      color: #fff;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#header-bannerId .header-banner-coontainer p {\n      padding-top: 20px;\n      padding-bottom: 90px;\n      font-size: 20px;\n      line-height: 30px; }\n#contentId {\n  margin-top: 40px; }\n#contentId .hide-content {\n    display: none; }\n#contentId .content-container .center-text {\n    text-align: center; }\n#contentId .content-container .right-text {\n    text-align: right; }\n#contentId .content-container .content-title {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 30px;\n    color: #2C2C2C; }\n#contentId .content-container .content {\n    margin-top: 40px; }\n#contentId .content-container .content .image-size {\n      margin-top: 20px;\n      width: 150px;\n      height: 150px; }\n#contentId .content-container .content .content-card-title {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px;\n      color: #2B303B;\n      line-height: normal; }\n#contentId .content-container .content .content-card-title .content-card-title-description {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #2B303B; }\n#contentId .content-container .content .read-more-paragraph {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 14px;\n      color: #10CFBD; }\n#contentId .content-container .content .first-letter {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-weight: 400px;\n      font-size: 55px;\n      color: #4C446A; }\n#contentId .content-container .content .right-text {\n      text-align: right; }\n#contentId .content-container .content .extend-cardOne {\n      padding-bottom: 20px; }\n#contentId .content-container .content .extend-cardTwo {\n      padding-bottom: 20px; }\n#contentId .member-bio {\n    overflow: hidden;\n    height: 135px; }\n#contentId .member-bio.expanded {\n      height: auto; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/about-us/about-us.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/about-us/about-us.component.ts ***!
  \***********************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.toggleClass = function (e) {
        e.preventDefault();
        var container = e.target.parentNode;
        var cardBody = container.parentNode.previousSibling;
        var content = cardBody.lastChild;
        content.classList.toggle('expanded');
    };
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/modules/main-app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/modules/main-app/pages/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/comparison/comparison.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/comparison/comparison.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\r\n  rel=\"stylesheet\"\r\n  href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\r\n  integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n\r\n<!-- Header -->\r\n\r\n<section id=\"headerId\">\r\n  <div class=\"container\">\r\n    <div class=\"header-container\">\r\n      <h3>Comparison</h3>\r\n      <p>\r\n        See how owning a partbnb is much easier, lower risk and could save /\r\n        make you more money than buying a property yourself outright\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header end -->\r\n\r\n<!-- Content -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"container\">\r\n    <div class=\"content-container\">\r\n      <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Toggle collapse\r\n</button><br>\r\n<div id=\"collapseBasic\" [collapse]=\"isCollapsed\" class=\"setInline\">\r\n  <div class=\"sample\">Some content</div>\r\n</div> -->\r\n\r\n      <table class=\"table table-bordered table-show\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"table-first-row desktop-table-row-width-first\"></th>\r\n            <th class=\"table-second-row desktop-table-row-width-second\">\r\n              PARTBNB\r\n            </th>\r\n            <th class=\"table-third-row desktop-table-row-width-third\">\r\n              DO IT YOURSELF\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Minimum Amount\r\n            </td>\r\n            <td\r\n              class=\"second-row-font desktop-table-column-padding row-two-custom-background\"\r\n            >\r\n              $50\r\n            </td>\r\n            <td class=\"third-row-font desktop-table-column-padding\">$200k +</td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Find a property easily\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center; text-align-last: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>\r\n                  We have done all the work - our experienced team purchases the\r\n                  properties at great value, and ensures they are perfectly\r\n                  suited for the short term rental market\r\n                </p>\r\n              </div>\r\n            </td>\r\n            <td class=\"center-text desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Set up Done\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>\r\n                  Our expert team setup every property and ensures it is\r\n                  furnished / listed to get the best occupancy and revenue\r\n                </p>\r\n              </div>\r\n            </td>\r\n            <td class=\"center-text desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Buy easy\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>Takes just minutes!</p>\r\n              </div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n              <p>Process can take 3-6 months on some islands</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Sell easy\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>You can list your shared up for sale on the platform.</p>\r\n              </div>\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph-two desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n              <p>Most properties take 6 months to sell on islands</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              No Legal Cost\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div><i class=\"fas fa-check-circle icon-style-second\"></i></div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n              <p>Legal cost often exceed $3k for a purchase</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Diversification\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>\r\n                  The ability to purchase multiple properties on the platform\r\n                  allows you to diversify your invesment and reduce the risk of\r\n                  something catestrophic occuring to one property.\r\n                </p>\r\n              </div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n              <p>\r\n                100% investment in one property is higher risk - if something\r\n                occurs to that one property\r\n              </p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              No Home Loan\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>\r\n                  There is no lending / loans to repay on any partbnb properties\r\n                </p>\r\n              </div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-question-circle icon-style-fourth\"></i><br />\r\n              <p>\r\n                100% investment in one property is higher risk - if something\r\n                occurs to that one property\r\n              </p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              No Maintenance Worries\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div><i class=\"fas fa-check-circle icon-style-second\"></i></div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              No Property Management Worries\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div><i class=\"fas fa-check-circle icon-style-second\"></i></div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Easy accounting\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>Simple Income statements for your tax filling</p>\r\n              </div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i><br />\r\n              <p>\r\n                You must track income / expenses and then work with an\r\n                accountant to prepare returns\r\n              </p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"first-row-font desktop-table-column-padding\"\r\n              valign=\"center\"\r\n            >\r\n              Higher Yields Rental Return\r\n            </td>\r\n            <td\r\n              class=\"row-paragraph desktop-table-column-padding row-two-custom-background\"\r\n              style=\"text-align: center;\"\r\n            >\r\n              <div>\r\n                <i class=\"fas fa-check-circle icon-style-second\"></i><br />\r\n                <p>\r\n                  Our expert property managers use our experience and data to\r\n                  maximize their revenue\r\n                </p>\r\n              </div>\r\n            </td>\r\n            <td class=\"row-paragraph-two desktop-table-column-padding\">\r\n              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <div class=\"collapse-container\">\r\n        <div class=\"wrap-collabsible\">\r\n          <input id=\"collapsible\" class=\"toggle\" type=\"checkbox\" />\r\n          <label for=\"collapsible\" class=\"lbl-toggle\" tabindex=\"0\">More Info</label>\r\n          <div class=\"collapsible-content\">\r\n            <div class=\"content-inner\">\r\n              <p>\r\n                QUnit is by calling one of the object that are embedded in\r\n                JavaScript, and faster JavaScript program could also used with\r\n                its elegant, well documented, and functional programming using\r\n                JS, HTML pages Modernizr is a popular browsers without plug-ins.\r\n                Test-Driven Development.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"tab-show\">\r\n        <pg-tabset\r\n          tabAnimation=\"slide-left\"\r\n          Type=\"simple\"\r\n          extraTabClass=\"comparison-tabs\"\r\n        >\r\n          <pg-tab>\r\n            <ng-template #TabHeading> PARTBNB </ng-template>\r\n            <div class=\"row column-seperation\">\r\n              <table class=\"table table-bordered table-customs\">\r\n                <tr class=\"center-header\">\r\n                  <th colspan=\"2\" class=\"text-format\">\r\n                    Investing with Partbnb\r\n                  </th>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Minimum Amount\r\n                  </td>\r\n                  <td class=\"second-row-font\">$50</td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Find a property easily\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                      <div class=\"wrap-collabsible\">\r\n                        <input\r\n                          id=\"collapsibleOne\"\r\n                          class=\"toggle\"\r\n                          type=\"checkbox\"\r\n                        />\r\n                        <label for=\"collapsibleOne\" class=\"lbl-toggle\">\r\n                          <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                          <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"collapsible-content\">\r\n                          <div class=\"content-inner\">\r\n                            <p>\r\n                              We have done all the work - our experienced team\r\n                              purchases the properties at great value, and\r\n                              ensures they are perfectly suited for the short\r\n                              term rental market\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Set up done\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <!-- <i class=\"fas fa-check-circle icon-style-second\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px;\"\r\n                    ></i> -->\r\n                    <div class=\"collapse-container\">\r\n                      <div class=\"wrap-collabsible\">\r\n                        <input\r\n                          id=\"collapsibleTwo\"\r\n                          class=\"toggle\"\r\n                          type=\"checkbox\"\r\n                        />\r\n                        <label for=\"collapsibleTwo\" class=\"lbl-toggle\">\r\n                          <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                          <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"collapsible-content\">\r\n                          <div class=\"content-inner\">\r\n                            <p>\r\n                              Our expert team setup every property and ensures\r\n                              it is furnished / listed to get the best occupancy\r\n                              and revenue\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Buy Easy\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                      <div class=\"wrap-collabsible\">\r\n                        <input\r\n                          id=\"collapsibleThree\"\r\n                          class=\"toggle\"\r\n                          type=\"checkbox\"\r\n                        />\r\n                        <label for=\"collapsibleThree\" class=\"lbl-toggle\">\r\n                          <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                          <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"collapsible-content\">\r\n                          <div class=\"content-inner\">\r\n                            <p>Takes just minutes!</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Sell Easy\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                      <div class=\"wrap-collabsible\">\r\n                        <input\r\n                          id=\"collapsibleFour\"\r\n                          class=\"toggle\"\r\n                          type=\"checkbox\"\r\n                        />\r\n                        <label for=\"collapsibleFour\" class=\"lbl-toggle\">\r\n                          <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                          <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"collapsible-content\">\r\n                          <div class=\"content-inner\">\r\n                            <p>\r\n                              You can list your shared up for sale on the\r\n                              platform.\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Legal Cost\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden; \">\r\n                    <i class=\"fas fa-check-circle icon-style-second\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Diversification\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                      <div class=\"wrap-collabsible\">\r\n                        <input\r\n                          id=\"collapsibleFive\"\r\n                          class=\"toggle\"\r\n                          type=\"checkbox\"\r\n                        />\r\n                        <label for=\"collapsibleFive\" class=\"lbl-toggle\">\r\n                          <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                          <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"collapsible-content\">\r\n                          <div class=\"content-inner\">\r\n                            <p>\r\n                              The ability to purchase multiple properties on the\r\n                              platform allows you to diversify your invesment\r\n                              and reduce the risk of something catestrophic\r\n                              occuring to one property.\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Home Loan\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                      <div class=\"wrap-collabsible\">\r\n                        <input\r\n                          id=\"collapsibleSix\"\r\n                          class=\"toggle\"\r\n                          type=\"checkbox\"\r\n                        />\r\n                        <label for=\"collapsibleSix\" class=\"lbl-toggle\">\r\n                          <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                          <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"collapsible-content\">\r\n                          <div class=\"content-inner\">\r\n                            <p>\r\n                              There is no lending / loans to repay on any\r\n                              partbnb properties\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Maintenance Worries\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-check-circle icon-style-second\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Property Management worries\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-check-circle icon-style-second\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Easy Accounting\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                      <div class=\"collapse-container\">\r\n                          <div class=\"wrap-collabsible\">\r\n                            <input\r\n                              id=\"collapsibleSeven\"\r\n                              class=\"toggle\"\r\n                              type=\"checkbox\"\r\n                            />\r\n                            <label for=\"collapsibleSeven\" class=\"lbl-toggle\">\r\n                              <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                              <i\r\n                                class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                              ></i>\r\n                            </label>\r\n                            <div class=\"collapsible-content\">\r\n                              <div class=\"content-inner\">\r\n                                <p>\r\n                                    Simple Income statements for your tax filling\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                    <td\r\n                      class=\"first-row-font header-customs\"\r\n                      style=\"text-align: right; padding-right: 20px;\"\r\n                    >\r\n                    Higher Yields Rental Return\r\n                    </td>\r\n                    <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                        <div class=\"collapse-container\">\r\n                            <div class=\"wrap-collabsible\">\r\n                              <input\r\n                                id=\"collapsibleEight\"\r\n                                class=\"toggle\"\r\n                                type=\"checkbox\"\r\n                              />\r\n                              <label for=\"collapsibleEight\" class=\"lbl-toggle\">\r\n                                <i class=\"fas fa-check-circle icon-style-second\"></i>\r\n                                <i\r\n                                  class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                                ></i>\r\n                              </label>\r\n                              <div class=\"collapsible-content\">\r\n                                <div class=\"content-inner\">\r\n                                  <p>\r\n                                      Our expert property managers use our experience and data to maximize their revenue\r\n                                  </p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                    </td>\r\n                  </tr>\r\n              </table>\r\n            </div>\r\n          </pg-tab>\r\n          <pg-tab>\r\n            <ng-template #TabHeading> DO IT YOURSELF </ng-template>\r\n            <div class=\"row column-seperation\">\r\n              <table class=\"table table-bordered table-customs\">\r\n                <tr class=\"center-header\">\r\n                  <th colspan=\"2\" class=\"text-format\">\r\n                    Buying property yourself\r\n                  </th>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Minimum Amount\r\n                  </td>\r\n                  <td class=\"third-row-font\">$200k +</td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Find a property easily\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-times-circle icon-style-third\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Set up done\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-times-circle icon-style-third\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Buy Easy\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                        <div class=\"wrap-collabsible\">\r\n                          <input\r\n                            id=\"collapsibleNine\"\r\n                            class=\"toggle\"\r\n                            type=\"checkbox\"\r\n                          />\r\n                          <label for=\"collapsibleNine\" class=\"lbl-toggle\">\r\n                            <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n                            <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                            ></i>\r\n                          </label>\r\n                          <div class=\"collapsible-content\">\r\n                            <div class=\"content-inner\">\r\n                              <p class=\"paragraph-custom\">\r\n                                  Process can take 3-6 months on some islands\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Sell Easy\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                      <div class=\"collapse-container\">\r\n                          <div class=\"wrap-collabsible\">\r\n                            <input\r\n                              id=\"collapsibleTen\"\r\n                              class=\"toggle\"\r\n                              type=\"checkbox\"\r\n                            />\r\n                            <label for=\"collapsibleTen\" class=\"lbl-toggle\">\r\n                              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n                              <i\r\n                              class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                              ></i>\r\n                            </label>\r\n                            <div class=\"collapsible-content\">\r\n                              <div class=\"content-inner\">\r\n                                <p class=\"paragraph-custom\">\r\n                                    Most properties take 6 months to sell on islands\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Legal Cost\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                      <div class=\"collapse-container\">\r\n                          <div class=\"wrap-collabsible\">\r\n                            <input\r\n                              id=\"collapsibleEleven\"\r\n                              class=\"toggle\"\r\n                              type=\"checkbox\"\r\n                            />\r\n                            <label for=\"collapsibleEleven\" class=\"lbl-toggle\">\r\n                              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n                              <i\r\n                              class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                              ></i>\r\n                            </label>\r\n                            <div class=\"collapsible-content\">\r\n                              <div class=\"content-inner\">\r\n                                <p class=\"paragraph-custom\">\r\n                                    Legal cost often exceed $3k for a purchase\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Diversification\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                      <div class=\"collapse-container\">\r\n                          <div class=\"wrap-collabsible\">\r\n                            <input\r\n                              id=\"collapsibleTwelve\"\r\n                              class=\"toggle\"\r\n                              type=\"checkbox\"\r\n                            />\r\n                            <label for=\"collapsibleTwelve\" class=\"lbl-toggle\">\r\n                              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n                              <i\r\n                              class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                              ></i>\r\n                            </label>\r\n                            <div class=\"collapsible-content\">\r\n                              <div class=\"content-inner\">\r\n                                <p class=\"paragraph-custom\">\r\n                                    100% investment in one property is higher risk - if something occurs to that one property\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Home Loan\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <div class=\"collapse-container\">\r\n                        <div class=\"wrap-collabsible\">\r\n                          <input\r\n                            id=\"collapsibleThirteen\"\r\n                            class=\"toggle\"\r\n                            type=\"checkbox\"\r\n                          />\r\n                          <label for=\"collapsibleThirteen\" class=\"lbl-toggle\">\r\n                            <i class=\"fas fa-question-circle icon-style-fourth\"></i>\r\n                            <i\r\n                            class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                            ></i>\r\n                          </label>\r\n                          <div class=\"collapsible-content\">\r\n                            <div class=\"content-inner\">\r\n                              <p class=\"paragraph-custom\">\r\n                                  100% investment in one property is higher risk - if something occurs to that one property\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Maintenance Worries\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-times-circle icon-style-third\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    No Property Management worries\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-times-circle icon-style-third\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Easy Accounting\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                      <div class=\"collapse-container\">\r\n                          <div class=\"wrap-collabsible\">\r\n                            <input\r\n                              id=\"collapsibleFourteen\"\r\n                              class=\"toggle\"\r\n                              type=\"checkbox\"\r\n                            />\r\n                            <label for=\"collapsibleFourteen\" class=\"lbl-toggle\">\r\n                              <i class=\"fas fa-times-circle icon-style-third\"></i>\r\n                              <i\r\n                              class=\"expand_caret fas fa-angle-down icon-style-second\"\r\n                              ></i>\r\n                            </label>\r\n                            <div class=\"collapsible-content\">\r\n                              <div class=\"content-inner\">\r\n                                <p class=\"paragraph-custom\">\r\n                                    You must track income / expenses and then work with an accountant to prepare returns\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td\r\n                    class=\"first-row-font header-customs\"\r\n                    style=\"text-align: right; padding-right: 20px;\"\r\n                  >\r\n                    Higher Yields Rental Return\r\n                  </td>\r\n                  <td class=\"second-row-font\" style=\"overflow:hidden;\">\r\n                    <i class=\"fas fa-times-circle icon-style-third\"></i\r\n                    ><i\r\n                      class=\"fas fa-angle-down icon-style-second\"\r\n                      style=\"padding-left: 15px; visibility: hidden;\"\r\n                    ></i>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </pg-tab>\r\n        </pg-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- <pg-tabset\r\n      tabAnimation=\"slide-left\"\r\n      Type=\"simple\"\r\n      extraTabClass=\"details-tabs\"\r\n      [SelectedIndex]=\"activeTabs\"\r\n      (SelectChange)=\"setTabIndex($event)\"\r\n    >\r\n    <pg-tab>\r\n    <ng-template #TabHeading>\r\n        Hello World\r\n    </ng-template>\r\n    <div class=\"row column-seperation\">\r\n        <div class=\"col-lg-6\">\r\n            <h3>\r\n            <span class=\"semi-bold\">Sometimes</span> Small things in life means the most\r\n            </h3>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <h3 class=\"semi-bold\">great tabs</h3>\r\n            <p>Native boostrap tabs customized to Pages look and feel, simply changing class name you can change color as well as its animations</p>\r\n        </div>\r\n        </div>\r\n    </pg-tab>\r\n    <pg-tab>\r\n    <ng-template #TabHeading>\r\n        Hello Two\r\n    </ng-template>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>“ Nothing is\r\n            <span class=\"semi-bold\">impossible</span>, the word itself says 'I'm\r\n            <span class=\"semi-bold\">possible</span>'! ”\r\n            </h3>\r\n            <p>A style represents visual customizations on top of a layout. By editing a style, you can use Squarespace's visual interface to customize your...</p>\r\n            <br>\r\n            <p class=\"pull-right\">\r\n            <button type=\"button\" class=\"btn btn-default btn-cons\">White</button>\r\n            <button type=\"button\" class=\"btn btn-success btn-cons\">Success</button>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    </pg-tab>\r\n    <pg-tab>\r\n        <ng-template #TabHeading>\r\n            Hello Three\r\n        </ng-template>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n            <h3>Follow us &amp; get updated!</h3>\r\n            <p>Instantly connect to what's most important to you. Follow your friends, experts, favorite celebrities, and breaking news.</p>\r\n            <br>\r\n            </div>\r\n        </div>\r\n    </pg-tab>\r\n</pg-tabset> -->\r\n<!-- Content end -->\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/comparison/comparison.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/comparison/comparison.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerId {\n  margin-top: 20px;\n  margin-bottom: 35px; }\n#headerId .header-container h3 {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 23px;\n    color: #2C2C2C; }\n#headerId .header-container p {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #626262;\n    line-height: 21px; }\n#contentId {\n  margin-bottom: 50px; }\n#contentId .header-customs {\n    width: 190px;\n    padding-right: 20px; }\n#contentId .collapse-container input[type='checkbox'] {\n    display: none; }\n#contentId .collapse-container .lbl-toggle {\n    display: block;\n    margin: 0;\n    cursor: pointer;\n    border-radius: 7px;\n    transition: all 0.25s ease-out; }\n#contentId .collapse-container .paragraph-custom {\n    color: #F87877; }\n#contentId .collapse-container .lbl-toggle::before {\n    content: ' ';\n    display: inline-block;\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n    transition: -webkit-transform .2s ease-out;\n    transition: transform .2s ease-out;\n    transition: transform .2s ease-out, -webkit-transform .2s ease-out; }\n#contentId .collapse-container .collapsible-content .content-inner {\n    padding-left: 0;\n    border-bottom-left-radius: 7px;\n    border-bottom-right-radius: 7px; }\n#contentId .collapse-container .collapsible-content {\n    max-height: 0px;\n    overflow: hidden;\n    transition: max-height .25s ease-in-out; }\n#contentId .collapse-container .toggle + .lbl-toggle > .expand_caret {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n    padding: 7px;\n    transition-property: all;\n    transition-duration: 0.5s;\n    transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1); }\n#contentId .collapse-container .toggle:checked + .lbl-toggle > .expand_caret {\n    -webkit-transform: rotate(-540deg);\n            transform: rotate(-540deg);\n    padding: 7px;\n    transition-property: all;\n    transition-duration: 0.5s;\n    transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1); }\n#contentId .collapse-container .toggle:checked + .lbl-toggle + .collapsible-content {\n    max-height: 350px; }\n#contentId .btn-primary {\n    background: none;\n    border: none;\n    margin: none; }\n#contentId .setInline {\n    padding: 0;\n    overflow: hidden;\n    display: inline-block !important;\n    border: none;\n    margin: 0px; }\n#contentId .sample {\n    padding: 10px; }\n#contentId .desktop-table-row-width-first {\n    width: 260px; }\n#contentId .desktop-table-row-width-second {\n    width: 280px; }\n#contentId .desktop-table-row-width-third {\n    width: 280px; }\n#contentId .row-two-custom-background {\n    background-color: rgba(16, 207, 189, 0.2); }\n#contentId .card-padding {\n    padding: 15px; }\n#contentId .desktop-table-column-padding {\n    padding-left: 38px !important;\n    padding-right: 38px !important;\n    padding-top: 18px !important;\n    padding-bottom: 18px !important; }\n#contentId .table-customs {\n    margin-top: 0px;\n    border-top: none; }\n#contentId .table-customs .center-header {\n      text-align: center; }\n#contentId .table-customs .text-format {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 20px;\n      color: #2C2C2C; }\n#contentId .content-container .table-first-row {\n    background: #F2F2F2; }\n#contentId .content-container .table-second-row {\n    background-color: #10CFBD;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 18px;\n    color: #FFFFFF;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: center; }\n#contentId .content-container .table-third-row {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 18px;\n    color: #FFFFFF;\n    text-align: center;\n    background: #F8D053;\n    border: 1px solid #E6E6E6; }\n#contentId .content-container .first-row-font {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #626262;\n    text-align: center;\n    padding-top: 25px; }\n#contentId .content-container .second-row-font {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 25px;\n    color: #10CFBD; }\n#contentId .content-container .third-row-font {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 25px;\n    color: #2C2C2C;\n    text-align: center; }\n#contentId .content-container .bg-primary {\n    background: #E8F9FF; }\n#contentId .content-container .icon-style-second {\n    font-size: 30px;\n    color: #10CFBD; }\n#contentId .content-container .center-text {\n    text-align: center;\n    text-align-last: center; }\n#contentId .content-container .icon-style-third {\n    font-size: 30px;\n    color: #F77975; }\n#contentId .content-container .icon-style-fourth {\n    font-size: 30px;\n    color: #F8D053; }\n#contentId .content-container .row-paragraph {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    width: 300px;\n    font-size: 14px;\n    color: #0A7C71;\n    align-items: center;\n    line-height: 21px;\n    vertical-align: middle; }\n#contentId .content-container .row-paragraph-two {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    vertical-align: middle;\n    font-size: 14px;\n    width: 300px;\n    color: #626262;\n    text-align: center;\n    line-height: 21px; }\n#contentId .content-container table td {\n    text-align: center;\n    vertical-align: middle;\n    padding: 5px;\n    position: relative; }\n#contentId .content-container .tab-show {\n    display: none; }\n@media only screen and (max-width: 768px) {\n    #contentId .content-container .table-customs {\n      margin-top: 0px;\n      border-top: none; }\n      #contentId .content-container .table-customs .center-header {\n        text-align: center; }\n      #contentId .content-container .table-customs .text-format {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 16px;\n        color: #2C2C2C; }\n    #contentId .content-container .table-first-row {\n      background: #F2F2F2; }\n    #contentId .content-container .table-second-row {\n      background-color: #10CFBD;\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px;\n      color: #FFFFFF;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      padding-left: 30px;\n      padding-right: 30px;\n      text-align: center; }\n    #contentId .content-container .table-third-row {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px;\n      color: #FFFFFF;\n      text-align: center;\n      background: #F8D053;\n      border: 1px solid #E6E6E6; }\n    #contentId .content-container .first-row-font {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 14px;\n      background: rgba(243, 242, 248, 0.3);\n      color: #626262;\n      text-align: right; }\n    #contentId .content-container .second-row-font {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 20px;\n      color: #10CFBD;\n      text-align: center;\n      text-align-last: center; }\n    #contentId .content-container .third-row-font {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 20px;\n      color: #2C2C2C;\n      text-align: center; }\n    #contentId .content-container .bg-primary {\n      background: #E8F9FF; }\n    #contentId .content-container .icon-style-second {\n      font-size: 14px;\n      color: #10CFBD; }\n    #contentId .content-container .center-text {\n      text-align: center;\n      text-align-last: center; }\n    #contentId .content-container .icon-style-third {\n      font-size: 14px;\n      color: #F77975; }\n    #contentId .content-container .icon-style-fourth {\n      font-size: 14px;\n      color: #F8D053; }\n    #contentId .content-container .row-paragraph {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      width: 300px;\n      font-size: 14px;\n      color: #0A7C71;\n      align-items: center;\n      line-height: 21px;\n      vertical-align: middle; }\n    #contentId .content-container .row-paragraph-two {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      vertical-align: middle;\n      font-size: 14px;\n      width: 300px;\n      color: #626262;\n      text-align: center;\n      line-height: 21px; }\n    #contentId .content-container table td {\n      text-align: center;\n      vertical-align: middle;\n      padding: 5px;\n      position: relative; }\n    #contentId .content-container .table-show {\n      display: none; }\n    #contentId .content-container .tab-show {\n      display: block; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/comparison/comparison.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/comparison/comparison.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonComponent", function() { return ComparisonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComparisonComponent = /** @class */ (function () {
    function ComparisonComponent() {
        this.isCollapsed = false;
    }
    ComparisonComponent.prototype.ngOnInit = function () {
    };
    ComparisonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comparison',
            template: __webpack_require__(/*! ./comparison.component.html */ "./src/app/modules/main-app/pages/comparison/comparison.component.html"),
            styles: [__webpack_require__(/*! ./comparison.component.scss */ "./src/app/modules/main-app/pages/comparison/comparison.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComparisonComponent);
    return ComparisonComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/help-center/help-center.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/help-center/help-center.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\r\n  rel=\"stylesheet\"\r\n  href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\"\r\n  integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n\r\n<div class=\"help-main-background\">\r\n  <!-- Banner Section -->\r\n\r\n  <section id=\"help-headerId\">\r\n    <div class=\"help-header\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 header-left-text\">\r\n            <h3 class=\"header-title\">Help Center</h3>\r\n          </div>\r\n          <div class=\"col-md-6 header-right-text\">\r\n            <div class=\"header-input-margin\">\r\n              <div class=\"header-input\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-area\">\r\n                    <input [(ngModel)]=\"searchInput\" type=\"text\" placeholder=\"Search\" />\r\n                  </div>\r\n                  <div (click)=\"search(searchInput)\" class=\"input-group-icon\">\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"searchInput\" class=\"header-input-autocomplete\">\r\n                <ul>\r\n                  <li (click)=\"search(searchInput)\" *ngFor=\"let faq of (faqArray | filterFaq : searchInput)\">\r\n                    <div class=\"card\">\r\n                      <h4 class=\"card-header\">\r\n                        {{faq.Queries}}\r\n                      </h4>\r\n                      <div class=\"card-body\">\r\n                        {{faq.Answers}}\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Banner Section end -->\r\n\r\n  <!-- Content Section -->\r\n\r\n  <section id=\"help-contentId\">\r\n    <div class=\"content-container\">\r\n      <div class=\"container\">\r\n        <div class=\"content-container-main\">\r\n          <div *ngFor=\"let key of categoryKeys\">\r\n            <!-- ngFor -->\r\n            <div class=\"content-row\">\r\n              <h3 *ngIf=\"contentData[key]\" class=\"content-title\">{{ key }}</h3>\r\n              <div class=\"accordion-container\" >\r\n                <pg-collapseset Accordion=\"true\">\r\n                  <div *ngFor=\"let faq of contentData[key]\">\r\n                    <pg-collapse [Title]=\"faq.Queries\" class=\"collapse-container\">\r\n                      <p class=\"content-paragraph\">{{faq.Answers}}</p>\r\n                    </pg-collapse>\r\n                  </div>\r\n                  </pg-collapseset>\r\n                  <!-- <div id=\"wrapper\">\r\n                    <ul>\r\n                      <li>\r\n                        <input type=\"checkbox\" checked /> <i></i>\r\n                        <h2>{{ contentSection.contenTitle }}</h2>\r\n                        <p>{{ contentSection.contentBody }}</p>\r\n                      </li>\r\n                    </ul>\r\n                  </div> -->\r\n              </div>\r\n            </div>\r\n            <!--\r\n              <div class=\"card\">\r\n                  <div class=\"card-header pb-0\">\r\n                    <h3 class=\"category-content-title float-left\">Title here</h3>\r\n                    <i class=\"fas fa-plus-circle float-right title-icon\"></i>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"card-body pt-0\">\r\n                      <div class=\"category-content-container\">\r\n                        sample\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <div class=\"container\">\r\n    <!--\r\n      <div class=\"question-button\">\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        Got any Questions? Ask here\r\n      </button>\r\n    </div>-->\r\n\r\n  </div>\r\n\r\n  <!-- Content Section end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/help-center/help-center.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/help-center/help-center.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.help-main-background {\n  background-color: #f7f7f7; }\n.header-input-margin {\n  margin-top: 5.5%;\n  margin-bottom: 2.3%; }\n.help-header {\n  background-color: #FFFFFF;\n  height: 100px;\n  width: 100%; }\n.help-header .header-title {\n    color: #2C2C2C;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 23px;\n    padding-top: 3.8%;\n    padding-bottom: 2.3%;\n    padding-left: 7px; }\n.help-header .header-right-text {\n    text-align: right;\n    z-index: 100; }\n.help-header .header-left-text {\n    text-align: left; }\n.help-header .header-center-text {\n    text-align: center; }\n.help-header .header-input {\n    margin-left: 200px; }\n.help-header .header-input input[type=text],\n    .help-header .header-input select {\n      width: 100%;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      box-sizing: border-box; }\n.help-header .header-input .input-group {\n      display: table;\n      border-collapse: collapse;\n      width: 100%; }\n.help-header .header-input .input-group > div {\n      display: table-cell;\n      border-radius: 4px;\n      border: 1px solid #ddd;\n      vertical-align: middle;\n      /* needed for Safari */ }\n.help-header .header-input .input-group-icon {\n      background: #FFFFFF;\n      color: #777;\n      padding: 0 12px;\n      cursor: pointer; }\n.help-header .header-input .input-group-area {\n      width: 100%; }\n.help-header .header-input .input-group input {\n      border: 0;\n      display: block;\n      width: 100%;\n      padding: 8px; }\n.help-header .header-input-autocomplete ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      text-align: left;\n      max-height: 250px;\n      background-color: #fff;\n      overflow-y: scroll; }\n.help-header .header-input-autocomplete ul li {\n        cursor: pointer; }\n.help-header .header-input-autocomplete ul li .card-header {\n          padding: 0 20px;\n          font-size: 12px;\n          font-weight: bold;\n          min-height: 0; }\n.help-header .header-input-autocomplete ul li .card-body {\n          font-size: 12px; }\n.content-paragraph {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  line-height: 21px; }\n.collapse-container {\n  margin-top: 0.9%; }\n.collapse-container .card-body {\n    padding-top: 0; }\n:host ::ng-deep .collapse-container .card-body {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n#help-contentId {\n  margin-top: 35px;\n  margin-bottom: 39px; }\n.card > .card-header {\n  padding-top: 3px;\n  padding-bottom: 0; }\n.content-container {\n  margin-left: 7px; }\n.content-title {\n  font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n  font-size: 16px;\n  color: #2C2C2C; }\n.title-icon {\n  padding-top: 8px;\n  margin-top: 8px;\n  cursor: pointer; }\n.category-content-title {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n  font-size: 16px;\n  color: #626262; }\n.category-content-container {\n  padding-bottom: 27px; }\n.content-container-main {\n  margin-bottom: 39px; }\n.content-row {\n  margin-bottom: 33px; }\n.accordion-container #wrapper {\n  min-height: 0;\n  display: inline-block;\n  left: 50%;\n  margin: 10px 0;\n  position: relative;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  max-width: 100%;\n  width: 100%;\n  border-radius: 2px;\n  border: 1px solid #E6E6E6; }\n@media (max-width: 550px) {\n    .accordion-container #wrapper {\n      box-sizing: border-box;\n      -webkit-transform: translate(0, 0);\n              transform: translate(0, 0);\n      max-width: 100%;\n      min-height: 100%;\n      margin: 0;\n      left: 0; } }\n@media only screen and (max-width: 768px) {\n  .accordion-container #wrapper {\n    min-height: 0;\n    display: inline-block;\n    position: relative;\n    left: 50%;\n    margin: 8px 0;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n    max-width: 100%;\n    border-radius: 2px;\n    border: 1px solid #E6E6E6; } }\n.accordion-container h1,\n.accordion-container h2 {\n  color: black; }\n.accordion-container h1 {\n  margin: 10% auto 0;\n  text-transform: uppercase;\n  font-size: 36px;\n  line-height: 42px;\n  letter-spacing: 3px;\n  font-weight: 100;\n  text-align: center;\n  display: table;\n  padding: 10px 0;\n  font-weight: bolder;\n  border-bottom: 2px solid #000; }\n.accordion-container h2 {\n  font-size: 16px;\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n  margin: 0;\n  cursor: pointer;\n  color: #626262; }\n@media only screen and (max-width: 768px) {\n  .accordion-container h2 {\n    font-size: 16px;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    margin: 0;\n    width: 250px;\n    cursor: pointer;\n    color: #626262; } }\n.accordion-container p {\n  font-size: 14px;\n  line-height: 26px;\n  letter-spacing: 1px;\n  position: relative;\n  overflow: hidden;\n  max-height: 800px;\n  opacity: 1;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  margin-top: 0px;\n  padding-right: 60px;\n  z-index: 2;\n  transition: all 500ms ease; }\n.accordion-container p,\n.accordion-container ul li i:before,\n.accordion-container ul li i:after {\n  transition: all 0.25s ease-in-out; }\n.accordion-container ul {\n  list-style: none;\n  padding: 0;\n  padding: 15px 15px 10px 20px;\n  margin: 0; }\n.accordion-container ul li {\n    position: relative;\n    padding: 0;\n    margin: 0;\n    border-top: 1px dotted #dce7eb; }\n.accordion-container ul li .icon-circle-plus {\n      position: absolute;\n      -webkit-transform: translate(-6px, 0);\n              transform: translate(-6px, 0);\n      margin-top: 10px;\n      padding-right: 35px;\n      right: 0; }\n.accordion-container ul li i {\n      position: absolute;\n      -webkit-transform: translate(-6px, 0);\n              transform: translate(-6px, 0);\n      margin-top: 9px;\n      padding-right: 35px;\n      right: 0; }\n.accordion-container ul li i:before, .accordion-container ul li i:after {\n        content: \"\";\n        position: absolute;\n        background-color: black;\n        width: 3px;\n        height: 16px; }\n.accordion-container ul li i:before {\n        -webkit-transform: translate(2px, 0) rotate(45deg);\n                transform: translate(2px, 0) rotate(45deg); }\n.accordion-container ul li i:after {\n        -webkit-transform: translate(2px, 0) rotate(-45deg);\n                transform: translate(2px, 0) rotate(-45deg); }\n.accordion-container ul li input[type=checkbox] {\n      position: absolute;\n      cursor: pointer;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      opacity: 0; }\n.accordion-container ul li input[type=checkbox]:checked ~ p {\n        margin-top: 0;\n        max-height: 0;\n        opacity: 0;\n        -webkit-transform: translate(0, 50%);\n                transform: translate(0, 50%); }\n.accordion-container ul li input[type=checkbox]:checked ~ i:before {\n        margin-top: 9px;\n        height: 9px;\n        -webkit-transform: translate(2px, 0) rotate(45deg);\n                transform: translate(2px, 0) rotate(45deg); }\n.accordion-container ul li input[type=checkbox]:checked ~ i:after {\n        margin-top: 9px;\n        height: 9px;\n        -webkit-transform: translate(-2px, 0) rotate(-45deg);\n                transform: translate(-2px, 0) rotate(-45deg); }\n@media only screen and (max-width: 768px) {\n  .accordion-container ul {\n    list-style: none;\n    padding: 0;\n    padding: 15px 15px 10px 20px;\n    margin: 0; }\n    .accordion-container ul li {\n      position: relative;\n      padding: 0;\n      margin: 0;\n      border-top: 1px dotted #dce7eb; }\n      .accordion-container ul li i {\n        position: absolute;\n        -webkit-transform: translate(-6px, 0);\n                transform: translate(-6px, 0);\n        margin-top: 9px;\n        padding-right: 15px;\n        right: 0; }\n        .accordion-container ul li i:before, .accordion-container ul li i:after {\n          content: \"\";\n          position: absolute;\n          background-color: black;\n          width: 3px;\n          height: 16px; }\n        .accordion-container ul li i:before {\n          -webkit-transform: translate(2px, 0) rotate(45deg);\n                  transform: translate(2px, 0) rotate(45deg); }\n        .accordion-container ul li i:after {\n          -webkit-transform: translate(2px, 0) rotate(-45deg);\n                  transform: translate(2px, 0) rotate(-45deg); }\n      .accordion-container ul li input[type=checkbox] {\n        position: absolute;\n        cursor: pointer;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        opacity: 0; }\n        .accordion-container ul li input[type=checkbox]:checked ~ p {\n          margin-top: 0;\n          max-height: 0;\n          opacity: 0;\n          -webkit-transform: translate(0, 50%);\n                  transform: translate(0, 50%); }\n        .accordion-container ul li input[type=checkbox]:checked ~ i:before {\n          margin-top: 9px;\n          height: 9px;\n          -webkit-transform: translate(2px, 0) rotate(45deg);\n                  transform: translate(2px, 0) rotate(45deg); }\n        .accordion-container ul li input[type=checkbox]:checked ~ i:after {\n          margin-top: 9px;\n          height: 9px;\n          -webkit-transform: translate(-2px, 0) rotate(-45deg);\n                  transform: translate(-2px, 0) rotate(-45deg); } }\n.accordion-container ul li:nth-of-type(1) {\n  border-top: none;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n.accordion-container ul li:nth-of-type(2) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s; }\n.accordion-container ul li:nth-of-type(3) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n.accordion-container ul li:last-of-type {\n  padding-bottom: 0; }\n.accordion-container li {\n  -webkit-animation: bounceInUp 1s ease both;\n          animation: bounceInUp 1s ease both; }\n@-webkit-keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px); }\n  80% {\n    -webkit-transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n            transform: translateY(2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  80% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n.question-button {\n  text-align: center;\n  margin-bottom: 80px; }\n.question-button .btn-primary {\n    background: #10CFBD;\n    border-color: #10CFBD;\n    width: 300px;\n    height: 50px;\n    border-radius: 4px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #FFFFFF;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n  .header-input-margin {\n    margin-top: 2%;\n    margin-bottom: 2.3%; }\n  .help-header {\n    background-color: #FFFFFF;\n    height: 100px;\n    width: 100%; }\n    .help-header .header-title {\n      color: #2C2C2C;\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 23px;\n      padding-top: 1.5%;\n      padding-bottom: 2.3%;\n      padding-left: 0px; }\n    .help-header .header-right-text {\n      text-align: left; }\n    .help-header .header-left-text {\n      text-align: left; }\n    .help-header .header-center-text {\n      text-align: center; }\n    .help-header .header-input {\n      margin-left: 0px; }\n      .help-header .header-input input[type=text],\n      .help-header .header-input select {\n        width: 100%;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        box-sizing: border-box; }\n      .help-header .header-input .input-group {\n        display: table;\n        border-collapse: collapse;\n        width: 100%; }\n      .help-header .header-input .input-group > div {\n        display: table-cell;\n        border-radius: 4px;\n        border: 1px solid #ddd;\n        vertical-align: middle;\n        /* needed for Safari */ }\n      .help-header .header-input .input-group-icon {\n        background: #FFFFFF;\n        color: #777;\n        padding: 0 12px; }\n      .help-header .header-input .input-group-area {\n        width: 100%; }\n      .help-header .header-input .input-group input {\n        border: 0;\n        display: block;\n        width: 100%;\n        padding: 8px; }\n  #help-contentId {\n    margin-top: 35px; }\n  .card > .card-header {\n    padding-top: 3px; }\n  .content-container {\n    margin-left: 0px; }\n  .content-title {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #2C2C2C; }\n  .title-icon {\n    padding-top: 8px;\n    margin-top: 8px; }\n  .category-content-title {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #626262; }\n  .category-content-container {\n    padding-bottom: 27px; }\n  .question-button {\n    margin-bottom: 80px; }\n    .question-button .btn-primary {\n      background: #10CFBD;\n      border-color: #10CFBD;\n      width: 100%;\n      height: 50px;\n      border-radius: 4px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/help-center/help-center.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/help-center/help-center.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HelpCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterComponent", function() { return HelpCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var assets_data_faq_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/data/faq.json */ "./src/assets/data/faq.json");
var assets_data_faq_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/data/faq.json */ "./src/assets/data/faq.json", 1);
/* harmony import */ var app_shared_utilities_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/utilities/groupBy */ "./src/app/shared/utilities/groupBy.ts");
/* harmony import */ var _pipes_FilterFaq_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/FilterFaq.pipe */ "./src/app/modules/main-app/pages/help-center/pipes/FilterFaq.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpCenterComponent = /** @class */ (function () {
    function HelpCenterComponent(filterFaq) {
        this.filterFaq = filterFaq;
        this.contentData = Object(app_shared_utilities_groupBy__WEBPACK_IMPORTED_MODULE_2__["default"])(assets_data_faq_json__WEBPACK_IMPORTED_MODULE_1__, 'Category');
        this.categoryKeys = Object.keys(this.contentData);
        this.faqArray = assets_data_faq_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    HelpCenterComponent.prototype.search = function (keyword) {
        var rawResult = this.filterFaq.transform(assets_data_faq_json__WEBPACK_IMPORTED_MODULE_1__, keyword);
        this.contentData = Object(app_shared_utilities_groupBy__WEBPACK_IMPORTED_MODULE_2__["default"])(rawResult, 'Category');
        this.searchInput = null;
    };
    HelpCenterComponent.prototype.ngOnInit = function () {
    };
    HelpCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help-center',
            template: __webpack_require__(/*! ./help-center.component.html */ "./src/app/modules/main-app/pages/help-center/help-center.component.html"),
            styles: [__webpack_require__(/*! ./help-center.component.scss */ "./src/app/modules/main-app/pages/help-center/help-center.component.scss")],
            providers: [_pipes_FilterFaq_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterFaq"]],
        }),
        __metadata("design:paramtypes", [_pipes_FilterFaq_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterFaq"]])
    ], HelpCenterComponent);
    return HelpCenterComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/help-center/pipes/FilterFaq.pipe.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/help-center/pipes/FilterFaq.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: FilterFaq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFaq", function() { return FilterFaq; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterFaq = /** @class */ (function () {
    function FilterFaq() {
    }
    FilterFaq.prototype.transform = function (items, searchInput) {
        var options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "Category",
                "Queries",
                "Answers"
            ]
        };
        var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1__(items, options);
        return searchInput ? fuse.search(searchInput.toLowerCase()) : [];
    };
    FilterFaq = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterFaq',
        })
    ], FilterFaq);
    return FilterFaq;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/home/home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/main-app/pages/home/home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <section class=\"banner\">\r\n    <div class=\"container\">\r\n      <h3>Now everyone can <strong>own</strong> a part of paradise</h3>\r\n      <p>\r\n        We’ve made it easy for everyone to be a part owner of an income\r\n        producing property. With our platform you can buy and sell parts of an\r\n        operating short stay rental, enjoy the rental returns and potential long\r\n        term capital gains.\r\n      </p>\r\n      <button\r\n        class=\"btn btn-success btn-cons sign-up\"\r\n        routerLink=\"/app/properties\"\r\n      >\r\n        View Properties\r\n      </button>\r\n      <button\r\n        class=\"btn btn-cons watch\"\r\n        (click)=\"toggleVideo()\">\r\n        <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i> Watch our video\r\n      </button>\r\n    </div>\r\n    <div [@openClose] class=\"video-overlay d-flex align-items-start align-items-md-center\" *ngIf=\"isWatching\">\r\n      <div class=\"video container mt-5 pt-5 mt-sm-0 pt-sm-0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 m-auto mt-5 mt-md-0\">\r\n            <div class=\"close-button text-right\">\r\n              <button (click)=\"toggleVideo()\" class=\"video-overlay-btn\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i> <span>Close</span></button>\r\n            </div>\r\n            <div class=\"embed-responsive embed-responsive-21by9\">\r\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/M6Elvbi5pjE?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n            </div>\r\n            </div>\r\n        </div>\r\n      </div>       \r\n    </div>\r\n    <img\r\n      src=\"assets/img/home/home_banner_sm.png\"\r\n      style=\"width:100%;\"\r\n      class=\"d-block d-md-none\"\r\n      alt=\"\"\r\n    />\r\n  </section>\r\n\r\n  <section class=\"how-does-it-work\">\r\n    <div class=\"container\">\r\n      <h3>How Does It Work?</h3>\r\n      <p>\r\n        Earn rental income and capital growth from your parts of vacation rental\r\n        properties\r\n      </p>\r\n      <div class=\"work-list\">\r\n        <div class=\"list-box\">\r\n          <img src=\"assets/img/home/Buy-icon.svg\" alt=\"\" />\r\n          <h4>Buy Parts</h4>\r\n          <p>Choose from one or more properties from $50</p>\r\n        </div>\r\n        <div class=\"list-box\">\r\n          <img src=\"assets/img/home/Rental-icon.svg\" alt=\"\" />\r\n          <h4>Nightly Rental Income</h4>\r\n          <p>We run the property, you collect the income</p>\r\n        </div>\r\n        <div class=\"list-box\">\r\n          <img src=\"assets/img/home/Grow-icon.svg\" alt=\"\" />\r\n          <h4>Watch it Grow</h4>\r\n          <p>Receive capital growth when you sell</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button routerLink=\"/app/how\" class=\"read-more btn btn-success btn-cons\">Read More</button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"our-newest-property\">\r\n    <div class=\"container\">\r\n      <h3>Our Newest Property</h3>\r\n      <p>\r\n        This property has been recently acquired and still under renovation.\r\n        This property is expected to be listed on the platform on 1 February\r\n        2019.\r\n      </p>\r\n      <p class=\"title\">Palmetto Place, Exuma, Bahamas</p>\r\n      <div class=\"icons\">\r\n        <ul>\r\n          <li>\r\n            <span\r\n              ><img src=\"assets/img/home/home2.svg\" alt=\"\" />&nbsp; House</span\r\n            >\r\n          </li>\r\n          <li>\r\n            <span\r\n              ><img src=\"assets/img/home/bed-icon.svg\" alt=\"\" />&nbsp; 3\r\n              Beds</span\r\n            >\r\n          </li>\r\n          <li>\r\n            <span\r\n              ><img src=\"assets/img/home/bath-icon.svg\" alt=\"\" />&nbsp; 2\r\n              Baths</span\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"row\">\r\n        <img class=\"col-md-6 left\" src=\"assets/img/home/Projected1.jpg\" alt=\"\" />\r\n        <div class=\"col-md-6 right\">\r\n          <img src=\"assets/img/home/Projected2.jpg\" alt=\"\" class=\"col-sm-12 top\" />\r\n          <img src=\"assets/img/home/Projected3.jpg\" alt=\"\" class=\"col-sm-6 bottom\" />\r\n          <img src=\"assets/img/home/Projected4.jpg\" alt=\"\" class=\"col-sm-6 bottom\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"marketplace\">\r\n    <div class=\"container\">\r\n      <h3>Our Marketplace Platform</h3>\r\n      <p class=\"title\">Buy or Sell property parts</p>\r\n      <p class=\"content\">\r\n        Our platform helps you to buy / sell shares (we call them parts) in\r\n        properties in just minutes.\r\n      </p>\r\n      <button routerLink=\"/app/marketplace\" class=\"btn btn-white btn-cons\">Read More</button>\r\n      <img src=\"assets/img/home/platform.png\" alt=\"\" />\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"return\">\r\n    <div class=\"container\">\r\n      <h3>How Do I Make a Return?</h3>\r\n      <p>\r\n        Earn rental income and capital growth from your parts of vacation rental\r\n        properties\r\n      </p>\r\n\r\n      <div class=\"row return-sliders\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"slider-box\">\r\n            <p>Investment Amount</p>\r\n            *Move to change values\r\n            <pg-slider\r\n              [TipFormatter]=\"amountFormat\"\r\n              [DefaultValue]=\"amount\"\r\n              [(ngModel)]=\"amount\"\r\n              [Max]=\"20000\"\r\n              [Min]=\"100\"\r\n              Tooltip=\"true\"\r\n              [Color]=\"'primary'\"\r\n              [Step]=\"100\"\r\n              (OnAfterChange)=\"getData()\"\r\n              TooltipForceVisiblity=\"true\"\r\n            ></pg-slider>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"slider-box\">\r\n            <p>Estimated Returns</p>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                Rental Income\r\n                <span class=\"d-block d-md-none sm-rate\">{{ income }}%</span>\r\n                <div class=\"row\">\r\n                  <pg-slider\r\n                    [TipFormatter]=\"incomeFormat\"\r\n                    [DefaultValue]=\"7.5\"\r\n                    [Color]=\"'success'\"\r\n                    [Max]=\"10\"\r\n                    [Min]=\"1\"\r\n                    [Step]=\"0.1\"\r\n                    [(ngModel)]=\"income\"\r\n                    (OnAfterChange)=\"getData()\"\r\n                    class=\"col-md-8\"\r\n                  ></pg-slider>\r\n                  <p class=\"d-none d-md-block\">{{ income }}%</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                Capital Growth\r\n                <span class=\"d-block d-md-none sm-rate\">{{ capital }}%</span>\r\n                <div class=\"row\">\r\n                  <pg-slider\r\n                    [TipFormatter]=\"capitalFormat\"\r\n                    [DefaultValue]=\"3\"\r\n                    [Color]=\"'success'\"\r\n                    [Max]=\"10\"\r\n                    [Min]=\"1\"\r\n                    [Step]=\"0.1\"\r\n                    [(ngModel)]=\"capital\"\r\n                    (OnAfterChange)=\"getData()\"\r\n                    class=\"col-md-8\"\r\n                  ></pg-slider>\r\n                  <p class=\"d-none d-md-block\">{{ capital }}%</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"canvas-wrapper d-none d-md-block\">\r\n        <div class=\"absolute-wrapper\">\r\n          <p>Total Return <span class=\"returns-font\">(after 10 years)</span></p>\r\n          <div class=\"flex-wrapper\">\r\n            <div class=\"capital\">\r\n              <p class=\"lbl\">Projected Capital Value</p>\r\n              <p class=\"value\">{{ capitalValue | currency }}</p>\r\n            </div>\r\n            <div><img src=\"assets/img/home/Plus.svg\" alt=\"\" /></div>\r\n            <div class=\"rental\">\r\n              <p class=\"lbl\">Rental Income</p>\r\n              <p class=\"value\">{{ incomeValue | currency }}</p>\r\n            </div>\r\n            <div><img src=\"assets/img/home/Equals.svg\" alt=\"\" /></div>\r\n            <div class=\"total\">\r\n              <p class=\"lbl\">Total (+{{ gain | currency }})</p>\r\n              <p class=\"value\">{{ totalValue | currency }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <canvas\r\n          #myCanvas\r\n          baseChart\r\n          [datasets]=\"lineChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"\r\n        ></canvas>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-block d-md-none total-sm\">\r\n      <h3>Total Return <span class=\"returns-font\">(after 10 years)</span></h3>\r\n      <div class=\"capital\">\r\n        <p>Projected Capital Value</p>\r\n        <h3>{{ capitalValue | currency }}</h3>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <img src=\"assets/img/home/Plus.svg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"rental\">\r\n        <p>Rental Income</p>\r\n        <h3>{{ incomeValue | currency }}</h3>\r\n      </div>\r\n      <hr />\r\n      <div class=\"total\">\r\n        <p>Total Returns (+{{ gain | currency }})</p>\r\n        <h3>{{ totalValue | currency }}</h3>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"check-out\">\r\n    <div class=\"container\">\r\n      <h3>Check out our Properties</h3>\r\n      <p>\r\n        View the selection of all available properties in the Bahamas & Cayman Islands\r\n      </p>\r\n      <button class=\"btn btn-success btn-cons\" routerLink=\"/app/properties\">\r\n        View All\r\n      </button>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/home/home.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/main-app/pages/home/home.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.home-container {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n.home-container .returns-font {\n    font-size: 10px !important; }\n.home-container section.banner {\n    background-image: url(\"/assets/img/home/home_banner.png\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n    position: relative;\n    padding-bottom: 261px; }\n.home-container section.banner h3 {\n      font-family: \"helveticalight\", Arial, \"Lucida Grande\", sans-serif;\n      margin: 0;\n      padding-top: 159px;\n      width: 544px;\n      font-size: 50px;\n      color: #fff;\n      line-height: 55px; }\n.home-container section.banner h3 strong {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.home-container section.banner p {\n      margin-top: 28px;\n      width: 530px;\n      font-size: 18px;\n      line-height: 24px;\n      color: #fff; }\n.home-container section.banner button {\n      margin-top: 50px;\n      border: none;\n      border-radius: 4px;\n      width: 210px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      line-height: 19px;\n      padding: 15px; }\n.home-container section.banner button.watch {\n        background-color: transparent;\n        transition: background-color .5s ease-out;\n        -moz-transition: background-color .5s ease-out;\n        -webkit-transition: background-color .5s ease-out;\n        -o-transition: background-color .5s ease-out;\n        color: #fff;\n        box-shadow: 0 0 0 1px #fff inset; }\n@media (max-width: 575.98px) {\n          .home-container section.banner button.watch {\n            margin-top: 20px; } }\n.home-container section.banner button.watch:hover {\n          background-color: #10cfbd;\n          box-shadow: none; }\n.home-container section.banner button.watch:active {\n          font-size: 15px; }\n.home-container section.banner .video-overlay {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100% !important; }\n.home-container section.banner .video-overlay.ng-trigger-openClose {\n        background-color: rgba(0, 0, 0, 0.5); }\n.home-container section.banner .video-overlay.ng-trigger-openClose .video {\n          transition: -webkit-transform 1s;\n          transition: transform 1s;\n          transition: transform 1s, -webkit-transform 1s;\n          -webkit-transform: translateY(0px);\n                  transform: translateY(0px); }\n.home-container section.banner .video-overlay.ng-animating {\n        background-color: rgba(0, 0, 0, 0); }\n.home-container section.banner .video-overlay.ng-animating .video {\n          -webkit-transform: translateY(-20px);\n                  transform: translateY(-20px); }\n.home-container section.banner .video-overlay-btn {\n        margin: 0;\n        border: none;\n        background: none;\n        padding: 0;\n        width: auto;\n        cursor: pointer; }\n.home-container section.banner .video-overlay-btn span {\n          font-size: 13px;\n          margin-left: 5px;\n          margin-right: 5px; }\n.home-container section.how-does-it-work {\n    background-color: #fff;\n    text-align: center; }\n.home-container section.how-does-it-work .container h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      margin-top: 75px;\n      font-size: 30px;\n      line-height: 36px;\n      color: #2c2c2c; }\n.home-container section.how-does-it-work .container p {\n      font-size: 16px;\n      color: #626262;\n      line-height: 22px; }\n.home-container section.how-does-it-work .container .work-list {\n      margin-top: 45px;\n      display: flex; }\n.home-container section.how-does-it-work .container .work-list .list-box {\n        box-shadow: 0 0 15px 5px rgba(228, 228, 228, 0.5);\n        flex-grow: 1;\n        flex-basis: 0;\n        margin: 10px;\n        padding: 55px 35px; }\n.home-container section.how-does-it-work .container .work-list .list-box h4 {\n          font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n          margin-top: 25px;\n          font-size: 20px;\n          line-height: 27px;\n          color: #2c2c2c; }\n.home-container section.how-does-it-work .container .work-list .list-box p {\n          margin-top: 15px;\n          font-size: 16px;\n          color: #626262;\n          line-height: 24px; }\n.home-container section.how-does-it-work .container .read-more {\n      margin-top: 50px;\n      margin-bottom: 70px;\n      border: none;\n      border-radius: 4px;\n      width: 280px;\n      font-weight: bold;\n      font-size: 16px;\n      line-height: 19px;\n      padding: 15px; }\n.home-container section.our-newest-property {\n    background-color: #f9f9fc;\n    text-align: center;\n    padding-bottom: 111px; }\n.home-container section.our-newest-property h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      margin-top: 75px;\n      font-size: 30px;\n      line-height: 36px;\n      color: #2c2c2c; }\n.home-container section.our-newest-property p {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 22px;\n      color: #626262;\n      padding: 0 15%; }\n.home-container section.our-newest-property p.title {\n        margin-top: 35px;\n        font-size: 22px;\n        line-height: 26px;\n        color: #302a45;\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n.home-container section.our-newest-property .icons {\n      margin-top: 15px; }\n.home-container section.our-newest-property .icons ul {\n        padding: 0;\n        list-style-type: none;\n        display: inline-flex; }\n.home-container section.our-newest-property .icons ul li span {\n          background-color: #6580b6;\n          border-radius: 15px;\n          padding: 5px 35px;\n          color: #fff;\n          margin: 0 5px; }\n.home-container section.our-newest-property div.row {\n      margin-top: 35px; }\n.home-container section.our-newest-property div.row .left,\n      .home-container section.our-newest-property div.row .right {\n        height: 435px;\n        padding: 0; }\n.home-container section.our-newest-property div.row .left img.top,\n        .home-container section.our-newest-property div.row .right img.top {\n          height: 49%;\n          margin-bottom: 1%;\n          padding-right: 0; }\n.home-container section.our-newest-property div.row .left img.bottom,\n        .home-container section.our-newest-property div.row .right img.bottom {\n          height: 49%;\n          padding-right: 0;\n          margin-top: 1%; }\n.home-container section.marketplace {\n    background-image: url(\"/assets/img/home/platform_bg.jpg\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n    text-align: center;\n    color: #fff; }\n.home-container section.marketplace h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 30px;\n      line-height: 36px;\n      padding-top: 70px;\n      color: #fff; }\n.home-container section.marketplace p.title {\n      margin-top: 48px;\n      font-size: 25px;\n      line-height: 30px; }\n.home-container section.marketplace p.content {\n      font-size: 16px;\n      line-height: 22px; }\n.home-container section.marketplace button {\n      color: #10cfbd;\n      padding: 15px 35px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      line-height: 19px;\n      margin-bottom: 50px; }\n.home-container section.marketplace img {\n      width: 100%; }\n.home-container section.return {\n    background-clip: #fafafa; }\n.home-container section.return .container {\n      text-align: center; }\n.home-container section.return .container .canvas-wrapper {\n        background-color: #fff;\n        border: 1px solid rgba(230, 230, 230, 0.4);\n        padding: 50px 25px;\n        margin-top: 20px;\n        margin-bottom: 70px;\n        position: relative; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper {\n          position: absolute;\n          width: 50%;\n          text-align: left;\n          color: #626262;\n          background: #f9f9fc;\n          border: 1px solid rgba(230, 230, 230, 0.5);\n          padding: 20px;\n          top: 25px;\n          left: 30px; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper p {\n            font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n            font-size: 14px;\n            line-height: 14px;\n            margin: 0; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper {\n            display: flex;\n            flex-wrap: wrap;\n            margin-top: 15px; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div {\n              text-align: center;\n              flex-grow: 1; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div.capital {\n                background: #ffffff;\n                border: 1px solid rgba(230, 230, 230, 0.5);\n                border-left: 5px solid #8a7dbe;\n                border-radius: 2px;\n                padding: 10px 10px;\n                text-align: left; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div.rental {\n                background: #ffffff;\n                border: 1px solid rgba(230, 230, 230, 0.5);\n                border-left: 5px solid #48b0f7;\n                border-radius: 2px;\n                padding: 10px 10px;\n                text-align: left; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div.total {\n                background: #0dad9e;\n                box-shadow: 0 0 4px 1px rgba(193, 193, 193, 0.5);\n                border-radius: 2px;\n                padding: 10px 10px;\n                text-align: left; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div.total p {\n                  color: #fff; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div img {\n                color: #d8d8d8;\n                margin-top: 18px; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div p.lbl {\n                font-size: 11px;\n                line-height: 12px;\n                font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n.home-container section.return .container .canvas-wrapper .absolute-wrapper .flex-wrapper div p.value {\n                font-size: 16px;\n                line-height: 17px; }\n.home-container section.return .container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 30px;\n        line-height: 36px;\n        color: #2c2c2c;\n        margin-top: 95px;\n        margin-bottom: 21px; }\n.home-container section.return .container p {\n        font-size: 18px;\n        line-height: 24px;\n        color: #626262;\n        margin-bottom: 40px; }\n.home-container section.return .container .return-sliders .slider-box {\n        background-color: #fff;\n        border: 1px solid rgba(230, 230, 230, 0.4);\n        padding: 20px 20px 40px;\n        font-size: 11px;\n        color: #626262;\n        text-align: left; }\n.home-container section.return .container .return-sliders .slider-box p {\n          font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n          font-size: 16px;\n          line-height: 19px;\n          color: #626262; }\n.home-container section.check-out {\n    background-image: url(\"/assets/img/home/Bg_sm.jpg\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n.home-container section.check-out .container {\n      text-align: center;\n      padding: 65px 0; }\n.home-container section.check-out .container h3 {\n        font-size: 40px;\n        font-weight: bold;\n        line-height: 48px;\n        margin-bottom: 27px;\n        color: #fff; }\n.home-container section.check-out .container p {\n        font-size: 20px;\n        line-height: 30px;\n        color: #fff;\n        margin-bottom: 17px; }\n@media only screen and (max-width: 768px) {\n  section.banner {\n    background-color: #1a66a7;\n    background-image: none !important;\n    height: auto !important;\n    padding-bottom: 0 !important; }\n    section.banner .container {\n      text-align: center; }\n      section.banner .container h3 {\n        font-size: 30px !important;\n        line-height: 40px !important;\n        width: auto;\n        padding-top: 38px; }\n      section.banner .container p {\n        font-size: 14px;\n        line-height: 21px;\n        width: auto;\n        padding: 0 5%; }\n      section.banner .container button {\n        width: 100%;\n        margin-bottom: 0 !important; }\n  section.how-does-it-work {\n    background-color: #fff;\n    text-align: center; }\n    section.how-does-it-work .container h3 {\n      margin-top: 64px !important;\n      font-size: 22px;\n      line-height: 26px; }\n    section.how-does-it-work .container .work-list {\n      display: block !important;\n      margin-top: 55px !important; }\n      section.how-does-it-work .container .work-list .list-box {\n        margin-top: 15px !important; }\n      section.how-does-it-work .container .work-list h4 {\n        margin-top: 21px !important; }\n      section.how-does-it-work .container .work-list .add-border {\n        border-top: 2px solid #e6e6e6;\n        border-bottom: 2px solid #e6e6e6;\n        padding-top: 25px;\n        margin-bottom: 25px; }\n      section.how-does-it-work .container .work-list p {\n        margin-top: 11px !important;\n        padding: 0 16% 21px; }\n    section.how-does-it-work .container .read-more {\n      width: 94% !important; }\n  section.our-newest-property h3 {\n    text-align: center;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-weight: bold;\n    color: #fff;\n    margin-bottom: 30px; }\n  section.our-newest-property .icons ul li span {\n    padding: 5px 10px !important;\n    margin: 0 2px !important; }\n  section.our-newest-property .row {\n    margin: 0 !important; }\n    section.our-newest-property .row .left {\n      height: 50% !important;\n      padding-left: 15px !important;\n      padding-right: 15px !important; }\n    section.our-newest-property .row .right {\n      height: 50% !important;\n      margin-top: 10px !important; }\n      section.our-newest-property .row .right img.top {\n        padding-right: 15px !important; }\n      section.our-newest-property .row .right img.bottom {\n        max-width: 50% !important;\n        padding-right: 15px !important;\n        height: 145px !important; }\n        section.our-newest-property .row .right img.bottom:last-child {\n          padding-left: 5px; }\n        section.our-newest-property .row .right img.bottom:first-child {\n          padding-right: 5px; }\n  section.return .container h3 {\n    font-size: 22px !important;\n    line-height: 26px; }\n  section.return .container .return-sliders .sm-rate {\n    float: right;\n    font-size: 16px;\n    line-height: 19px;\n    color: #626262;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n  section.return .container .return-sliders .slider-box:last-child {\n    margin-top: 20px !important; }\n    section.return .container .return-sliders .slider-box:last-child div.col-md-6:last-child {\n      margin-top: 20px !important; }\n  section.return .total-sm {\n    background-color: #fff;\n    padding: 50px 40px !important;\n    color: #626262; }\n    section.return .total-sm h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #626262; }\n    section.return .total-sm p {\n      font-size: 12px; }\n    section.return .total-sm div {\n      text-align: left; }\n      section.return .total-sm div img {\n        margin-top: 10px;\n        margin-bottom: 10px; }\n      section.return .total-sm div.capital {\n        background: #ffffff;\n        border: 1px solid rgba(230, 230, 230, 0.5);\n        border-left: 5px solid #8a7dbe;\n        border-radius: 2px;\n        padding: 10px 30px;\n        text-align: left; }\n        section.return .total-sm div.capital p {\n          margin: 0; }\n        section.return .total-sm div.capital h3 {\n          margin: 0; }\n      section.return .total-sm div.rental {\n        background: #ffffff;\n        border: 1px solid rgba(230, 230, 230, 0.5);\n        border-left: 5px solid #48b0f7;\n        border-radius: 2px;\n        padding: 10px 30px;\n        text-align: left; }\n        section.return .total-sm div.rental p {\n          margin: 0; }\n        section.return .total-sm div.rental h3 {\n          margin: 0; }\n      section.return .total-sm div.total {\n        background: #0dad9e;\n        box-shadow: 0 0 4px 1px rgba(193, 193, 193, 0.5);\n        border-radius: 2px;\n        padding: 10px 30px;\n        text-align: left; }\n        section.return .total-sm div.total p {\n          color: #fff;\n          margin: 0; }\n        section.return .total-sm div.total h3 {\n          color: #fff;\n          margin: 0; }\n  section.check-out h3 {\n    font-size: 20px !important;\n    line-height: 24px; }\n  section.check-out p {\n    font-size: 14px !important;\n    line-height: 18px;\n    padding-left: 5%;\n    padding-right: 5%; }\n  section.check-out button {\n    width: 90% !important;\n    font-size: 16px !important;\n    line-height: 19px;\n    padding: 15px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/main-app/pages/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.amount = 10000;
        this.income = 7.5;
        this.capital = 3;
        this.lineChartLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: this.gradient,
                borderColor: 'rgba(109, 92, 174, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: '#6D5CAE',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(109, 92, 174, .1)',
                pointRadius: 7,
                pointHoverRadius: 7
            },
            {
                backgroundColor: 'rgba(72, 176, 247, .2)',
                borderColor: 'rgba(72, 176, 247, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: 'rgba(72, 176, 247, 1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(72, 176, 247, 1)',
                pointRadius: 7,
                pointHoverRadius: 7
            }
        ];
        this.isWatching = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
        this.gradient = this.canvas.nativeElement
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 600);
        this.gradient.addColorStop(0, 'rgba(72, 176, 247, .6)');
        this.gradient.addColorStop(0.3, 'rgba(72, 176, 247, .3)');
        this.gradient.addColorStop(0.9, 'rgba(72, 176, 247, 0)');
        this.gradient2 = this.canvas.nativeElement
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 600);
        this.gradient2.addColorStop(0, 'rgba(138, 125, 190, .8)');
        this.gradient2.addColorStop(0.6, 'rgba(138, 125, 190, .5)');
        this.gradient2.addColorStop(0.9, 'rgba(138, 125, 190, 0)');
        this.lineChartColors = [
            {
                backgroundColor: this.gradient,
                borderColor: 'rgba(72, 176, 247, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: '#48B0F7',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(72, 176, 247, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            },
            {
                backgroundColor: this.gradient2,
                borderColor: 'rgba(138, 125, 190, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: 'rgba(138, 125, 190, 1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(138, 125, 190, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }
        ];
    };
    HomeComponent.prototype.amountFormat = function (params) {
        if (params) {
            this.amount = params;
            var a = '$' + params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return a + " Invested";
        }
    };
    HomeComponent.prototype.incomeFormat = function (params) {
        if (params) {
            this.income = params;
            return params;
        }
    };
    HomeComponent.prototype.capitalFormat = function (params) {
        if (params) {
            this.capital = params;
            return params;
        }
    };
    HomeComponent.prototype.getTotal = function (capital, income) {
        return Math.round((capital + income) * 100) / 100;
    };
    HomeComponent.prototype.getCapital = function (prevTotal, capital, capitalRate) {
        return Math.round((capital + prevTotal * capitalRate) * 100) / 100;
    };
    HomeComponent.prototype.getIncome = function (prevTotal, income, incomeRate) {
        return Math.round((income + prevTotal * incomeRate) * 100) / 100;
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.lineChartData = [
            { data: [0], label: 'Rental Income' },
            { data: [0], label: 'Capital Growth' }
        ];
        var a = this.lineChartLabels.map(function (value, index) {
            if (value) {
                if (value === 1) {
                    var newCapital = _this.getCapital(_this.amount, _this.amount, _this.capital / 100);
                    var newIncome = _this.getIncome(_this.amount, 0, _this.income / 100);
                    var newTotal = _this.getTotal(newCapital, newIncome);
                    _this.lineChartData[0].data.splice(0, 1, newTotal);
                    _this.lineChartData[1].data.splice(0, 1, newCapital);
                    return;
                }
                var newCapital2 = _this.getCapital(_this.lineChartData[0].data[index - 1], _this.lineChartData[1].data[index - 1], _this.capital / 100);
                var newIncome2 = _this.getIncome(_this.lineChartData[0].data[index - 1], _this.lineChartData[0].data[index - 1] -
                    _this.lineChartData[1].data[index - 1], _this.income / 100);
                var newTotal2 = _this.getTotal(newCapital2, newIncome2);
                _this.lineChartData[0].data.push(newTotal2);
                _this.lineChartData[1].data.push(newCapital2);
            }
        });
        this.capitalValue = this.lineChartData[1].data[this.lineChartData[1].data.length - 1];
        this.totalValue = this.lineChartData[0].data[this.lineChartData[0].data.length - 1];
        this.incomeValue =
            this.lineChartData[0].data[this.lineChartData[0].data.length - 1] -
                this.lineChartData[1].data[this.lineChartData[1].data.length - 1];
        this.gain = this.totalValue - this.amount;
        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [
                    {
                        position: 'right',
                        gridLines: {
                            drawTicks: false
                        },
                        ticks: {
                            beginAtZero: true,
                            padding: 20,
                            fontSize: 14,
                            fontFamily: 'Roboto',
                            callback: function (value, index, values) {
                                if (value) {
                                    return ('$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                                }
                            }
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        };
    };
    HomeComponent.prototype.toggleVideo = function () {
        this.isWatching = !this.isWatching;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "_chart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "canvas", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/main-app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/main-app/pages/home/home.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"how-container\">\r\n  <div class=\"banner\">\r\n    <div class=\"container\">\r\n      <h3>HOW DOES IT WORK</h3>\r\n      <p>\r\n        Not sure exactly how this all works? No problem, we will go through it\r\n        step by step <br class=\"d-none d-md-block\" />- its important to us that\r\n        you understand every detail.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h3>We buy suitable properties in the <strong>Caribbean.</strong></h3>\r\n        <p>\r\n          Our expert team spend time researching all of the available properties in appropriate Caribbean Markets to see which properties will get the best rental yield from Short Term rentals. \r\n        </p>\r\n        <p>\r\n          We use our research to guide our property selection and then negotiate to get the best purchase price available.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/how-does-it-work/1.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 d-none d-md-block\">\r\n        <img src=\"assets/img/how-does-it-work/2.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h3>KeyLobby get the property ready.</h3>\r\n        <p>\r\n          We use a Caribbean based property management company called KeyLobby. They take care of all renovation / setup work that needs to be undertaken, and then prepare the property to be listed as a Short Term Vacation rental.\r\n        </p>\r\n        <p>\r\n          The team at Keylobby will put the listing onto Airbnb, VRBO, and other sites and will maximise the listing in ever way to ensure a high rate & high occupancy.\r\n        </p>\r\n        <a target=\"_blank\" href=\"http://keylobby.com\" class=\"btn btn-success d-none d-md-block\">\r\n          Visit KeyLobby\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 d-block d-md-none\">\r\n        <img src=\"assets/img/how-does-it-work/2.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h3>The property is listed on our <strong>platform</strong></h3>\r\n        <p>\r\n          We provide you with every detail about the property. You will be able to read about the region, the suburb and past performance of rental property.\r\n        </p>\r\n        <p>Our platform will provide you with detailed income / expense projections and our yield projections for the particular property. Once a property is up and running, these will be updated with actual figures.</p>\r\n        <a href=\"/#/app/marketplace\" class=\"btn btn-success d-none d-md-block\">Read more</a>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/how-does-it-work/3.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 d-none d-md-block\">\r\n        <img src=\"assets/img/how-does-it-work/4.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h3>You receive <strong>income</strong> every month.</h3>\r\n        <p>\r\n          Each month we will compile financial accounts for the property to assess the income / expenses. \r\n        </p>\r\n        <p>\r\n          You will receive your share of the income (after expenses have been deducted) directly credited into your digital wallet within 15 days. You can choose to withdraw these funds or re-invest them into other properties\r\n        </p>\r\n        <a href=\"/#/app/returns\" class=\"btn btn-success d-none d-md-block\">Read more</a>\r\n      </div>\r\n      <div class=\"col-md-6 d-block d-md-none\">\r\n        <img src=\"assets/img/how-does-it-work/4.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h3><strong> Stay</strong> at the property</h3>\r\n        <p>\r\n          As a part owner you are able to book & stay at the property at a\r\n          discounted rate. This discounted rate is based on the normal rate less\r\n          the usual booking fees that would be incurred on other platforms. This\r\n          usually equates to an approximate 10% discount. Eligible owners will\r\n          also receive advanced booking access to be able to schedule their stay\r\n          prior to the booking period being available to the open market.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/how-does-it-work/5.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 d-none d-md-block\">\r\n        <img src=\"assets/img/how-does-it-work/6.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h3>\r\n          <strong> Buy</strong> and <strong> Sell</strong> your parts anytime.\r\n        </h3>\r\n        <p>\r\n          Each month we will compile financial accounts for the property to\r\n          assess the income / expenses. You will receive your share of the\r\n          profit directly credited into your digital wallet. You can choose to\r\n          withdraw these funds or re-invest them in other properties\r\n        </p>\r\n        <button class=\"btn btn-success\">Signup now</button>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 d-block d-md-none\">\r\n        <img src=\"assets/img/how-does-it-work/6.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.how-container {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n.how-container .banner {\n    text-align: center;\n    color: #fff;\n    background-image: url(\"/assets/img/how-does-it-work/banner.png\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover; }\n.how-container .banner h3 {\n      margin: 0;\n      padding-top: 104px;\n      font-size: 40px;\n      line-height: 40px;\n      color: #fff;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.how-container .banner p {\n      padding-top: 20px;\n      padding-bottom: 70px;\n      font-size: 20px;\n      line-height: 30px; }\n.how-container .container .row {\n    margin-top: 100px; }\n.how-container .container .row em {\n      text-decoration: underline;\n      font-size: 18px;\n      font-synthesis: 21px; }\n.how-container .container .row h3 {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      color: #2c2c2c;\n      font-size: 28px;\n      line-height: 40px;\n      margin-top: 50px; }\n.how-container .container .row h3 strong {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.how-container .container .row p {\n      color: #626262;\n      font-size: 18px;\n      line-height: 27px;\n      margin-top: 20px; }\n.how-container .container .row button {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 19px;\n      padding: 15px 25px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.how-container .container .row:last-child {\n      margin-bottom: 50px; }\n@media only screen and (max-width: 768px) {\n  .how-container .banner .container {\n    padding: 0 6%; }\n  .how-container .banner h3 {\n    padding-top: 70px;\n    font-size: 20px;\n    line-height: 40px; }\n  .how-container .banner p {\n    font-size: 14px;\n    line-height: 20px; }\n  .how-container .container {\n    padding: 0 6%; }\n    .how-container .container .row {\n      text-align: center;\n      margin-top: 0px; }\n      .how-container .container .row img {\n        margin-top: 30px;\n        float: right; }\n      .how-container .container .row em {\n        font-size: 14px;\n        font-synthesis: 21px; }\n      .how-container .container .row h3 {\n        font-size: 22px;\n        line-height: 32px; }\n      .how-container .container .row p {\n        font-size: 14px;\n        line-height: 21px; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HowDoesItWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowDoesItWorkComponent", function() { return HowDoesItWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowDoesItWorkComponent = /** @class */ (function () {
    function HowDoesItWorkComponent() {
    }
    HowDoesItWorkComponent.prototype.ngOnInit = function () {
    };
    HowDoesItWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-does-it-work',
            template: __webpack_require__(/*! ./how-does-it-work.component.html */ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.html"),
            styles: [__webpack_require__(/*! ./how-does-it-work.component.scss */ "./src/app/modules/main-app/pages/how-does-it-work/how-does-it-work.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HowDoesItWorkComponent);
    return HowDoesItWorkComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/managed/managed.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/managed/managed.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\" integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\" crossorigin=\"anonymous\">\r\n\r\n<!-- Header Banner -->\r\n\r\n<section id=\"headerBannerId\">\r\n  <div class=\"header-banner-container\">\r\n    <div class=\"container\">\r\n      <h3>HOW IS THE PROPERTY MANAGED?</h3>\r\n      <p>\r\n        We use a local property management company to setup and manage every property. In this section we explain in detail what they do\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header Banner end -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <h3>Overview</h3>\r\n      <p>\r\n        Key Lobby has been operating as a short term property management business for almost 5 years, starting off with just a few propertieHs in the US & New Zealand and have since expanded quite quickly. We’re recently become the sole management company for Partbnb focusing on the Caribbean market.\r\n      </p>\r\n      <p>\r\n        Here at Key Lobby we pride ourselves on providing a fantastic service for not only our property owners but future guests and we find that in doing so, we get real satisfaction. Our aim at Key Lobby is to provide the best service we can to our clients. \r\n      </p>\r\n      <p>\r\n        Key Lobby have great testimonials from their clients which made our decision easy, check out their testimonial section on their website or talk to our team if you have any questions\r\n      </p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-occupancy-icon></app-occupancy-icon>\r\n                  <h3>Property Setup</h3>\r\n                  <p>\r\n                    It is essential that the property is setup to be suitable for short term accommodation. KeyLobby provides the full service, right from choosing the right furniture, door locks / keypads, monitoring equipment, to ordering of furniture/amenities and ensuring that each item is placed in the right areas throughout the house.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body card-guest-inquiries-padding\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-listing-icon></app-listing-icon>\r\n                  <h3>Guest Enquiries</h3>\r\n                  <p>\r\n                    A management company that is very good at turning enquiries into confirmed bookings is very important, KeyLobby are very good at converting even the most unlikely of general enquiries into complete bookings.\r\n                    <br />\r\n                    Managing bookings is one of the most time consuming tasks of running a short term rental, KeyLobby takes away this hassle for owners and with their great booking process to ensure no step is missed.                   \r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-checkin-icon></app-checkin-icon>\r\n                  <h3>During the stay</h3>\r\n                  <p>\r\n                    Responding to guest communications 24/7, KeyLobby is available when needed and respond quickly to any issues/queries via email or phone throughout the day/night.\r\n                    <br />\r\n                    Regular property visits / cleaning / maintenance. We have a local team of experts ready to deal with cleaning requests, regular maintenance issues and any unforseen problems.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body card-guest-listing-experts\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-listing-icon></app-listing-icon>\r\n                  <h3>card-guest-listing-experts</h3>\r\n                  <p>\r\n                    Having the property setup correctly online is crucial, if this is not done properly then the property won’t attract the attention it deserves. KeyLobby are experts at ensuring your property details are accurate, and attract attention from potential guests\r\n                    <br />\r\n                    Properties need to be accurately and continuously priced online throughout different seasons of the year to ensure that the property is generating great occupancy and returns for its owners, KeyLobby are pricing pros utilising the latest in technology from AirDNA to accurately price property listings\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"footerBannerId\">\r\n  <div class=\"bottom-banner\">\r\n    <div class=\"container\">\r\n      <h3>Visit Keylobby Website</h3>\r\n      <br />\r\n      <br />\r\n      <a href=\"https://keylobby.com\" class=\"btn btn-lg btn-success\">Click here to visit</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/managed/managed.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/managed/managed.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerBannerId .header-banner-container {\n  text-align: center;\n  color: #fff;\n  background-image: url('Header@2x.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#headerBannerId .header-banner-container h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 30px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container p {\n    padding-top: 20px;\n    padding-bottom: 70px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container .btn-primary {\n    background: #10CFBD;\n    border-color: #10CFBD;\n    border-radius: 4px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 90px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #FFFFFF;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n    #headerBannerId .header-banner-container .btn-primary {\n      background: #10CFBD;\n      border-color: #10CFBD;\n      border-radius: 4px;\n      padding-left: 50px;\n      padding-right: 50px;\n      padding-top: 15px;\n      padding-bottom: 15px;\n      margin-bottom: 90px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      text-align: center;\n      width: 100%; } }\n#contentId {\n  margin-top: 50px;\n  margin-bottom: 70px; }\n#contentId .center-text {\n    text-align: center; }\n#contentId .content-container {\n    margin-top: 50px; }\n#contentId .content-container h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 25px;\n      color: #2C2C2C;\n      padding-bottom: 40px; }\n#contentId .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    background-image: url(\"data:image/png;base64,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\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n#contentId .card .card-guest-inquiries-padding {\n      padding-bottom: 0px !important; }\n#contentId .card .card-guest-listing-experts {\n      padding-bottom: 0px !important;\n      padding-top: 0px !important; }\n#contentId .card .card-body-container {\n      margin-top: 40px;\n      margin-bottom: 70px; }\n#contentId .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 21px;\n        color: #2B303B;\n        text-align: center; }\n#contentId .card .card-body-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n#footerBannerId .bottom-banner {\n  padding-top: 10px;\n  padding-bottom: 80px;\n  text-align: center;\n  color: #fff;\n  background-image: url('Bg_sm.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#footerBannerId .bottom-banner h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 35px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner p {\n    padding-top: 20px;\n    padding-bottom: 5px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner .btn-primary {\n    background: #10CFBD;\n    border-color: #10CFBD;\n    border-radius: 4px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 90px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #FFFFFF;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n    #footerBannerId .bottom-banner .btn-primary {\n      background: #10CFBD;\n      border-color: #10CFBD;\n      border-radius: 4px;\n      padding-left: 50px;\n      padding-right: 50px;\n      padding-top: 15px;\n      padding-bottom: 15px;\n      margin-bottom: 90px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      text-align: center;\n      width: 100%; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/managed/managed.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/managed/managed.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManagedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedComponent", function() { return ManagedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagedComponent = /** @class */ (function () {
    function ManagedComponent() {
    }
    ManagedComponent.prototype.ngOnInit = function () {
    };
    ManagedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-managed',
            template: __webpack_require__(/*! ./managed.component.html */ "./src/app/modules/main-app/pages/managed/managed.component.html"),
            styles: [__webpack_require__(/*! ./managed.component.scss */ "./src/app/modules/main-app/pages/managed/managed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagedComponent);
    return ManagedComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/marketplace/marketplace.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/marketplace/marketplace.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\r\n  rel=\"stylesheet\"\r\n  href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\"\r\n  integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n\r\n<!-- Header Banner -->\r\n\r\n<section id=\"headerBannerId\">\r\n  <div class=\"header-banner-container\">\r\n    <div class=\"container\">\r\n      <h3>Our Platform</h3>\r\n      <p>\r\n        We have built a marketplace platform to give you all the information you need to feel confident in investing in a property.\r\n        <br />\r\n        <br />\r\n        Once you have created an account, you will be able to see your portfolio, buy & sell parts, download tax statements, book to stay in the property and much more\r\n      </p>\r\n      <img\r\n        src=\"../../../../../assets/marketplace/Laptop-image@2x.png\"\r\n        class=\"image-size\"\r\n      />\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header Banner end -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/1-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"\">\r\n            <div class=\"left-text\">\r\n\r\n              <h3 class=\"content-header\">\r\n                Easily view all information about a property\r\n              </h3>\r\n              <p class=\"paragraph-style\">\r\n                We provide you all of the information you need to make an\r\n                investment decision.\r\n              </p>\r\n              <div class=\"list-style\">\r\n                <ul>\r\n                  <li class=\"listParagraph\">Financial statements (performance to date / projections)</li>\r\n                  <li class=\"listParagraph\">Property Images, floor plans and video Walk throughs</li>\r\n                  <li class=\"listParagraph\">Location and information about the surrounding</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin image-mobile\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/2-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"center-text\">\r\n            <div class=\"left-text\">\r\n\r\n              <h3 class=\"content-header\">\r\n                Research the location with our guides\r\n              </h3>\r\n              <p class=\"paragraph-style\">\r\n                Our experts know the Caribbean well so we have done\r\n                all of the research tto ensure we only offer properties\r\n                that will perform well\r\n              </p>\r\n              <div class=\"list-style\">\r\n                <ul>\r\n                  <li class=\"listParagraph\">Region Occupancy Information</li>\r\n                  <li class=\"listParagraph\">Property price guidance</li>\r\n                  <li class=\"listParagraph\">Vacation Rental Occupancy & Pricing Information</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin image-desktop\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/2-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/3-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"\">\r\n            <div class=\"left-text\">\r\n              <h3 class=\"content-header\">View your portfolio</h3>\r\n              <p class=\"paragraph-style\">\r\n                Once you have purchased a property part you can review its\r\n                performance in your own account dashboard\r\n              </p>\r\n              <div class=\"list-style\">\r\n                <ul>\r\n                  <li class=\"listParagraph\">View Rental Income as its received</li>\r\n                  <li class=\"listParagraph\">Review any Capital Growth when it is re-valued</li>\r\n                  <li class=\"listParagraph\">View data per property, or your whole portfolio</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin image-mobile\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/4-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"center-text\">\r\n            <div class=\"left-text\">\r\n              <h3 class=\"content-header\">Buy & Sell Parts</h3>\r\n              <p class=\"paragraph-style\">\r\n                At any time you can purchase additional parts in a\r\n                property (if any are for re-sale) or sell your own parts\r\n                should you no longer want them\r\n              </p>\r\n              <div class=\"list-style\">\r\n                <ul>\r\n                  <li class=\"listParagraph\">View any parts for sale on tthe platform</li>\r\n                  <li class=\"listParagraph\">List your parts for sale on the platform</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin image-desktop\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/4-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/5-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin\">\r\n          <div class=\"\">\r\n            <div class=\"left-text\">\r\n              <h3 class=\"content-header\">Download Tax Statements</h3>\r\n              <p class=\"paragraph-style\">\r\n                Wee provide an easy to read breakdown of any income\r\n                that you may have received for your property\r\n                investments\r\n              </p>\r\n              <div class=\"list-style\">\r\n                <ul>\r\n                  <li class=\"listParagraph\">Download a PDF to view the breakdown</li>\r\n                  <li class=\"listParagraph\">\r\n                    Download an Excel Spreadsheet to import into an <br />\r\n                    accounting package\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin image-mobile\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/6-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin-custom\">\r\n          <div class=\"center-text\">\r\n            <div class=\"left-text\">\r\n              <h3 class=\"content-header\">Book to stay</h3>\r\n              <p class=\"paragraph-style\">\r\n                Remember as a valued owner you are entitled to early\r\n                booking and discounts on staying at the property\r\n              </p>\r\n              <div class=\" list-style\">\r\n                <ul>\r\n                  <li class=\"listParagraph\">Book any time (subject to availability)</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 content-margin image-desktop\">\r\n          <div class=\"center-text\">\r\n            <img\r\n              src=\"../../../../../assets/marketplace/6-img@2x.png\"\r\n              class=\"img-one-size\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"footerBannerId\">\r\n  <div class=\"bottom-banner\">\r\n    <div class=\"container\">\r\n      <h3>Still not sure?</h3>\r\n      <p>\r\n        Let us know what you need. Our team of experts are always ready to help.\r\n      </p>\r\n      <button class=\"btn btn-primary btn-lg\">Talk to Our Team</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/marketplace/marketplace.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/marketplace/marketplace.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerBannerId .header-banner-container {\n  text-align: center;\n  color: #fff;\n  background-image: url('Hero-bg@2x.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#headerBannerId .header-banner-container .image-size {\n    width: 900px; }\n#headerBannerId .header-banner-container h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 30px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container p {\n    padding-top: 20px;\n    padding-bottom: 70px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n@media only screen and (max-width: 768px) {\n  #headerBannerId .header-banner-container {\n    text-align: center;\n    color: #fff;\n    background-image: url('Hero-bg@2x.png');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n    #headerBannerId .header-banner-container .image-size {\n      width: 100%; }\n    #headerBannerId .header-banner-container h3 {\n      margin: 0;\n      padding-top: 104px;\n      font-size: 30px;\n      line-height: 40px;\n      color: #FFFFFF;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n    #headerBannerId .header-banner-container p {\n      padding-top: 20px;\n      padding-bottom: 70px;\n      font-size: 16px;\n      line-height: 24px;\n      color: #FFFFFF;\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; } }\n#contentId {\n  margin-top: 50px;\n  margin-bottom: 70px; }\n#contentId .center-text {\n    text-align: center; }\n#contentId .left-text {\n    text-align: left;\n    padding-left: 52px; }\n#contentId .right-text {\n    text-align: right; }\n#contentId .image-mobile {\n    display: none; }\n#contentId .image-desktop {\n    display: inline; }\n#contentId .content-container {\n    margin-top: 50px; }\n#contentId .content-container .content-margin {\n      margin-bottom: 150px; }\n#contentId .content-container .img-one-size {\n      width: 423px;\n      height: 323px; }\n#contentId .content-container .img-two-size {\n      width: 405px;\n      height: 323px; }\n#contentId .content-container .content-header {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 27px;\n      color: #2C2C2C;\n      line-height: 40px; }\n#contentId .content-container h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 27px;\n      color: #2C2C2C;\n      line-height: 40px; }\n#contentId .content-container p {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px;\n      color: #2C2C2C;\n      line-height: 27px; }\n#contentId .content-container ul {\n      list-style: none;\n      padding: 0; }\n#contentId .content-container li {\n      padding-left: 1.3em;\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px;\n      color: #626262;\n      line-height: 35px; }\n#contentId .content-container li:before {\n      content: \"\\f058\";\n      /* FontAwesome Unicode */\n      font-family: FontAwesome;\n      display: inline-block;\n      color: #10CFBD;\n      margin-left: -1.3em;\n      /* same as padding-left set on li */\n      width: 1.3em;\n      /* same as padding-left set on li */ }\n#contentId .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    width: 100%; }\n#contentId .card .card-body-container {\n      margin-top: 40px;\n      margin-bottom: 70px; }\n#contentId .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 21px;\n        color: #2B303B;\n        text-align: center; }\n#contentId .card .card-body-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n@media only screen and (max-width: 768px) {\n  #contentId {\n    margin-top: 50px;\n    margin-bottom: 70px; }\n    #contentId .left-text {\n      text-align: center;\n      text-align-last: center;\n      padding-left: 0px; }\n    #contentId .right-text {\n      text-align: right; }\n    #contentId .image-mobile {\n      display: inline; }\n    #contentId .image-desktop {\n      display: none; }\n    #contentId .content-container {\n      margin-top: 50px; }\n      #contentId .content-container .content-margin {\n        margin-bottom: 40px; }\n      #contentId .content-container .content-margin-custom {\n        margin-bottom: 5px; }\n      #contentId .content-container .img-one-size {\n        width: 100%;\n        height: 250px; }\n      #contentId .content-container .img-two-size {\n        width: 100%;\n        height: 323px; }\n      #contentId .content-container .content-header {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 20px;\n        color: #2C2C2C;\n        line-height: 1.6;\n        padding-bottom: 10px; }\n      #contentId .content-container .paragraph-style {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 15.5px;\n        color: #2C2C2C;\n        text-align: center;\n        text-align-last: center;\n        line-height: 1.6;\n        padding-bottom: 10px; }\n      #contentId .content-container .list-style {\n        text-align: left;\n        text-align-last: left; }\n        #contentId .content-container .list-style .listParagraph {\n          font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n          font-size: 13px;\n          color: #626262;\n          line-height: 1.6;\n          padding-bottom: 10px; }\n      #contentId .content-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 27px;\n        color: #2C2C2C;\n        line-height: 40px; }\n      #contentId .content-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 18px;\n        color: #2C2C2C;\n        line-height: 27px; }\n      #contentId .content-container ul {\n        list-style: none;\n        padding: 0; }\n      #contentId .content-container li {\n        padding-left: 1.3em;\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 18px;\n        color: #626262;\n        line-height: 35px; }\n      #contentId .content-container li:before {\n        content: \"\\f058\";\n        /* FontAwesome Unicode */\n        font-family: FontAwesome;\n        display: inline-block;\n        color: #10CFBD;\n        margin-left: -1.3em;\n        /* same as padding-left set on li */\n        width: 1.3em;\n        /* same as padding-left set on li */ }\n    #contentId .card {\n      box-shadow: 1px 1px 35px #CCCCCC;\n      width: 100%; }\n      #contentId .card .card-body-container {\n        margin-top: 40px;\n        margin-bottom: 70px; }\n        #contentId .card .card-body-container h3 {\n          font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n          font-size: 21px;\n          color: #2B303B;\n          text-align: center; }\n        #contentId .card .card-body-container p {\n          font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n          font-size: 14px;\n          color: #5C5C5C;\n          text-align: center;\n          line-height: 21px; } }\n#footerBannerId .bottom-banner {\n  padding-top: 10px;\n  text-align: center;\n  color: #fff;\n  background-image: url('Bg_sm.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#footerBannerId .bottom-banner h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 35px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner p {\n    padding-top: 20px;\n    padding-bottom: 5px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner .btn-primary {\n    background: #10CFBD;\n    border-color: #10CFBD;\n    border-radius: 4px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 90px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #FFFFFF;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n    #footerBannerId .bottom-banner .btn-primary {\n      background: #10CFBD;\n      border-color: #10CFBD;\n      border-radius: 4px;\n      padding-left: 50px;\n      padding-right: 50px;\n      padding-top: 15px;\n      padding-bottom: 15px;\n      margin-bottom: 90px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      text-align: center;\n      width: 100%; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/marketplace/marketplace.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/marketplace/marketplace.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MarketplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function() { return MarketplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketplaceComponent = /** @class */ (function () {
    function MarketplaceComponent() {
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
    };
    MarketplaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marketplace',
            template: __webpack_require__(/*! ./marketplace.component.html */ "./src/app/modules/main-app/pages/marketplace/marketplace.component.html"),
            styles: [__webpack_require__(/*! ./marketplace.component.scss */ "./src/app/modules/main-app/pages/marketplace/marketplace.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketplaceComponent);
    return MarketplaceComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/our-fees/our-fees.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/our-fees/our-fees.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header Banner -->\r\n\r\n<section id=\"headerBannerId\">\r\n  <div class=\"header-banner-container\">\r\n    <div class=\"container\">\r\n      <h3>OUR FEES</h3>\r\n      <p>\r\n        It is important to us that we are transparent on all fees / costs that are associated with the use of the Partbnb Platform. <br>\r\n        We would encourage you to contact the team for assistance if any of these fees are unclear or you have any questions\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header Banner end -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h3>Platform Fees</h3>\r\n          <div class=\"second-card\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"card-body-container\">\r\n                  <div class=\"center-text\">\r\n                    <h3>Buying / Selling of any Partbnb shares</h3>\r\n                    <h2 class=\"rate-header\">1.75%</h2>\r\n                    <p>\r\n                      if you are buying or selling parts on the platform, there\r\n                      will be a 1.75% transaction fee added to your order. For\r\n                      example, if you <br />\r\n                      are buying 10 parts at $33.00 then your total order is\r\n                      $330, and your transaction fee will be $5,78 ($330 *\r\n                      1.75%). The total <br />\r\n                      charged will be $335.78\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <h3>Other Costs / Fees to Consider</h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-keylobby-icon></app-keylobby-icon>\r\n                  <h3>Keylobby Property Development /<br /> Management</h3>\r\n                  <p>\r\n                    The company that manages the property(KeyLobby) charges a\r\n                    15%\r\n                    fee(on gross revenue) to manage the property. This cost is\r\n                    built into\r\n                    the financial projections / statements of all listed\r\n                    properties. <br /><br />\r\n                    During the development phase of the property, KeyLobby will\r\n                    charge\r\n                    a development fee to perform the aquisition of the property,\r\n                    \r\n                    renovation work and set up to list the property as a short\r\n                    term rental.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-ach-icon></app-ach-icon>\r\n                  <h3>ACH/Wire Transfer Fees</h3>\r\n                  <p class=\"card-bottom-second\">\r\n                    If you choose an ACH transfer there is a $5 transfer fee to\r\n                    send / receive funds (or 5% if under $100).\r\n                    <br />\r\n                    <br />\r\n                    Some banks will charge\r\n                    you a <br />\r\n                    fee to initiate a Wire Transfer to us (please check with\r\n                    your provider)\r\n                    <br />\r\n                    <br />\r\n                    If you have any questions in relations to fees or costs, please contact our team using Live Chat, or email us - team@partbnb.com \r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- <section id=\"footerBannerId\">\r\n  <div class=\"bottom-banner\">\r\n    <div class=\"container\">\r\n      <h3>Still not sure if this type of investment suits you?</h3>\r\n      <p>\r\n        Let us know what you need. Our team of experts are always on the go\r\n        helping you out!\r\n      </p>\r\n      <button class=\"btn btn-primary btn-lg\">Talk to Our Team</button>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/our-fees/our-fees.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/our-fees/our-fees.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerBannerId .header-banner-container {\n  text-align: center;\n  color: #fff;\n  background-image: url('header-banner.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#headerBannerId .header-banner-container h3 {\n    margin: 0;\n    padding-top: 80px;\n    font-size: 30px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container p {\n    padding-top: 20px;\n    opacity: 0.7;\n    padding-bottom: 100px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container .first-row-font {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #626262;\n    text-align: center; }\n#headerBannerId .header-banner-container .second-row-font {\n    text-align: center;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 25px;\n    color: #10CFBD; }\n#headerBannerId .header-banner-container .third-row-font {\n    text-align: center;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 25px;\n    color: #2C2C2C; }\n@media only screen and (max-width: 768px) {\n  #headerBannerId .header-banner-container {\n    background-position: left;\n    height: 300px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 5px;\n    padding-right: 5px; }\n  #headerBannerId h3 {\n    padding-top: 0px; }\n  #headerBannerId p {\n    padding-bottom: 0px; } }\n#contentId {\n  margin-top: 50px;\n  margin-bottom: 70px; }\n#contentId .center-text {\n    text-align: center; }\n#contentId .content-container {\n    margin-top: 50px; }\n#contentId .content-container h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 25px;\n      color: #2C2C2C;\n      padding-bottom: 10px; }\n#contentId .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    background-image: url(\"data:image/png;base64,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\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n#contentId .card .card-body-container {\n      margin-top: 20px;\n      margin-bottom: 30px; }\n#contentId .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 22px;\n        color: #2C2C2C;\n        text-align: center;\n        line-height: 24px; }\n#contentId .card .card-body-container .rate-header {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 30px;\n        padding-top: 5px;\n        color: #6D5CAE;\n        text-align: center; }\n#contentId .card .card-body-container p {\n        padding-top: 10px;\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n#contentId .card .card-body-container .card-bottom-second {\n        padding-bottom: 10px; }\n#contentId .second-card .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    background-image: url(\"data:image/png;base64,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\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n#contentId .second-card .card .card-body-container {\n      margin-top: 20px;\n      margin-bottom: 30px; }\n#contentId .second-card .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 22px;\n        color: #2C2C2C;\n        text-align: center;\n        line-height: 24px; }\n#contentId .second-card .card .card-body-container .rate-header {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 30px;\n        padding-top: 5px;\n        color: #6D5CAE;\n        text-align: center; }\n#contentId .second-card .card .card-body-container p {\n        padding-top: 10px;\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n#contentId .second-card .card .card-body-container .card-bottom-second {\n        padding-bottom: 90px; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/our-fees/our-fees.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/our-fees/our-fees.component.ts ***!
  \***********************************************************************/
/*! exports provided: OurFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurFeesComponent", function() { return OurFeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurFeesComponent = /** @class */ (function () {
    function OurFeesComponent() {
    }
    OurFeesComponent.prototype.ngOnInit = function () {
    };
    OurFeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-fees',
            template: __webpack_require__(/*! ./our-fees.component.html */ "./src/app/modules/main-app/pages/our-fees/our-fees.component.html"),
            styles: [__webpack_require__(/*! ./our-fees.component.scss */ "./src/app/modules/main-app/pages/our-fees/our-fees.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurFeesComponent);
    return OurFeesComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/properties/properties.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/properties/properties.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"properties-head-container\">\r\n  <div class=\"container\">\r\n    <div class=\"title\" [ngClass]=\"{ 'collapse-filter': filterCollapse }\">\r\n      <h2>View Properties</h2>\r\n    </div>\r\n    <icon-filter\r\n      class=\"svg-filter d-xl-none d-lg-none d-md-none d-block\"\r\n      (click)=\"toggleFilter()\"\r\n    ></icon-filter>\r\n    <div\r\n      class=\"properties-buttons-wrapper row collapse\"\r\n      [ngClass]=\"{ show: !filterCollapse }\"\r\n    >\r\n      <div class=\"button-col col-12 col-sm-12 col-md-5\">\r\n        <pg-select\r\n          class=\"button-col-item\"\r\n          [(ngModel)]=\"countrySortSelected\"\r\n          [PlaceHolder]=\"'Select Country'\"\r\n          (ngModelChange)=\"\r\n            updatePropertiesFilter(countrySortSelected, latestListingSelected)\r\n          \"\r\n        >\r\n          <pg-option\r\n            *ngFor=\"let option of countrySortOptions\"\r\n            [Label]=\"option.countryName\"\r\n            [Value]=\"option.countryId\"\r\n            [Disabled]=\"option.disabled\"\r\n          >\r\n          </pg-option>\r\n        </pg-select>\r\n      </div>\r\n      <div class=\"button-col col-6 col-sm-6 col-md-4\">\r\n        <pg-select\r\n          class=\"button-col-item\"\r\n          [(ngModel)]=\"latestListingSelected\"\r\n          [PlaceHolder]=\"'Latest Listing'\"\r\n          (ngModelChange)=\"\r\n            updatePropertiesFilter(countrySortSelected, latestListingSelected)\r\n          \"\r\n        >\r\n          <pg-option\r\n            *ngFor=\"let option of latestListingOptions\"\r\n            [Label]=\"option.label\"\r\n            [Value]=\"option.value\"\r\n            [Disabled]=\"option.disabled\"\r\n          >\r\n          </pg-option>\r\n        </pg-select>\r\n      </div>\r\n      <div class=\"button-col map-btn col-6 col-sm-6 col-md-3\">\r\n        <button\r\n          class=\"btn btn-cons button-col-item\"\r\n          (click)=\"mapClose = !mapClose\"\r\n          [ngClass]=\"{ 'btn-success': !mapClose }\"\r\n        >\r\n          <icon-eye *ngIf=\"mapClose\"></icon-eye>\r\n          <icon-eye-close *ngIf=\"!mapClose\"></icon-eye-close>\r\n          {{ mapClose ? 'Show' : 'Hide' }} Map\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"google-map-wrapper\" [ngClass]=\"mapClose ? 'map-close' : 'map-open'\">\r\n  <div class=\"container\" *ngIf=\"propertiesForMap\">\r\n    <google-map\r\n      [PropertyLocations]=\"propertiesForMap\"\r\n      [IsForPropertyDetails]=\"isForPropertyDetails\"\r\n    ></google-map>\r\n  </div>\r\n</div>\r\n<div class=\"properties-content\" [ngClass]=\"{ 'mt-2': !mapClose }\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div\r\n        class=\"col-lg-4 col-md-6 col-sm-12 col-12 property-card-wrapper\"\r\n        *ngFor=\"let property of properties\"\r\n      >\r\n        <div\r\n          class=\"property-card\"\r\n          [ngClass]=\"\r\n            isPropertyComingSoon(property.propertyListingTypeId)\r\n              ? 'coming-soon'\r\n              : 'TBC'\r\n          \"\r\n        >\r\n          <div\r\n            class=\"property-image\"\r\n            setImage=\"{{ property.mainImageUrl }}\"\r\n            (click)=\"getMeNotified()\"\r\n          >\r\n            <div\r\n              class=\"country-flag-wrapper\"\r\n              *ngIf=\"!isPropertyComingSoon(property.propertyListingTypeId)\"\r\n            >\r\n              <div class=\"country-flag\">\r\n                <img src=\"{{ baseUrl }}{{ property.flagImagePath }}\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class=\"coming-flag-wrapper\"\r\n            *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n          >\r\n            <div class=\"coming-flag\">\r\n              <icon-hour-glass class=\"icon-md\"></icon-hour-glass> Coming Soon...\r\n            </div>\r\n          </div>\r\n          <div class=\"property-details\">\r\n            <div class=\"property-name\">\r\n              <span\r\n                *ngIf=\"!isPropertyComingSoon(property.propertyListingTypeId)\"\r\n              >\r\n                <icon-fire class=\"mr-1 icon-md\"></icon-fire> Latest\r\n              </span>\r\n              <p>{{ property.propertyName }}</p>\r\n            </div>\r\n            <div class=\"row desc\">\r\n              <div class=\"col-4\">\r\n                <icon-home class=\"mr-2\"></icon-home>\r\n                <span>{{ property.propertyTypeName }}</span>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <icon-bed class=\"mr-2\"></icon-bed>\r\n                <span>{{ property.noOfBedrooms }} Beds</span>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <icon-bath class=\"mr-2 icon-md\"></icon-bath>\r\n                <span>{{ property.noOfBathrooms }} Baths</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"price\">\r\n              <label>\r\n                <span\r\n                  *ngIf=\"!isPropertyComingSoon(property.propertyListingTypeId)\"\r\n                >\r\n                  {{ property.propertyValue | currency: 'USD':'symbol':'1.0' }}\r\n                </span>\r\n                <span\r\n                  class=\"badge badge-secondary blank\"\r\n                  *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n                >\r\n                  blankblank\r\n                </span>\r\n              </label>\r\n              <label\r\n                *ngIf=\"!isPropertyPreOrder(property.propertyListingTypeId)\"\r\n              >\r\n                {{ property.percentFunded }}% Funded\r\n              </label>\r\n              <label *ngIf=\"isPropertyPreOrder(property.propertyListingTypeId)\">\r\n                In Pre-Order\r\n              </label>\r\n            </div>\r\n            <div class=\"btc-price\">\r\n              <label> Pre-Order Available Soon </label>\r\n            </div>\r\n            <div class=\"funds\">\r\n              <div class=\"flex\">\r\n                <div class=\"item\">\r\n                  <label>Net Rental Yield</label>\r\n                  <span>*Projected Returns</span>\r\n                </div>\r\n                <div class=\"item value\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      !isPropertyComingSoon(property.propertyListingTypeId)\r\n                    \"\r\n                  >\r\n                    TBC\r\n                    <!-- {{ property.netRentalYield | number: '.2-2' }}% -->\r\n                  </span>\r\n                  <span\r\n                    class=\"badge badge-secondary blank darker\"\r\n                    *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n                  >\r\n                    blanks\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex\">\r\n                <div class=\"item\">\r\n                  <label>Capital Return</label> <span>*Projected Returns</span>\r\n                </div>\r\n                <div class=\"item value\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      !isPropertyComingSoon(property.propertyListingTypeId)\r\n                    \"\r\n                  >\r\n                    TBC\r\n                    <!-- {{ property.capitalReturn | number: '.2-2' }}% -->\r\n                  </span>\r\n                  <span\r\n                    class=\"badge badge-secondary blank darker\"\r\n                    *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n                  >\r\n                    blank\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex\">\r\n                <div class=\"item centered\"><label>Part Price</label></div>\r\n                <div class=\"item value\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      !isPropertyComingSoon(property.propertyListingTypeId)\r\n                    \"\r\n                  >\r\n                    TBC\r\n                    <!-- ${{ property.pricePerPart | number: '.2-2' }} -->\r\n                  </span>\r\n                  <span\r\n                    class=\"badge badge-secondary blank darker\"\r\n                    *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n                  >\r\n                    blank\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"buttons\">\r\n              <button\r\n                class=\"btn btn-success btn-cons\"\r\n                (click)=\"getMeNotified()\"\r\n                [ngStyle]=\"{\r\n                  border: isPropertyComingSoon(property.propertyListingTypeId)\r\n                    ? 'none'\r\n                    : 'initial'\r\n                }\"\r\n                [disabled]=\"\r\n                  isPropertyComingSoon(property.propertyListingTypeId)\r\n                \"\r\n              >\r\n                {{\r\n                  isPropertyComingSoon(property.propertyListingTypeId)\r\n                    ? 'Pre-Order'\r\n                    : property.propertyListingTypeName\r\n                }}\r\n              </button>\r\n              <button\r\n                class=\"btn btn-success btn-cons view\"\r\n                (click)=\"viewDetails(property.propertyId)\"\r\n                [ngStyle]=\"{\r\n                  border: isPropertyComingSoon(property.propertyListingTypeId)\r\n                    ? 'none'\r\n                    : 'initial'\r\n                }\"\r\n                [disabled]=\"\r\n                  isPropertyComingSoon(property.propertyListingTypeId) || true\r\n                \"\r\n              >\r\n                View Details\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/properties/properties.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/properties/properties.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.properties-head-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  background-color: #fff; }\n.properties-head-container .svg-filter {\n    float: right;\n    position: relative;\n    top: 3px; }\n.properties-head-container .svg-filter svg {\n      width: 40px;\n      height: 40px; }\n.properties-head-container .container:first-child > .title {\n    float: left;\n    height: 100%;\n    align-items: center; }\n.properties-head-container .container:first-child > .title > h2 {\n      font-size: 24px;\n      font-weight: 400;\n      margin: 0; }\n.properties-head-container .container:first-child .properties-buttons-wrapper {\n    float: right;\n    height: 100%;\n    align-items: center;\n    min-width: 600px;\n    padding-right: 1em;\n    display: flex !important; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .button-col {\n      padding: 0; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .button-col > .pg-select {\n        width: 100%; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .map-btn {\n      padding-left: 5px; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .map-btn > button {\n        width: 100%;\n        line-height: 39px;\n        padding: 0; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > button {\n      height: 40px;\n      width: 125px;\n      color: #626262;\n      font-size: 14px;\n      border-radius: 2px;\n      margin: 0 9px; }\n@media (max-width: 426px) {\n    .properties-head-container .title {\n      float: initial; }\n    .properties-head-container .properties-buttons-wrapper {\n      margin-top: 15px;\n      margin-bottom: 20px;\n      padding: 0 11px;\n      width: 100vw;\n      display: inline-flex !important;\n      min-width: unset !important;\n      float: left !important; }\n      .properties-head-container .properties-buttons-wrapper .button-col {\n        padding: 0; }\n        .properties-head-container .properties-buttons-wrapper .button-col.map-btn {\n          padding-right: 5px !important; }\n        .properties-head-container .properties-buttons-wrapper .button-col-item,\n        .properties-head-container .properties-buttons-wrapper .button-col button {\n          width: 100%; }\n          .properties-head-container .properties-buttons-wrapper .button-col-item div,\n          .properties-head-container .properties-buttons-wrapper .button-col button div {\n            margin: 0; }\n        .properties-head-container .properties-buttons-wrapper .button-col:first-child {\n          margin-bottom: 10px; } }\n@media (max-width: 768px) {\n  .properties-head-container {\n    min-height: unset;\n    padding: 0.5em 0 0.5em 0; }\n    .properties-head-container .container:first-child .properties-buttons-wrapper {\n      width: 100%;\n      float: left;\n      padding: 0;\n      margin: 0;\n      margin-top: 0px;\n      display: flex;\n      min-width: unset; }\n      .properties-head-container .container:first-child .properties-buttons-wrapper.collapse {\n        transition: max-height 1s;\n        overflow: hidden;\n        max-height: 0; }\n        .properties-head-container .container:first-child .properties-buttons-wrapper.collapse.show {\n          max-height: 300px; }\n      .properties-head-container .container:first-child .properties-buttons-wrapper .button-col:first-child {\n        margin-bottom: 10px; } }\n@media (min-width: 427px) and (max-width: 768px) {\n  .properties-content .property-card-wrapper .property-card-header h4 {\n    font-size: 12px !important; }\n  .properties-content .property-card-wrapper .property-image > .property-type-row .property-type {\n    font-size: 9px !important; }\n  .properties-content .property-card-wrapper .property-image > .property-type-row > p {\n    font-size: 10px; }\n  .properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > div > p {\n    font-size: 9px !important; }\n  .properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > p {\n    font-size: 9px !important; }\n  .properties-content .property-card-wrapper .property-details > div > .property-percent-value {\n    width: 100%;\n    min-width: unset !important;\n    font-size: 14px !important; }\n  .properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:first-child {\n    width: 50%;\n    margin-left: -3px;\n    font-size: 12px;\n    padding: 0; }\n  .properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:last-child {\n    width: 50%;\n    margin: 0;\n    font-size: 12px;\n    padding: 0; } }\n@media (max-width: 426px) {\n  .google-map-wrapper > .container {\n    padding: 0; } }\n@media (min-width: 427px) and (max-width: 575px) {\n  .google-map-wrapper > .container {\n    padding: 0; } }\n@media (min-width: 769px) and (max-width: 991px) {\n  .properties-head-container .container:first-child .properties-buttons-wrapper {\n    min-width: 500px;\n    padding-right: 1.7em; }\n  .google-map-wrapper > .container {\n    padding: 0 1.2em; } }\n.properties-content {\n  margin-bottom: 50px; }\n.properties-content .property-card-wrapper {\n    padding-top: 1em;\n    padding-bottom: 1em; }\n.properties-content .property-card-wrapper .property-card {\n      width: 100%;\n      display: flow-root !important; }\n.properties-content .property-card-wrapper .property-card .property-card-header {\n        width: 100%;\n        background-color: #fff;\n        padding: 1em;\n        display: flex;\n        border: 1px solid #e6e6e6;\n        border-radius: 2px 2px 0 0; }\n.properties-content .property-card-wrapper .property-card .property-card-header .property-card-header-img {\n          max-width: 35px;\n          max-height: 35px;\n          overflow: hidden;\n          border-radius: 50px; }\n.properties-content .property-card-wrapper .property-card .property-card-header .property-card-header-img img {\n            width: 100%; }\n.properties-content .property-card-wrapper .property-card .property-card-header h4 {\n          font-size: 16px;\n          font-weight: 700;\n          margin: 0 0 0 0.7em; }\n.properties-content .property-card-wrapper .property-image {\n      position: relative;\n      width: 100%;\n      height: 205px !important;\n      background-size: cover !important;\n      cursor: pointer; }\n.properties-content .property-card-wrapper .property-image:before {\n        content: '';\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        opacity: 0.9;\n        height: 50%; }\n.properties-content .property-card-wrapper .property-image > .property-funded-percent-wrapper {\n        text-align: right;\n        padding: 0.5em; }\n.properties-content .property-card-wrapper .property-image > .property-funded-percent-wrapper > .property-funded-percent {\n          display: inline-flex;\n          color: #fff;\n          font-size: 11px;\n          border-radius: 2px;\n          justify-content: center;\n          align-items: center;\n          height: 22px;\n          min-width: 85px;\n          padding: 0.3em 0.5em; }\n.properties-content .property-card-wrapper .property-image > .property-type-row {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        padding: 0.5em; }\n.properties-content .property-card-wrapper .property-image > .property-type-row .property-type {\n          display: flex;\n          color: #fff;\n          font-size: 11px;\n          background-color: #48b0f7;\n          border-radius: 2px;\n          height: 22px;\n          justify-content: center;\n          align-items: center;\n          min-width: 60px;\n          padding: 0.3em 0.5em;\n          text-transform: uppercase; }\n.properties-content .property-card-wrapper .property-image > .property-type-row > p {\n          margin: 0;\n          padding: 0 0.8em;\n          color: #fff; }\n.properties-content .property-card-wrapper .property-image > .property-type-row > .vertical-line {\n          height: 14px;\n          border-right: 1px solid #fff; }\n.properties-content .property-card-wrapper .property-details {\n      width: 100%;\n      margin: 0;\n      background-color: #fff; }\n.properties-content .property-card-wrapper .property-details > div {\n        text-align: center;\n        padding: 0.8em;\n        border-right: 1px solid #e6e6e6;\n        border-bottom: 1px solid #e6e6e6;\n        color: #2c2c2c; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value-text {\n          min-height: 45px;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > div > p {\n            font-size: 11px;\n            margin: 0;\n            line-height: 1.5;\n            font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > p {\n            font-size: 11px;\n            margin: 0;\n            line-height: 1.5;\n            font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value {\n          min-width: 75px;\n          height: 40px;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          background: #f7f7f7;\n          font-size: 20px;\n          font-weight: 700;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-pre-order-section {\n      background-color: #fff;\n      text-align: center;\n      padding: 0.8em;\n      border: 1px solid #e6e6e6;\n      border-top: 0;\n      border-radius: 0 0 2px 2px; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper {\n        display: flex; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn {\n          flex-grow: 1; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:first-child {\n            margin-right: 5px; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:last-child {\n            margin-left: 5px; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .pre-order-btn {\n          height: 40px;\n          border: 0;\n          background: #6d5cae;\n          border-radius: 2px;\n          color: #fff;\n          font-size: 14px;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .view-details-btn {\n          height: 40px;\n          background: #fff;\n          border-radius: 2px;\n          color: #5e5e5e;\n          font-size: 14px;\n          border: 1px solid #e6e6e6;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper {\n        margin: 1em; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > div {\n          display: inline-flex;\n          justify-content: center;\n          align-items: center; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > div > i {\n            color: #f8d053;\n            font-size: 14px;\n            margin-right: 0.5em; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > div > p {\n            margin: 0;\n            font-size: 12px;\n            font-style: italic;\n            line-height: 12px;\n            color: #626262;\n            font-family: \"Roboto\", Arial, sans-serif;\n            text-align: left; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > p {\n          margin: 0;\n          font-size: 12px;\n          font-style: italic;\n          line-height: 12px;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.google-map-wrapper {\n  overflow-y: hidden;\n  margin: 0px 20px;\n  transition-property: all;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1); }\n.google-map-wrapper.map-close {\n  height: 0; }\n.google-map-wrapper.map-open {\n  height: 300px; }\n.properties-content .property-card {\n  background: #ffffff;\n  box-shadow: 0 0 8px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 5px; }\n.properties-content .property-card.coming-soon .property-image {\n    -webkit-filter: grayscale(100%);\n    /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n    cursor: unset; }\n.properties-content .property-card.coming-soon .property-details * {\n    cursor: unset;\n    opacity: 0.6; }\n.properties-content .property-card.coming-soon .property-details .price label,\n  .properties-content .property-card.coming-soon .property-details .btn {\n    background: #828282 !important;\n    color: #fff !important; }\n.properties-content .property-card.coming-soon .property-details .blank {\n    color: transparent;\n    height: 10px;\n    position: relative;\n    top: 3px;\n    background-color: #c1bfbf;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n.properties-content .property-card.coming-soon .property-details .blank.darker {\n      color: transparent;\n      background-color: #626262;\n      height: 12px; }\n.properties-content .property-card .property-details .btc-price {\n    display: none; }\n.properties-content .property-card.TBC .property-details .price {\n    display: none; }\n.properties-content .property-card.TBC .property-details .btc-price {\n    display: block;\n    margin-top: 15px;\n    text-align: left; }\n.properties-content .property-card.TBC .property-details .btc-price label {\n      background: #6580b6;\n      color: #fff;\n      border-radius: 2px;\n      padding: 7px 17px;\n      margin-right: 10px;\n      margin-bottom: 0;\n      font-size: 13px;\n      font-weight: bold; }\n.properties-content .property-card.TBC .property-details .funds .flex .item.value span {\n    font-size: 14px; }\n.properties-content .property-card.TBC .property-details .buttons .view {\n    cursor: not-allowed;\n    background: #828282 !important;\n    color: #fff !important; }\n.properties-content .property-card .property-image {\n    position: relative; }\n.properties-content .property-card .property-image > .country-flag-wrapper {\n      position: absolute;\n      bottom: 10px;\n      right: 10px; }\n.properties-content .property-card .property-image > .country-flag-wrapper > .country-flag {\n        width: 41px;\n        height: 41px;\n        border-radius: 50%;\n        background-color: #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n.properties-content .property-card .property-image > .country-flag-wrapper > .country-flag > img {\n          width: 35px;\n          height: 35px; }\n.properties-content .property-card .coming-flag-wrapper {\n    position: absolute;\n    left: 35px;\n    top: 180px; }\n.properties-content .property-card .coming-flag-wrapper > .coming-flag {\n      background-color: #48b0f7;\n      color: #fff;\n      padding: 3px 10px;\n      border-radius: 5px;\n      font-size: 11px;\n      display: inline-flex; }\n.properties-content .property-card .coming-flag-wrapper > .coming-flag > .icon-md {\n        padding-right: 3px; }\n.properties-content .property-card .property-details {\n    padding: 20px; }\n.properties-content .property-card .property-details div {\n      padding: 0;\n      border: 0; }\n.properties-content .property-card .property-details .property-name {\n      display: flex;\n      text-align: left; }\n.properties-content .property-card .property-details .property-name span {\n        display: flex;\n        background: #f55753;\n        border-radius: 2px;\n        padding: 2px 10px;\n        font-size: 12px;\n        color: #ffffff;\n        margin-right: 10px; }\n.properties-content .property-card .property-details .property-name p {\n        display: inline-block;\n        font-size: 20px;\n        color: #302a45;\n        line-height: 25px;\n        margin-bottom: 0;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; }\n.properties-content .property-card .property-details .desc {\n      margin-top: 15px; }\n.properties-content .property-card .property-details .desc div {\n        border-right: 1px solid #e6e6e6; }\n.properties-content .property-card .property-details .desc div:last-child {\n          border: 0; }\n.properties-content .property-card .property-details .desc div span {\n          font-size: 14px;\n          color: #2c2c2c; }\n.properties-content .property-card .property-details .price {\n      margin-top: 15px;\n      text-align: left; }\n.properties-content .property-card .property-details .price label {\n        background: #6580b6;\n        color: #fff;\n        border-radius: 2px;\n        padding: 7px 17px;\n        margin-right: 10px;\n        margin-bottom: 0;\n        font-size: 13px;\n        font-weight: bold; }\n.properties-content .property-card .property-details .price label:last-child {\n          margin-right: 0; }\n.properties-content .property-card .property-details .funds {\n      margin-top: 15px; }\n.properties-content .property-card .property-details .funds .flex {\n        display: flex;\n        background: #fafafa;\n        padding: 10px 15px;\n        margin-bottom: 5px;\n        color: #626262; }\n.properties-content .property-card .property-details .funds .flex .item {\n          flex-grow: 1;\n          text-align: left; }\n.properties-content .property-card .property-details .funds .flex .item.value {\n            flex-grow: 0;\n            font-weight: bold;\n            text-align: right;\n            line-height: 25px; }\n.properties-content .property-card .property-details .funds .flex .item.value span {\n              font-size: 16px;\n              opacity: 1; }\n.properties-content .property-card .property-details .funds .flex .item.centered {\n            display: flex;\n            align-items: center; }\n.properties-content .property-card .property-details .funds .flex .item label {\n            display: block;\n            margin-bottom: 0;\n            font-size: 12px;\n            font-weight: bold;\n            line-height: 10px; }\n.properties-content .property-card .property-details .funds .flex .item span {\n            font-size: 10px;\n            opacity: 0.7; }\n.properties-content .property-card .property-details .buttons {\n      display: flex;\n      margin-top: 20px; }\n.properties-content .property-card .property-details .buttons .btn {\n        flex-grow: 1;\n        font-family: \"Roboto\", Arial, sans-serif;\n        font-size: 14px;\n        padding: 10px; }\n.properties-content .property-card .property-details .buttons .btn.view {\n          background: rgba(16, 207, 189, 0.1);\n          border: 0;\n          color: #10cfbd;\n          margin-right: 0;\n          margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/properties/properties.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/properties/properties.component.ts ***!
  \***************************************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/api */ "./src/app/shared/api/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/constants/property-details */ "./src/app/shared/constants/property-details.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent(router, _getMeNotified, _propertyService) {
        this.router = router;
        this._getMeNotified = _getMeNotified;
        this._propertyService = _propertyService;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.filterCollapse = false;
        this.countrySortOptions = [];
        this.latestListingOptions = [
            { value: 'DateDesc', label: 'Latest Listing' },
            { value: 'DateAsc', label: 'Oldest Listing' },
            { value: 'PriceAsc', label: 'Lowest Price' },
            { value: 'PriceDesc', label: 'Highest Price' },
            { value: 'RentalYieldAsc', label: 'Lowest Rental Yield' },
            { value: 'RentalYieldDesc', label: 'Highest Rental Yield' }
        ];
        this.countrySortSelected = {};
        this.latestListingSelected = {};
        this.pageNumber = 1;
        this.pageSize = 6;
        this.propertiesParams = {};
        this.isForPropertyDetails = false;
        if (window.screen.width <= 767) {
            this.filterCollapse = true;
        }
    }
    PropertiesComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth <= 767) {
            this.filterCollapse = true;
        }
    };
    PropertiesComponent.prototype.ngOnInit = function () {
        this.init();
    };
    PropertiesComponent.prototype.init = function () {
        this.mapClose = true;
        this.countrySortOptions = [];
        this.countrySortOptions.push({
            countryId: 0,
            countryName: 'All Countries',
            stampDuty: 0.0,
            capitalGrowth: 0.0
        });
        this.countrySortSelected = this.countrySortOptions[0].countryId;
        this.latestListingSelected = this.latestListingOptions[0].value;
        this.updatePropertiesFilter(this.countrySortSelected, this.latestListingSelected);
        this.getCountry();
    };
    PropertiesComponent.prototype.getCountry = function () {
        var _this = this;
        this._propertyService.getCountry().subscribe(function (data) {
            _this.countrySortOptions = _this.countrySortOptions.concat(data);
        });
    };
    PropertiesComponent.prototype.getProperties = function (params) {
        var _this = this;
        this._propertyService.getProperties(params).subscribe(function (data) {
            _this.properties = data;
            _this.propertiesForMap = _this.properties.filter(function (i) { return i.propertyListingTypeId !== _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATUS"].COMING_SOON; });
        });
    };
    PropertiesComponent.prototype.updatePropertiesFilter = function (countryId, sortingMode) {
        this.propertiesParams = {};
        this.propertiesParams = {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            sortingMode: sortingMode
        };
        if (!!countryId) {
            this.propertiesParams.countryId = countryId;
        }
        this.getProperties(this.propertiesParams);
    };
    PropertiesComponent.prototype.getMeNotified = function () {
        this._getMeNotified.toggle();
        this._getMeNotified.setPreOrderStatus(true);
    };
    PropertiesComponent.prototype.viewDetails = function (id, disabled) {
        if (disabled === void 0) { disabled = false; }
        if (disabled) {
            return;
        }
        // this.router.navigate([`/app/property/${id}`]);
    };
    PropertiesComponent.prototype.preOrder = function (id) {
        this.router.navigate(["/preorder/" + id]);
    };
    PropertiesComponent.prototype.toggleFilter = function () {
        this.filterCollapse = !this.filterCollapse;
    };
    PropertiesComponent.prototype.isPropertyComingSoon = function (status) {
        return status === _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATUS"].COMING_SOON;
    };
    PropertiesComponent.prototype.isPropertyPreOrder = function (status) {
        return status === _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATUS"].PRE_ORDER;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PropertiesComponent.prototype, "onResize", null);
    PropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.component.html */ "./src/app/modules/main-app/pages/properties/properties.component.html"),
            styles: [__webpack_require__(/*! ./properties.component.scss */ "./src/app/modules/main-app/pages/properties/properties.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["GetMeNotifiedService"],
            _shared_api__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]])
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/property-details/property-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/property-details/property-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-header\">\r\n  <div class=\"container\">\r\n    <ul class=\"breadcrumb p-l-0 p-r-0 ng-star-inserted\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/app/properties\">View Properties</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active ellipsis\">{{ propertyAddress }}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<app-loader></app-loader>\r\n<ngb-carousel\r\n  *ngIf=\"propertyImages\"\r\n  [showNavigationIndicators]=\"false\"\r\n  [interval]=\"false\"\r\n  [showNavigationArrows]=\"false\"\r\n  #imagesCarousel\r\n>\r\n  <ng-template\r\n    ngbSlide\r\n    *ngFor=\"let propertyImage of propertyImages\"\r\n    id=\"img-{{ propertyImage.slideId }}\"\r\n  >\r\n    <div\r\n      class=\"property-images\"\r\n      setImage=\"{{ propertyImage.filePath }}\"\r\n      (click)=\"showImageGallery(propertyImage.slideId)\"\r\n    >\r\n      <div class=\"arrow-right-wrapper\" (click)=\"arrowSlide('right', $event)\">\r\n        <div class=\"line-arrow right\"></div>\r\n      </div>\r\n      <div class=\"arrow-left-wrapper\" (click)=\"arrowSlide('left', $event)\">\r\n        <div class=\"line-arrow left\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-caption property-carousel container top\">\r\n      <div>\r\n        <div class=\"viewPhotosText\" (click)=\"showImageGallery()\">\r\n          View {{ propertyImages.length }} Photos\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button\r\n          class=\"btn\"\r\n          *ngIf=\"!isPropertyPreOrder()\"\r\n          setFundedColor=\"{{ propertyImage.percentFunded }}\"\r\n        >\r\n          {{ propertyDetails?.percentFunded }}% Funded\r\n        </button>\r\n        <button\r\n          class=\"btn\"\r\n          *ngIf=\"isPropertyPreOrder()\"\r\n          setFundedColor=\"{{ propertyImage.percentFunded }}\"\r\n        >\r\n          In Pre-Order\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-caption property-carousel container\">\r\n      <div>\r\n        <button class=\"btn btn-complete btn-type\">\r\n          {{ propertyDetails?.propertyTypeName }}\r\n        </button>\r\n        <p>\r\n          <span>{{ propertyDetails?.noOfBedrooms }} Bedroom</span>\r\n          <span>{{ propertyDetails?.noOfBathrooms }} Bathroom</span>\r\n        </p>\r\n        <button class=\"btn btn-success btn-cons\" *ngIf=\"!isPropertyPreOrder()\">\r\n          {{ propertyDetails?.percentFunded }}% Funded\r\n        </button>\r\n        <button\r\n          class=\"btn btn-success btn-cons preorder\"\r\n          *ngIf=\"isPropertyPreOrder()\"\r\n        >\r\n          In Pre-Order\r\n        </button>\r\n      </div>\r\n      <div>\r\n        <div class=\"viewPhotosText\" (click)=\"showImageGallery()\">\r\n          View {{ propertyImages.length }} Photos\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n<div class=\"property\">\r\n  <div class=\"property-header\">\r\n    <div class=\"container\">\r\n      <div class=\"header-logo\">\r\n        <img\r\n          src=\"{{ baseUrl }}{{ propertyDetails?.flagImagePath }}\"\r\n          alt=\"flagImage\"\r\n        />\r\n      </div>\r\n      <div class=\"header-title d-flex flex-column\">\r\n        <p>{{ propertyDetails?.countryName }}</p>\r\n        <p>{{ propertyDetails?.propertyName }}</p>\r\n      </div>\r\n      <div class=\"header-icon d-none d-md-none d-lg-flex\">\r\n        <icon-building class=\"svg-icon\"></icon-building>\r\n      </div>\r\n      <div class=\"header-value d-none d-md-none d-lg-flex flex-column\">\r\n        <p>Property Value</p>\r\n        <p>\r\n          {{ propertyDetails?.propertyValue | currency: 'USD':'symbol':'1.2' }}\r\n        </p>\r\n      </div>\r\n      <div class=\"header-button d-none d-md-none d-lg-block\">\r\n        <button\r\n          class=\"btn btn-primary btn-cons\"\r\n          (click)=\"purchaseItem(propertyDetails?.propertyId)\"\r\n        >\r\n          {{ propertyDetails?.propertyListingTypeName }} From\r\n          {{ propertyDetails?.pricePerPart | currency: 'USD':'symbol':'1.2' }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container property-details\">\r\n    <pg-tabset\r\n      tabAnimation=\"slide-left\"\r\n      Type=\"simple\"\r\n      extraTabClass=\"details-tabs\"\r\n      [SelectedIndex]=\"activeTabs\"\r\n      (SelectChange)=\"setTabIndex($event)\"\r\n    >\r\n      <pg-tab>\r\n        <ng-template #TabHeading>\r\n          <icon-overview-white\r\n            class=\"tab-icon show-active\"\r\n          ></icon-overview-white>\r\n          <icon-overview class=\"tab-icon hide-active\"></icon-overview>\r\n          <span>Summary</span>\r\n        </ng-template>\r\n        <tab-summary\r\n          [summaryDetails]=\"summaryDetails\"\r\n          [propertyValue]=\"propertyDetails?.propertyValue\"\r\n          (changeActiveTabs)=\"changeActiveTabs($event)\"\r\n          [Images]=\"propertyImages\"\r\n          [privateDocs]=\"summaryPrivateDocs\"\r\n        ></tab-summary>\r\n      </pg-tab>\r\n      <pg-tab>\r\n        <ng-template #TabHeading>\r\n          <icon-financial-white\r\n            class=\"tab-icon show-active\"\r\n          ></icon-financial-white>\r\n          <icon-financial class=\"tab-icon hide-active\"></icon-financial>\r\n          <span>Financial Details</span>\r\n        </ng-template>\r\n        <tab-financial-details\r\n          [overviewDetails]=\"financialOverview\"\r\n          [incomeDetails]=\"financiaIncome\"\r\n          [expensesList]=\"financialExpense\"\r\n          [capitalDetailsList]=\"financialCapitalDetails\"\r\n          [capitalGrowthList]=\"financialCapitalGrowth\"\r\n        ></tab-financial-details>\r\n      </pg-tab>\r\n      <pg-tab>\r\n        <ng-template #TabHeading>\r\n          <icon-location-white\r\n            class=\"tab-icon show-active\"\r\n          ></icon-location-white>\r\n          <icon-location class=\"tab-icon hide-active\"></icon-location>\r\n          <span>Property Location</span>\r\n        </ng-template>\r\n        <tab-property-location\r\n          *ngIf=\"propertyLocation\"\r\n          [PropertyLocationInfo]=\"propertyLocation\"\r\n        ></tab-property-location>\r\n      </pg-tab>\r\n      <pg-tab>\r\n        <ng-template #TabHeading>\r\n          <icon-star-white class=\"tab-icon show-active\"></icon-star-white>\r\n          <icon-star class=\"tab-icon hide-active\"></icon-star>\r\n          <span>Property Details</span>\r\n        </ng-template>\r\n        <tab-property-details\r\n          *ngIf=\"floorPlanLayout && timelines && video\"\r\n          [FloorPlanLayout]=\"floorPlanLayout\"\r\n          [Timelines]=\"timelines\"\r\n          [Video]=\"video\"\r\n          [Images]=\"propertyImages\"\r\n        ></tab-property-details>\r\n      </pg-tab>\r\n    </pg-tabset>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/property-details/property-details.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/property-details/property-details.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.details-header {\n  background-color: #fff; }\n.details-header .ellipsis {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n.details-header .breadcrumb {\n    flex-wrap: nowrap;\n    padding: 20px; }\n.details-header .breadcrumb-item {\n      width: auto;\n      min-width: 120px;\n      display: flex;\n      line-height: 10px;\n      align-items: flex-end;\n      margin-left: 0; }\n.details-header .breadcrumb-item.active {\n        width: 100%; }\n.details-header .breadcrumb-item.active:before {\n          padding-right: 15px;\n          position: relative;\n          bottom: 1px; }\n.property-carousel.carousel-caption {\n  display: flex;\n  padding-bottom: 0;\n  bottom: 10px;\n  width: 100%;\n  right: 0;\n  left: 0;\n  z-index: 1000 !important; }\n.property-carousel.carousel-caption div:nth-child(1) {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end; }\n.property-carousel.carousel-caption div:nth-child(1) p {\n      margin-right: 10px;\n      margin-bottom: 5px; }\n.property-carousel.carousel-caption div:nth-child(1) p span {\n        font-family: \"Roboto\", Arial, sans-serif;\n        font-weight: bold;\n        font-size: 16px;\n        color: #fff;\n        height: 16px;\n        line-height: 16px;\n        padding: 0 10px; }\n.property-carousel.carousel-caption div:nth-child(1) p span:nth-child(1) {\n          padding-left: 0;\n          border-right: 2px solid rgba(255, 255, 255, 0.5); }\n.property-carousel.carousel-caption div:nth-child(1) .btn-type {\n      display: none;\n      font-size: 12px;\n      text-align: center;\n      text-transform: uppercase;\n      padding: 2px 10px;\n      margin-right: 10px; }\n.property-carousel.carousel-caption div:nth-child(1) .btn-success {\n      font-size: 16px;\n      color: #fff;\n      text-align: center;\n      cursor: unset; }\n.property-carousel.carousel-caption div:nth-child(1) .btn-success:hover {\n        background-color: #10cfbd;\n        border-color: #10cfbd; }\n.property-carousel.carousel-caption div:nth-child(1) .btn-success.preorder {\n        font-size: 15px;\n        font-weight: bold; }\n.property-carousel.carousel-caption div:nth-child(1) .btn-funded {\n      color: #fff;\n      border: none;\n      padding: 8px 0;\n      font-size: 16px;\n      border-radius: 3px; }\n.property-carousel.carousel-caption div:nth-child(2) {\n    flex-grow: 1;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end; }\n.property-carousel.carousel-caption div:nth-child(2) a {\n      font-family: \"Roboto\", Arial, sans-serif;\n      font-style: normal;\n      font-size: 16px;\n      color: #fff;\n      text-decoration: underline;\n      margin-bottom: 5px; }\n.property-carousel.carousel-caption.top {\n  display: none; }\n@media (max-width: 768px) {\n  .property-carousel.carousel-caption div:nth-child(1) p span {\n    font-size: 14px; }\n  .property-carousel.carousel-caption div:nth-child(1) .btn-type {\n    display: initial; }\n  .property-carousel.carousel-caption div:nth-child(1) .btn-funded {\n    display: none; }\n  .property-carousel.carousel-caption div:nth-child(1) .btn-success {\n    display: none; }\n  .property-carousel.carousel-caption div:nth-child(2) {\n    display: none; }\n  .property-carousel.carousel-caption.top {\n    display: initial;\n    display: flex;\n    width: 100%;\n    height: 100px;\n    top: 0; }\n    .property-carousel.carousel-caption.top div {\n      flex-grow: 1; }\n      .property-carousel.carousel-caption.top div:nth-child(1) {\n        justify-content: flex-start;\n        align-items: flex-start; }\n        .property-carousel.carousel-caption.top div:nth-child(1) a {\n          font-family: \"Roboto\", Arial, sans-serif;\n          font-style: normal;\n          font-size: 12px;\n          color: #fff;\n          text-decoration: underline; }\n      .property-carousel.carousel-caption.top div:nth-child(2) {\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-start; }\n        .property-carousel.carousel-caption.top div:nth-child(2) button {\n          font-size: 12px;\n          color: #fff;\n          text-align: center;\n          padding: 3px 12px;\n          text-transform: uppercase;\n          border: 0; } }\n.property-header {\n  background-color: #fff; }\n.property-header .container {\n    display: flex;\n    padding-top: 25px;\n    padding-bottom: 25px; }\n.property-header .container p {\n      margin-bottom: 0; }\n.property-header .container .header-logo {\n      margin-right: 15px; }\n.property-header .container .header-logo img {\n        width: 50px;\n        height: 50px; }\n.property-header .container .header-icon {\n      align-items: center; }\n.property-header .container .header-icon .svg-icon {\n        position: relative;\n        top: 5px; }\n.property-header .container .header-title {\n      padding-right: 20px;\n      border-right: 2px solid #e6e6e6;\n      margin-right: 15px;\n      justify-content: center; }\n.property-header .container .header-title p:first-child {\n        font-size: 14px;\n        color: #626262;\n        line-height: 14px;\n        margin-bottom: 2px; }\n.property-header .container .header-title p:nth-child(2) {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-weight: bold;\n        font-size: 25px;\n        color: #2c2c2c; }\n.property-header .container .header-value {\n      padding: 0 20px;\n      flex-grow: 1;\n      justify-content: center; }\n.property-header .container .header-value p:first-child {\n        font-size: 14px;\n        color: #2c2c2c;\n        margin-bottom: 3px; }\n.property-header .container .header-value p:nth-child(2) {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-weight: bold;\n        font-size: 18px;\n        color: #48b0f7;\n        line-height: 15px;\n        margin-bottom: 3px; }\n.property-header .container .header-button .btn {\n      height: 100%;\n      font-weight: bold;\n      font-size: 16px;\n      color: #ffffff;\n      margin-right: 0; }\n@media (max-width: 992px) {\n      .property-header .container .header-title {\n        border: 0; } }\n@media (max-width: 768px) {\n      .property-header .container .header-title p:first-child {\n        font-size: 12px; }\n      .property-header .container .header-title p:nth-child(2) {\n        font-size: 16px; } }\n.property-details {\n  margin-top: 30px; }\n@media (max-width: 768px) {\n  .property-details {\n    padding: 0; } }\n.property-images {\n  position: relative;\n  width: 100%;\n  height: 350px !important;\n  background-size: cover !important; }\n.property-images:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, black 100%);\n    opacity: 0.9;\n    height: 50%; }\n.property-images > div {\n    width: 10%;\n    height: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 80px; }\n.property-images > .arrow-left-wrapper {\n    float: left; }\n.property-images > .arrow-left-wrapper > .left {\n      border-top: 2px solid #ffffff;\n      border-right: 2px solid #ffffff;\n      left: 30px;\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      opacity: 0.5; }\n.property-images > .arrow-right-wrapper {\n    float: right; }\n.property-images > .arrow-right-wrapper > .right {\n      border-top: 2px solid #ffffff;\n      border-right: 2px solid #ffffff;\n      right: 30px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      opacity: 0.5; }\n.property-images > div > .line-arrow {\n    position: absolute;\n    overflow: hidden;\n    display: inline-block;\n    font-size: 10px;\n    width: 4em;\n    height: 4em;\n    margin-top: -2em;\n    top: 50%;\n    cursor: pointer; }\n@media (max-width: 575px) {\n  .property-images {\n    height: 250px !important; } }\n.viewPhotosText {\n  font-size: 16px;\n  color: white;\n  text-decoration: underline;\n  cursor: pointer; }\n@media (max-width: 768px) {\n  .viewPhotosText {\n    font-size: 12px; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/property-details/property-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/property-details/property-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function() { return PropertyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/constants/property-details */ "./src/app/shared/constants/property-details.ts");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/api */ "./src/app/shared/api/index.ts");
/* harmony import */ var _shared_services_photo_gallery_photo_gallery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/photo-gallery/photo-gallery.service */ "./src/app/shared/services/photo-gallery/photo-gallery.service.ts");
/* harmony import */ var _shared_services_photo_carousel_photo_carousel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/photo-carousel/photo-carousel.service */ "./src/app/shared/services/photo-carousel/photo-carousel.service.ts");
/* harmony import */ var _shared_api_property_details_property_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/api/property-details/property-details.service */ "./src/app/shared/api/property-details/property-details.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/session-storage/session-storage.service */ "./src/app/shared/services/session-storage/session-storage.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PropertyDetailsComponent = /** @class */ (function () {
    function PropertyDetailsComponent(router, activeRoute, _propertyService, _photoGalleryService, _propertyDetailsService, changeDetectorRef, _propertyShared, _photoCarouselService, _usersService, _sessionStorageService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this._propertyService = _propertyService;
        this._photoGalleryService = _photoGalleryService;
        this._propertyDetailsService = _propertyDetailsService;
        this.changeDetectorRef = changeDetectorRef;
        this._propertyShared = _propertyShared;
        this._photoCarouselService = _photoCarouselService;
        this._usersService = _usersService;
        this._sessionStorageService = _sessionStorageService;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.desktopView = true;
        this.tabletViewMaxSize = 768;
        this.openImageGallery = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PropertyDetailsComponent.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            _this.desktopView = window.innerWidth >= _this.tabletViewMaxSize;
            _this.changeDetectorRef.detectChanges();
        }, 500);
    };
    PropertyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.activeRoute.snapshot.params.hasOwnProperty('id')) {
            this.router.navigate(['/app/properties']);
        }
        else {
            this.checkEAC();
            this._photoCarouselService.updateImageIndex.subscribe(function (index) {
                _this.imageCarousel.select("img-" + index);
            });
            this.activeTabs = _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_3__["TABS"].SUMMARY;
            this.propertyId = this.activeRoute.snapshot.params.id || 0;
            this.getDetails(this.propertyId);
            this.getPropertyAssetTypes();
            this.getFloorPlanLayout(this.propertyId);
            this.getTimelines(this.propertyId);
            this.getVideo(this.propertyId);
            this.getSummaryDetails(this.propertyId);
            this.desktopView = window.innerWidth >= this.tabletViewMaxSize;
            this.getFincancialOverview();
            this.getFinancialIncome();
            this.getFinancialExpense();
            this.getFinancialCapitalGrowth();
            this.getFinancialCapitalDetails();
            this.getPropertyLocation();
        }
    };
    PropertyDetailsComponent.prototype.changeActiveTabs = function (idx) {
        this.activeTabs = idx;
    };
    PropertyDetailsComponent.prototype.setTabIndex = function (event) {
        this.activeTabs = event.index;
    };
    PropertyDetailsComponent.prototype.getDetails = function (propertyId) {
        var _this = this;
        this._propertyService.getPropertyDetails(propertyId).subscribe(function (data) {
            if (data.propertyListingTypeId === _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_3__["PROPERTY_STATUS"].COMING_SOON) {
                _this.router.navigate(['/app/properties']);
            }
            _this.propertyDetails = data;
            _this.propertyAddress = _this.propertyDetails.propertyAddress;
        }, function () {
            _this.router.navigate(['/app/properties']);
        });
    };
    PropertyDetailsComponent.prototype.getSummaryDetails = function (propertyId) {
        var _this = this;
        this._propertyDetailsService
            .getPropertySummary(propertyId)
            .subscribe(function (data) {
            var overviewArr = data.overview && data.overview.split('\\n');
            var locationSummaryArr = data.locationSummary && data.locationSummary.split('\\n');
            var businessCaseArr = data.businessCase && data.businessCase.split('\\n');
            _this.summaryDetails = __assign({}, data, { overviewArr: overviewArr,
                locationSummaryArr: locationSummaryArr,
                businessCaseArr: businessCaseArr });
            _this._propertyDetailsService
                .getPropertyImages({ propertyId: propertyId, propertyAssetTypeId: 5 })
                .subscribe(function (res) {
                if (res) {
                    _this.summaryPrivateDocs = res[0];
                }
            });
        });
    };
    PropertyDetailsComponent.prototype.getPropertyImages = function (detailIds) {
        var _this = this;
        this._propertyDetailsService
            .getPropertyImages(detailIds)
            .subscribe(function (data) {
            _this.propertyImages = data;
            _this.generateSlideIds(_this.propertyImages);
        });
    };
    PropertyDetailsComponent.prototype.getPropertyAssetTypes = function () {
        var _this = this;
        this._propertyDetailsService.getPropertyAssetTypes().subscribe(function (data) {
            _this.propertyAssetTypes = data;
            _this.getPropertyImages({
                propertyAssetTypeId: _this.getPropertyAssetTypeId('Property Photo'),
                propertyId: _this.propertyId
            });
        });
    };
    PropertyDetailsComponent.prototype.purchaseItem = function (id) {
        this.router.navigate(["/preorder/" + id]);
    };
    PropertyDetailsComponent.prototype.showImageGallery = function (id) {
        if (id === void 0) { id = 0; }
        this._photoGalleryService.toggle();
        this._photoGalleryService.setImages(this.propertyImages);
        this._photoGalleryService.setShowThumbnails(true);
        this._photoGalleryService.selectedImage(id);
        this._photoCarouselService.setImageIndex(id);
    };
    PropertyDetailsComponent.prototype.concatBaseUrl = function (url) {
        return this.baseUrl.concat(url);
    };
    PropertyDetailsComponent.prototype.getPropertyAssetTypeId = function (assetTypeName) {
        var selectedAssetType = this.propertyAssetTypes.filter(function (assetType) { return assetType.propertyAssetTypeName === assetTypeName; });
        return (selectedAssetType.length > 0 && selectedAssetType[0].propertyAssetTypeId);
    };
    PropertyDetailsComponent.prototype.generateSlideIds = function (images) {
        images.map(function (image, index) {
            image.slideId = index;
        });
    };
    PropertyDetailsComponent.prototype.arrowSlide = function (direction, event) {
        direction === 'left'
            ? this.imageCarousel.prev()
            : this.imageCarousel.next();
        event.stopPropagation();
    };
    PropertyDetailsComponent.prototype.isPropertyPreOrder = function () {
        return (this.propertyDetails.propertyListingTypeId === _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_3__["PROPERTY_STATUS"].PRE_ORDER);
    };
    // Financial Details
    PropertyDetailsComponent.prototype.getFincancialOverview = function () {
        var _this = this;
        this._propertyDetailsService
            .getFinancialOverview(this.propertyId)
            .subscribe(function (data) {
            _this.financialOverview = data;
        });
    };
    PropertyDetailsComponent.prototype.getFinancialIncome = function () {
        var _this = this;
        this._propertyDetailsService
            .getFinancialIncome(this.propertyId)
            .subscribe(function (data) {
            _this.financiaIncome = data;
        });
    };
    PropertyDetailsComponent.prototype.getFinancialExpense = function () {
        var _this = this;
        this._propertyDetailsService
            .getFinancialExpense(this.propertyId)
            .subscribe(function (data) {
            _this.financialExpense = data;
        });
    };
    PropertyDetailsComponent.prototype.getFinancialCapitalGrowth = function () {
        var _this = this;
        this._propertyDetailsService
            .getFinancialCapitalGrowth(this.propertyId)
            .subscribe(function (data) {
            _this.financialCapitalGrowth = data;
        });
    };
    PropertyDetailsComponent.prototype.getFinancialCapitalDetails = function () {
        var _this = this;
        this._propertyDetailsService
            .getFinancialCapitalDetails(this.propertyId)
            .subscribe(function (data) {
            _this.financialCapitalDetails = data;
        });
    };
    PropertyDetailsComponent.prototype.getPropertyLocation = function () {
        var _this = this;
        this._propertyDetailsService
            .getPropertyLocation(this.propertyId)
            .subscribe(function (data) {
            _this.propertyLocation = data;
        });
    };
    PropertyDetailsComponent.prototype.getFloorPlanLayout = function (id) {
        var _this = this;
        this._propertyDetailsService.getFloorPlanLayout(id).subscribe(function (data) {
            _this.floorPlanLayout = data;
        });
    };
    PropertyDetailsComponent.prototype.getTimelines = function (id) {
        var _this = this;
        this._propertyDetailsService.getTimelines(id).subscribe(function (data) {
            _this.timelines = data;
        });
    };
    PropertyDetailsComponent.prototype.getVideo = function (id) {
        var _this = this;
        this._propertyDetailsService.getVideo(id).subscribe(function (data) {
            _this.video = data;
        });
    };
    PropertyDetailsComponent.prototype.checkEAC = function () {
        this._sessionStorageService.removeSession('EAC');
        var url = this.activeRoute.snapshot.queryParams;
        if (url.hasOwnProperty('EAC') && url.EAC === '1') {
            this._sessionStorageService.setSession('EAC', 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imagesCarousel'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarousel"])
    ], PropertyDetailsComponent.prototype, "imageCarousel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PropertyDetailsComponent.prototype, "openImageGallery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyDetailsComponent.prototype, "onResize", null);
    PropertyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-details',
            template: __webpack_require__(/*! ./property-details.component.html */ "./src/app/modules/main-app/pages/property-details/property-details.component.html"),
            styles: [__webpack_require__(/*! ./property-details.component.scss */ "./src/app/modules/main-app/pages/property-details/property-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api__WEBPACK_IMPORTED_MODULE_4__["PropertyService"],
            _shared_services_photo_gallery_photo_gallery_service__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryService"],
            _shared_api_property_details_property_details_service__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["PropertySharedService"],
            _shared_services_photo_carousel_photo_carousel_service__WEBPACK_IMPORTED_MODULE_6__["PhotoCarouselService"],
            _shared_api__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _shared_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_10__["SessionStorageService"]])
    ], PropertyDetailsComponent);
    return PropertyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/purchase/purchase.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/purchase/purchase.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container purchase\">\r\n  <h3>\r\n    Purchase Page!\r\n  </h3>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/main-app/pages/purchase/purchase.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/purchase/purchase.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".purchase {\n  height: 50vh; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/purchase/purchase.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/purchase/purchase.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent() {
    }
    PurchaseComponent.prototype.ngOnInit = function () {
    };
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/modules/main-app/pages/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.scss */ "./src/app/modules/main-app/pages/purchase/purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/returns/returns.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/returns/returns.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"returns-container\">\r\n  <div class=\"banner\">\r\n    <div class=\"container\">\r\n      <h3>HOW DO I MAKE A RETURN?</h3>\r\n      <p>\r\n        It is important with any investment to understand how you can make\r\n        returns. This section will explain how it all works.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <h2 class=\"returns-header\">\r\n          <strong>You can earn Rental Income & Capital Growth</strong>\r\n        </h2>\r\n        <p class=\"returns-paragraph\">\r\n          As a part owner you are entitled to receive the proceeds of rental\r\n          income that is received from guests that stay at the property. We\r\n          maximise the potential income and control the operating expenses to\r\n          provide the highest yield possible. You could also benefit from\r\n          Capital Growth should the property increase in value over time. You\r\n          can list your parts for sale at anytime on our platform.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <ngb-tabset class=\"returns-tabs\">\r\n          <ngb-tab title=\"RENTAL INCOME\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"rental-income-container\">\r\n                <h5 class=\"header-title\">Rental Income Explained</h5>\r\n                <p class=\"returns-paragraph\">\r\n                  Every guest that books to stay will pay a nightly rate, and a\r\n                  cleaning fee to stay at the property. This will result in a\r\n                  gross rental income figure which will vary from month to month\r\n                  based on the occupancy. Our property management partners\r\n                  KeyLobby list the property on all the major sites (e.g. Airbnb,\r\n                  VRBO, Tripadvisor) and constantly review the pricing /\r\n                  availability to maximise this income\r\n                </p>\r\n                <div class=\"content-container\">\r\n                  <div class=\"flexbox-container\">\r\n                    <div class=\"flexbox-content-two\">\r\n                      <div class=\"card card-custom-height\">\r\n                        <div\r\n                          class=\"card-body card-body-customs card-one-max-height\"\r\n                        >\r\n                          <div style=\"text-align: center;\">\r\n                            <h5 class=\"card-custom-title\">Income</h5>\r\n                          </div>\r\n                          <hr class=\"line-customs\" />\r\n                          <p class=\"paragraph-description\">\r\n                            Each month the property will be booked by guests for\r\n                            a certain number of nights (known as the occupancy\r\n                            rate). You can calculate the income by adding\r\n                            together all of the nights + any cleaning fees to\r\n                            give you a Gross Income\r\n                          </p>\r\n                          <div class=\"image-container\">\r\n                            <img\r\n                              src=\"../../../../../assets/img/returns/returns-update/assets/Calendar@2x.jpg\"\r\n                            />\r\n                          </div>\r\n                          <!-- <p class=\"paragraph-description\">\r\n                            Every night that a guest rent the property is income\r\n                          </p> -->\r\n                          <p class=\"paragraph-title\">Example</p>\r\n                          <div class=\"card\">\r\n                            <div class=\"card-body computation-card\">\r\n                              <!-- Computation table -->\r\n                              <div class=\"computation-table\">\r\n                                <div class=\"d-flex justify-content-between\">\r\n                                  <div class=\"computation-label\">\r\n                                      Average Nightly Rate\r\n                                  </div>\r\n                                  <div class=\"value\">$300</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"computation-label\">Occupancy</div>\r\n                                  <div class=\"value\">20 Nights</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"computation-label\">\r\n                                    Cleaning Fees\r\n                                  </div>\r\n                                  <div class=\"value\">$400</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"output-label computation-label\">\r\n                                    Gross Income\r\n                                  </div>\r\n                                  <div class=\"output-label value output-label\">\r\n                                    $6,400\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <!-- Computation table end -->\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div\r\n                      class=\"flexbox-content-one object-align\"\r\n                      valign=\"center\"\r\n                    >\r\n                      <span valign=\"center\"> <p>MINUS</p> </span>\r\n                    </div>\r\n                    <div class=\"flexbox-content-two flex-custom-box\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-body card-body-customs\">\r\n                          <div style=\"text-align: center;\">\r\n                            <h5 class=\"card-custom-title\">Expenses</h5>\r\n                          </div>\r\n                          <hr class=\"line-customs\" />\r\n                          <p class=\"paragraph-description\">\r\n                            The KeyLobby team works hard to keep expenses under\r\n                            control, however there will always be fixed expenses\r\n                            to operate the property + variable expenses\r\n                            depending on the usage.\r\n                          </p>\r\n                          <p class=\"paragraph-title\">Example</p>\r\n                          <div class=\"card\">\r\n                            <div class=\"card-body computation-card\">\r\n                              <!-- Computation table -->\r\n                              <div class=\"computation-table\">\r\n                                <div class=\"d-flex justify-content-between\">\r\n                                  <div class=\"computation-label\">Cleaning</div>\r\n                                  <div class=\"value\">$300</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"computation-label\">\r\n                                    Maintenance\r\n                                  </div>\r\n                                  <div class=\"value\">$300</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"computation-label\">\r\n                                    Management\r\n                                  </div>\r\n                                  <div class=\"value\">$400</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"computation-label\">Internet</div>\r\n                                  <div class=\"value\">$300</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div class=\"computation-label\">\r\n                                    Electricity\r\n                                  </div>\r\n                                  <div class=\"value\">$300</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\" \r\n                                >\r\n                                  <div class=\"computation-label\">Water</div>\r\n                                  <div class=\"value\">$300</div>\r\n                                </div>\r\n                                <hr />\r\n                                <div\r\n                                  class=\"income d-flex justify-content-between\"\r\n                                >\r\n                                  <div\r\n                                    class=\"computation-label output-label-two\"\r\n                                  >\r\n                                    Total Expenses\r\n                                  </div>\r\n                                  <div class=\"value output-label-three\">\r\n                                    $1,070\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <!-- Computation table end -->\r\n                              <div class=\"image-container hidden-image\">\r\n                                <img\r\n                                  src=\"../../../../../assets/img/returns/returns-update/assets/Calendar@2x.jpg\"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card\">\r\n                    <div class=\"card-body card-body-customs\">\r\n                      <div style=\"text-align: center;\">\r\n                        <h5 class=\"card-custom-title\">\r\n                          Net Income Calculation Example\r\n                        </h5>\r\n                      </div>\r\n                      <hr class=\"line-customs\" />\r\n                      <!-- <div class=\"net-income-computation-customs\">\r\n                          <div\r\n                          class=\"computation d-flex justify-content-between py-4\"\r\n                        >\r\n                          <div class=\"compute\">10/10,000</div>\r\n                          <div class=\"compute\"><strong class=\"operators\">X</strong></div>\r\n                          <div class=\"compute\">10/10,000</div>\r\n                          <div class=\"compute\"><strong class=\"operators\">=</strong></div>\r\n                          <div class=\"compute\"><strong>$2.23</strong></div>\r\n                        </div>\r\n                      </div> -->\r\n                      <div class=\"container\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-2 net-income-label-customs\">\r\n                            <p class=\"net-income-desc\">\r\n                              Income <br />\r\n                              <strong>$6,400</strong>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-md-2 net-income-label-minus\">\r\n                            <p class=\"net-income-desc\">\r\n                              <strong class=\"net-income-label-minus-line\"\r\n                                >-</strong\r\n                              >\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-md-2 net-income-label-customs\">\r\n                            <p class=\"net-income-desc\">\r\n                              Expenses <br />\r\n                              <strong>$1,070</strong>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-md-2 net-income-label-equals\">\r\n                            <strong class=\"net-income-label-equals-line\"\r\n                              >=</strong\r\n                            >\r\n                          </div>\r\n                          <hr class=\"equals-line-mobile\" />\r\n                          <div\r\n                            class=\"col-md-4 net-income-label-customs net-income-total\"\r\n                          >\r\n                            <p class=\"net-income-desc-two\">\r\n                              Net Income <br />\r\n                              <strong>$5,330</strong>\r\n                            </p>\r\n                          </div>\r\n                          <!-- <div class=\"col-md-2\" style=\"text-align: center;\">\r\n                              <strong>=</strong>\r\n                            </div> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <h5 class=\"header-title\">What happens then?</h5>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"card card-what-happens-then card-height\">\r\n                        <div class=\"card-body card-padding\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-5 what-happens-then-alignment\">\r\n                              <img\r\n                                src=\"../../../../../assets/img/returns/returns-update/assets/Statement@2x.png\"\r\n                                class=\"image-financial-statement-size\"\r\n                              />\r\n                            </div>\r\n                            <div class=\"col-md-6 what-happens-then-alignment\">\r\n                              <p class=\"paragraph-what-happens-then\">\r\n                                Each month we provide details of all\r\n                                transactions and advise you of any profit.\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"card card-what-happens-then card-height\">\r\n                        <div\r\n                          class=\"card-body card-padding\"\r\n                          style=\"overflow: hidden;\"\r\n                        >\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-4 what-happens-then-alignment\">\r\n                              <img\r\n                                src=\"../../../../../assets/img/returns/returns-update/assets/Graph.png\"\r\n                                class=\"image-circle-size\"\r\n                                style=\"z-index: 1px;\"\r\n                              />\r\n                            </div>\r\n                            <div class=\"col-md-6 what-happens-then-alignment\">\r\n                              <p class=\"paragraph-what-happens-then\">\r\n                                We then divide that profit between owners based\r\n                                on the parts they own.\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card card-what-happens-then\">\r\n                    <div class=\"card-body\">\r\n                      <div style=\"text-align: center;\">\r\n                        <h5 class=\"card-custom-title\">\r\n                          Net Income Calculation Example\r\n                        </h5>\r\n                      </div>\r\n                      <hr class=\"line-customs\" />\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 net-income-image-padding\">\r\n                          <img\r\n                            src=\"../../../../../assets/img/returns/returns-update/assets/Graph2@2x.png\"\r\n                            class=\"image-income-calculation\"\r\n                          />\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                          <div class=\"person d-flex d-flex align-items- center\">\r\n                            <img\r\n                              widtd=\"50\"\r\n                              height=\"50\"\r\n                              class=\"mr-3\"\r\n                              src=\"assets/img/returns/Person@2x.png\"\r\n                              atl=\"Person\"\r\n                            />\r\n                            <p class=\"net-income-paragraph\">\r\n                              Vincent owns <strong>10 parts</strong> of a\r\n                              property\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                              <div class=\"container\">\r\n                                <h5 class=\"net-income-header\">\r\n                                  Net Income = $5,330\r\n                                </h5>\r\n                                <div class=\"row\">\r\n                                  <div\r\n                                    class=\"col-md-2 net-income-label-customs\"\r\n                                  >\r\n                                    <p class=\"net-income-desc-custom\">\r\n                                      Parts <br />\r\n                                      <strong>10 / 10,000</strong>\r\n                                    </p>\r\n                                  </div>\r\n                                  <div class=\"col-md-2 net-income-label-minus\">\r\n                                    <p class=\"net-income-desc-custom\">\r\n                                      <strong\r\n                                        class=\"net-income-label-minus-line-custom\"\r\n                                        >X</strong\r\n                                      >\r\n                                    </p>\r\n                                  </div>\r\n                                  <div\r\n                                    class=\"col-md-2 net-income-label-customs\"\r\n                                  >\r\n                                    <p class=\"net-income-desc-custom\">\r\n                                      Net Income <br />\r\n                                      <strong>$5,330.00</strong>\r\n                                    </p>\r\n                                  </div>\r\n                                  <div class=\"col-md-2 net-income-label-equals\">\r\n                                    <strong\r\n                                      class=\"net-income-label-equals-line-custom\"\r\n                                      >=</strong\r\n                                    >\r\n                                  </div>\r\n                                  <hr class=\"equals-line-mobile\" />\r\n                                  <div\r\n                                    class=\"col-md-4 net-income-label-customs net-income-total\"\r\n                                  >\r\n                                    <p class=\"net-income-desc-two-custom\">\r\n                                      Income for Vincent <br />\r\n                                      <strong>$5.33</strong>\r\n                                    </p>\r\n                                  </div>\r\n                                  <!-- <div class=\"col-md-2\" style=\"text-align: center;\">\r\n                                      <strong>=</strong>\r\n                                    </div> -->\r\n                                </div>\r\n                                <hr class=\"line-customs\" />\r\n                                <h5 class=\"net-income-footer\">\r\n                                  <i\r\n                                    >*Funds are paid into your digital wallet</i\r\n                                  >\r\n                                </h5>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div>\r\n                <img\r\n                class=\"img-fluid\"\r\n                src=\"assets/img/returns/Group 9@2x.png\"\r\n                alt=\"Return Chart\"\r\n              />\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <h2 class=\"returns-header\">\r\n                      <strong>Example Expenses</strong>\r\n                    </h2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row mb-5 pb-5\">\r\n                  <div\r\n                    class=\"col-12 col-sm-6 col-md-4 col-xl-4 d-flex flex-column text-center expenses\"\r\n                  >\r\n                    <img\r\n                      src=\"assets/img/returns/Maintenance.svg\"\r\n                      alt=\"Maintenance\"\r\n                    />\r\n                    <h4><strong>Maintenance</strong></h4>\r\n                    <p>\r\n                      So strongly and metaphysically did I conceive of my\r\n                      situation tden, tdat while earnestly watching his\r\n                      motions,.\r\n                    </p>\r\n                  </div>\r\n                  <div\r\n                    class=\"col-12 col-sm-6 col-md-4 col-xl-4 d-flex flex-column text-center expenses\"\r\n                  >\r\n                    <img\r\n                      src=\"assets/img/returns/Cleaning-icon.svg\"\r\n                      alt=\"Maintenance\"\r\n                    />\r\n                    <h4><strong>Cleaning</strong></h4>\r\n                    <p>\r\n                      So strongly and metaphysically did I conceive of my\r\n                      situation tden, tdat while earnestly watching his\r\n                      motions,.\r\n                    </p>\r\n                  </div>\r\n                  <div\r\n                    class=\"col-12 col-sm-6 col-md-4 col-xl-4 d-flex flex-column text-center expenses\"\r\n                  >\r\n                    <img\r\n                      src=\"assets/img/returns/Electricity-icon.svg\"\r\n                      alt=\"Maintenance\"\r\n                    />\r\n                    <h4><strong>Electricity</strong></h4>\r\n                    <p>\r\n                      So strongly and metaphysically did I conceive of my\r\n                      situation tden, tdat while earnestly watching his\r\n                      motions,.\r\n                    </p>\r\n                  </div>\r\n                  <div\r\n                    class=\"col-12 col-sm-6 col-md-4 col-xl-4 d-flex flex-column text-center expenses\"\r\n                  >\r\n                    <img\r\n                      src=\"assets/img/returns/Management-icon.svg\"\r\n                      alt=\"Maintenance\"\r\n                    />\r\n                    <h4><strong>Management</strong></h4>\r\n                    <p>\r\n                      So strongly and metaphysically did I conceive of my\r\n                      situation tden, tdat while earnestly watching his\r\n                      motions,.\r\n                    </p>\r\n                  </div>\r\n                  <div\r\n                    class=\"col-12 col-sm-6 col-md-4 col-xl-4 d-flex flex-column text-center expenses\"\r\n                  >\r\n                    <img\r\n                      src=\"assets/img/returns/Internet-icon.svg\"\r\n                      alt=\"Maintenance\"\r\n                    />\r\n                    <h4><strong>Cleaning</strong></h4>\r\n                    <p>\r\n                      So strongly and metaphysically did I conceive of my\r\n                      situation tden, tdat while earnestly watching his\r\n                      motions,.\r\n                    </p>\r\n                  </div>\r\n                  <div\r\n                    class=\"col-12 col-sm-6 col-md-4 col-xl-4 d-flex flex-column text-center expenses\"\r\n                  >\r\n                    <img\r\n                      src=\"assets/img/returns/Water-icon.svg\"\r\n                      alt=\"Maintenance\"\r\n                    />\r\n                    <h4><strong>Water</strong></h4>\r\n                    <p>\r\n                      So strongly and metaphysically did I conceive of my\r\n                      situation tden, tdat while earnestly watching his\r\n                      motions,.\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 col-sm-6\">\r\n                        <img\r\n                          class=\"img-fluid\"\r\n                          src=\"assets/img/returns/Statement@2x.png\"\r\n                          alt=\"Financial Statement\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-12 col-sm-6\">\r\n                        <p>\r\n                          Each montd we provide details of all transactions and\r\n                          advise you of any profit.\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 col-sm-6\">\r\n                        <img\r\n                          class=\"img-fluid\"\r\n                          src=\"assets/img/returns/Graph@2x.png\"\r\n                          alt=\"Financial Statement\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-12 col-sm-6\">\r\n                        <p>\r\n                          We tden divide tdat profit between owners based on tde\r\n                          parts tdey own.\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <h2 class=\"returns-header\">\r\n                      <strong>Details Example:</strong>\r\n                    </h2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-md-6 col-xl-6\">\r\n                    <div class=\"person d-flex d-flex align-items-center\">\r\n                      <img\r\n                        widtd=\"25\"\r\n                        height=\"25\"\r\n                        class=\"mr-3\"\r\n                        src=\"assets/img/returns/Person@2x.png\"\r\n                        atl=\"Person\"\r\n                      />\r\n                      <p>\r\n                        Vincent owns <strong>10 parts</strong> of a property\r\n                      </p>\r\n                    </div>\r\n                    <div className=\"date\">\r\n                      <p>\r\n                        <img\r\n                          src=\"assets/img/returns/icon-deposit.svg\"\r\n                          alt=\"Deposit icon\"\r\n                        />\r\n                        January\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"computation-table\">\r\n                      <div class=\"d-flex justify-content-between\">\r\n                        <div class=\"computation-label\">Income</div>\r\n                        <div class=\"value\">$6,445.00</div>\r\n                      </div>\r\n                      <div class=\"income d-flex justify-content-between\">\r\n                        <div class=\"computation-label\">Expense</div>\r\n                        <div class=\"value\">-$4,215.00</div>\r\n                      </div>\r\n                      <div class=\"income d-flex justify-content-between\">\r\n                        <div class=\"computation-label\">\r\n                          <strong>Profit</strong>\r\n                        </div>\r\n                        <div class=\"value\"><strong>$2,230.00</strong></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-xl-6\">\r\n                    <div class=\"person d-flex align-items-center\">\r\n                      <img\r\n                        widtd=\"25\"\r\n                        height=\"25\"\r\n                        class=\"mr-3\"\r\n                        src=\"assets/img/returns/Person@2x.png\"\r\n                        atl=\"Person\"\r\n                      />\r\n                      <p><strong>Share Computation</strong></p>\r\n                    </div>\r\n                    <div\r\n                      class=\"computation d-flex justify-content-between py-4\"\r\n                    >\r\n                      <div class=\"compute\">10/10,000</div>\r\n                      <div class=\"compute\"><strong>X</strong></div>\r\n                      <div class=\"compute\">10/10,000</div>\r\n                      <div class=\"compute\"><strong>=</strong></div>\r\n                      <div class=\"compute\"><strong>$2.23</strong></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div> -->\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"CAPITAL GROWTH\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-md-4 flex-column\">\r\n                  <img\r\n                    class=\"img-fluid\"\r\n                    src=\"assets/img/returns/Group 30.png\"\r\n                    alt=\"Chart\"\r\n                  />\r\n                  <p class=\"text-center\">\r\n                      Over time property values change as people enter and exit the market. On a global basis this has resulted in an average\r\n                    increase of 3.8% per annum over 30 years\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-12 col-md-8\">\r\n                  <img\r\n                    class=\"img-fluid\"\r\n                    src=\"assets/img/returns/global-house-price-index-q2-2018-5804_pdf@2x.png\"\r\n                    alt=\"map\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <p>\r\n                    On a long term basis property generally increases in value for the following reasons.\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div\r\n                    class=\"property-value d-flex flex-column flex-sm-row justify-content-around py-5\"\r\n                  >\r\n                    <div\r\n                      class=\"property-value-cons d-flex align-items-center mb-3\"\r\n                    >\r\n                      <img\r\n                        class=\"mr-2\"\r\n                        widtd=\"25\"\r\n                        height=\"22\"\r\n                        src=\"assets/img/returns/Inflation-icon.svg\"\r\n                      />\r\n                      <p class=\"m-0\">Inflation</p>\r\n                    </div>\r\n                    <div\r\n                      class=\"property-value-cons d-flex align-items-center mb-3\"\r\n                    >\r\n                      <img\r\n                        class=\"mr-2\"\r\n                        widtd=\"25\"\r\n                        height=\"22\"\r\n                        src=\"assets/img/returns/Housing-icon.svg\"\r\n                      />\r\n                      <p class=\"m-0\">Stronger Demand for Housing</p>\r\n                    </div>\r\n                    <div\r\n                      class=\"property-value-cons d-flex align-items-center mb-3\"\r\n                    >\r\n                      <img\r\n                        class=\"mr-2\"\r\n                        widtd=\"25\"\r\n                        height=\"22\"\r\n                        src=\"assets/img/returns/Land-icon.svg\"\r\n                      />\r\n                      <p class=\"m-0\">Reducing Supply of Land</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <p class=\"returns-paragraph-two\">\r\n                      The following example is based on a Property Valued at $350,000 and shows you what yearly increases / decreases in capital value mean to the property value. You can also see how this would affect a part holder who owns 10 parts.\r\n                  </p>\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Y</th>\r\n                        <th>Change</th>\r\n                        <th>Value</th>\r\n                        <th>Share</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>1</td>\r\n                        <td>0%</td>\r\n                        <td>$350,000</td>\r\n                        <td>$350.00</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>2</td>\r\n                        <td>3%</td>\r\n                        <td>$360,500</td>\r\n                        <td>$360.50</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>3</td>\r\n                        <td>-1%</td>\r\n                        <td>$356,895</td>\r\n                        <td>$356.90</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>4</td>\r\n                        <td>4%</td>\r\n                        <td>$371,171</td>\r\n                        <td>$371.17</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>5</td>\r\n                        <td>-2%</td>\r\n                        <td>$363,747</td>\r\n                        <td>$363.74</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>6</td>\r\n                        <td>+10%</td>\r\n                        <td>$400,122</td>\r\n                        <td>$400.12</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>7</td>\r\n                        <td>+1%</td>\r\n                        <td>$404,123</td>\r\n                        <td>$404.12</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>8</td>\r\n                        <td>+2%</td>\r\n                        <td>$412,205</td>\r\n                        <td>$412.20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>9</td>\r\n                        <td>-9%</td>\r\n                        <td>$375,106</td>\r\n                        <td>$375.10</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/returns/returns.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/returns/returns.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.returns-container {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n  background-color: #fff; }\n.returns-container .banner {\n    position: relative;\n    text-align: center;\n    color: #fff;\n    background-image: url(\"/assets/img/returns/Header@2x-new.png\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    z-index: 0;\n    padding: 1rem 0rem 3rem; }\n@media (max-width: 575.98px) {\n      .returns-container .banner {\n        position: inherit;\n        padding-bottom: 0px; } }\n.returns-container .banner:before {\n      content: \"\";\n      position: absolute;\n      opacity: .5;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: -1; }\n.returns-container .banner h3 {\n      margin: 0;\n      padding-top: 80px;\n      font-size: 30px;\n      line-height: 40px;\n      color: #fff;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n@media (max-width: 575.98px) {\n        .returns-container .banner h3 {\n          padding-top: 1.5rem; }\n          .returns-container .banner h3 h3 {\n            font-size: 16px; } }\n.returns-container .banner p, .returns-container .banner .container .row .returns-paragraph, .returns-container .container .row .banner .returns-paragraph, .returns-container .banner .container .row .returns-paragraph-two, .returns-container .container .row .banner .returns-paragraph-two {\n      padding-top: 20px;\n      padding-bottom: 90px;\n      font-size: 20px;\n      line-height: 30px; }\n@media (max-width: 575.98px) {\n        .returns-container .banner p, .returns-container .banner .container .row .returns-paragraph, .returns-container .container .row .banner .returns-paragraph, .returns-container .banner .container .row .returns-paragraph-two, .returns-container .container .row .banner .returns-paragraph-two {\n          font-size: 14px;\n          padding: 1rem 1rem;\n          padding-bottom: 120px; } }\n@media (max-width: 575.98px) {\n      .returns-container .banner h3 {\n        font-size: 20px;\n        text-align: center; }\n      .returns-container .banner p, .returns-container .banner .container .row .returns-paragraph, .returns-container .container .row .banner .returns-paragraph, .returns-container .banner .container .row .returns-paragraph-two, .returns-container .container .row .banner .returns-paragraph-two {\n        font-size: 14px; } }\n.returns-container .rental-income-container .hidden-image {\n    visibility: hidden;\n    height: 50px; }\n.returns-container .rental-income-container .image-financial-statement-size {\n    width: 189px;\n    height: 123px; }\n.returns-container .rental-income-container .image-circle-size {\n    width: 139px;\n    height: 123px; }\n.returns-container .rental-income-container .paragraph-what-happens-then {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 14px !important;\n    color: #626262;\n    line-height: 24px; }\n.returns-container .rental-income-container .card-what-happens-then {\n    background: #F7F7F7;\n    border-radius: 5px; }\n.returns-container .rental-income-container .card-height {\n    height: 200px; }\n.returns-container .rental-income-container .what-happens-then-alignment {\n    text-align: left; }\n.returns-container .rental-income-container .net-income-image-padding {\n    padding-top: 50px; }\n.returns-container .rental-income-container .image-income-calculation {\n    width: 230px;\n    height: 219px; }\n.returns-container .rental-income-container .net-income-paragraph {\n    margin-top: 15px !important; }\n.returns-container .rental-income-container .card {\n    border: none; }\n.returns-container .rental-income-container .net-income-label-customs {\n    text-align: center;\n    padding: 0px; }\n.returns-container .rental-income-container .net-income-label-minus {\n    text-align: center;\n    padding-top: 15px; }\n.returns-container .rental-income-container .net-income-label-equals {\n    text-align: center;\n    padding-top: 17px; }\n.returns-container .rental-income-container .equals-line-mobile {\n    border: 2px dashed #626262;\n    display: none; }\n.returns-container .rental-income-container .net-income-desc-two {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 20px;\n    color: #6580B6;\n    text-align: center; }\n.returns-container .rental-income-container .net-income-desc-two-custom {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 15px !important;\n    color: #6580B6;\n    text-align: center; }\n.returns-container .rental-income-container .net-income-total {\n    background: rgba(101, 128, 182, 0.1); }\n.returns-container .rental-income-container .net-income-header {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #626262; }\n.returns-container .rental-income-container .net-income-footer {\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #626262; }\n@media (max-width: 600px) {\n    .returns-container .rental-income-container .card-height {\n      height: 300px; }\n    .returns-container .rental-income-container .net-income-label-minus {\n      padding: 0px; }\n    .returns-container .rental-income-container .net-income-label-equals {\n      padding: 0px; }\n    .returns-container .rental-income-container .hidden-image {\n      height: 0px; }\n    .returns-container .rental-income-container .net-income-label-equals {\n      visibility: hidden; }\n    .returns-container .rental-income-container .net-income-image-padding {\n      padding-top: 0px;\n      text-align: center; }\n    .returns-container .rental-income-container .net-income-desc-two {\n      text-align: right;\n      padding-right: 10px; }\n    .returns-container .rental-income-container .net-income-desc-two-custom {\n      text-align: right;\n      padding-right: 10px; }\n    .returns-container .rental-income-container .what-happens-then-alignment {\n      text-align: center;\n      text-align-last: center; }\n    .returns-container .rental-income-container .net-income-label-equals-line {\n      visibility: hidden;\n      margin: 0px;\n      padding: 0px; }\n    .returns-container .rental-income-container .equals-line-mobile {\n      border: 2px solid #626262;\n      display: inline;\n      width: 100%; }\n    .returns-container .rental-income-container .net-income-label-customs {\n      text-align: right; }\n    .returns-container .rental-income-container .net-income-label-minus {\n      text-align: left; } }\n.returns-container .rental-income-container .net-income-label-equals-line {\n    display: inline;\n    font-size: 40px; }\n.returns-container .rental-income-container .net-income-label-minus-line {\n    font-size: 40px; }\n.returns-container .rental-income-container .net-income-label-equals-line-custom {\n    display: inline;\n    font-size: 35px; }\n.returns-container .rental-income-container .net-income-label-minus-line-custom {\n    font-size: 35px; }\n.returns-container .rental-income-container .header-title {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 18px;\n    color: #5C5C5C;\n    line-height: 21px;\n    margin-top: 30px; }\n.returns-container .rental-income-container .content-container {\n    padding-left: 15px;\n    padding-right: 15px; }\n.returns-container .rental-income-container .content-container .card-body-customs {\n      background: #F7F7F7;\n      padding: 20px; }\n.returns-container .rental-income-container .content-container .net-income-desc {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 20px;\n      color: #626262; }\n.returns-container .rental-income-container .content-container .net-income-desc-custom {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 15px;\n      color: #626262; }\n.returns-container .rental-income-container .content-container .net-income-number {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 20px;\n      color: #626262; }\n.returns-container .rental-income-container .content-container .operators {\n      font-weight: 900px; }\n.returns-container .rental-income-container .content-container .net-income-computation-customs {\n      margin-left: 80px;\n      margin-right: 80px; }\n.returns-container .rental-income-container .content-container .paragraph-description {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #5C5C5C;\n      line-height: 21px;\n      padding-bottom: 15px; }\n.returns-container .rental-income-container .content-container .paragraph-title {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 14px;\n      color: #5C5C5C;\n      line-height: 21px; }\n.returns-container .rental-income-container .content-container .computation-card hr {\n      border: 1px dashed #E6E6E6;\n      margin: 0px; }\n.returns-container .rental-income-container .content-container .computation-card .output-label {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      padding-top: 10px;\n      font-size: 16px;\n      color: #6580B6;\n      line-height: 21px; }\n.returns-container .rental-income-container .content-container .computation-card .output-label-two {\n      margin-top: 12px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #CD4945;\n      line-height: 21px; }\n.returns-container .rental-income-container .content-container .computation-card .output-label-three {\n      margin-top: 10px;\n      padding: 5px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #CD4945;\n      background: #FDDDDD;\n      border-radius: 17.5px;\n      line-height: 21px; }\n@media (max-width: 575.98px) {\n      .returns-container .rental-income-container .content-container {\n        padding-left: 0px;\n        padding-right: 0px; }\n        .returns-container .rental-income-container .content-container .net-income-label-minus-line-custom {\n          font-size: 25px; } }\n.returns-container .rental-income-container .image-container {\n    overflow: hidden;\n    padding-right: 25px; }\n.returns-container .rental-income-container .card-custom-title {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 22px;\n    color: #2C2C2C;\n    margin: 0px; }\n.returns-container .rental-income-container .line-customs {\n    border: 1px solid #E6E6E6; }\n.returns-container .rental-income-container .flexbox-container {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n.returns-container .rental-income-container .flexbox-container img {\n      margin: 1em;\n      max-width: 100%; }\n.returns-container .rental-income-container .flexbox-container .flexbox-content-one {\n      overflow: visible;\n      text-align: center;\n      flex-grow: 0.1;\n      height: 110px;\n      z-index: 1; }\n.returns-container .rental-income-container .flexbox-container .set-flex-right-margin {\n      margin-left: 50px; }\n.returns-container .rental-income-container .flexbox-container .flexbox-content-two {\n      flex-grow: 2;\n      margin-bottom: 20px;\n      width: 400px; }\n.returns-container .rental-income-container .flexbox-container span p, .returns-container .rental-income-container .flexbox-container span .container .row .returns-paragraph, .returns-container .container .row .rental-income-container .flexbox-container span .returns-paragraph, .returns-container .rental-income-container .flexbox-container span .container .row .returns-paragraph-two, .returns-container .container .row .rental-income-container .flexbox-container span .returns-paragraph-two {\n      margin: 0;\n      color: white; }\n.returns-container .rental-income-container .flexbox-container span {\n      background-color: #F8D053;\n      padding-top: 40px;\n      color: white;\n      display: inline-block;\n      border-radius: 50%;\n      width: 100px;\n      height: 100px;\n      text-align: center; }\n.returns-container .rental-income-container .flexbox-container .object-align {\n      text-align: center; }\n@media (max-width: 575.98px) {\n      .returns-container .rental-income-container .flexbox-container {\n        flex-direction: column; }\n        .returns-container .rental-income-container .flexbox-container .flexbox-content-one {\n          height: 100px; }\n        .returns-container .rental-income-container .flexbox-container .object-align {\n          text-align: center;\n          text-align-last: center;\n          width: 100%; }\n        .returns-container .rental-income-container .flexbox-container .flexbox-content-two {\n          height: 643px;\n          width: 100%;\n          margin-bottom: 0px; }\n        .returns-container .rental-income-container .flexbox-container .flex-custom-box {\n          height: 100% !important;\n          margin-bottom: 0px; }\n        .returns-container .rental-income-container .flexbox-container .net-income-computation-customs {\n          margin-left: 0px;\n          margin-right: 0px; }\n        .returns-container .rental-income-container .flexbox-container .set-flex-right-margin {\n          margin-left: 0px; } }\n.returns-container .container .row {\n    margin-top: 22px; }\n.returns-container .container .row em {\n      text-decoration: underline;\n      font-size: 18px;\n      font-synthesis: 21px; }\n.returns-container .container .row h2, .returns-container .container .row h3 {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      color: #2c2c2c;\n      line-height: 40px;\n      margin-top: 0px; }\n.returns-container .container .row h2 strong, .returns-container .container .row h3 strong {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.returns-container .container .row h2 {\n      font-size: 30px; }\n.returns-container .container .row h3 {\n      font-size: 27px; }\n.returns-container .container .row .returns-header {\n      font-size: 20px; }\n.returns-container .container .row p, .returns-container .container .row .returns-paragraph, .returns-container .container .row .returns-paragraph-two {\n      color: #626262;\n      font-size: 18px;\n      line-height: 27px;\n      margin-top: 20px; }\n.returns-container .container .row .returns-paragraph, .returns-container .container .row .returns-paragraph-two {\n      font-size: 14px;\n      color: #5C5C5C;\n      line-height: 21px;\n      margin-top: 0px;\n      padding-bottom: 20px; }\n.returns-container .container .row .returns-paragraph-two {\n      font-size: 16px; }\n.returns-container .container .row button {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 19px;\n      padding: 15px 25px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.returns-container .container .row a.checkout-link {\n      color: #10cfbd;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px; }\n.returns-container .container .row:last-child {\n      margin-bottom: 50px; }\n.returns-container .container .row .person {\n      border-bottom: 1px solid #dee2e6; }\n@media (max-width: 575.98px) {\n        .returns-container .container .row .person p, .returns-container .container .row .person .returns-paragraph, .returns-container .container .row .person .returns-paragraph-two {\n          font-size: 14px;\n          line-height: 1.5; } }\n.returns-container .container .row .computation {\n      font-size: 14px; }\n.returns-container .container .row .computation-table {\n      font-size: 16px;\n      line-height: 2.5; }\n.returns-container .container .row table th, .returns-container .container .row table td {\n      text-align: center;\n      color: #909090;\n      font-size: 14px; }\n.returns-container .container .row table th:first-child {\n      color: #fff;\n      background: #F8D053; }\n.returns-container .container .row table td:first-child {\n      background: #FEF6DD;\n      color: #CFAE45;\n      font-weight: bold; }\n:host ::ng-deep .tab-content {\n  padding: 0px; }\n:host ::ng-deep .returns-tabs .nav-tabs {\n  border-bottom: 1px solid #10cfbd; }\n@media (max-width: 575.98px) {\n  :host ::ng-deep .returns-tabs .nav-item {\n    flex: 1;\n    text-align: center; } }\n:host ::ng-deep .returns-tabs a.nav-link {\n  line-height: unset; }\n:host ::ng-deep .returns-tabs a.nav-link.active,\n:host ::ng-deep .returns-tabs a.nav-link:hover {\n  border-radius: 0;\n  background: #10cfbd;\n  font-weight: bold;\n  color: white;\n  border-bottom: 1px solid #10cfbd; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/returns/returns.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/main-app/pages/returns/returns.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReturnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsComponent", function() { return ReturnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReturnsComponent = /** @class */ (function () {
    function ReturnsComponent() {
    }
    ReturnsComponent.prototype.ngOnInit = function () {
    };
    ReturnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-returns',
            template: __webpack_require__(/*! ./returns.component.html */ "./src/app/modules/main-app/pages/returns/returns.component.html"),
            styles: [__webpack_require__(/*! ./returns.component.scss */ "./src/app/modules/main-app/pages/returns/returns.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReturnsComponent);
    return ReturnsComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\r\n  rel=\"stylesheet\"\r\n  href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\"\r\n  integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n\r\n<!-- Header Banner -->\r\n\r\n<section id=\"headerBannerId\">\r\n  <div class=\"header-banner-container\">\r\n    <div class=\"container\">\r\n      <h3>HOW DO I SELL MY PARTS?</h3>\r\n      <p>\r\n        We make it easy to sell your parts to other approved Accredited Investors. Read below the 4 quick steps\r\n      </p>\r\n      <img\r\n        src=\"../../../../../assets/selling-exiting/snapshots@2x.png\"\r\n        class=\"image-size\"\r\n      />\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header Banner end -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <div class=\"float-right\">\r\n                    <app-number-one-icon></app-number-one-icon>\r\n                  </div><br>\r\n                  <app-marketplace-icon></app-marketplace-icon>\r\n                  <h3>Choose a price</h3>\r\n                  <p>\r\n                    Firstly you need to set a price that you are comfortable with selling your parts. You can use the yearly property valuation to assist you with setting a price, or look at recent sale values for parts on a property.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body card-list-padding\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <div class=\"float-right\">\r\n                    <app-number-two-icon></app-number-two-icon>\r\n                  </div><br>\r\n                  <app-investors-icon></app-investors-icon>\r\n                  <h3>List on the Platform</h3>\r\n                  <p class=\"paragraph-custom\">\r\n                    Once you have set a price your parts will be listed on the platform for sale to other approved Accredited Investors. \r\n                  </p>\r\n                  <p>\r\n                    <small>Note - If other investors have also listed parts for sale in the same property, the lowest priced parts will be purchased by investors first.</small>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body card-parts-sold-padding\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <div class=\"float-right\">\r\n                    <app-number-three-icon></app-number-three-icon>\r\n                  </div><br>\r\n                  <app-receiving-icon></app-receiving-icon>\r\n                  <h3>Parts sold</h3>\r\n                  <p>\r\n                    If another investor does purchase one or more of your parts you will receive an email notification & the proceeds of the sale into your digital wallet.\r\n                  </p>\r\n                  <p>\r\n                    <small>\r\n                      Note - the usual transaction fee of 1.75% will apply to the sale of any parts. <a href=\"/#/app/our-fees\"> Please visit the Fees / Costs</a> page for more information\r\n                    </small>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <div class=\"float-right\">\r\n                    <app-number-four-icon></app-number-four-icon>\r\n                  </div><br>\r\n                  <app-bank-icon></app-bank-icon>\r\n                  <h3>Withdraw or Re-invest</h3>\r\n                  <p>\r\n                    Once your funds are in your digital wallet you now have the choice of whether to re-invest them in another property, or you can withdraw the funds to your bank account.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- <section id=\"footerBannerId\">\r\n  <div class=\"bottom-banner\">\r\n    <div class=\"container\">\r\n      <h3>You can contact the team</h3>\r\n      <p>\r\n          <app-web-logo-icon></app-web-logo-icon> &nbsp; www.keyobby.com &nbsp; | &nbsp; <app-email-logo-icon></app-email-logo-icon> &nbsp; team@keylobby.com &nbsp; | &nbsp; <i class=\"fab fa-facebook-f\"></i> &nbsp; <i class=\"fab fa-twitter\"></i>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerBannerId .header-banner-container {\n  text-align: center;\n  color: #fff;\n  background-image: url('Header@2x.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#headerBannerId .header-banner-container .image-size {\n    width: 900px; }\n#headerBannerId .header-banner-container h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 30px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container p {\n    padding-top: 20px;\n    padding-bottom: 70px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n@media only screen and (max-width: 768px) {\n  #headerBannerId .header-banner-container {\n    text-align: center;\n    color: #fff;\n    background-image: url('Header@2x.png');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n    #headerBannerId .header-banner-container .image-size {\n      width: 100%; }\n    #headerBannerId .header-banner-container h3 {\n      margin: 0;\n      padding-top: 104px;\n      font-size: 30px;\n      line-height: 40px;\n      color: #FFFFFF;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n    #headerBannerId .header-banner-container p {\n      padding-top: 20px;\n      padding-bottom: 70px;\n      font-size: 16px;\n      line-height: 24px;\n      color: #FFFFFF;\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; } }\n#contentId {\n  margin-top: 50px;\n  margin-bottom: 70px; }\n#contentId .center-text {\n    text-align: center; }\n#contentId .content-container {\n    margin-top: 50px; }\n#contentId .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    background-image: url(\"data:image/png;base64,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\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n#contentId .card .card-list-padding {\n      padding-bottom: 0px !important;\n      padding-top: 0px !important; }\n#contentId .card .card-parts-sold-padding {\n      padding-bottom: 0px;\n      padding-top: 6px; }\n#contentId .card .card-body-container {\n      margin-top: 40px;\n      margin-bottom: 70px; }\n#contentId .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 21px;\n        color: #2B303B;\n        text-align: center; }\n#contentId .card .card-body-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n#contentId .card .card-body-container .paragraph-custom {\n        margin-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SellingExitingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingExitingComponent", function() { return SellingExitingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellingExitingComponent = /** @class */ (function () {
    function SellingExitingComponent() {
    }
    SellingExitingComponent.prototype.ngOnInit = function () {
    };
    SellingExitingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selling-exiting',
            template: __webpack_require__(/*! ./selling-exiting.component.html */ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.html"),
            styles: [__webpack_require__(/*! ./selling-exiting.component.scss */ "./src/app/modules/main-app/pages/selling-exiting/selling-exiting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SellingExitingComponent);
    return SellingExitingComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/staying-property/staying-property.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/staying-property/staying-property.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header Banner -->\r\n\r\n<section id=\"headerBannerId\">\r\n  <div class=\"header-banner-container\">\r\n    <div class=\"container\">\r\n      <h3>STAYING AT THE PROPERTY</h3>\r\n      <p>\r\n        As a part owner you are welcome to book and stay at any property that you own parts in. We are able to extend a small discount to you, and you will get first access to book the property.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header Banner end -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\" style=\"padding-bottom: 0px;\">\r\n            <div class=\"card-body card-body-custom\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-save-icon></app-save-icon>\r\n                  <h3>Discounted Rate</h3>\r\n                  <p>\r\n                    As a direct booking via Key Lobby (the management company) you will be entitled to a discounted rate at the property.\r\n                  </p>\r\n                  <p>\r\n                    This usually equates to an approximate 10% discount, and is equal to the booking fees that would usually be incurred. For example, we usually pay a % booking fee to sites such as Airbnb for each booking. In addition you will usually pay a similar booking fee.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\" style=\"margin-bottom: 93px;\">\r\n                <div class=\"center-text\">\r\n                  <app-open-icon></app-open-icon>\r\n                  <h3>Access First</h3>\r\n                  <p>\r\n                    You will have first access to newly opened calendar months for the properties you own parts in. This means that you can book a property for a stay before it is opened up to the general public. \r\n                  </p>\r\n                  <p>\r\n                    We allow bookings up to 9 months in advance for public bookings, and 12 months in advance for part owners.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"content-bottom-container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <img src=\"../../../../../assets/staying-at-the-property/Image@2x.png\" class=\"image-size\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div left-text>\r\n                      <h3>Already a part owner?</h3>\r\n                      <p>\r\n                        Simply log into your dashboard, choose your property and make a booking\r\n                      </p>\r\n                      <br />\r\n                      <a href=\"/#/login\" class=\"btn btn-primary btn-lg\">Log in now</a>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"footerBannerId\">\r\n  <div class=\"bottom-banner\">\r\n    <div class=\"container\">\r\n      <h3>How does this affect returns?</h3>\r\n      <p>\r\n        I have hinted that I would often jerk poor Queeequeg from between the\r\n        whale and the ship--where he would occasionally fall, from the incessant\r\n        rolling and swaying of both. But this was not the only jamming jeopardy\r\n        he was exposed to.\r\n      </p>\r\n      <button class=\"btn btn-primary btn-lg\">Talk to Our Team</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/staying-property/staying-property.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/staying-property/staying-property.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerBannerId .header-banner-container {\n  text-align: center;\n  color: #fff;\n  background-image: url('Header@2x.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#headerBannerId .header-banner-container h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 30px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container p {\n    padding-top: 20px;\n    padding-bottom: 70px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#contentId {\n  margin-top: 50px;\n  margin-bottom: 70px; }\n#contentId .center-text {\n    text-align: center; }\n#contentId .content-container {\n    margin-top: 50px; }\n#contentId .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    background-image: url(\"data:image/png;base64,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\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n#contentId .card .card-body-custom {\n      padding-bottom: 0px !important; }\n#contentId .card .card-body-container {\n      margin-top: 40px;\n      margin-bottom: 70px; }\n#contentId .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 21px;\n        color: #2B303B;\n        text-align: center; }\n#contentId .card .card-body-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n#contentId .content-bottom-container {\n    padding: 30px 60px 40px 20px;\n    background-color: #FAFAFA; }\n#contentId .content-bottom-container .left-text {\n      text-align: left; }\n#contentId .content-bottom-container .image-size {\n      height: 300px;\n      width: 515px; }\n#contentId .content-bottom-container h3 {\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 21px;\n      color: #2B303B;\n      text-align: left; }\n#contentId .content-bottom-container p {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 22px;\n      color: #5C5C5C;\n      text-align: left;\n      line-height: 31px; }\n#contentId .content-bottom-container .btn-primary {\n      background: #10CFBD;\n      border-radius: 4px;\n      padding-left: 120px;\n      padding-right: 120px;\n      padding-top: 15px;\n      padding-bottom: 15px;\n      margin-bottom: 90px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      text-align: center;\n      border-color: #10CFBD; }\n@media only screen and (max-width: 768px) {\n    #contentId .content-bottom-container {\n      padding: 30px 25px 40px 20px;\n      background-color: #FAFAFA; }\n      #contentId .content-bottom-container .left-text {\n        text-align: left; }\n      #contentId .content-bottom-container .image-size {\n        height: 300px;\n        width: 100%; }\n      #contentId .content-bottom-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 21px;\n        color: #2B303B; }\n      #contentId .content-bottom-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 22px;\n        color: #5C5C5C;\n        line-height: 31px; }\n      #contentId .content-bottom-container .btn-primary {\n        background: #10CFBD;\n        border-radius: 4px;\n        padding-left: 50px;\n        border-color: #10CFBD;\n        padding-right: 50px;\n        padding-top: 15px;\n        width: 100%;\n        padding-bottom: 15px;\n        margin-bottom: 90px;\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 16px;\n        color: #FFFFFF;\n        text-align: center; } }\n#footerBannerId .bottom-banner {\n  padding-top: 10px;\n  text-align: center;\n  color: #fff;\n  background-image: url('Bg_sm.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#footerBannerId .bottom-banner h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 35px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner p {\n    padding-top: 20px;\n    padding-bottom: 5px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner .btn-primary {\n    background: #10CFBD;\n    border-radius: 4px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 90px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #FFFFFF;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n  #footerBannerId .bottom-banner {\n    padding-top: 10px;\n    text-align: center;\n    color: #fff;\n    background-image: url('Bg_sm.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n    #footerBannerId .bottom-banner h3 {\n      margin: 0;\n      padding-top: 104px;\n      font-size: 35px;\n      line-height: 40px;\n      color: #FFFFFF;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n    #footerBannerId .bottom-banner p {\n      padding-top: 20px;\n      padding-bottom: 5px;\n      font-size: 16px;\n      line-height: 24px;\n      color: #FFFFFF;\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n    #footerBannerId .bottom-banner .btn-primary {\n      background: #10CFBD;\n      border-radius: 4px;\n      padding-left: 50px;\n      padding-right: 50px;\n      padding-top: 15px;\n      padding-bottom: 15px;\n      margin-bottom: 90px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      width: 100%;\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/staying-property/staying-property.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/staying-property/staying-property.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StayingPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StayingPropertyComponent", function() { return StayingPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StayingPropertyComponent = /** @class */ (function () {
    function StayingPropertyComponent() {
    }
    StayingPropertyComponent.prototype.ngOnInit = function () {
    };
    StayingPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staying-property',
            template: __webpack_require__(/*! ./staying-property.component.html */ "./src/app/modules/main-app/pages/staying-property/staying-property.component.html"),
            styles: [__webpack_require__(/*! ./staying-property.component.scss */ "./src/app/modules/main-app/pages/staying-property/staying-property.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StayingPropertyComponent);
    return StayingPropertyComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header Banner -->\r\n\r\n<section id=\"headerBannerId\">\r\n  <div class=\"header-banner-container\">\r\n    <div class=\"container\">\r\n      <h3>WHO DOES IT SUIT</h3>\r\n      <p>\r\n        Not every investment is suitable to every investor and you need to make sure it makes sense for you. <br>\r\n        We have prepared some of the key criteria you should consider before investing in properties offered on the Partbnb platform\r\n      </p>\r\n      <!-- <p>\r\n        We have prepared some of the key criteria you should consider before investing in properties offered on the Partbnb platform\r\n      </p> -->\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Header Banner end -->\r\n\r\n<section id=\"contentId\">\r\n  <div class=\"content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-investor-icon></app-investor-icon>\r\n                  <h3>Accredited Investor</h3>\r\n                  <p>\r\n                      Our offer is currently only available to Accredited Investors.<br />\r\n                      This is a person with either a net worth of $1M (excluding their main residence) or income of $200k p/a (single) / $300k p/a (Joint)\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-yields-icon></app-yields-icon>\r\n                  <h3>Short Term Vacation Rentals</h3>\r\n                  <p>\r\n                    The properties that we offer on the platform are all rented out as short term vacation rentals. This means that occupancy / rates can fluctuate, and often there are low / high seasons. This usually means that income can rise or fall at different times of the year.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-long-term-icon></app-long-term-icon>\r\n                  <h3>Long Term Horizon</h3>\r\n                  <p>\r\n                    Real estate values have traditionally risen over time worldwide. However these gains are usually measured over years, and you should expect shorter term rises & falls depending on the local and global market.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-diversify-icon></app-diversify-icon>\r\n                  <h3>Investment Diversification</h3>\r\n                  <p>\r\n                    Purchasing smaller parts of a larger number of properties helps to achieve diversification. This can reduce your risk of a single event impacting the performance of your overall portfolio.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-staying-icon></app-staying-icon>\r\n                  <h3>Stay at Your Property</h3>\r\n                  <p>\r\n                    All part holders are entitled to early access and preferred rates to any property they hold parts in. Note - the discount applied does not affect other investors as the discount is based on the advertising / booking fee savings made from a direct booking.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-body-container\">\r\n                <div class=\"center-text\">\r\n                  <app-ownership-icon></app-ownership-icon>\r\n                  <h3>No Hassle Ownership</h3>\r\n                  <p>\r\n                    The management of the property, accounts, bookings, maintenance etc is 100% managed by KeyLobby - this means that you don’t need to worry. \r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"footerBannerId\">\r\n  <div class=\"bottom-banner\">\r\n    <div class=\"container\">\r\n      <h3>Still not sure if this type of investment suits you?</h3>\r\n      <p>\r\n        Let us know what you need. Our team of experts are always on the go\r\n        helping you out!\r\n      </p>\r\n      <button class=\"btn btn-primary btn-lg\">Talk to Our Team</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n#headerBannerId .header-banner-container {\n  text-align: center;\n  color: #fff;\n  background-image: url('Header@2x.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#headerBannerId .header-banner-container h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 30px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#headerBannerId .header-banner-container p {\n    padding-top: 20px;\n    padding-bottom: 70px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#contentId {\n  margin-top: 50px;\n  margin-bottom: 70px; }\n#contentId .center-text {\n    text-align: center; }\n#contentId .content-container {\n    margin-top: 50px; }\n#contentId .card {\n    box-shadow: 1px 1px 35px #CCCCCC;\n    background-image: url(\"data:image/png;base64,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\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%; }\n#contentId .card .card-body-container {\n      margin-top: 40px;\n      margin-bottom: 70px; }\n#contentId .card .card-body-container h3 {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 21px;\n        color: #2B303B;\n        text-align: center; }\n#contentId .card .card-body-container p {\n        font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 14px;\n        color: #5C5C5C;\n        text-align: center;\n        line-height: 21px; }\n#footerBannerId .bottom-banner {\n  padding-top: 10px;\n  text-align: center;\n  color: #fff;\n  background-image: url('Bg_sm.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n#footerBannerId .bottom-banner h3 {\n    margin: 0;\n    padding-top: 104px;\n    font-size: 35px;\n    line-height: 40px;\n    color: #FFFFFF;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner p {\n    padding-top: 20px;\n    padding-bottom: 5px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #FFFFFF;\n    font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif; }\n#footerBannerId .bottom-banner .btn-primary {\n    background: #10CFBD;\n    border-color: #10CFBD;\n    border-radius: 4px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 90px;\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    color: #FFFFFF;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n    #footerBannerId .bottom-banner .btn-primary {\n      background: #10CFBD;\n      border-color: #10CFBD;\n      border-radius: 4px;\n      padding-left: 50px;\n      padding-right: 50px;\n      padding-top: 15px;\n      padding-bottom: 15px;\n      margin-bottom: 90px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 16px;\n      color: #FFFFFF;\n      text-align: center;\n      width: 100%; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WhoDoesItSuitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoDoesItSuitComponent", function() { return WhoDoesItSuitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoDoesItSuitComponent = /** @class */ (function () {
    function WhoDoesItSuitComponent() {
    }
    WhoDoesItSuitComponent.prototype.ngOnInit = function () {
    };
    WhoDoesItSuitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-who-does-it-suit',
            template: __webpack_require__(/*! ./who-does-it-suit.component.html */ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.html"),
            styles: [__webpack_require__(/*! ./who-does-it-suit.component.scss */ "./src/app/modules/main-app/pages/who-does-it-suit/who-does-it-suit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhoDoesItSuitComponent);
    return WhoDoesItSuitComponent;
}());



/***/ }),

/***/ "./src/app/modules/main-app/pages/why-invest/why-invest.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/why-invest/why-invest.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"why-invest-container\">\r\n  <div class=\"banner\">\r\n    <div class=\"container\">\r\n      <h3>WHY INVEST IN A PROPERTY</h3>\r\n      <p>We think investing in Real Estate is a great way to diversify your portfolio. Find out more about why you should consider this asset class.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex flex-column-reverse flex-lg-row\">\r\n      <div class=\"col-md-6\">\r\n        <h2><strong>Real Estate is simple and easy to understand</strong></h2>\r\n        <p class=\"pr-5\">\r\n          Read the financial statements of a company you own stock in, or try to make head and tail of a profit / loss statement for a large corporation - you will understand why Real Estate is so much simpler.\r\n        </p>\r\n        <p>\r\n          It is very simply to calculate income on a Vacation rental (Nightly Rate * Occupancy Rate * 365).\r\n        </p>\r\n        <p>\r\n          Then once you have taken into account of expenses, you will know your Net income, and very quickly your NET yield on the investment. At Partbnb we have made it simple and transparent on all of these figures for every project.\r\n        </p>\r\n        <br />\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/why-invest/Image1@2x.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/why-invest/Image2@2x.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n      <div class=\"col-md-6 pl-5\">\r\n        <h2>You own a physical Asset / Security</h2>\r\n        <p>\r\n          A property is something that you can visit, touch, stand in. It is one of the few investments where you can physically review your investment, versus stocks where you will likely never see any of the companies physical assets\r\n        </p>\r\n        <p>\r\n          In fact Partbnb allows part owners to book and stay at a discounted rate in the property that they own. This means you can go and visit your property, and touch the walls if you wish!\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row d-flex flex-column-reverse flex-lg-row\">\r\n      <div class=\"col-md-6\">\r\n          <h2>Stability in Income</h2>\r\n          <p>\r\n            Everyone needs a place to live, or in our case a place to stay when they are on vacation. While stock markets move up and down, businesses go profitable and unprofitable, there is always a need for accomodation.\r\n          </p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/why-invest/Image3@2x.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <img src=\"assets/img/why-invest/Image4@2x.png\" class=\"img-fluid\" alt=\"\" />\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h2>Long Term Appreciation</h2>\r\n        <p>\r\n          Over the long term property has been shown to rise in price, providing capital growth (or gains) to those that own it. Partbnb ensures that investors are able to take advantage of these gains, but selling their parts on the platform in the future and realising the difference.\r\n        </p>\r\n        <p>\r\n          Of course prices don't always increase, and there is always a risk that over a time period the property value may decrease.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-fluid bottom-banner\">\r\n    <div class=\"row py-5\">\r\n      <div className=\"col-sm-12 col-md-12 col-lg-8 col-xl-8 mx-auto\">\r\n        <h3 class=\"bottom-banner-header text-center bottom-banner-header text-center m-auto px-5 mb-5\">Here's how much the median home value in the U.S. has changed between 1940 and 2000:</h3>\r\n        <img class=\"img-fluid d-none d-md-block mx-auto my-5\" src=\"assets/img/why-invest/bottom-chart.png\" />\r\n        <img class=\"img-fluid d-block d-md-none mx-auto my-5\" src=\"assets/img/why-invest/bottom-chart-mobile.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/why-invest/why-invest.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/why-invest/why-invest.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.why-invest-container {\n  font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n  background-color: #fff; }\n.why-invest-container .banner {\n    position: relative;\n    text-align: center;\n    color: #fff;\n    background-image: url(\"/assets/img/how-does-it-work/banner.png\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    z-index: 0;\n    padding: 0rem 0rem 6rem; }\n.why-invest-container .banner:before {\n      content: \"\";\n      position: absolute;\n      background: linear-gradient(-134deg, #181328 0%, #463B6D 100%);\n      opacity: .5;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: -1; }\n.why-invest-container .banner h3 {\n      margin: 0;\n      padding-top: 104px;\n      font-size: 30px;\n      line-height: 40px;\n      color: #fff;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.why-invest-container .banner p {\n      padding-top: 20px;\n      padding-bottom: 70px;\n      font-size: 20px;\n      line-height: 30px; }\n.why-invest-container .container .row {\n    margin-top: 100px; }\n.why-invest-container .container .row em {\n      text-decoration: underline;\n      font-size: 18px;\n      font-synthesis: 21px; }\n.why-invest-container .container .row h2, .why-invest-container .container .row h3 {\n      font-family: \"helveticaregular\", Arial, \"Lucida Grande\", sans-serif;\n      color: #2c2c2c;\n      line-height: 40px;\n      margin-top: 0px; }\n.why-invest-container .container .row h2 strong, .why-invest-container .container .row h3 strong {\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.why-invest-container .container .row h2 {\n      font-size: 30px; }\n.why-invest-container .container .row h3 {\n      font-size: 27px; }\n.why-invest-container .container .row p {\n      color: #626262;\n      font-size: 18px;\n      line-height: 27px;\n      margin-top: 20px; }\n.why-invest-container .container .row button {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 19px;\n      padding: 15px 25px;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif; }\n.why-invest-container .container .row a.checkout-link {\n      color: #10cfbd;\n      font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n      font-size: 18px; }\n.why-invest-container .container .row:last-child {\n      margin-bottom: 50px; }\n.bottom-banner {\n  background-image: url(\"/assets/img/why-invest/Bg_bot@2x.png\"); }\n.bottom-banner-header {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    font-size: 24px;\n    width: 50%;\n    color: white; }\n.bottom-banner img {\n    width: 50%; }\n@media (max-width: 991px) {\n    .bottom-banner img {\n      width: 90%; }\n    .bottom-banner-header {\n      width: 100%; } }\n@media (max-width: 543px) {\n    .bottom-banner > img {\n      width: 90%;\n      display: none; } }\n@media (max-width: 991px) {\n  .why-invest-container .banner {\n    position: inherit; } }\n@media only screen and (max-width: 768px) {\n  .why-invest-container .banner h3 {\n    padding-top: 70px;\n    font-size: 20px;\n    line-height: 40px; }\n  .why-invest-container .banner p {\n    font-size: 14px;\n    line-height: 20px; }\n  .why-invest-container .container {\n    padding: 0 6%; }\n    .why-invest-container .container .row {\n      text-align: center;\n      margin-top: 0px; }\n      .why-invest-container .container .row img {\n        margin-top: 30px;\n        float: right; }\n      .why-invest-container .container .row em {\n        font-size: 14px;\n        font-synthesis: 21px; }\n      .why-invest-container .container .row h3 {\n        font-size: 22px;\n        line-height: 32px; }\n      .why-invest-container .container .row p {\n        font-size: 14px;\n        line-height: 21px; } }\n"

/***/ }),

/***/ "./src/app/modules/main-app/pages/why-invest/why-invest.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/main-app/pages/why-invest/why-invest.component.ts ***!
  \***************************************************************************/
/*! exports provided: WhyInvestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyInvestComponent", function() { return WhyInvestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyInvestComponent = /** @class */ (function () {
    function WhyInvestComponent() {
    }
    WhyInvestComponent.prototype.ngOnInit = function () {
    };
    WhyInvestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-why-invest',
            template: __webpack_require__(/*! ./why-invest.component.html */ "./src/app/modules/main-app/pages/why-invest/why-invest.component.html"),
            styles: [__webpack_require__(/*! ./why-invest.component.scss */ "./src/app/modules/main-app/pages/why-invest/why-invest.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyInvestComponent);
    return WhyInvestComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/property-details.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/constants/property-details.ts ***!
  \******************************************************/
/*! exports provided: TABS, PROPERTY_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS", function() { return TABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTY_STATUS", function() { return PROPERTY_STATUS; });
var TABS = {
    SUMMARY: 0,
    FINANCIAL_DETAILS: 1,
    PROPERTY_LOCATION: 2,
    PROPERTY_DETAILS: 3
};
var PROPERTY_STATUS = {
    PRE_ORDER: 1,
    ORDER: 2,
    COMING_SOON: 3
};


/***/ }),

/***/ "./src/app/shared/utilities/groupBy.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utilities/groupBy.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};
/* harmony default export */ __webpack_exports__["default"] = (groupBy);


/***/ }),

/***/ "./src/assets/data/faq.json":
/*!**********************************!*\
  !*** ./src/assets/data/faq.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, default */
/***/ (function(module) {

module.exports = [{"Category":"About Partbnb","Queries":"What is Partbnb?","Answers":"Partbnb is a platform that serves as a one stop platform to facilitate fractional investment in secure assets such as vacation, holiday properties. Partbnb related entities identify, renovate, list rentals and operate the properties for the benefit of investors. Each property is offered as a unique LLC allowing Partbnb members to purchase units (\"Parts\") and participate in the rental income and appreciation of the units purchased. The platform also provides a market to relist or trade shares to provide liquidity to the investments."},{"Category":"About Partbnb","Queries":"Where is the company based?","Answers":"We are a Delaware based company, our office is located at 2 Park Avenue, New York City."},{"Category":"About Partbnb","Queries":"How do I know you are credible?","Answers":"Partbnb LLC is a Delaware based company, and is registered under the \"Part D\" regulation with the US Securities & Exchange commission. This allows Accredited Investors to invest in this property. "},{"Category":"About Partbnb","Queries":"What regulations do you operate under?","Answers":"Part D of the SEC regulation- Rule 506(c) allows issuers to use general solicitation and general advertising, provided all purchasers are accredited investors and the issuer takes reasonable steps to verify their accredited investor status. Issuers may sell unlimited amounts of securities under Rule 506(c)."},{"Category":"Benefits / Returns","Queries":"How Does Fractional Ownership Differ From Time Shares?","Answers":"Fractional owners are primarily driven by the economic benefits of the asset- as investors. Time Share owners are driven by the access to use of the property. Fractional ownership structures are designed to expand the base of investors with access to participate in the economic interests of the asset. Fractional ownership's business model is to effectively acquire and maximize value of the asset over the holding period through operating income and long term gain potential. Time share ownership is designed to maximize the initial purchase price value of the asset from the standpoint of the seller, typically create barriers to ownership transfer and limit cashflow and long term gains through management fees."},{"Category":"Benefits / Returns","Queries":"What are the returns?","Answers":"Our target returns for properties will be in the 7-9% per annum range for Income return, and then there are also potential capital growth gains on top of that. \n\nYou will be able to view details of each particular property on the website, and the projected financials. In addition to this we will supply an offering memorandum that will detail those projected returns."},{"Category":"Benefits / Returns","Queries":"Investor Benefits","Answers":"1. Rental Income - Part holders receive passive income from the rent by renting it out as a vacation rental.\n2. Property Value Appreciation - Investors will have a share from the increase in the property value over time.\n3. Use of Property - As a side benefit, you will have the ability to stay at the property for a discounted rate. (usually around 10%)"},{"Category":"Benefits / Returns","Queries":"Do part owners get a discount to stay?","Answers":"Partholders receive a discount for staying at the property that is equivalent to the booking fees/ advertising costs that wound normally be due for any member of the public staying (this is usually around 10%). This is to ensure that other investors are not disadvantaged should someone wish to use the property."},{"Category":"Benefits / Returns","Queries":"How do I book the property as an owner?","Answers":"There is a special link to book the property provided in your dashboard which will automatically enable the discount"},{"Category":"Buying / Selling Parts","Queries":"Is there a minimum or maximum part/share order?","Answers":"There is NO minimum or maximum orders of share. \n\nPlease note that for Pre-order period, there is a minimum and maximum."},{"Category":"Buying / Selling Parts","Queries":"How are Part Values calculated?","Answers":"Part/Share value is precisely the total costs to acquire the property, perform renovations and position the asset for maximum rental income divided by the target number of units to be sold."},{"Category":"Buying / Selling Parts","Queries":"Can we open a joint account for the investment?","Answers":"This facility is not available with us at this stage."},{"Category":"Buying / Selling Parts","Queries":"Does my name appear on the title?\n\n","Answers":"The title is owned by a US LLC (limited liability company). As a part owner you will have an economic share in this company and accordingly will receive any income from that company. \n"},{"Category":"Buying / Selling Parts","Queries":"Can companies purchase shares?","Answers":"At this time, this offer is available to individual investors. However, you will surely be notified once this has been opened to company investors in the future. Please sign up so we can inform you should this become admissible."},{"Category":"Buying / Selling Parts","Queries":"How do I sell my parts?","Answers":"There is no minimum and maximum term for the ownership. Once the offering is fully subscribed, there is no minimum holding period. \n\nShould you decide to sell your shares in the future, you may simply list and sell them on the platform anytime at the price of your choosing. There are investors viewing the platform all the time, and if the price you have offered is reasonable it should sell in a timely manner. If your part(s) is/are not selling, you may look to lower your rate slightly. We will provide a property valuation every year to help investors with understanding what is a reasonable market valuation for the property. All investment income (and sales of part shares) will be returned to the investors' \"digital wallet\" account (found in your logged in area in the website). You can request for this money to be deposited back to your linked bank account, or wired back to you (note there are transfer fees)."},{"Category":"Buying / Selling Parts","Queries":"Is this transferrable? Can I transfer my investment to my beneficiaries?","Answers":"Yes. The operating agreement will provide for unit transfer as a result of death to direct family members without utilizing the platform sales process."},{"Category":"Eligibility","Queries":"Who is eligible?","Answers":"This offer is available to US Residents who are Accredited Investors."},{"Category":"Eligibility","Queries":"What is an Accredited Investor?","Answers":"An accredited investor, in summary, is someone who has a net worth, excluding your private residence, of $1M, or an annual income of more than $200,000 (single) or $300,000 (couple)."},{"Category":"Eligibility","Queries":"Why Have an Accredited Investor Restriction?","Answers":"The accredited investor definition attempts to identify those persons whose financial sophistication and ability to sustain the risk of loss of investment or ability to fend for themselves render the protections of the Securities Act’s registration process unnecessary. "},{"Category":"Payments / Fees","Queries":"When are returns paid?","Answers":"All returns shown on the website are annualised. Income is paid monthly (within 15 days of the end of a month) to part holders, and any capital gain (or losses) occur when the part holder decides to sell those parts on the platform"},{"Category":"Payments / Fees","Queries":"Are there any foreign tax issues?","Answers":"There are no foreign tax complexities, each property is held by a Delaware based LLC which operates as a Partnership, and thus any income will be directly paid to investors, along with the appropriate documents to include on your tax filing each year. \n\nAs a US, Delaware LLC, investors will receive an annual K1 by 3-31 of each year.  The K1 will provide all information necessary to report income and expenses including depreciation.\n\nNote: Partbnb does not provide any advice or assistance with tax payments, you should consult with your accountant."},{"Category":"Payments / Fees","Queries":"What about other associated operational fees (ex. HOA fees)?","Answers":"All expense details are specified Financial Details section of each property on the website and also stipulated in the Private Placement Memorandum for each property and returns are indicated on a Gross and Net basis (after expenses). \n\nThese expenses may be subject to change (e.g. HOA fees can increase over time) and investors will be advised of any changes to the financial projections of a property."},{"Category":"Payments / Fees","Queries":"How do I track the income and capital growth?","Answers":"You can track the performance of your property using your Dashboard when you log in. This will show you the income payments received each month, the balance of your digital wallet, and updated data on the value of your parts (based on recent sales through the platform).\n\nPartbnb will also provide an annual valuation estimate of the property based on factors such as market rental rate changes and trends, sales comparisons for similar properties and performance of the subject property relative to overall market occupancy.  The valuation will be informal (no certified appraiser used) but based on available market data.  The actual value will be determined by unit transfer sales."},{"Category":"Payments / Fees","Queries":"How are returns paid to me?","Answers":"All investment income (and sales of part shares) will be returned to the investors \"digital wallet\" account (found in your logged in area). You can request for this money to be deposited back to your linked bank account, or wired back to you (note there are transfer fees)"},{"Category":"Payments / Fees","Queries":"How is stamp duty handled?","Answers":"Stamp duty varies depending on the country the property is located in. For instance it is 10% in the Bahamas (5% buyer and 5% seller) and 7.5% in the Cayman Islands. During the property purchase phase we will calculate the correct stamp duty and ensure it is included in the Project cost calculation. \n\nWhen you purchase costs the stamp duty (and all other setup costs) have already been included. The only additional cost is our 1.75% transaction fee on any part purchases or sales"},{"Category":"Payments / Fees","Queries":"Will I have to pay to maintain the property?","Answers":"During the renovation all deferred maintenance will be addressed in the initial improvements. In addition, during the property setup we allocate a 1% budget upfront for any maintenance that may need to be done in Year 1. We also allocate 1% of the property value as a yearly maintenance fund which is listed as a \"Maintenance Expense\". \n\nThis will roll over to future years if it is unused. In the extremely unlikely event that a severe maintenance event strikes that exceeds this fund (and exceeds any available income for the property) we may arrange a short term loan to cover these costs, with principal & interest to be deducted from future income."},{"Category":"Payments / Fees","Queries":"Are there any fees involved in selling my shares?","Answers":"There will be an administration fee of 1.75% when you buy or sell your share/s on the platform."},{"Category":"Process","Queries":"How do I sign up?","Answers":"1. Sign Up - Click on the Sign Up button from the homepage\n2. Fill out required information\n3. Submit\n4. Review property details - Go to the Properties page\n5. Top up your Account with Funds (ACH or Wire Transfer)\n8. Reserve or Buy Parts\n9. View your shares on the Dashboard\n10. Receive a Confirmation Email"},{"Category":"Properties","Queries":"How do we know the quality of the property?","Answers":"All properties are examined by a registered builder to ensure that they are up to building codes. Like in most markets, we must also ensure that properties are presented to a high standard to receive local approval to operate as a Vacation Rental."},{"Category":"Properties","Queries":"What is the occupancy rate in the area?","Answers":"You can find out all about the project rates / occupancy of a property by looking at the details page of your target property. In addition, we also supply some of the suburb information so you can get an idea of how nearby properties are performing."},{"Category":"Properties","Queries":"Which booking platforms will they be posted on?","Answers":"All rental properties will be advertised on Airbnb, Trip Advisor, VRBO / HomeAway."},{"Category":"Properties","Queries":"Who manages the property and the bookings?","Answers":"KeyLobby, our property management company, will be managing the operations including handling of bookings, cleanings, rental payments and other management activities of the properties."},{"Category":"Properties","Queries":"Why the Caribbean?","Answers":"Partbnb identified the Caribbean and adjacent regions as an area with high demand for vacation stays with a relatively disjointed offering of properties. Through the use of widely accepted internet based rental listing services, Partbnb can provide a standardized product offering through KeyLobby to benefit owners of individual properties."},{"Category":"Risks","Queries":"What are the risks?","Answers":"Risks are always present in any investment. However, it is viable to balance risk vs reward. \n\nSome of the key risks of this type of investment are:\n- Property is damaged or destroyed in a weather event. This has been addressed by Partbnb by having all properties fully insured\n- Short Term vacation rental market suffers a downturn resulting in poor returns. It is normal in the lower seasons of travel for occupancy to be lower and income levels to be reduced. Projected returns are based on an annual basis so you can expect some variation month to month\n- Unavailability or Collapse of Partbnb LLC platform makes it harder to re-sell your shares easily. Although this is just a potential risk foreseen but note that this could NOT be possible as well. Should this happen, we have a technical team of experts who will take care of the issue"},{"Category":"Risks","Queries":"What happens to the properties in event of a major disaster (e.g. Hurricane)?","Answers":"In times of hurricanes, the properties are fully insured and should the worst happen, investors will be repaid the current property value, less any excess and any other costs."}];

/***/ })

}]);
//# sourceMappingURL=modules-main-app-main-app-module.js.map