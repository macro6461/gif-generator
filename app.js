var mykey = config.MY_KEY;

runTimer = (n) => {
  debugger
  event.preventDefault()
  var timeleft = 3;
  var downloadTimer = setInterval(function(){
    document.getElementById("belly").src = ""
    document.getElementById("belly").style.display = "none"
    document.getElementById("target").style.display = "block"
    document.getElementById("target").innerText = timeleft
    timeleft-=1
    if(timeleft < 0){
      document.getElementById("belly").style.display = "block"
      document.getElementById("button").style.display = "block"
      document.getElementById("target").style.display = "none"
      clearInterval(downloadTimer);
      var xhr = $.get(`http://api.giphy.com/v1/gifs/random?api_key=${mykey}&tag=${n.value}&limit=1`);
      xhr.done(function(data) {
        document.getElementById("belly").src = data.data.images.original.url
      });

      // redirect('https://media.giphy.com/media/zKtQCByWUMckU/giphy.gif')
      // process.exit()
    }
  },1000);
}


// var downloadTimer = setInterval(function(){
//   console.log(timeleft + "...")
//   timeleft-=1
//   if(timeleft < 0){
//     clearInterval(downloadTimer);
//     console.log("BOOM")
//     opn('https://media.giphy.com/media/zKtQCByWUMckU/giphy.gif')
//     process.exit()
//   }
// },1000);


// Opens the image in the default image viewer
// opn('unicorn.png').then(() => {
    // image viewer closed
// });

// Opens the url in the default browser
// opn('http://sindresorhus.com');

// Specify the app to open in
// opn('http://sindresorhus.com', {app: 'firefox'});

// Specify app arguments
// opn('http://sindresorhus.com', {app: ['google chrome', '--incognito']});var open = require('open');

    // open('http://www.google.com');

// You can also select a specific browser:

    // open('http://www.google.com', 'firefox');
//
// Or handle an error callback:

    // open('http://www.google.com', function (err) {
    //   if (err) throw err;
    //   console.log('The user closed the browser');
    // });
