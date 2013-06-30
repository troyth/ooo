OOObject = {
	id: String
}

SensualObject = OOObject.extend({
	horizontal_relations: [ SensualObject ],
	//pairs groups of real and sensual qualities to allow for RQ-RQ, RQ-SQ and SQ-SQ through the SO
	qualities: [{
		real_qualities: [ RealQuality ],
		sensual_qualities: [ SensualQuality ]
	}],

	//alias for emanate
	getSensualQualities: function(i, j){
		return this.emanate(i, j);
	},

	//emanate SQs from a SO (127)
	emanate: function(i, j){
		if(j) return this.qualities[i].sensual_qualities[j];
		
		//if no j param passed, return all sensual qualities
		if(i) return this.qualities[i].sensual_qualities;

		//if no parameters passed, return all sensual qualities
		var return_array = [];
		for(var q = 0; q < this.qualities.length; q++){
			return_array.push(this.qualities[q].sensual_qualities);
		}
		return return_array;
	},

	//alias for contract
	getRealQualities: function(i, j){
		return this.contract(i, j);
	},

	//contract RQs from a SO (127)
	contract: function(i, j){
		if(j) return this.qualities[i].real_qualities[j];
		
		//if no j param passed, return all real qualities
		if(i) return this.qualities[i].real_qualities;

		//if no parameters passed, return all real qualities
		var return_array = [];
		for(var q = 0; q < this.qualities.length; q++){
			return_array.push(this.qualities[q].real_qualities);
		}
		return return_array;
	},

	//getQualities: function(i){
		return this.duplicit(i);
	},

	//duplicity is RQ-SQ through an SO (127-8)
	duplicit: function(i){
		if(i) return this.qualities[i];

		return this.qualities;
	},
});


RealObject = OOObject.extend({
	vertical_relations: [ OOObject ]
});


OOOQuality = {
	id: String,
	count: Number,
	ooobjects: [ OOObject ]
}

SensualQuality = OOOQuality.extend({
	type: String
});

RealQuality = OOOQuality.extend({
	type: String,
	source: String,
	source_id: String, //the id the source uses to identify the quality
	tags: [ String ],
});