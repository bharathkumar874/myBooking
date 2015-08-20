Ext.define("myBooking.model.PaymentDetails", {
	extend : "Ext.data.Model",
	xtype : 'paymentDetails',
	config : {
		idProperty : 'id',
		fields : [{
			name : 'paymentType',
			type : 'string'
		}, {
			name : 'cardType',
			type : 'string'
		}, {
			name : 'cardNumber',
			type : 'string'
		}, {
			name : 'cardName',
			type : 'string'
		}, {
			name : 'expiry',
			type : 'string'
		}, {
			name : 'cvv',
			type : 'string'
		}, {
			name : 'amountPayable',
			type : 'int'
		}, {
			name : 'TransId',
			type : 'string'
		}, {
			name : 'TicketNo',
			type : 'string'
		}, {
			name : 'fromPlace',
			type : 'string'
		}, {
			name : 'toPlace',
			type : 'string'
		}, {
			name : 'Timing',
			type : 'string'
		}, {
			name : 'date',
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
		}, {
			name : 'Name',
			type : 'string'
		}, {
			name : 'Gender',
			type : 'string'
		}, {
			name : 'Age',
			type : 'int'
		},
		//{name:'email',type:'string'},
		//{name:'mobile',type:'int'},
		//{name:'emergency',type:'int'},
		{
			name : 'seatNumbercount',
			type : 'int'
		}, {
			name : 'seatNumbers',
			type : 'string'
		}, {
			name : 'bPoint',
			type : 'string'
		}, {
			name : 'dPoint',
			type : 'string'
		}, {
			name : 'status',
			type : 'string'
		}]
	}
}); 