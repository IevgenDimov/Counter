//  set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
// selecting every class that has 'btn' in it with querySeceltorAll 
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    
    // adding an event listened to each button that has a class btn.
    btn.addEventListener('click', function(e){

        // gathering the information to see which classes each button possesses. This will get you all the classes that you are clicking on.
        const styles = e.currentTarget.classList

        // if the button that I am clicking on has the class 'decrease', subtract the count by 1
        if(styles.contains('decrease')){
            count--;
            // if the button that I am clicking has the class 'increase' add 1 to the count
        } else if (styles.contains('increase')){ 
            count++;
            // and if the button that I am clicking has the class 'reset' set the count to = to 0
        }else if(styles.contains('reset')){
            count = 0;
        }
            if(count > 0) {
                value.style.color = 'green';
            }
             if ( count <= -1) {
                value.style.color = 'red'
            } 
            if (count === 0) {
                value.style.color = 'black';
            }
        // changes the content of the element with the id of 'value' with the current count value.
        value.textContent = count;
        
    });
});