Ext.define('myBooking.controller.Buses', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			main : 'main',
			buses : 'buses',
			busesListDisplay : 'buses #BusesListDisplay',
			buseslist : 'buses #BusesListDisplay',
			booking : 'booking',
			seats : 'seats',
			busesListDisplay : 'buses #BusesListDisplay',
			busDetailsSummary2 : 'confirmyourbooking #busDetailsSummary2',
			busDetailsSummary1 : 'showDetails #BusesListDisplay',
		},
		control : {

			buses : {
				onGoBackBooking : 'GoBackBooking',
				onGoToSelectSeat : 'goToSelectSeat'

			}
		}

	},

	//go back to Booking view from select buses view
	GoBackBooking : function() {
		console.log('go back to Booking -in');
		//this.getBuseslist().remove();

		Ext.Viewport.animateActiveItem(this.getBooking(), this.slideRightTransition);

	},
	goToSelectSeat : function() {
		console.log('go to select seat -in');
		var selected = this.getBusesListDisplay().getSelection();
		var busService = selected[0]._data.BusService;
		var busType = selected[0]._data.BusType;
		var busFare = selected[0]._data.Fare;
		var busTime = selected[0]._data.Timing;
		console.log(busService, busType, busFare);
		this.getBusDetailsSummary1().setHtml('<b>Bus Service Provider Name</b>' + '<p>' + busService + '</p>' + 'Bus Type : ' + busType + '<p> </p>' + 'Depature Time: ' + busTime);

		Ext.Viewport.animateActiveItem(this.getSeats(), this.slideLeftTransition);
	},

	//to slide the screen left
	slideLeftTransition : {
		type : 'slide',
		direction : 'left'
	},
	//to slide  the screen right
	slideRightTransition : {
		type : 'slide',
		direction : 'right'
	}
});
