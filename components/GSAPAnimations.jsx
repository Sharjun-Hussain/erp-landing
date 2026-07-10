'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import CustomCursor from '@/components/CustomCursor';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GSAPAnimations() {
    useGSAP(() => {
        // Lenis Smooth Scrolling Setup
        const lenis = new Lenis({
            autoRaf: false,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on('scroll', ScrollTrigger.update);
        const updateLenis = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        // Header Mega Menu & Mobile Drawer Logic
        let mm = gsap.matchMedia();

        mm.add('(min-width: 1024px)', () => {
            const megaTrigger = document.querySelector('.has-mega-menu');
            const megaMenu = document.querySelector('.mega-menu');
            const chevron = document.querySelector('.chevron');

            gsap.set(megaMenu, { clearProps: 'all' });
            gsap.set(megaMenu, { autoAlpha: 0, y: 10, display: 'block' });

            const megaTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

            megaTl.to(megaMenu, { autoAlpha: 1, y: 0, duration: 0.3 })
                .from('.mega-title', { opacity: 0, x: -10, duration: 0.2, stagger: 0.05 }, '-=0.2')
                .from('.mega-link-card', { opacity: 0, y: 10, duration: 0.3, stagger: 0.05 }, '-=0.1')
                .from('.mega-promo', { opacity: 0, scale: 0.95, duration: 0.4 }, '-=0.2');

            if (megaTrigger) {
                const handleMouseEnter = () => {
                    megaTl.play();
                    gsap.to(chevron, { rotation: 180, duration: 0.3 });
                };
                const handleMouseLeave = () => {
                    megaTl.reverse();
                    gsap.to(chevron, { rotation: 0, duration: 0.3 });
                };
                
                megaTrigger.addEventListener('mouseenter', handleMouseEnter);
                megaTrigger.addEventListener('mouseleave', handleMouseLeave);
                
                return () => {
                    megaTrigger.removeEventListener('mouseenter', handleMouseEnter);
                    megaTrigger.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        });

        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const hamburgerLines = document.querySelectorAll('.hamburger-line');
        let isMenuOpen = false;

        const mobileTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut' } });

        mobileTl.to(mobileOverlay, { display: 'block', autoAlpha: 1, duration: 0.3 })
            .to(navMenu, { x: '0%', duration: 0.5 }, '<')
            .from('.mobile-stagger', { x: 30, opacity: 0, duration: 0.4, stagger: 0.05 }, '-=0.2');

        const toggleMenu = () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileTl.play();
                gsap.to(hamburgerLines[0], { y: 0, rotation: 45, duration: 0.3 });
                gsap.to(hamburgerLines[1], { opacity: 0, duration: 0.3 });
                gsap.to(hamburgerLines[2], { y: 0, rotation: -45, duration: 0.3 });
                document.body.style.overflow = 'hidden';
            } else {
                mobileTl.reverse();
                gsap.to(hamburgerLines[0], { y: -8, rotation: 0, duration: 0.3 });
                gsap.to(hamburgerLines[1], { opacity: 1, duration: 0.3 });
                gsap.to(hamburgerLines[2], { y: 8, rotation: 0, duration: 0.3 });
                document.body.style.overflow = '';
            }
        };

        if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
        if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMenu);

        // --- ANIMATIONS ---
        gsap.fromTo('.hero-badge', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
        gsap.fromTo('h1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.4 });
        gsap.fromTo('#hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 });
        gsap.fromTo('.hero-btns a', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.8 });
        gsap.fromTo('.brand-logo', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' });
        gsap.fromTo('.nav-item, .nav-actions a', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: 'power3.out', delay: 0.2 });

        gsap.from('.marquee-container', {
            scrollTrigger: { trigger: '.marquee-container', start: 'top bottom', end: 'bottom top', scrub: 1 },
            opacity: 0.5,
            y: 50
        });

        const moduleCards = document.querySelectorAll('.module-card');
        if (moduleCards.length > 0) {
            gsap.to('.scroll-progress', {
                height: '100%',
                scrollTrigger: {
                    trigger: '.module-cards-container',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true
                }
            });

            moduleCards.forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 85%' },
                    y: 100,
                    rotationX: 10,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            });
        }

        const stackLayers = document.querySelectorAll('.stack-layer');
        if (stackLayers.length > 0) {
            gsap.from(stackLayers, {
                scrollTrigger: { trigger: '#stack-container', start: 'top 70%' },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power3.out'
            });

            gsap.to('.layer-1', {
                scrollTrigger: { trigger: '#stack-container', start: 'top bottom', end: 'bottom top', scrub: 1 },
                y: -50, rotationZ: -40
            });
            gsap.to('.layer-2', {
                scrollTrigger: { trigger: '#stack-container', start: 'top bottom', end: 'bottom top', scrub: 1 },
                y: 0, rotationZ: -45
            });
            gsap.to('.layer-3', {
                scrollTrigger: { trigger: '#stack-container', start: 'top bottom', end: 'bottom top', scrub: 1 },
                y: 50, rotationZ: -50
            });
        }

        gsap.from('.client-header', {
            scrollTrigger: { trigger: '#clients', start: 'top 90%' },
            y: 30, opacity: 0, duration: 1, ease: 'power3.out'
        });

        gsap.from('.biz-header', {
            scrollTrigger: { trigger: '#business-types', start: 'top 80%' },
            y: 40, opacity: 0, duration: 1, ease: 'power3.out'
        });

        gsap.from('.biz-card', {
            scrollTrigger: { trigger: '#business-types', start: 'top 70%' },
            y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out'
        });

        const syncSection = document.querySelector('#sync-addons');
        if (syncSection) {
            const syncTl = gsap.timeline({
                scrollTrigger: { trigger: '#sync-addons', start: 'top 60%' }
            });
            syncTl.from('.sync-text', { x: -50, opacity: 0, duration: 1, ease: 'power3.out' })
                .from('.sync-visual', { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
                .from('.sync-visual > div', { scale: 0.8, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }, '-=0.4');
        }

        const robustTrack = document.getElementById('robust-track');
        if (robustTrack) {
            let getScrollAmount = () => -(robustTrack.scrollWidth - window.innerWidth);
            const tween = gsap.to(robustTrack, {
                x: getScrollAmount,
                ease: 'none'
            });

            ScrollTrigger.create({
                trigger: '#robust-horizontal',
                start: 'top top',
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true
            });

            gsap.utils.toArray('.robust-card').forEach(card => {
                gsap.fromTo(card,
                    { scale: 0.8, opacity: 0.5, rotationY: 15 },
                    {
                        scale: 1, opacity: 1, rotationY: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: tween,
                            start: 'left center',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            gsap.utils.toArray('.jump-text').forEach(text => {
                gsap.fromTo(text,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, ease: 'back.out(2)',
                        scrollTrigger: {
                            trigger: text,
                            containerAnimation: tween,
                            start: 'left 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }

        const mobileCards = document.querySelectorAll('.mobile-card');
        if (mobileCards.length > 0) {
            gsap.from(mobileCards, {
                scrollTrigger: { trigger: mobileCards[0], start: 'top 80%' },
                x: -50, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out'
            });
        }

        gsap.from('.deployment-header', {
            scrollTrigger: { trigger: '#deployment-options', start: 'top 80%' },
            y: 40, opacity: 0, duration: 1, ease: 'power3.out'
        });

        gsap.from('.deployment-card', {
            scrollTrigger: { trigger: '#deployment-options', start: 'top 70%' },
            y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out'
        });

        // Windows POS Looping Animation
        const winContainer = document.querySelector('.windows-anim-container');
        if (winContainer) {
            const winTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
            
            winTl.set('.fake-mouse', { x: 100, y: 150, opacity: 0 })
                 .set('.windows-launcher', { opacity: 1, scale: 1, display: 'flex' })
                 .set('.windows-pos', { opacity: 0, scale: 0.9, display: 'none' })
                 .set('.loading-bar', { width: '0%' })
                 .set('.install-text', { opacity: 1 })
                 .set('.loading-text-container', { opacity: 0 });

            winTl.to('.fake-mouse', { opacity: 1, duration: 0.3 })
                 .to('.fake-mouse', { x: 0, y: 50, duration: 1, ease: 'power2.out' })
                 
                 .to('.fake-mouse', { scale: 0.8, duration: 0.1 })
                 .to('.install-btn', { scale: 0.95, duration: 0.1 }, '<')
                 .to('.fake-mouse', { scale: 1, duration: 0.1 })
                 .to('.install-btn', { scale: 1, duration: 0.1 }, '<')
                 
                 .to('.fake-mouse', { x: 150, y: 150, opacity: 0, duration: 1, ease: 'power2.in' }, '+=0.2')
                 
                 .to('.install-text', { opacity: 0, duration: 0.2 }, '-=1')
                 .to('.loading-text-container', { opacity: 1, duration: 0.2 }, '<')
                 
                 .to('.loading-bar', { width: '100%', duration: 1.5, ease: 'power1.inOut' })
                 .to({val:0}, {val:100, duration: 1.5, ease: 'power1.inOut', onUpdate: function() {
                     const text = document.querySelector('.loading-text');
                     if (text) text.innerHTML = Math.round(this.targets()[0].val) + '%';
                 }}, '<')
                 
                 .to('.windows-launcher', { opacity: 0, scale: 0.9, duration: 0.3, ease: 'power2.in' })
                 .set('.windows-launcher', { display: 'none' })
                 
                 .set('.windows-pos', { display: 'flex' })
                 .to('.windows-pos', { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' })
                 
                 .to({}, { duration: 4 });
        }

        // Mobile POS Looping Animation
        const mobContainer = document.querySelector('.mobile-anim-container');
        if (mobContainer) {
            const mobTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
            
            mobTl.set(['.mobile-scanner-line-1', '.mobile-scanner-line-2', '.mobile-scanner-line-3'], { y: '-10%', opacity: 0 })
                 .set(['.mobile-add-badge-1', '.mobile-add-badge-2', '.mobile-add-badge-3'], { scale: 0, opacity: 0 })
                 .set('.checkout-count', { innerHTML: '0' })
                 .set('.checkout-price', { innerHTML: 'LKR 0' })
                 .set('.checkout-btn', { scale: 1, backgroundColor: '#2563eb' })
                 .set('.receipt-overlay', { y: '100%' });

            // 1. Scan item 1
            mobTl.to('.mobile-scanner-line-1', { opacity: 1, duration: 0.1 })
                 .to('.mobile-scanner-line-1', { y: '100%', duration: 0.4, ease: 'linear' })
                 .to('.mobile-scanner-line-1', { opacity: 0, duration: 0.1 })
                 .to('.target-product-1', { scale: 0.95, duration: 0.1 })
                 .to('.mobile-add-badge-1', { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(2)' }, '<')
                 .to('.target-product-1', { scale: 1, duration: 0.1 })
                 .set('.checkout-count', { innerHTML: '1' })
                 .set('.checkout-price', { innerHTML: 'LKR 1,200' })
                 .to('.checkout-btn', { scale: 1.05, duration: 0.1 })
                 .to('.checkout-btn', { scale: 1, duration: 0.1 })
                 
            // 2. Scan item 2
                 .to('.mobile-scanner-line-2', { opacity: 1, duration: 0.1 }, '+=0.2')
                 .to('.mobile-scanner-line-2', { y: '100%', duration: 0.4, ease: 'linear' })
                 .to('.mobile-scanner-line-2', { opacity: 0, duration: 0.1 })
                 .to('.target-product-2', { scale: 0.95, duration: 0.1 })
                 .to('.mobile-add-badge-2', { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(2)' }, '<')
                 .to('.target-product-2', { scale: 1, duration: 0.1 })
                 .set('.checkout-count', { innerHTML: '2' })
                 .set('.checkout-price', { innerHTML: 'LKR 1,650' })
                 .to('.checkout-btn', { scale: 1.05, duration: 0.1 })
                 .to('.checkout-btn', { scale: 1, duration: 0.1 })
                 
            // 3. Scan item 3
                 .to('.mobile-scanner-line-3', { opacity: 1, duration: 0.1 }, '+=0.2')
                 .to('.mobile-scanner-line-3', { y: '100%', duration: 0.4, ease: 'linear' })
                 .to('.mobile-scanner-line-3', { opacity: 0, duration: 0.1 })
                 .to('.target-product-3', { scale: 0.95, duration: 0.1 })
                 .to('.mobile-add-badge-3', { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(2)' }, '<')
                 .to('.target-product-3', { scale: 1, duration: 0.1 })
                 .set('.checkout-count', { innerHTML: '3' })
                 .set('.checkout-price', { innerHTML: 'LKR 2,300' })
                 .to('.checkout-btn', { scale: 1.05, duration: 0.1 })
                 .to('.checkout-btn', { scale: 1, duration: 0.1 })
                 
            // 4. Proceed checkout (click)
                 .to({}, { duration: 0.4 })
                 .to('.checkout-btn', { scale: 0.95, backgroundColor: '#16a34a', duration: 0.1 })
                 .to('.checkout-btn', { scale: 1, duration: 0.1 })
                 
            // 5. Print Receipt (Slides up)
                 .to({}, { duration: 0.3 })
                 .to('.receipt-overlay', { y: '0%', duration: 0.6, ease: 'power3.out' })
                 
            // Hold receipt on screen
                 .to({}, { duration: 3 });
        }

        // Web POS Looping Animation
        const webContainer = document.querySelector('.web-anim-container');
        if (webContainer) {
            const webTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
            
            webTl.set('.web-fake-mouse', { x: 200, y: 250, opacity: 0 })
                 .set('.web-cart-item-1', { x: '-100%', opacity: 0 })
                 .set('.web-cart-item-2', { x: '-100%', opacity: 0 })
                 .set('.web-cart-item-3', { x: '-100%', opacity: 0 })
                 .set('.web-checkout-btn', { scale: 1, backgroundColor: 'rgba(16, 185, 129, 0.2)' })
                 .set('.web-success-overlay', { y: '100%', opacity: 0 });

            // 1. Move to Product 1
            webTl.to('.web-fake-mouse', { opacity: 1, duration: 0.3 })
                 .to('.web-fake-mouse', { x: 100, y: 80, duration: 0.8, ease: 'power2.inOut' })
                 // Click Product 1
                 .to('.web-product-1', { scale: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.1 })
                 .to('.web-product-1', { scale: 1, backgroundColor: 'rgba(255,255,255,0.05)', duration: 0.1 })
                 // Add Cart 1
                 .to('.web-cart-item-1', { x: '0%', opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }, '+=0.1')
                 
            // 2. Move to Product 2
                 .to('.web-fake-mouse', { x: 200, y: 80, duration: 0.6, ease: 'power2.inOut' })
                 // Click Product 2
                 .to('.web-product-2', { scale: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.1 })
                 .to('.web-product-2', { scale: 1, backgroundColor: 'rgba(255,255,255,0.05)', duration: 0.1 })
                 // Add Cart 2
                 .to('.web-cart-item-2', { x: '0%', opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }, '+=0.1')
                 
            // 3. Move to Product 3
                 .to('.web-fake-mouse', { x: 300, y: 80, duration: 0.6, ease: 'power2.inOut' })
                 // Click Product 3
                 .to('.web-product-3', { scale: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.1 })
                 .to('.web-product-3', { scale: 1, backgroundColor: 'rgba(255,255,255,0.05)', duration: 0.1 })
                 // Add Cart 3
                 .to('.web-cart-item-3', { x: '0%', opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }, '+=0.1')
                 
            // 4. Move to Checkout Button
                 .to('.web-fake-mouse', { x: 390, y: 200, duration: 0.8, ease: 'power2.inOut' })
                 // Click Checkout
                 .to('.web-checkout-btn', { scale: 0.9, backgroundColor: 'rgba(16, 185, 129, 0.6)', duration: 0.1 })
                 .to('.web-checkout-btn', { scale: 1, duration: 0.1 })
                 
            // 5. Success Overlay
                 .to({}, { duration: 0.3 })
                 .to('.web-fake-mouse', { opacity: 0, duration: 0.2 })
                 .to('.web-success-overlay', { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' })
                 
            // Hold on screen
                 .to({}, { duration: 3 });
        }


        return () => {
            if (mobileToggle) mobileToggle.removeEventListener('click', toggleMenu);
            if (mobileOverlay) mobileOverlay.removeEventListener('click', toggleMenu);
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        }
    });
    return <CustomCursor />;
}
