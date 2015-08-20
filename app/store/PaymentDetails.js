Ext.define("myBooking.store.PaymentDetails", {
	extend : "Ext.data.Store",
	requires : ["Ext.data.proxy.SQL"],
	config : {
		model : "myBooking.model.PaymentDetails",
		autoLoad : true,
		storeId : "paymentDetails",
		proxy : {
			type : 'sql',
			database : 'Database',
			table : 'paymentDetails'
		}

	}

}); 