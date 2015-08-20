Ext.define('myBooking.view.SelectSeat', {
	extend : 'Ext.Container',
	xtype : 'seats',
	requires : ['Ext.TitleBar', 'Ext.form.Panel'],
	config : {
		//tabBarPosition: 'bottom',
		scrollable : true,
		title : 'Payment',
		layout : "fit",

		items : [{
			xtype : 'titlebar',
			title : 'Select Seats',
			docked : 'top',
			items : [{
				// iconCls: 'home',
				//align: 'left',
				text : 'Back',
				xtype : 'button',
				itemId : 'backBus'
			}]
		}, {
			xtype : 'button',
			ui : 'action',
			text : 'Proceed',
			docked : 'bottom',
			itemId : 'ProceedSeat'
			//action:'Available'
		}, {
			xtype : 'panel',
			layout : 'vbox',
			scrollable : true,
			flex : "5",
			height : '98%',
			items : [{
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'spacer',
					width : '65%'
				}, {
					xtype : 'button',
					text : "Driver",
					cls : "Driver"
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : "A",
					ui : "action",
					cls : 'Buttons',
					iconMask : true,
					action : 'Available',
					itemId : 'seat1',
					html : ['1']

				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					itemId : 'seat2',
					html : ["2"],

				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					itemId : '3',
					html : ["3"]
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					itemId : '4',
					html : ["4"]
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"

				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["7"],
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["8"]
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["10"]
				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["14"]
				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"

				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["20"]
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["21"]
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["22"]
				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["24"]
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["25"]
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["26"]
				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["27"]
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["28"]
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["30"]
				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["31"]
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["33"]
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',
					action : 'Available',
					html : ["34"]
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}, {
					xtype : 'button',
					text : "B",
					cls : "ButtonsR"
				}]
			}]
		}, {
			xtype : 'container',
			layout : 'vbox',
			scrollable : true,
			flex : "1",
			itemId : 'seatNo',
			docked : 'bottom',
			height : '73px',
			items : [{
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "10px",
				items : [{
					xtype : 'spacer',
					width : '1%'
				}, {
					html : ['Selected']
				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					html : ['Available']

				}, {
					xtype : 'spacer',
					width : '20%'
				}, {
					html : ['Booked']
				}]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				flex : 1,
				height : "25px",
				items : [{
					xtype : 'button',
					text : 'R',
					ui : 'confirm',
					cls : 'Buttons',
				}, {
					xtype : 'spacer',
					width : '10%'
				}, {
					xtype : 'button',
					text : "1",
					ui : "action",
					cls : 'Buttons',
					iconMask : true,
				}, {
					xtype : 'button',
					text : 'A',
					ui : 'action',
					cls : 'Buttons',

				}, {
					xtype : 'spacer',
					width : '10%'
				}, {
					xtype : 'button',
					text : 'B',
					ui : 'decline',
					cls : 'Buttons',
				}]
			}],

		}],

		listeners : [{
			delegate : '#backBus',
			event : 'tap',
			fn : 'backToBus'
		}, {
			delegate : '#Buttons',
			event : 'tap',
			fn : 'ReserveSeat'
		}, {
			delegate : '#ProceedSeat',
			event : 'tap',
			fn : 'proceedSeat'
		}]

	},
	backToBus : function() {
		console.log("onBacktoBus");
		this.fireEvent("onBackToBus", this);
	},
	ReserveSeat : function() {
		console.log("onReserveSeat");
		this.fireEvent("onReserveSeat", this);
	},
	onButtons : function() {
		console.log('buttons');

	},
	proceedSeat : function() {
		console.log('Proceed Pressed');
		this.fireEvent('onProceedSeatCmd', this);
	}
});
