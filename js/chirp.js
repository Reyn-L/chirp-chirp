/* jshint esversion: 6 */
function chirp(n){
  let cheep = "chirp ";

  if (n === 0) {
    return "";
  }
  let cheepStr = chirp(--n);
  cheepStr += cheep;
  console.log(cheepStr);
  return cheepStr;
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});