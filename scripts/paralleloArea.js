function paralleloArea(){
    const basePara = getInputById('parallelogram-base');
    const heightPara = getInputById('parallelogram-height');
    const areaPara = basePara * heightPara;
    setTheArea('parallelogram-area', areaPara);
}