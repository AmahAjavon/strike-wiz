'use strict';

$(document).ready(init);

var diceRolls = [];
var newDice;
var numbers = [];
var sum = 0;
var total = 0;
var timer;

function init() {

  $('.output').html('Roll the dice and add the right numbers');

  var rolled = false;
  $('.num').prop('disabled', true);
  $('#answer').prop('disabled', true);

  $('.reset').click(function() {
    $('.num').prop('disabled', true);
    rolled = false;
    $('#result').html("0");
    $('.screen').text('');
    $('.num').removeClass('selected');

    $('.num').val('');
    sum = 0;
  });

  $('.roll').click(function() {
    rolled = true;

    newDice = Math.floor(Math.random()*11) +2;
    diceRolls.push(newDice);
    total += diceRolls[diceRolls.length -1];
    $('.output').html('');
    $('#result').html(newDice);

    $('.num').prop('disabled', false);
    $('#answer').prop('disabled', false);
  });
}

// $('.num').prop('disabled', true);
$('.keys').on('click', '.num:not(.selected)', function() {

  $(this).addClass('selected');
  $(this).prop('disabled', true);
  $('#answer').prop('disabled', false);

  var clickVal = $(this).text();
  var screenVal = $('.screen').text();

  var totalVal = screenVal + clickVal;

  $('.screen').text(totalVal);
  var inp = parseInt(clickVal);
  sum += inp;

  if ($('#one').hasClass('selected') && $('#two').hasClass('selected') && $('#three').hasClass('selected')
  && $('#four').hasClass('selected') && $('#five').hasClass('selected') && $('#six').hasClass('selected')
  && $('#seven').hasClass('selected') && $('#eight').hasClass('selected') && $('#nine').hasClass('selected') && (sum === newDice)) {
    $('.output').html('Congratulations, You are a Strike Wiz!');
    $('.num').prop('disabled', true);
    $('#answer').prop('disabled', true);
    $('.roll').prop('disabled', true);
  }
});

$('#answer').click(function() {
  $('.screen').text('');

  if (sum === newDice) {
    $('.output').html('Good, roll again!');
  } else {
    $('.output').html('Wrong addition, try again! Roll!');
    $('.num').removeClass('selected');
    // $('.num').prop('disabled', true);
  }
  $('.num').prop('disabled', true);
  $('#result').html("0");
  sum = 0;

});
