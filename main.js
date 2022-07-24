/***
 * BT1: 
 */
 document.getElementById('btnNextDay').onclick = function() {
    //input
    var day = document.getElementById('day').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;
    var showInfo = "";
  
    //process
    if(day === 31 && month === 12) {
      day = 1;
      month = 1;
      year = year + 1;
    }else if(month === 2) {
      if(day === 29 && year % 4 === 0) {
        day = 1;
        month = month + 1;
      }else if (day === 28 && year % 4 != 0) {
        day = 1;
        month = month + 1;
      }else {
        day = day + 1;
      }
    }else if (day === 31 &&
      (month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12)
    ){
      day = 1;
      month = month + 1;
    }else if(
      day === 30 &&
      (month === 4 || 
        month === 6 || 
        month === 9 || 
        month === 11)
    ){
      day = 1;
      month = month + 1;
    }else {
      day = day + 1;
    }
    showInfo += "<p>" + day + "/" + month + "/" + year + "</p>";
  
    //ouput
    document.getElementById('date').innerHTML = showInfo;
  };
  
  document.getElementById('btnYesTerDay').onclick = function() {
    //input
    var day = document.getElementById("day").value * 1;
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;
    var prevMonth = month - 1;
    var showInfo = "";
  
    //process
    if(day === 1 && month === 1) {
      day = 31;
      month = 12;
      year = year - 1;
    }else if(day === 1 && month != 1) {
        if(prevMonth === 1 ||
            prevMonth === 3 ||
            prevMonth === 5 ||
            prevMonth === 7 ||
            prevMonth === 8 ||
            prevMonth === 10 ||
            prevMonth === 12) 
        {
            day = 31;
            month = prevMonth;
            }else if (prevMonth === 2) {
            if(year % 4 === 0) {
            day = 29;
            month = prevMonth;
            }else {
            day = 28;
            month = prevMonth;
            }
        }else {
        day = 30;
        month = prevMonth;
        }
    }else {
      day = day - 1;
    }
  
    showInfo += "<p>" + day + "/" + month + "/" + year + "</p>";
  
    //ouput
    document.getElementById("date").innerHTML = showInfo;
  };

/**
 * BT2: 
 */

 document.getElementById('btnDay').onclick = function () {
    //input
    var month2 = document.getElementById('month2').value * 1;
    var year2 = document.getElementById('year2').value * 1;
    var day2;
    var showInfor = "";
  
    //process
    if (month2 === 2) {
      if (year2 % 4 === 0) {
        day2 = 29;
      } else {
        day2 = 28;
      }
    } else if (month2 === 1 ||
      month2 === 3 ||
      month2 === 5 ||
      month2 === 7 ||
      month2 === 8 ||
      month2 === 10 ||
      month2 === 12)
    {
      day2 = 31;
    }else {
      day2 = 30;
    }
    showInfor +='<p>' + 'Tháng ' + month2 + " năm " + year2 + " có " + day2 + " ngày." + "</p>";
  
    //ouput
    document.getElementById('inforDay').innerHTML = showInfor;
  };


/**
 * BT3:
 */

 document.getElementById('btnNumber').onclick = function () {
    //input
  
    var a = document.getElementById('number').value * 1;
    var b = parseInt(a);
    b = Math.abs(b);
    var tram;
    var chuc;
    var dv;
    var showInfor = "";
  
    //process
  
    a = Math.abs(a);
    switch (Math.floor(a / 100)) {
      case 1:
        tram = "một trăm";
  
        break;
      case 2:
        tram = "hai trăm";
  
        break;
      case 3:
        tram = "ba trăm";
  
        break;
      case 4:
        tram = "bốn trăm";
  
        break;
      case 5:
        tram = "năm trăm";
  
        break;
      case 6:
        tram = "sáu trăm";
  
        break;
      case 7:
        tram = "bảy trăm";
  
        break;
      case 8:
        tram = "tám trăm";
  
        break;
      case 9:
        tram = "chín trăm";
  
        break;
      default:
        tram = "";
    }
    var b = a % 100;
    switch (Math.floor(b / 10)) {
      case 1:
        chuc = "mười";
  
        break;
      case 2:
        chuc = "hai mươi";
  
        break;
      case 3:
        chuc = "ba mươi";
  
        break;
      case 4:
        chuc = "bốn mươi";
  
        break;
      case 5:
        chuc = "năm mươi";
  
        break;
      case 6:
        chuc = "sáu mươi";
  
        break;
      case 7:
        chuc = "bảy mươi";
  
        break;
      case 8:
        chuc = "tám mươi";
  
        break;
      case 9:
        chuc = "chín mươi";
  
        break;
      default:
        if (tram != "" && a % 10 != 0) {
          chuc = "lẻ";
        } else {
          chuc = "";
        }
    }
    var c = a % 10;
    switch (c) {
      case 1:
        if (chuc != "" && chuc !== "lẻ" && chuc !== "mười") {
          dv = "mốt";
        } else dv = "một";
  
        break;
      case 2:
        dv = "hai";
  
        break;
      case 3:
        dv = "ba";
  
        break;
      case 4:
        dv = "bốn";
  
        break;
      case 5:
        if (chuc != "" && chuc !== "lẻ") {
            dv = "lăm";
        } else dv = "năm";
  
        break;
      case 6:
        dv = "sáu";
  
        break;
      case 7:
        dv = "bảy";
  
        break;
      case 8:
        dv = "tám";
  
        break;
      case 9:
        dv = "chín";
  
        break;
      default:
        if (tram != "" || chuc != "") {
          dv = "";
        } else {
            dv = "không";
        }
    }
  
    showInfor += "<p>" + tram + " " + chuc + " " + dv + "</p>";
  
    //ouput
    document.getElementById('ketQua').innerHTML = showInfor;
  };




/**
 * BT4:
 */
 document.getElementById('btnTinh').onclick = function () {
    //Dau vao
    var name1 = document.getElementById('name1').value;
    var x1 = document.getElementById('x1').value * 1;
    var y1 = document.getElementById('y1').value * 1;
  
    var name2 = document.getElementById(name2).value;
    var x2 = document.getElementById('x2').value * 1;
    var y2 = document.getElementById('y2').value * 1;
  
    var name3 = document.getElementById('name3').value;
    var x3 = document.getElementById('x3').value * 1;
    var y3 = document.getElementById('y3').value * 1;
  
    var distance_1, distance_2, distance_3;
    var furthest_stu, furthest_x, furthest_y;
    var showInfor = "";
  
    // Xu ly
    x1 = parseFloat(x1);
    x2 = parseFloat(x2);
    x3 = parseFloat(x3);
    y1 = parseFloat(y1);
    y2 = parseFloat(y2);
    y3 = parseFloat(y3);
  
    distance_1 = Math.pow(x1, 2) + Math.pow(y1, 2);
    distance_1 = Math.sqrt(distance_1);
  
    distance_2 = Math.pow(x2, 2) + Math.pow(y2, 2);
    distance_2 = Math.sqrt(distance_2);
  
    distance_3 = Math.pow(x3, 2) + Math.pow(y3, 2);
    distance_3 = Math.sqrt(distance_3);
    if (distance_1 < distance_2 && distance_1 < distance_3) {
      furthest_stu = name1;
      furthest_x = x1;
      furthest_y = y1;
    } else if (distance_2 < distance_1 && distance_2 < distance_3) {
      furthest_stu = name2;
      furthest_x = x2;
      furthest_y = y2;
    } else {
      furthest_stu = name3;
      furthest_x = x3;
      furthest_y = y3;
    }
  
    showInfor += "<p>" + "Sinh viên xa trường nhất : " + furthest_stu + "</p>";
  
    //ouput
    document.getElementById("result").innerHTML = showInfor;
  };