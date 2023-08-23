import React, { useLayoutEffect, useRef } from 'react'
import street from '../../assets/images/street.jpeg'
import { gsap } from 'gsap'
import streetone from '../../assets/images/streetone.jpg'
import streettwo from '../../assets/images/streettwo.jpg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../../components/Navbar'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
    const compRef = useRef()
    useLayoutEffect(()=>{
    let ctx = gsap.context(() => {
    gsap.from('.header', {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from('.heading', {
        y: 100,
        opacity: 0,
        duration: 1,
      });
    gsap.from('.heading-two',{
        y:-100,
        duration:1,
        opacity:1,
    }),
    gsap.from('.subtitle',{
        scrollTrigger:{
            trigger:'.subtitle',
            scrub: 2,
            start:'-800px',
            end:'-80px',
        },
        opacity:0,
        height:'0',
        translateY:'8px',
        overflow:'hidden',
        duration:0.1,
    }),
    gsap.from('.streetone',{
        scrollTrigger:{
            trigger:'.streetone',
            scrub: 1,
            top:'-200px'
        },
        height:'80px',
        translateY:'200px',
        duration:1,
    }),
    gsap.from('.streettwo',{
        scrollTrigger:{
            trigger:'.streetone',
            scrub: 1,
            top:'-200px'
        },
        // height:'80px',
        duration:1,
        translateY:'200px',
    }),
    gsap.from('.streetsection',{
        scrollTrigger:{
            trigger:'.streetsection',
            start:'top',
            end:'bottom bottom',
            scrub:2,
        },
        opacity:0,
        duration:1,
    })
    gsap.from('.skews',{
        scrollTrigger:{
            trigger:'.skews',
            start:'-400px',
            end:'bottom center',
            scrub:1,
        },
        opacity:0.5,
        skewX:'5px',
        duration:6,
    }), 
    gsap.from('.footer-text',{
        scrollTrigger:{
            trigger:'.footer-text',
            start:'top 80%',
        },
        opacity:0,
        height:'0px',
        overflow:'hidden',
        skewX:'5px',
        druation:5
    })
  }, compRef.current);

  return () => ctx.revert();
    },[])
  return (
    <>
    <Navbar />
    <div ref={compRef} className='mt-[93px]'>
        
        <section className='flex items-center  overflow-hidden justify-center h-full w-full p-12'>
            <div className='h-[500px] relative rounded-xl w-full  flex-col'>
            <div className='w-full absolute top-0 right-0 -z-50 h-full'><img src={street} className='w-full h-full object-cover' alt="" /></div>
                <div className='flex items-center justify-center flex-col w-full h-full text-center z-50'>
                <span><p className='font-semibold heading text-[4rem] leading-[60px] text-white'>Guilia Rastova</p></span>
                <span><p className='font-semibold text-[4rem] leading-[60px] text-white'>Photograher &</p></span>
                <span><p className='font-semibold heading-two text-[4rem] leading-[60px] text-white'>Freelancer</p></span>
                </div>
            </div>
        </section>

        <section className='px-12 py-8'>
            <span><p className='font-semibold subtitle text-[2rem] leading-tight text-white'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente. ipsum dolor sit amet consectetur adipisicing elit. Sequi labore tempora dolores doloribus, saepe ratione fuga ipsum nemo incidunt ex.</p></span>
        </section>

        <section className='px-12 py-8 h-screen flex items-center justify-center relative'>
            <span className='w-80 h-[400px] streetone absolute left-20 -z-50 top-12'><img src={streetone} className='w-full h-full object-cover' alt="" /></span>
            <span className='w-80 h-[400px] streettwo absolute right-20 -z-50 bottom-12'><img src={streettwo} className='grayscale w-full h-full object-cover' alt="" /></span>
            <span className='w-1/2 text-center'><p className='font-semibold text-2xl leading-tight text-white'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente. ipsum dolor sit amet consectetur adipisicing elit. Sequi labore tempora dolores doloribus, saepe ratione fuga ipsum nemo incidunt ex.</p></span>
        </section>

        <section className='bg-parallex bg-cover h-screen bg-fixed'></section>

        <section className='h-full bg-black/50 overflow-hidden'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='text-white p-12 w-full space-y-4 h-full'>
                    <p className='font-semibold text-2xl text-white'>Discover the taste of wild Sambar venison from Australia's pristine high country.</p>
                    <p className='font-semibold text-sm text-white'>Always tender with a mild nutty flavour. Distinctly complex and uniquely Australian</p>
                    <img src={streetone} className='skews w-full h-[600px] object-cover' alt="" />
                </div>
                <div className='skews text-white p-12 w-full space-y-4 h-full'>
                <img src={streettwo} className='w-full grayscale h-[600px] object-cover' alt="" />
                </div>
            </div>
        </section>

        <footer className='h-[40vh] bg-black/20 grid grid-cols-2'>
            <p className='footer-text w-full h-full text-white flex items-center justify-center text-[4rem]'>Guilia</p>
            <div className='w-full h-full text-white flex-col space-y-6 flex items-center justify-center'>
                <p className='footer-text text-[20px]'>About</p>
                <p className='footer-text text-[20px]'>Contact</p>
            </div>
        </footer>

    </div>
    </>
  )
}

export default Home
