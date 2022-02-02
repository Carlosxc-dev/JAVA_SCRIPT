function bixesto(ano)
{
    if (ano % 400 == 0)
    {
        console.log("e ano bixesto");
        return true
    }
    else if (ano % 100 == 0)
    {
        console.log("nao e ano bixesto");
        return false
    }
    else if(ano % 4 == 0)
    {
        console.log("e ano bixesto");
        return true
    }
    else
    {
        console.log("nao e ano bixesto ");
        return false
    }
}

console.log(bixesto(2020));