Ext.define("myBooking.model.Booking", {
	extend : "Ext.data.Model",
	config : {

		fields : [{
			name : 'From',
			type : 'string'
		}, {
			name : 'To',
			type : 'string',
		}],
		validations : [{
			type : 'presence',
			field : 'From',
			message : 'Please Select "From" Place'
		}, {
			type : 'presence',
			field : 'To',
			message : 'Please Select "To" Place'
		}]
	}
}); 