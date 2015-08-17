Ext.define('myBooking.controller.PaymentDetails',{
 extend : 'Ext.app.Controller',
// requires:['Ext.app.History'],
 
   config : {
      refs : {
        main:'main',
        buses:'buses',
        booking:'booking',
         buseslist:'buses #BusesListDisplay',
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
       	noOfTickets:'showDetails #noOfTickets',
        paymentdetails:'paymentdetails',
        amountPayable:'paymentdetails #AmountPayable',
        pType:'pType #AmountPayable',
        paymentdetailsid:'paymentdetails #paymentdetails',
        ticketno:'showDetails #ticketno',
        finalSummary:'finalSummary',
        totalpassenger: 'totalpassenger',
        formfield:'formfield',
        //summary Display
        
        transActionIdShow:'finalSummary #TransActionIdShow',
        TicketNoShow:'finalSummary #TicketNoShow',
        travelDetails:'finalSummary #travelDetails',
        fare:'finalSummary #fare',
        showDetails:'showDetails'
        
      },
      control : {
	      paymentdetails:{
		      	onPayNowCmd:'PayNowCmd',
		      	onPaymentBackButtonCmd:'PaymentBackButtonCmd'
		     },
		  showDetails:{
		  	onProceedButtonCmd:'ProceedButtonCmd'
		  }
      
      }

   },
   PayNowCmd:function(){
   	console.log('payNow button Pressed');
   	var me=this;
   //	Ext.Viewport.setMasked({xtype:'loadmask',message:'your custom loadmask'});
   	var TransId = new Date().getTime();
	TransId = 'MCS'+''+TransId+""+Math.ceil(Math.random()*1000);
	console.log(TransId);
	var TicketId='TN'+Math.ceil(Math.random()*100000);
	console.log('TicketId');
		var From=this.getFromPlace()._component._value;
		var To=this.getToPlace()._component._value;
		var date=this.getDateSelect()._component._value;
		var seatNumberCount=this.getNoOfTickets()._html;
		var seatNumbers=this.getTicketno()._html;
		console.log(seatNumberCount);
		console.log(seatNumbers);
		var selected=this.getBusesListDisplay().getSelection();
		var busService=selected[0]._data.BusService;
		var busType=selected[0]._data.BusType;
		var busFare=parseInt(this.getAmountPayable()._value);
		var SingleFare=selected[0]._data.Fare;
		var busTime=selected[0]._data.Timing;
		//console.log(busService,busType, busFare);
	
	var dataNameArr=new Array();
		var dataGenderArr=new Array();
		var dataAgeArr=new Array();
			var storeList=Ext.getStore('panelPassengers');
			storeList.each(function(item,index,id){
				dataNameArr.push(item.get('Name'));
				dataAgeArr.push(item.get('Age'));
				dataGenderArr.push(item.get('Gender'));
			});
		console.log(dataNameArr);
		console.log(dataAgeArr);
		console.log(dataGenderArr);
		//storeList.removeAll();
		//storeList.sync();
		
	var selectBpoint=this.getBoardingSelect().getSelection();
		var Bpoint=selectBpoint[0].raw.bPoint;
	var selectDpoint=this.getDroppingSelect().getSelection();
		var Dpoint=selectDpoint[0].raw.dPoint;
		console.log('dropping Point: '+Dpoint);
    	var PaymentType=this.getPaymentdetails()._activeItem._items.items[0]._component._value;
   		var cardType=this.getPaymentdetails()._activeItem._items.items[1]._component._value;
   		var cardNumber=this.getPaymentdetails()._activeItem._items.items[2]._component._value;
   		console.log(cardNumber,cardNumber.length);
   		var cardName=this.getPaymentdetails()._activeItem._items.items[3]._component._value;
   		var expiry=this.getPaymentdetails()._activeItem._items.items[4]._component._value;
   		var cvv=this.getPaymentdetails()._activeItem._items.items[5]._component._value;
   		console.log(cvv,cvv.length);
   		var amount=parseInt(this.getPaymentdetails()._activeItem._items.items[6]._component._value);
   		if( (PaymentType!='')&&(cardType!='')&&(cardNumber.length==16)&&(cvv.length==3)&&(expiry.length==7)&&(cardName.length>2))
   		{
   		var Details=Ext.create('myBooking.model.PaymentDetails',{
   		paymentType:PaymentType,
		cardType:cardType,
		cardNumber:cardNumber,
		cardName:cardName,
		expiry:expiry,
		cvv:cvv,
		amountPayable:busFare,
		TransId:TransId,
		TicketNo:TicketId,
		fromPlace:From,
		toPlace:To,
		Timing:busTime,
		date:date,
		BusService:busService,
		BusType:busType,
		Fare:SingleFare,
		Name:dataNameArr,
		Gender:dataGenderArr,
		Age:dataAgeArr,
		seatNumbercount:seatNumberCount,
		seatNumbers:seatNumbers,
		bPoint:Bpoint,
		dPoint:Dpoint,
		status:'confirm'
		
   	});


   	var store=Ext.getStore('paymentDetails');
   	store.add(Details);
   	store.sync();
   	console.log(Details);
   	
   	//displaying the summary
   	this.getTransActionIdShow().setHtml('<p>Your Payment has been made Sucessfully</p><h2>Your Transaction Id</h2>'+'<b>'+TransId+'</b>');
   	this.getTicketNoShow().setHtml('<p>Your Booking Ticket Number</p>'+'<b>'+TicketId+'</b>');
   	this.getTravelDetails().setHtml('<p><b>Booking Details</b></p>'+'From: '+From+'<p></p>'+'To: '+To+'<p></p>'+'Date: '+date+'<p></p>'+'Service Provider: '+busService+'<p></p>'+'No.of Seats:'+seatNumberCount);
   	this.getFare().setHtml('SeatNumbers : '+seatNumbers+'<p>Total Fare</p>'+'<b>'+busFare+'</b>');
   	
   	
   	//Load Mask
		
	/*var loader = Ext.create('Ext.LoadMask',{
		config:{message:'Transaction..',
		indicator:true}
	});
	
	setTimeout(function(){loader.destroy()},3000);	*/
	var panelDrop=Ext.getStore('panelPassengers');
   	panelDrop.removeAll();
   	panelDrop.sync();
   	//console.log(Details);	 
   	
   	//setTimeout(function(){loader.destroy();}, 3000);
   	//Ext.Viewport.setMasked(false);
   	
   	Ext.Viewport.animateActiveItem(this.getFinalSummary(),this.slideLeftTransition);
	}
	else{
	 Ext.Msg.alert('Enter values Correctly');
       		return;

	}
   	me.getFromPlace().setValue('');
    me.getToPlace().setValue('');
    var seatNumberCount=this.getNoOfTickets()._html;
me.getTotalpassenger().removeAll();
console.log(me.getShowDetails());
		
	for(var i=9; i<(seatNumberCount+9); i++)
	{
		//var view = Ext.create('myBooking.view.formfield');
		
		//me.getShowDetails().removeAt(7);
		me.getShowDetails().removeAt(9);
				
		}
   // me.getBuseslist().setData('');
   },
   PaymentBackButtonCmd:function(){
   		console.log('payment back button Pressed');
   		Ext.Viewport.animateActiveItem(this.getShowDetails(),this.slideRightTransition);
   },
   ProceedButtonCmd:function(){
   	console.log('onProceedButtonCmd -in');
   	Ext.Viewport.animateActiveItem(this.getPaymentdetails(),this.slideLeftTransition);
   },
  



//to slide the screen left
slideLeftTransition: { type: 'slide', direction: 'left' },
//to slide  the screen right
slideRightTransition: { type: 'slide', direction: 'right' }
});