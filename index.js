const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const list = document.getElementById("list");
const listContent = [];

function render() {
  let htmlStr = "";
  listContent.forEach(function (item) {
    htmlStr =
      htmlStr +
      `<div>
    <p>內容${item.content}</p>
    <p>日期${item.date}</p>
    <p>時間${item.time}</p>
    <hr />
  </div>`;
  });

  list.innerHTML = htmlStr;
}

add.addEventListener("click", function () {
  console.log(content.value);
  console.log(date.value);
  console.log(time.value);
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value,
  });
  render();
});

remove.addEventListener("click", function () {
  listContent.shift();
  render();
});
