function pentagonArea(){
    const p = getInputById('pentagon-p');
    const b = getInputById('pentagon-b');
    const areaPen = 0.5 * p * b;
    setTheArea('pentagon-area', areaPen);
}