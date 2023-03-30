let sizes = [7340, 2117, 22300, 31700, 1679, 1014, 2300, 9910, 685];

let largest = Math.max(...sizes);
let smallest = Math.min(...sizes);
let difference = largest - smallest;

document.getElementById("result").innerHTML = "largest lake in sq mi: " + largest + "<br>" +
                                               "10th largest lake in sq mi: " + smallest + "<br>" +
                                               "difference between lakes in sq mi: " + difference;
