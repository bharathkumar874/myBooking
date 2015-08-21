Ext.define('myBooking.controller.BoardingPoint', {
	extend : 'Ext.app.Controller',
	// requires:['Ext.app.History'],

	config : {
		refs : {
			main : 'main',
			buses : 'buses',
			booking : 'booking',
			busesListDisplay : 'buses #BusesListDisplay',
			boardingpoint : 'boardingpoint',
			boardingSelect : 'boardingpoint #BoardingPlaces',
			droppingSelect : 'droppingpoint #DroppingPlaces',
			boardingSummary : 'showDetails #BoardingSummary',
			droppingSummary : 'showDetails #DroppingSummary',
			seats : 'seats',
			passengerdetails : 'passengerdetails',
			noOfTickets : 'showDetails #noOfTickets',
			bustotalfare : 'showDetails #totalFare',
			droppingpoint : 'droppingpoint',
			paymentdetails : 'paymentdetails',
			amountPayable : 'paymentdetails #AmountPayable',
			ticketno : 'showDetails #ticketno',
			totalpassenger : 'totalpassenger',
			formfield : 'formfield',
			panelName : 'formfield #panel',
			panelGender : 'formfield #panelGender',
			panelAge : 'formfield #panelAge',
			showDetails : 'showDetails',
			panelShowDetails : 'panelShowDetails',
			finalSummary : 'finalSummary',
			panelSummary : 'panelSummary',
			emailMobile:'emailMobile'
		},
		control : {
			seats : {
				onProceedSeatCmd : 'ProceedSeat'
			},
			boardingpoint : {
				onSaveBoardingCmd : 'SaveBoardingCmd'
			},
			droppingpoint : {
				onSaveDroppingCmd : 'SaveDroppingCmd'
			},
			totalpassenger : {
				onBookButtoncmd : 'BookButtoncmd',
				onBackButtonpassengersCmd : 'BackButtonpassengersCmd'
			},
			showDetails : {
				onBackButtonDetailsCmd : 'BackButtonDetailsCmd'
			}

		}

	},
	BookButtoncmd : function() {
		console.log('BookButtoncmd -in');

		var seatNumberCount = Ext.getStore('seatNumberStore')._data.all.length;
		console.log(seatNumberCount);
		var panelStore = Ext.getStore('panelPassengers');
		//var form=new Array();
		var form = this.getTotalpassenger().getItems();
		console.log(form);
		for (var i = 1; i < seatNumberCount + 1; i++) {
			console.log(seatNumberCount);
			console.log("Panel Name");
			var name = form.getAt(i).down('#panelName').getValue();
			var gender = form.getAt(i).down('#panelGender').getValue();
			var age = form.getAt(i).down('#panelAge').getValue();
			var panel = Ext.create('myBooking.view.panelShowDetails');
			var panelset = this.getShowDetails().add(panel);
			panelset.setHtml('<b>Passenger ' + i + '</b>' + '<p></p>' + 'Name: ' + name + '<p></p>' + 'Gender : ' + gender + '<p></p>' + 'Age : ' + age);
			console.log(name, gender, age);
			var Final = Ext.create('myBooking.view.panelSummary');
			var finalSet = this.getFinalSummary().add(Final);
			finalSet.setHtml('<b>Passenger ' + i + '</b>' + '<p></p>' + name + '/' + gender + '/' + age + 'Years');
			var record = {
				Name : name,
				Gender : gender,
				Age : age
			};

			panelStore.add(record);

		}
		panelStore.sync();

		var store = Ext.getStore('seatNumberStore');
		store.removeAll();
		store.sync();
		//Ext.Viewport.setActiveItem(this.getShowDetails());
		this.getEmailMobile().show();

	},
	ProceedSeat : function() {
		console.log("Proceed Pressed -in");
		//this.getBoardingpoint().show();
		console.log(Ext.getStore('seatNumberStore')._data.all.length);
		this.getNoOfTickets().setHtml(Ext.getStore('seatNumberStore')._data.all.length);
		var seatNumberCount = Ext.getStore('seatNumberStore')._data.all.length;
		var selected = this.getBusesListDisplay().getSelection();
		var busFare = selected[0]._data.Fare;
		var TotalFare = seatNumberCount * busFare;
		this.getBustotalfare().setHtml('Total Fare : ' + TotalFare);
		this.getAmountPayable().setValue(TotalFare);
		//var seatsArr=new Array();
		var seats = '';
		var store = Ext.getStore('seatNumberStore');
		store.each(function(item, index, id) {
			//seatsArr.push(item.getData().seatNumber);
			seats += item.getData().seatNumber + ',';
		});
		//console.log(seatsArr);
		seats = seats.substring(0, seats.length - 1);
		console.log("" + seats);
		console.log(seats.split(','));

		this.getTicketno().setHtml('' + seats);
		//clearing the store
		//store.removeAll();
		//store.sync();

		console.log(Ext.getStore('seatNumberStore')._data.all.length);

		//Code for Creating forms for each passenger
		for (var i = 0; i < seatNumberCount; i++) {
			var view = Ext.create('myBooking.view.formfield');
			var fieldSet = this.getTotalpassenger().add(view);
			fieldSet.setHtml('Enter Details of Passenger ' + (i + 1));
			/*var panel=Ext.create('myBooking.view.panelShowDetails');
			 this.getShowDetails().add(panel);*/
		}

		//Adding all the views to a container
		//Ext.Viewport.setActiveItem(this.getTotalpassenger());
		this.getBoardingpoint().show();

	},
	SaveBoardingCmd : function() {
		console.log('save Boarding point');
		var select = this.getBoardingSelect().getSelection();
		this.getBoardingSummary().setHtml('Boarding Point: ' + select[0].raw.bPoint);
		//console.log(select);
		this.getBoardingpoint().hide();
		//Ext.getStore('seatNumberStore').getProxy().dropTable();
		this.getDroppingpoint().show();
		//Ext.Viewport.animateActiveItem(this.getPassengerdetails(),this.slideLeftTransition);
	},

	SaveDroppingCmd : function() {
		console.log('save Dropping point -in');
		var select = this.getDroppingSelect().getSelection();
		this.getDroppingSummary().setHtml('Dropping Point: ' + select[0].raw.dPoint);
		this.getDroppingpoint().hide();

		Ext.Viewport.animateActiveItem(this.getTotalpassenger(), this.slideLeftTransition);
	},
	BackButtonpassengersCmd : function() {
		console.log('BackButtonpassengersCmd -in');
		Ext.Viewport.animateActiveItem(this.getSeats(), this.slideRightTransition);
	},
	BackButtonDetailsCmd : function() {
		console.log('BackButtonDetailsCmd -in');
		Ext.Viewport.animateActiveItem(this.getTotalpassenger(), this.slideRightTransition);

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
