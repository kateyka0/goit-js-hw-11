import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m={imageForm:document.querySelector(".form"),imageInput:document.querySelector(".input"),submitButton:document.querySelector(".btn"),imageList:document.querySelector(".images-list")};function d(r){const o=r.hits.map(i=>`<li class="images-list-item">
  <a class="img-link" href=${i.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${i.webformatURL} alt=${i.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${i.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${i.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${i.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${i.downloads}</p>
      </li>
    </ul>
</li>`).join(`
`);m.imageList.innerHTML=o}document.querySelector(".form"),document.querySelector(".input"),document.querySelector(".btn"),document.querySelector(".images-list");function p(r){const o="https://pixabay.com",i="/api/",n=new URLSearchParams({key:"44332544-4246296cfd54d81c9e369dca1",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:30}),e=`${o}${i}?${n}`;return console.log(e),fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}const s={imageForm:document.querySelector(".form"),imageInput:document.querySelector(".input"),submitButton:document.querySelector(".btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};s.loader.style.display="none";let l;s.imageForm.addEventListener("submit",r=>{if(r.preventDefault(),l=r.target.elements.userData.value,l.trim()==="")return s.imageList.innerHTML="",c.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});document.querySelector(".loader"),s.loader.style.display="block",p(l).then(o=>{if(o.hits.length===0)return s.imageList.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});d(o),new u(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).then(()=>s.loader.style.display="none").catch(o=>{console.log(o),s.loader.style.display="none"}),r.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
