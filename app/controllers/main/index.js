
/**
 * Module: Main
 */

var util = require( 'util' ),
	System = require( './../system/index' );

function Main( ) {
	System.apply( this, arguments );

	this.name = 'main';
}

util.inherits( Main, System );

/**
 * Method: _getBodyContent
 */

Main.prototype._getBodyContent = function( ) {
	return this._loadFile( '/controllers/main/views/main.html' );
};

/* */

module.exports = Main;
