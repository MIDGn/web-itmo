//1
$(document).ready(function(){
  offForms();
});

$('.text1 a').css("color", "red");
$('p.text1').css("color", "brown");
$('p.text2').css("color", "grey");
$('.text2 a').css({
	"fontWeight": "bold",
	"color": "red"
});

function offForms(){
	$('form input:enabled, select:enabled, text:enabled, textarea:enabled').each(function(){this.disabled = true;});
}

//2
$('a').prepend("<span class='arrow'>↗</span>"); 
$('a').each(function(){								
	$(this).attr("target_backup", $(this).attr("target"))
});

$('a').attr("target", "_blank");

$("a[href^='http://']").each(function(){
	this.href = this.href.replace('http://', 'https://');
});
var input = $('<input type="button" onclick="undo()" value="Отмена" style="float:right" />');
    input.prependTo($("body"));	

function undo(){
	$("span.arrow").remove();
	
	$('a').each(function(){
		$(this).attr("target", $(this).attr("target_backup")) 
	});
}

//3
$("#but1").click(function(){
    $("#panel").slideDown("slow");
});

$("#but2").click(function(){
	$("#img1").fadeIn("slow");
});

$("#but3").click(function(){
    $("td a").toggle();
});

$("#but4").click(function(){
    $("#animated").animate({left: '570px'})
});

$("#but5").click(function(){
    $("td input[type='text']").fadeTo(1000, 0.3);
});

//4
$("#but6").click(function(){
    $("#some").load("https://inxaoc.github.io/example/ajax-1.html");
});

function toArray(obj) {
	var listAjax = "";
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
        	listAjax = listAjax + '<ul>' + key;
        	listAjax = listAjax + toArray(value);
        	listAjax = listAjax + '</ul>';
        }
        else {
        	listAjax = listAjax + '<li>' + key + ': ' + value + '</li>';
        }
    }
    return listAjax;
}

$("#but7").click(function(){
		var answer = ""; 
		$.getJSON('https://inxaoc.github.io/example/ajax.json', function(object) {
		answer = toArray(object);
		$("#some2").append(answer); 
		});
});


