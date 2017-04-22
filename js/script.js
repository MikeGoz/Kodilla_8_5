// Kodilla task 8.5

var a = prompt("Wpisz długość podstawy trójąta", 10),
    h = prompt("Wpisz wysokość trójąta", 10),
    triangleArea;

if (a > 0 && h > 0) {

   triangleArea = a * h / 2;
   console.log("Pole trójkąta o podstawie a= " + a + " i wysokości h= " + h + " wynosi: " + triangleArea);
   
} else { 
    
   alert ("Wpisz poprawną wartość!");
    
}