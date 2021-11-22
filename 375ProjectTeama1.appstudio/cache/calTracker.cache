let yummy = ["steak", "pie", "sushi", "pizza"]
let FoodCalList = [100,200,300,400]


FoodList.onshow=function(s){
FoodList.clear()

for (i=0; i<=yummy.length;i++)
  FoodList.addItem(yummy[i])
  
}

FoodList.onclick=function(s){
if (typeof(s)=="object")
  return
else{
  FoodList.value = s
  console.log(`The user chose ${s}.`)
}
if (FoodList.value == "steak")
  presetCal.value = Number(presetCal.value) + Number(FoodCalList[0])
}


  

AddCal2.onclick=function(){
  let num1 = Number(OtherFood.value)
  let num2 = Number(CaloriesNum.value)
    let answer = num1 + num2
  
  CaloriesNum.value = answer
}


finalCalValue.value = CaloriesNum.value + presetCal.value



ClearCal1.onclick=function(){
  CaloriesNum.value = 0
  presetCal.value = 0
}








changetoDineIn.onclick=function(){
  ChangeForm(dineIn)
}
