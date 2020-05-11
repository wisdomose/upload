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





function submitHandler(){
	let obj = {
	question : document.querySelector("#question").value,
    answer : document.querySelector("#answer").value,
    optionA : document.querySelector("#optionA").value,
    optionB : document.querySelector("#optionB").value,
    optionC : document.querySelector("#optionC").value,
    optionD : document.querySelector("#optionD").value,
    optionE : document.querySelector("#optionE").value,
    date : Date.now()
	}

	let res = confirm("please look through your work and confirm you want to submit");
	if(res){
		db.collection("basic science").add(obj)
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

function warnMe(){
	alert("you are currently working on BASIC SCIENCE notify OSE to change the subject for you")
}