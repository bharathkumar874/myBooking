Ext.define('myBooking.view.cancelPopup', {
	extend : 'Ext.Panel',
	xtype : 'cancelpopup',
	config : {
		//itemId:'frompopup',
		floating : true,
		centered : true,
		autoCreate : true,
		modal : true,
		height : '80%',
		layout : 'vbox',
		width : '75%',
		showAnimation : {
			type : 'slide',
			direction : 'left'
		},
		styleHtmlContent : true,
		hidden : true,
		//html: 'Hi, I\'m a popup',
		items : [{
			xtype : 'button',
			//action: 'hide',
			text : 'Confirm Cancel',
			ui : 'decline',
			docked : 'bottom',
			itemId : 'cancelConfirm'
		}, {
			xtype : 'panel',
			layout : 'vbox',
			flex : 1,
			height : "100%",
			items : [{
				xtype : 'titlebar',
				title : 'Cancel Ticket',
				docked : 'top',
				flex : 1,
				items : [{
					xtype : 'button',
					text : 'Close',
					action : 'hide',
					ui : 'action',
					itemId : 'hidecancel',

				}]
			}, {
				xtype : "panel",
				flex : 1,
				layout : 'vbox',
				itemId : 'ticketget',
				//scrollable:false,
				style : {
					textAlign : 'center',
					height : '23px'
				},
				html : [''],
				items : [{
					xtype : 'panel',
					itemId : 'panelShow',
				}]
			}, {
				xtype : "panel",
				flex : 5,
				//layout:'fit',
				itemId : 'popupPanelText',
				scrollable : false,
				style : {
					marginTop : '10%'
				},
				html : ['']
			}]

		}],
		listeners : [{
			delegate : '#hidecancel',
			event : 'tap',
			fn : 'onHide'
		}, {
			delegate : '#cancelConfirm',
			event : 'tap',
			fn : 'oncancelConfirm'
		}]
	},
	onHide : function() {
		console.log('onHide cmd Cancelticket');
		//this.fireEvent('onHideCmd',this);
		this.hide();
	},
	oncancelConfirm : function() {
		console.log('oncancelConfirmCmd');
		this.fireEvent('oncancelConfirmCmd', this);
	}
});
