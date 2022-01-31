window.onload = function(){
    
    let butaoStart = document.getElementById("bstart");
    let butaoStop = document.getElementById("bstop");
    let butaoReset = document.getElementById("breset");
    var addmilisecs = document.getElementById("mili");
    var addseconds = document.getElementById("secs")
    var addminutos = document.getElementById("minutos");
    var milisecs = 00; 
    var seconds = 00;
    var minutos = 00;
    var interval;

    butaoStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(addTime,10);
        butaoStart.style.display = "none";
        butaoStop.style.display = "block";
        butaoReset.style.display = "block";

    }

    butaoStop.onclick = function(){
        clearInterval(interval);
        butaoStart.style.display = "block";
        butaoStop.style.display = "none";
    }

    butaoReset.onclick = function(){
        clearInterval(interval);
        milisecs = '00';
        seconds = '00';
        minutos = '00';
        addmilisecs.innerText = milisecs;
        addseconds.innerText = seconds;
        addminutos.innerText = minutos;
        butaoReset.style.display = "none";
        butaoStart.style.display = "block";
        butaoStop.style.display = "none";
        addminutos.style.display = "none";
    }

   function addTime(){
        milisecs++;

        if(milisecs < 10){
            addmilisecs.innerText = "0" + milisecs;
        }else if(milisecs < 100){
            addmilisecs.innerText =  milisecs;
        }else{
            milisecs = 00;
            seconds++;
            if(seconds < 10){
                addseconds.innerText = "0" + seconds;
            }else if(seconds < 60){
                addseconds.innerText = seconds;
            }else{
                seconds = 00;
                minutos++;
                addminutos.style.display = "inline";
                if(minutos < 10){
                    addminutos.innerText = "0" + minutos + " :";
                }else if(minutos < 60){
                    addminutos.innerText = minutos + " :";
                }
            }
        }
    }
}