'use strict';
const a = prompt('Введите цыфиры от 0 до 7 для получения информации ваших прав');
function ocLinux(a){
  switch (a){
    case "1":
      console.log('first');
    break;
    case "2":
      console.log('two');
    break;
    case "3":
      console.log('free');
    break;
    case "4":
      console.log('four');
    break;
    case "5":
      console.log('five');
    break;
    case "6":
      console.log('six');
    break;
    case "7":
      console.log('seven');
    break;
    default:
      if (a > 7 || a <= 0)
      console.log('числа выше или ниже не имеют прав');
      // if (a > 7)
      // console.log('выше нет прав')
      // else if (a <= 0)
      // console.log('ниже нет прав'); 
  }
}
ocLinux(a);

