Ext.define('myBooking.controller.To',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			 main:'main',
	        buses:'buses',
	        booking:'booking',
	        popup:'booking #popup',
	        toList:'ToPopup #toPlace',
	        toPopup:'ToPopup'
		},
		control:{
			booking:{
				onPopupCmd:'showPopup'
			},
			ToPopup:{
				onSaveToPlaceCmd:'saveToPlaceCmd'
			}
			
		}
	},
	showPopup: function(){ 
        this.getToPopup().show();  
     } ,
     saveToPlaceCmd:function(){
     	var select=this.getToList().getSelection();
     	this.getPopup().setValue(select[0].raw.place);
     	console.log(select);
     	this.getToPopup().hide();
     } 
	});
