Ext.define('myBooking.view.ConfirmYourBooking', {
	extend : 'Ext.Container',
	xtype : 'confirmyourbooking',
	requires : ['Ext.TitleBar'],
	config : {
		scrollable : true,
		layout : "fit",
		items : [{
			xtype : 'titlebar',
			title : 'Confirm your Booking',
			docked : 'top',
			items : [{
				text : 'Back',
				xtype : 'button',
				itemId : 'BacktoBP'
			}]
		}, {
			text : 'Proceed To Pay',
			xtype : 'button',
			docked : 'bottom',
			ui : 'confirm',
			itemId : 'ProceedToPay'
		}, {
			xtype : 'panel',
			layout : 'vbox',
			scrollable : true,
			flex : "5",
			height : '100%',
			items : [{
				xtype : 'panel',
				//	flex:1,

				html : ['from and to place panel'],
				itemId : 'fromAndToPlaces',
				style : {
					textAlign : 'center',
					border : '1px solid black',
					//backgroundColor:'red',
					height : '100%',
					marginTop : '2px'
				}
			}, {
				xtype : 'panel',
				//flex:1,
				html : ['Bus details'],
				itemId : 'busDetailsSummary1',
				style : {
					textAlign : 'center',
					border : '1px solid black',
					//backgroundColor:'red',
					height : '100%',
					marginTop : '2px',
					position : 'relative'
				}
			}, {
				xtype : 'panel',
				//flex:1,
				html : ['Boarding point details'],
				itemId : 'BoardingSummary',
				style : {
					textAlign : 'center',
					border : '1px solid black',
					//backgroundColor:'red',
					height : '100%',
					marginTop : '2px',
					position : 'relative'
				}
			}, {
				xtype : 'panel',
				//flex:1,
				html : ['Dropping point details'],
				itemId : 'DroppingSummary',
				style : {
					textAlign : 'center',
					border : '1px solid black',
					//backgroundColor:'red',
					height : '100%',
					marginTop : '2px',
					position : 'relative'
				}
			}, {
				xtype : 'panel',
				//flex:1,
				html : ['Bus details'],
				itemId : 'PassengerDetailsSummary',
				style : {
					textAlign : 'center',
					border : '1px solid black',
					//backgroundColor:'red',
					height : '100%',
					marginTop : '2px',
					position : 'relative'
				}
			}, {
				xtype : 'panel',
				//flex:1,
				html : ['No. of Tickets'],
				itemId : 'noOfTickets',
				items : {
					xtype : 'panel',
					html : 'ticketno.',
					itemId : 'ticketno',
					style : {
						textAlign : 'center',
						//border:'1px solid black',
						//backgroundColor:'red',
						height : '100%',
						marginTop : '2px',
						position : 'relative'
					}
				},
				style : {
					textAlign : 'center',
					border : '1px solid black',
					//backgroundColor:'red',
					height : '100%',
					marginTop : '2px',
					position : 'relative'
				}
			}, {
				xtype : 'panel',
				//flex:1,
				html : ['Bus details'],
				itemId : 'busDetailsSummary2',
				style : {
					textAlign : 'center',
					border : '1px solid black',
					marginTop : '2px',
					//backgroundColor:'red',
					height : '100%',
					position : 'relative'
				}
			}]
		}],
		listeners : [{
			delegate : '#BacktoBP',
			event : 'tap',
			fn : 'onBackToBP'
		}, {
			delegate : '#ProceedToPay',
			event : 'tap',
			fn : 'onProceedToPay'
		}]

	},
	onBackToBP : function() {
		console.log('onBackToBPCmd');
		this.fireEvent('onBackToBPCmd', this);
	},
	onProceedToPay : function() {
		console.log('onProceedToPaycmd');
		this.fireEvent('onProceedToPayCmd', this);
	}
});
