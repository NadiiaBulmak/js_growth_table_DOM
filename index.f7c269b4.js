var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),r=document.querySelector("tbody");function c(){var c=r.querySelectorAll("tr"),d=c[0].children.length;e.disabled=c.length>=10,t.disabled=c.length<=2,n.disabled=d>=10,l.disabled=d<=2}e.addEventListener("click",function(){var e=r.querySelectorAll("tr");if(e.length<10){for(var t=document.createElement("tr"),n=0;n<e[0].children.length;n++)t.appendChild(document.createElement("td"));r.append(t),c()}}),t.addEventListener("click",function(){r.children.length>2&&(r.lastElementChild.remove(),c())}),n.addEventListener("click",function(){var e=r.querySelectorAll("tr");e.length>0&&e[0].children.length<10&&(e.forEach(function(e){var t=document.createElement("td");e.appendChild(t)}),c())}),l.addEventListener("click",function(){var e=r.querySelectorAll("tr");e.length>0&&e[0].children.length>2&&(e.forEach(function(e){e.lastElementChild.remove()}),c())});
//# sourceMappingURL=index.f7c269b4.js.map
