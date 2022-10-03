
// let JavaScript = "amazing";
// if(JavaScript === "amazing")alert("javascript is FUN!");
// console.log("jonas");
    
// let firstName = 'idrid'
// console.log(firstName);

// let java = true;

// console.log(typeof false)
// console.log(typeof jav)
// console.log(typeof 30)
// console.log(typeof "hey")

// Dynamicstyping



// let is being used for data that can be later changed



// let javascriptIsFun  = true;
// console.log(typeof javascriptIsFun)
// javascriptIsFun = "yes!"

// console.log(typeof javascriptIsFun);

// let year;
// year = "hry"
// console.log(typeof("hry"));

// console.log(typeof null);
// let age = "23"
// age = "27";
// console.log(age);

// const variable holds values that cannot be changed in the future

// const name = "kemi";
// name = 'lawal'



// oprators


// Arithmetic Operators
// const current = 2077
// const ageAzeez = current - 1990;
// const ageLawal = current - 1999;
// console.log(ageAzeez, ageLawal)

// console.log(ageAzeez%5);
// console.log(ageAzeez * 6); 

// console.log(ageAzeez+7, ageLawal *6, 3**3);

// const firstName = "moshood";
// const lastName = "Azeez";
// console.log( firstName +" "+  lastName+ " that's the name")

// typeof operators


// assignment operators

// let x = 10 + 5;
// x+=10 //which simply mean x = x+10 = 25
// x*=4  //which simply mean x = x*4 = 25
// x++;
// x--;
// console.log(x);


// comparison operator

// console.log(ageAzeez > ageLawal)//>,<,>=,<=
// console.log(ageAzeez >= 30);

// const isFullAge = ageLawal >= 60;

// console.log(current - 1990 < current - 2019);


// Operator Precedence

// const current = 2077
// const ageAzeez = current - 1990;
// const ageLawal = current - 1999;
// console.log(current - 1990 < current - 2019);


// let x,y;

// x = y = 25-10-5;
// console.log(x,y)
// const ageAverage = (ageAzeez + ageLawal) / 2
// console.log(ageAzeez,ageLawal, ageAverage);


// BMI CALCULATION

// TEXT DATA 1

// const Mark = 78 / (1.68**2);
// const John = 92 / (1.95**2);

// console.log(Mark, John);

// const markHigherBMI = Mark > John;
// console.log (markHigherBMI);

// const Marks =  95 / (1.88**2);
// const Johns =  85 / (1.76**2);

// const markHigherBMI2 = Marks > Johns;
// console.log (markHigherBMI2);

// String and Template Literals

// const firstName = "AbdulAzeez";
// const job = "Web Developer";
// const birthYear = "1999";

// const azeez = "I'm " + firstName +" " +job+ " within the age of" +(2022- birthYear);

// console.log(azeez);

// const azeezNew = `I'm ${firstName}, a ${2023-birthYear} year old ${job}!`
// console.log(azeezNew);


// console.log(`just a regular string....`);

// console.log("string \n\
// multiple\n\
// lines");

// console.log(`string
// with 
// multiple lines
// and more`);



// if or else statement cntrol structure

// const age = 16;
// const isOldEnough = age >= 18;

// if(age >= 18){
//     console.log("this user is old enough to drive a car🚗🚗")
// }else{
//     const isNotEnogh = 18 - age
//     console.log(`this user is too young he or she can wait for another ${isNotEnogh} years`)
// };


// const birthYear = 2010;
// const birth = birthYear <= 2000;
// let century;

// if(birth){
//     century = 20;
// }else{
//     century = 21
// }

// console.log(century)

// coding challenge 2

// const Mark = 78 / (1.68**2);
// const John = 92 / (1.95**2);



// const markHigherBMI = Mark > John;
// console.log (Mark, John, markHigherBMI);

// // one

// if (markHigherBMI){
//    console.log(`Mark has the higher`);
// }else{
//     (`john wins`)
// }


// TEMPLATE LIETRALS


// console.log(`Mark's BMI (${Mark}) is higher than john's BM1 (${John})!`)

// type conversion and coercion

        //  DEFINITION
        // 👇👇👇
// type conversion is when we
//  manually convert  from one type to another
// converting string to number

// changing from string to number

// const inputYear = "1991";
// console.log (Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18 );


// console.log(Number("janas"));

// changing fom number to srting

// console.log(String(23), 23);

// changing from boolean to String

// console.log(String(true), true)

    //    SECOND DEFINITION

// Type coercion is when
//  javascript aut0matically convert
//   the types behind the scenes for us

// console.log("I'm " +23+ " years age");

// javaScript do ignore other operators other than the plus sign

// console.log("23"-"10"-"3");
// console.log("23"+"10"-"3");

// console.log("4"+7+10);

// let n = "1" + "1";
// n = n - 1;
// console.log(n);


// THE TRUTH AND FALSY VALUES

//  ARE VALUES THAT
//  ARE NOT EXATCLY FALSE BUT WOULD BECOME FALSE
//  WHEN WE ARE CONVERTING THEM INTO BOOLEAN

// 5 FALSY VALUES ;
// THEY ARE 0,'',undefined, NULL, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean('JONAS'));
// console.log(Boolean({}));

// const money = 0;

// if (money){
//     console.log(`try to keep your money safe`);
// }else{
//     console.log(`you need to work fo more` )
// }

// let height;

// if (height){
//     console.log(`YAY! height is defined`);
// }else{
//     console.log(`height is UNDEFINED`)
// }

// const age = 10;
// if (age === 10)console.log('you still a boy')
// if (age == 10)console.log('you still a boy oooo')

// const favourite = Number(prompt("what is favorite yynumber"));

// console.log(typeof favourite);

// if (favourite === 23){
//     console.log("cool 23 is an amazing numb");
// }else if(favourite === 6){
//     console.log("this is also a cool number");
// }
// else{
//     console.log("not an amazing numb");
// }

// if (favourite !== 23)console.log("why not 23");



// BASIC BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = true;


// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);



// if(hasDriversLicense && hasGoodVision && isTired){
//     console.log("this person should drive")
// }else{
//     console.log("Another individual should drive")
// };

// if(hasDriversLicense || hasGoodVision || isTired){
//     console.log("this person should drive")
// }else{
//     console.log("Another individual should drive")
// };


// if(!hasDriversLicense){
//     console.log("this person should drive")
// }else{
//     console.log("Another individual should drive");
// };

// console.log(hasDriversLicense &&
// hasGoodVision && !isTired);


// // third coding challenge

// const Dolphins = (96 + 108 +89) / 3;
// const Koalas = (88 + 91 +110) / 3;

// console.log(Dolphins, Koalas);

// if (Dolphins > Koalas) {
//     console.log("Dolphins WINS!✌️");
// } else if (Dolphins < Koalas){
//     console.log("koalas WINS!✌️");
// }else{
//     console.log("DRAW!");
// }


// BONUS1

// const dolphinsBonus = (97 + 112 +101) / 3;
// const koalasBonus = (109 + 95 +123) / 3;
// const minimumScore = 100

// console.log(dolphinsBonus, koalasBonus);

// if (dolphinsBonus > koalasBonus &&  dolphinsBonus >= 100){
//     console.log(`DOLPPHIN WINS🏆🏆`);
// }else if(dolphinsBonus < koalasBonus &&  koalasBonus >= 100){
//     console.log(`KOALAS WINS🏆🏆`);
// }else if (dolphinsBonus && koalasBonus <= 100){
//     console.log("DRAW");
// }

// const dolphinsBonus2 = (97 + 112 +101) / 3;
// const koalasBonus2 = (109 + 95 +106) / 3;
// const minimumScore2 = 100

// console.log(dolphinsBonus2, koalasBonus2);

// if (dolphinsBonus2 === dolphinsBonus){
    // console.log(`DRAW 🏆🏆`);
//  if (dolphinsBonus && koalasBonus >= 100){
//     console.log("DRAW");
// }


// THE SWITCH STATEMENT'; is technically meant to check
// equalities

// const day = 'tuesday';

// switch(day){
//     case'monday':
//     console.log('Plam Course structure')
//     console.log('Go to coding meetup')
//     break;

//     case 'tuesday':
//     console.log('prepare theoy videos');
//     break;

//     case 'wednesday':
//     case 'thursday':
//     console.log('write code examples');
//     break;

//     case 'friday':
//     console.log('record videos')
//     break;

//     case 'saturday':
//     case 'sunday':
//     console.log('enjoy the weekend');

//     default:
//     console.log("this is not actually part of the week")
// }


// ACCOMPLISHING THIS WITH IF AND ELSE STATEMENT

// const days = 'wednesday' || 'thursday';

// if (days === 'mondays'){
//     console.log('Plam Course structure')
//     console.log('Go to coding meetup')
// }else if(days === 'tuesday'){
//     console.log('prepare theoy videos');
// }else if(days === 'wednesday' || days === 'thursday'){
//     console.log('write code examples');
// }else if (days === 'friday'){
//     console.log('record videos');
// }else if(days === 'saturday' && days === 'sunday'){
//     console.log('enjoy the weekend guys');
// }else{
//     console.log('this is not a day of the week')
// };


// STATEMENTS AND EXPRESSION

// EXPRESSION IS A PIECE OF CODE,
// THAT PRODUCES A VALUE
// E.G: 3-2; 1991, ......

// STATEMENTS
// IS A BIG PIECE OF CODE THAT IS
//  EXECUTED AND WHICH DONT 
// PRODUXCE A VALUE  ON ITSELF


// THE CONDITIONAL(TERNARY)OPERATOR
const age = 23;
// age >= 45? console.log("i love taking soft drinks"):
// console.log("i love taking water");
// let yearOld;

// if (age >= 34){
//     yearOld = "i love drinking wine";
// }else{
//     yearOld = "i love drinking tea";
// };

// console.log(yearOld);

const yearOld = age >= 4 ? 'i love drinking wine': 'i love drinking tea';

console.log(yearOld)
// const drink = age >= 34 ? 'soft drinks' : 'water';

// console.log(drink);

// let drink2;

// if (age >= 34){
//     drink2 = 'wine🍷';
// }else{
//     drink2 = 'water💦';
// };
// console.log(drink2);

// console.log(`I like to take ${ age >= 34 ? 'soft drinks' : 'water'}`);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.
 In his country, it's usual to tip 15% if the bill value is between 50 and 300.
  If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅
 (If it's easier for you, you can start with an if/else statement,
  and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, 
and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and 
the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill*2;
// console.log(tip);
// console.log(`The bill was ${bill} the tip was ${tip}, and the total value ${bill + tip} `);

// let tips;

// if (bill <= 300 && bill>= 50){
//     tips = "the tip value is " +bill * 0.15; 
// }else{
//     tips = "the total is " + bill * 2;
// };

// console.log(`the bill value is ${bill}, and the tip value is ${tip} and the total value is ${bill + tip}!`);
bill = 380;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2;

console.log(`The bill value is ${bill}, and the tip value is ${tip} and the total value is now ${bill + tip}`);
