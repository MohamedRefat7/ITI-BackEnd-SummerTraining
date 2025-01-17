let userContainer = document.getElementById("user-container");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      let userDiv = document.createElement("div");
      userDiv.id = user.id;
      let userTab = document.createElement("button");
      userTab.innerText = user.username;
      userTab.onclick = () => {
        getUserPosts(user.id);
      };
      userDiv.appendChild(userTab);
      userContainer.appendChild(userDiv);
    });
  })
  .catch((error) => console.log(error));

async function getUserPosts(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await response.json();
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.querySelector(".posts").innerHTML = output;
  } catch (err) {
    console.log(err);
  }
}

document.querySelector(".users").addEventListener("click", async (e) => {
  const userId = e.target.dataset.id;
  if (userId) {
    await getUserPosts(userId);
  }
});
