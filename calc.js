function calculate() {

  // Get inputs
  const normalFlowNS = document.getElementById("normalNorthSouthFlow").value;
  const normalFlowN = document.getElementById("normalNorthFlow").value;
  const normalFlowEW = document.getElementById("normalEastWestFlow").value;
  const satFlowN = document.getElementById("saturationNorthFlow").value;
  const satFlowS = document.getElementById("saturationSouthFlow").value;
  const satFlowE = document.getElementById("saturationEastFlow").value;
  // const satFlowW = document.getElementById("saturationWestFlow").value;
  const allRedTime = document.getElementById("allRedTime").value;
  // console.log(normalFlowEW);
  // console.log(normalFlowEW);
  //
  // console.log(satFlowE);
  //
  // console.log(satFlowS);
  //
  // console.log(normalFlowEW);
  //
  // console.log(normalFlowEW);



  // Calculate y1 and y2
  const y1 = normalFlowNS / satFlowN;
  const y2 = normalFlowN / satFlowS;
  const y3 = normalFlowEW / satFlowE;

  // Calculate Y
  const Y = y1 + y2 +y3;
  // console.log(Y);
const L = 2 * 3 + parseInt(allRedTime);
const C0 = (1.5*L +5)/(1-Y);
  // Display results
  document.getElementById("flowRatioA").textContent =y1.toFixed(2);
  document.getElementById("flowRatioB").textContent =y2.toFixed(2);
  document.getElementById("flowRatioC").textContent =y3.toFixed(2);

  // document.getElementById("criticalflowya").value = y1.toFixed(2);
  // document.getElementById("flowRatioB").value = y2.toFixed(2);
  // document.getElementById("y").textContent = Y.toFixed(2);



  document.getElementById("y").textContent = Y.toFixed(2);

  const effectiveSignalTime1 = y1*(C0 -L) / Y ;
  document.getElementById("effectiveSignalTime1").textContent = effectiveSignalTime1.toFixed(2);

  const effectiveSignalTime2 = y2 *(C0 -L)/ Y ;
  document.getElementById("effectiveSignalTime2").textContent = effectiveSignalTime2.toFixed(2);

  const effectiveSignalTime3 = y3*(C0 -L) / Y ;
  document.getElementById("effectiveSignalTime3").textContent = effectiveSignalTime3.toFixed(2);

  document.getElementById("cyclelength").textContent = parseInt(effectiveSignalTime1.toFixed(2)) + parseInt(effectiveSignalTime2.toFixed(2)) + parseInt(effectiveSignalTime3.toFixed(2)) +parseInt(6)+ parseInt(9);


  


}
