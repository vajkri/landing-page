/**
 * Created by krisztinavajda on 10/01/16.
 */

'use strict';

app.controller('HomeCtrl', function($scope, AboutService, SkillsService) {

  $scope.facts = AboutService.facts;
  $scope.skills = SkillsService.skills[0];

  console.log($scope.skills);

  // init Scroll Magic controller
  var homeScrollController = new ScrollMagic.Controller();


  // scenes
  var tweenMouse = TweenMax.to('#anim--info-scroll', 0.5, {
    opacity: 0
  });

  var sceneMouse = new ScrollMagic.Scene({
    duration: 300,
    offset: 300,
    triggerElement: "#anim--h1-job"
  })
    .setTween(tweenMouse);
    //.addIndicators({ name: "1 (duration: 500)" }) // add indicators (requires plugin)
    //.setPin("#anim--mouse-scroll")




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
    }),
    TweenMax.to(".intro", 0.5, {
      backgroundColor: 'red'
    })
  ]);

  var sceneHi = new ScrollMagic.Scene({
    duration: 500, // the scene should last for a scroll distance of 100px
    offset: 0 // start this scene after scrolling for 50px
  })
    .setTween(tweenHi) // trigger a TweenMax.to tween
    //.addIndicators({ name: "1 (duration: 500)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-hi") // pins the element for the the scene's duration
    .setClassToggle('body', 'scene-1-active');


  var tweenName = new TimelineMax();
  tweenName.add([
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

  var sceneName = new ScrollMagic.Scene({
    triggerElement: ".pin--h1-intro",
    duration: 500
  })
    .setTween(tweenName)
    //.addIndicators({ name: "2 (duration: 500)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-intro");


  var tweenJob = new TimelineMax();
  tweenJob.add([
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

  var sceneJob = new ScrollMagic.Scene({
    triggerElement: ".pin--h1-job",
    duration: 500
  })
    .setTween(tweenJob)
    //.addIndicators({ name: "3 (duration: 500)" }) // add indicators (requires plugin)
    .setPin(".pin--h1-job");





  var tweenTransition = TweenMax.to('#anim--intro-transition', 0.5, {
    backgroundColor: 'white'
  });

  var sceneTransition = new ScrollMagic.Scene({
    duration: 300,
    offset: 450,
    triggerElement: "#anim--intro-transition"
  })
    //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenTransition);





  var tween5 = new TimelineMax();
  tween5.add([
    TweenMax.from(".about", 0.5, {
      opacity: 0,
      ease: Back.ease
    }),
    TweenMax.to(".about", 0.5, {
      opacity: 1,
      ease: Back.ease
    })
  ]);

  var scene5 = new ScrollMagic.Scene({
    //duration: 300,
    offset: -100,
    triggerElement: ".about"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tween5);





//Add scenes to controller
  homeScrollController.addScene([
    sceneMouse,
    sceneHi,
    sceneName,
    sceneJob,
    sceneTransition,
    scene5
  ]);


});
