
setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var curTime= hours;
    var timeCount =0;
    var Nexttime=0;
    if(currentTime.getHours()>=22){
        timeCount=24;
        Nexttime=0;
    }else{
        timeCount= Number(curTime) + 2;
        Nexttime=timeCount;
    }
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var nextSecond = 0;
    var nextMinute = 0;
    var nextHours = 0;
    var SetHour = document.querySelector('.countDownHours');
    var SetMin = document.querySelector('.countDownMin');
    var SetSe = document.querySelector('.countDownSe');
    if(currentTime.getHours() %2==0){
        curTime= hours;
    }else {
        curTime = Number(hours)-1;
        if(timeCount==24){
            Nexttime=0;
        }else {
            Nexttime=timeCount-1;
            timeCount=Nexttime;
        }
        
    }
    if (seconds === 0 && minutes === 0) {
        nextHours = Number(timeCount) - Number(hours);
    } else if (seconds < 60) {
        nextSecond = 60 - Number(seconds)-1;
        nextMinute = 60 - Number(minutes) - 1;
        nextHours = Number(timeCount) - Number(hours) - 1;
    } else {
        nextSecond = 60 - Number(seconds)-1;
        nextMinute = 60 - Number(minutes);
        nextHours = Number(timeCount) - Number(hours) - 1;
    }
    var timeNowSet = document.querySelector('.timeNow_set');
    timeNowSet.textContent = curTime.toString().padStart(2,'0') + ':00';
    var timeNextSet = document.querySelector('.timeNext_set');
    timeNextSet.textContent = Nexttime.toString().padStart(2,'0') + ':00';

    SetHour.textContent = nextHours.toString().padStart(2, '0');
    SetMin.textContent = nextMinute.toString().padStart(2, '0');
    SetSe.textContent = nextSecond.toString().padStart(2, '0');
    
    
}, 300);