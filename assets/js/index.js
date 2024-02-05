$(document).ready(function () {
  $(".getStartedBtn").click(function () {
    $("#myModal").css("display", "block");
    $(".overlay").css("display", "block");
  });

  // Close the modal when clicking outside the form
  $(".overlay").click(function () {
    $("#myModal").css("display", "none");
    $(".overlay").css("display", "none");
  });
});

function closeModal() {
  $("#myModal").css("display", "none");
  $(".overlay").css("display", "none");
}
