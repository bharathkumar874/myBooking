Ext.define('myBooking.view.EditScreen', {
    extend: 'Ext.form.Panel',
    xtype: 'editScreen',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel'
         ],
    config: {

        scrollable:true,
        //title:'Payment',
		layout:"fit",
		height:'100%',
		id:'editscreen',
        items: [
            {
                xtype:'titlebar',
                title:'Edit Details',
                docked:'top',
                items: [
			        {
			            text:'Back',
			            xtype:'button',
			            itemId:'EditDetailsBackButton'
			        }
			          ]
			 },
			 {
			    xtype:'button',
			    ui:'confirm',
			    itemId:'EditDetailsConfirm',
			    docked:'bottom',
			    text:'Edit Confirm'
			 },
			 {
				xtype:'panel',
				style:{height:'45px',textAlign:'center',position:'relative',border:'1px solid black',marginTop:'4px'},
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
				xtype:'fieldset',
				title:'Edit following Details',
				layout:'vbox',
				height:'187px',
				style:{position:'relative'},
				scrollable:true,
				items:[
					{
						xtype:'datepickerfield',
						name:'dateofjourney',
						label:'Date of Journey',
						required:true,
						itemId:'dateSelect',
						placeHolder:'Select Date Of Journey',
						//value: new Date(),
						picker:{
							yearFrom:2015,
							yearTo:2030
						}
						},
					{
						xtype:'textfield',
						label:'Boarding Point',
						name:'bpoint',
						itemId:'bpoint',
						placeHolder:'Select BPoint'
					},
					{
						xtype:'textfield',
						label:'Dropping Point',
						name:'dpoint',
						itemId:'dpoint',
						placeHolder:'Select DPoint'
					},

					]
			 },
			 {
			 		xtype:'button',
			 		ui:'action',
			 		docked:'bottom',
			 		itemid:'seatChange',
			 		text:'Change Seat',
			 		style:{
			 			    marginBottom: '10%',
                            marginLeft: '23%',
                            width:'55%'
			 		}
			 }




            	],

            	listeners:[
            	{
					delegate:'#EditDetailsBackButton',
					event:'tap',
					fn:'onEditDetailsBackButton'
            	},
            	{
					delegate:'#EditDetailsConfirm',
					event:'tap',
					fn:'onEditDetailsConfirm'
            	},
            	{
					delegate:'#bpoint',
					event:'focus',
					fn:'onbpoint'
            	},
            	{
					delegate:'#dpoint',
					event:'focus',
					fn:'ondpoint'
            	},


            	]

           },
        onEditDetailsBackButton:function(){
            console.log('onEditDetailsBackButtonCmd');
            this.fireEvent('onEditDetailsBackButtonCmd',this);
        },
        onEditDetailsConfirm:function(){
            console.log('onEditDetailsConfirmCmd');
            this.fireEvent('onEditDetailsConfirmCmd',this);
        },
        onbpoint:function(){
        	console.log('onbpointCmd');
        	this.fireEvent('onbpointCmd',this);
        },
        ondpoint:function(){
			console.log('ondpointCmd');
			this.fireEvent('ondpointCmd',this);
		}



});
