function writeOut(){

var name_input=document.getElementById("a_name");
var name = name_input.value;
var page=document.getElementById("page");
var letter_style=document.getElementsByClassName("styler");
for(var s=0;s<letter_style.length;s++){
var hues=["pink","orange","skyblue","#fff666","lightgreen"];
var hue_selector=Math.floor(Math.random()*5);
var hue=hues[hue_selector];letter_style[s].style.stroke=hue;}


var letter=name.toUpperCase();
var letters =letter.split("");
var words = letter.split(" ");
var first_three_words=words.slice(0,4);
var wordgap1=(first_three_words.length)-1;
var first3 = first_three_words.join("");
var first_line=first3.length + wordgap1;
var second_three_words=words.slice(4,7);
var wordgap2=(second_three_words.length)-1;
var second3 = second_three_words.join("");
var second_line=second3.length + wordgap2;
var word_count=words.length;

var letter_count=letters.length;
var space=1;
var spaceRtn=1;
var lineRtn;

var message='<svg viewbox="0 0 400 75">';
for(var i=0;i<first_line;i++){
if(letters[i]=='“'){letters[i]="^";}
if(letters[i]=='”'){letters[i]="*";}
if(letters[i]=="I"||letters[i]=="’"){space =space + 12;} else if(letters[i-1]=="I"||letters[i-1]=="’"||letters[i]=='”'){space =space + 11;} else {space= space + 15;}

message +='<use xlink:href="#' + letters[i] + '" x="' + space + '" y="' + 10 + '"/>';}

for(var j=first_line;j<first_line+second_line+1;j++){
if(letters[j]=="I"||letters[j]=="’"){spaceRtn =spaceRtn + 12;} else if(letters[j-1]=="I"||letters[j-1]=="’"){spaceRtn =spaceRtn + 12;} else {spaceRtn= spaceRtn + 15;}
message +='<use xlink:href="#' + letters[j] + '" x="' + spaceRtn + '" y="' + 30 + '"/>';

}
message +='</svg>' ;


page.innerHTML=message;
}