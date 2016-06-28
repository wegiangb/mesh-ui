'use strict';

var MV = MV || {};

if ( 'undefined' !== typeof exports && 'undefined' !== typeof module ) {
  MV.Progress = require('./Progress.js');
  MV.RoundedBarGeometry = require('./RoundedBarGeometry.js');
}

MV.ProgressBar = function(options) {
  MV.Progress.call(this);

  this.options = _.defaults(options || {}, MV.ProgressBar.OPTIONS);

  this._colors = this.options.colors;
  this._values = this.options.values;

  this.init(this.options);

  this._update();
};

MV.ProgressBar.OPTIONS = {
  bgColor: '#666666',
  colors: ['#9c27b0','#2196f3','#e91e63','#00bcd4'],
  values: [0],
  bg: true,
  width: 1,
  thickness: 0.04,
  rounded: true,
  lit: false,
  segments: 16,
  gradient: false
};

MV.ProgressBar.prototype = Object.create(MV.Progress.prototype);

MV.ProgressBar.prototype.init = function(options) {
  this._init(options, 'bar');
};

MV.ProgressBar.prototype._update = function() {
  this._draw(this.ctx, this.canvas, this._values, this._colors, this.options);

  this.texture.needsUpdate = true;

  /* else {
    var colorL, colorR;

    if (pc === 1) {
      colorL = opts.activeColor;
      colorR = opts.activeColor;
    } else if (pc !== 0) {
      colorL = opts.activeColor;
      colorR = opts.bgColor;
    } else { // pc === 0
      colorL = opts.bgColor;
      colorR = opts.bgColor;
    }

    this.matL.color.setStyle( colorL );
    this.matR.color.setStyle( colorR );
  }*/

  //this.progressC.scale.setX(pc);
  //this.seekC.scale.setX(1-pc);
};

MV.ProgressBar.prototype.update = function(dt) {
  this._update();
};

if ( 'undefined' !== typeof exports && 'undefined' !== typeof module ) {
  module.exports = MV.ProgressBar;
}