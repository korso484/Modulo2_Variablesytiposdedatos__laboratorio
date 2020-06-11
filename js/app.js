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

var anonymous = confirm("¿Quieres que tu reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;

