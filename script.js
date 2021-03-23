function compute()
{
    if (check()) {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    years = parseInt(years) + 2021;
    var result = document.getElementById("result");
    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br/>
                        at an interest rate of <mark>${rate}%</mark>.<br/>
                        You will receive an amount of <mark>${interest}</mark>,<br/>
                        in the year <mark>${years}</mark><br /><br />`;
    }
}

function ValueRate(rate) {
    var V = document.getElementById("ValueOfRate");
    V.innerHTML=`${rate} %`
}

function check() {
    var principal = document.getElementById("principal"); 
    if (parseInt(principal.value) <= 0 || principal.value == "" )
    {
        alert("Enter a positive number");
        principal.focus();
        return false
    }
    return true;
}