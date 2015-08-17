Ext.define('myBooking.view.CancelTicket', {
    extend: 'Ext.form.Panel',
    xtype: 'CancelTicket',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel'
         ],
    config: {
		scrollable:true,
        //title:'Payment',
		layout:"fit",
		height:'100%',
		id:'cancelticket',
        items: [
            {
                xtype:'titlebar',
                title:'Cancel Ticket',
                docked:'top',
                items: [
			        {
			            text:'Back',
			            xtype:'button',
			            itemId:'backToMain'
			        }
			          ]
			 },
			 
			 {
			 	xtype:'fieldset',
			 	title:'Enter the Ticket Number',
			 	maxHeight:'500px',
			 	items:[
			 		{
			 			xtype:'textfield',
			 			itemId:'ticketNumber',
			 			label:'Ticket No.',
			 			
			 			style:{
			 				height:'50px'
			 			}
			 		},
			 		 {
					 	xtype:'button',
					 	text:'Search',
					 	docked:'bottom',
					 	itemId:'Search',
					 	ui:'action',
					 	style:{
					 		marginBottom:'100px',
					 		marginLeft:'25%',
					 		width:'50%'
					 	}
					 }
			 		
			 	]
			 },
			
			 
			        		
			        
            
            	],
            	
            	listeners:[
            	{
					delegate:'#backToMain',
					event:'tap',
					fn:'onbackToMain'
            	},
            	{
					delegate:'#Search',
					event:'tap',
					fn:'onSearch'
            	}
            	
            	]
            	
           },
           
            onbackToMain:function(){
            	console.log('onbackToMain from cancelTicket');
            	this.fireEvent('onbackToMainCmd',this);
            },
            onSearch:function(){
            	console.log('onSearchCmd');
            	this.fireEvent('onSearchCmd',this);
            }


        
    
});
