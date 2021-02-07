//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function ResistorColor(number="2") {
  switch (number) {
    case '0':
      return 'Black';
      break;

    case '1':
      return 'Brown';
      break;
    case '2':
      return 'Red';
      break;
    case '3':
      return 'Orange';
      break;
    case '4':
      return 'Yellow';
      break;
    case '5':
      return 'Green';
      break;
    case '6':
      return 'Blue';
      break;
    case '7':
      return 'Violet';
      break;
    case '8':
      return 'Grey';
      break;
    case '9':
      return 'White';
      break;

    default:
      return 'write a color between 0 and 9 please';
      break;
  }
}

ResistorColor();

