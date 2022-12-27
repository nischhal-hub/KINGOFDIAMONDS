
//kod();
let btn = document.querySelector("button");
btn.addEventListener('click',function kod(){
    let s1 = Number.parseInt(prompt("User 1:\n "+"Enter your guess between 0-100: "));
    let s2 = Number.parseInt(prompt("User 2:\n "+"Enter your guess between 0-100: "));
    let s3 = Number.parseInt(prompt("User 3:\n "+"Enter your guess between 0-100: "));
    let s4 = Number.parseInt(prompt("User 4:\n "+"Enter your guess between 0-100: "));
    let s5 = Number.parseInt(prompt("User 5:\n "+"Enter your guess between 0-100: "));
    let arr = [s1,s2,s3,s4,s5];
    function doubleChecker(arr){
        let flag = 0;
        for(i=0;i<5;i++){
            for(j=i+1;j<5;j++){
                if(arr[i]==arr[j]){
                    flag = 1;
                }
            }
        }
        return flag;
    }
    
    if(doubleChecker(arr)==1){
        alert(`2 or more users have entered same number. The game is draw\nReload the game`);
    }
    else{
        let avg = (s1 + s2 + s3 + s4 + s5)/5;
        let finalValue = avg * 0.8;
    
        let valueCalc = (finalValue,s)=>{
            if((s-finalValue)<0)
                return -(s-finalValue);
            else 
                return (s-finalValue);
        }
        let a1 = valueCalc(finalValue,s1);
        let a2 = valueCalc(finalValue,s2);
        let a3 = valueCalc(finalValue,s3);
        let a4 = valueCalc(finalValue,s4);
        let a5 = valueCalc(finalValue,s5);
        //let arr = [a1,a2,a3,a4,a5];
        //console.log(arr);
    
        let winnerNum = Math.min(a1,a2,a3,a4,a5);
        console.log(winnerNum);
        function winner(num,finalValue,value){
            alert("User "+num+" won the match\n"+"The correct number :: "+finalValue+"\n"+"User "+num+" choice:: "+value);
        }
        if(winnerNum == a1){
            winner(1,finalValue,s1);
            alert(`Other:\nUser 2 = ${s2}\nUser 3 = ${s3}\nUser 4 = ${s4}\nUser 5 = ${s5}`)
        }
        else if(winnerNum == a2){
            winner(2,finalValue,s2);
            alert(`Other:\nUser 1 = ${s1}\nUser 3 = ${s3}\nUser 4 = ${s4}\nUser 5 = ${s5}`)
        }
        else if(winnerNum == a3){
            winner(3,finalValue,s3);
            alert(`Other:\nUser 1 = ${s1}\nUser 2 = ${s2}\nUser 4 = ${s4}\nUser 5 = ${s5}`)
        }
        else if(winnerNum == a4){
            winner(4,finalValue,s4);
            alert(`Other:\nUser 1 = ${s1}\nUser 2 = ${s2}\nUser 3 = ${s3}\nUser 5 = ${s5}`)
        }
        else{
            winner(5,finalValue,s5);
            alert(`Other:\nUser 1 = ${s1}\nUser 2 = ${s2}\nUser 3 = ${s3}\nUser 4 = ${s4}`)
        }
    }
});