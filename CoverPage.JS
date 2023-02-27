function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "yourusername" && password === "yourpassword") {
      window.location.href = "gallery.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }