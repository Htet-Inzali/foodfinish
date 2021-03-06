let waypoint = new Waypoint({
    element: document.getElementById("menu"),
    handler: function(direction) {
      if(direction==="down"){
          document.querySelector(".scroll-to-top").style.display = "block"

      }else{
        document.querySelector(".scroll-to-top").style.display = "none"
      }
    },
    offset: '75%'
  })

  let waypoint2 = new Waypoint({
    element: document.getElementById("about"),
    handler: function(direction) {
      if(direction === "down"){
        document.getElementById("nav").classList.add("shadow")
        document.getElementById("nav").classList.add("animate__fadeInDown")
      }else{
        document.getElementById("nav").classList.remove("shadow")
        document.getElementById("nav").classList.remove("animate__fadeInDown")
      }
    },
    offset: '75%'
  })

  ScrollReveal({
      origin : 'top',
      distance : '30px',
      duration : 2000,
      reset : true,
  }).reveal('.content',{
      interval: 200
  });