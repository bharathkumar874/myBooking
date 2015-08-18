Ext.define('myBooking.view.EditBooking', {
    extend: 'Ext.form.Panel',
    xtype: 'editBooking',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel'
         ],
    config: {
        
        scrollable:true,
        //title:'Payment',
		layout:"fit",
		height:'100%',
		id:'editBooking',
        items: [
            {
                xtype:'titlebar',
                title:'Booking Details',
                docked:'top',
                items: [
			        {
			            text:'Back',
			            xtype:'button',
			            itemId:'EditBackButton'
			        }
			          ]
			 },
			  {
                             xtype:'titlebar',
                             //title:'Edit Details',
                             docked:'bottom',
                             items: [
             			        {
             			            text:'Cancel ticket',
             			            xtype:'button',
             			            itemId:'cancelTicketBtn',
             			            align:'left'
             			        },
             			        {
									text:'Edit Details',
									xtype:'button',
									itemId:'editTicketBtn',
									align:'right'
								}
             			          ]
             			 },
             			
				{
				xtype:'panel',
				style:{height:'100%',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'1px'},
				layout:'vbox',
				//cls:'centerSet',
				html:['testing'],
				itemId:'ticketget',
				items:[{
					xtype:'panel',
					itemId:'panelShow'

				}]
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'1px'},
				layout:'vbox',
				//cls:'centerSet',
				html:['testing'],
				itemId:'status'
            },
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'1px'},
				layout:'vbox',
				//cls:'centerSet',
				html:['testing'],
				itemId:'FromTo'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'1px'},
				layout:'vbox',
				//cls:'centerSet',
				html:['testing'],
				itemId:'points'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'1px'},
				layout:'vbox',
				//cls:'centerSet',
				html:['testing'],
				itemId:'Names'
			},
			{
				xtype:'panel',
				style:{height:'100%',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'1px'},
				layout:'vbox',
				//cls:'centerSet',
				html:['testing'],
				itemId:'TotalAmount',
				items:[{
					xtype:'panel',
					itemId:'fareAmount'
				}]

			},


            
            	],
            	
            	listeners:[
            	{
					delegate:'#EditBackButton',
					event:'tap',
					fn:'onEditBackButton'
            	},
            	{
					delegate:'#cancelTicketBtn',
					event:'tap',
					fn:'oncancelTicketBtn'
            	},
            	{
					delegate:'#editTicketBtn',
					event:'tap',
					fn:'oneditTicketBtn'
            	}
            	
            	]
            	
           },
           
            onEditBackButton:function(){
            	console.log('onEditBackButton');
            	this.fireEvent('onEditBackButtonCmd',this);
            },
            oncancelTicketBtn:function(){
            	console.log('oncancelTicketBtnCmd');
            	this.fireEvent('oncancelTicketBtnCmd',this);
            },
            oneditTicketBtn:function(){
            	console.log('oneditTicketBtnCmd');
            	this.fireEvent('oneditTicketBtnCmd',this);
            }


        
    
});
