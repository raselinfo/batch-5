gsap.timeline()
    .from("#octopas",{
        autoAlpha:0,
       
    })

    .from("h1",{
        opacity:0,
       scale:0,
       ease:"back"
    })

    .fromTo(".imgWrapper img",{
        y:100
    },{
        y:-40,
       ease:"back",
   
        stagger:{
            amount:.3,
            from:"center"

        }
    })

    .from(".headingThree h3",{
        xPercent:100
    })