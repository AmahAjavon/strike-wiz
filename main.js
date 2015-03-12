'use strict';

$(document).ready(init);

var diceRolls = [];
var newDice;
var numbers = [];
var sum = 0;
var total = 0;
var timer;

function init() {

  var rolled = false;

  $('.reset').click(function() {
    rolled = false;
    $('#result').html("0");
    $('.screen').text('');
    $('.keys').removeClass('selected');
    $('.num').val('');
    sum = 0;
  });

  $('.roll').click(function() {
    rolled = true;

    newDice = Math.floor(Math.random()*12) +1;
    diceRolls.push(newDice);
    total += diceRolls[diceRolls.length -1];
    $('#result').html(newDice);
  });

  $('.keys').on('click', '.num', function() {

    $(this).addClass('selected');
    var clickVal = $(this).text();
    var screenVal = $('.screen').text();

    console.log('clickVal: ' + clickVal);
    console.log('screenVal: ' + screenVal);

    var totalVal = screenVal + clickVal;

    console.log('totalVal: ' + totalVal);
    $('.screen').text(totalVal);
    var inp = parseInt(clickVal);
    sum += inp;
    if (!clickVal) {
      $('.output').html('Roll the dice and add the right numbers');
      $('.output').delay(2000).hide(1);
    }
  });

  $('#answer').click(function() {
    $('.keys').removeClass('selected');
    $('.screen').text('');
    if (sum !== newDice) {
      $('.output').html('Wrong addition, try again!');
      $('.output').delay(2000).hide(1);
      $('#result').html("0");
      sum = 0;
    } else {
      $('.output').html('Good, roll again!');
      $('.output').delay(2000).hide(1);
      $('#result').html("0");
      sum = 0;
    }

  });

}
