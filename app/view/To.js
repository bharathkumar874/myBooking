Ext.define('myBooking.view.To',{
	extend:'Ext.Panel',
	xtype:'ToPopup',
	config:{
		//itemId:'toPopup',
		floating:true,
		centered:true,
		autoCreate:true,
		modal:true,
		height:'80%',
		width:'75%',
		hidden: true,
		layout:'vbox',
		showAnimation: { type: 'slide', direction: 'left'},  
    	styleHtmlContent: true,  
   		//html: 'Hi, I\'m a popup',  
    	items:[  
     	{  
       		xtype: 'button',  
      		action: 'hide',  
       		text: 'Close',  
        	ui: 'action',  
        	docked: 'bottom',
        	itemId:'hide'  
      	}  ,
      	
      	
      	{
      		xtype:'panel',
      		layout: 'vbox',
			flex: 1,
			height:"100%",
			items:[
			{
				xtype:'titlebar',
				title:'To Place',
				docked:'top',
				flex:1,
				items:[
				{
      		xtype:'button',
      		text:'Save',
      		itemId:'ToSave',
      		
      	},
				]
			},
			{
				xtype:"list",
				flex:1,
				//layout:'fit',
				itemTpl:'{place}',
				itemId:'toPlace',
				scrollable:true,
				store:'places'				
				
				}]
      		
      	}
  			],
  			listeners:[
  			{
  				delegate:'#hide',
  				event:'tap',
  				fn:'onHide'
  			},
  			{
  				delegate:'#ToSave',
  				event:'tap',
  				fn:'onSaveTo'
  			}
  			]  
   	}  ,
   	onHide:function(){
   		console.log('onHide cmd');
   		//this.fireEvent('onHideCmd',this);
   		this.hide();
   	},
   	onSaveTo:function(){
   		console.log('save To place');
   		this.fireEvent('onSaveToPlaceCmd',this);
   	}
	
});
