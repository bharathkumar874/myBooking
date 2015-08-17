Ext.define("myBooking.controller.databaseFunctions", {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			
		},

		control : {
			

		}
	},
	launch: function(){
		console.log("strings");
		var s= Ext.create('myBooking.utilities.databaseFunctions');
		//s.dbCreate();
		//s.dbInsert();
		//var msg=s.dbGetDetails();
		//console.log(msg);
		  /* Ext.getStore('IncomePaymentCategory').sync(); */  
		
	}
});