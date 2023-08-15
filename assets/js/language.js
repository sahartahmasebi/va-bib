// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleLanguage = (language) => {
  if (language == "en") {
    setLanguage("de");
  } else {
    setLanguage("en");
  }
}

let setLanguage = (language) =>  {

  if (language) {
    document.documentElement.setAttribute("data-language", language);
  }
  else {
    document.documentElement.removeAttribute("data-language");
  }
  localStorage.setItem("language", language);
};


let initLanguage = (language) => {
  if (language == null || language == 'null') {
    const userPref = window.matchMedia;
    if (userPref && userPref('(prefers-language: en)').matches) {
        language = 'en';
    }
  }

  setLanguage(language);
}


initLanguage(localStorage.getItem("language"));
