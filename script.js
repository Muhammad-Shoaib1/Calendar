// Get the current date
const today = new Date();

// Get the individual parts of the date
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


document.querySelector(".date").textContent = date;
document.querySelector(".day").textContent = days[day];
document.querySelector(".month").textContent = months[month];
document.querySelector(".year").textContent = year;
