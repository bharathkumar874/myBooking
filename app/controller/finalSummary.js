Ext.define('myBooking.controller.finalSummary', {
	extend : 'Ext.app.Controller',
	// requires:['Ext.app.History'],

	config : {
		refs : {
			main : 'main',
			buses : 'buses',
			booking : 'booking',
			boardingpoint : 'boardingpoint',
			boardingSelect : 'boardingpoint #BoardingPlaces',
			droppingSelect : 'droppingpoint #DroppingPlaces',
			passengerdetails : 'passengerdetails',
			busesListDisplay : 'buses #BusesListDisplay',
			seats : 'seats',
			confirmyourbooking : 'confirmyourbooking',
			passengerdetailsid : '#passengerdetails',
			passengerName : "passengerdetails #pName",
			passengerAge : "passengerdetails #pAge",
			passengerGender : "passengerdetails #pGender",
			passengerEmail : "passengerdetails #pEmail",
			passengerMobile : "passengerdetails #pMobile",
			passengerEmeNo : "passengerdetails #pEme",
			fromPlace : 'booking #FromPlaces',
			toPlace : 'booking #popup',
			dateSelect : 'booking #dateSelect',
			passengerDetailsSummary : 'confirmyourbooking #PassengerDetailsSummary',
			paymentdetails : 'paymentdetails',
			amountPayable : 'paymentdetails #AmountPayable',
			pType : 'pType #AmountPayable',
			paymentdetailsid : 'paymentdetails #paymentdetails',
			ticketno : 'confirmyourbooking #ticketno',
			finalSummary : 'finalSummary',
			noOfTickets : 'showDetails #noOfTickets',

		},
		control : {
			finalSummary : {
				onBackToPayNowCmd : 'BackToPayNowCmd',
				onMoveToHomeCmd : 'MoveToHomeCmd'
			}

		}

	},
	BackToPayNowCmd : function() {
		console.log('Paynow back button Pressed -in');
		Ext.Viewport.animateActiveItem(this.getPaymentdetails(), this.slideRightTransition);
	},
	MoveToHomeCmd : function() {
		console.log('MoveToHomeCmd -in');
		var seatNumberCount = this.getNoOfTickets()._html;
		for (var i = 7; i < (seatNumberCount + 7); i++) {
			this.getFinalSummary().removeAt(7);
		}
		Ext.Viewport.animateActiveItem(this.getMain(), this.slideLeftTransition);
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