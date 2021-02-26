function LoadPage(){
    const app = document.getElementById('app');
    let text = "Hello World!";
    ConvertToCharacters(text);
    app.textContent = text;
}

function ConvertToCharacters(str){
    if (typeof str === 'string') {
        for (let index = 0; index < str.length; index++) {
            console.log(str[index]);
        }
    }
}