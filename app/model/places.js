Ext.define("myBooking.model.places",{
	extend:"Ext.data.Model",
	xtype:'places',
	config:{
		idProperty:'id',
		fields:[
			{name:'place',type:'string'}
			
				]
	}
});