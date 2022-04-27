// let invert = document.createElement('div');
// let balls;

// let grid = document.createElement('section');
// invert.classList.add('invert-pic');

// const teams = ['ballbag', 'cunts', 'the blues', 'the shit ones']
// teams.push("fuckers");
// teams[1] = "TWATS";

// console.log(teams)


const quotes = ['Lifes a beach...', 'Clam Records, dont be a fish...', 'Strictly Shellerz', 'Hard times make hard clams, soft times make soft clams', 'I say Clam, you say Chowder', 'Why couldn\'t the clam make new friends?... It\'s not because she was too selfish, i think she just never opened up' ];
// document.createElement('p');
// quotes.classList.add('quote-para');
// document.querySelector('.quote-para').innerHTML = `url(${quotes[i]})`;



// quotes.sort(function() {
//     return Math.random().innerHTML = quotes;
// })

// let result = ['']
// for (i = 0; i < quotes.length; i++) {
//     result.push(quotes[i]);

// }

// let returnResult = Math.floor()
// let result = quotes.map(function(arr) {
//     return arr;

// })
// console.log([result])

const randomElement = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote-para").innerHTML = randomElement;

console.log(randomElement)




// let print = document.createElement('p');
// print.classList.add('quote-p');
// document.querySelector('.quote-p').innerHTML = result;






const func1 = () => {
    document.querySelector('.logo').style.display = "none";
    document.querySelector('.invert-pic').style.display = "block";
    document.querySelector('.main').style.backgroundColor = "black";
    document.querySelector('.inner-main').style.justifyContent = "flex-start";
    document.querySelector(".BUTTON_WXJ").style.display = "none"
    document.querySelector(".navbar").style.backgroundColor = "black"
    document.querySelector("#quote-para").style.display = "none"



}

const myFunction = () => {
    console.log("balls")
    let x = document.getElementById("myTopNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar"
    }
};

