/**
 * Created by krisztinavajda on 10/01/16.
 */

'use strict';

app.controller('HomeCtrl', function($scope, AboutService, SkillsService) {

  // Data
  $scope.facts = AboutService.facts;
  $scope.skills = SkillsService.skills[0];




  //ScrollMagic-related setup
  var winWidth;
  $(window).resize(function(){
    winWidth = window.innerWidth;
  });

  var splitTextEase = Power3.easeInOut;


  // init Scroll Magic controller
  var homeScrollController = new ScrollMagic.Controller();


  // scenes
  var tweenMouse = TweenMax.to('#anim--info-scroll', 0.5, {
    opacity: 0
  });

  var sceneMouse = new ScrollMagic.Scene({
    duration: 300,
    offset: 300,
    triggerElement: ".scroll-deck3"
  })
    .setTween(tweenMouse);
  //.addIndicators({ name: "1 (duration: 500)" }) // add indicators (requires plugin)
  //.setPin("#anim--mouse-scroll")





  var tweenHi = new TimelineMax();
  tweenHi.add([
    TweenMax.to("#anim--h1-hi", 0.5, {
      opacity: 0,
      x: 20,
      ease: Back.ease,
      delay: 1
    })
    //TweenMax.to(".intro", 0.5, {
    //  backgroundColor: 'red'
    //})
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
      x: -30,
      ease: Back.ease
    }),
    TweenMax.to("#anim--h1-intro", 0.5, {
      opacity: 1,
      x: 0,
      ease: Back.ease
    }),
    TweenMax.to("#anim--h1-intro", 0.5, {
      opacity: 0,
      x: 30,
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





  var tweenSplitFrontend = new TimelineMax();
  tweenSplitFrontend.add([
    TweenMax.from(".bg.before .split-text, .bg.after .split-text", 0.5, {
      opacity: 0,
      x: -30,
      ease: Back.ease
    }),
    TweenMax.to(".bg.before .split-text, .bg.after .split-text", 0.5, {
      opacity: 1,
      x: 0,
      ease: Back.ease
    }),
    TweenMax.fromTo(".scroll-deck3 .bg.before", 0.5,
      {
        x: 0,
        ease: splitTextEase
      },
      {
        xPercent: -100,
        ease: splitTextEase,
        delay: 1
      }),
    TweenMax.fromTo(".scroll-deck3 .bg.after", 0.5,
      {
        xPercent: 0,
        ease: splitTextEase
      },
      {
        xPercent: 100,
        ease: splitTextEase,
        delay: 1
      })
  ]);

// build scene
  var sceneSpiltFrontend = new ScrollMagic.Scene({
    triggerElement: ".scroll-deck3",
    triggerHook: 'onLeave',
    duration: '50%'
  })
    .setTween(tweenSplitFrontend)
    //.addIndicators({ name: "Frontend (duration: 500)" })
    .setPin(".scroll-deck3");





  var tweenBgSkills = new TimelineMax();
  tweenBgSkills.add([
    TweenMax.to("main", 0.5, {
      backgroundColor: "#ff7961"
    })
  ]);

  var sceneBgSkills = new ScrollMagic.Scene({
    duration: 300,
    triggerElement: ".section--skills"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenBgSkills);






  var tweenBgInterests = new TimelineMax();
  tweenBgInterests.add([
    TweenMax.to("main", 0.5, {
      backgroundColor: "#fa625b"
    })
  ]);

  var sceneBgInterests = new ScrollMagic.Scene({
    duration: 300,
    triggerElement: ".section--interests"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenBgInterests);





  var tweenAbout = new TimelineMax();
  tweenAbout.add([
    TweenMax.from(".about", 0.5, {
      opacity: 0
    }),
    TweenMax.to(".about", 0.5, {
      opacity: 1
    })
  ]);

  var sceneAbout = new ScrollMagic.Scene({
    //duration: 300,
    offset: -100,
    triggerElement: ".about"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenAbout);





//Add scenes to controller
  homeScrollController.addScene([
    sceneMouse,
    sceneHi,
    sceneName,
    sceneSpiltFrontend,
    sceneBgSkills,
    sceneBgInterests,
    sceneAbout
  ]);


});
