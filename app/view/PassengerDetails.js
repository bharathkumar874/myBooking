Ext.define('myBooking.view.PassengerDetails', {
	extend : 'Ext.Panel',
	xtype : 'passengerdetails',
	requires : ['Ext.TitleBar'],
	config : {

		scrollable : true,
		//title:'Payment',
		layout : "vbox",
		height : '500px',
		id : 'passengerdetails',
		items : [{
			xtype : 'fieldset',
			title : 'Fill the Details',
			layout : 'vbox',
			height : '200px',
			scrollable : true,
			items : [{
				xtype : 'textfield',
				label : 'Name',
				name : 'Name',
				itemId : 'pName',
				placeHolder : 'Enter the Name'
			}, {
				xtype : 'selectfield',
				//placeHolder:'Select the Gender',
				label : 'Gender',
				itemId : 'pGender',
				options : [{
					text : ''
				}, {
					text : 'Male',
					value : 'Male'
				}, {
					text : 'Female',
					value : 'Female'
				}]
			}, {
				xtype : 'numberfield',
				label : 'Age',
				name : 'age',
				itemId : 'pAge',
				minValue : '15',
				maxValue : '80',
				placeHolder : 'Enter the Age'
			}, {
				xtype : 'emailfield',
				label : 'Email Id',
				name : 'email',
				itemId : 'pEmail',
				placeHolder : 'Enter the Email Id'
			}, {
				xtype : 'numberfield',
				label : 'Mobile No.',
				itemId : 'pMobile',
				name : 'mobile',
				placeHolder : 'Enter the Mobile Number'
			}, {
				xtype : 'numberfield',
				itemId : 'pEme',
				label : 'Emergency Contact No.',
				name : 'emergency',
				placeHolder : 'Emergency Contact Number'
			}]

		}],

		listeners : [{
			delegate : '#backSeat',
			event : 'tap',
			fn : 'goToSelSeat'
		}, {
			delegate : '#toConfimSummary',
			event : 'tap',
			fn : 'onToConfimSummary'
		}]

	},

	goToSelSeat : function() {
		console.log('Passenger back Button');
		this.fireEvent('onGoToSelSeat', this);
	},
	onToConfimSummary : function() {
		console.log('Passenger Confirm Button');
		this.fireEvent('onToConfimSummaryCmd', this);
	}
});
