window.onload = startup;

function startup() {
    document.getElementById("file").addEventListener("change", readFile)    // Adds a event linsner to lisen for when you have uploaded a CSV file. i can also use .onchange
}

function readFile() {   // This is the file reader. It also defined the object i store the data in
    let file = document.getElementById("file").files.item(0);   // Gets the file from the HTML
    let reader = new FileReader();  // Creates a new filereader
    let text

    let data = {    // Defines the object I store the data. I store all of the coums in a object and the object have a array that stores the row information
        date: [],           // The date of the pucnes
        type: [],           // The type of puches
        place: [],          // Where the puches happend
        amount: [],         // This is the amount paid
        serialNumber: []    // This is the index of all of the transaction
    };

    reader.readAsText(file)         // Asigns the importet CSV file to the file reader
    reader.onload = function(e) {   // When the filereader is done reading the file it will run this
        text = reader.result;       // Setts the read file as a variable, so i can use it to create a object

        convertToObject(text, data);    // Converts text to a object and stores the colums in the object "data"
        getStats(data);     // Runs the getStats function to create all of the stats

    };
}

function convertToObject(file, data) {      // Takes the file and data object and places the data form file to the object
    let text = file.split("\n");    // Splits the document on new line so i can gett all of my columns

    for (let i = 0; i < text.length; i++) {     // Loops thru the columns
        let temp = text[i].split(",");      // Splits the i culumn in rows so i can acces them, using the temp array
        
        let tempDate = new Date(temp[0]).getTime();     // Converts the date that is written in a default form to a int, this is so that i can use it later
        data.date[i] = tempDate;    // Adds the date to the correct object
        
        data.type[i] = temp[1];     // Adds the type of puches to the object
        
        data.place[i] = temp[2];    // Adds the place of puches to the object
        
        data.amount[i] = parseInt(temp[3]);     // Adds the amount of the puches to the object

        data.serialNumber[i] = i    // Creats a index
    }
}

function getStats(data) {   // The stats display 

    createTable(data);

    displayStats(data);
}

function createTable(data) {    // Here I create the table and display it on the page

    for (let i = 0; i < data.serialNumber.length; i++) {    // This loopt thru the array part of the object, this is so I can create i new column for the array length. 

	    let tempDate = new Date(data.date[i])   // A temprary variable for storing the date, to get ready to convert back to a readeble date form
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };  // This is to tell javascript how to write the date

        let table = document.getElementById("myTable");     // Gets the table from HTML
        let row = table.insertRow(-1);      // Definef that row should insert a row int he column, -1 saying that it shoyld add it to the last place

        let cellSerialNumber = row.insertCell(0);   // Defines what cell the index should be stored
        let cellDate = row.insertCell(1);           // Defines what cell the date should be stored
        let cellLocation = row.insertCell(2);       // Defines what cell the location should be stored
        let cellType = row.insertCell(3);           // Defines what cell the tyoe should be stored
        let cellSpendt = row.insertCell(4);         // Defines what cell the spendt should be stored

        // Displays the table
        cellSerialNumber.innerHTML = data.serialNumber[i];      // Setts the innherHTML to serialNumber i
        cellDate.innerHTML = tempDate.toLocaleDateString("en-US", options);     // Setts the date to a normal format (in English style). It also setts it in the table
        cellLocation.innerHTML = data.place[i];
        cellType.innerHTML = data.type[i];
        cellSpendt.innerHTML = data.amount[i] + "&nbsp;KR";
    }
}

function displayStats(data) {   // Here i display the stats

    let tempDateFirst = new Date(stats.date(data).small);       // The first day for the observation persiod, temp
    let tempDateLast = new Date(stats.date(data).large);        // The last day for the observation period, temp
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let text = document.getElementById("stats");    // Gets the text feald to display the stats
    // Writes the stats to the HTML document
    text.innerHTML =    `
                        The total spendt: ${stats.sum(data)} KR. <br>
                        The avrage is: ${stats.avrage(data)} KR. <br>
                        The maximum and minimum spend is: ${stats.maximum(data)} KR max and ${stats.minimum(data)} KR min. <br>
                        <br>
                        A total of ${stats.location(data).length} places was visited. <br>
                        The locations was: ${stats.location(data)}. <br>
                        <br>
                        A total of ${stats.types(data).length} difrent types of thing was purchased. <br>
                        All of them was: ${stats.types(data)}.
                        <br>
                        The total observation persiod was ${stats.date(data).timeDiff} days. <br>
                        The start day was: ${tempDateFirst.toLocaleDateString("en-US", options)} <br>
                        The end day was: ${tempDateLast.toLocaleDateString("en-US", options)}
                        ` 

}

let stats = {   // A object with alot of functions to do alot of the calculations i need
    
    sum : function(data) {      // The total sum of money spent
        let temp = 0;
        for (let i = 0; i < data.amount.length; i++) {
           temp += data.amount[i];
        }
        return temp;
    }, 
    avrage : function(data) {   // The avrage amount of money spent
        let temp = 0;
        for (let i = 0; i < data.amount.length; i++) {
            temp += data.amount[i];
        }
        return temp / data.amount.length;
    },
    maximum : function(data) {  // The maximum amount of money spent 
        let temp = data.amount[0];
        for (let i = 0; i < data.amount.length; i++) {
            data.amount[i] < temp ? temp = data.amount[i] : undefined;
        }
        return temp;
    },
    minimum : function(data) {  // The maximum amount of money spent 
        let temp = data.amount[0];
        for (let i = 0; i < data.amount.length; i++) {
            data.amount[i] > temp ? temp = data.amount[i] : undefined;
        }
        return temp;
    },
    date : function(data) {     // How many days the data is taken from
        let tempSmall = new Date(data.date[0]);
        let tempLarge = new Date(data.date[0]);
    
        for (let i = 0; i < data.date.length; i++) {    // Finds the last date
            if (tempSmall > data.date[i]) {
                tempSmall = new Date(data.date[i]);
            }
            
            if (tempLarge < data.date[i]) {     // Finds the first day
                tempLarge = new Date(data.date[i]);
            }
        }
    
        let timeDiff = Math.abs(tempLarge.getTime() - tempSmall.getTime())
        let timeDiffrance = Math.ceil(timeDiff / (1000 * 3600 * 24))

        return {small: tempSmall, large: tempLarge, timeDiff: timeDiffrance};
    },
    location : function(data) {     // All the difrent locations
        let locations = [];

        for (let i = 0; i < data.place.length; i++) {   // Stores the place taht is diffren to the array
            if (locations.includes(data.place[i])) {    // Test if the array includes the place alreaty, if not then puch it to the array

            } else {
                locations.push(data.place[i]);
            }
        }
        return locations;
    },
    types : function(data) {        // All the types of pucheses
        let types = [];

        for (let i = 0; i < data.type.length; i++) {    //  Stores the type that is diffrent to a array
            if (types.includes(data.type[i])) {     // Test if the array includes the type, if not then puch it to the array

            } else {
                types.push(data.type[i]);
            }
        }
        return types;
    }
}