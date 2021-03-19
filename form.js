class Form {
    constructor() {



    }
    display() {
        var title = createElement('h1')
        title.html('Welcome To My Game !!')
        title.position(150, 50)
        var content = createElement('h3')
        content.html('This is a life happiness simulator you are given decisions and based on that your happiness.<br> The decisons will either increase or decrease,you need to try and live the happiest life ')
        content.position(90, 150)

        var Button = createButton('Enter')
        Button.position(950, 480)

        Button.mousePressed(() => {
            title.hide()
            content.hide()
            Button.hide()


            var question=createElement('h3')
            question.position(80,80)
            question.html('Q. What is your favourite toy? ')

            choice1 = createButton('barbie')
            choice2 = createButton('car')
            choice3 = createButton('superhero')
            choice4 = createButton('phone')

            choice1.position(200,200)
            choice2.position(200,230)
            choice3.position(200,260)
            choice4.position(200,290)

            choice1.mousePressed(function(){
                score = score + 5
            })
    
            choice2.mousePressed(()=>{
               score = score + 25
           })
    
           choice3.mousePressed(()=>{
               score = score + 25
           })
    
           choice4.mousePressed(()=>{
               score = score + 25
           })
        
            var happiness = createElement('h3')
            happiness.position(400, 400)
            happiness.html('Happiness: ' + score + ' %')
       
          
        });




}
}

