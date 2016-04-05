// Business Logic
function Ticket(movie, time, age) {
  this.movieKey = movie;
  this.timeKey = time;
  this.ageKey = age;
}
var priceByTimeAge = function(timeInput){
  if (timeInput === "10am" || ageInput === "60+"){
   ticketPrice = "5";
 } else {
  ticketPrice = "10";
}
};
// var priceByAge = function(ageInput){
// if (ageInput === "60+"){
//   ticketPrice = "5";
// } else {
//   ticketPrice = "10";
// }
// };
  // user interface logic
  $(document).ready(function() {
  $("form.movie-ticket").submit(function(event) {
    event.preventDefault();
debugger
    var movieInput = $("#movie").val();
    var timeInput = $("#time").val();
    var ageInput = $("#age").val();
    var price = priceByTimeAge();


    console.log(price);



    var newTicket = new Ticket(movieInput, timeInput, ageInput);



      $("ul#price").append("<li><span class='contact'>" + newTicket + "</span></li>");

  });
});
