Ext.define("myBooking.model.BusesAvailableList",{
	extend:"Ext.data.Model",
	xtype:'BusesAvailableList',
	config:{
		idProperty:'id',
		fields:[
		//	{name:'FromPlace',type:'string'},
			//{name:'ToPlace',type:'string'},
			{name:'fromPlace',type:'string'},
			{name:'toPlace',type:'string'},
			{name:'Timing',type:'string'},
			{name:'BusService',type:'string'},
			{name:'BusType',type:'string'},
			{name:'Fare',type:'int'},
			
			]
	}
});