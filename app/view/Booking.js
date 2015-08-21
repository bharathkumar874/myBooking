Ext.define('myBooking.view.Booking', {
	extend : 'Ext.Container',
	xtype : 'booking',
	cls : 'Booking',
	requires : ['Ext.TitleBar', 'Ext.form.Panel'],
	config : {
		//tabBarPosition: 'bottom',
		scrollable : true,
		title : 'Payment',
		layout : "fit",

		items : [{
			xtype : 'titlebar',
			title : 'Book my Ticket',
			docked : 'top',
			cls : 'mainTitle',
			items : [{
				//iconCls: 'home',
				//align: 'left',
				text : 'Back',
				cls : 'buttonTop',
				xtype : 'button',
				itemId : 'back'
			}]
		}, {
			xtype : 'panel',
			cls:'busImage'
		}, {
			xtype : 'fieldset',
			title : 'Booking',
			height : '236px',
			style : {
				marginTop : '58px'

			},
			items : [{
				xtype : 'textfield',
				name : 'From',
				label : 'From Place',
				itemId : 'FromPlaces',
				required : true,
				//id:'labelWidth',
				labelWidth : '36%',
				placeHolder : 'Enter From place',

			}, {
				xtype : 'textfield',
				name : 'To',
				label : 'To Place',
				required : true,
				itemId : 'popup',
				labelWidth : '36%',
				placeHolder : 'Enter To place'
			}, {
				xtype : 'datepickerfield',
				name : 'dateofjourney',
				label : 'Date of Journey',
				required : true,
				itemId : 'dateSelect',
				labelWidth : '46%',
				placeHolder : 'Select Date Of Journey',
				value : new Date(),
				picker : {
					yearFrom : 2015,
					yearTo : 2030
				}
			}, {
				xtype : 'datepickerfield',
				name : 'Return',
				labelWidth : '46%',
				label : 'Return Date',
				placeHolder : "Select Return Date",
				//required:true,
				value : Ext.Date.add(new Date(), Ext.Date.DAY, 1),
				itemId : 'returnDate',
				picker : {
					yearFrom : 2015,
					yearTo : 2030
				}
			}]
		}, {
			xtype : 'button',
			text : 'Find Buses',
			ui : 'action',
			itemId : 'findBuses',
			cls : 'button1',
			docked : 'bottom'
		}],

		listeners : [{
			delegate : '#back',
			event : 'tap',
			fn : 'goback'
		}, {
			delegate : '#findBuses',
			event : 'tap',
			fn : 'onfindBuses'

		}, {
			delegate : '#popup',
			event : 'focus',
			fn : 'popout'
		}, {
			delegate : '#FromPlaces',
			event : 'focus',
			fn : 'FromPopout'
		}]

	},
	goback : function() {
		console.log('goback cmd');
		this.fireEvent('onGoBackCmd', this);

	},
	onfindBuses : function() {
		console.log('find Buses');
		this.fireEvent('onFireBusesCmd', this);
	},
	popout : function() {
		console.log('popout cmd');
		this.fireEvent('onPopupCmd', this);
	},
	FromPopout : function() {
		console.log('FromPopout cmd');
		this.fireEvent('onFromPopUp', this);
	}
});
