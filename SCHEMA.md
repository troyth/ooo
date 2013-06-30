#Schema for OOO


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
		},

		//emanation is the SO-SQ relation (127)
		emanation: function(i, j){
		},

		//alias for emanate
		setSensualQualities: function(sensual_quality, i, j){
		},

		//add a new SQ to this SO (127)
		emanate: function(sensual_quality, i, j){
		},

		//alias for contraction
		getRealQualities: function(i, j){
		},

		//contraction is the RQ-SO relation (127)
		contraction: function(i, j){
		},

		//alias for contract
		setRealQualities: function(real_quality, i, j){
		},

		//add a new RQ to this SO (127)
		contract: function(real_quality, i, j){
		},

		//alias for duplicit
		getQualities: function(i){
		},

		//duplicity is RQ-SQ through an SO (127-8)
		duplicity: function(i){
		},

		//alias for duplicit
		setRealAndSensualQualities: function(real_quality, sensual_quality, i, j){
		},

		//upsert a real and sensual quality pair
		duplicit: function(real_quality, sensual_quality, i, j){
		},

		/////// JUNCTIONS ///////

		//alias for contiguous
		getSensualObjects: function(i, j){
		},

		//contiguity is the SO-SO relation (128)
		contiguous: function(i, j){
		},

		//alias for contiguate
		setSensualObjects: function(i, j){
		},

		//contiguity is the SO-SO relation (128)
		contiguate: function(i, j){
		},

		//alias for sincerity
		getRealObjects: function(i, j){
		},

		//sincerity is the RO-SO relation (128)
		sincerity: function(i, j){
		},

		//alias for sincere
		setRealObjects: function(real_object, i, j){
			return sincere(real_object, i, j);
		},

		//sincerity is the RO-SO relation (128)
		sincere: function(real_object, i, j){
		},



		/////// TENSIONS ///////

		//alias for confront
		updateSensualQualities: function(attributes, i, j){
		},

		//change in SO-SQ that produces time (figure 7, 107)
		confront: function(attributes, i, j){
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
		},

		//sincerity is the RO-SO relation (128)
		sincerity: function(i, j){
		},

		//alias for sincere
		setSensualObjects: function(sensual_object, i, j){
		},

		//sincerity is the RO-SO relation (128)
		sincere: function(sensual_object, i, j){
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