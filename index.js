
function BoardMember (name, homestate, training){
  this.name = name
  this.homestate = homestate
  this.training = training
  this.veto = function(){
      return "No, I must disagree"
  }
  this.approve = function(){
      return "You can do that!"
  }
  this.doCharity = function(){
      return "I like to help people."
  }
  this.releasePressStatement = function(){
      return "You will see great things from Scuber."
  }
  this.sayHello = function(){
      return "Hi my name is ${this.name}, and I was trained in ${this.training}."
  }
}
