Ext.define('myBooking.controller.From', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			main : 'main',
			buses : 'buses',
			booking : 'booking',
			fromPlaces : 'booking #FromPlaces',
			fromList : 'frompopup #fromPlace',
			fromPopup : 'frompopup'
		},
		control : {
			booking : {
				onFromPopUp : 'fromPopUp'
			},
			frompopup : {
				onSaveFromPlaceCmd : 'saveFromPlaceCmd'
			}

		}
	},
	fromPopUp : function() {
		console.log('from places open');
		this.getFromPopup().show();
	},
	saveFromPlaceCmd : function() {
		console.log('from saved');
		var select = this.getFromList().getSelection();
		this.getFromPlaces().setValue(select[0].raw.place);
		console.log(select);
		this.getFromPopup().hide();
	}
});
