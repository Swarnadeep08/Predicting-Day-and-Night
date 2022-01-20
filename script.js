function setThemePreference() {
  var d = new Date();
  /*
  * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
  * Early mornig = 0 - 6
  * Morning = 6 - 12
  * Evening = 12 - 18
  * Night = 18 - 23
  */
  var currentHour = d.getHours();
  var delayInMilliseconds = 1000; //1 second
  if(currentHour >= 19 || currentHour <= 6) {
    document.body.setAttribute("data-theme", "dark_theme");
    setTimeout(function() {
      document.querySelector("h1").innerHTML = `It's Night Time 🌝<span class="dot">.</span>`;
    }, delayInMilliseconds);
  }else {
    document.body.setAttribute("data-theme", "light_theme");
    setTimeout(function() {
      document.querySelector("h1").innerHTML = `It's Day Time 🌞<span class="dot">.</span>`;
    }, delayInMilliseconds);
  }
}

window.onload = setThemePreference;
