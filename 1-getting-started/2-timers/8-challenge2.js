// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

for(let i=0; i<=5; i++){
    let count = 0;
    if(i < 5){
        count++;
        console.log('Hello World');
    }else if (i === 5){
        console.log('Done')
        break;
    }
}