Ext.define("myBooking.store.BpointList", {
	extend : "Ext.data.Store",
	requires : ["Ext.data.proxy.SQL"],
	config : {
		model : "myBooking.model.BpointList",
		autoLoad : true,
		storeId : "BpointList",
		proxy : {
			type : 'sql',
			//id:'storeproxy',
			database : 'Database',
			table : 'BpointList'
		},
		sorters : [{
			property : 'bPoint',
			direction : 'DESC'
		}],

	}

}); 