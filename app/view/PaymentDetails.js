Ext.define('myBooking.view.PaymentDetails', {
	extend : 'Ext.form.Panel',
	xtype : 'paymentdetails',
	requires : ['Ext.TitleBar', 'Ext.form.Panel'],
	config : {

		scrollable : true,
		//title:'Payment',
		layout : "fit",
		height : '100%',
		id : 'paymentdetails',
		items : [{
			xtype : 'titlebar',
			title : 'Payment Details',
			docked : 'top',
			items : [{
				text : 'Back',
				xtype : 'button',
				itemId : 'PaymentBackButton'
			}]
		}, {
			xtype : 'button',
			text : 'Pay Now',
			docked : 'bottom',
			ui : 'action',
			itemId : 'payNow'
		}, {
			xtype : 'fieldset',
			title : 'Fill the Payment Details',
			layout : 'vbox',
			height : '100%',
			scrollable : true,
			items : [{
				xtype : 'selectfield',
				label : 'Payment Type',
				name : 'PaymentType',
				itemId : 'pType',
				placeHolder : 'Select the Payment Type',
				options : [{
					text : ''
				}, {
					text : 'Credit Card',
					value : 'Credit Card'
				}, {
					text : 'Debit Card',
					value : 'Debit Card'
				}]
			}, {
				xtype : 'selectfield',
				label : 'Card Type',
				itemId : 'cType',
				placeHolder : 'Select the Card Type',
				options : [{
					text : ''
				}, {
					text : 'Visa/MasterCard',
					value : 'Visa/Master'
				}, {
					text : 'American Express',
					value : 'AmericanExpress'
				}]
			}, {
				xtype : 'numberfield',
				label : 'Card Number',
				name : 'cardNumber',
				itemId : 'cNumber',
				placeHolder : 'Enter the Card Number'
			}, {
				xtype : 'textfield',
				label : 'Name on the Card',
				name : 'nameOnTheCard',
				itemId : 'cName',
				placeHolder : 'Card Holder Name'
			}, {
				xtype : 'textfield',
				label : 'Expiry Month/Year',
				itemId : 'ExpiryDM',
				name : 'expiry',
				placeHolder : 'Enter MM/YYYY'
			}, {
				xtype : 'numberfield',
				itemId : 'cvv',
				label : 'CVV Number',
				name : 'cvv',
				placeHolder : 'Enter CVV No.',
				maxLength : 3
			}, {
				xtype : 'textfield',
				itemId : 'AmountPayable',
				label : 'Amount to be Paid',
				name : 'AmountPayable',
				readOnly : true
				//placeHolder:'Enter CVV No.',

			}]

		}],

		listeners : [{
			delegate : '#payNow',
			event : 'tap',
			fn : 'onPayNow'
		}, {
			delegate : '#PaymentBackButton',
			event : 'tap',
			fn : 'onPaymentBackButton'
		}]

	},

	onPayNow : function() {
		console.log('Pay Now Pressed');
		this.fireEvent('onPayNowCmd', this);
	},
	onPaymentBackButton : function() {
		console.log('onPaymentBackButtonCmd');
		this.fireEvent('onPaymentBackButtonCmd', this);
	}
});
