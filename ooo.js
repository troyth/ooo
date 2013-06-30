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

	/////// RADIATIONS (128) ///////

	//alias for emanation
	getSensualQualities: function(i, j){
		return this.emanation(i, j);
	},

	//emanation is the SO-SQ relation (127)
	emanation: function(i, j){
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

	//alias for emanate
	setSensualQualities: function(sensual_quality, i, j){
		return this.emanate(sensual_quality, i, j);
	},

	//add a new SQ to this SO (127)
	emanate: function(sensual_quality, i, j){
		if(i){
			if(this.qualities[i]){
				if(j){
					//specified where to insert SQ, overwrite if necessary
					this.qualities[i].sensual_qualities[j] = sensual_quality;
					return [i, j];
				}else{
					this.qualities[i].sensual_qualities.push( sensual_quality );
					return [i, this.qualities[i].sensual_qualities.length-1];
				}
			}else{
				this.qualities[i] = {
					real_qualities: [],
					sensual_qualities: sensual_quality
				};
				return [i, 0];
			}
		}else{
			//create a new quality and add it to the local qualities array
			var new_quality = {
				real_qualities: [],
				sensual_qualities: [ sensual_quality ]
			};
			this.qualities.push( new_quality );
			return [this.qualities.length-1, 0];
		}

		return false;
	},

	//alias for contraction
	getRealQualities: function(i, j){
		return this.contraction(i, j);
	},

	//contraction is the RQ-SO relation (127)
	contraction: function(i, j){
		if(j) return this.qualities[i].real_qualities[j];
		
		//if no j param passed, return all real qualities
		if(i) return this.qualities[i].real_qualities;

		//if no parameters passed, return all real qualities
		var return_array = [];
		for(var q = 0; q < this.qualities.length; q++){
			return_array.push( this.qualities[q].real_qualities );
		}
		return return_array;
	},

	//alias for contract
	setRealQualities: function(real_quality, i, j){
		return this.contract(real_quality, i, j);
	},

	//add a new RQ to this SO (127)
	contract: function(real_quality, i, j){
		if(i){
			if(this.qualities[i]){
				if(j){
					//specified where to insert SQ, overwrite if necessary
					this.qualities[i].real_qualities[j] = real_quality;
					return [i, j];
				}else{
					this.qualities[i].real_qualities.push( real_quality );
					return [i, this.qualities[i].real_qualities.length-1];
				}
			}else{
				this.qualities[i] = {
					real_qualities: real_quality,
					sensual_qualities: []
				};
				return [i, 0];
			}
		}else{
			//create a new quality and add it to the local qualities array
			var new_quality = {
				real_qualities: [ real_quality ],
				sensual_qualities: []
			};
			this.qualities.push( new_quality );
			return [this.qualities.length-1, 0];
		}

		return false;
	},

	//alias for duplicit
	getQualities: function(i){
		return this.duplicity(i);
	},

	//duplicity is RQ-SQ through an SO (127-8)
	duplicity: function(i){
		if(i) return this.qualities[i];

		return this.qualities;
	},

	//alias for duplicit
	setRealAndSensualQualities: function(real_quality, sensual_quality, i, j){
		return this.duplicit(real_quality, sensual_quality, i, j);
	},

	//upsert a real and sensual quality pair
	duplicit: function(real_quality, sensual_quality, i, j){
		if(i){
			if(j){
				this.contract(real_quality, i, j);
				this.emanate(sensual_quality, i, j);
				return [i,j];
			}else{
				var ij = this.contract(real_quality, i);
				this.emanate(sensual_quality, i, ij[1]);
				return ij;
			}
		}else{
			var ij = this.contract(real_quality);
			this.emanate(sensual_quality, ij[0], ij[1]);
			return ij;
		}

		return false;
	},

	/////// JUNCTIONS ///////

	//alias for contiguous
	getSensualObjects: function(i, j){
		return contiguous(i, j);
	},

	//contiguity is the SO-SO relation (128)
	contiguous: function(i, j){
		if(j) return this.horizontal_relations[i].sensual_qualities[j];

		if(i) return this.horizontal_relations[i].sensual_qualities;

		var return_array = [];
		for(var r = 0; r < this.horizontal_relations.length; r++){
			return_array.push( this.horizontal_relations[r].sensual_qualities );
		}
		return return_array;
	},

	//alias for contiguate
	setSensualObjects: function(i, j){
		return contiguate(i, j);
	},

	//contiguity is the SO-SO relation (128)
	contiguate: function(i, j){
		//todo
	},

	//alias for sincerity
	getRealObjects: function(i, j){
		return sincerity(i, j);
	},

	//sincerity is the RO-SO relation (128)
	sincerity: function(i, j){
		if(j) return this.vertical_relations[i].sensual_objects[j];

		if(i) return this.vertical_relations[i].sensual_objects;

		var return_array = [];
		for(var r = 0; r < this.vertical_relations.length; r++){
			return_array.push(this.vertical_relations[r].sensual_objects);
		}
		return return_array;
	},

	//alias for sincere
	setRealObjects: function(real_object, i, j){
		return sincere(real_object, i, j);
	},

	//sincerity is the RO-SO relation (128)
	sincere: function(real_object, i, j){
		//todo
	},



	/////// TENSIONS ///////

	//alias for confront
	updateSensualQualities: function(attributes, i, j){
		return confront(attributes, i, j);
	},

	//change in SO-SQ that produces time (figure 7, 107)
	confront: function(attributes, i, j){
		//todo
		return time_delta;
	}


});


RealObject = OOObject.extend({
	vertical_relations: [{
		real_objects: [ RealObject ],
		sensual_objects: [ SensualObject ]
	}],

	/////// JUNCTIONS ///////

	//alias for sincerity
	getSensualObjects: function(i, j){
		return sincerity(i, j);
	},

	//sincerity is the RO-SO relation (128)
	sincerity: function(i, j){
		if(j) return this.vertical_relations[i].sensual_objects[j];

		if(i) return this.vertical_relations[i].sensual_objects;

		var return_array = [];
		for(var r = 0; r < this.vertical_relations.length; r++){
			return_array.push(this.vertical_relations[r].sensual_objects);
		}
		return return_array;
	},

	//alias for sincere
	setSensualObjects: function(sensual_object, i, j){
		return sincere(sensual_object, i, j);
	},

	//sincerity is the RO-SO relation (128)
	sincere: function(sensual_object, i, j){
		//todo
	},
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