let person;
let x = 50;
let block;
let two;
let dollar;
let gold;
//let pForm=[];
let mainGuy;

function setup() {
 mainGuy = loadImage("mainGuy.png");
  
  createCanvas(400, 400);
  person = new Person(mainGuy);
  block = new platform(300, 300, 50, 100);
  level = new platform(450,200,75,25);  
  dollar = new blueMoney(309, 275);
  gold = new loonie(490,180);
  plat = new platform(560, 300, 100,25);
  lePooPoo = new platform(1100, 325, 75, 75);
  pleb1 = new nickel(900, 375);
  pleb2 = new nickel(925,320);
  pleb3 = new nickel(960, 255);
  pleb4 = new nickel(1000, 320);
  pont = new bridge(1175, 325, 150, 25);
  
  //for(let i=0; i<10; i++){
    //pForm[i]= new platform(random(0,620),random(0,325),random(75,100),random(25,75));
  //}
  




}

function keyPressed() {
  if (key == 'w') {
    var jump = createVector(0, -120);
    person.applyForce(jump);
  }
}

function draw() {

   
  background(0, 0, 255);
  var gravity = createVector(0, 2);
  person.applyForce(gravity);
  //makes him walk
  if (keyIsPressed && key == "a") {
    let left = createVector(-2, 0);
    //person.applyForce(force);
    person.vel = left;
  } else if (keyIsPressed && key == "d") {
    var right = createVector(3, 0);
    person.vel = right;
  } else {
    person.vel = createVector(0, 0);
  }


  translate(-1 * person.pos.x + 50, 0);
  person.update();
  person.edges(block);
  person.edges(level);
  person.edges(plat);
  person.edges(lePooPoo);
  person.edges(pont);
  person.display();
  /*person.display(dollar);
  gold.display(gold);
  person.display(pleb1); 
  person.display(pleb2);
  person.display(pleb3);
  person.display(pleb4);*/
  //terrain
  block.display();
  level.display();
  plat.display();
  lePooPoo.display();
  pont.display();
  //money
  dollar.display(person);
  gold.display(person);
  pleb1.display(person); 
  pleb2.display(person);
  pleb3.display(person);
  pleb4.display(person);
  //counter.display(dollar);
  //for(let i=0; i<pForm.length; i++){
    //pForm[i].display();
    //person.edges(pForm[i]);
 // }



}
