Ext.define('myBooking.view.cancelSummary', {
	extend : 'Ext.form.Panel',
	xtype : 'cancelSummary',
	requires : ['Ext.TitleBar', 'Ext.form.Panel'],
	config : {
		scrollable : true,
		//title:'Payment',
		layout : "fit",
		height : '100%',
		id : 'cancelsummary',
		items : [{
			xtype : 'titlebar',
			title : 'Cancel Summary',
			docked : 'top',
			items : [{
				text : 'Back',
				xtype : 'button',
				itemId : 'backToCT'
			}]
		}, {
			xtype : 'panel',
			style : {
				height : '100%',
				textAlign : 'center',
				position : 'relative',
				border : '1px solid black',
				marginTop : '1px'
			},
			layout : 'vbox',
			//cls:'centerSet',
			html : ['testing'],
			itemId : 'ticketget',
			items : [{
				xtype : 'panel',
				itemId : 'panelShow'

			}]
		}, {
			xtype : 'panel',
			style : {
				height : '100%',
				textAlign : 'center',
				position : 'relative',
				border : '1px solid black',
				marginTop : '1px'
			},
			layout : 'vbox',
			//cls:'centerSet',
			html : ['testing'],
			itemId : 'FromTo'
		}, {
			xtype : 'panel',
			style : {
				height : '100%',
				textAlign : 'center',
				position : 'relative',
				border : '1px solid black',
				marginTop : '1px'
			},
			layout : 'vbox',
			//cls:'centerSet',
			html : ['testing'],
			itemId : 'Names'
		}, {
			xtype : 'panel',
			style : {
				height : '100%',
				textAlign : 'center',
				position : 'relative',
				border : '1px solid black',
				marginTop : '1px'
			},
			layout : 'vbox',
			//cls:'centerSet',
			html : ['testing'],
			itemId : 'TotalAmount',
			items : [{
				xtype : 'panel',
				itemId : 'fareAmount'
			}]

		}, {
			xtype : 'panel',
			style : {
				height : '100%',
				textAlign : 'center',
				position : 'relative',
				border : '1px solid black',
				marginTop : '1px'
			},
			layout : 'vbox',
			//cls:'centerSet',
			html : ['testing'],
			itemId : 'refund'
		}, {
			xtype : 'button',
			ui : 'decline',
			itemId : 'CancelConfirm',
			text : 'Proceed Cancelling',
			docked : 'bottom'

		}],

		listeners : [{
			delegate : '#backToCT',
			event : 'tap',
			fn : 'onbackToCT'
		}, {
			delegate : '#Search',
			event : 'tap',
			fn : 'onSearch'
		}, {
			delegate : '#CancelConfirm',
			event : 'tap',
			fn : 'onCancelConfirm'
		}]

	},

	onbackToCT : function() {
		console.log('onbackToCT from cancelTicket');
		this.fireEvent('onbackToCTCmd', this);
	},
	onSearch : function() {
		console.log('onSearchCmd');
		this.fireEvent('onSearchCmd', this);
	},
	onCancelConfirm : function() {
		console.log('onCancelConfirmCmd');
		this.fireEvent('onCancelConfirmCmd', this);
	}
});
