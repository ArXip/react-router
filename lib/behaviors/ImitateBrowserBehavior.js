'use strict';

var LocationActions = require('../actions/LocationActions');

var scrollTo = function scrollTo(position) {
    position || ( position = { x: 0, y: 0 } )
    window.scrollTo( position.x, position.y )
    setImmediate( function() {
        window.scrollTo( position.x, position.y )
    } )
}

/**
 * A scroll behavior that attempts to imitate the default behavior
 * of modern browsers.
 */
var ImitateBrowserBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        scrollTo()
        break;
      case LocationActions.POP:
        scrollTo( position )
        break;
    }
  }

};

module.exports = ImitateBrowserBehavior;
