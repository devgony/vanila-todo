// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const jsForm = document.querySelector(".js-form");
const jsInput = jsForm.querySelector("input");
const pending = document.querySelector(".pending");
const done = document.querySelector(".done");
let pendingTodos = {};
let doneTodos = {};
const mapper = {
  pending: { obj: pendingTodos, dom: pending },
  done: { obj: doneTodos, dom: done }
};

const init = () => {
  loadTodos("pending");
  loadTodos("done");
  jsForm.addEventListener("submit", handleSubmit);
};

const loadTodos = (status) => {
    let loadedTodos = JSON.parse(localStorage.getItem(status));
    if (loadedTodos) {
        mapper[status].obj = loadedTodos;
    } else {
        mapper[status].obj = {};
    }
  for (var k in mapper[status].obj) {
    createLi(status, k, mapper[status].obj[k]);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  addTodo("pending", jsInput.value);
  jsInput.value = "";
};

const addTodo = (status, value) => {
  // let id = Object.keys(mapper[status].obj).length + 1;
  let id =
    (parseInt(Object.keys(mapper[status].obj).sort().reverse()[0]) || 0) + 1;
  createLi(status, id, value);
  mapper[status].obj[id] = value;
  localStorage.setItem(status, JSON.stringify(mapper[status].obj));
};

const createLi = (status, key, value) => {
  const dom = mapper[status].dom;
  const newLi = dom.appendChild(document.createElement("li"));
  // let id = dom.childElementCount - 1;
  newLi.id = key;
  const switchBtn = newLi.appendChild(document.createElement("button"));
  switchBtn.innerText = "✅";
  switchBtn.className = "switch-btn btn";
  switchBtn.addEventListener("click", handleSwitch);
  const delBtn = newLi.appendChild(document.createElement("button"));
  delBtn.innerText = "❌";
  delBtn.className = "del-btn btn";
  delBtn.addEventListener("click", handleDelete);
  newLi.appendChild(document.createElement("p")).innerText = value;
};

const handleDelete = ({ target: parentNode }) => {
  let status = parentNode.parentNode.parentNode.className;
  let li = parentNode.parentNode;
  console.log(li, li.id, status);
  deleteTodo(li.id, li, status);
};

const handleSwitch = ({ target: parentNode }) => {
  let status = parentNode.parentNode.parentNode.className;
  let li = parentNode.parentNode;
  let value = li.lastChild.innerText;
  console.log(status, li, value);
  deleteTodo(li.id, li, status);
  let targetStatus = status === "pending" ? "done" : "pending";
  addTodo(targetStatus, value);
};

const deleteTodo = (id, dom, status) => {
  console.log(status, mapper[status].obj);
  // mapper[status].obj = mapper[status].obj.filter((t, i) => {
  //   console.log(id, i, i !== parseInt(id));
  //   return i !== parseInt(id);
  // });
  delete mapper[status].obj[id];
  localStorage.setItem(status, JSON.stringify(mapper[status].obj));
  dom.remove();
};

init();
