let card = ["1", "2", "3"];

function add(num) {
  if (getCookie("deck").length > 0) {
    card = getCookie("deck");
  }

  setCookie("deck", JSON.stringify(card), 1);
}

var setCookie = function (name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

var getCookie = function (name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};
var deleteCookie = function (name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

function watchCard() {
  if (getCookie("deck").length > 0) {
    card = getCookie("deck");
  }
  for (let i = 0; i < card.length; i++) {
    console.log(card[i]);
  }
}
