// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and
// then adds new rows of data for each UFO sighting.
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time`
// column to find rows that match user input.

var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data){
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");
       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}
function handleClick(){
    d3.event.preventDefault()
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;
    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);