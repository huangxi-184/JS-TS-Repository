const sortable = document.getElementById("sortable")
const liElements = sortable.getElementsByTagName("li");

// 循环遍历<li>元素并执行操作
for (var i = 0; i < liElements.length; i++) {
    var li = liElements[i];
    console.log(li.textContent); // 这里可以执行您想要的操作，例如打印<li>的内容
}