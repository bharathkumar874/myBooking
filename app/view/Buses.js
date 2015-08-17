Ext.define('myBooking.view.Buses', {
    extend: 'Ext.Container',
    xtype: 'buses',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel'
         ],
    config: {
        //tabBarPosition: 'bottom',
        scrollable:true,
        title:'Payment',
		layout:"vbox",
		
        items: [
            {
                xtype:'titlebar',
                title:'Select Buses',
                docked:'top',
                items: [
			        {
			           // iconCls: 'home',
			            //align: 'left',
			            text:'Back',
			            xtype:'button',
			            itemId:'backBook'
			        },
			       
			        ]
            },
             {
			        	xtype:'panel',
			        	height:'30px',
			        	//flex:1,
			        	html:'<h1>Select the available buses</h1>',
			        	style:{textAlign:'center',fontSize:'25px',paddingTop:'10px'}
			        },
			        {
			        	xtype:'panel',
			        	height:'30px',
			        	//flex:1,
			        	html:'Date',
			        	itemId:'showdate',
			        	style:{textAlign:'center',fontSize:'25px',paddingTop:'10px'}
			        },
			        {
			        	xtype:"panel",
						layout: 'vbox',
						flex: 5,
						height:"500px",
						itemId:'panelHtml',
						items:[{
							xtype:"list",
							flex:1,
							itemId:'BusesListDisplay',
							itemTpl:' <h2>From:{fromPlace} --- To:{toPlace}</h2> <h3>Depature Time: {Timing}</h3> <h1>Service Name : {BusService}</h1><h2> Bus Type :  {BusType}</h2> <div class="Fare"> Fare : {Fare}</div>',
							//store:"BusStore",
							//itemTpl:'Bus:{BusService},type:{BusType}'
						}]
			        
			        	
			       },
			       {
			       	xtype:'button',
			       	itemId:'selectseats',
			       	docked:'bottom',
			       	text:'Select Seats',
			       	ui:'action'
			       }
            
            	],
            	
            	listeners:[
            	{
				delegate:'#backBook',
				event:'tap',
				fn:'gobackBook'
				},
				{
					delegate:"#selectseats",
					event:'tap',
					fn:'onSelectseats'
				}
				
            	
            	]
            	
            },
            	gobackBook:function(){
            		console.log('gobackBook cmd');
            		this.fireEvent('onGoBackBooking',this);
            		
            },
            onSelectseats:function(){
            		console.log('onGoToSelectSeat cmd');
            		this.fireEvent('onGoToSelectSeat',this);
            	
            }
            


        
    
});
