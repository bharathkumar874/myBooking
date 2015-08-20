Ext.define('myBooking.view.From', {
	extend : 'Ext.Panel',
	xtype : 'frompopup',
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
			action : 'hide',
			text : 'Close',
			ui : 'action',
			docked : 'bottom',
			itemId : 'Fromhide'
		}, {
			xtype : 'panel',
			layout : 'vbox',
			flex : 1,
			height : "100%",
			items : [{
				xtype : 'titlebar',
				title : 'From Place',
				docked : 'top',
				flex : 1,
				items : [{
					xtype : 'button',
					text : 'Save',
					itemId : 'FromSave',

				}]
			}, {
				xtype : "list",
				flex : 1,
				//layout:'fit',
				itemTpl : '{place}',
				itemId : 'fromPlace',
				scrollable : true,
				store : 'places'
			}]

		}],
		listeners : [{
			delegate : '#Fromhide',
			event : 'tap',
			fn : 'onHide'
		}, {
			delegate : '#FromSave',
			event : 'tap',
			fn : 'onSaveFrom'
		}]
	},
	onHide : function() {
		console.log('onHide cmd');
		//this.fireEvent('onHideCmd',this);
		this.hide();
	},
	onSaveFrom : function() {
		console.log('save From place');
		this.fireEvent('onSaveFromPlaceCmd', this);
	}
});
