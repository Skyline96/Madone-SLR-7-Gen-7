<script setup>
import LocomotiveScroll from 'locomotive-scroll';
import { animate, scroll, inView } from "motion";

const isNavOpen = ref(false)
const isPageScrolled = ref(false)

const locomotiveScroll = new LocomotiveScroll();

onMounted(() => {
  document.addEventListener("scroll", () => { isPageScrolled.value = window.scrollY > 0 })


  const headings__content = document.querySelectorAll(".headings__content")
  headings__content.forEach(content => {
    content.style.opacity = 0;
    content.style.transform = "translateY(32px)"
  })

  const hero__img = document.querySelector("#hero_img")
  hero__img.style.opacity = 0

  inView(
    animate(hero__img, { opacity: 1, scale: [1.2, 1] }, { duration: 1 }, { easing: "ease-in-out" })
  )

  inView(headings__content,
    (content) => { animate(content.target, { opacity: 1, transform: "translateY(0)" }, { duration: 1 }, { easing: "ease-in-out" }) },
    { amount: "all" })

  const bg__text = document.querySelectorAll(".bg__text")
  bg__text.forEach(text => scroll(animate(text, { transform: "translateX(0)" })))

  const description__text = document.querySelectorAll(".description__text")
  description__text.forEach(text => {
    text.style.opacity = 0;
  })

  inView(description__text,
    (text) => { animate(text.target, { opacity: 1 }, { duration: 1, delay: .1 }, { easing: "ease-out" }) },
    { amount: "all" })
});
</script>

<template>
  <div class="bg-black text-white">
    <header class="sticky top-0 z-10">
      <div class="container relative max-w-screen-xl mx-auto">
        <nav
          class="backdrop-blur-md absolute top-0 start-0 end-0 flex flex-col sm:flex-row justify-between sm:items-center mt-4 mx-3 sm:mx-0 p-3 sm:py-0 font-semibold rounded-[28px] overflow-hidden transition-all"
          :class="isPageScrolled ? 'bg-white bg-opacity-20 px-6' : ''">
          <div class="flex justify-between">
            <div id="brand" class="self-center text-lg">
              <a href="https://www.trekbikes.com/" target="_blank"
                class="block sm:leading-[48px] hover:opacity-50 transition-opacity ease-in-out duration-300">TREK
                CLONE</a>
            </div>
            <button class="sm:hidden group" @click="isNavOpen = !isNavOpen">
              <div
                class="flex overflow-hidden items-center justify-center rounded w-8 h-8 bg-gray-500 ring-0 ring-gray-400 group-focus:ring-4 ring-opacity-30 transition-all duration-300">
                <div
                  class="flex flex-col justify-between w-5 h-5 transform transition-transform duration-300 origin-center overflow-hidden">
                  <div class="bg-white h-[2px] w-7 transform transition-transform duration-300 origin-left"
                    :class="isNavOpen ? 'rotate-[42deg]' : 'rotate-[0deg]'">
                  </div>
                  <div class="bg-white h-[2px] w-1/2 rounded transform transition-transform duration-300"
                    :class="isNavOpen ? '-translate-x-10' : 'translate-x-0'">
                  </div>
                  <div class="bg-white h-[2px] w-7 transform transition-transform duration-300 origin-left"
                    :class="isNavOpen ? '-rotate-[42deg]' : 'rotate-[0deg]'">
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div id="nav-links" class="grid sm:grid-rows-1 sm:visible sm:mt-0 transition-[grid-template-rows] duration-300"
            :class="isNavOpen ? 'grid-rows-[1fr] visible mt-6 mb-2' : 'grid-rows-[0fr] invisible mt-0 mb-0'">
            <div class="overflow-hidden flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="" target="_blank"
                class="block sm:leading-[48px] hover:opacity-50 transition-opacity ease-in-out duration-300">Overview</a>
              <a href="#"
                class="block sm:leading-[48px] hover:opacity-50 transition-opacity ease-in-out duration-300">Features</a>
              <a href="#"
                class="block sm:leading-[48px] hover:opacity-50 transition-opacity ease-in-out duration-300">Specifications</a>
              <a href="#"
                class="block sm:leading-[48px] hover:opacity-50 transition-opacity ease-in-out duration-300">Sizing</a>
              <a href="#"
                class="block sm:leading-[48px] hover:opacity-50 transition-opacity ease-in-out duration-300">Geometry</a>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="overflow-x-hidden">
      <section class="">
        <div class="container relative max-w-screen-xl mx-auto py-20">
          <img id="hero_img" src="/images/MadoneSLR7_23_37025_A_Portrait.webp" width="1800" height="1080" alt=""
            class="max-w-full ms-auto">
          <div class="flex flex-col h-full justify-center px-4 text-center sm:text-start sm:absolute sm:inset-0">
            <div class="sm:pb-24">
              <div class="headings__content">
                <p class="text-sm font-semibold uppercase tracking-widest underline underline-offset-4 mb-2">The ultimate
                  race
                  bike</p>
                <h1 class="text-6xl font-bold uppercase">Madone SLR 7</h1>
                <h3 class="text-4xl opacity-70">Gen 7</h3>
              </div>
              <p class="text-base font-semibold my-3 bg-white bg-opacity-25 rounded-full inline-block px-4 py-1">₹675,599
              </p>
              <p class="description__text text-lg font-light max-w-[45ch]">The Madone SLR 7 is
                the ultimate race
                machine. An 800 Series OCLV
                Carbon frame with exclusive IsoFlow technology adds an aerodynamic advantage, cuts weight and smooths the
                road ahead. It's
                built up with the ultra-fast precision shifting of Shimano's wireless electronic Ultegra Di2 drivetrain
                and
                deep carbon wheels that cut through the wind.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container relative max-w-screen-xl mx-auto py-12 sm:py-20 z-0">
          <div class="flex flex-col-reverse sm:flex-row sm:items-center gap-8">
            <div class="bg__text absolute top-0 left-0 -translate-x-1/2 -z-10">
              <p
                class="text-[150px] sm:text-[250px] leading-none font-bold uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-[#373737] via-[#373737]/40 via-40%">
                Madone</p>
            </div>
            <div class="flex-1 flex flex-col justify-center gap-8 px-4 sm:px-0 sm:pr-8">
              <div class="mx-auto sm:ms-0 text-center sm:text-start">
                <p class="text-8xl font-bold mb-8">-300g</p>
                <p class="text-2xl font-semibold">Nearly 300 grams <span class="font-extralight">lighter*</span></p>
              </div>
              <div class="mx-auto sm:me-0 text-center sm:text-end">
                <p class="text-8xl font-bold mb-8">+60s</p>
                <p class="text-2xl font-semibold">60 seconds/hour <span class="font-light italic">faster*</span></p>
              </div>
            </div>
            <div class="flex-1 px-4 text-center sm:text-start">
              <div class="headings__content mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold uppercase">A new standard of speed</h1>
                <h3 class="text-3xl sm:text-4xl font-light opacity-70">Now More Lighter. More Faster.</h3>
              </div>
              <p class="description__text text-base sm:text-lg font-light">We set out to make Madone the fastest road bike
                in the
                world. Years of research
                and development
                informed every aerodynamic inch of the seventh-generation Madone SLR to create a frame, cockpit and
                rider position that’s a whopping 19 watts faster than ever before.*
                <span class="font-semibold">*Compared to previous generation at 45 km/h</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container relative max-w-screen-xl mx-auto py-12 sm:py-20 z-0">
          <div class="flex flex-col-reverse sm:flex-row-reverse sm:items-center gap-8">
            <div data-scroll data-scroll-position="middle, end" data-scroll-class="before:-translate-x-full"
              class="relative flex-1 -z-20 before:content-[''] before:absolute before:inset-0 before:bg-black overflow-hidden before:transition-transform before:duration-1000 before:ease-in-out">
              <img src="/images/IsoFlow.webp" alt="" class="object-cover h-auto ms-auto">
            </div>
            <div class="flex-1 px-4 text-center sm:text-start">
              <div class="headings__content mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold uppercase">Never-before-seen IsoFlow Technology</h1>
                <h3 class="text-3xl sm:text-4xl font-light opacity-70">Brutal Performance. Total Comfort.</h3>
              </div>
              <p class="description__text text-base sm:text-lg font-light">All-new IsoFlow technology soaks up fatiguing
                bumps in the
                road so you can ride
                stronger for longer. A
                race-focused evolution of IsoSpeed comfort, IsoFlow flexes over bumps for a smoother ride, improves
                aerodynamics and shaves weight to save precious seconds in the saddle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container relative max-w-screen-xl mx-auto py-12 sm:py-20 z-0">
          <div class="bg__text absolute top-0 -right-0 translate-x-1/2 -z-10">
            <p
              class="text-[150px] sm:text-[250px] leading-none font-bold uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-[#373737] via-[#373737]/40 via-40%">
              SLR 7</p>
          </div>
          <div class="flex flex-col-reverse sm:flex-row sm:items-center gap-8">
            <div data-scroll data-scroll-position="middle, end" data-scroll-class="before:translate-x-full"
              class="relative flex-1 -z-20 before:content-[''] before:absolute before:inset-0 before:bg-black overflow-hidden before:transition-transform before:duration-1000 before:ease-in-out">
              <img src="/images/Aero.webp" alt="" class="object-cover h-auto ms-auto">
            </div>
            <div class="flex-1 px-4 text-center sm:text-start">
              <div class="headings__content mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold uppercase">Unprecedented road bike aerodynamics</h1>
                <h3 class="text-3xl sm:text-4xl font-light opacity-70">Advances in Aerodynamic Design</h3>
              </div>
              <p class="description__text text-base sm:text-lg font-light">The devil is in the details when it comes to
                heart-pounding,
                race-winning
                speed. Every element of the
                new Madone Gen 7 was expertly sculpted to create our most aerodynamic road race bike ever, including a
                new generation of Kammtail tube shapes, an aero-optimised cockpit and all-new IsoFlow technology that
                smooths air as it moves over the bike and accelerates it through the frame for even more free speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container relative max-w-screen-xl mx-auto py-12 sm:py-20 z-0">
          <div class="bg__text absolute bottom-0 left-0 -translate-x-1/2 -z-10">
            <p
              class="text-[150px] sm:text-[250px] leading-none font-bold uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-[#373737] via-[#373737]/40 via-40%">
              Gen 7</p>
          </div>
          <div class="flex flex-col-reverse sm:flex-row-reverse sm:items-center gap-8">
            <div data-scroll data-scroll-position="middle, end" data-scroll-class="before:-translate-x-full"
              class="relative flex-1 -z-20 before:content-[''] before:absolute before:inset-0 before:bg-black overflow-hidden before:transition-transform before:duration-1000 before:ease-in-out">
              <img src="/images/Front.webp" alt="" class="object-cover h-auto ms-auto">
            </div>
            <div class="flex-1 px-4 text-center sm:text-start">
              <div class="headings__content mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold uppercase">Positioned for power</h1>
                <h3 class="text-3xl sm:text-4xl font-light opacity-70">Ergonomic and Aerodynamic Riding Position</h3>
              </div>
              <p class="description__text text-lg font-light">An overhauled bar/stem with a shorter reach and hoods that
                are 3 cm narrower
                than the drops move you
                into a more comfortable ergonomic riding position. This narrower hood position also greatly reduces
                rider drag for extra aerodynamic speed while maintaining control in the drops so you don’t lose power in
                explosive moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container relative max-w-screen-xl mx-auto py-12 sm:py-20 z-0">
          <div class="flex flex-col-reverse sm:flex-row sm:items-center gap-8">
            <div data-scroll data-scroll-position="middle, end" data-scroll-class="before:translate-x-full"
              class="relative flex-1 -z-20 before:content-[''] before:absolute before:inset-0 before:bg-black overflow-hidden before:transition-transform before:duration-1000 before:ease-in-out">
              <video width="100%" height="auto" autoplay muted>
                <source src="/videos/1.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <!-- <img src="/images/MadoneSLR7_23_37025_A_Alt1.webp" alt="" class="object-cover h-auto ms-auto"> -->
            </div>
            <div class="flex-1 px-4 text-center sm:text-start">
              <div class="headings__content mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold uppercase">Lighter than ever</h1>
                <h3 class="text-3xl sm:text-4xl font-light opacity-70">New Gram-Shaving Design</h3>
              </div>
              <p class="description__text text-lg font-light">A new lightweight design and our best and lightest OCLV
                Carbon make the
                seventh-generation Madone our
                lightest Madone disc ever, shaving around 300 grams off the previous ultra-lightweight version.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="sm:grid sm:grid-cols-2 md:grid-cols-4 py-12 border-b border-t border-white border-opacity-30">
          <div class="mx-4 pb-8 sm:pb-0">
            <h4 class="uppercase text-lg font-semibold mb-2">Shop</h4>
            <ul class="text-white opacity-40 italic">
              <li><a href="" class="hover:underline">Road bikes</a></li>
              <li><a href="" class="hover:underline">Mountain bikes</a></li>
              <li><a href="" class="hover:underline">Hybrid bikes</a></li>
              <li><a href="" class="hover:underline">Men's bikes</a></li>
              <li><a href="" class="hover:underline">Women's bikes</a></li>
              <li><a href="" class="hover:underline">Equipment</a></li>
              <li><a href="" class="hover:underline">Find a bike shop</a></li>
            </ul>
          </div>
          <div class="mx-4 pb-8 sm:pb-0">
            <h4 class="uppercase text-lg font-semibold mb-2">Inside Trek</h4>
            <ul class="text-white opacity-40 italic">
              <li><a href="" class="hover:underline">Heritage</a></li>
              <li><a href="" class="hover:underline">Technology</a></li>
              <li><a href="" class="hover:underline">Racing</a></li>
              <li><a href="" class="hover:underline">Stories</a></li>
              <li><a href="" class="hover:underline">Work at Trek</a></li>
            </ul>
          </div>
          <div class="mx-4 pb-8 sm:pb-0">
            <h4 class="uppercase text-lg font-semibold mb-2">Support</h4>
            <ul class="text-white opacity-40 italic">
              <li><a href="" class="hover:underline">Dealer sign-up</a></li>
              <li><a href="" class="hover:underline">Customer service</a></li>
              <li><a href="" class="hover:underline">Contact us</a></li>
              <li><a href="" class="hover:underline">Newsletter sign-up</a></li>
              <li><a href="" class="hover:underline">Warranty</a></li>
              <li><a href="" class="hover:underline">How to shop safely</a></li>
              <li><a href="" class="hover:underline">Manuals and user guides</a></li>
              <li><a href="" class="hover:underline">Product support</a></li>
              <li><a href="" class="hover:underline">Bike sizing and fit guides</a></li>
              <li><a href="" class="hover:underline">Bike registration</a></li>
              <li><a href="" class="hover:underline">Bike archive</a></li>
              <li><a href="" class="hover:underline">Suspension calculator</a></li>
            </ul>
          </div>
          <div class="mx-4 pb-8 sm:pb-0">
            <h4 class="uppercase text-lg font-semibold mb-2">Legal</h4>
            <ul class="text-white opacity-40 italic">
              <li><a href="" class="hover:underline">Road bikes</a></li>
              <li><a href="" class="hover:underline">Mountain bikes</a></li>
              <li><a href="" class="hover:underline">Hybrid bikes</a></li>
              <li><a href="" class="hover:underline">Men's bikes</a></li>
              <li><a href="" class="hover:underline">Women's bikes</a></li>
              <li><a href="" class="hover:underline">Equipment</a></li>
              <li><a href="" class="hover:underline">Find a bike shop</a></li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center py-4 mx-4">
          <p class="">&copy; Trek Bicycle Corporation 2024</p>
        </div>
      </div>
    </footer>
  </div>
</template>
