var inputData = [
    {
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
];


const covid19ImpactEstimator = () => {

    class OutPutData  {
        constructor() {
            this.data = inputData[0];
            this.impact = {};
            this.severeImpact = {};
        }  
    }


    const impact = () => {
        var cases = new OutPutData();
        
        reported = cases.data.reportedCases;

        currentlyInfected = reported * 10;

        infectionByRequestedTime = currentlyInfected * 1024;

        // CasesByRequestedTime =  infectionByRequestedTime * 15 / 100;

        // totalAvailableBeds = cases.data.totalHospitalBeds * 35 / 100;

        // hospitalBedsByRequestedTime = totalAvailableBeds - CasesByRequestedTime;

        cases.impact = {currentlyInfected, infectionByRequestedTime};

        // console.log(cases.impact);
    };

    impact()


    const severeImpact = () => {
        var cases = new OutPutData();

        reported = cases.data.reportedCases;

        currentlyInfected = reported * 50;

        infectionByRequestedTime = currentlyInfected * 1024;

        severeCasesByRequestedTime =  infectionByRequestedTime * 15 / 100;

        totalAvailableBeds = cases.data.totalHospitalBeds * 35 / 100;

        hospitalBedsByRequestedTime = totalAvailableBeds - severeCasesByRequestedTime + ' beds';

        casesForICUByRequestedTime = 5 / 100 * infectionByRequestedTime + ' people';

        casesForVentilatorsByRequestedTime = 2 /100 * infectionByRequestedTime + ' people';

        dollarsInFlight = '$'+(infectionByRequestedTime * 0.71) * 5 * 30;

        cases.severeImpact = {currentlyInfected, infectionByRequestedTime, severeCasesByRequestedTime, hospitalBedsByRequestedTime, casesForICUByRequestedTime, dollarsInFlight};

        output = cases.severeImpact

        return {output}
        // console.log(cases.severeImpact);
    };
    severeImpact()

    console.log(severeImpact())


    // console.log(this.impact)
};

covid19ImpactEstimator()



// export default covid19ImpactEstimator;
