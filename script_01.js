/*** Arrays / FOR-Schleifen ***/
// Array 2 str + ?!. Satzende-Auswahl

//var myArr = [];
//var myArr = ["Ich","bin","Hans"];
//var myArr = ["Ich","bin","Hans","Hansson"];
//var myArr = ["Ich","bin","Hans","Heinrich","Hansson"];
var myArr = ["Ich","bin","Hans","Heinrich","Hansson","esq"];
var mark = "!";

// Funktionalität: String aus Array zusammensetzen mit Schleife
// Test: 
ausgabe(satzbauArr(myArr,mark));
function satzbauArr(myArr,mark)
{
   
    var exclamation = "!";
    var question = "?";
    var punct = ".";
    var gap = " ";
    var str = "";
 

switch (mark) 
{
    // . am Ende
    case punct:
        for (var i = 0; i < myArr.length; i++) 
        { 
            if (i == myArr.length -1)
            {
                str += myArr[i] + punct;   
            } else
            {
                str += myArr[i] + gap;
            }
        }    
    break;
    // ! am Ende
    case exclamation:
        for (var i = 0; i < myArr.length; i++) 
        { 
            if (i == myArr.length -1)
            {
                str += myArr[i] + exclamation;   
            } else
            {
                str += myArr[i] + gap;
            }
        }    
    break;
    // ? an Ende
    case question:
        for (var i = 0; i < myArr.length; i++) 
        { 
            if (i == myArr.length -1)
            {
                str += myArr[i] + question;   
            } else
            {
                str += myArr[i] + gap;
            }
        }    
    break;
    // sonst nichts am Ende
    default:
            for (var i = 0; i < myArr.length; i++) 
            { 
                if (i == myArr.length -1)
                {
                    str += myArr[i];   
                } else
                {
                    str += myArr[i] + gap;
                }
            }    
    break;
    
}
return str;


/*for (let i = 0; i < myArr.length; i++) 
{ 
    if (i == myArr.length -1)
    {
        str += myArr[i] + punct;   
    } else
    {
        str += myArr[i] + gap;
    }
}    
return str;
*/
}


// Funktionalität: Konsolenausgabe
// Test: ausgabe("test");
function ausgabe(outputStr) 
{
    console.log(outputStr);    
}
