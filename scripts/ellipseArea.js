function ellipseArea(){
      const a = getInputById('ellipse-a');
    const b = getInputById('ellipse-b');
    const areaEll = 3.1416 * a * b;
    setTheArea('ellipse-area', areaEll);
}