Ext.define("myBooking.store.PassengerDetails",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.PassengerDetails",
		autoLoad:true,
		storeId:"passengerDetails",
		proxy:{
			type:'sql',
			//id:'storeproxy',
			database:'Database',
			table:'passengerDetails'
		},
		//sorters:[{property:'place',direction:'DESC'}],
	
			        	
	}
	
});