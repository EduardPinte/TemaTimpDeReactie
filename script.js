function setup(){
    createCanvas(500,500);
}

function draw() {
    background("grey");
    button(130,220,250,50,"yellow", "Testeaza viteza de reactie","black",25);

  }

  function button(x,y,w,h,color, myText,textColour,textSize){
    fill(color);
    rect(x,y,w,h);
    fill(textColour);
    text(myText,x+55,y+30);
    text(textSize);

  }