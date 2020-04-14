// DUMMY DATA
// var inputData = [
//     {
//         region: {
//             name : "Africa",
//             avgAge: 19.7,
//             avgDailyIncomeInUSD: 5,
//             avgDailyIncomePopulation: 0.71
//         },
//         periodType: "days",
//         timeToElapse: 58,
//         reportedCases: 674,
//         population: 6662705,
//         totalHospitalBeds: 1380614
//     }
// ];

// INPUT
const reportedCases = document.querySelector(".data-reported-cases");
const population = document.querySelector(".data-population")
const totalHospitalBeds = document.querySelector(".data-total-hospital-beds")
const period = document.querySelector(".data-period-type")
const timeToElapse = document.querySelector(".data-time-to-elapse")

// ACTION
const estimateButton = document.querySelector(".data-go-estimate");

// OUTPUT
const estimate = document.querySelector(".results-items");


estimateButton.addEventListener('click', goEstimate)


// Functions
function goEstimate(e) {
    e.preventDefault()

    const currentlyInfected = document.createElement('li');
    currentlyInfected.innerText = reportedCases.value * 10  + ' people'  ;
    currentlyInfected.classList.add("results-item");
    estimate.appendChild(currentlyInfected);


    const infectionsByRequtedTime = document.createElement('li');
    infectionsByRequtedTime.innerText = parseInt(currentlyInfected.innerText * 512 / 28) + ' people infected today';
    infectionsByRequtedTime.classList.add("results-item");
    estimate.appendChild(infectionsByRequtedTime);


    const casesForICUByRequestedTime = document.createElement('li');
    casesForICUByRequestedTime.innerText = infectionsByRequtedTime.innerText * 5 / 100 + ' cases for ICU';
    casesForICUByRequestedTime.classList.add("results-item");
    estimate.appendChild(casesForICUByRequestedTime);

    const severeCasesByRequestedTime = document.createElement('li');
    severeCasesByRequestedTime.innerText = infectionsByRequtedTime.innerText * 15 / 100 + ' severe cases';
    severeCasesByRequestedTime.classList.add("results-item");
    estimate.appendChild(severeCasesByRequestedTime);


    const hospitalBedsByRequestedTime = document.createElement('li');
    hospitalBedsByRequestedTime.innerText = severeCasesByRequestedTime.innerText - (totalHospitalBeds.value * 35 / 100) + 'hospital beds available';
    hospitalBedsByRequestedTime.classList.add("results-item");

    estimate.appendChild(hospitalBedsByRequestedTime);
};

const covid19ImpactEstimator = (data) => {
    // e.preventDefault()

    var output = {}

    var data = {
            region: {
            name : "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 6662705,
        totalHospitalBeds: 1380614
    }


    // var input = data;
    var data;
    var impact = {};
    var severeImpact = {};

    
    const currentlyInfected = data.reportedCases;
    impact["currentlyInfected"] = currentlyInfected * 10;
    severeImpact["currentlyInfected"] = currentlyInfected * 50;

    const infectionsByRequestedTime = Math.floor(currentlyInfected * 512 / 28);
    impact["infectionsByRequestedTime"] = infectionsByRequestedTime;
    severeImpact["infectionsByRequestedTime"] = infectionsByRequestedTime;

    const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 15 / 100);
    impact["severeCasesByRequestedTime"] = severeCasesByRequestedTime;
    severeImpact["severeCasesByRequestedTime"] = severeCasesByRequestedTime;

    const hospitalBedsByRequestedTime = severeCasesByRequestedTime - (totalHospitalBeds * 35 / 100);
    impact["hospitalBedsByRequestedTime"] = hospitalBedsByRequestedTime;
    severeImpact["hospitalBedsByRequestedTime"] = hospitalBedsByRequestedTime;

    const casesForICUByRequestedTime = infectionsByRequestedTime * 5 / 100;
    impact["casesForICUByRequestedTime"] = casesForICUByRequestedTime;
    severeImpact["casesForICUByRequestedTime"] = casesForICUByRequestedTime;

    const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 2 / 100);
    impact["casesForVentilatorsByRequestedTime"] = casesForVentilatorsByRequestedTime;
    severeImpact["casesForVentilatorsByRequestedTime"] = casesForVentilatorsByRequestedTime;

    const dollarsInFlight = Math.floor((infectionsByRequestedTime * 0.85 * 5) / 30);
    impact["dollarsInFlight"] = dollarsInFlight;
    severeImpact["dollarsInFlight"] = dollarsInFlight;

    // output.push(data);
    // output.push(impact);
    // output.push(severeImpact);
    output["data"] = data;
    output["impact"] = impact;
    output["severeImpact"] = severeImpact;

    console.log(output)

    return output
};

covid19ImpactEstimator()



export default covid19ImpactEstimator;