console.log("it works");

$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked button");
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusEln = $(".status");
    statusEln.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusEln.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusEln.append("<div>Email is not valid</div>");
    }

    if (subject.length >= 2) {
      statusEln.append("<div>Subject  is valid</div>");
    } else {
      event.preventDefault();
      statusEln.append("<div>Subject  is not valid</div>");
    }

    if (message.length >= 10) {
      statusEln.append("<div>Message  is valid</div>");
    } else {
      event.preventDefault();
      statusEln.append("<div>Message  is not valid</div>");
    }
  });
});
