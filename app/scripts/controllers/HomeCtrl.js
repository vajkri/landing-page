/**
 * Created by krisztinavajda on 10/01/16.
 */

'use strict';

app.controller('HomeCtrl', function($scope, $timeout, AboutService, SkillsService, WorkService) {

  // Data
  $scope.work= WorkService.work;
  $scope.facts = AboutService.facts;
  $scope.skills = SkillsService.skills[0];

  $scope.contentLoaded = false;
  $scope.$on('$viewContentLoaded', function(event) {
    $timeout(function() {
      $scope.contentLoaded = true;
    },0);
  });


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
    triggerElement: ".scroll-deck4"
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
    .setPin(".pin--h1-hi"); // pins the element for the the scene's duration





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
    TweenMax.fromTo(".scroll-deck3 .bg.before", 1,
      {
        x: 0,
        ease: splitTextEase
      },
      {
        xPercent: -100,
        ease: splitTextEase,
        delay: 0.5
      }),
    TweenMax.fromTo(".scroll-deck3 .bg.after", 1,
      {
        xPercent: 0,
        ease: splitTextEase
      },
      {
        xPercent: 100,
        ease: splitTextEase,
        delay: 0.5
      })
  ]);

// build scene
  var sceneSpiltFrontend = new ScrollMagic.Scene({
    triggerElement: ".scroll-deck3",
    triggerHook: 'onLeave',
    duration: '150%'
    //duration: '50%'
  })
    .setTween(tweenSplitFrontend)
    //.addIndicators({ name: "Frontend (duration: 500)" })
    .setPin(".scroll-deck3");





  var tweenBgWork = new TimelineMax();
  tweenBgWork.add([
    TweenMax.to("main", 0.5, {
      backgroundColor: "#ff7961"
    })
  ]);

  var sceneBgWork = new ScrollMagic.Scene({
    //duration: 500,
    //triggerHook: 'onEnter',
    triggerElement: ".section--work"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenBgWork);





  var tweenBgSkills = new TimelineMax();
  tweenBgSkills.add([
    TweenMax.to("main", 0.5, {
      backgroundColor: "#f65356"
    })
  ]);

  var sceneBgSkills = new ScrollMagic.Scene({
    //duration: 500,
    //triggerHook: 'onEnter',
    triggerElement: ".section--skills"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenBgSkills);


  // Return the visible amount of px
  // of any element currently in viewport.
  (function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el){
        function visPx(){
          var H = $(this).height(),
            r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
        } visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));

  // Run animation of skills only once, when it gets in view
  $(".section--skills").inViewport(function(px){
    if(px) $('body').addClass('skills--is-active') ;
  });





  var tweenBgInterests = new TimelineMax();
  tweenBgInterests.add([
    TweenMax.to("main", 0.5, {
      backgroundColor: "#eb1f48"
    })
  ]);

  var sceneBgInterests = new ScrollMagic.Scene({
    //duration: 500,
    triggerElement: ".section--interests"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenBgInterests);





  var tweenBgFooter = new TimelineMax();
  tweenBgFooter.add([
    TweenMax.to("main", 0.5, {
      backgroundColor: "#fff"
    })
  ]);

  var sceneBgFooter = new ScrollMagic.Scene({
    //duration: 500,
    triggerHook: 'onEnter',
    triggerElement: ".section--footer"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenBgFooter);





  var tweenInterests = new TimelineMax();
  tweenInterests.add([
    TweenMax.from(".section--interests", 0.5, {
      opacity: 0
    }),
    TweenMax.to(".section--interests", 0.5, {
      opacity: 1
    })
  ]);

  var sceneInterests = new ScrollMagic.Scene({
    //duration: 300,
    offset: -100,
    triggerElement: ".section--interests"
  })
  //.addIndicators({ name: "4 (duration: 300)" }) // add indicators (requires plugin)
    .setTween(tweenInterests);





//Add scenes to controller
  homeScrollController.addScene([
    sceneMouse,
    sceneHi,
    sceneName,
    sceneSpiltFrontend,
    sceneBgWork,
    sceneBgSkills,
    sceneBgInterests,
    sceneBgFooter,
  sceneInterests
  ]);


});
