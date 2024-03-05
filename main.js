prediction_1 = ""
prediction_2 = ""

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lr9qMaCo4/model.json", modelo_listo);
 function modelo_listo(){
  console.log("modelo listo");
 }

 Webcam.set({
  width:350,
  height:300,
  image_format: 'png',
  png_quality:90
 });

 
camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_photo()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
 
  
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "La primera prediccion es " + prediction_1;
  speak_data_2 = "Y la segunda prediccion es " + prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  utterThis.lang = "es-Es";
  synth.speak(utterThis);
}


  function check()
  {
    img = document.getElementById('captured_image');
     classifier.classify(img, gotResult);
  }

function gotResult(error, result){
   if(error) {
    console.log(error);
   }else{
    console.log(result);
    document.getElementById("resultado1").innerHTML = result[0].label;
    document.getElementById("resultado2").innerHTML = result[1].label;
    prediction_1 = result[0].label;
    prediction_2 = result[1].label;

    speak();


    if(result[0].label == "feliz")
    {
      document.getElementById("emoji1").innerHTML = "&#128515;";
    }else if(result[0].label == "triste"){
      document.getElementById("emoji1").innerHTML = "&#128532;";
    }else if(result[0].label == "enojado"){ 
      document.getElementById("emoji1").innerHTML = "&#128548;";
    }
    if(result[1].label == "feliz")
    {
      document.getElementById("emoji2").innerHTML = "&#128515;";
    }else if(result[1].label == "triste"){
      document.getElementById("emoji2").innerHTML = "&#128532;";
    }else if(result[1].label == "enojado"){ 
      document.getElementById("emoji2").innerHTML = "&#128548;";
    }
   }
}
 
