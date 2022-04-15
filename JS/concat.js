/**
 * Created by 30697 on 12-Jan-22.
 */
var you = prompt("Enter your name", "");
var yourAge = prompt("Enter your age in months", "");
yourAge = parseInt(yourAge)/12;
var msg = "Thank you ";
document.writeln(msg.concat(you));
you = you + " ";
var result = you.concat(yourAge);
var result = you.concat(yourAge, "Thanks");
document.writeln(result);