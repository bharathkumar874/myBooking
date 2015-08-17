Ext.define("myBooking.store.DpointList",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.DpointList",
		autoLoad:true,
		storeId:"DpointList",
		proxy:{
			type:'sql',
			//id:'storeproxy',
			database:'Database',
			table:'DpointList'
		},
		sorters:[{property:'dPoint',direction:'DESC'}],
				        	
	}
	
});