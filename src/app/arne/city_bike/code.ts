const cycleText: HTMLElement | null = document.querySelector("#cycleText");
const infoSchool: HTMLElement | null = document.querySelector("#infoSchool");

const httpStatus: XMLHttpRequest = new XMLHttpRequest();
const urlStatus: string = 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json';

const httpInfo: XMLHttpRequest = new XMLHttpRequest();
const urlInfo: string = 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json';

let toBeReversed: boolean = false;
let nameId: { [key: string]: string } = {};
let results: [number, string][] = [];

httpInfo.open("GET", urlInfo);
httpInfo.send();

httpInfo.onreadystatechange = function (): void {
    if (httpInfo.readyState === 4 && httpInfo.status === 200) {
        try {
            const stationsInfo = JSON.parse(httpInfo.responseText).data.stations;
            for (const station of stationsInfo) {
                nameId[station.station_id] = station.name;
            }
            run();
        } catch (e) {
            console.log("Stations info could not parse JSON: " + e);
        }
    }
};

function run(): void {
    httpStatus.open("GET", urlStatus);
    httpStatus.send();

    httpStatus.onreadystatechange = function (): void {
        if (httpStatus.readyState === 4 && httpStatus.status === 200) {
            try {
                const response = JSON.parse(httpStatus.responseText).data.stations;
                for (const station of response) {
                    if (!results.some(row => row.includes(nameId[station.station_id]))) {
                        results.push([station.num_bikes_available, nameId[station.station_id]]);
                    }
                }
                sizeSort();
                updateHtml();
            } catch (e) {
                console.log("Response info could not parse JSON: " + e);
            }
        }
    };
}

function updateHtml(isBike?: boolean): void {
    let returnString: string = "";
    for (const result of results) {
        returnString += `<li>Det er ${result[0]} ledige sykler på ${result[1]} </li>`;
    }
    if (cycleText) cycleText.innerHTML = returnString;
    if (isBike && infoSchool) {
        infoSchool.innerHTML = "Det er ledig sykkel utenfor Høytek!";
    }
}

function sizeSort(): void {
    let isBike: boolean = false;
    let myCopyResults: [number, string][] = [...results];

    myCopyResults = myCopyResults.sort((a, b) => {
        if (a[1] === "Høyteknologisenteret" || a[1] === "Florida Bybanestopp") {
            isBike = true;
        }
        return a[0] - b[0];
    });

    if (toBeReversed) {
        myCopyResults.reverse();
        toBeReversed = false;
    } else {
        toBeReversed = true;
    }

    results = myCopyResults;
    updateHtml(isBike);
}

// The update function is commented out in the original code, so it's not included here.
