Ext.define("myBooking.model.BpointList", {
	extend : "Ext.data.Model",
	xtype : 'BpointList',
	config : {
		idProperty : 'id',
		fields : [
		//	{name:'FromPlace',type:'string'},
		//{name:'ToPlace',type:'string'},
		{
			name : 'bPoint',
			type : 'string'
		}]
	}
}); 