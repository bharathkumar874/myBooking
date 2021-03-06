Ext.define("myBooking.model.From", {
	extend : "Ext.data.Model",
	xtype : 'FromModel',
	requires : ['Ext.data.identifier.Sequential', 'Ext.data.Field'],
	config : {
		idProperty : 'id',
		identifier : {
			type : 'sequential',
			prefix : 'BusService'
		},
		fields : [{
			name : 'Timing',
			type : 'string'
		}, {
			name : 'BusService',
			type : 'string'
		}, {
			name : 'BusType',
			type : 'string'
		}, {
			name : 'Fare',
			type : 'int'
		}]
	}
}); 