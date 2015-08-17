Ext.define('myBooking.view.formfield',{
	extend:'Ext.form.Panel',
	xtype:'formfield',
	config:{
		layout:'fit',
		height:'192px',
		scrollable:true,
		items:[
			{
				xtype:'panel',
				layout:'fit',
				height:'100%',
				//scrollable:true,
				items:[
				{
					xtype:'fieldset',
					title:'',
					items:[
						{
							xtype:'textfield',
							label:'Name',
							placeHolder:'Enter full Name',
							itemId:'panelName'
							
						},
						{
							xtype:'selectfield',
							label:'Gender',
							itemId:'panelGender',
							placeHolder:'select the Gender',
							options:[
							{text:'',value:''},
							{text:'Male',value:'Male'},
							{text:'Female',value:'Female'}
							]
						},
						{
							xtype:'numberfield',
							label:'Age',
							placeHolder:'Enter the Age',
							itemId:'panelAge'
							
						}
					]
				}
				]
				
				
				
			}
		]
	}
});
