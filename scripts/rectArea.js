function rectangleArea(){
    const width = getInputById('rectangle-width');
    const length = getInputById('rectangle-length');
    const areaRect = width * length;
    setTheArea('rectangle-area', areaRect);
}