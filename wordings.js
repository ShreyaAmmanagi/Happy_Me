class Word{
		constructor(){
			this.title = createElement('h1')
			this.buttonA1 = createButton("Let's go =>")
		}
		display(){
			this.title.html("Happy me!")
			this.title.style('font-family','Broadway')
			this.title.style('color','darkblue')
			this.title.position(500,300);
			var box1 = createSprite(1050,100,20,20);
			box1.addImage("adding",img2)
			box1.scale = 0.2
			this.buttonA1.position(900,500);
			this.buttonA1.style('width', '200px');
			this.buttonA1.style('font-family','Jokerman')
			this.buttonA1.style('font-size','20px')
      this.buttonA1.style('color','darkblue')
			this.buttonA1.style('height', '40px');
			this.buttonA1.style('background', 'pink'); 
      this.buttonA1.mousePressed(()=>{
        this.title.hide()
      this.buttonA1.hide()
      this.title2 = createElement('h2')
      this.title2.html('About :-')
      this.title2.position(400,10);
        var obj1 = createSprite(600,300,30,30)
        obj1.addImage(img22)
        this.buttonA2 = createButton("Let's move on =>")
        this.buttonA2.position(530,570);
				this.buttonA2.style('background','gold')
				this.buttonA2.style('color','purple')
				this.buttonA2.style('width','170px')
				this.buttonA2.style('height','30px')
				this.buttonA2.style('font-size','15px')
				this.buttonA2.style('font-family','Jokerman')
					this.buttonA2.mousePressed(()=>{
						this.buttonA2.hide()
          this.title2.hide()
          obj1.destroy()
					//box1.destroy()
					this.tip1 = createElement('h3')
					this.tip1.html("Before stepping in, I want to say something- try to enjoy")
					this.tip1.position(300,300)
					this.tip1.style('color','darkblue')
					var box = createSprite(500,200,20,20);
					box.addImage("adding",img1)
					box.scale = 0.5
					this.tip2 = createElement('h3')
					this.tip2.html("with whatever you have!")
					this.tip2.style('color','darkblue');
					this.tip2.position(400,350)
					this.button2 = createButton("Let's dive in =>")
					this.button2.position(530,570)
					this.button2.style('background','gold')
					this.button2.style('font-family','Jokerman')
					this.button2.style('color','purple');
					this.button2.style('width','170px')
					this.button2.style('height','30px')
					this.button2.style('font-size','15px')
					this.button2.mousePressed(()=>{
					this.tips1 = createElement('h2');
					this.tips1.html('~ Poetry!')
					this.tips1.style('color','darkblue')
					box.destroy()
					var box2 = createSprite(150,300,20,20)
					box2.addImage("adding",img3)
					box2.scale = 0.3
					var box12 = createSprite(1100,400,20,20);
					box12.addImage("adding",img4)
					box12.scale = 0.3
					var box22 = createSprite(600,400,20,20);
					box22.addImage("adding",img6);
					this.tips1.position(400,200);
					this.tip1.hide()
					this.tip2.hide()
					this.button2.hide()
					this.button3 = createButton('Next -->')
					this.button3.position(530,570)
					this.button3.style('background','gold')
					this.button3.style('font-family','Jokerman')
					this.button3.style('color','purple');
					this.button3.style('width','130px')
					this.button3.style('height','30px')
					this.button3.style('font-size','15px')
					this.button3.mousePressed(()=>{
					this.tips2 = createElement('h2')
					box2.destroy()
					box12.destroy()
					box22.destroy()
					var box3 = createSprite(200,350,20,20);
					box3.addImage("adding",img5);
					box3.scale = 0.2
					this.tips2.html('~ drawing and painting using natural pigments')
					this.tips2.position(400,50)
					this.tips2.style('color','darkblue')
					this.tips1.hide()
					this.button3.hide()
					var box23 = createSprite(600,300,20,20)
					box23.addImage("adding",img7)
					var box33 = createSprite(1060,350,20,20);
					box33.addImage("adding",img8)
					box33.scale = 0.4
					this.button4 = createButton('-->')
					this.button4.position(530,570)
					this.button4.style('background','gold')
					this.button4.style('font-family','Jokerman')
					this.button4.style('color','purple');
					this.button4.style('width','130px')
					this.button4.style('height','30px')
					this.button4.style('font-size','15px')
					this.button4.mousePressed(()=>{
					this.tips3 = createElement('h2')
					this.tips3.html('~ helping someone or making someone happy')
					this.tips3.position(300,100)
					this.tips3.style('color','darkblue')

					this.tips2.hide()
					this.button4.hide()
					box23.destroy()
					box3.destroy()
					box33.destroy()
					var box4 = createSprite(500,300,20,20);
					box4.addImage("adding",img9);
					var box24 = createSprite(100,300,20,20);
					box24.addImage("adding",img10)
					box24.scale = 0.8
					var box34 = createSprite(900,300,20,20);
					box34.addImage("adding",img11)
					box34.scale = 0.5
					this.button5 = createButton('-->')
					this.button5.position(530,570)
					this.button5.style('background','gold')
					this.button5.style('font-family','Jokerman')
					this.button5.style('color','purple');
					this.button5.style('width','130px')
					this.button5.style('height','30px')
					this.button5.style('font-size','15px')
					this.button5.mousePressed(()=>{
					this.tips4 = createElement('h2')
					this.tips4.html('~ eating something you like or eating something sweet like chocolate')
					this.tips4.position(290,80)
					this.tips4.style('color','darkblue')
					box4.destroy()
					box24.destroy()
					box34.destroy()
					var box5 = createSprite(120,300,20,20);
					box5.addImage("adding",img12)
					box5.scale = 0.7
					var box25 = createSprite(900,300,20,20);
					box25.addImage("adding",img13);
					box25.scale = 0.5
          var box35 = createSprite(500,300,20,20);
          box35.addImage(img23)
					this.tips3.hide()
					this.button5.hide()
					this.button6 = createButton('-->')
					this.button6.position(530,570)
					this.button6.style('background','gold')
					this.button6.style('font-family','Jokerman')
					this.button6.style('color','purple');
					this.button6.style('width','130px')
					this.button6.style('height','30px')
					this.button6.style('font-size','15px')
					this.button6.mousePressed(()=>{
					this.tips5 = createElement('h2')
					this.tips5.html('~ trying to do something which is hard for you and then finally achieving it')
					this.tips5.position(230,100)
					this.tips5.style('color','darkblue')
					box5.destroy()
					box25.destroy()
          box35.destroy()
					var box6 = createSprite(130,300,30,30);
					box6.addImage("adding",img14)
					box6.scale = 0.8
					var box26 = createSprite(1000,300,30,30)
					box26.addImage("adding",img15)
					box26.scale = 0.7
          var box36 = createSprite(500,350,30,30);
          box36.addImage(img25)
					this.tips4.hide()
					this.button6.hide()
					this.button7 = createButton('-->')
					this.button7.position(530,570)
					this.button7.style('background','gold')
					this.button7.style('font-family','Jokerman')
					this.button7.style('color','purple');
					this.button7.style('width','130px')
					this.button7.style('height','30px')
					this.button7.style('font-size','15px')
					this.button7.mousePressed(()=>{
					this.tips6 = createElement('h2')
					this.tips6.html('~ spending time with your family and interacting with people')
					this.tips6.position(280,100)
					this.tips6.style('color','darkblue')

					this.tips5.hide()
					box6.destroy()
					box26.destroy()
          box36.destroy()
					var box7 = createSprite(130,300,40,40)
					box7.addImage("adding",img16)
					box7.scale = 0.4 
					var box27 = createSprite(950,300,20,20);
					box27.addImage("adding",img17)
					box27.scale = 0.9
					var box37 = createSprite(1000,500,20,20);
					box37.addImage("adding",img18)
					box37.scale = 0.5
          var box47 = createSprite(500,350,30,30);
          box47.addImage(img26)
					this.button7.hide()
					this.button8 = createButton('Next -->')
					this.button8.position(530,570)
					this.button8.style('background','gold')
					this.button8.style('font-family','Jokerman')
					this.button8.style('color','purple');
					this.button8.style('width','130px')
					this.button8.style('height','30px')
					this.button8.style('font-size','15px')
					this.button8.mousePressed(()=>{
						this.input = createInput()
						this.input.position(400,300)
						this.input.style('width','230px')
						this.input.style('background','darkblue')
						this.input.style('height','50px')
						this.input.style('font-family','century gothic')
						this.input.style('color','white')
						this.ty1 = createElement('h3')
						this.ty1.html('enter your name:')
						this.ty1.position(400,250);
						this.button9 = createButton('-->>')
						this.button9.position(530,570)
						this.button9.style('background','gold')
					this.button9.style('font-family','Jokerman')
					this.button9.style('color','purple');
					this.button9.style('width','130px')
					this.button9.style('height','30px')
					this.button9.style('font-size','15px')
						this.button8.hide()
						this.tips6.hide()
						box7.destroy()
						box27.destroy()
						box37.destroy()
            box47.destroy()
						this.button9.mousePressed(()=>{
							this.input.hide()
							this.button9.hide()
							this.ty1.hide()
							attendant1.name = this.input.value()
							attendant1.update()
							var certificate = createSprite(500,310,20,20)
							certificate.addImage(img)
							this.bye = createElement('h3')
							this.bye.style('font-family','Bahnschrift SemiBold Condensed')
							this.bye.html(attendant1.name)
							this.bye.position(650,300)
							this.bye.style('font-size','40px')
							this.bye.style('color','darkblue')
								var rand = createSprite(random(10,800),random(0,600),10,10)
								rand.addImage("adding",img19);
								rand.velocityY = 6;
								rand.scale = 0.1
								var rand2 = createSprite(random(10,800),random(0,600),10,10)
								rand2.addImage("adding",img20);
								rand2.velocityY = 6;
								rand2.scale = 0.1
								var rand1 = createSprite(random(10,1000),random(0,600),10,10)
								rand1.addImage("adding",img21);
								rand1.velocityY = 6;
								rand1.scale = 0.1
								var rand12 = createSprite(random(10,1000),random(0,600),10,10)
								rand12.addImage("adding",img19);
								rand12.velocityY = 6;
								rand12.scale = 0.1
								var rand13 = createSprite(random(10,1000),random(0,600),10,10)
								rand13.addImage("adding",img20);
								rand13.velocityY = 6;
								rand13.scale = 0.1
								var rand14 = createSprite(random(10,800),random(0,600),10,10)
								rand14.addImage("adding",img21);
								rand14.velocityY = 6;
								rand14.scale = 0.1
								var randA = createSprite(random(10,800),random(0,600),10,10)
								randA.addImage("adding",img19);
								randA.velocityY = 6;
								randA.scale = 0.1
								var randB = createSprite(random(10,800),random(0,600),10,10)
								randB.addImage("adding",img20);
								randB.velocityY = 6;
								randB.scale = 0.1
								var randC = createSprite(random(10,800),random(0,600),10,10)
								randC.addImage("adding",img21);
								randC.velocityY = 6;
								randC.scale = 0.1
								var randD = createSprite(random(10,800),random(0,600),10,10)
								randD.addImage("adding",img19);
								randD.velocityY = 6;
								randD.scale = 0.1
								var randE = createSprite(random(10,800),random(0,600),10,10)
								randE.addImage("adding",img20);
								randE.velocityY = 6;
								randE.scale = 0.1
								var randF = createSprite(random(10,800),random(0,600),10,10)
								randF.addImage("adding",img21);
								randF.velocityY = 6;
								randF.scale = 0.1
								var randG = createSprite(random(10,800),random(0,600),10,10)
								randG.addImage("adding",img19);
								randG.velocityY = 6;
								randG.scale = 0.1
								var randH = createSprite(random(10,800),random(0,600),10,10)
								randH.addImage("adding",img20);
								randH.velocityY = 6;
								randH.scale = 0.1
								var randI = createSprite(random(10,800),random(0,600),10,10)
								randI.addImage("adding",img21);
								randI.velocityY = 6;
								randI.scale = 0.1
								this.buttonA = createButton('-->');
								this.buttonA.position(530,570)
								this.buttonA.style('background','gold')
								this.buttonA.style('font-family','Jokerman')
								this.buttonA.style('color','purple');
								this.buttonA.style('width','130px')
								this.buttonA.style('height','30px')
								this.buttonA.style('font-size','15px')
								this.buttonA.mousePressed(()=>{
								 this.inputA = createInput()
								 this.inputA.position(400,300);
                 this.inputA.style('background','teal')
                 this.inputA.style('color','white')
                 this.quest1 = createElement('h3')
                 this.quest1.position(250,200);
                 this.quest1.html('Please type your answer in the box to complete the sentence')
                 this.quest2 = createElement('h4')
                 this.quest2.position(260,280)
                 this.quest2.html(attendant1.name + ' says,usually ')
                 this.quest3 = createElement('h4')
                 this.quest3.position(580,280)
                 this.quest3.html(' makes her/him happy')
									this.buttonA.hide()
									certificate.destroy();
									this.bye.hide()
									this.buttonB = createButton('-->')
									this.buttonB.position(530,570)
									this.buttonB.style('background','gold')
									this.buttonB.style('font-family','Jokerman')
									this.buttonB.style('color','purple');
									this.buttonB.style('width','130px')
									this.buttonB.style('height','30px')
									this.buttonB.style('font-size','15px')
									this.buttonB.mousePressed(()=>{
                    gameState = "last"
									 this.buttonB.hide()
									 this.inputA.hide();
                   this.quest1.hide()
                   this.quest2.hide()
                   this.quest3.hide()
									 attendant1.answer = this.inputA.value()
									 attendant1.update();
									 this.answer1 = createElement('h3')
                   this.answer1.html(attendant1.name  +' says, usually '+ attendant1.answer +'  makes her/him happy')
                   this.answer1.position(400,300);
                   this.answer1.style('font-family','century gothic')
                   this.answer1.style('color','darkblue')
                   this.answer2 = createElement('h2');
                   this.answer2.html('Thanks a lot for providing your answer :)');
                   this.answer2.position(400,200)
                   this.answer2.style('font-family','century gothic')
                   var cake = createSprite(200,300,20,20);
                    cake.addImage(img33);
                    cake.scale = 0.2;
                   this.buttonC = createButton('-->')
                   this.buttonC.position(530,570);
									 this.buttonC.style('background','gold')
										this.buttonC.style('font-family','Jokerman')
										this.buttonC.style('color','purple');
										this.buttonC.style('width','130px')
										this.buttonC.style('height','30px')
										this.buttonC.style('font-size','15px')
                   this.buttonC.mousePressed(()=>{
                     gameState = "last1"
                     this.buttonC.hide()
                     this.answer1.hide()
                     this.answer2.hide()
                     cake.destroy()
                     var potion1 = createSprite(400,300,30,30);
                     potion1.addImage(img24)
                     potion1.scale = 0.05
                     var potion2 = createSprite(500,300,30,30)       
                     potion2.addImage(img29)
                     potion2.scale = 0.07;
                     var potion3 = createSprite(600,300,30,30)
                     potion3.addImage(img30)  
                     potion3.scale = 0.07;  
                     var potion4 = createSprite(700,300,30,30);
                     potion4.addImage(img31);
                     potion4.scale = 0.07    
                     var potion5 = createSprite(800,300,30,30);
                     potion5.addImage(img32);
                     potion5.scale = 0.1    
                     var potion6 = createSprite(900,300,30,30)       
                     potion6.addImage(img29)
                     potion6.scale = 0.08;                      
                     var plant = createSprite(300,300,30,30)
                     plant.addImage(img27)
                     plant.scale = 0.05
                     this.sent2 = createElement('h3')
                     this.sent2.html('press on the buttons to pour the potions and to grow the plant')
                     this.sent2.position(400,50);
                     this.buttonD = createButton('Add poetry')
										 this.buttonD.style('font-family','century gothic')
										 this.buttonD.style('background','yellow')
                     this.buttonD.position(350,200)
										 this.buttonD.style('height','30px')

                     this.buttonD.mousePressed(()=>{
                       this.buttonD.hide()
                       potion1.destroy();
                       plant.scale = 0.06
                       this.buttonE = createButton('Add painting using natural pigments');
                       this.buttonE.position(400,200);
											 this.buttonE.style('font-family','century gothic')
										   this.buttonE.style('background','purple')
											 this.buttonE.style('color','white')
											 this.buttonE.style('height','30px')

                       this.buttonE.mousePressed(()=>{
                         plant.scale = 0.07
                         this.buttonE.hide()
                         potion2.destroy()
                         this.buttonF = createButton('Helping someone');
                         this.buttonF.position(500,200);
												 this.buttonF.style('font-family','century gothic')
												 this.buttonF.style('background','blue')
												 this.buttonF.style('color','white')
												 this.buttonF.style('height','30px')

                        this.buttonF.mousePressed(()=>{
                          this.buttonF.hide()
                          potion3.destroy();
                          plant.scale = 0.08
                          this.buttonG = createButton('eating something we like');
                          this.buttonG.position(600,200);
													this.buttonG.style('font-family','century gothic')
												 this.buttonG.style('background','pink')
												 this.buttonG.style('color','darkblue')
												 this.buttonG.style('height','30px')

                          this.buttonG.mousePressed(()=>{
                            this.buttonG.hide()
                            potion4.destroy();
                            plant.scale = 0.09
                            this.buttonH = createButton('achieving something hard')
                            this.buttonH.position(700,200)
														this.buttonH.style('font-family','century gothic')
												 this.buttonH.style('background','green')
												 this.buttonH.style('color','darkblue')
												 this.buttonH.style('height','30px')
                            this.buttonH.mousePressed(()=>{
                              this.buttonH.hide()
                              potion5.destroy()
                              plant.scale = 0.1
                              this.buttonI = createButton('interacting and spending time with your family')
                              this.buttonI.position(800,200)
															this.buttonI.style('font-family','century gothic')
												 this.buttonI.style('background','orange')
												 this.buttonI.style('color','white')
												 this.buttonI.style('height','30px')
                              this.buttonI.mousePressed(()=>{
                                this.sent2.hide()
                                this.buttonI.hide()
                                potion6.destroy()
                                plant.destroy()
                                var plant1 = createSprite(300,300,30,30);
                                plant1.addImage(img28);
                                plant1.scale = 0.3
                                this.sent1 = createElement('h1');
                                this.sent1.html('Congratulations! you have grown the plant of happiness...')
                                this.sent1.position(400,300,30,30)
                                this.sent1.style('color','darkblue');
                                this.buttonB2 = createButton('--->')
																this.buttonB2.position(530,570)
																this.buttonB2.style('font-family','century gothic')
																this.buttonB2.style('background','darkblue')
																this.buttonB2.style('color','white')
																this.buttonB2.style('height','30px')

																this.buttonB2.mousePressed(()=>{
																	this.sent1.hide()
																	plant1.destroy()
																	gameState = "end"
																	this.buttonB2.hide()
																})
                              })
                            })
                          })
                        })
                       })
                     })
                   })
									})
								})
							})
					})
					})
							})
						})
					})
					})
			})
			})
    })
     if(gameState == "end"){
       fill("black")
       ellipse(240,310,30);
       ellipse(340,310,30)
	   var imgA = createSprite(700,200,20,20)
		imgA.addImage(img34)   
			  sprite = createSprite(180,400,20,20)
        sprite.shapeColor = "red";
      }
			 if(mousePressedOver(sprite)){
				 sprite1 =  createSprite(205,425,20,20)
        sprite1.shapeColor = "red"}
				if(mousePressedOver(sprite1)){
					sprite2 = createSprite(240,450,20,20)
        sprite2.shapeColor = "red"
        }
					if(mousePressedOver(sprite2)){
						sprite3 = createSprite(275,465,20,20);
            sprite3.shapeColor = "red"
					}
					if(mousePressedOver(sprite3)){
						sprite4 = createSprite(310,465,20,20)
            sprite4.shapeColor = "red"
					}
					if(mousePressedOver(sprite4)){
						sprite5 = createSprite(345,450,20,20)
            sprite5.shapeColor = "red";
					}
					if(mousePressedOver(sprite5)){
						sprite6 = createSprite(380,425,20,20)
            sprite6.shapeColor = "red"
					}
					if(mousePressedOver(sprite6)){
						sprite7 = createSprite(405,400,20,20);
            //add an image
			       sprite7.shapeColor = "red"
            next = createSprite(530,570,50,20)
			next.addImage(img35);
					}
				  if(mousePressedOver(next)){
              //change bg
			  var bg1 = createSprite(645,309,1290,620)
			  bg1.shapeColor = "white"
              //insert the conclusion
              var summ = createSprite(500,300,20,20)
			  summ.addImage(img36);
           gameState = "end2"
          }
			 
        
		}
}