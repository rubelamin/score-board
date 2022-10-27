let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeCount = 0;
function add1PointHome() {
	let res = homeCount + 1;
	homeScore.textContent = res;
	homeCount = res;
}

function add2PointHome() {
	let res = homeCount + 2;
	homeScore.textContent = res;
	homeCount = res;
}

function add3PointHome() {
	let res = homeCount + 3;
	homeScore.textContent = res;
	homeCount = res;
}

let guestCount = 0;
function add1PointGuest() {
	let res = guestCount + 1;
	guestScore.textContent = res;
	guestCount = res;
}

function add2PointGuest() {
	let res = guestCount + 2;
	guestScore.textContent = res;
	guestCount = res;
}

function add3PointGuest() {
	let res = guestCount + 3;
	guestScore.textContent = res;
	guestCount = res;
}