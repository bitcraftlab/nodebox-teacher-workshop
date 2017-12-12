
var options = {
  userId: 'demo',
  projectId: 'embedding',
  functionId: 'main',
  canvasId: 'c',
  autoplay: true
};

// run this once everything is loaded
window.onload = function() {

  // create source link
  var url = "https://www.nodebox.live/" + options.userId + "/" + options.projectId;
  document.getElementsByClassName("sourceLink")[0].href = url;

  // Initialize the NodeBox player object
  ndbx.embed(options, function(err, player) {
    if (err) {
      throw new Error(err);
    } else {
      window.player = player;
    }
  });

}

// This function is called when the size slider is dragged.
function changeSize(e) {
  window.player.setValue('rect1', 'width', e.value);
  window.player.setValue('rect1', 'height', e.value);
}

// This function is called when the hue slider is dragged.
function changeHue(e) {
  window.player.setValue('hslColor1', 'hue', e.value);
}

// This function is called when the play / pause button is pressed
function playPause(element) {
  window.player.pause();
  element.innerHTML = window.player.animating ? 'pause' : 'play';
}
