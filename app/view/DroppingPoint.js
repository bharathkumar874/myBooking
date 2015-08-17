Ext.define('myBooking.view.DroppingPoint',{
	extend:'Ext.Panel',
	xtype:'droppingpoint',
	config:{

		floating:true,
		centered:true,
		autoCreate:true,
		modal:true,
		height:'80%',
		layout:'vbox',
		width:'75%',
		showAnimation: { type: 'slide', direction: 'left'},
    	styleHtmlContent: true,
   		items:[
     	{
       		xtype: 'button',
      		action: 'hide',
       		text: 'Close',
        	ui: 'action',
        	docked: 'bottom',
        	itemId:'droppinghide'
      	}  ,


      	{
      		xtype:'panel',
      		layout: 'vbox',
			flex: 1,
			height:"100%",
			items:[
			{
				xtype:'titlebar',
				title:'Dropping Points',
				docked:'top',
				flex:1,
				items:[
				{
      		xtype:'button',
      		text:'Save',
      		itemId:'DroppingSave',

      	},
				]
			},
			{
				xtype:"list",
				flex:2,
				//layout:'fit',
				itemTpl:'{dPoint}',
				itemId:'DroppingPlaces',
				scrollable:true
				//store:'DPoint'
								}]

      	}
  			] ,
  			listeners:[
  			{
  				delegate:'#droppinghide',
  				event:'tap',
  				fn:'onHide'
  			},
  			{
  				delegate:'#DroppingSave',
  				event:'tap',
  				fn:'onSaveTo'
  			}
  			]
   	} ,
   	onHide:function(){
   		console.log('onHide cmd');
   		//this.fireEvent('onHideCmd',this);
   		this.hide();
   	},
   	onSaveTo:function(){
   		console.log('save To place');
   		this.fireEvent('onSaveDroppingCmd',this);
   	}

});
