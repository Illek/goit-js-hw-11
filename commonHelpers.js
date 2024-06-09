import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const a=document.querySelector("#images");function d(e){m();const t=h(e.hits);p(t),g()}function m(){a.innerHTML=""}function h(e){return e.map(t=>`
        <li class="images-image">
          <div class="gallery">
            <a href="${t.largeImageURL}">
              <img class="img" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}" />
            </a>
          </div>
          <ul class="image-details-container">
            <li>
              <h2 class="image-heading">Likes</h2>
              <p class="image-description">${t.likes}</p>
            </li>
            <li>
              <h2 class="image-heading">Views</h2>
              <p class="image-description">${t.views}</p>
            </li>
            <li>
              <h2 class="image-heading">Comments</h2>
              <p class="image-description">${t.comments}</p>
            </li>
            <li>
              <h2 class="image-heading">Downloads</h2>
              <p class="image-description">${t.downloads}</p>
            </li>
          </ul>
        </li>`).join("")}function p(e){a.insertAdjacentHTML("beforeend",e)}function g(){new u(".gallery a",{captionsData:"title",captionDelay:350}).refresh()}const y="44303353-9b630a8fdc8cdbe3ae770ff69",L="https://pixabay.com/api/",c=document.querySelector(".loader"),b=document.querySelector("#images");function w(e){I(),O();const t=$(e);fetch(t).then(M).then(o=>P(o)).catch(k).finally(S)}function I(){b.innerHTML=""}function O(){c.style.display="block"}function S(){c.style.display="none"}function $(e){const t=new URLSearchParams({key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${L}?${t}`}function M(e){if(!e.ok)throw new Error(e.status);return e.json()}function P(e){if(e.total===0){R();return}d(e)}function R(){f.show({class:"search-404",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})}function k(e){console.error("Fetch error:",e.message)}const l=document.querySelector(".form");l.addEventListener("submit",q);function q(e){e.preventDefault();const t=v(e);t&&(w(t),l.reset())}function v(e){return e.currentTarget.elements.search.value.trim()}
//# sourceMappingURL=commonHelpers.js.map
