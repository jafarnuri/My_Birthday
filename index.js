let date_birthday = setInterval(function () {
  let date = new Date();

  let mybirthday = new Date(2025, 6, 19);

  let today = date.getTime();
  let birthday = mybirthday.getTime();
  let diff = birthday - today;

  let mont = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  console.clear();
  console.log(
    "Menim ad gunume qalan tarix:  " +
      mont +
      " ay " +
      days +
      " gün " +
      hours +
      " saat " +
      minutes +
      " dəqiqə " +
      seconds +
      " saniyə "
  );

  if (diff < 0) {
    clearInterval(date_birthday);
    console.log("Bu gun menim Ad gunum");
  }
}, 1000);
