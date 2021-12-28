let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculation() {
  let dob = document.getElementById("dob").value;
  let givdate = document.getElementById("givedate").value;

  let dateOfBirth = new Date(dob);
  let givenDate = new Date(givdate);

  let dobYear = dateOfBirth.getFullYear();
  let dobMonth = dateOfBirth.getMonth() + 1;
  let dobDay = dateOfBirth.getDate();

  let givYear = givenDate.getFullYear();
  let givMonth = givenDate.getMonth() + 1;
  let givDay = givenDate.getDate();
  leaptext(givYear);
  if (
    dobYear > givYear ||
    (dobMonth > givMonth && dobYear === givYear) ||
    (dobDay > givDay && dobMonth === givMonth && dobYear === givYear)
  ) {
    alert("wrong date of birth!!");
  }

  let difYear, difMonth, difDay;
  difYear = givYear - dobYear;
  if (givMonth >= dobMonth) {
    difMonth = givMonth - dobMonth;
  } else {
    givYear = givYear - 1;
    difMonth = 12 + givMonth - dobMonth;
  }
  if (givDay >= dobDay) {
    difDay = givDay - dobDay;
  } else {
    givDay = givDay + months[givMonth - 1];
    givMonth = givMonth - 1;
    difDay = givDay - dobDay;
  }
  showResult(difYear, difMonth, difDay);
  // document.getElementById("year").innerText = "";
  // document.getElementById("month").innerText = ``;
  // document.getElementById("day").innerText = ``;
}
const showResult = (year, month, day) => {
  document.getElementById("year").textContent = `Year(S):${year} `;
  document.getElementById("month").textContent = `Month(s):${month}`;
  document.getElementById("day").textContent = ` Day(s):${day}`;
};
function leaptext(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
