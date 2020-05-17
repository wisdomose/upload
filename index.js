// arr = [
// 	{
// 		question: "What is the smallest part of an element",
// 		optionA: "atom",
// 		optionB: "element",
// 		optionC: "compound",
// 		optionD: "mixture",
// 		optionE: "fixture"
// 	},
// 	{
// 		question: "What is the biggest part of an element",
// 		optionA: "compound",
// 		optionB: "mixture",
// 		optionC: "atom",
// 		optionD: "element",
// 		optionE: "fixture"
// 	},
// 	{
// 		question: "what is the color of the sky",
// 		optionA: "red",
// 		optionB: "ash",
// 		optionC: "blue",
// 		optionD: "gray",
// 		optionE: "yellow"
// 	},
// 	{
// 		question: "red + yellow equals",
// 		optionA: "orange",
// 		optionB: "red",
// 		optionC: "yellow",
// 		optionD: "brown",
// 		optionE: "fixture"
// 	},
// 	{
// 		question: "what is the product of 4 and 3",
// 		optionA: "12",
// 		optionB: "11",
// 		optionC: "5",
// 		optionD: "9",
// 		optionE: "18"
// 	},
// 	{
// 		question: "what is the roman of 4",
// 		optionA: "i",
// 		optionB: "iii",
// 		optionC: "ii",
// 		optionD: "iv",
// 		optionE: "v"
// 	}
// ];


// var paragraph = document.querySelector("#question");
// question.innerHTML = "hello world";


// let answers = [];
// // function displayQuestion(){

// // }
// let inputs = new Set();
// var bool = true;
// var ans;

// function check(){
// 	let i;
// 	while(bool){
// 		i = Math.floor(Math.random() * 6)
// 		let checker = inputs.has(i)
// 		bool = (checker ? true : false)
// 	}
// 	ans = i
// 	bool = true
// 	inputs.add(i)
// }

// for(let j=0; j<6; j++){
// 	check();
// 	console.log(ans);
// 	console.log(bool);
// 	paragraph.innerHTML = arr[ans].question;
// }

// function display(){
// 	console.log(inputs.size)
// }



function capitalize(str){
	let temp = str.toLowerCase();
	let perm = temp.charAt(0).toUpperCase() + temp.slice(1);
	return perm
}

function submitHandler(){
	let staff = capitalize(document.querySelector("#staffName").value);
	let subject = document.querySelector("#subject").value;
        let class = document.querySelector("#class").value
	let obj = {
    question : capitalize(document.querySelector("#question").value),
    optionA : capitalize(document.querySelector("#optionA").value),
    optionB : capitalize(document.querySelector("#optionB").value),
    optionC : capitalize(document.querySelector("#optionC").value),
    optionD : capitalize(document.querySelector("#optionD").value),
    optionE : capitalize(document.querySelector("#optionE").value),
    answer : capitalize(document.querySelector("#answer").value),
    staff : capitalize(document.querySelector("#staffName").value),
    date : Date.now()
	}

	let res = confirm(`please ${staff} look through your work and confirm you want to submit this ${subject} question`);
	if(res){
		db.collection(`questions/${class}/${subject}`).add(obj)
		.then(function(docRef) {
		    return(docRef.id);})
		.then( (id)=>{
					alert("Document written with ID: " + id)
				})
		.catch(function(error) {
	    	alert("Error adding document: ", error);
		})

		document.querySelector("#question").value = "";
	    document.querySelector("#answer").value = "";
	    document.querySelector("#optionA").value = "";
	    document.querySelector("#optionB").value = "";
	    document.querySelector("#optionC").value = "";
	    document.querySelector("#optionD").value = "";
    	document.querySelector("#optionE").value = "";
	}else{
		return false;
	}	
}
