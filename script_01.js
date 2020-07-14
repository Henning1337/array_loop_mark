/*** Arrays / FOR-Schleifen ***/
// Array 2 str + ?!. Satzende-Auswahl

//var myArr = [];
//var myArr = ["Ich","bin","Hans"];
//var myArr = ["Ich","bin","Hans","Hansson"];
//var myArr = ["Ich","bin","Hans","Heinrich","Hansson"];
var arr = ["Ich","bin","Hans","Heinrich","Hansson","esq"];
var mark = "!";

// Funktionalität: String aus Array zusammensetzen mit Schleife
// Test: 
ausgabe(satzbauArr(arr,mark));

function satzbauArr(arr,mark)
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
        for (var i = 0; i < arr.length; i++) 
        { 
            if (i == arr.length -1)
            {
                str += arr[i] + punct;   
            } else
            {
                str += arr[i] + gap;
            }
        }    
    break;
    // ! am Ende
    case exclamation:
        for (var i = 0; i < arr.length; i++) 
        { 
            if (i == arr.length -1)
            {
                str += arr[i] + exclamation;   
            } else
            {
                str += arr[i] + gap;
            }
        }    
    break;
    // ? an Ende
    case question:
        for (var i = 0; i < arr.length; i++) 
        { 
            if (i == arr.length -1)
            {
                str += arr[i] + question;   
            } else
            {
                str += arr[i] + gap;
            }
        }    
    break;
    // sonst nichts am Ende
    default:
            for (var i = 0; i < arr.length; i++) 
            { 
                if (i == arr.length -1)
                {
                    str += arr[i];   
                } else
                {
                    str += arr[i] + gap;
                }
            }    
    break;
    
}
return str;
}


// Funktionalität: Konsolenausgabe
// Test: ausgabe("test");
function ausgabe(outputStr) 
{
    console.log(outputStr);    
}
