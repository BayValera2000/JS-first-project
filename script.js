alert("Hello dear user! Thank you for visiting my site. I would like to collect some information about you so that I can improve my site in the future, taking into account all categories of visitors.")
let nam = prompt("Enter your name", "");
let age = prompt("Enter your age", "");
let jender = prompt("Enter your jender", "");
let country = prompt("Enter your country", "");
let source = prompt("How did you know about my site", "");
confirm(`Your name: ${nam}\nYour age: ${age}\nYour jender: ${jender}\nYour country: ${country}\nHow did you know about my site: ${source}\n If the information is incorrect - reload the web page to re-enter the information.`)