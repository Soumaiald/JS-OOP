
// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// Registering an anonymous event listener to the
// list of comments.
cList.addEventListener("click", (e) => {
  // Using the event object's "target" property
  // to apply styling to the *actual* element
  // that fired the event!
  e.target.classList.toggle("strikethrough");
  console.log(e.target);
  if (e .target.style.color == "red"){
    e.target.style.color = "black";
  } else {
    e.target.style.color = "red";
  }
});

// The function to handle adding new comments.
function addComment() {
  const newComment = cInput.value;

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newComment === "") return;

  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});

