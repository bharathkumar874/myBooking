Ext.define("myBooking.model.DroppingPoint", {
	extend : "Ext.data.Model",
	xtype : 'DpointModel',
	config : {
		idProperty : 'id',
		fields : [{
			name : 'FromPlace',
			type : 'string'
		}, {
			name : 'ToPlace',
			type : 'string'
		}, {
			name : 'dPoint',
			type : 'string'
		}]
	}
}); 