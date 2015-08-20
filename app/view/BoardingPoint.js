Ext.define('myBooking.view.BoardingPoint', {
	extend : 'Ext.Panel',
	xtype : 'boardingpoint',
	config : {

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
		items : [{
			xtype : 'button',
			action : 'hide',
			text : 'Close',
			ui : 'action',
			docked : 'bottom',
			itemId : 'Boardinghide'
		}, {
			xtype : 'panel',
			layout : 'vbox',
			flex : 1,
			height : "100%",
			items : [{
				xtype : 'titlebar',
				title : 'Boarding Points',
				docked : 'top',
				flex : 1,
				items : [{
					xtype : 'button',
					text : 'Save',
					itemId : 'BoardingSave',

				}]
			}, {
				xtype : "list",
				flex : 2,
				//layout:'fit',
				itemTpl : '{bPoint}',
				itemId : 'BoardingPlaces',
				scrollable : true
				//store:'BPoint'
			}]

		}],
		listeners : [{
			delegate : '#Boardinghide',
			event : 'tap',
			fn : 'onHide'
		}, {
			delegate : '#BoardingSave',
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
		this.fireEvent('onSaveBoardingCmd', this);
	}
});
