console.log('asdf');

// Total updating function

function sum_table() {
  console.log('123');

  var total = 0;
  var price;
  var number;

  // Loop over table
  $('.price_row').each(
      price = $(this).val();
      number = Number(price.replace(/[^0-9\.-]+/g,""));
      total = total + number;
    )


  // Format the price
  total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  console.log(total);
  return total;


}



$(document).ready(function() {
    console.log('Trying to do something');
    $('.form-check-input').each(
      $(this).change(function() {
        console.log('asdf');
        sum_table();
        $('#total-label').val(sum_table());
    }));
});
