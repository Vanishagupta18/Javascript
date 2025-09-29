const form = document.querySelector('form')
// this below usecase will give you empty values
// const height = parseInt(document.getElementById('height').value);
form.addEventListener('submit', function(e) 
    {
        e.preventDefault();

        const age = document.getElementById('age').value;
        const weight = parseInt(document.getElementById('weight').value);
        const height = parseInt(document.getElementById('height').value);
        const results = document.getElementById('results');

        if (weight === '' || height === '') {   //height<0 || isNaN(height)
            results.innerHTML = 'Please fill in all fields';
        }
        else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
           
            //show the result
            results.innerHTML = `<h3>Your BMI is: ${bmi}</h3>`;
             if(bmi < 18.6){
                results.innerHTML += `<h3>You are Under Weight</h3>`;
            }
            else if(bmi >= 18.6 && bmi < 24.9){
                results.innerHTML += `<h3>You are Normal Weight</h3>`;
            }
            else{
                results.innerHTML += `<h3>You are Over Weight</h3>`;
            }
        }
    });