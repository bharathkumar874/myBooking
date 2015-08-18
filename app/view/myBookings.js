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
                cls:'mainTitle',
                docked:'top',
                items: [
			        {
			            text:'Back',
			            xtype:'button',
			            itemId:'myBookingBack',
			            cls:'buttonTop',
			        }
			          ]
			 },
			   {
                     xtype: 'toolbar',
                     docked: 'top',
  					cls:'searchBar',
                     items: [
                         {
                             xtype: 'searchfield',
                             placeHolder: 'Search...',
                             itemId: 'searchBox'
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
					cls:'sumarryList',
					items:[{
						xtype:"list",
						flex:1,
						itemId:'myBookingsList',
						onItemDisclosure:true,
						cls:'disc',
						//itemTpl:'<b>Ticket No:</b>{TicketNo}<p><div id="TicketStatus"><b>Ticket Status: </b><p id="statusColor">{status}</p></div><b>Passengers: </b>{Name}</p><p><b>{fromPlace} to {toPlace}</b></p><p><b>BusService :</b>{BusService}</p><p><b>SeatNumbers: </b>{seatNumbers}</p><p><b>Fare: </b>Rs.{amountPayable}</p>',
						itemTpl: [
							'<tpl for=".">',
							'	<tpl if="status==\'cancelled\'">',
							'		<div><span class="pictosClass">F</span><b> Ticket No:</b>{TicketNo}</div><div><span class="pictosClass">g</span><b> Passengers: </b>{Name}</div><div><span class="pictosClass">@</span><span>  </span><b> {fromPlace} to {toPlace}</b></div><div><span class="pictosClass">"</span><b> BusService :</b>{BusService}</div><div><span class="pictosClass">z</span><b> SeatNumbers: </b>{seatNumbers}</div><div><span class="pictosClass">%</span><b> Fare: </b>Rs.{amountPayable}</div><div class="TicketStatusCancel"><span class="pictosClass">!</span> <b>Ticket Status: </b><p class="cancelstatusColor">{status}</p></div>',
							'	</tpl>',
							'	<tpl if="status!=\'cancelled\'">',
							//'		<b>Ticket No:</b>{TicketNo}<p><b>Passengers: </b>{Name}</p><p><b>{fromPlace} to {toPlace}</b></p><p><b>BusService :</b>{BusService}</p><p><b>SeatNumbers: </b>{seatNumbers}</p><p><b>Fare: </b>Rs.{amountPayable}</p><div class="TicketStatusConfirm"><b>Ticket Status: </b><p class="statusColor">{status}</p></div>',
							'		<div><span class="pictosClass">F</span><b> Ticket No:</b>{TicketNo}</div><div><span class="pictosClass">g</span><b> Passengers: </b>{Name}</div><div><span class="pictosClass">@</span><b> {fromPlace} to {toPlace}</b></div><div><span class="pictosClass">"</span><b> BusService :</b>{BusService}</div><div><span class="pictosClass">z</span><b> SeatNumbers: </b>{seatNumbers}</div><div><span class="pictosClass">%</span><b> Fare: </b>Rs.{amountPayable}</div><div class="TicketStatusConfirm"><span class="pictosClass">2</span> <b>Ticket Status: </b><p class="statusColor">{status}</p></div>',
							'	</tpl>',
							'</tpl>'
						],
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
            	},
            	{
            		delegate:'#searchBox',
            		event:'keyup',
            		fn:'onsearchBox'
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
           onsearchBox: function(scope, e, eOpts){
        	this.fireEvent("onsearchBoxCmd", scope.getValue(), this);
  		   }
           
            

        
    
});
