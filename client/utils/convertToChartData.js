export default function convertToChartData(data, xName, yName) {
    let chartData = [];
    for (let key in data) {
        let dataObj = {};
        dataObj[xName] = key;
        dataObj[yName] = data[key];
        chartData.push(dataObj);
    }
    return chartData;
}