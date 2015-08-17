Ext.define('myBooking.view.myBookings', {
    extend: 'Ext.Container',
    xtype: 'myBookings',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel'
         ],
    config: {
        
        scrollable:true,
        //title:'Payment',
		layout:"fit",
		height:'100%',
		id:'myBookings',
        items: [
            {
                xtype:'titlebar',
                title:'myBookings',
                docked:'top',
                items: [
			        {
			            text:'Back',
			            xtype:'button',
			            itemId:'myBookingBack'
			        }
			          ]
			 },
			 	{
			 		xtype:"panel",
					layout: 'vbox',
					flex: 5,
					height:"100%",
					//scrollable:true,
					itemId:'myBookingsPanel',
					items:[{
						xtype:"list",
						flex:1,
						itemId:'myBookingsList',
						onItemDisclosure:true,
						cls:'disc',
						itemTpl:'<b>Ticket No:</b>{TicketNo}<p><p><b>Ticket Status: </b>{status}</p><b>Passengers: </b>{Name}</p><p><b>{fromPlace} to {toPlace}</b></p><p><b>BusService :</b>{BusService}</p><p><b>SeatNumbers: </b>{seatNumbers}</p><p><b>Fare: </b>Rs.{amountPayable}</p>',
						store:"paymentDetails",

					}]
			 	}
			 	
			 	
			 	
            	],
            	
            	listeners:[
            	{
            		delegate:'#myBookingBack',
            		event:'tap',
            		fn:'onmyBookingBack'
            	},
            	{
            		delegate:'#myBookingsList',
            		event:'disclose',
            		fn:'onDisclosure'
            	}
            	
            	]
            	
           },
           onmyBookingBack:function(){
           		console.log('onmyBookingBackCmd');
           		this.fireEvent('onmyBookingBackCmd',this);
           },
           onDisclosure:function(list, record, target, index, e, eOpts){
           		console.log('onDisclosureCmd');
           		this.fireEvent("onDisclosureCmd", record, this);
           		
           },
           
            

        
    
});
