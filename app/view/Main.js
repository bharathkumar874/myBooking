Ext.define('myBooking.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
         ],
    config: {
        //tabBarPosition: 'bottom',
        scrollable:true,
        items: [
            {
                xtype:'titlebar',
                title:'myBus Booking',
                cls:'mainTitle',
                docked:'top'
            },
            {
                xtype:'button',
               text:'Book a Ticket',
               ui:'action',
               itemId:'BookTicket',
               cls:'mainScreenButton',
               style:{
                    marginTop:'45px',
                    width:'60%',
                    marginLeft:'22%'
                   }
            },
            {
                xtype:'button',
                text:'Cancel Ticket',
                ui:'action',
                itemId:'cancelTicketView',
                cls:'mainScreenButton',
                style:{
                marginTop:'45px',
                width:'60%',
                marginLeft:'22%'
               }
            },
            {
                xtype:'button',
               text:'myBookings',
                ui:'action',
                itemId:'myBookings',
                cls:'mainScreenButton',
                style:{
                marginTop:'45px',
                width:'60%',
                marginLeft:'22%'
               }
            },
            {
                xtype:'button',
               text:'About us',
               cls:'mainScreenButton',
               ui:'action',
                style:{
                     marginTop:'45px',
                     
                     width:'60%',
                     marginLeft:'22%'
                      }
            },
            {
                xtype:'titlebar',
                docked:'bottom',
                cls:'mainTitle',
                title:' myBus (2000-2015) All rights reserved.'
            }

        ],
        listeners:[
            {
                delegate:'#BookTicket',
                event:'tap',
                fn:"onBookTicketTap"
            },
            {
            	delegate:'#cancelTicketView',
            	event:'tap',
            	fn:'oncancelTicketView'
            },
            {
            	delegate:'#myBookings',
            	event:'tap',
            	fn:'onmyBookings'
            },
            
        ]
    },
    onBookTicketTap:function(){
         console.log("BookTicketcmd pressed");
        this.fireEvent("bookTicketCommand", this);
    },
    oncancelTicketView:function(){
    	console.log('oncancelTicketViewCmd');
    	this.fireEvent('oncancelTicketViewCmd',this);    	
    },
    onmyBookings:function(){
    	console.log('onmyBookingsCmd');
    	this.fireEvent('onmyBookingsCmd',this);  
    }
});
