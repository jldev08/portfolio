const animateTextWithTypeIt = ()=>{
    window.onload = function(){
      new TypeIt("#complete_name",{
          speed:120,
          loop:true,
          waitUntilVisible:true,
      }).type("",{delay:400})
      .pause(500).delete(9)
      .type("",{delay:400})
      .pause(500)
      .delete(9)
      .go();
    }
  }

  export default animateTextWithTypeIt;