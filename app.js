const getBtn = document.querySelector("#ip-btn");
const ispDetails = {};
let ip = document.querySelector("#ip");
let ltn = document.querySelector("#ltn");
let timeZone = document.querySelector("#utc");
let isp = document.querySelector("#isp");

let myMap;

let mapIcon = L.icon({
	iconUrl: "images/icon-location.svg",
	iconSize: [46, 56],
	iconAnchor: [22, 56],
	popupAnchor: [-3, -76],
});

const getISPAddress = async () => {
	const response = await fetch(
		"https://geo.ipify.org/api/v1?apiKey=at_0bBrgwfV3xLvGgdardUTtYSR6fgyD"
	);
	const json = await response.json();
	ispDetails["ip"] = json.ip;
	ispDetails["location"] = {
		city: json.location.city,
		country: json.location.country,
	};
	ispDetails["timeZone"] = json.location.timezone;
	ispDetails["isp"] = json.isp;
	ip.innerHTML = ispDetails["ip"];
	ltn.innerHTML = `${ispDetails["location"]["city"]}, ${ispDetails["location"]["country"]} `;
	timeZone.innerHTML = ispDetails["timeZone"];
	isp.innerHTML = ispDetails["isp"];

	myMap = L.map("mapid").setView([json.location.lat, json.location.lng], 17);
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 20,
		attribution:
			'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
	}).addTo(myMap);

	let marker = L.marker([json.location.lat, json.location.lng], {
		icon: mapIcon,
	}).addTo(myMap);
};

const searchISPAddress = async () => {
	const ipAddress = document.querySelector("#search");
	myMap.remove();
	try {
		const response = await fetch(
			`https://geo.ipify.org/api/v1?apiKey=at_0bBrgwfV3xLvGgdardUTtYSR6fgyD&domain=${ipAddress.value}`
		);
		if (response.status === 422) throw alert("Invalid domain/IP address used");
		const json = await response.json();
		ispDetails["ip"] = json.ip;
		ispDetails["location"] = {
			city: json.location.city,
			country: json.location.country,
		};
		ispDetails["timeZone"] = json.location.timezone;
		ispDetails["isp"] = json.isp;
		ip.innerHTML = ispDetails["ip"];
		ltn.innerHTML = `${ispDetails["location"]["city"]}, ${ispDetails["location"]["country"]} `;
		timeZone.innerHTML = ispDetails["timeZone"];
		isp.innerHTML = ispDetails["isp"];

		myMap = L.map("mapid").setView([json.location.lat, json.location.lng], 17);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 20,
			attribution:
				'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
		}).addTo(myMap);
		let marker = L.marker([json.location.lat, json.location.lng], {
			icon: mapIcon,
		}).addTo(myMap);
	} catch (err) {
		console.log(err);
	} finally {
		ipAddress.value = "";
	}
};

getISPAddress();

getBtn.addEventListener("click", searchISPAddress);
