function loadPayment(){

document.getElementById("movie").innerHTML =
localStorage.getItem("movie");

document.getElementById("showTime").innerHTML =
localStorage.getItem("showTime");

document.getElementById("seat").innerHTML =
localStorage.getItem("seat");

document.getElementById("price").innerHTML =
localStorage.getItem("price");

document.getElementById("price2").innerHTML =
localStorage.getItem("price");

}

function paymentSuccess(){

alert("Payment Successful!");

window.location.href="ticket.html";

}

function loadTicket(){

document.getElementById("movie").innerHTML =
localStorage.getItem("movie");

document.getElementById("showTime").innerHTML =
localStorage.getItem("showTime");

document.getElementById("seat").innerHTML =
localStorage.getItem("seat");

document.getElementById("price").innerHTML =
localStorage.getItem("price");

// Random Booking ID
let id = "NT" + Math.floor(100000 + Math.random() * 900000);

document.getElementById("bookingId").innerHTML = id;

}

function selectMovie(movie, time) {
    localStorage.setItem("movie", movie);
    localStorage.setItem("showTime", time);
    window.location.href = "seats.html";
}

function selectSeat(seat){

    document.querySelectorAll(".seat").forEach(function(s){
        s.classList.remove("selected");
    });

    seat.classList.add("selected");

    localStorage.setItem("seat", seat.innerHTML);
    localStorage.setItem("price", "250");
}

function continueBooking(){

    if(localStorage.getItem("seat")==null){

        alert("Please select a seat");

        return;
    }

    window.location.href="payment.html";

}