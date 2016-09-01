'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Unfocused = function Unfocused(unFocusTitle) {

  if (typeof document.hidden !== 'undefined') {
    (function () {
      var initialTitle = document.title;

      document.addEventListener('visibilitychange', function () {
        document.title = document['visibilityState'] === 'hidden' ? unFocusTitle : initialTitle;
      });
    })();
  }
};

exports.default = Unfocused;