API.addEventListener(API.DJ_ADVANCE, GetDJ);

function GetDJ(obj)
{
if (obj == null) return; // no dj
var str = "";
var currentDJ = obj.dj;
str += currentDJ.username;
var total = currentDJ.djPoints + currentDJ.listenerPoints + currentDJ.curatorPoints;
str += " points: " + total;
str += ", fans: " + currentDJ.fans;
str += " || " + obj.media.author + " - " + obj.media.title;
alert(str);
}



