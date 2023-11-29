const element = document.getElementById('discription')
const element2 = document.getElementById('discription2')
const element3 = document.getElementById('discription3')
const max_length = 640;

if(element.textContent.length > max_length) {
    element.textContent = element.textContent.substring(0, max_length) + '...';
} 

if(element2.textContent.length > max_length) {
    element2.textContent = element2.textContent.substring(0, max_length) + '...';
}

if(element3.textContent.length > max_length) {
    element3.textContent = element3.textContent.substring(0, max_length) + '...';
}

function japan() {
    window.location.href='file:///C:/Users/Server/Desktop/Renz/STI_2ndYear_1stSem/Readings%20in%20Philippine%20History/Web%20Blogs/japan.html'
}