Ext.define("myBooking.store.CurrentSeats", {
	extend : "Ext.data.Store",
	requires : 'Ext.data.proxy.LocalStorage',
	config : {
		model : "myBooking.model.CurrentSeats",
		autoLoad : true,
		storeId : "CurrentSeatsStore",
		proxy : {
			type : 'localstorage',
			id : 'CurrentSeats'

		}

	}

}); 