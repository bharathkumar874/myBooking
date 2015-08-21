/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when it performs code generation tasks such as generating new
 models, controllers or views and when running "sencha app upgrade".

 Ideally changes to this file would be limited and most work would be done
 in other places (such as Controllers). If Sencha Cmd cannot merge your
 changes and its generated code, it will produce a "merge conflict" that you
 will need to resolve manually.
 */

Ext.application({
	name : 'myBooking',

	requires : ['Ext.MessageBox'],
	controllers : ['Booking', 'Buses', 'seatEdit', 'To', 'From', 'seatSelect', 'DatabaseController', 'BoardingPoint', 'databaseFunctions', 'PassengerDetails', 'confirmSummary', 'PaymentDetails', 'finalSummary', 'CancelTicket', 'myBookings', 'ChangeSeat','StringFile','EditPayment','emailMobile'],
	stores : ['BusList', 'places', 'BoardingPoint', 'DroppingPoint', 'seatNumber', 'PassengerDetails', 'PaymentDetails', 'CurrentSeats', 'panel', 'BpointList', 'DpointList', 'BusesAvailableList','ticketChangeStatus','emailMobile'],
	models : ['BusList', 'places', 'BoardingPoint', 'DroppingPoint', 'Booking', 'seatNumber', 'PassengerDetails', 'PaymentDetails', 'CurrentSeats', 'panel', 'BpointList', 'DpointList', 'BusesAvailableList','ticketChangeStatus','emailMobile'],
	
	views : ['Main', 'Booking', 'Buses', 'SelectSeat', 'To', 'From', 'BoardingPoint', 'DroppingPoint', 'PassengerDetails', 'ConfirmYourBooking', 'PaymentDetails', 'finalSummary', 'TotalPassengerfields', 'formfield', 'showDetails', 'panelShowDetails', 'panelSummary', 'CancelTicket', 'cancelSummary', 'myBookings', 'EditBooking', 'cancelPopup', 'EditScreen', 'BoardingPointEdit', 'DroppingPointEdit', 'CancelledView', 'ChangeSeat','EditPayment','emailMobile'],

	icon : {
		'57' : 'resources/icons/Icon.png',
		'72' : 'resources/icons/Icon~ipad.png',
		'114' : 'resources/icons/Icon@2x.png',
		'144' : 'resources/icons/Icon~ipad@2x.png'
	},

	isIconPrecomposed : true,

	startupImage : {
		'320x460' : 'resources/startup/320x460.jpg',
		'640x920' : 'resources/startup/640x920.png',
		'768x1004' : 'resources/startup/768x1004.png',
		'748x1024' : 'resources/startup/748x1024.png',
		'1536x2008' : 'resources/startup/1536x2008.png',
		'1496x2048' : 'resources/startup/1496x2048.png'
	},

	launch : function() {
		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();
		var Booking = Ext.create('myBooking.view.Booking');
		var Buses = Ext.create('myBooking.view.Buses');
		var Seats = Ext.create('myBooking.view.SelectSeat');
		var To = Ext.create('myBooking.view.To');
		var From = Ext.create('myBooking.view.From');
		var BoardingPoint = Ext.create('myBooking.view.BoardingPoint');
		var DroppingPoint = Ext.create('myBooking.view.DroppingPoint');
		var PassengerDetails = Ext.create('myBooking.view.PassengerDetails');
		var ConfirmYourBooking = Ext.create('myBooking.view.ConfirmYourBooking');
		var PaymentDetails = Ext.create('myBooking.view.PaymentDetails');
		var finalSummary = Ext.create('myBooking.view.finalSummary');
		var TotalPassengerfields = Ext.create('myBooking.view.TotalPassengerfields');
		var formfield = Ext.create('myBooking.view.formfield');
		var showDetails = Ext.create('myBooking.view.showDetails');
		var panelShowDetails = Ext.create('myBooking.view.panelShowDetails');
		var panelSummary = Ext.create('myBooking.view.panelSummary');
		var CancelTicket = Ext.create('myBooking.view.CancelTicket');
		var cancelSummary = Ext.create('myBooking.view.cancelSummary');
		var myBookings = Ext.create('myBooking.view.myBookings');
		var EditBooking = Ext.create('myBooking.view.EditBooking');
		var cancelPopup = Ext.create('myBooking.view.cancelPopup');
		var EditScreen = Ext.create('myBooking.view.EditScreen');
		var BoardingPointEdit = Ext.create('myBooking.view.BoardingPointEdit');
		var DroppingPointEdit = Ext.create('myBooking.view.DroppingPointEdit');
		var CancelledView = Ext.create('myBooking.view.CancelledView');
		var ChangeSeat = Ext.create('myBooking.view.ChangeSeat');
		var EditPayment = Ext.create('myBooking.view.EditPayment');
		var emailMobile=Ext.create('myBooking.view.emailMobile');
		// Initialize the main view
		Ext.Viewport.add(Ext.create('myBooking.view.Main'), Booking, From, To, Buses, Seats, PassengerDetails, PaymentDetails, finalSummary, TotalPassengerfields, formfield, showDetails, panelShowDetails, panelSummary, CancelTicket, cancelSummary, myBookings, EditBooking, cancelPopup, EditScreen, BoardingPointEdit, DroppingPointEdit, CancelledView, ChangeSeat,EditPayment,emailMobile);
	},

	onUpdated : function() {
		Ext.Msg.confirm("Application Update", "This application has just successfully been updated to the latest version. Reload now?", function(buttonId) {
			if (buttonId === 'yes') {
				window.location.reload();
			}
		});
	}
});
