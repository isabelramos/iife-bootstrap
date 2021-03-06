var donorContainer = document.getElementById("donor-container");
var showRecentDonors= document.getElementById("recent-donors");
var donorTable = document.getElementById("table");
var nameUserInput = document.getElementById("input-name");
var emailUserInput = document.getElementById("input-email");
var amountUserInput = document.getElementById("input-amount");
var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

DonorInfo.defaultDonorInfo();

function submitDonationInfo () {
	if (nameUserInput.value === "" || emailUserInput.value === "" || amountUserInput.value === "") {
		alert("Please fill in all of the text fields!");
	} else {
		var newDonor = {
			name: nameUserInput.value, 
			pledge: amountUserInput.value
		};
		DonorInfo.setNewDonorInfo(newDonor);
		nameUserInput.value = "";
		emailUserInput.value = "";
		amountUserInput.value = "";
		printArrayToDom();
	}
};

function printArrayToDom () {
	var recentDonorsArray = DonorInfo.getDonorInfo();
	var donorString = "";

	for (var i=0; i < recentDonorsArray.length; i++) {
		donorString += `<tr>`;
		donorString += `<td>${recentDonorsArray[i].name}</td>`;
		donorString += `<td>${recentDonorsArray[i].pledge}</td>`;
		donorString += `<td><span class="glyphicon glyphicon-usd" aria-hidden="true"></span></td>`;
		donorString += `</tr>`;
	}

	showRecentDonors.innerHTML = donorString;
};

donateButton.addEventListener("click", function(){
    submitDonationInfo();
});

cancelButton.addEventListener("click", function(){
		nameUserInput.value = "";
		emailUserInput.value = "";
		amountUserInput.value = "";
});

window.addEventListener("load", printArrayToDom);










