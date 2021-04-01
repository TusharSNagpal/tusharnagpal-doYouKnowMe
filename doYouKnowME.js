var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name? ');

console.log('Hey '+ userName +'! Lets see how much you know about Tushar. ');

q1='Question 1: Do you know how old Tushar is(age)? ';
a1='20';

q2='Question 2: How many siblings Tushar have? ';
a2='2';

q3='Question 3: Does he want to go for post graduation?(Please use first letter capital.) ';
a3='Yes';

q4='Question 4: From where he loves to eat Garlic Bread Stick(City Name: Please use first letter capital.) ';
a4='Gurugram';

q5='Question 5: Which dish is a must at his home on Sunday(Please use proper spaces and first letter of every word capital)? ';
a5='Rajma Chawal';

var arr=[q1,a1,q2,a2,q3,a3,q4,a4,q5,a5];
var score=0;

function doYouKnow(q,a){
var userA=readlineSync.question(q);

if(userA===a)
{
  score++;
  console.log('Correct. ' + 'Score is: '+score);
}
else{
  console.log('Ah! Incorrect. Correct Answer is: '+a+ ' Score is: '+score);
}
}

for(var i=0; i<arr.length; i=i+2)
{
  doYouKnow(arr[i],arr[i+1]);
}

console.log(score + ' out of ' +5);
if(score<=2)
console.log('You dont know much about him.');

else
console.log('Yeah! You know him.');