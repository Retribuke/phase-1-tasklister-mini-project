document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo(e.target.new_todo.value);
    });
});

//Adding todo function
function addToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = "Delete";
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
  })
  li.textContent = ` ${todo} `;
  li.appendChild(btn);
  document.getElementById('list').appendChild(li);
}