function rhombusArea(){
    const d1 = getInputById('rhombus-firstDistance');
    const d2 = getInputById('rhombus-secondDistance');
    const areaRho = 0.5 * d1 * d2;
    setTheArea('rhombus-area', areaRho);
}