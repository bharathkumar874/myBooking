Ext.define('myBooking.view.showDetails', {
	extend: 'Ext.Container',
	xtype: 'showDetails',
	style:{textAlign:'center'},
	
	config: {
		layout:'vbox',
		scrollable:true,
		items:[
			{
				xtype:'titlebar',
				title:'summary',
				docked:'top',
				items:[
					
					{
						xtype:'button',
						text:'Back',
						align:'left',
						itemId:'BackButtonDetails'
					}
				]
			},
			{
				xtype:'panel',
				cls:'centerSet',
				style:{height:'100%',textAlign:'center'},
				layout:'vbox',
				html:['testing'],
				itemId:'busdetailsShowPanel'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center'},
				layout:'vbox',
				cls:'centerSet',
				html:['testing'],
				itemId:'BusesListDisplay'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center'},
				layout:'vbox',
				cls:'centerSet',
				html:['testing'],
				itemId:'BoardingSummary'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center'},
				layout:'vbox',
				cls:'centerSet',
				html:['testing'],
				itemId:'DroppingSummary'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center'},
				layout:'vbox',
				itemId:'noOfTickets',
				html:['No.of tickets'],
				cls:'centerSet',
				items:[{
					xtype:'panel',
				
					html:['No.of Tickets Booked']
					}
				]
			},
			{xtype:'panel',
			html:['SeatNumbers : '],
			layout:'vbox',
			itemId:'ticketno',
			cls:'centerSet',
			items:[{
            		xtype:'panel',
            		html:['Seat Numbers']
					
				}]
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center'},
				layout:'vbox',
				html:['testing'],
				cls:'centerSet',
				itemId:'totalFare'
			},
			

			{
				xtype:'button',
				text:'Proceed',
				align:'right',
				docked:'bottom',
				ui:'action',
				itemId:'ProceedButton'
			}
		],
		listeners:[
			{
				delegate:'#BackButtonDetails',
				event:'tap',
				fn:'onBackButtonDetails'
			},
			{
				delegate:'#ProceedButton',
				event:'tap',
				fn:'onProceedButton'
			}
		]
	},
	onBackButtonDetails:function(){
		console.log('onBackButtonDetailsCmd');
		this.fireEvent('onBackButtonDetailsCmd',this);
	},
	onProceedButton:function(){
		console.log('onProceedButtonCmd');
		this.fireEvent('onProceedButtonCmd',this);
	}
});
