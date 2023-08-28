const getUsersBtn = document.getElementById("getUsers");
const userGrid = document.getElementById("userGrid");
const loader = document.getElementById("loader");
getUsersBtn.addEventListener("click", getUsers);
 function getUsers() {
  loader.style.display = "block";
  userGrid.innerHTML = "";

  try {
    setTimeout(async()=>{

        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
        const users = data.data;
        
        users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");
            userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <h3 style="color:navy">${user.first_name} ${user.last_name}</h3>
            <p style="color:blue">Email: ${user.email}</p>
      `;
      userGrid.appendChild(userCard);
    });
    
    loader.style.display = "none";
},1500)
} catch (error) {
    alert("Error fetching user data:", error);
    loader.style.display = "none";
  }
}
