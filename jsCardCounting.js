var count = 0;

function cc(card) {
switch(card){

  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count= count + 1;
    break;

  case 7:
  case 8:
  case 9:
    count= count + 0;
    break;

  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count= count - 1;
    break;

}

var hand
if (count > 0) {
  hand ='Bet';
} else if (count <= 0) {
  hand ='Hold';
}
  return count + " " + hand;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
