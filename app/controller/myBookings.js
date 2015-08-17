Ext.define('myBooking.controller.myBookings',{
 extend : 'Ext.app.Controller',
// requires:['Ext.app.History'],
 
   config : {
      refs : {
        main:'main',
        buses:'buses',
        booking:'booking',
        boardingpoint:'boardingpoint',
        boardingSelect:'boardingpoint #BoardingPlaces',
        droppingSelect:'droppingpoint #DroppingPlaces',
        passengerdetails:'passengerdetails',
        busesListDisplay:'buses #BusesListDisplay',
        seats:'seats',
        confirmyourbooking:'confirmyourbooking',
        showDetailsid:'#showDetails',
        fromPlace:'booking #FromPlaces',
        toPlace:'booking #popup',
        dateSelect:'booking #dateSelect',
        paymentdetails:'paymentdetails',
        amountPayable:'paymentdetails #AmountPayable',
        pType:'pType #AmountPayable',
        paymentdetailsid:'paymentdetails #paymentdetails',
        ticketno:'showDetails #ticketno',
        finalSummary:'finalSummary',
        //summary Display
        transActionIdShow:'finalSummary #TransActionIdShow',
        TicketNoShow:'finalSummary #TicketNoShow',
        travelDetails:'finalSummary #travelDetails',
        fare:'finalSummary #fare',
        showDetails:'showDetails',
        myBookings:'myBookings',
        editBooking:'editBooking',
        dateSelectEdit:'editBooking #dateSelectEdit',
        ticketnumberEdit:'editBooking #Ticketnumber',
        ticketnumberPanel:'editBooking #TicketnumberPanel',
        editBooking:'editBooking',
		panelShow:'editBooking #panelShow',
		statusShow:'editBooking #status',
		ticketget:'editBooking #ticketget',
		fareAmount:'editBooking #fareAmount',
		names:'editBooking #Names',
		fromTo:'editBooking #FromTo',
		totalAmount:'editBooking #TotalAmount',
		points:'editBooking #points',
		refund:'editBooking #refund',
		cancelpopup:'cancelpopup',
		editScreen:'editScreen',
		dateSelectEdit:'editScreen #dateSelect',
		//onbpointCmd:'editScreen #onbpointCmd',
		//ondpointCmd:'editScreen #ondpointCmd',
		bpointEdit:'editScreen #bpoint',
		dpointEdit:'editScreen #dpoint',
		popupPanelText:'cancelpopup #popupPanelText',
		panelShowPopup:'cancelpopup #panelShow',
        ticketgetPopup:'cancelpopup #ticketget',
        ticketgetEditScreen:'editScreen #ticketget',
        panelShowEditScreen:'editScreen #panelShow',
        droppingpointedit:'droppingpointedit',
        boardingpointedit:'boardingpointedit',
        editDroppingPlaces:'droppingpointedit #DroppingPlaces',
        editBoardingPlaces:'boardingpointedit #BoardingPlaces',
      },
      control : {
	        main:{
	        	onmyBookingsCmd:'myBookingsCmd'
	        },
	        myBookings:{
	        	onmyBookingBackCmd:'myBookingBackCmd',
	        	onDisclosureCmd:'DisclosureCmd'
	        },
	        editBooking:{
	        	onEditBackButtonCmd:'EditBackButtonCmd',
	        	oncancelTicketBtnCmd:'cancelTicketBtnCmd',
	        	oneditTicketBtnCmd:'editTicketBtnCmd'
	        },
	        cancelpopup:{
	        	oncancelConfirmCmd:'cancelConfirmCmd'
	        },
	        editScreen:{
	        	onEditDetailsConfirmCmd:'EditDetailsConfirmCmd',
	        	onEditDetailsBackButtonCmd:'EditDetailsBackButtonCmd',
	        	onbpointCmd:'bpointCmd',
	        	ondpointCmd:'dpointCmd'
	        },
	        boardingpointedit:{
	        	onSaveBoardingEditCmd:'SaveBoardingEditCmd'
	        },
	        droppingpointedit:{
				onSaveDroppingEditCmd:'SaveDroppingEditCmd'
	        }
      }

   },
   bpointCmd:function(){
		this.getBoardingpointedit().show();
   },
   dpointCmd:function(){
		this.getDroppingpointedit().show();
   },
   SaveBoardingEditCmd:function(){
		var select=this.getEditBoardingPlaces().getSelection();
	    this.getBpointEdit().setValue(select[0].raw.bPoint);
		this.getBoardingpointedit().hide();
   },
   SaveDroppingEditCmd:function(){
  		var select=this.getEditDroppingPlaces().getSelection();
        this.getDpointEdit().setValue(select[0].raw.dPoint);
		this.getDroppingpointedit().hide();
   },
   BpointsEditFiltered:function(record){
   		console.log(record);
   		console.log('bPoints received');
   		//this.getEditBoardingPlaces().setData(record);
   		var store=Ext.getStore('BpointList');
   		//store.getProxy().dropTable();
   		store.removeAll();
   		store.sync();
		var len=record.length;
		for(var i=0;i<len;i++){
		var rec={
			bPoint:record[i].bPoint
		};
		
		store.add(rec);
		}
		store.sync();
		
		
		this.getEditBoardingPlaces().setStore('BpointList');
	},
   	DpointsEditFiltered:function(record){
    		console.log(record);
    		console.log('bPoints received');
    		//var drecord= this.getEditDroppingPlaces();
    		//drecord.removeAll();
    		//drecord.sync();
           //drecord.setData(record);
           var store=Ext.getStore('DpointList');
	   		//store.getProxy().dropTable();
	   		store.removeAll();
	   		store.sync();
			var len=record.length;
			for(var i=0;i<len;i++){
			var rec={
				dPoint:record[i].dPoint
			};
			
			store.add(rec);
			}
			store.sync();
			
			
			this.getEditDroppingPlaces().setStore('DpointList');
    	},
   myBookingsCmd:function(){
   		console.log('myBookingsCmd -in');
   		//Ext.Viewport.animateActiveItem(this.getMain(),this.slideLeftTransition);
   		Ext.Viewport.animateActiveItem(this.getMyBookings(), this.slideLeftTransition);
   },
   myBookingBackCmd:function(){
   		console.log('myBookingBackCmd -in');
   		Ext.Viewport.animateActiveItem(this.getMain(), this.slideRightTransition);
   },
   DisclosureCmd:function(record){
		console.log('DisclosureCmd -in');
		/*var NewDate=record._data.date;
		console.log(NewDate);
		var updateDate=new Date(NewDate);
		console.log(updateDate);*/
		var TicketNo=record._data.TicketNo;
		var Name=record._data.Name;
		var TransId=record._data.TransId;
		var fromPlace=record._data.fromPlace;
		var toPlace=record._data.toPlace;
		var date=record._data.date;
		var BusService=record._data.BusService;
		var seatNumbercount=record._data.seatNumbercount;
		var seatNumbers=record._data.seatNumbers;
		var bPoint=record._data.bPoint;
		var dPoint=record._data.dPoint;
		var Timing=record._data.Timing;
		var status=record._data.status;
		var amountPayable=record._data.amountPayable;
		this.getPanelShow().setHtml('<p>Transaction Id <p>'+'<b>'+ TransId+'</b>'+'<p>Ticket Number</p>');
		this.getTicketget().setHtml(TicketNo);
		this.getStatusShow().setHtml('Ticket status: '+status);
		this.getPoints().setHtml('<p>BoardingPoint: '+bPoint+'</p>'+'<p>DroppingPoint: '+dPoint+'</p>');
		this.getPanelShowPopup().setHtml('<p><b>Ticket Number</b></p>');
		this.getTicketgetPopup().setHtml(TicketNo);
		this.getFromTo().setHtml('From Place: '+'<b>'+ fromPlace+'</b>'+'<p></p>'+'To Place: '+'<b>'+ toPlace+'</b>'+'<p></p>'+'Bus Service Name: '+'<b>'+ BusService+'</b>'+'<p></p>'+'Date: '+'<b>'+ date+' ' +Timing+'</b>');
		this.getNames().setHtml('<p>Passenger Names</p>'+'<b>'+ Name+'</b>');
		this.getFareAmount().setHtml('<p>No.of Tickets Booked </p>'+'<b>'+seatNumbercount+'</b>'+'<p>Total Fare Amount</p>');
		this.getTotalAmount().setHtml(amountPayable);
		//this.getDateSelectEdit().setValue(updateDate);
		//this.getTicketnumberEdit().setHtml(record._data.TicketNo);
		var filter=Ext.create('myBooking.utilities.databaseFunctions');
        		filter.dbFilter(fromPlace,toPlace);
		Ext.Viewport.animateActiveItem(this.getEditBooking(), this.slideLeftTransition);
	},
	EditBackButtonCmd:function(){
		console.log('DisclosureCmd -in');
		Ext.Viewport.animateActiveItem(this.getMyBookings(), this.slideRightTransition);
	},
	AfterEditCmd:function(){
		console.log('DisclosureCmd -in');
		
		
		//Update the record
		//Get the store
		var store = Ext.getStore('paymentDetails');
		
		//Get the record
		var index = store.findExact('TicketNo', this.getTicketnumberEdit()._html);
		console.log(index);
		var record = store.getAt(index);
		console.log(record);
		//Update the field value
		if(record != null)
		{
			record.set('date', this.getDateSelectEdit()._component._value);
			store.sync();
			console.log("Record Updated");
		}		
		
		
		Ext.Viewport.animateActiveItem(this.getMain(), this.slideLeftTransition);
	},
	cancelConfirmCmd:function(){
		console.log('cancelConfirmCmd -in');
		var ticket=this.getTicketgetPopup()._html;
		//Update the record
		//Get the store
		var store = Ext.getStore('paymentDetails');

		//Get the record
		var index = store.findExact('TicketNo', ticket);
		console.log(index);
		var record = store.getAt(index);
		console.log(record);
		//Update the field value
		if(record != null)
		{
			record.set('status', 'cancelled');
			store.sync();
			console.log("Record Updated");
		}

			Ext.Msg.alert('Ticked Cancelled');
			//me.getTicketNumber().setValue('');

		this.getCancelpopup().hide();
		Ext.Viewport.animateActiveItem(this.getMain(), this.slideLeftTransition);


	},
	cancelTicketBtnCmd:function(){
		console.log('cancelTicketBtnCmd -in');
		var ticket=this.getTicketget()._html;
		var store = Ext.getStore('paymentDetails');
		var index = store.findExact('TicketNo', ticket);
		console.log(index);
		var record = store.getAt(index);
		console.log(record);
		if(record._data.status =='cancelled')
		{
			Ext.Msg.alert("Ticked is already Cancelled");
			return;
		}

			var totalAmpountPayable=this.getTotalAmount()._html;
            var refund1=parseInt(totalAmpountPayable);
            console.log(refund1);
            var refund=(refund1*0.1);
            console.log(refund);
            refund=Math.ceil(refund1-refund);
            console.log(refund);
			this.getPopupPanelText().setHtml('<p>10% of the Fare will be deducted as the penality charges and the refundable amount of <b>Rs.'+refund+'</b> will be credited into your account in 2-3 Working days</p>');
		this.getCancelpopup().show();
	},
	EditDetailsBackButtonCmd:function(){
		console.log('EditDetailsBackButtonCmd -in');
		Ext.Viewport.animateActiveItem(this.getEditBooking(), this.slideRightTransition);
	},
	EditDetailsConfirmCmd:function(){
		console.log('EditDetailsConfirmCmd -in');
		//Update the record
		//Get the store

		var store = Ext.getStore('paymentDetails');

		//Get the record
		var index = store.findExact('TicketNo', this.getTicketgetEditScreen()._html );
		console.log(index);
		var record = store.getAt(index);
		console.log(record);
		//Update the field value
		if(record != null)
		{
			record.set('date', this.getDateSelectEdit()._component._value);
			record.set('bPoint', this.getBpointEdit()._component._value);
			record.set('dPoint', this.getDpointEdit()._component._value);

			store.sync();
			console.log("Record Updated");
		}

		Ext.Viewport.animateActiveItem(this.getMain(), this.slideLeftTransition);
	},
	editTicketBtnCmd:function(){
		console.log('editTicketBtnCmd -in');
		var ticket=this.getTicketget()._html;
		this.getPanelShowEditScreen().setHtml('<p>Ticket Number</p>');
        this.getTicketgetEditScreen().setHtml(ticket);
		var store = Ext.getStore('paymentDetails');
		var index = store.findExact('TicketNo', ticket);
		console.log(index);
		var record = store.getAt(index);
		console.log(record);
		if(record._data.status =='cancelled')
		{
			Ext.Msg.alert("Ticked Can't be Edited");
			return;
		}
		var date=record._data.date;
		var dateFormat=new Date(date);
		var bPoint=record._data.bPoint;
		var dPoint=record._data.dPoint;
		this.getDateSelectEdit().setValue(dateFormat);
		this.getBpointEdit().setValue(bPoint);
		this.getDpointEdit().setValue(dPoint);



		Ext.Viewport.animateActiveItem(this.getEditScreen(), this.slideLeftTransition);
	},
	



//to slide the screen left
slideLeftTransition: { type: 'slide', direction: 'left' },
//to slide  the screen right
slideRightTransition: { type: 'slide', direction: 'right' }
});