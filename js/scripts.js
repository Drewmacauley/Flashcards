$(document).ready(function() {
  $("button#term").click(function() {
    $("p").removeClass();
    $("p").addClass("green-background");
  });

  $("button#definition").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});