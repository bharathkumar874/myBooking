Ext.define('myBooking.controller.seatSelect', {
	extend : 'Ext.app.Controller',
	// requires:['Ext.app.History'],

	config : {
		refs : {
			seatNo : 'seats #seatNo',
			seatNumberStore : 'seatNumberStore'
		},
		control : {
			//var count=0;
			'button[action=Available]' : {

				tap : function(button) {

					//  console.log('button pressed');

					if (button.getText() === "A") {
						// console.log(Ext.getStore('seatNumberStore')._data.all[3].raw.seatNumber);
						button.setText("R");
						button.setUi("confirm");
						var seatnumber = button.getHtml();
						console.log('Button Selected');
						console.log(parseInt(seatnumber[0]));
						// console.log(seatnumber[0]);
						var seat = Ext.create('myBooking.model.CurrentSeats', {
							seatNumber : parseInt(seatnumber[0])
						});

						//var adhocStore = Ext.getStore('CurrentSeatsStore');
						//adhocStore.add(seat);
						//adhocStore.sync();

						var store = Ext.getStore('seatNumberStore');
						store.add(seat);
						store.sync();

						//this.seatNumber(seatnumber);
						//count=count+1;
						//this.getSeatNo().setHtml("No.of seats selected"+count);
					} else {

						button.setText('A');
						button.setUi("action");
						var seatnumber = button.getHtml();
						console.log('Button De-Selected');
						console.log(parseInt(seatnumber[0]));
						var seatNumber = parseInt(seatnumber[0]);
						var store = Ext.getStore('seatNumberStore');
						store.each(function(item, index, id) {
							if (item.getData().seatNumber == seatNumber) {
								store.remove(item);
								console.log(item);
							}
						});
						store.sync();
					}
				}
			}

		}

	},
	seatNumber : function(seatnumber) {
		var seatNo = seatnumber;
		console.log(seatNo);

	}
});
