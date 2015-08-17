Ext.define("myBooking.model.BoardingPoint",{
	extend:"Ext.data.Model",
	xtype:'BpointModel',
	config:{
		idProperty:'id',
		fields:[
			{name:'FromPlace',type:'string'},
			{name:'ToPlace',type:'string'},
			{name:'bPoint',type:'string'}
			
			]
	}
});