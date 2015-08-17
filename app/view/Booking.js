Ext.define('myBooking.view.Booking', {
    extend: 'Ext.Container',
    xtype: 'booking',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel'
         ],
    config: {
        //tabBarPosition: 'bottom',
        scrollable:true,
        title:'Payment',
		layout:"fit",
		
        items: [
            {
                xtype:'titlebar',
                title:'Book my Ticket',
                docked:'top',
                items: [
			        {
			            iconCls: 'home',
			            //align: 'left',
			            text:'Back',
			            xtype:'button',
			            itemId:'back'
			        }
			        ]
            },
            {
            	xtype:'fieldset',
            	title:'Booking',
            	height:'500px',
            	items:[
            	/*{
            		xtype:'button',
            		text:'popup',
            		action:'showPopup',
            		itemId:'popup'
            	},*/
            		{
		                xtype:'textfield',
						name:'From',
						label:'From Place',
						itemId:'FromPlaces',
						required:true,
						placeHolder:'Enter From place',
						/*options:[
								{text:'Hyderabad',value:'Hyderabad'},
								{text:'Chennai',value:'Chennai'},
								{text:'Banglore',value:'Banglore'},
								{text:'Mumbai',value:'Mumbai'},
								{text:'Pune',value:'Pune'},
								{text:'Kolkatta',value:'Kolkatta'},
								{text:'Delhi',value:'Delhi'},
								{text:'Bopal',value:'Bopal'},
								{text:'Bihar',value:'Bihar'}
						]*/
            		},
            		{
		                xtype:'textfield',
						name:'To',
						label:'To Place',
						required:true,
						itemId:'popup',
						placeHolder:'Enter To place'
            		},
            		{
		                xtype:'datepickerfield',
						name:'dateofjourney',
						label:'Date of Journey',
						required:true,
						itemId:'dateSelect',
						placeHolder:'Select Date Of Journey',
						value: new Date(),
						picker:{
							yearFrom:2015,
							yearTo:2030
						}
						},
					{
		                xtype:'datepickerfield',
						name:'Return',
						label:'Return Date',
						placeHolder:"Select Return Date",
						//required:true,
						value: Ext.Date.add (new Date(),Ext.Date.DAY,1),
						itemId:'returnDate',
						picker:{
							yearFrom:2015,
							yearTo:2030
						}
					}
					
					
					
            	]
            	},
            	{
						xtype:'button',
						text:'Find Buses',
						ui:'action',
						itemId:'findBuses',
						docked:'bottom'
					}
            	
            	],
            	
            	listeners:[
            	{
					delegate:'#back',
					event:'tap',
					fn:'goback'
				},
				{
					delegate:'#findBuses',
					event:'tap',
					fn:'onfindBuses'
					
				},
				{
					delegate:'#popup',
					event:'focus',
					fn:'popout'
				},
				{
					delegate:'#FromPlaces',
					event:'focus',
					fn:'FromPopout'
				}
            	
            	]
            	
            },
            	goback:function(){
            		console.log('goback cmd');
            		this.fireEvent('onGoBackCmd',this);
            		
            },
            onfindBuses:function(){
            	console.log('find Buses');
            	this.fireEvent('onFireBusesCmd',this);
            },
            popout:function(){
            	console.log('popout cmd');
            	this.fireEvent('onPopupCmd',this);
            },
            FromPopout:function(){
            	console.log('FromPopout cmd');
            	this.fireEvent('onFromPopUp',this);
            }
            


        
    
});
