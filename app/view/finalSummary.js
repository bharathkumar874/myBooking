Ext.define('myBooking.view.finalSummary', {
	extend : 'Ext.Container',
	xtype : 'finalSummary',
	config : {
		layout : "vbox",
		scrollable : true,
		items : [{
			xtype : 'titlebar',
			title : 'Summary',
			docked : 'top',
			items : [{
				text : 'Back',
				xtype : 'button',
				itemId : 'BackToPayNow'
			}]
		}, {
			xtype : 'button',
			docked : 'bottom',
			text : 'Move to Home Screen',
			ui : 'confirm',
			itemId : 'movetohome'
		}, {
			xtype : 'panel',
			html : [''],
			cls : 'centerSet',
			layout : 'vbox',
			itemId : 'TransActionIdShow',
		}, {
			xtype : 'panel',
			html : [''],
			itemId : 'TicketNoShow',
			cls : 'centerSet',
			layout : 'vbox',
		}, {
			xtype : 'panel',
			html : [''],
			itemId : 'travelDetails',
			cls : 'centerSet',
			layout : 'vbox',
		}, {
			xtype : 'panel',
			html : [''],
			itemId : 'fare',
			cls : 'centerSet',
			layout : 'vbox',
		}, {
			xtype : 'panel',
			html : ['<b>Passenger Details</b>'],
			//itemId:'fare',
			cls : 'centerSet',
			layout : 'vbox',
		}],
		listeners : [{
			delegate : '#BackToPayNow',
			event : 'tap',
			fn : 'onBackToPayNow'
		}, {
			delegate : "#movetohome",
			event : 'tap',
			fn : 'onMoveToHome'
		}]
	},
	onBackToPayNow : function() {
		console.log('back button of summary pressed');
		this.fireEvent('onBackToPayNowCmd', this);
	},
	onMoveToHome : function() {
		console.log('button: MoveToHomeCmd');
		this.fireEvent('onMoveToHomeCmd', this);
	}
});
