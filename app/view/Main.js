Ext.define('myBooking.view.Main', {
	extend : 'Ext.Container',
	xtype : 'main',
	requires : ['Ext.TitleBar'],
	config : {
		//tabBarPosition: 'bottom',
		scrollable : true,
		items : [{
			xtype : 'titlebar',
			//title : 'myBus Booking',
			cls : 'mainTitle',
			itemId : 'myBookingTitle',
			docked : 'top',
			iconCls : 'home',

		}, {
			xtype : 'button',
			//text : 'Book a Ticket',
			ui : 'normal',
			itemId : 'BookTicket',
			cls : 'mainScreenButton',

			style : {
				marginTop : '45px',
				width : '60%',
				marginLeft : '22%',

			}
		}, {
			xtype : 'button',
			//text : 'Cancel Ticket',
			ui : 'normal',
			itemId : 'cancelTicketView',
			cls : 'mainScreenButton',
			style : {
				marginTop : '45px',
				width : '60%',
				marginLeft : '22%'
			}
		}, {
			xtype : 'button',
			//text : 'myBookings',
			ui : 'normal',
			itemId : 'myBookings',
			cls : 'mainScreenButton',
			style : {
				marginTop : '45px',
				width : '60%',
				marginLeft : '22%'
			}
		}, {
			xtype : 'button',
			//text : 'About us',
			itemId : 'AboutUs',
			cls : 'mainScreenButton',
			ui : 'normal',
			handler : function() {
				Ext.Viewport.toggleMenu('left');
			},
			style : {
				marginTop : '45px',

				width : '60%',
				marginLeft : '22%'
			},
		}, {
			xtype : 'titlebar',
			docked : 'bottom',
			cls : 'mainTitle',
			itemId : 'footer'
			//title : ' myBus (2000-2015) All rights reserved.'
		}],
		listeners : [{
			delegate : '#BookTicket',
			event : 'tap',
			fn : "onBookTicketTap"
		}, {
			delegate : '#cancelTicketView',
			event : 'tap',
			fn : 'oncancelTicketView'
		}, {
			delegate : '#myBookings',
			event : 'tap',
			fn : 'onmyBookings'
		}]
	},
	doSetHidden : function(hidden) {
		//  this.callParent(arguments);

		if (hidden) {
			Ext.Viewport.removeMenu('left');

		} else {

			Ext.Viewport.setMenu(this.menuForSide('left'), {
				side : 'left',
				reveal : true
			});

		}
	},

	menuForSide : function(side) {
		var items = [{
			xtype : 'panel',
			//  text: 'Settings',
			html : ['myBooking '],

			//iconCls: 'settings',
			style : {
				color : '#E68721',
				marginTop : '78px',
				textAlign : 'center',
				fontSize : '30px',
				fontFamily : 'initial'

			}
		}, {
			xtype : 'panel',
			//  text: 'Settings',
			html : ['myBooking is the mobile App developed for booking Bus Tickets in India.'],

			//iconCls: 'settings',
			style : {
				color : 'gray',
				marginTop : '25px',
				textAlign : 'center'

			}
		}, {
			xtype : 'panel',
			//  text: 'Settings',
			html : ['This app allows user to Book Tickets,Cancel Booked Tickets.'],

			//iconCls: 'settings',
			style : {
				color : 'white',
				marginTop : '10px',
				textAlign : 'center'
			}

		}, {
			xtype : 'panel',
			//  text: 'Settings',
			html : ['It also provide a Additional feature to edit the Booked Ticket.'],

			//iconCls: 'settings',
			style : {
				color : 'gray',
				marginTop : '10px',
				textAlign : 'center'
			}

		}];

		var className = 'Ext.Menu';

		return Ext.create(className, {
			scrollable : true,
			width : 200,
			//height:100,
			items : items
		});
	},
	onBookTicketTap : function() {
		console.log("BookTicketcmd pressed");
		this.fireEvent("bookTicketCommand", this);
	},
	oncancelTicketView : function() {
		console.log('oncancelTicketViewCmd');
		this.fireEvent('oncancelTicketViewCmd', this);
	},
	onmyBookings : function() {
		console.log('onmyBookingsCmd');
		this.fireEvent('onmyBookingsCmd', this);
	}
});
