Ext.define("myBooking.model.PassengerDetails",{
	extend:"Ext.data.Model",
	xtype:'passengerDetails',
	config:{
		idProperty:'id',
		fields:[
			{name:'Name',type:'string'},
			{name:'Gender',type:'string'},
			{name:'Age',type:'int'},
			{name:'email',type:'string'},
			{name:'mobile',type:'int'},
			{name:'emergency',type:'int'},
			{name:'toPlace',type:'string'},
			{name:'fromPlace',type:'string'}
			
			
			],
			validations: [
                        { type: 'presence', field: 'Name' ,message:'Enter all the Name fields'},
                        { type: 'presence', field: 'Gender',message:'Select all the gender fields' },
                        { type: 'presence', field: 'Age',message:'Enter all the Age fields' }
                    ]
	}
});