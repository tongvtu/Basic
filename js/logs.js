
var hst = document.getElementById("myTable");
var listitem = [];
for (var i = 0; i < 100; i++) {
  if (JSON.parse(localStorage.getItem(i))) {
	listitem.push(JSON.parse(localStorage.getItem(i)));
  }
}

alldevice();



function search() {
  var searchvalue = document.getElementById("log-search-input").value;
  hst.innerHTML = "";
  hst.innerHTML =
	"<tr><th>Device ID</th><th>Name</th><th>Action</th><th>Date</th></tr>";
  var search = [];
  for (var i = 0; i < 100; i++) {
	if (
	  JSON.parse(localStorage.getItem(i)) &&
	  JSON.parse(localStorage.getItem(i)).realname.includes(searchvalue.toLowerCase())
	) {
	  search.push(JSON.parse(localStorage.getItem(i)));
	}
  }
  for (var i = 0; i < search.length; i++) {
	hst.innerHTML +=
	  "<tr><td>" +
	  search[i].id +
	  "</td><td>" +
	  search[i].name +
	  "</td><td>" +
	  search[i].action +
	  "</td><td>" +
	  search[i].createdate +
	  "</td></tr>";
  }

  hst.innerHTML +=
	"<tr><th>Total</th><th></th><th></th><th>" +
	search.length +
	"</th></tr>";

	if(document.getElementById("buttons")){
	document.getElementById("buttons").remove();}


	
  	document.getElementById("log-search-input").value = "";
}
function alldevice() {
  hst.innerHTML = "";
  hst.innerHTML =
	"<tr><th>Device ID</th><th>Name</th><th>Action</th><th>Date</th></tr>";
  for (var i = 0; i < 100; i++) {
	if (JSON.parse(localStorage.getItem(i))) {
	  hst.innerHTML +=
		"<tr><td>" +
		JSON.parse(localStorage.getItem(i)).id +
		"</td><td>" +
		JSON.parse(localStorage.getItem(i)).name +
		"</td><td>" +
		JSON.parse(localStorage.getItem(i)).action +
		"</td><td>" +
		JSON.parse(localStorage.getItem(i)).createdate +
		"</td></tr>";
	}
  }
  hst.innerHTML +=
	"<tr><th>Total</th><th></th><th></th><th>" +
	listitem.length +
	"</th></tr>";

}


var $table = document.getElementById("myTable"),
$n = 5,
$rowCount = $table.rows.length,
$firstRow = $table.rows[0].firstElementChild.tagName,
$hasHead = ($firstRow === "TH"),
$tr = [],
$i,$ii,$j = ($hasHead)?1:0,
$th = ($hasHead?$table.rows[(0)].outerHTML:"");
var $pageCount = Math.ceil($rowCount / $n);
if ($pageCount > 1) {
	for ($i = $j,$ii = 0; $i < $rowCount; $i++, $ii++)
		$tr[$ii] = $table.rows[$i].outerHTML;
	$table.insertAdjacentHTML("afterend","<div id='buttons'></div");
	sort(1);
}

function sort($p) {
	
	var $rows = $th,$s = (($n * $p)-$n);
	for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
		$rows += $tr[$i];
	
	$table.innerHTML = $rows;
	document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
	document.getElementById("id"+$p).setAttribute("class","active");

	
}


function pageButtons($pCount,$cur) {
	var	$prevDis = ($cur == 1)?"disabled":"",
		$nextDis = ($cur == $pCount)?"disabled":"",
		
		$buttons = "<input type='button' value='<< Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
	for ($i=1; $i<=$pCount;$i++)
		$buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
	$buttons += "<input type='button' value='Next >>' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
	return $buttons;
}





        
      
