/**
 * Created by krisztinavajda on 10/01/16.
 */

'use strict';

app.controller('HomeCtrl', function($scope) {

  // init controller
  var homeScrollController = new ScrollMagic.Controller();


  // scenes
  var tweenMouse = TweenMax.to('#anim--mouse-scroll', 0.5, {
    opacity: 0
  });

  var sceneMouse = new ScrollMagic.Scene({
    duration: 300,
    //offset: 0,
    triggerElement: ".pin--h1-job"
  })
    .setTween(tweenMouse);
    //.addIndicators({ name: "1 (duration: 500)" }) // add indicators (requires plugin)
    //.setPin("#anim--mouse-scroll")




  var tween1 = new TimelineMax();
  tween1.add([
    TweenMax.fromTo("#anim--h1-hi", 0.5,
      {
        opacity: 0,
        left: "-20",
        ease: Back.ease
      },
      {
        opacity: 1,
        left: "0",
        ease: Back.ease
      }),
    TweenMax.to("#anim--h1-hi", 0.5, {
      opacity: 0,
      left: "20",
      ease: Back.ease,
      delay: 1
    })
  ]);

  var scene1 = new ScrollMagic.Scene({
    duration: 500, // the scene should last for a scroll distance of 100px
    offset: 0 // start this scene after scrolling for 50px
  })
    .setTween(tween1) // trigger a TweenMax.to tween
    //.addIndicators({ name: "1 (duration: 500)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-hi") // pins the element for the the scene's duration
    .setClassToggle('body', 'scene-1-active');


  var tween2 = new TimelineMax();
  tween2.add([
    TweenMax.from("#anim--h1-intro", 0.5, {
      opacity: 0,
      left: "-30",
      ease: Back.ease
    }),
    TweenMax.to("#anim--h1-intro", 0.5, {
      opacity: 1,
      left: "0",
      ease: Back.ease
    }),
    TweenMax.to("#anim--h1-intro", 0.5, {
      opacity: 0,
      left: "30",
      ease: Back.ease,
      delay: 1
    })
  ]);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".pin--h1-intro",
    duration: 500
  })
    .setTween(tween2)
    //.addIndicators({ name: "2 (duration: 500)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-intro");


  var tween3 = new TimelineMax();
  tween3.add([
    TweenMax.from("#anim--h1-job", 0.5, {
      opacity: 0,
      left: "-30",
      ease: Back.ease
    }),
    TweenMax.to("#anim--h1-job", 0.5, {
      opacity: 1,
      left: "0",
      ease: Back.ease
    }),
    TweenMax.to("#anim--h1-job", 0.5, {
      opacity: 0,
      left: "30",
      ease: Back.ease,
      delay: 1
    })
  ]);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: ".pin--h1-job",
    duration: 500
  })
    .setTween(tween3)
    //.addIndicators({ name: "3 (duration: 500)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-job");


//Add scenes to controller
  homeScrollController.addScene([
    sceneMouse,
    scene1,
    scene2,
    scene3
  ]);


});
