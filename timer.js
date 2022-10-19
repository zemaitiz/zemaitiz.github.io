
function calculateOnTime() {

    //ttbms - timeTillBoiling in ms, kiti analogiskai uzvadinti. Cia ivedama minutemis, tai dauginama is ms/1min
    let ttbms = document.getElementById('timeTillBoiling').value * 60000;
    console.log('ttbms: ' + ttbms);
    // cia ivedama valandom
    let tbtms = document.getElementById('totalBoilingTime').value * 3600000;
    console.log('tbtms: ' + tbtms);
  
    
    let offDayTime = new Date();
    let offDayTimeInputString = document.getElementById('offDayTime').value;
    console.log('offDayTimeInputString: ' + offDayTimeInputString);
    let odtms = Date.parse(offDayTimeInputString);
    console.log('odtms: ' + odtms);

    let ondtms = odtms - ttbms - tbtms;
    console.log('ondtms: ' + ondtms);
    let onDayTime = new Date();
    onDayTime.setTime(ondtms);
    console.log(onDayTime);
    return onDayTime;
  
}



function display() {
    document.getElementById('on').innerHTML=calculateOnTime();
}


