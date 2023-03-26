// let colorOf2020s = ["blue", "green", "pink", "purple"]
// let curColor = 0

// changeColor = () =>{
// 	let element = document.querySelector("#yirmiyirmi")
// 	element.style.color = colorOf2020s[curColor]
// 	curColor++
// 	if (curColor >3) {
// 		curColor = 0
// 	}
// 	setTimeout(changeColor, 2000)
// }
// setTimeout(changeColor, 2000)

let wrapper = document.querySelector(".wrapper")
wrapper.style.textAlign = 'center'
let yirmiyirmi = document.querySelector("#yirmiyirmi")
yirmiyirmi.style.fontSize = '90px'

changeColor = () => {
	let element = document.querySelector("#yirmiyirmi")
	switch (element.className) {
		case "green":
			element.style.color = "red"
			element.className = "red"
			break;
		case "red":
			element.style.color = "pink"
			element.className = "pink"
			break;
		case "pink":
			element.style.color = "purple"
			element.className = "purple"
			break;
		case "purple":
			element.style.color = "green"
			element.className = "green"
			break;
		default:
			element.style.color = "green"
			element.className = "green"
			break;
	}
}
setInterval(changeColor,1000);
