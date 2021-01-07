
let quiz;

$(document).ready(function () {
  $("#game-container").toggle();
  $("#start-btn").click(function () {
    $("#landing-page, #game-container").toggle();
  });
  for (let i = 0; i < answerButtonRef.length; i++) {
    answerButtonRef[i].addEventListener("click", function (e) {
      selectAnswer(e.target.dataset.nextQuestion);
    });
  }

});