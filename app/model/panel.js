Ext.define("myBooking.model.panel", {
	extend : "Ext.data.Model",
	xtype : 'panelPassengers',
	config : {
		idProperty : 'id',
		fields : [{
			name : 'Name',
			type : 'string'
		}, {
			name : 'Gender',
			type : 'string'
		}, {
			name : 'Age',
			type : 'int'
		}]
	}
}); 