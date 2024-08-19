const cycleText = document.querySelector("#cycleText");
const infoSchool = document.querySelector("#infoSchool");
const httpStatus = new XMLHttpRequest();
const urlStatus = 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json';
const httpInfo = new XMLHttpRequest();
const urlInfo = ' https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json'

let toBeReversed = false;
let nameId = {};
let results = [];

httpInfo.open("GET", urlInfo);
httpInfo.send();

httpInfo.onreadystatechange = function () {
    if((httpInfo.responseText != 0)){
        try {
            let stationsInfo = (JSON.parse(httpInfo.responseText)).data.stations;
            for (let station of stationsInfo) {
                nameId[station.station_id] = station.name
            }
            run();
            shouldRun = false;
        }catch(e){
            console.log("Stations info could not parse JSON: " + e)
        }
    }
};

function run() {
    httpStatus.open("GET", urlStatus);
    httpStatus.send();
    httpStatus.onreadystatechange = function () {
        if ((httpStatus.responseText != 0)){
            try {
                let response = JSON.parse(httpStatus.responseText).data.stations;
                for (let station of response) {
                    if (!results.some(row => row.includes(nameId[station.station_id]))) {
                        results.push([station.num_bikes_available, nameId[station.station_id]]);
                    }
                }
                sizeSort();
                updateHtml();
                //setInterval(update(), 1000000);
            }catch (e){
                console.log("Response info could not parse JSON: " + e);
            }
        }
    }
}
function updateHtml(isBike) {
    let returnString = "";
    for (let result of results){
        returnString += `<li>Det er ${result[0]} ledige sykler på ${result[1]} </li>`
    }
    cycleText.innerHTML = returnString
    if(isBike) {
        infoSchool.innerHTML = "Det er ledig sykkel utenfor Høytek!";
    }
}


function sizeSort(){
    let isBike = false;
    let myCopyResults = results;
    myCopyResults = myCopyResults.sort(function(a,b){
        if(a[1] === "Høyteknologisenteret" || a[1] === "Florida Bybanestopp"){
            isBike = true
        }
        return a[0] - b[0];
    });
    if(toBeReversed){
        myCopyResults.reverse();
        toBeReversed = false;
    }
    else{
        toBeReversed = true;
    }
    results = myCopyResults;
    updateHtml(isBike);
}


function update() {
    shouldRun = true;
    shouldRunHere = true;
    httpInfo.open("GET", urlInfo);
    //httpInfo.send();
}