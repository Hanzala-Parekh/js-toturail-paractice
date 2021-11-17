/* Greater Than If Else Condition */
var a = 15;
      
if (a > 30) {
    document.write("A is Greater");
}else {
    document.write("A is smaller"); 
}
document.write("<br><br>");

/* Equal to If Else Condition */
var x = 100;

if (x == 100) {
    document.write("X is Same");
}else {
    document.write("X is not smaller");
}
// second work

 /* If Else IF Condition */
 document.write("<br><br>");
 var per = prompt("Enter your Percentage : ");

 if (per >= 80 && per <= 100) {
     document.write("You are in Merit.");
 }else  if (per >= 60 && per < 80) {
     document.write("You are in Ist Division.");
 }else if (per >= 45 && per < 60) {
     document.write("You are in IIst Division.");
 }else if (per >= 33 && per < 45) {
     document.write("You are in IIIst Division.");
 }else if (per < 33) {
     document.write("You are Fail.");
 }else {
     document.write("Please Enter Valid Percentage.");  
 }