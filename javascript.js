function checkPrime() {
    let numbers=document.getElementById("numbers").value;
    let count=0;
    let N=2;
    while (count < numbers){
        let flag=1;
        for (let i=2;i<=Math.sqrt(N);i++){
            if(N%i==0){
                flag=0;
                break;
            }
        }
        if (flag==1){
            document.write(N+" ");
            count++;
        }
        N++;
    }
}