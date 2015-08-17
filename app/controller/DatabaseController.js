Ext.define("myBooking.controller.DatabaseController", {
	extend: 'Ext.app.Controller',
	//requires:['Ext.data.proxy.Sql'],
	launch: function(){
	console.log("myStore Created");

		//Ext.getStore("BusStore").sync();
		//Ext.getStore('places').sync();
		//Ext.getStore('BPoint').sync();
		//Ext.getStore('DPoint').sync();
		Ext.getStore("BusStore").getProxy().dropTable();
		Ext.getStore("BusStore").sync();
		Ext.getStore('places').getProxy().dropTable();
		Ext.getStore('places').sync();
		Ext.getStore('BPoint').getProxy().dropTable();
		Ext.getStore('BPoint').sync();
		Ext.getStore('DPoint').getProxy().dropTable();
		Ext.getStore('DPoint').sync();

	}
});