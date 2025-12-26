function goToGrade() {
  var gradePage = document.getElementById("gradeSelect").value;
  if (gradePage) {
    window.location.href = gradePage;
  } else {
    alert("لطفاً یک پایه انتخاب کنید!");
  }
}