function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var TOD = document.getElementById('TOD');

    if(hrs >= 12){
        TOD.innerHTML = 'PM';
    }else{
        TOD.innerHTML = 'AM';
    }    

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if(hrs == 0){
        hrs = 12;
    }

    if( hrs < 10){ 
        hrs = '0' + hrs;}
    
    if( min < 10){ 
        min = '0' + min;}

    if( sec < 10){ 
         sec = '0' + sec;}
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);