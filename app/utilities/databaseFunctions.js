Ext.define("myBooking.utilities.databaseFunctions", {
	/*dbCreate:function(){
	 console.log('databaseCreate');
	 var db = openDatabase('myBooking', '1.0', 'To Store the details', 2 * 1024 * 1024);
	 return db;
	 },
	 dbInsert:function(category){
	 console.log('database');
	 var db = openDatabase('MoneyManager', '1.0', 'To Store the details', 2 * 1024 * 1024);
	 db.transaction(function (tx) {
	 tx.executeSql('CREATE TABLE IF NOT EXISTS IncomeCategory (name unique)');
	 tx.executeSql('INSERT INTO IncomeCategory (name) VALUES ( '+category+')');

	 });
	 },*/
	dbFilter : function(From, To) {
		var buses;
		var services;
		var type;
		var fare;
		var from;
		var to;
		var Bpoint;
		console.log('entered into dbFilters database');
		console.log(From, To);
		var me = this;
		var db = openDatabase('Database', '1.0', 'Filtering Buses', 2 * 1024 * 1024);
		db.transaction(function(tx) {
			console.log(From);
			var queryString = "SELECT * FROM busList WHERE fromPlace = \'" + From + "\' AND toPlace=\'" + To + "\' ";
			var queryBPoint = "SELECT * FROM bPoints WHERE FromPlace = \'" + From + "\' AND ToPlace=\'" + To + "\'";
			var queryDPoint = "SELECT * FROM dPoints WHERE FromPlace = \'" + From + "\' AND ToPlace=\'" + To + "\'";

			console.log(queryBPoint);
			console.log(queryDPoint);
			console.log(queryString);
			tx.executeSql(queryString, [], function(tx, results) {
				console.log("Inside execute sql");
				var len = results.rows.length, i;
				console.log(len);
				//	console.log(filterBuses);

				var busArray = new Array();
				for ( i = 0; i < len; i++) {
					from = "" + results.rows.item(i).fromPlace + "";
					to = "" + results.rows.item(i).toPlace + "";
					//buses=""+results.rows.item(i).fromPlace+"";
					date = '' + results.rows.item(i).Timing + '';
					services = "" + results.rows.item(i).BusService + "";
					type = '' + results.rows.item(i).BusType + "";
					fare = '' + results.rows.item(i).Fare + "";

					bus = {
						//Timing:date,
						fromPlace : from,
						toPlace : to,
						Timing : date,
						BusService : services,
						BusType : type,
						Fare : fare
					};
					busArray.push(bus);
				}
				console.log(busArray);
				myBooking.app.getController('Booking').filtered(busArray);
				myBooking.app.getController('confirmSummary').filtered(busArray);

			});
			tx.executeSql(queryBPoint, [], function(tx, results) {
				console.log("Inside Bpoint execute sql");
				var len = results.rows.length, i;
				console.log(len);

				var bPointArray = new Array();
				for ( i = 0; i < len; i++) {
					Bpoint = "" + results.rows.item(i).bPoint + "";
					bus = {
						bPoint : Bpoint
					};
					bPointArray.push(bus);
				}
				console.log(bPointArray);
				myBooking.app.getController('Booking').BpointsFiltered(bPointArray);
				myBooking.app.getController('myBookings').BpointsEditFiltered(bPointArray);

			});
			tx.executeSql(queryDPoint, [], function(tx, results) {
				console.log("Inside Dpoint execute sql");
				var len = results.rows.length, i;
				console.log(len);

				var dPointArray = new Array();
				for ( i = 0; i < len; i++) {
					Dpoint = "" + results.rows.item(i).dPoint + "";
					bus = {
						dPoint : Dpoint
					};
					dPointArray.push(bus);
				}
				console.log(dPointArray);
				myBooking.app.getController('Booking').DpointsFiltered(dPointArray);
				myBooking.app.getController('myBookings').DpointsEditFiltered(dPointArray);

			});
		});

	},
	dbTicket : function(TicketNo) {
		console.log('inside  ticket database');
		console.log(TicketNo);
		var me = this;
		var db = openDatabase('Database', '1.0', 'Filtering Tickets', 2 * 1024 * 1024);
		db.transaction(function(tx) {
			console.log(TicketNo);
			var queryTicket = "SELECT * FROM paymentDetails WHERE TicketNo = \'" + TicketNo + "\'";

			console.log(queryTicket);

			tx.executeSql(queryTicket, [], function(tx, results) {
				console.log("Inside ticket execute sql");
				var len = results.rows.length, i;
				console.log(len);
				//	console.log(filterBuses);

				//Check the length of results
				if (len == 0) {
					//Ext.Msg.alert("Ticket not Found");
					//return;
					myBooking.app.getController('CancelTicket').searched(null);

				} else {
					var busTicketArr = new Array();
					for ( i = 0; i < len; i++) {
						transId = "" + results.rows.item(i).TransId + "";
						TicketNo = "" + results.rows.item(i).TicketNo + "";
						fromPlace = "" + results.rows.item(i).fromPlace + "";
						toPlace = "" + results.rows.item(i).toPlace + "";
						Timing = "" + results.rows.item(i).Timing + "";
						date = "" + results.rows.item(i).date + "";
						amountPayable = "" + results.rows.item(i).amountPayable + "";
						bPoint = "" + results.rows.item(i).bPoint + "";
						dPoint = "" + results.rows.item(i).dPoint + "";
						Name = "" + results.rows.item(i).Name + "";
						seatNumbercount = "" + results.rows.item(i).seatNumbercount + "";
						seatNumbers = "" + results.rows.item(i).seatNumbers + "";
						BusService = "" + results.rows.item(i).BusService + "";
						BusType = "" + results.rows.item(i).BusType + "";

						tick = {
							//Timing:date,
							TransId : transId,
							TicketNo : TicketNo,
							fromPlace : fromPlace,
							toPlace : toPlace,
							Timing : Timing,
							BusService : BusService,
							BusType : BusType,
							date : date,
							amountPayable : amountPayable,
							bPoint : bPoint,
							dPoint : dPoint,
							Name : Name,
							seatNumbers : seatNumbers,
							seatNumbercount : seatNumbercount
						};
						busTicketArr.push(tick);
					}
					console.log(busTicketArr);
					myBooking.app.getController('CancelTicket').searched(busTicketArr);
					//myBooking.app.getController('confirmSummary').filtered(busArray);

				}
			});

		});

	}
}); 