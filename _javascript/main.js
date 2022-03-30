var viewWidth = document.querySelector('body').offsetWidth;

gsap.to('.ilustracija',{
  x: .1 * viewWidth,
  duration: 5,
  repeat: -1,
  yoyo: true,
  repeatDelay: .5,
  ease:"Power1.easeInOut",
})

gsap.from('.content--nos',{
  scrollTrigger: {
      trigger: '.content--nos',
      start: 'top 70%'
  },
  x: .5 * viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('.content--kapak',{
  scrollTrigger: {
      trigger: '.content--kapak',
      start: 'top 70%',
  },
  x: -.5 * viewWidth,
  opacity: 0,
  duration: 2,
  delay: 1,
  ease:"power2.out"
})

gsap.from('.content--grudi',{
  scrollTrigger: {
      trigger: '.content--grudi',
      start: 'top 70%'
  },
  x: .5 * viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('.content--lice',{
  scrollTrigger: {
      trigger: '.content--lice',
      start: 'top 70%',
  },
  x: -.5 * viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('.content--liposukcija',{
  scrollTrigger: {
      trigger: '.content--liposukcija',
      start: 'top 70%'
  },
  x: .5 * viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('.content--tijelo',{
  scrollTrigger: {
      trigger: '.content--tijelo',
      start: 'top 70%',
  },
  x: -.5 * viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

// var tl2 = gsapTimeline({ repeat: -1, repeatDelay: 1 })
// tl2.to('main',{
//   x: .1 * viewWidth,
//   duration: 2,
//   ease:"power2.out",
// });
// tl2.to('main',{
//   x: -.1 * viewWidth,
//   duration: 2,
//   ease:"power2.out",
// });

// var tl = gsap.timeline({repeat: -1, repeatDelay: 1});
// tl.to("main", {x: 100, duration: 1});
// tl.to("main", {y: 50, duration: 1});

