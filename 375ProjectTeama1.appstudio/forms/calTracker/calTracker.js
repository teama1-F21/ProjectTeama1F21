let yummy = ["steak", "pie", "sushi", "pizza"]
letFoodCalList = [100,200,300,400]


FoodList.onclick=function(s){
  
}


AddCal1.onclick=function(){
let message = ""
  for (i=0; i< wishList.length; i++)
    message =  wishList[i] + " <br> " + message 
    lblList.value = message
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
}

