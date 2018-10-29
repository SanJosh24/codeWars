function encodeResistorColors(ohmsString) {
  let val = ohmsString.split(" ")[0].replace(/[^a-z]/gi, '');
  let num = parseFloat(ohmsString.split(" ")[0].replace(/[a-z]/gi, ''));
  let numberValue=1;
  switch (val) {
      case 'k':
          numberValue = num * 1000;
          break;
      case 'M':
          numberValue = (num * 1000000).toFixed(0);
          break;
      case '':
          numberValue = num;
          break;
  }
  
  let powValue = "";
  if(numberValue.toString().length ==2)powValue = "black";
  else if(numberValue.toString().length ==3)powValue = "brown";
  else if(numberValue.toString().length ==4)powValue = "red";
  else if(numberValue.toString().length ==5)powValue = "orange";
  else if(numberValue.toString().length ==6)powValue = "yellow";
  else if(numberValue.toString().length ==7)powValue = "green";
  else if(numberValue.toString().length ==8)powValue = "blue";
  else if(numberValue.toString().length ==9)powValue = "violet";
  return(colorCode[numberValue.toString()[0]]+" "+colorCode[numberValue.toString()[1]]+" "+powValue+" "+"gold");
}

let colorCode = "black brown red orange yellow green blue violet gray white".split(" ");