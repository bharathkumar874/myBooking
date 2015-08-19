Ext.define('myBooking.controller.seatEdit',{
 extend : 'Ext.app.Controller',
// requires:['Ext.app.History'],
 
   config : {
      refs : {
       	seatNo: 'seats #seatNo',
       	seatNumberStore:'seatNumberStore',
       	ticketgetEditScreen:'editScreen #ticketget',
       	changeseatButton:'changeseat .Buttons',
       	changeseat:'changeseat'
      },
      control : {
      	//var count=0;
      	'button[action=Edit]':{
      		
      		tap:function(button){
      			var me=this;
      			var store=Ext.getStore('paymentDetails');
      			var index=store.findExact('TicketNo',this.getTicketgetEditScreen()._html);
      			var record=store.getAt(index);
      			var count=record._data.seatNumbercount;
      			var seats=record._data.seatNumbers.split(',');
      			console.log(count);
      			console.log(seats);
      			var store=Ext.getStore('seatNumberStore');
                store.removeAll();
                store.sync();
      			for(var i=0;i<count;i++)
      			{
      				var sNo=parseInt(seats[i]);
      			this.getChangeseat().down('#'+sNo).setUi('confirm');
      			this.getChangeseat().down('#'+sNo).setText('R');
      			this.getChangeseat().down('#'+sNo).setHtml(""+sNo+"");
  				var seat = Ext.create('myBooking.model.CurrentSeats', {
                    	seatNumber : sNo
                    });
                    var store=Ext.getStore('seatNumberStore');
                    store.add(seat);
                    
      			}
      			store.sync();
      		}
      	},
      	
      	'button[action=EditAvailable]':{
      		
                tap:function (button) {

                  //  console.log('button pressed');

                    if (button.getText() === "A") {
                      // console.log(Ext.getStore('seatNumberStore')._data.all[3].raw.seatNumber);
                        button.setText("R");
                        button.setUi("confirm");
                        var seatnumber=button.getHtml();
                        console.log('Button Selected');
                        console.log(parseInt(seatnumber));
                        //console.log(parseInt(seatnumber[0]));
                       // console.log(seatnumber[0]);
                        var seat = Ext.create('myBooking.model.CurrentSeats', {
                        	seatNumber : parseInt(seatnumber)
                        });
                        
                        //var adhocStore = Ext.getStore('CurrentSeatsStore');
                        //adhocStore.add(seat);
                        //adhocStore.sync();
                        
                       
                        
                         var store=Ext.getStore('seatNumberStore');
                        store.add(seat);
                        store.sync();
                       
                        
                        //this.seatNumber(seatnumber);
                        //count=count+1;
                        //this.getSeatNo().setHtml("No.of seats selected"+count);
                    }
                    else if(button.getText() === "R") {
                                            
                        button.setText('A');
                        button.setUi("action");
                       var seatnumber=button.getHtml();
                        console.log('Button De-Selected');
                        console.log(parseInt(seatnumber));
                        	//var seatNumber = seatnumber[0];
                         var store = Ext.getStore('seatNumberStore');
                        store.each(function(item,index,id){
                        	if(item.getData().seatNumber == seatnumber)
                        	{
                        		store.remove(item);
                        		console.log(item);
                        	}
                        });
                        store.sync();
                    }
                   }
                  }
      	
      	
      	
      }

   },
   
   
});