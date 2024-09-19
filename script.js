let name = '';
let loveResponse = '';
let childrenResponse = '';
let placeResponse = '';
let lovePercentageResponse = '';
let reasonResponse = '';
let messageResponse = '';

function askLove() {
    name = document.getElementById('nameInput').value;
    if (name) {
        document.getElementById('name').innerHTML = "Hai, " + name + "!";
        document.getElementById('intro').style.display = 'none';
        document.getElementById('question1').style.display = 'block';
    } else {
        alert("Tolong masukkan namamu dulu!");
    }
}

function answerLove(answer) {
    loveResponse = answer;
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
}

function answerChildren() {
    const children = document.getElementById('childrenInput').value;
    if (children) {
        childrenResponse = "Kamu ingin memiliki " + children + " anak.";
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'block';
    } else {
        alert("Tolong isi jumlah anak yang ingin kamu miliki!");
    }
}

function answerPlace() {
    const place = document.getElementById('placeInput').value;
    if (place) {
        placeResponse = "Kamu ingin tempat impian kita adalah di " + place + ".";
        document.getElementById('question3').style.display = 'none';
        document.getElementById('question4').style.display = 'block';
    } else {
        alert("Tolong isi tempat impian kamu!");
    }
}

function answerLovePercentage() {
    const percentage = document.getElementById('lovePercentage').value;
    if (percentage) {
        lovePercentageResponse = "Tingkat cintamu padaku adalah " + percentage + "%.";
        document.getElementById('question4').style.display = 'none';
        document.getElement