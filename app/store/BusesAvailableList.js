Ext.define("myBooking.store.BusesAvailableList",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.BusesAvailableList",
		autoLoad:true,
		storeId:"BusesAvailableList",
		proxy:{
			type:'sql',
			//id:'storeproxy',
			database:'Database',
			table:'BusesAvailableList'
		},
		sorters:[{property:'Fare',direction:'DESC'}],

			        	
	}
	
});