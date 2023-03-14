function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === "U" && password === "P") {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}