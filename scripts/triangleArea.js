function triangleArea(){
    const base = getInputById('triangle-base');
    const height = getInputById('triangle-height');
    const area = 0.5*base*height;
    setTheArea('triangle-area', area);

}
function getInputById(inputId){
    const inputByID = document.getElementById(inputId);
    const inputText = inputByID.value;
    const input = parseFloat(inputText);
    return input;
}
function setTheArea(Id, area){
    const element = document.getElementById(Id);
    element.innerText = area;
}