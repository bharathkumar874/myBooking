Ext.define("myBooking.model.DpointList",{
	extend:"Ext.data.Model",
	xtype:'DpointList',
	config:{
		idProperty:'id',
		fields:[
		//	{name:'FromPlace',type:'string'},
			//{name:'ToPlace',type:'string'},
			{name:'dPoint',type:'string'}
			
			]
	}
});