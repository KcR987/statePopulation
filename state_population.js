const https = require("https");

function fetchData() {
  return new Promise((resolve, reject) => {
    https
      .get(
        "https://datausa.io/api/data?drilldowns=State&measures=Population",
        (resp) => {
          let data = "";

          resp.on("data", (chunk) => {
            data += chunk;
          });

          resp.on("end", () => {
            resolve(JSON.parse(data));
          });
        }
      )
      .on("error", (err) => {
        reject("Error: " + err.message);
      });
  });
}

async function stateNameHandler(stateName) {
  try {
    const data = await fetchData();
    const stateData = data.data.filter(
      (item) => item.State.toUpperCase() === stateName.toUpperCase()
    );
    if (stateData.length === 0) {
      console.log(stateData);
      console.log(`no data for state: ${stateName}`);
      return;
    }
    stateData.sort((a, b) => a.year - b.year);
    stateData.forEach((item) => {
      console.log(`Year: ${item.Year}, Population: ${item.Population}`);
    });
  } catch (error) {
    console.error(error);
  }
}

async function fullReportHandler(year) {
  try {
    const data = await fetchData();
    const yearData = data.data.filter((item) => item.Year === year);
    if (yearData.length === 0) {
      console.log(`No data found for year: ${year}`);
      return;
    }
    yearData.sort((a, b) => b.Population - a.Population);
    yearData.forEach((item) => {
      console.log(`State: ${item.State}, Population: ${item.Population}`);
    });
  } catch (error) {
    console.error(error);
  }
}

function displayUsage() {
  console.log("Usage:");
  console.log("node state_population.js state_name <STATE_NAME>");
  console.log("node state_population.js full_report <YEAR>");
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    displayUsage();
    return;
  }

  const [param, value] = args;

  switch (param) {
    case "state_name":
      await stateNameHandler(value);
      break;
    case "full_report":
      await fullReportHandler(value);
      break;
    default:
      displayUsage();
      break;
  }
}

main();
