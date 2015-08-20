Ext.define('myBooking.controller.PassengerDetails', {
	extend : 'Ext.app.Controller',
	// requires:['Ext.app.History'],

	config : {
		refs : {
			main : 'main',
			buses : 'buses',
			booking : 'booking',
			boardingpoint : 'boardingpoint',
			passengerdetails : 'passengerdetails',
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
			passengerDetailsSummary : 'confirmyourbooking #PassengerDetailsSummary'

		},
		control : {
			passengerdetails : {
				onGoToSelSeat : 'GoToSelSeat',
				onToConfimSummaryCmd : 'ToConfimSummaryCmd'
			}

		}

	},
	//go to confirm your Booking view
	GoToSelSeat : function() {
		console.log("passenger back button -in");
		Ext.Viewport.animateActiveItem(this.getSeats(), this.slideRightTransition);
	},
	ToConfimSummaryCmd : function() {
		console.log('Passenger confirm Button');
		var passengerDet = this.getPassengerdetailsid().getValues();
		console.log(passengerDet.Age);
		var Name = passengerDet.Name;
		var Gender = this.getPassengerGender().record.raw.value;
		var Age = this.getPassengerAge()._component._value;
		var email = passengerDet.email;
		var mobile = passengerDet.mobile;
		var emergency = passengerDet.emergency;
		var From = this.getFromPlace()._component._value;
		var To = this.getToPlace()._component._value;
		var Details = Ext.create('myBooking.model.PassengerDetails', {
			Name : Name,
			Gender : Gender,
			Age : Age,
			email : email,
			mobile : mobile,
			emergency : emergency,
			fromPlace : From,
			toPlace : To
		});
		var store = Ext.create('myBooking.store.PassengerDetails');
		store.add(Details);
		store.sync();
		console.log(Details);
		this.getPassengerDetailsSummary().setHtml('<h1><b>Passenger Details</b></h1>' + 'Name : ' + Name + "<p></p>" + 'Gender : ' + Gender + "<p></p>" + 'Age : ' + Age + "<p></p>" + 'Email Id: ' + email + "<p></p>" + 'Mobile No. :' + mobile + "<p></p>" + 'Emergency No. : ' + emergency);
		//console.log(this.getPassengerAge()._component._value);
		//var filter=Ext.create('myBooking.utilities.databaseFunctions');
		//filter.dbPassengerDetails(From,To);
		Ext.Viewport.animateActiveItem(this.getConfirmyourbooking(), this.slideLeftTransition);
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