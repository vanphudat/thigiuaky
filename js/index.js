const names = ['Văn Phú Đạt', 'Bùi Lê Minh', 'Trương Thị Quỳnh Anh'];

document.getElementById("random").onclick = () => {
    const valueRandom = Math.round(Math.random() * 2, 1);
    console.log(valueRandom);
    document.getElementsByTagName("h3")[0].innerText = names[valueRandom];
};
