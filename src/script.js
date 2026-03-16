//idea	Funkcie sú first class citizen

// 1	-	funkciu uložiť do premennej
const myFunction = function () {
	console.log("Jedna")
}

const myFunction2 = () => {
	console.log("Jedna")
}

// 2	-	funkciu poslať ako parameter do inej funkcie
function first(fun) {
	fun()
}

first(function(){console.log("Funkcia!!!")})

const second = (fun) => {
	fun()
}

second(function () {console.log("Funkcia 2!!!")})

// 3	-	funkciu vraciam z funkcie
function returnFun() {
	return function c() {
		console.log("Return is the best")
	}
}

returnFun()()
// alebo
const resultFun = returnFun()
resultFun()

// 4	-	funkciu môžem dať do poľa
const arrayFun = () => {
	return 99
}

const myArry = [arrayFun, 5, 10, 15]
console.log(myArry[0]())