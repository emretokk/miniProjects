// let colorOf2020s = ["blue", "green", "pink", "purple"]
// let curYirmiColor = 0

// changeColor = () =>{
// 	let element = document.querySelector("#yirmiyirmi")
// 	element.style.color = colorOf2020s[curYirmiColor]
// 	curYirmiColor++
// 	if (curYirmiColor >3) {
// 		curYirmiColor = 0
// 	}
// 	setTimeout(changeColor, 2000)
// }
// setTimeout(changeColor, 2000)

// changeColor = () => {
// 	let element = document.querySelector("#yirmiyirmi")
// 	switch (element.className) {
// 		case "green":
// 			element.style.color = "red"
// 			element.className = "red"
// 			break;
// 		case "red":
// 			element.style.color = "pink"
// 			element.className = "pink"
// 			break;
// 		case "pink":
// 			element.style.color = "purple"
// 			element.className = "purple"
// 			break;
// 		case "purple":
// 			element.style.color = "green"
// 			element.className = "green"
// 			break;
// 		default:
// 			element.style.color = "green"
// 			element.className = "green"
// 			break;
// 	}
// }
// setInterval(changeColor,1000);


let wrapper = document.querySelector(".wrapper")
wrapper.style.textAlign = 'center'
let yirmiyirmi = document.querySelector("#yirmiyirmi")
yirmiyirmi.style.fontSize = '90px'


let yirmiColors = ["blue", "green", "pink", "purple"]
let curYirmiColor = 0;
let changeColor = () => {
  let element = document.querySelector("#yirmiyirmi")
  element.style.color = yirmiColors[curYirmiColor]
  curYirmiColor = (curYirmiColor + 1) % yirmiColors.length;
  setTimeout(changeColor, 1000)
}
changeColor()


let h2 = document.querySelector("h2")
h2.style.textDecoration = "underline"

let ul = document.querySelector("ul")
ul.style.listStyleType = 'none'

let date = document.createElement("div")
date.id = "date"
wrapper.insertBefore(date, h2.nextSibling)
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let dateColors = ["lime", "darkpurple", "aqua", "darkblue"]
let curDateColor = 0
date.style.fontSize = "20px"
date.style.display = 'inline-block'
date.style.paddingRight = '20px'
date.style.paddingLeft = '20px'
date.style.paddingTop = '5px'
date.style.paddingBottom = '5px'

let changeTime = () => {
	const curTime = new Date()
	date.textContent = 
		months[curTime.getMonth()] + " " + curTime.getDate() 
		+ ", " + curTime.getFullYear() + " "
		+ curTime.getHours() + ":" 
		+ curTime.getMinutes() + ":"
		+ curTime.getSeconds()
	date.style.backgroundColor = dateColors[curDateColor]
	curDateColor = (curDateColor + 1) % dateColors.length
	setTimeout(changeTime,1000)
}
changeTime()

ul.style.margin = "0"
ul.style.padding = "0"
ul.style.marginTop = "20px"
let listItems = document.querySelectorAll("li")
for (listItem of listItems){
	listItem.style.height = "60px"
	listItem.style.fontSize = "30px"
	listItem.style.backgroundColor = 'salmon'
	listItem.style.marginBottom = '4px'
	listItem.style.marginLeft = "20%"
	listItem.style.marginRight = "20%"
	listItem.style.textAlign = "left"
	listItem.style.paddingLeft = "30px"
	listItem.style.paddingTop = "30px"
}

let python = document.querySelector("#python")
python.style.backgroundColor = "green"

let javaScript = document.querySelector("#javascript")
javaScript.style.backgroundColor = "yellow"