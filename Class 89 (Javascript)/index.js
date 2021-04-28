// const str="45"
// const num=45
// const bool=1;

// const number=Number(str)
// const string=String(num)
// const bool2=Boolean(bool)
// console.log(number,string,bool2)
// console.log(typeof number,typeof string,typeof bool2)

// const number=parseInt(str);
// const string=num.toString();

// Falsy value
// console.log(Boolean(" "))
// console.log(Boolean(1))
// console.log(Boolean("null"))
// console.log(Boolean("undefined"))
// console.log(Boolean("NaN"))
// console.log(Boolean(-10))
// console.log(Boolean(0*0))
// console.log(Boolean(0.0))
// console.log(Boolean("so"))
// console.log(Boolean(0n))

// console.log(Boolean (document.all))

// Truthy Value
// const obj={
//     name:"rasel"
// }
// console.log(Boolean(true))
// console.log(Boolean(obj))
// console.log(Boolean([]))
// console.log(Boolean(42))
// console.log(Boolean("0"))
// console.log(Boolean(false.toString()))
// console.log(Boolean(2n))
// console.log(Boolean(3.444))
// console.log(Boolean(-2525))
// console.log(Boolean(Infinity))
// console.log(Boolean(-(1/0)))
// console.log(-(1/0))



// Operators
    // 1.Arithmetic
    // const num1=5
    // const num2=10
    // console.log(num1+num2)
    // console.log(5-5)
    // console.log(5*5)
    // console.log(5/5)
    // console.log(5**2)
    // console.log(24%5)

//increment and dicrement
    // let a=5;
    // // a++ => a+1;
    // // Post Increment
    // console.log(a++) // a=5
    // console.log(a++) // a=5+1;
    // console.log(a) //a=6+1
    // console.log(a) //a=7
    // console.log(a) // a=7
    // console.log(a++) //a=7 
    // console.log(a) //a=7+1
    // Pre Increment
    // ++b => b+1;
    // let b=5;
    // console.log(++b) // b=b+1;=> 6
    // console.log(++b) //b=b+1; => 7
    // console.log(++b) //b=b+1 => 8
    // console.log(b++) //b=8
    // console.log(++b) //b=8+1 => 9+1=10

//dicrement
    // post dicrement
    // c-- => c-1;
    // let c=1;
    // console.log(c--) // second time dicrement
    // console.log(c) // second time dicrement result=> c=c-1;
    // console.log(c--)
    // console.log(c) // c=c-1; c=4-1; c=3

    // pre dicrement
    // --c => c-1;
    // console.log(--c) //first dicrement=> c=c-1;c=5-1;c=4
    // console.log(--c) //c=c-1;c=4-1;c=3
    // console.log(c--) // c=3
    // console.log(--c) //c=c-1;c=3-1;c=2
    // console.log(--c)
    // console.log(--c)
    // console.log(--c)

// increment and dicrement mixed
    // let d=5;
    // console.log(d++) //d=5
    // console.log(d++) //d=d+1; d=5+1; d=6;
    // console.log(++d) //d=d+1+1; d=6+1+1; d=8
    // console.log(d++) //d=8
    // console.log(d) //d=d+1; d=8+1;d=9
    // console.log(--d) //d=d-1;d=9-1;d=8;
    // console.log(d--) //d=8
    // console.log(d) //d=d-1;d=8-1;d=7
    // console.log(++d) //d=d+1;d=7+1;d=8

    // 2.Assignment
    // =,+=,-=,/=,*=,%=
    // let a=5;
    // // let result=a+=2; // a=a+2;
    // console.log(a+=2) // a=a+2;a=5+2;a=7;
    // console.log(a+=3) //a=a+3;a=7+3;a=10
    // console.log(a-=2) //a=a-2;a=10-2;a=8;
    // console.log(a-=5) // a=a-5;a=8-5;a=3;
    // console.log(a*=3) // a=a*3; a=3*3;a=9;
    // console.log(a/=3) // a=a/3; a=9/3;a=3;
    // console.log(a+=6) // a=a+6; a=3+6;a=9;
    // console.log(a%=3) // a=a%3; a=9%3; a=0
    // a+=2
    // console.log(a**2)
    // console.log(a>>=5) 
    // console.log(a&&=3)  //a&& (a=3)
    
    // 3.Comparison
    // const a="10";
    // const b=10;
    // console.log(a==b)
    // console.log(a===b)
    // console.log(a!==b)
    // console.log(a>b)
    // console.log(a>=b)
    // console.log(a<b)
    // console.log(a<=b)
    // 4.Logical
    // or => ||
    // and => &&
    // not => !
    // let a=3;
    // let b=5;
    // if(a<b || b==a){
    //     console.log(true)
    // }else{
    //     console.log(false)
    // }
    // if(a>b && a!==b){
    //     console.log(true)
    // }else{
    //     console.log(false);        
    // }
    // const result=a>b; //false
    // if(!result!==false){
    //     console.log("inside the if block")
    // }else{
    //     console.log("inside the else block")
    // }
    // 5.Bitwise 
    // or=> |
    // and => &
    // not=>!

    // typeof operator
    // console.log(typeof(50))