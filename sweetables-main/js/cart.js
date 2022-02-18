var pop = {
    // (A) ATTACH POPUP HTML
    pWrap : null,  // html popup wrapper
    pTitle : null, // html popup title
    pText : null,  // html popup text
    init : () => {
      // (A1) POPUP WRAPPER
      pop.pWrap = document.createElement("div");
      pop.pWrap.id = "popwrap";
      document.body.appendChild(pop.pWrap);
  
      // (A2) POPUP INNERHTML
      pop.pWrap.innerHTML =
      `<div id="popbox">
        <h3 id="poptitle"></h3>
        <button id="poptext" class="btn btn-primary w-100" onClick="myFunction()"></button>
        <div id="popclose" onclick="pop.close()"><i class="far fa-times-circle"></i></div>
      </div>`;
      pop.pTitle = document.getElementById("poptitle");
      pop.pText = document.getElementById("poptext");
    },
  
    // (B) OPEN POPUP
    open : (title, text) => {
      pop.pTitle.innerHTML = title;
      pop.pText.innerHTML = text;
      pop.pWrap.classList.add("open");
    },

    // (C) CLOSE POPUP
    close : () => { pop.pWrap.classList.remove("open"); }
  };
  window.addEventListener("DOMContentLoaded", pop.init) 

  function myFunction() {
    window.location.href="buy.html";  
  }
  