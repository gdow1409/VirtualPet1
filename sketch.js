var dog, happydog, database, foodS, foodStock, dogImage, dogImage1

function preload()
{
dogImage = loadImage("images/dogImg.png")
dogImage1 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150)
  dog.addImage(dogImage)
  dog.scale = 0.2;
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)





}


function draw() {  
  background("green")

  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImage1)
  }
  text("food remaining :" + foodS,170,200)

  drawSprites();
}
function readStock(data){
foodS = data.val()

}




function writeStock(x){
   if(x<=0){
    x = 0 
   }
  else{
    x = x-1;

  }
 database.ref('/').update({
 Food:x

 })


}

