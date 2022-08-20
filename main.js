status = "";
objects = "";
alarm = "";
function preload(){
    alarm= loadSound("alarm_r.mp3");
}
function Start(){
    objectDetector = ml5.objectDetector('cocossed' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function setup(){
    canvas = createCanvas(380 , 380 );
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossed' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;objectDetector.detect(video, gotResult);
    objectDetector.detect(video, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        objects = results;
    }
}

function draw(){
    
    image(video , 0, 0, 380, 380 );
     
    if(status !=""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length
            Fill(r,g,b);
            percent = floor(objects[i].confidence  * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            Reflect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
     
            if(objects[i].label == "objects" ){
                document.getElementById("number_of_objects")
            }
        }
     
     else{
        document.getElementById("status").innerHTML = "Status: Person Not Detected";
        alarm.play();
     }

    }

