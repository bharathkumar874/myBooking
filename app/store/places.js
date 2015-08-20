Ext.define("myBooking.store.places", {
	extend : "Ext.data.Store",
	requires : ["Ext.data.proxy.SQL"],
	config : {
		model : "myBooking.model.places",
		autoLoad : true,
		storeId : "places",
		proxy : {
			type : 'sql',
			//id:'storeproxy',
			database : 'Database',
			table : 'places'
		},
		sorters : [{
			property : 'place',
			direction : 'DESC'
		}],
		data : [{
			place : 'Hyderabad'
		}, {
			place : 'Banglore'
		}, {
			place : 'Mumbai'
		}, {
			place : 'Kolkatta'
		}, {
			place : 'Pune'
		}, {
			place : 'Chennai'
		}],

	}

}); 