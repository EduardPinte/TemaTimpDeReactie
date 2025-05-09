let stare= "start";
let momentVerde;
let timpStart;
let timpReactie;
let aAparutVerde;


function setup(){
    createCanvas(500,500);
}

function draw() {
    background("grey");
    if(stare === "start"){
    button(130,220,250,50,"yellow", "Testeaza viteza de reactie","black",25);
    }else if(stare === "test"){
      fill("White");
      text("Asteapta culoarea verde...",60,250);
      if(millis() >=momentVerde){
            stare = "verde";
      }
    }else if(stare === "verde"){
      background("green");
      fill("white");
      text("ckick acum!",60,250);
    }else if(stare === "prea devreme"){
      background("red");
      fill("white");
      text("Ai dat click prea devreme",60, 250);
    }else if(stare === "gata"){
      background("green");
      fill("white");
      text("Bravo!",60,250);
    }

  }

  function mouseClicked() {
    if ( stare === "start" && mouseX > 130 && mouseX <350 && mouseY>220 && mouseY<270) {
        stare = "test";
        timpStart = millis();
        momentVerde= timpStart + random(2000,5000);
    }else if(stare === "test"){
        stare = "preaDevreme";
    }else if(stare === "verde"){
      timpReactie= millis()-momentVerde;
      stare =  "gata";
    }
  }

  function button(x,y,w,h,color, myText,textColour,textSize){
    fill(color);
    rect(x,y,w,h);
    fill(textColour);
    text(myText,x+55,y+30);
    
  }