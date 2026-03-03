import { stockArray }  from '../modules/stockService.js';
// import { stockTicker } from '../modules/sparklineModule.js'

const symbol = document.getElementById("symbol");
const company = document.getElementById("name");
const price = document.getElementById("price");
const change = document.getElementById("change");
const volume = document.getElementById("volume");
const trend = document.getElementById("trend");

function displayStock() {
    const timeSeries = stockArray[0]['Time Series (5min)']
    stockArray[0]
    const timestamps = Object.keys(timeSeries).sort((a, b) => b.localeCompare(a))

    const latest = timeSeries[timestamps[timestamps.length - 1]]
    const previous = timeSeries[timestamps[timestamps.length - 2]]

    const latestClose = parseFloat(latest["4. close"])
    const previousClose = parseFloat(previous["4. close"])
    const diffrence = latestClose - previousClose

    symbol.innerText = stockArray[0]["Meta Data"]["2. Symbol"]
    price.innerText = `$${latestClose.toFixed(2)}`
    change.innerText = `${diffrence >= 0 ? "+" : ""}$${diffrence.toFixed(2)}`
    volume.innerText = latest["5. volume"]
    trend.innerText = null
                                 
    displayCompanyNames()
    // stockTicker()
}

export default displayStock

function displayCompanyNames() {
    if (symbol.innerText === "IBM") {
        return company.innerText = "International Business Machines Corporation"
    } else {
        return null
    };
}

