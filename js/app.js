/*
var hotel = {
    name : "Fataga",
    location : "Gran Canaria",
    imgHotel : "https://q-cf.bstatic.com/images/hotel/max1280x900/881/88126594.jpg",
};

document.getElementById("name-hotel").innerHTML = hotel.name;
document.getElementById("location-hotel").innerHTML = "Ubicado en "+ hotel.location;
document.getElementById("img-hotel").src = hotel.imgHotel;  

var rating = prompt("Puntuación del 1 al 5: ");
document.getElementById("rating").innerHTML = rating + " Estrellas";
*/

var hoteles = {
    Fataga: {
        name: "Fataga",
        location: "Gran Canaria",
        img: 
        "https://q-cf.bstatic.com/images/hotel/max1280x900/881/88126594.jpg",
    },
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img: 
        "https://r-cf.bstatic.com/images/hotel/max1280x900/944/9444313.jpg",
    },
};


var selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: Fataga o Mencey");

document.getElementById("name-hotel").innerHTML = hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734</span>;",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación del hotel: una, dos, tres, cuatro o cinco");
document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quieres que tu reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;