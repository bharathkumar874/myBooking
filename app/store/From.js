Ext.define("myBooking.store.From",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.From",
		autoLoad:true,
		storeId:"FromId",
		proxy:{
			type:'sql',
			//id:'storeproxy',
			database:'DataBase',
			table:'From'
		},
		sorters:[{property:'BusService',direction:'DESC'}],
	data:[
			{
				Timing:'3/8/2015',
				BusService:'Kesineni',
				BusType:'Non-Ac',
				Fare:'1200'
			},
			{
				Timing:'3/8/2015',
				BusService:'Aditya Travels',
				BusType:'Non-Ac',
				Fare:'1150'
			},
			{
				Timing:'3/8/2015',
				BusService:'Bharathi Travels',
				BusType:'Ac',
				Fare:'1760'
			}
			
			
			],
			        	
	}
	
});