Ext.define("myBooking.model.seatNumber", {
	extend : "Ext.data.Model",
	xtype : 'seatNumberModel',
	config : {
		idProperty : 'id',
		fields : [{
			name : 'seatNumber',
			type : 'int'
		}]
	}
}); 