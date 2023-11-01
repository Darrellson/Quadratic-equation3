function displayEquation(a, b, c){
    let outputText = "For the equation  ";
       if (a == 1) outputText+="";
    else if (a == -1) outputText+="-";
    else outputText+=a;
       outputText+="x<sup>2</sup>";
       if(b == 1) outputText+="+ x ";
        else if (b<0 && b!=-1) outputText+=b+"x";
    else if (b==-1) outputText+="- x";
    else if (b==0) outputText+=""
    else outputText+="+"+b+"x"
    
       if (c<0) outputText+=c;
    else if (c==0) outputText+="";
    else outputText+="+"+c;
    
    
                outputText+=" = 0";
    return outputText;
    }
    
    
    function validate(aterm, bterm, cterm, outText) {
        let outputText;
         
        // let form = document.getElementById("input").value;
        let a = parseFloat(document.getElementById(aterm).value);
        let b = parseFloat(document.getElementById(bterm).value);
        let c = parseFloat(document.getElementById(cterm).value);
    
        if (a == 0)  {
            outputText = "a cannot equal zero!";
        } else if (isNaN(a)) {
            outputText = "a must be a number";
        } else if (isNaN(b)) {
            outputText = "b must be a number";
        } else if (isNaN(c)) {
            outputText = "c must be a number";
        } else {
             discriminant = Math.pow(b, 2) - 4 * a * c;
            if (discriminant < 0) {
                outputText = "no solution"
            } else if (discriminant == 0) {
                 x = -b / (2 * a);
            } else {
                let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
                let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
               
             outputText=displayEquation(a, b, c)+ "<br> x can equal x<sub>1</sub>=" + x1 + " or x<sub>2</sub>=" + x2;
            }
        }
       
    
    
        document.getElementById(outText).innerHTML = outputText;
    } 