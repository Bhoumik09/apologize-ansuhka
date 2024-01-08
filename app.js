
    document.addEventListener("DOMContentLoaded", function() {
        // Create an audio element
        var audio = new Audio('Tere-Jaisa-Yaar-Kahan(PaglaSongs).mp3');
       
        // Set attributes for autoplay and loop
        audio.setAttribute('autoplay', true);
        audio.setAttribute('loop', true);
        audio.currentTime=11
        // Append the audio element to the body
        document.body.appendChild(audio);
        setInterval(()=>{
            console.log(audio.currentTime)
        },1000)
        
    });
    
