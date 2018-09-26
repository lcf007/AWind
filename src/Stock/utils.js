import { timeParse } from "d3-time-format";

const parseDate = timeParse("%Y-%m-%d");

export function getData(symb = 'AMZN') {
	console.log(symb)
	const promiseMSFT = fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symb+"&apikey=O4XWQ81YGQI73ODW")
		.then(response => response.json())
		.then(data => 
			{
				console.log(data)
				let obj = data['Time Series (Daily)']
				let out = Object.keys(obj).map( key => {
						let subObj = {}
						subObj['open'] = Number(obj[key]['1. open'])
						subObj['high'] = Number(obj[key]['2. high'])
						subObj['low'] = Number(obj[key]['3. low'])
						subObj['close'] = Number(obj[key]['4. close'])
						subObj['volume'] = Number(obj[key]['5. volume'])
						subObj['date'] = parseDate(key)
						subObj['dividend'] = ''
						subObj['split'] = ''
						subObj['absoluteChange'] = undefined
						return subObj
					});
				out.reverse();
				return out;
			}
		)
	return promiseMSFT;
}
