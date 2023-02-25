$(function () {
    
    var content = {"html": "<h1>CodePen Home HTML & CSS & JS Code PlayGround</h1> <--!Run Now-->", "css": "", "js": "//jQuery is also included\n\n$(function () {\n\n    //Your code\n\n});"};
    
    var current = "html";
    
    var editor = CodeMirror.fromTextArea($("#editor")[0], {
        lineNumbers: true
    });
    
    editor.setValue(content[current]);
    
    var iframe = document.createElement('iframe');
    var result = document.getElementById('result');
    result.appendChild(iframe);
    
    var jquery = "https://code.jquery.com/jquery-3.3.1.min.js";
    
    $("#menu > li > a").click(function(e) {
        $("#menu > li > a").removeClass("active");
        $(this).addClass("active");
        var target = $(this).html().toLowerCase();
        open(target);
        e.preventDefault()
    })
    
    function open(target) {
        
        current = target;
        $("#label").html(target.toUpperCase());
        editor.setValue(content[target]);

    }
    
    editor.on("change", function() {
        
        content[current] = editor.getValue();
        
    })
    
    $("#clear-btn").click(function() {
        
        content["html"] = "";
        content["css"] = "";
        content["js"] = "";
        editor.setValue("");
        
    })
    
    $("#run-btn").click(function(e) {
        
        if(iframe.contentDocument) {
    
            var html = content["html"];
            var css = content["css"];
            var js = content["js"];
            var a = iframe.contentDocument;
            var display = "<!DOCTYPE html><html><head><script src='" + jquery + "'></scr\ipt><style>" + css + "</style></head><body>" + html + "<script>\n" + js + "\n</scr\ipt></body></html>";
            a.write(display);
            a.close();
            $("#result").show();
            
        }
        e.preventDefault();
        
    })
    
    $("#close-button").click(function() {
        $("#result").fadeOut("fast");
    })
    
    $("#download-btn").click(function() {
        
        var zip = new JSZip();
        var h = "<!DOCTYPE html>\n<html>\n    <head>\n        <link rel='stylesheet' type='text/css' href='css/main.css'>\n        <script src='" + jquery + "'></scr\ipt>\n        <script src='js/main.js'></scr\ipt>\n    </head>\n    <body>\n        " + content["html"] + "\n    </body>\n</html>";
        zip.file("index.html", h);
        zip.folder("js");
        zip.file("js/main.js", content["js"]);
        zip.folder("css");
        zip.file("css/main.css", content["css"]);
        zip.generateAsync({type:"blob"}).then(function(content) {
            // this is about the FileSaver.js
            saveAs(content, "My Project.zip");
        });
        
    })
    
})


//w3

function openNavAtajos() {
  document.getElementById("mySidenavBTN").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNavAtajos() {
  document.getElementById("mySidenavBTN").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}