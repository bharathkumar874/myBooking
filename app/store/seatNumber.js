Ext.define("myBooking.store.seatNumber",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.seatNumber",
		autoLoad:true,
		storeId:"seatNumberStore",
		proxy:{
			type:'sql',
			id:'seatNumber',
			database: 'Database',
			table: 'seatnumber'
		},
		//sorters:[{property:'place',direction:'DESC'}],
			        	
	}
	
});