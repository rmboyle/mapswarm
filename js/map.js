//constructor
var SwarmListener = function(options, map) {
	this.options = options;
	this.participants = {};
	this.map = map;
};

SwarmListener.prototype.onConnect = function() {
	var self = this;

	return function() {
		console.log(JSON.stringify(self.options));
	}
};

SwarmListener.prototype.onPresence = function() {
	var self = this;

	return function(presence) {
		var resource = presence.from.resource;

		if (!presence.type || presence.type == 'available') {
			self.participants[resource] = true;
		}

		if (presence.type == 'unavailable') {

			map.remove(resource);
			delete self.participants[resource];
		}

		console.log(self.participants);
	}
};

SwarmListener.prototype.onMessage = function(){
	var self = this;

	return function(message) {
		var resource = message.resource;
		self.map.draw(resource);
		console.log(JSON.stringify(message));
	}
}


//constructor
var Map = function() {
	//Initializa map
};

Map.prototype.load = function() {

}

/**
 * Draws resource in the given position.
 * @param {Object} position
 * @public
 * 
 * Structure of the resource object:  
 * {
 *   resource_id: 'String',
 *	 latitude: Number,
 *	 longitude: Number,
 *	 timestamp: Date
 * }
 **/
Map.prototype.draw = function(resource) {
	//Date.now() //timestamp

}

/**
* Removes resource in the given position.
* @param {Object} positon
* @public
* Structure of the resource
*
* {
*   resource_id: 'String',
*	latitude: Number,
*	longitude: Number,
*	timestamp: Date
* }
**/

Map.prototype.remove = function(resource) {

};