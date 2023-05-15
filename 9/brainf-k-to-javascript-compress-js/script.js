function generateBf(){
	const rbs = document.querySelectorAll('input[name="eof"]');
	let selectedValue;
	for (const rb of rbs) {
		if (rb.checked) {
			selectedValue = rb.value;
			break;
		}
	}
	var spacing = document.getElementById("spacing").value;
	var charToProcess = "";
	var balance = 0;
	var input = document.getElementById("input").value.replace(RegExp(/[^\.\+\,\-\[\]\<\>]/g),"");
	while(input.includes("<>") || input.includes("><") || input.includes("[]") || input.includes("-+") || input.includes("+-")){
		input = input.replace("<>","");
		input = input.replace("><","");
		input = input.replace("[]","");
		input = input.replace("-+","");
		input = input.replace("+-","");
	}
	if (/\[[.]*?]/.test(input)){
		if (!confirm("Potential infinite loop found in script, compile anyway?")){	
    		return "Aborted compilation";
    }
	}
	var addSubVarsTest = input.match(/[\+\-]/g);
	var addSubVars = false;
	if (addSubVarsTest !== null){
		addSubVars = addSubVarsTest.length > 1;
	}
	var memVarsTest = input.match(/[\<\>]/g);
	var memVars = false;
	if (memVarsTest !== null){
		memVars = true;
	}
	if(input.length > 0)
	{
		if(!document.getElementById("compressed").checked)
		{
			balance += 1;
			var output = "function compiled(input = '')\r\n{\r\n"+" ".repeat(spacing)+"var inputIterator = 0;\r\n"+" ".repeat(spacing)+"var commandPointer = 0;\r\n"+" ".repeat(spacing)+"var memoryArray = new Array(30000).fill(0);\r\n"+" ".repeat(spacing)+"var output = '';\r\n";
			for(i=0;i<input.length;i++)
				{
					charToProcess = input.substring(i,i+1);
					if (charToProcess === "."){
						output += " ".repeat(spacing).repeat(balance)+"output += String.fromCharCode(memoryArray[commandPointer]);\r\n";
					}
					else if (charToProcess === ","){
						if (selectedValue === "none") {
							output += " ".repeat(spacing).repeat(balance)+"if (inputIterator != input.length)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+"memoryArray[commandPointer] = input.substring(inputIterator,inputIterator+1).charCodeAt();\r\n"+" ".repeat(spacing).repeat(balance+1)+"inputIterator++;\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n";
						}else{
							output += " ".repeat(spacing).repeat(balance)+"if (inputIterator == input.length)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+"memoryArray[commandPointer] = "+selectedValue+";\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n"+" ".repeat(spacing).repeat(balance)+"else\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+"memoryArray[commandPointer] = input.substring(inputIterator,inputIterator+1).charCodeAt();\r\n"+" ".repeat(spacing).repeat(balance+1)+"inputIterator++;\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n";
						}
					}
					else if (charToProcess === "-"){
						output += " ".repeat(spacing).repeat(balance)+"memoryArray[commandPointer] = memoryArray[commandPointer] - 1;\r\n"+" ".repeat(spacing).repeat(balance)+"if(memoryArray[commandPointer] < 0)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+"memoryArray[commandPointer] = 255;\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n";
					}
					else if (charToProcess === "+"){
						output += " ".repeat(spacing).repeat(balance)+"memoryArray[commandPointer] = memoryArray[commandPointer] + 1;\r\n"+" ".repeat(spacing).repeat(balance)+"if(memoryArray[commandPointer] > 255)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+"memoryArray[commandPointer] = 0;\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n";
					}
					else if (charToProcess === "<"){
						output += " ".repeat(spacing).repeat(balance)+"commandPointer -= 1;\r\n"+" ".repeat(spacing).repeat(balance)+"if(commandPointer < 0)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+" commandPointer = 29999;\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n";
					}
					else if (charToProcess === ">"){
						output += " ".repeat(spacing).repeat(balance)+"commandPointer += 1;\r\n"+" ".repeat(spacing).repeat(balance)+"if(commandPointer > 29999)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n"+" ".repeat(spacing).repeat(balance+1)+"commandPointer = 0;\r\n"+" ".repeat(spacing).repeat(balance)+"}\r\n";
					}
					else if (charToProcess === "["){
						output += " ".repeat(spacing).repeat(balance)+"while(memoryArray[commandPointer] != 0)\r\n"+" ".repeat(spacing).repeat(balance)+"{\r\n";
						balance += 1;
					}
					else if (charToProcess === "]")
					{
						balance -= 1;
						output += " ".repeat(spacing).repeat(balance)+"}\r\n";
					}
				}
			output += " ".repeat(spacing)+"return(output);\r\n}";
			balance -= 1;
		}else{
			var output = "function compiled(r=''){var i=0,p=0,a=new Array(3e4).fill(0),o=''"+(addSubVars ? ",v=255" : "")+(memVars ? ",m=3e4" : "")+";";
			for(i=0;i<input.length;i++)
				{
					charToProcess = input.substring(i,i+1);
					if (charToProcess === "."){
						output += "o+=String.fromCharCode(a[p]);";
					}
					else if (charToProcess === ","){
						if (selectedValue === "none"){
							output += "if(i!=r.length){a[p]=r.substring(i,i+1).charCodeAt();i++;}";
						}else{
							output += "if(i==r.length)a[p]="+selectedValue+";else{a[p]=r.substring(i,i+1).charCodeAt();i++;}";
						}
						
					}
					else if (charToProcess === "-"){
						output += "a[p]=a[p]-1;if(a[p]<0)a[p]="+(addSubVars ? "v" : "255")+";";
					}
					else if (charToProcess === "+"){
						output += "a[p]=a[p]+1;if(a[p]>"+(addSubVars ? "v" : "255")+") a[p]=0;";
					}
					else if (charToProcess === "<"){
						output += "p-=1;if(p<0) p=m-1;";
					}
					else if (charToProcess === ">"){
						output += "p+=1;if(p==m) p=0;";
					}
					else if (charToProcess === "["){
						balance += 1;
						output += "while(a[p]!=0){";
					}
					else if (charToProcess === "]")
					{
						balance -= 1;
						output += "}";
					}
				}
			output += "return(o);}";
		}
		if (balance == 0){
			return output;
		}else{
			return "Unbalanced! Balance: " + balance;
		}
	}else{
		return "";
	}
		
}
function showHide(obj){
	var targetObj = document.getElementById("spacingStuff");
	if (obj.checked){
		targetObj.style.visibility = "hidden";
	}else{
		targetObj.style.visibility = "visible";
	}
}

var inputElement = document.getElementById("upload");
var fr = new FileReader();
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
	const fileList = this.files; /* now you can work with the file list */
	const file = fileList[0];
	fr.addEventListener("load", loadFile);
	fr.readAsText(file);
}

function loadFile(){
	document.getElementById("input").value = fr.result;
	inputElement.value = null;
}

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function notif(){
	document.getElementById('copiedNotif').style.display = 'block'
	setTimeout(function(){document.getElementById('copiedNotif').style.display = 'none';},3000);
}