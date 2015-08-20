Ext.define("myBooking.model.CurrentSeats", {
	extend : "Ext.data.Model",
	xtype : 'currentSeatsModel',
	config : {
		idProperty : 'id',
		fields : [{
			name : 'seatNumber',
			type : 'int'
		}]
	}
}); 