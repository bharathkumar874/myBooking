Ext.define('myBooking.controller.CancelTicket',{
 extend : 'Ext.app.Controller',
// requires:['Ext.app.History'],
 
   config : {
      refs : {
        main:'main',
        buses:'buses',
        booking:'booking',
        busesListDisplay:'buses #BusesListDisplay',
        boardingpoint:'boardingpoint',
        boardingSelect:'boardingpoint #BoardingPlaces',
        droppingSelect:'droppingpoint #DroppingPlaces',
        boardingSummary:'showDetails #BoardingSummary',
        droppingSummary:'showDetails #DroppingSummary',
        seats:'seats',
        passengerdetails:'passengerdetails',
        noOfTickets:'showDetails #noOfTickets',
        bustotalfare:'showDetails #totalFare',
      	droppingpoint:'droppingpoint',
      	paymentdetails:'paymentdetails',
      	amountPayable:'paymentdetails #AmountPayable',
      	ticketno:'showDetails #ticketno',
		totalpassenger: 'totalpassenger',
		formfield:'formfield',
		panelName:'formfield #panel',
		panelGender:'formfield #panelGender',
		panelAge:'formfield #panelAge',
		showDetails:'showDetails',
		panelShowDetails:'panelShowDetails',
		finalSummary:'finalSummary',
		panelSummary:'panelSummary',
		cancelTicket:'CancelTicket',
		cancelSummary:'cancelSummary',
		ticketNumber:'CancelTicket #ticketNumber',
		panelShow:'cancelSummary #panelShow',
		ticketget:'cancelSummary #ticketget',
		fareAmount:'cancelSummary #fareAmount',
		names:'cancelSummary #Names',
		fromTo:'cancelSummary #FromTo',
		totalAmount:'cancelSummary #TotalAmount',
		refund:'cancelSummary #refund'
      },
      control : {
      	main:{
      		oncancelTicketViewCmd:'cancelTicketViewCmd'
      	},
      	cancelTicket:{
      		onbackToMainCmd:'backToMainCmd',
      		onSearchCmd:'SearchCmd'
      	},
      	cancelSummary:{
      		onbackToCTCmd:'backToCTCmd',
      		onCancelConfirmCmd:'CancelConfirmCmd'
      	}
      }

   },
   CancelConfirmCmd:function(){
   		console.log('CancelConfirmCmd -in');
   		//this.getStore('paymentDetails')
   		var ticket=this.getTicketget()._html;

   		var me=this;
   		var store=Ext.getStore('paymentDetails');
   		store.each(function(item,index,id){
   			if(item.get('TicketNo')==ticket)
   			{
   				store.remove(item);
   				store.sync();
   				//return;
   			}
   			Ext.Msg.alert('Ticked Cancelled');
   			me.getTicketNumber().setValue('');
   			Ext.Viewport.animateActiveItem(me.getMain(),me.slideLeftTransition);
   			
   		});
   		
   		
   		
   },
   cancelTicketViewCmd:function(){
   		console.log('cancelTicketViewCmd -in');
   		Ext.Viewport.animateActiveItem(this.getCancelTicket(),this.slideLeftTransition);
   	},
   backToMainCmd:function(){
   		console.log('backToMainCmd from cancelTicket -in');
   		Ext.Viewport.animateActiveItem(this.getMain(),this.slideRightTransition);
   	
   },
 SearchCmd:function(){
   		console.log('backToMainCmd from cancelTicket -in');
   		var ticket=this.getTicketNumber()._value;
   		console.log(ticket);
   		var ticketdb=Ext.create('myBooking.utilities.databaseFunctions');
		ticketdb.dbTicket(ticket);
   		//Ext.Viewport.animateActiveItem(this.getCancelSummary(),this.slideLeftTransition);
   	
   },
   searched:function(record){
   	if(record== null)
   	{
   		Ext.Msg.alert('Ticket Not found');
   		return;
   	}
   	else{
   	console.log(record);
	var TicketNo=record[0].TicketNo;
	var Name=record[0].Name;
	var TransId=record[0].TransId;
	var fromPlace=record[0].fromPlace;
	var toPlace=record[0].toPlace;
	var date=record[0].date;
	var BusService=record[0].BusService;
	var seatNumbercount=record[0].seatNumbercount;
   	var seatNumbers=record[0].seatNumbers;
   	var Timing=record[0].Timing;
   	var amountPayable=record[0].amountPayable;
   	this.getPanelShow().setHtml('<p>Transaction Id <p>'+'<b>'+ TransId+'</b>'+'<p>Ticket Number</p>');
   	this.getTicketget().setHtml(TicketNo);
   	this.getFromTo().setHtml('From Place: '+'<b>'+ fromPlace+'</b>'+'<p></p>'+'To Place: '+'<b>'+ toPlace+'</b>'+'<p></p>'+'Bus Service Name: '+'<b>'+ BusService+'</b>'+'<p></p>'+'Date: '+'<b>'+ date+' ' +Timing+'</b>');
   	this.getNames().setHtml('<p>Passenger Names</p>'+'<b>'+ Name+'</b>');
   	this.getFareAmount().setHtml('<p>No.of Tickets Booked </p>'+'<b>'+seatNumbercount+'</b>'+'<p>Total Fare Amount</p>');
   	this.getTotalAmount().setHtml(amountPayable);
    var refund1=parseInt(amountPayable);
    console.log(refund1);
    var refund=(refund1*0.1);
    console.log(refund);
    refund=Math.ceil(refund1-refund);
    console.log(refund);
    this.getRefund().setHtml('<p>10% of the Fare will be deducted as the penality charges and the refundable amount of Rs. '+refund+' will be credited into your account in 2-3 Working days</p>');
	Ext.Viewport.animateActiveItem(this.getCancelSummary(),this.slideLeftTransition);
    
   	}
   },
   backToCTCmd:function(){
   		console.log('backToCTCmd from cancelSummary -in');
   		this.getTicketNumber().setValue('');
   		Ext.Viewport.animateActiveItem(this.getCancelTicket(),this.slideRightTransition);
   },


//to slide the screen left
slideLeftTransition: { type: 'slide', direction: 'left' },
//to slide  the screen right
slideRightTransition: { type: 'slide', direction: 'right' }
});