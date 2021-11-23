function hello() {
    document.write("Hello Everybody");
}
function yahoo() {
    document.write("Yahoo Baba");
}

hello(); 
document.write("</br>"); 
yahoo();
document.write("</br>");
hello();
document.write("</br>"); 
hello();
// function with parameter
/* Functions With Parameters*/
function hello(fname= "Yahoo",lname= "Baba") {
    document.write("Hello" + fname + " " + lname + "<br>");
}
    
hello("Ram","Singh");
hello("Salman", "Khan");
// funtction with return
function sum(math,eng,sc){
    var s = math + eng + sc;

    return s;
  }

  function percentage(tt){
     var per = tt/300 * 100;
     document.write(per);
  }

  var total = sum(80,80,80);

  percentage(total);
  function fullname(fname = "Yahoo", lname = "Baba") {
    var a = fname + " " + lname;

    return a;
}

var fn = fullname("Ram","Singh");
document.write(fn);