Ext.define("myBooking.store.BusList",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.BusList",
		autoLoad:true,
		storeId:"BusStore",
		proxy:{
			type:'sql',
			//id:'storeproxy',
			database:'Database',
			table:'busList'
		},
		sorters:[{property:'place',direction:'DESC'}],
	data:[	
			{   fromPlace:'Banglore',toPlace:'Mumbai',Timing:'10:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2200'},
			{  fromPlace:'Banglore',toPlace:'Mumbai',Timing:'6:30 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'2150'},
			{  fromPlace:'Banglore',toPlace:'Mumbai',Timing:'1:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1960'},

			{  fromPlace:'Mumbai',toPlace:'Banglore',Timing:'10:15 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2100'},
			{  fromPlace:'Mumbai',toPlace:'Banglore',Timing:'10:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1750'},
			{  fromPlace:'Mumbai',toPlace:'Banglore',Timing:'3:00 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1940'},

			{  fromPlace:'Banglore',toPlace:'Kolkatta',Timing:'2:15 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'5000'},
			{  fromPlace:'Banglore',toPlace:'Kolkatta',Timing:'5:00 PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'4150'},
			{  fromPlace:'Banglore',toPlace:'Kolkatta',Timing:'10 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'5860'},

			{  fromPlace:'Kolkatta',toPlace:'Banglore',Timing:'11:15 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'5600'},
			{  fromPlace:'Kolkatta',toPlace:'Banglore',Timing:'10:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'3150'},
			{  fromPlace:'Kolkatta',toPlace:'Banglore',Timing:'1:00 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'4560'},

			{  fromPlace:'Banglore',toPlace:'Pune',Timing:'10:00 PM',BusService:'SRS Travels',BusType:'Non-Ac',Fare:'2200'},
			{  fromPlace:'Banglore',toPlace:'Pune',Timing:'9:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'2450'},
			{  fromPlace:'Banglore',toPlace:'Pune',Timing:'2:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1560'},

			{  fromPlace:'Pune',toPlace:'Banglore',Timing:'1:00 AM',BusService:'SRS Travels',BusType:'Non-Ac',Fare:'2100'},
			{  fromPlace:'Pune',toPlace:'Banglore',Timing:'10:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'2350'},
			{  fromPlace:'Pune',toPlace:'Banglore',Timing:'4:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1560'},




			{  fromPlace:'Hyderabad',toPlace:'Banglore',Timing:'11:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'1500'},
			{  fromPlace:'Hyderabad',toPlace:'Banglore',Timing:'12:00 AM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1150'},
			{  fromPlace:'Hyderabad',toPlace:'Banglore',Timing:'10:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1760'},
			{  fromPlace:'Hyderabad',toPlace:'Banglore',Timing:'3:15 PM',BusService:'SRS Travels',BusType:'Sleeper Couch',Fare:'2599'},

			{  fromPlace:'Banglore',toPlace:'Hyderabad',Timing:'10:15 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1200'},
			{  fromPlace:'Banglore',toPlace:'Hyderabad',Timing:'10:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'1150'},
			{  fromPlace:'Banglore',toPlace:'Hyderabad',Timing:'2:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1760'},
			{  fromPlace:'Banglore',toPlace:'Hyderabad',Timing:'4:45 PM',BusService:'SRS Travels',BusType:'Sleeper Couch',Fare:'2599'},

			{  fromPlace:'Hyderabad',toPlace:'Mumbai',Timing:'12:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'2000'},
			{  fromPlace:'Hyderabad',toPlace:'Mumbai',Timing:'10:00 PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'1750'},
			{  fromPlace:'Hyderabad',toPlace:'Mumbai',Timing:'2:00 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'2560'},

			{  fromPlace:'Mumbai',toPlace:'Hyderabad',Timing:'2:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2500'},
			{  fromPlace:'Mumbai',toPlace:'Hyderabad',Timing:'9:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'3150'},
			{  fromPlace:'Mumbai',toPlace:'Hyderabad',Timing:'7:00 PM',BusService:'Meghana Travels',BusType:'Ac',Fare:'2860'},

			{  fromPlace:'Hyderabad',toPlace:'Kolkatta',Timing:'10:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'4000'},
			{  fromPlace:'Hyderabad',toPlace:'Kolkatta',Timing:'8:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'5150'},
			{  fromPlace:'Hyderabad',toPlace:'Kolkatta',Timing:'2:00 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'5560'},

			{  fromPlace:'Kolkatta',toPlace:'Hyderabad',Timing:'11:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'4000'},
			{  fromPlace:'Kolkatta',toPlace:'Hyderabad',Timing:'5:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'5150'},
			{  fromPlace:'Kolkatta',toPlace:'Hyderabad',Timing:'1:15 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'4560'},

			{  fromPlace:'Hyderabad',toPlace:'Pune',Timing:'10:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2500'},
			{  fromPlace:'Hyderabad',toPlace:'Pune',Timing:'2:00 PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'3150'},
			{  fromPlace:'Hyderabad',toPlace:'Pune',Timing:'5:45 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'2760'},

			{  fromPlace:'Pune',toPlace:'Hyderabad',Timing:'9:30 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2800'},
			{  fromPlace:'Pune',toPlace:'Hyderabad',Timing:'10:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'2750'},
			{  fromPlace:'Pune',toPlace:'Hyderabad',Timing:'11:45 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'2560'},

			{  fromPlace:'Hyderabad',toPlace:'Chennai',Timing:'9:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'800'},
			{  fromPlace:'Hyderabad',toPlace:'Chennai',Timing:'2:15 PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'1150'},
			{  fromPlace:'Hyderabad',toPlace:'Chennai',Timing:'10:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1660'},

			{  fromPlace:'Chennai',toPlace:'Hyderabad',Timing:'10:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'960'},
			{  fromPlace:'Chennai',toPlace:'Hyderabad',Timing:'5:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1150'},
			{  fromPlace:'Chennai',toPlace:'Hyderabad',Timing:'12:45 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1960'},


			{  fromPlace:'Chennai',toPlace:'Banglore',Timing:'5:15 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'1200'},
			{  fromPlace:'Chennai',toPlace:'Banglore',Timing:'12:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'1150'},
			{  fromPlace:'Chennai',toPlace:'Banglore',Timing:'10:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1760'},
			{  fromPlace:'Chennai',toPlace:'Banglore',Timing:'11:45 PM',BusService:'SRS Travels',BusType:'Sleeper Couch',Fare:'2599'},

			{  fromPlace:'Banglore',toPlace:'Chennai',Timing:'4:30 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1200'},
			{  fromPlace:'Banglore',toPlace:'Chennai',Timing:'10: PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'1150'},
			{  fromPlace:'Banglore',toPlace:'Chennai',Timing:'3:00 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1760'},
			{  fromPlace:'Banglore',toPlace:'Chennai',Timing:'11:30 PM',BusService:'SRS Travels',BusType:'Sleeper Couch',Fare:'2599'},

			{  fromPlace:'Chennai',toPlace:'Mumbai',Timing:'4:00 AM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'2700'},
			{  fromPlace:'Chennai',toPlace:'Mumbai',Timing:'5:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'3150'},
			{  fromPlace:'Chennai',toPlace:'Mumbai',Timing:'11:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'3560'},

			{  fromPlace:'Mumbai',toPlace:'Chennai',Timing:'10:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2800'},
			{  fromPlace:'Mumbai',toPlace:'Chennai',Timing:'6:00 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'3150'},
			{  fromPlace:'Mumbai',toPlace:'Chennai',Timing:'9:30 PM',BusService:'Meghana Travels',BusType:'Ac',Fare:'3560'},

			{  fromPlace:'Chennai',toPlace:'Kolkatta',Timing:'5:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'5000'},
			{  fromPlace:'Chennai',toPlace:'Kolkatta',Timing:'10:45 AM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'5150'},
			{  fromPlace:'Chennai',toPlace:'Kolkatta',Timing:'10:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'7560'},

			{  fromPlace:'Kolkatta',toPlace:'Chennai',Timing:'4:45 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'5200'},
			{  fromPlace:'Kolkatta',toPlace:'Chennai',Timing:'10:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'4150'},
			{  fromPlace:'Kolkatta',toPlace:'Chennai',Timing:'2:15 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'6560'},

			{  fromPlace:'Chennai',toPlace:'Pune',Timing:'6:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'3000'},
			{  fromPlace:'Chennai',toPlace:'Pune',Timing:'9:30 PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'3150'},
			{  fromPlace:'Chennai',toPlace:'Pune',Timing:'10:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'4560'},

			{  fromPlace:'Pune',toPlace:'Chennai',Timing:'10:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'3200'},
			{  fromPlace:'Pune',toPlace:'Chennai',Timing:'12:00 AM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'3550'},
			{  fromPlace:'Pune',toPlace:'Chennai',Timing:'2:45 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'4560'},

			{  fromPlace:'Pune',toPlace:'Kolkatta',Timing:'5:15 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2000'},
			{  fromPlace:'Pune',toPlace:'Kolkatta',Timing:'10:00 PM',BusService:'Aditya Travels',BusType:'Non-Ac',Fare:'2150'},
			{  fromPlace:'Pune',toPlace:'Kolkatta',Timing:'3:00 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'2560'},

			{  fromPlace:'Kolkatta',toPlace:'Pune',Timing:'1:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'2000'},
			{  fromPlace:'Kolkatta',toPlace:'Pune',Timing:'10:00 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'2150'},
			{  fromPlace:'Kolkatta',toPlace:'Pune',Timing:'8:45 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'2560'},

			{  fromPlace:'Mumbai',toPlace:'Pune',Timing:'10:00 PM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'980'},
   			{  fromPlace:'Mumbai',toPlace:'Pune',Timing:'8:30 AM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1150'},
   			{  fromPlace:'Mumbai',toPlace:'Pune',Timing:'11:15 AM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1560'},

			{  fromPlace:'Pune',toPlace:'Mumbai',Timing:'9:00 AM',BusService:'Kesineni Travels',BusType:'Non-Ac',Fare:'980'},
   			{  fromPlace:'Pune',toPlace:'Mumbai',Timing:'5:30 PM',BusService:'Meghana Travels',BusType:'Non-Ac',Fare:'1150'},
   			{  fromPlace:'Pune',toPlace:'Mumbai',Timing:'10:00 PM',BusService:'Bharathi Travels',BusType:'Ac',Fare:'1560'},




				
	],
			        	
	}
	
});