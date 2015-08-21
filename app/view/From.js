Ext.define('myBooking.view.From', {
	extend : 'Ext.Panel',
	xtype : 'frompopup',
	config : {
		//itemId:'frompopup',
		floating : true,
		centered : true,
		autoCreate : true,
		modal : true,
		height : '75%',
		layout : 'vbox',
		width : '68%',
		cls:'noborder',
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
			cls:'closeclass',
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
				cls : 'mainTitle',
				docked : 'top',
				flex : 1,
				items : [{
					xtype : 'button',
					text : 'Save',
					cls : 'buttonTop',
					itemId : 'FromSave',

				}]
			}, {
				xtype : "list",
				flex : 1,
				//layout:'fit',
				itemTpl : '{place}',
				itemId : 'fromPlace',
				scrollable : true,
				cls:'selectList',
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
