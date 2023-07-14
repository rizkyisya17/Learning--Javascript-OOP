class Airport {
    constructor(name) {
        this.name = name;
        this.flights = [];
    }
    getName() {
        return this.name;
    }
    getFlights() {
        return this.flights;
    }
    addFlight(flight) {
        this.flights.push(flight);
    }
    removeFlight(flight) {
        const index = this.flights.indexOf(flight);
        if (index > -1) {
            this.flights.splice(index, 1);
        }
    }
    searchFlights(destination) {
        // Complete the code
        // This function should process a list of flights that match the given destination
        // Use this function to display the list of flights
        let filtered = [];
        for (let i = 0; i < this.flights.length; i++) {
            if (this.flights[i].destination === destination) {
                filtered = [...filtered, this.flights[i]];
            }
        }
        
        for (let j = 0; j < filtered.length; j++){
            let time = filtered[j].departureTime.toString()
            let timeUTC = time.replace("2023", "").replace("GMT+0000 (Coordinated Universal Time)", "UTC 2023")
            console.log("[" + filtered[j].airlineName + " - " + filtered[j].id + "] " + filtered[j].origin + " " + "-" + " " + filtered[j].destination + " " + "-" + " " + timeUTC)
        }
        console.log("")
        //console.log(filtered)
        //console.log("[" + filtered)
    }
}

class Flight {
    constructor(id, airlineName, origin, destination, departureTime) {
        this.id = id;
        this.airlineName = airlineName;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
    }
    getAirlineName() {
        return this.airlineName;
    }
    getId() {
        return this.id;
    }
    getOrigin() {
        return this.origin;
    }
    getDestination() {
        return this.destination;
    }
    getDepartureTime() {
        return this.departureTime;
    }
}

const airport = new Airport("Soekarno-Hatta International Airport");
const flight1 = new Flight("BTK101", "Batik", "Jakarta", "Bangkok", new Date("20 March 2023 18:00"));
const flight4 = new Flight("GA600", "Garuda", "Jakarta", "Bangkok", new Date("18 March 2023 03:40"));
const flight2 = new Flight("MH380", "Malaysia Airlines", "Jakarta", "Bangkok", new Date("15 May 2023 15:20"));
const flight3 = new Flight("GA300", "Garuda", "Jakarta", "Berlin", new Date("14 April 2023 15:00"));
const flight5 = new Flight("QF110", "Qantas Airways", "Jakarta", "Berlin", new Date("14 August 2023 15:40"));

airport.addFlight(flight1);
airport.addFlight(flight2);
airport.addFlight(flight3);
airport.addFlight(flight4);
airport.addFlight(flight5);

console.log("Welcome to " + airport.getName());
console.log("List of flight : ");
console.log("");
console.log("****************************");
console.log("All list flights to Bangkok:");
// Display the list of flights with destination Bangkok!

airport.searchFlights("Bangkok");

console.log("****************************");
console.log("All list flights to Berlin:");
// Display the list of flights with destination Berlin!
airport.searchFlights("Berlin");
