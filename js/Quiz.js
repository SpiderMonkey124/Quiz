class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      quiz.hide()
    //write code to change the background color here
      fill("Red")
    //write code to show a heading for showing the result of Quiz
      text("You Have Finished The Quiz", 425, 350)
    //call getContestantInfo( ) here
      if(alllContestants !== undefined){
        fill("Blue")
        textSize(20)
        text("NOTE: Contestants who had answered correct are highlighted in green!", 130, 230)
      }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
