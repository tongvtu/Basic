var hst = document.getElementById("device");
      var xValues = [];
      var yValues = [];
      var barColors = [];
      for (var i = 0; i < 100; i++) {
        if (localStorage.getItem(i)) {
          xValues.push(JSON.parse(localStorage.getItem(i)).name);
          yValues.push(JSON.parse(localStorage.getItem(i)).cons);
          barColors.push(getRandomColor());
          hst.innerHTML +=
            "<tr><td>" +
            JSON.parse(localStorage.getItem(i)).name +
            "</td><td>" +
            JSON.parse(localStorage.getItem(i)).mac +
            "</td><td>" +
            JSON.parse(localStorage.getItem(i)).ip +
            "</td><td>" +
            JSON.parse(localStorage.getItem(i)).createdate +
            "</td><td>+" +
            JSON.parse(localStorage.getItem(i)).cons +
            "</td></tr>";
        }
      }
      function newchart() {
        var xValues = [];
        var yValues = [];
        var barColors = [];

        for (var i = 0; i < 100; i++) {
          if (localStorage.getItem(i)) {
            xValues.push(JSON.parse(localStorage.getItem(i)).name);
            yValues.push(JSON.parse(localStorage.getItem(i)).cons);
            barColors.push(getRandomColor());
            
          }
        }
        new Chart("myChart", {
          type: "pie",
          data: {
            labels: xValues,
            datasets: [
              {
                backgroundColor: barColors,
                data: yValues,
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: "Tiêu thụ điện",
            },
          },
        });
      }
      new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [
            {
              backgroundColor: barColors,
              data: yValues,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Tiêu thụ điện",
          },
        },
      });
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }


function deviceadd(){
    if(document.getElementById("dname").value !='' && document.getElementById("dIP").value!="") {
    document.getElementById("form-error").style.visibility="hidden";
    var hst = document.getElementById("device");
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    document.getElementById("consumption").style.visibility="visible";
    if(document.getElementById("device-consumption").value!=0){
    var device=new Object();
    
    device.name=document.getElementById("dname").value;

    var realname=document.getElementById("dname").value.toLowerCase();
    device.realname=realname;
    device.mac=genMAC();
    device.ip=document.getElementById("dIP").value;
    device.createdate=today.toLocaleDateString();
    device.cons=document.getElementById("device-consumption").value;
    options=['Turn On','Turn Off','Sleep'];
    device.action= options[Math.floor(Math.random()*options.length)]  ;

    for(var i=0;i<100;i++){
        if(!localStorage.getItem(i)){
            device.id=i;
            localStorage.setItem(i, JSON.stringify(device));
            break;
        }}
    
    // var devicemoi=JSON.parse(localStorage.getItem(document.getElementById("counter_id").value));
    // hst.innerHTML += "<tr><td>" + document.getElementById("dname").value + "</td><td>"+ genMAC()+"</td><td>"+ document.getElementById("dIP").value + "</td><td>"+today.toLocaleDateString()+"</td><td>+"+document.getElementById("device-consumption").value+"</td></tr>";
    hst.innerHTML += "<tr><td>" + device.name + "</td><td>"+ device.mac+"</td><td>"+ device.ip + "</td><td>"+device.createdate+"</td><td>+"+device.cons+"</td></tr>";
    document.getElementById("consumption").style.visibility="hidden";

    document.getElementById("dIP").value="";
    document.getElementById("dname").value="";
    document.getElementById("device-consumption").value="";

    }
    // else document.getElementById("device-consumption-error").style.visibility='visible';
    }
    else {
        document.getElementById("form-error").style.visibility="visible";
    }}

function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
function logout(){
    // window.location.replace("index.html");
    localStorage.setItem("username", 0);
}
function deleteAllDevice(){
    for(var i=0;i<100;i++){
        localStorage.removeItem(i);
    }

}





function navishow(){
    document.getElementById("navi").style.display='block';
}
function navihide(){
    if(screen.width<440){
        document.getElementById("navi").style.display='none';
    }
}

function updatetable(){
    hst.innerHTML="<tr><th>Device</th><th>Mac Address</th><th>IP</th><th>Created Date</th><th>Power Consumption (KW/H)</th></tr>"
}




