Ext.define('myBooking.view.TotalPassengerfields', {
	extend: 'Ext.Container',
	xtype: 'totalpassenger',
	
	config: {
		layout:'vbox',
		scrollable:true,
		items:[
			{
				xtype:'titlebar',
				title:'Passengers',
				docked:'top',
				items:[
					{
						xtype:'button',
						text:'Back',
						align:'left',
						itemId:'BackButtonpassengers'
					},
					{
						xtype:'button',
						text:'Proceed',
						align:'right',
						itemId:'BookButton'
					}
				]
			}
		],
		listeners:[{
			delegate:'#BookButton',
			event:'tap',
			fn:'onBookButton'
		},
		{
			delegate:'#BackButtonpassengers',
			event:'tap',
			fn:'onBackButtonpassengers'
		}
		]
	},
	onBookButton:function(){
		console.log('panel button pressed');
		this.fireEvent('onBookButtoncmd',this);
	},
	onBackButtonpassengers:function(){
		console.log('onBackButtonpassengersCmd');
		this.fireEvent('onBackButtonpassengersCmd');
	}
});
