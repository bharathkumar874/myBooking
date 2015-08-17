Ext.define('myBooking.controller.confirmSummary',{
 extend : 'Ext.app.Controller',
   config : {
      refs : {
        main:'main',
        buses:'buses',
        booking:'booking',
        buseslist:'buses #BusesListDisplay',
        showdate:'buses #showdate',
        boardingPoint:'boardingpoint',
        boardingPlaces:'boardingpoint #BoardingPlaces',
        seats:'seats',
        dateSelect:'booking #dateSelect',
        fromPlace:'booking #FromPlaces',
        toPlace:'booking #popup',
        passengerdetails:'passengerdetails',
        fromAndToPlaces:'confirmyourbooking #fromAndToPlaces',
        paymentdetails:'paymentdetails',
        noOfTickets:'confirmyourbooking #noOfTickets',
        ticketno:'confirmyourbooking #ticketno',
        busdetailsShowPanel:'showDetails #busdetailsShowPanel'
      },
      control : {
	      confirmyourbooking:{
			      onBackToBPCmd:'BackToBPCmd',
			      onProceedToPayCmd:'ProceedToPayCmd'
	      }
      }

   },
	
	filtered:function(record){
		console.log(record);
		console.log('received in confirm booking');
		var From=this.getFromPlace()._component._value;
		var To=this.getToPlace()._component._value;
		this.getBusdetailsShowPanel().setHtml('Origin :  '+From+' '+'<p> </p>'+' Destination : ' +To);
		
		
	},
	BackToBPCmd:function(){
	console.log('BackToBPCmd -in');
	Ext.Viewport.animateActiveItem(this.getPassengerdetails(),this.slideRightTransition);

	},
	ProceedToPayCmd:function(){
		console.log('ProceedToPayCmd -in');
		Ext.Viewport.animateActiveItem(this.getPaymentdetails(),this.slideLeftTransition);
		
	},
	//function for setting values into Boarding Point view list
	
//to slide the screen left
slideLeftTransition: { type: 'slide', direction: 'left' },
//to slide  the screen right
slideRightTransition: { type: 'slide', direction: 'right' }
});