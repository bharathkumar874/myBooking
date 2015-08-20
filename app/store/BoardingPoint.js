Ext.define("myBooking.store.BoardingPoint", {
	extend : "Ext.data.Store",
	requires : ["Ext.data.proxy.SQL"],
	config : {
		model : "myBooking.model.BoardingPoint",
		autoLoad : true,
		storeId : "BPoint",
		proxy : {
			type : 'sql',
			//id:'storeproxy',
			database : 'Database',
			table : 'bPoints'
		},
		sorters : [{
			property : 'bPoint',
			direction : 'DESC'
		}],
		data : [{
			FromPlace : 'Hyderabad',
			ToPlace : 'Banglore',
			bPoint : 'Bhel'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Banglore',
			bPoint : 'Miyapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Banglore',
			bPoint : 'KPHB'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Banglore',
			bPoint : 'Madhapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Banglore',
			bPoint : 'SR Nagar'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Chennai',
			bPoint : 'Bhel'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Chennai',
			bPoint : 'Miyapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Chennai',
			bPoint : 'KPHB'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Chennai',
			bPoint : 'Madhapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Chennai',
			bPoint : 'SR Nagar'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Pune',
			bPoint : 'Bhel'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Pune',
			bPoint : 'Miyapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Pune',
			bPoint : 'KPHB'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Pune',
			bPoint : 'Madhapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Pune',
			bPoint : 'SR Nagar'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Kolkatta',
			bPoint : 'Bhel'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Kolkatta',
			bPoint : 'Miyapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Kolkatta',
			bPoint : 'KPHB'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Kolkatta',
			bPoint : 'Madhapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Kolkatta',
			bPoint : 'SR Nagar'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Mumbai',
			bPoint : 'Bhel'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Mumbai',
			bPoint : 'Miyapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Mumbai',
			bPoint : 'KPHB'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Mumbai',
			bPoint : 'Madhapur'
		}, {
			FromPlace : 'Hyderabad',
			ToPlace : 'Mumbai',
			bPoint : 'SR Nagar'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Hyderabad',
			bPoint : 'BTM Layout'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Hyderabad',
			bPoint : 'Jaya Nagar'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Hyderabad',
			bPoint : 'K R Puram'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Hyderabad',
			bPoint : 'Majestic'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Mumbai',
			bPoint : 'BTM Layout'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Mumbai',
			bPoint : 'Jaya Nagar'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Mumbai',
			bPoint : 'K R Puram'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Mumbai',
			bPoint : 'Majestic'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Kolkatta',
			bPoint : 'BTM Layout'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Kolkatta',
			bPoint : 'Jaya Nagar'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Kolkatta',
			bPoint : 'K R Puram'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Kolkatta',
			bPoint : 'Majestic'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Pune',
			bPoint : 'BTM Layout'
		}, {
			FromPlace : 'Banglore',
			ToPlace : ' Pune ',
			bPoint : 'Jaya Nagar'
		}, {
			FromPlace : 'Banglore',
			ToPlace : ' Pune ',
			bPoint : 'K R Puram'
		}, {
			FromPlace : 'Banglore',
			ToPlace : ' Pune ',
			bPoint : 'Majestic'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Chennai',
			bPoint : 'BTM Layout'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Chennai',
			bPoint : 'Jaya Nagar'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Chennai',
			bPoint : 'K R Puram'
		}, {
			FromPlace : 'Banglore',
			ToPlace : 'Chennai',
			bPoint : 'Majestic'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Hyderabad',
			bPoint : 'T Nagar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Hyderabad',
			bPoint : 'Adyar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Hyderabad',
			bPoint : 'SRM College'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Hyderabad',
			bPoint : 'Velachery'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Hyderabad',
			bPoint : 'Tharamani'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Banglore',
			bPoint : 'T Nagar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Banglore',
			bPoint : 'Adyar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Banglore',
			bPoint : 'SRM College'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Banglore',
			bPoint : 'Velachery'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Banglore',
			bPoint : 'Tharamani'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Pune',
			bPoint : 'T Nagar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Pune',
			bPoint : 'Adyar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Pune',
			bPoint : 'SRM COLLEGE'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Pune',
			bPoint : 'Velachery'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Pune',
			bPoint : 'Tharamani'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Kolkatta',
			bPoint : 'T Nagar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Kolkatta',
			bPoint : 'Adyar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Kolkatta',
			bPoint : 'SRM COLLEGE'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Kolkatta',
			bPoint : 'Velachery'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Kolkatta',
			bPoint : 'Tharamani'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Mumbai',
			bPoint : 'T Nagar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Mumbai',
			bPoint : 'Adyar'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Mumbai',
			bPoint : 'SRM COLLEGE'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Mumbai',
			bPoint : 'Velachery'
		}, {
			FromPlace : 'Chennai',
			ToPlace : 'Mumbai',
			bPoint : 'Tharamani'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Hyderabad',
			bPoint : 'Wakad'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Hyderabad',
			bPoint : 'Hadapsar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Hyderabad',
			bPoint : 'Hinjewadi Bridge'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Hyderabad',
			bPoint : 'Fatima Nagar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Hyderabad',
			bPoint : 'Opp vaibhav Theater'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Kolkatta',
			bPoint : 'Wakad'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Kolkatta',
			bPoint : 'Hadapsar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Kolkatta',
			bPoint : 'Hinjewadi Bridge'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Kolkatta',
			bPoint : 'Fatima Nagar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Kolkatta',
			bPoint : 'Opp vaibhav Theater'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Chennai',
			bPoint : 'Wakad'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Chennai',
			bPoint : 'Hadapsar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Chennai',
			bPoint : 'Hinjewadi Bridge'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Chennai',
			bPoint : 'Fatima Nagar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Chennai',
			bPoint : 'Opp vaibhav Theater'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Banglore',
			bPoint : 'Wakad'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Banglore',
			bPoint : 'Hadapsar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Banglore',
			bPoint : 'Hinjewadi Bridge'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Banglore',
			bPoint : 'Fatima Nagar'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Banglore',
			bPoint : 'Opp vaibhav Theater'
		}, {
			FromPlace : 'Pune',
			ToPlace : 'Mumbai',
			bPoint : 'Wakad'
		}, {
			FromPlace : 'Pune',
			ToPlace : ' Mumbai ',
			bPoint : 'Hadapsar'
		}, {
			FromPlace : 'Pune',
			ToPlace : ' Mumbai ',
			bPoint : 'Hinjewadi Bridge'
		}, {
			FromPlace : 'Pune',
			ToPlace : ' Mumbai ',
			bPoint : 'Fatima Nagar'
		}, {
			FromPlace : 'Pune',
			ToPlace : ' Mumbai ',
			bPoint : 'Opp vaibhav Theater'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Hyderabad',
			bPoint : 'Babughat Bus Station'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Hyderabad',
			bPoint : 'B C Roy Market'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Hyderabad',
			bPoint : 'Karunamoyee'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Chennai',
			bPoint : 'Babughat Bus Station'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Chennai',
			bPoint : 'B C Roy Market'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Chennai',
			bPoint : 'Karunamoyee'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Pune',
			bPoint : 'Babughat Bus Station'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Pune',
			bPoint : 'B C Roy Market'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Pune',
			bPoint : 'Karunamoyee'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Mumbai',
			bPoint : 'Babughat Bus Station'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Mumbai',
			bPoint : 'B C Roy Market'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Mumbai',
			bPoint : 'Karunamoyee'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Banglore',
			bPoint : 'Babughat Bus Station'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Banglore',
			bPoint : 'B C Roy Market'
		}, {
			FromPlace : 'Kolkatta',
			ToPlace : 'Banglore',
			bPoint : 'Karunamoyee'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Hyderabad',
			bPoint : 'Borivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Hyderabad',
			bPoint : 'Kandivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Hyderabad',
			bPoint : 'Andheri'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Hyderabad',
			bPoint : 'Goregaon'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Hyderabad',
			bPoint : 'Chembur'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Hyderabad',
			bPoint : 'Malad'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Banglore',
			bPoint : 'Borivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Banglore',
			bPoint : 'Kandivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Banglore',
			bPoint : 'Andheri'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Banglore',
			bPoint : 'Goregaon'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Banglore',
			bPoint : 'Chembur'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Banglore',
			bPoint : 'Malad'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Kolkatta',
			bPoint : 'Borivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Kolkatta',
			bPoint : 'Kandivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Kolkatta',
			bPoint : 'Andheri'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Kolkatta',
			bPoint : 'Goregaon'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Kolkatta',
			bPoint : 'Chembur'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Kolkatta',
			bPoint : 'Malad'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Pune',
			bPoint : 'Borivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Pune',
			bPoint : 'Kandivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Pune',
			bPoint : 'Andheri'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Pune',
			bPoint : 'Goregaon'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Pune',
			bPoint : 'Chembur'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Pune',
			bPoint : 'Malad'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Chennai',
			bPoint : 'Borivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Chennai',
			bPoint : 'Kandivali'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Chennai',
			bPoint : 'Andheri'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Chennai',
			bPoint : 'Goregaon'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Chennai',
			bPoint : 'Chembur'
		}, {
			FromPlace : 'Mumbai',
			ToPlace : 'Chennai',
			bPoint : 'Malad'
		}],

	}

}); 