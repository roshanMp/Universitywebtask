document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;


    document.querySelectorAll(".error-message").forEach(e => e.innerText = "");
    document.querySelectorAll(".form-control, .form-select").forEach(e => e.classList.remove("error"));

    // Helper
    function setError(id, message) {
      document.getElementById(id + "Error").innerText = message;
      document.getElementById(id).classList.add("error");
      valid = false;
    }

    // Get values
    const enquiryVal = document.getElementById("enquiry").value.trim();
    const gradeVal = document.getElementById("grade").value.trim();
    const boardVal = document.getElementById("board").value.trim();
    const fnameVal = document.getElementById("fname").value.trim();
    const lnameVal = document.getElementById("lname").value.trim();
    const countryVal = document.getElementById("country").value.trim();
    const cityVal = document.getElementById("city").value.trim();
    const phoneVal = document.getElementById("phone").value.trim();
    const emailVal = document.getElementById("email").value.trim();
    const agreeVal = document.getElementById("agree").checked;

    // Validation
    if (enquiryVal === "") setError("enquiry", "Please select enquiry type");
    if (gradeVal === "") setError("grade", "Please select grade");
    if (boardVal === "") setError("board", "Please select board");
    if (fnameVal === "") setError("fname", "First name is required");
    if (lnameVal === "") setError("lname", "Surname is required");
    if (countryVal === "") setError("country", "Please select country");
    if (cityVal === "") setError("city", "City is required");

    if (phoneVal === "") {
      setError("phone", "Phone number is required");
    } else if (!/^[6-9]\d{9}$/.test(phoneVal)) {
      setError("phone", "Enter valid 10-digit number starting with 6, 7, 8, or 9");
    }

    if (emailVal === "") {
      setError("email", "Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setError("email", "Enter a valid email address");
    }

    if (!agreeVal) setError("agree", "You must agree before submitting");

    // If valid show alert
    if (valid) {
      alert("✅ Form submitted successfully!");
      document.getElementById("registerForm").reset();
    }
  });
