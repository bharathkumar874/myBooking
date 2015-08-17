Ext.define('myBooking.controller.Seats',{
 extend : 'Ext.app.Controller',
// requires:['Ext.app.History'],
 
   config : {
      refs : {
        main:'main',
        buses:'buses',
        booking:'booking',
        seats:'seats',
        button:'seats #Buttons'
      },
      control : {
      	seats:{
      	onBackToBus:'BackToBus',
      	onReserveSeat:'ReserveSeat'
      	},
      }

   },
   BackToBus:function(){
   	console.log("Back to Bus availabiles -in");
   	Ext.Viewport.animateActiveItem(this.getBuses(),this.slideRightTransition);
   },
   ReserveSeat:function(){
   	console.log("Reserved");
   	if(this.getButton().getText()==='A'){
      				console.log('R');
      				this.getButton().setText('R');
      				this.getButton().setUi("confirm");
   }
   else{
   	console.log('A');
   	this.getButton().setText('A');
      				this.getButton().setUi("action");
   }
   },






//to slide the screen left
slideLeftTransition: { type: 'slide', direction: 'left' },
//to slide  the screen right
slideRightTransition: { type: 'slide', direction: 'right' }
});