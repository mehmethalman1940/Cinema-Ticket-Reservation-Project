const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)" );



container.addEventListener("click", function(e){
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");

        calculateTotal();

        
    }
});

select.addEventListener("change", function(e){
    calculateTotal();
})

function calculateTotal(){
    let selectedSeats = container.querySelectorAll(".seat.selected");
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
        
    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    })
        count.innerHTML = selectedSeatCount;      
        let price = select.value;
        amount.innerText = price*selectedSeatCount; 
}