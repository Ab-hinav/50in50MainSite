

class Counter {
    constructor() {
        this.counter = 0;
    }

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    getCounter() {
        return this.counter;
    }

}
const MarkBtns = document.querySelectorAll('.mark');

const counter = new Counter();
calcAndUpdateProgressBar();


MarkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains('marked')){
            counter.decrement();
            updateProgressBar()
            updateNumber();
            e.target.classList.remove('marked');
           
            e.target.innerHTML = 'Mark As Done';
        }else{
            counter.increment();
            updateProgressBar();
            updateNumber();
            e.target.classList.add('marked');
            
            e.target.innerHTML = 'UnMark';
        }
    })
    });

function calcAndUpdateProgressBar(){
    let val =0
    MarkBtns.forEach(btn => {
        if(btn.classList.contains('marked')){
            val++;
        }
    });
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${val * 10}%`;
}

function updateProgressBar(){
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${counter.getCounter() * 2}%`;
    console.log(progressBar.style);
}

function updateNumber(){
    const numOfDone = document.getElementById('projDone');
    numOfDone.innerHTML = counter.getCounter();
}