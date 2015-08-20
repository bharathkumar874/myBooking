Ext.define("myBooking.model.BusList", {
	extend : "Ext.data.Model",
	xtype : 'BusModel',
	//requires:['Ext.data.identifier.Sequential','Ext.data.Field'],
	config : {
		idProperty : 'id',
		/*identifier:{
		 type:'sequential',
		 prefix:'BusService'
		 },*/
		fields : [{
			name : 'fromPlace',
			type : 'string'
		}, {
			name : 'toPlace',
			type : 'string'
		}, {
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