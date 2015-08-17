Ext.define("myBooking.store.DroppingPoint",{
	extend:"Ext.data.Store",
	requires:["Ext.data.proxy.SQL"],
	config:{
		model:"myBooking.model.DroppingPoint",
		autoLoad:true,
		storeId:"DPoint",
		proxy:{
			type:'sql',
			//id:'storeproxy',
			database:'Database',
			table:'dPoints'
		},
		sorters:[{property:'dPoint',direction:'DESC'}],
	data:[
    {ToPlace:'Hyderabad',FromPlace:'Banglore',dPoint:'Bhel'},
    {ToPlace:'Hyderabad',FromPlace:'Banglore',dPoint:'Miyapur'},
    {ToPlace:'Hyderabad',FromPlace:'Banglore',dPoint:'KPHB'},
    {ToPlace:'Hyderabad',FromPlace:'Banglore',dPoint:'Madhapur'},
    {ToPlace:'Hyderabad',FromPlace:'Banglore',dPoint:'SR Nagar'},

    {ToPlace:'Hyderabad',FromPlace:'Chennai',dPoint:'Bhel'},
    {ToPlace:'Hyderabad',FromPlace:'Chennai',dPoint:'Miyapur'},
    {ToPlace:'Hyderabad',FromPlace:'Chennai',dPoint:'KPHB'},
    {ToPlace:'Hyderabad',FromPlace:'Chennai',dPoint:'Madhapur'},
    {ToPlace:'Hyderabad',FromPlace:'Chennai',dPoint:'SR Nagar'},

    {ToPlace:'Hyderabad',FromPlace:'Pune',dPoint:'Bhel'},
    {ToPlace:'Hyderabad',FromPlace:'Pune',dPoint:'Miyapur'},
    {ToPlace:'Hyderabad',FromPlace:'Pune',dPoint:'KPHB'},
    {ToPlace:'Hyderabad',FromPlace:'Pune',dPoint:'Madhapur'},
    {ToPlace:'Hyderabad',FromPlace:'Pune',dPoint:'SR Nagar'},

    {ToPlace:'Hyderabad',FromPlace:'Kolkatta',dPoint:'Bhel'},
    {ToPlace:'Hyderabad',FromPlace:'Kolkatta',dPoint:'Miyapur'},
    {ToPlace:'Hyderabad',FromPlace:'Kolkatta',dPoint:'KPHB'},
    {ToPlace:'Hyderabad',FromPlace:'Kolkatta',dPoint:'Madhapur'},
    {ToPlace:'Hyderabad',FromPlace:'Kolkatta',dPoint:'SR Nagar'},

    {ToPlace:'Hyderabad',FromPlace:'Mumbai',dPoint:'Bhel'},
    {ToPlace:'Hyderabad',FromPlace:'Mumbai',dPoint:'Miyapur'},
    {ToPlace:'Hyderabad',FromPlace:'Mumbai',dPoint:'KPHB'},
    {ToPlace:'Hyderabad',FromPlace:'Mumbai',dPoint:'Madhapur'},
    {ToPlace:'Hyderabad',FromPlace:'Mumbai',dPoint:'SR Nagar'},

    {ToPlace:'Banglore',FromPlace: 'Hyderabad',dPoint:'BTM Layout'},
    {ToPlace:'Banglore',FromPlace: 'Hyderabad',dPoint:'Jaya Nagar'},
    {ToPlace:'Banglore',FromPlace: 'Hyderabad',dPoint:'K R Puram'},
    {ToPlace:'Banglore',FromPlace: 'Hyderabad',dPoint:'Majestic'},

    {ToPlace:'Banglore',FromPlace:'Mumbai',dPoint:'BTM Layout'},
    {ToPlace:'Banglore',FromPlace: 'Mumbai',dPoint:'Jaya Nagar'},
    {ToPlace:'Banglore',FromPlace: 'Mumbai',dPoint:'K R Puram'},
    {ToPlace:'Banglore',FromPlace: 'Mumbai',dPoint:'Majestic'},

    {ToPlace:'Banglore',FromPlace:'Kolkatta',dPoint:'BTM Layout'},
    {ToPlace:'Banglore',FromPlace: 'Kolkatta',dPoint:'Jaya Nagar'},
    {ToPlace:'Banglore',FromPlace: 'Kolkatta',dPoint:'K R Puram'},
    {ToPlace:'Banglore',FromPlace: 'Kolkatta',dPoint:'Majestic'},

    {ToPlace:'Banglore',FromPlace:'Pune',dPoint:'BTM Layout'},
    {ToPlace:'Banglore',FromPlace: ' Pune ',dPoint:'Jaya Nagar'},
    {ToPlace:'Banglore',FromPlace: ' Pune ',dPoint:'K R Puram'},
    {ToPlace:'Banglore',FromPlace: ' Pune ',dPoint:'Majestic'},

    {ToPlace:'Banglore',FromPlace:'Chennai',dPoint:'BTM Layout'},
    {ToPlace:'Banglore',FromPlace: 'Chennai',dPoint:'Jaya Nagar'},
    {ToPlace:'Banglore',FromPlace: 'Chennai',dPoint:'K R Puram'},
    {ToPlace:'Banglore',FromPlace: 'Chennai',dPoint:'Majestic'},

    {ToPlace:'Chennai',FromPlace:'Hyderabad',dPoint:'T Nagar'},
    {ToPlace:'Chennai',FromPlace: 'Hyderabad',dPoint:'Adyar'},
    {ToPlace:'Chennai',FromPlace: 'Hyderabad',dPoint:'SRM College'},
    {ToPlace:'Chennai',FromPlace: 'Hyderabad',dPoint:'Velachery'},
    {ToPlace:'Chennai',FromPlace: 'Hyderabad',dPoint:'Tharamani'},


    {ToPlace:'Chennai',FromPlace:'Banglore',dPoint:'T Nagar'},
    {ToPlace:'Chennai',FromPlace:'Banglore',dPoint:'Adyar'},
    {ToPlace:'Chennai',FromPlace:'Banglore',dPoint:'SRM College'},
    {ToPlace:'Chennai',FromPlace:'Banglore',dPoint:'Velachery'},
    {ToPlace:'Chennai',FromPlace:'Banglore',dPoint:'Tharamani'},

    {ToPlace:'Chennai',FromPlace:'Pune',dPoint:'T Nagar'},
    {ToPlace:'Chennai',FromPlace:'Pune',dPoint:'Adyar'},
    {ToPlace:'Chennai',FromPlace:'Pune',dPoint:'SRM COLLEGE'},
    {ToPlace:'Chennai',FromPlace:'Pune',dPoint:'Velachery'},
    {ToPlace:'Chennai',FromPlace:'Pune',dPoint:'Tharamani'},

    {ToPlace:'Chennai',FromPlace:'Kolkatta',dPoint:'T Nagar'},
    {ToPlace:'Chennai',FromPlace:'Kolkatta',dPoint:'Adyar'},
    {ToPlace:'Chennai',FromPlace:'Kolkatta',dPoint:'SRM COLLEGE'},
    {ToPlace:'Chennai',FromPlace:'Kolkatta',dPoint:'Velachery'},
    {ToPlace:'Chennai',FromPlace:'Kolkatta',dPoint:'Tharamani'},

    {ToPlace:'Chennai',FromPlace:'Mumbai',dPoint:'T Nagar'},
    {ToPlace:'Chennai',FromPlace:'Mumbai',dPoint:'Adyar'},
    {ToPlace:'Chennai',FromPlace:'Mumbai',dPoint:'SRM COLLEGE'},
    {ToPlace:'Chennai',FromPlace:'Mumbai',dPoint:'Velachery'},
    {ToPlace:'Chennai',FromPlace:'Mumbai',dPoint:'Tharamani'},


    {ToPlace: 'Pune',FromPlace: 'Hyderabad',dPoint:'Wakad'},
    {ToPlace: 'Pune',FromPlace: 'Hyderabad',dPoint:'Hadapsar'},
    {ToPlace: 'Pune',FromPlace: 'Hyderabad',dPoint:'Hinjewadi Bridge'},
    {ToPlace: 'Pune',FromPlace: 'Hyderabad',dPoint:'Fatima Nagar'},
    {ToPlace: 'Pune',FromPlace: 'Hyderabad',dPoint:'Opp vaibhav Theater'},

    {ToPlace: 'Pune',FromPlace: 'Kolkatta',dPoint:'Wakad'},
    {ToPlace: 'Pune',FromPlace: 'Kolkatta',dPoint:'Hadapsar'},
    {ToPlace: 'Pune',FromPlace: 'Kolkatta',dPoint:'Hinjewadi Bridge'},
    {ToPlace: 'Pune',FromPlace: 'Kolkatta',dPoint:'Fatima Nagar'},
    {ToPlace: 'Pune',FromPlace: 'Kolkatta',dPoint:'Opp vaibhav Theater'},

    {ToPlace: 'Pune',FromPlace: 'Chennai',dPoint:'Wakad'},
    {ToPlace: 'Pune',FromPlace: 'Chennai',dPoint:'Hadapsar'},
    {ToPlace: 'Pune',FromPlace: 'Chennai',dPoint:'Hinjewadi Bridge'},
    {ToPlace: 'Pune',FromPlace: 'Chennai',dPoint:'Fatima Nagar'},
    {ToPlace: 'Pune',FromPlace: 'Chennai',dPoint:'Opp vaibhav Theater'},

    {ToPlace: 'Pune',FromPlace: 'Banglore',dPoint:'Wakad'},
    {ToPlace: 'Pune',FromPlace: 'Banglore',dPoint:'Hadapsar'},
    {ToPlace: 'Pune',FromPlace: 'Banglore',dPoint:'Hinjewadi Bridge'},
    {ToPlace: 'Pune',FromPlace: 'Banglore',dPoint:'Fatima Nagar'},
    {ToPlace: 'Pune',FromPlace: 'Banglore',dPoint:'Opp vaibhav Theater'},

    {ToPlace: 'Pune',FromPlace: 'Mumbai',dPoint:'Wakad'},
    {ToPlace: 'Pune',FromPlace: ' Mumbai ',dPoint:'Hadapsar'},
    {ToPlace: 'Pune',FromPlace: ' Mumbai ',dPoint:'Hinjewadi Bridge'},
    {ToPlace: 'Pune',FromPlace: ' Mumbai ',dPoint:'Fatima Nagar'},
    {ToPlace: 'Pune',FromPlace: ' Mumbai ',dPoint:'Opp vaibhav Theater'},

    {ToPlace: 'Kolkatta',FromPlace: 'Hyderabad',dPoint:'Babughat Bus Station'},
    {ToPlace: 'Kolkatta',FromPlace: 'Hyderabad',dPoint:'B C Roy Market'},
    {ToPlace: 'Kolkatta',FromPlace: 'Hyderabad',dPoint:'Karunamoyee'},

    {ToPlace: 'Kolkatta',FromPlace: 'Chennai',dPoint:'Babughat Bus Station'},
    {ToPlace: 'Kolkatta',FromPlace: 'Chennai',dPoint:'B C Roy Market'},
    {ToPlace: 'Kolkatta',FromPlace: 'Chennai',dPoint:'Karunamoyee'},

    {ToPlace: 'Kolkatta',FromPlace: 'Pune',dPoint:'Babughat Bus Station'},
    {ToPlace: 'Kolkatta',FromPlace: 'Pune',dPoint:'B C Roy Market'},
    {ToPlace: 'Kolkatta',FromPlace: 'Pune',dPoint:'Karunamoyee'},

    {ToPlace: 'Kolkatta',FromPlace: 'Mumbai',dPoint:'Babughat Bus Station'},
    {ToPlace: 'Kolkatta',FromPlace: 'Mumbai',dPoint:'B C Roy Market'},
    {ToPlace: 'Kolkatta',FromPlace: 'Mumbai',dPoint:'Karunamoyee'},

    {ToPlace: 'Kolkatta',FromPlace: 'Banglore',dPoint:'Babughat Bus Station'},
    {ToPlace: 'Kolkatta',FromPlace: 'Banglore',dPoint:'B C Roy Market'},
    {ToPlace: 'Kolkatta',FromPlace: 'Banglore',dPoint:'Karunamoyee'},

    {ToPlace: 'Mumbai',FromPlace: 'Hyderabad',dPoint:'Borivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Hyderabad',dPoint:'Kandivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Hyderabad',dPoint:'Andheri'},
    {ToPlace: 'Mumbai',FromPlace: 'Hyderabad',dPoint:'Goregaon'},
    {ToPlace: 'Mumbai',FromPlace: 'Hyderabad',dPoint:'Chembur'},
    {ToPlace: 'Mumbai',FromPlace: 'Hyderabad',dPoint:'Malad'},

    {ToPlace: 'Mumbai',FromPlace: 'Banglore',dPoint:'Borivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Banglore',dPoint:'Kandivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Banglore',dPoint:'Andheri'},
    {ToPlace: 'Mumbai',FromPlace: 'Banglore',dPoint:'Goregaon'},
    {ToPlace: 'Mumbai',FromPlace: 'Banglore',dPoint:'Chembur'},
    {ToPlace: 'Mumbai',FromPlace: 'Banglore',dPoint:'Malad'},

    {ToPlace: 'Mumbai',FromPlace: 'Kolkatta',dPoint:'Borivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Kolkatta',dPoint:'Kandivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Kolkatta',dPoint:'Andheri'},
    {ToPlace: 'Mumbai',FromPlace: 'Kolkatta',dPoint:'Goregaon'},
    {ToPlace: 'Mumbai',FromPlace: 'Kolkatta',dPoint:'Chembur'},
    {ToPlace: 'Mumbai',FromPlace: 'Kolkatta',dPoint:'Malad'},

    {ToPlace: 'Mumbai',FromPlace: 'Pune',dPoint:'Borivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Pune',dPoint:'Kandivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Pune',dPoint:'Andheri'},
    {ToPlace: 'Mumbai',FromPlace: 'Pune',dPoint:'Goregaon'},
    {ToPlace: 'Mumbai',FromPlace: 'Pune',dPoint:'Chembur'},
    {ToPlace: 'Mumbai',FromPlace: 'Pune',dPoint:'Malad'},

    {ToPlace: 'Mumbai',FromPlace: 'Chennai',dPoint:'Borivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Chennai',dPoint:'Kandivali'},
    {ToPlace: 'Mumbai',FromPlace: 'Chennai',dPoint:'Andheri'},
    {ToPlace: 'Mumbai',FromPlace: 'Chennai',dPoint:'Goregaon'},
    {ToPlace: 'Mumbai',FromPlace: 'Chennai',dPoint:'Chembur'},
    {ToPlace: 'Mumbai',FromPlace: 'Chennai',dPoint:'Malad'},




			],

	}

});