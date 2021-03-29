class attendant{
    constructor(){
      this.name = null
      this.answer = null
    }

    update(){
       var attendIndex = "attendants/attendant"
       database.ref(attendIndex).set({
           name : this.name,
           answer:this.answer
       })
    }

    getAnswers(){
      var info = database.ref('attendants')
      info.on("value",function(data){
        allInfo = data.val()
      })
    }
}