Ext.define('myBooking.store.panel', {
	extend : 'Ext.data.Store',
	requires : 'Ext.data.proxy.SQL',
	config : {
		model : 'myBooking.model.panel',
		autoLoad : true,
		storeId : 'panelPassengers',
		proxy : {
			type : 'sql',
			id : "panel",
			database : 'Database',
			table : 'panel'
		}
	}
});
