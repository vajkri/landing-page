/**
 * Created by krisztinavajda on 10/01/16.
 */

'use strict';

app.controller('HomeCtrl', function($scope) {


  //test



  // init controller
  var controller = new ScrollMagic.Controller();

  var tweenHi = new TimelineMax();
  tweenHi.add([
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

// build scene
  var hiScene = new ScrollMagic.Scene({
    duration: 500, // the scne should last for a scroll distance of 100px
    offset: 0 // start this scene after scrolling for 50px
  })
    .setTween(tweenHi) // trigger a TweenMax.to tween
    //.addIndicators({ name: "1 (duration: 200)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-hi"); // pins the element for the the scene's duration




  var tweenIntro = new TimelineMax();
  tweenIntro.add([
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

// build scene
  var introScene = new ScrollMagic.Scene({
    triggerElement: ".pin--h1-intro",
    duration: 500, // the scne should last for a scroll distance of 100px
  })
    .setTween(tweenIntro) // trigger a TweenMax.to tween
    //.addIndicators({ name: "1 (duration: 200)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-intro"); // pins the element for the the scene's duration



//Add scenes to controller
  controller.addScene([
    hiScene,
    introScene
  ]);




});
