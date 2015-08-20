Ext.define('myBooking.controller.Booking', {
	extend : 'Ext.app.Controller',
	// requires:['Ext.app.History'],

	config : {
		refs : {
			main : 'main',
			buses : 'buses',
			booking : 'booking',
			buseslist : 'buses #BusesListDisplay',
			showdate : 'buses #showdate',
			boardingpoint : 'boardingpoint',
			droppingpoint : 'droppingpoint',
			boardingPlaces : 'boardingpoint #BoardingPlaces',
			droppingPlaces : 'droppingpoint #DroppingPlaces',
			seats : 'seats',
			dateSelect : 'booking #dateSelect',
			fromPlace : 'booking #FromPlaces',
			toPlace : 'booking #popup',
			returnDate : 'booking #returnDate'
		},
		control : {
			main : {
				bookTicketCommand : 'onBookTicketCommand'
			},
			booking : {
				onGoBackCmd : 'GoBackHome',
				onFireBusesCmd : 'FireBusesCmd'
			}

		}

	},
	//go to booking view when clicked on book ticket in Home screen
	onBookTicketCommand : function() {
		console.log("book Ticket pressed -in");
		Ext.Viewport.animateActiveItem(this.getBooking(), this.slideLeftTransition);
		//			Ext.Viewport.animateActiveItem(this.getSeats(), this.slideLeftTransition);

	},
	//go back to Home from Booking view
	GoBackHome : function() {
		console.log('go back to home -in');
		Ext.Viewport.animateActiveItem(this.getMain(), this.slideRightTransition);

	},

	/*
	filtering:function(fromPlace,BusService){
	console.log('getting Details');
	console.log(fromPlace);
	console.log(BusService);
	},*/

	//function for setting available buses list in the Buses view
	filtered : function(record) {
		console.log(record);
		console.log('received');
		//this.getBuseslist().setData(record);
		var store = Ext.getStore('BusesAvailableList');
		//store.getProxy().dropTable();
		store.removeAll();
		store.sync();
		var len = record.length;
		for (var i = 0; i < len; i++) {
			var rec = {
				fromPlace : record[i].fromPlace,
				toPlace : record[i].toPlace,
				Timing : record[i].Timing,
				BusService : record[i].BusService,
				BusType : record[i].BusType,
				Fare : record[i].Fare
			};

			store.add(rec);
		}
		store.sync();

		this.getBuseslist().setStore('BusesAvailableList');

	},
	//function for setting values into Boarding Point view list
	BpointsFiltered : function(record) {
		console.log(record);
		console.log('bPoints received');
		//this.getBoardingPlaces().setData(record);
		var store = Ext.getStore('BpointList');
		//store.getProxy().dropTable();
		store.removeAll();
		store.sync();
		var len = record.length;
		for (var i = 0; i < len; i++) {
			var rec = {
				bPoint : record[i].bPoint
			};

			store.add(rec);
		}
		store.sync();

		this.getBoardingPlaces().setStore('BpointList');

	},
	DpointsFiltered : function(record) {
		console.log(record);
		console.log('bPoints received');
		//this.getDroppingPlaces().setData(record);
		var store = Ext.getStore('DpointList');
		//store.getProxy().dropTable();
		store.removeAll();
		store.sync();
		var len = record.length;
		for (var i = 0; i < len; i++) {
			var rec = {
				dPoint : record[i].dPoint
			};

			store.add(rec);
		}
		store.sync();

		this.getDroppingPlaces().setStore('DpointList');
	},
	//go to select buses view when clicked on 'find buses'
	FireBusesCmd : function() {
		console.log('found buses');
		//getting from,to and date details from text fields
		var From = this.getFromPlace()._component._value;
		var To = this.getToPlace()._component._value;
		var date = this.getDateSelect()._component._value;
		var returnDate = this.getReturnDate()._component._value;
		console.log('return date ' + returnDate);
		var now = Ext.Date.add(new Date(), Ext.Date.DAY, -1);
		console.log('past date ' + now);
		var given = new Date(date);
		var returnGiven = new Date(returnDate);
		console.log('given ' + given);
		console.log('return Given ' + returnGiven);
		if (given > now && returnGiven > now) {
			console.log(date);
			this.getShowdate().setHtml('on ' + date);
			console.log('From:' + From + ', To:' + To);
			var filter = Ext.create('myBooking.utilities.databaseFunctions');
			filter.dbFilter(From, To);

			//Validating the Ticket Booking view
			var fromplaceDetails = this.getFromPlace()._component._value;
			var toplaceDetails = this.getToPlace()._component._value;
			console.log(fromplaceDetails);
			var valid = Ext.create('myBooking.model.Booking', {
				From : fromplaceDetails,
				To : toplaceDetails
			});
			var errs = valid.validate();
			var msg = '';
			if (!errs.isValid()) {
				errs.each(function(err) {
					msg += err.getField() + ' : ' + err.getMessage() + '';
				});
				Ext.Msg.alert('ERROR', msg);
			} else {

				//Ext.Msg.alert('SUCCESS', 'Validation of the form is Succesfull');
				Ext.Viewport.animateActiveItem(this.getBuses(), this.slideLeftTransition);
			}
			//Validation completed
		} else {
			Ext.Msg.alert('Check:Past date is selected');
		}
		var store = Ext.getStore('seatNumberStore');
		store.removeAll();
		store.sync();
		var panelDrop = Ext.getStore('panelPassengers');
		panelDrop.removeAll();
		panelDrop.sync();
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
