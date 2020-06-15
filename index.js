var synthesis = speechSynthesis;
function speak(answer){
    
    var sayThis = new SpeechSynthesisUtterance(answer); //program what to say
    sayThis.lang = 'zh-CN';
    synthesis.speak(sayThis);
}

function speak_name(){
    var answer=document.getElementsByClassName('answer_name')[0].innerHTML;
    speak(answer);
}

function get_answer_number(){
    var answer_number=document.getElementsByClassName('answer_number')[0].innerHTML;
    return answer_number;
}



function remove_thumbsup(){
    var element = document.getElementById("up");
    element.classList.remove('thumbsup');
}
function remove_thumbsdown(){
    var element = document.getElementById("down");
    element.classList.remove('thumbsdown');
}



function thumbsup() {
    var element = document.getElementById("up");
    element.classList.add("thumbsup");
    //speak('right answer');
  }
  function thumbsdown() {
    var element = document.getElementById("down");
    element.classList.add("thumbsdown");
    //speak('wrong answer');
  }



function answer(number){
    var answer_number=get_answer_number();
    console.log(answer_number,number);
    if(answer_number==number){
        remove_thumbsdown();
        thumbsup();
        setTimeout(remove_thumbsup,1000);
        setTimeout(fill_image,1500);
    }
    else{
        remove_thumbsup();
        thumbsdown();
        setTimeout(remove_thumbsdown,1000);
    }
}

speak_name();