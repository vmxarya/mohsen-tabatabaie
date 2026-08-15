function getnumber(){

                    var n1 = eval(prompt("enter first num"))
                    var n2 = eval(prompt("enter second num"))
                    var op =      prompt("enter the operator")
                    var result=calc(n1,n2,op)
                    document.getElementById("result").innerHTML="Result = "+ result
                }

function calc(num1,num2,operator){
                switch(operator){
                    case "+":return(num1+num2)
                    case "-":return(num1-num2)
                    case "*":return(num1*num2)
                    case "/":return(num1/num2)
                }
                }

              
document.getElementById('resultbutton').addEventListener('click',function(){getnumber()})
                    
                