# Projects related to DOM

## projectlink
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code 

## project 1

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id==='grey'){
       body.style.backgroundColor='grey'
     }
     if(e.target.id==='white'){
      body.style.backgroundColor='white'
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor='blue'
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor='yellow'
    }
  })
})

```

## project 2 solution

```javascipt

const form = document.querySelector('form');

// this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // show the result 
    
    let category = '';

    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi > 24.9) {
      category = 'Overweight';
    } else {
      category = 'Normal Range';
    }

    results.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
  }

});


```

## project 3 sol code 

```javascript

const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')



// isko har bar call karna hai
// Interview

setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);// for every second

```
