(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",i),s.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const u=document.querySelectorAll("[data-open-modal]"),m=document.querySelectorAll("[data-close-modal]"),r=document.querySelector("body");let c=!1;m.forEach(t=>{t.addEventListener("click",o=>{l(t.closest("[data-modal]"))})});u.forEach(t=>{t.addEventListener("click",o=>{const s=t.getAttribute("data-open-modal"),i=document.querySelector(`[data-modal="${s}"]`);a(i)})});function a(t){const o=t.querySelector("form");t.classList.remove("is-hidden"),f(),c=!0,document.addEventListener("keydown",s),t.addEventListener("click",s);function s(e){(e.which===27||e.target===t)&&(l(t),document.removeEventListener("keydown",s),t.removeEventListener("click",s))}if(!o)return;o.addEventListener("submit",i);function i(e){e.preventDefault(),l(t);const n=o.getAttribute("data-form");if(n){const d=document.querySelector(`[data-modal="${n}"]`);a(d)}e.target.reset(),o.removeEventListener("submit",i)}}function l(t){t.classList.add("is-hidden"),c=!1,t.addEventListener("transitionend",o);function o(){t.removeEventListener("transitionend",o),p()}}function f(){const t=window.innerWidth-r.offsetWidth+"px",o=r.style.paddingRight;r.style.overflow="hidden",r.style.paddingRight=o||t}function p(){c||(r.style.removeProperty("overflow"),r.style.removeProperty("padding-right"))}new SmoothScroll('a[href*="#"]',{speed:600});$(".slick").slick({slidesToShow:4,slidesToScroll:1,dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2.5}},{breakpoint:768,settings:{slidesToShow:1}}]});$(".slick-chocolate-is-loved").slick({slidesToShow:3,slidesToScroll:1,dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});