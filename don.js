console.log('connected')
//triangle area
function calculateTrangel(){
 const wTriangle= document.getElementById('widthTriangle');
 const wTrian= wTriangle.value;
 const trianBase= parseFloat(wTrian)
 console.log(trianBase)

 const htriangle= document.getElementById('height-triangle');
 const htrian= htriangle.value;
 const trianWidth= parseFloat(htrian);
 console.log(trianWidth)

 const triangleArrya= 0.5*trianBase*trianWidth
 console.log(triangleArrya)

 const areatra= document.getElementById('trectangle-area');
 areatra.innerText= triangleArrya;

}

//rectangle area
function rectangleArea(){
 const rectangleWidht=document.getElementById('w-rectangle')
 const widthRectangle= rectangleWidht.value;
 const convertRectangle= parseFloat(widthRectangle)

 //height
 const rectangleHeight=document.getElementById('height-rect');
 const heightRectan=rectangleHeight.value;
 const convertRecHeigh= parseFloat(heightRectan);

 const RectArea= convertRecHeigh*convertRectangle;
const ReAia= document.getElementById('display-rectangle')
ReAia.innerText= RectArea
}


//Parallelogram
function ParallelogramArea(){
 const ParallelogramWidth = document.getElementById('Parallelogram-width');
 const parallaValue= ParallelogramWidth.value;
 const parallaValueconvert = parseFloat(parallaValue);

 //height
 const parallelogHeight=document.getElementById('height-parallelog');
 const paralHeightValue= parallelogHeight.value;
 const convertParalHeight= parseFloat(paralHeightValue)


 const paralaAria=convertParalHeight * parallaValueconvert
 const displayPara=document.getElementById('dis-paral')
 displayPara.innerText= paralaAria;
}

function RhombusArea(){
 const rohombusWidth=document.getElementById('Rhombus-Width');
 const rohombushD1Value=rohombusWidth.value;
 const rohomConveret=parseFloat(rohombushD1Value)

 const rohombushHeght=document.getElementById('rhombus-height')
 const rhombusD2value=rohombushHeght.value;
 const rhombusD2convert= parseFloat(rhombusD2value)


 const Rhombusarea=0.5*rohomConveret*rhombusD2convert;
 const AreaRhombus=document.getElementById('roumbusAre');
 AreaRhombus.innerText=Rhombusarea
}


//Pentagon area
function PentagonArea(){
 const pentagonWidth=document.getElementById('pentagopnP')
 const pentagonValue=pentagonWidth.value;
 const pentagonConvert=parseFloat(pentagonValue)

 //height
 const pentagonHeight= document.getElementById('pentagonH');
 const pentagonHvalue=pentagonHeight.value;
 const pentagaonHConvert= parseFloat(pentagonHvalue);

 const areaPent=0.5*pentagonConvert*pentagaonHConvert;
 const Areapenta=document.getElementById('area-p');
 Areapenta.innerText=areaPent
}

//Ellipse area
function EllipseArea(){
 const EllipseA=document.getElementById('Ellipse-A');
 const EllipseValue=EllipseA.value;
 const EllipseConvert=parseFloat(EllipseValue);


 //height
 const EllipseB=document.getElementById('Ellipse-B');
 const EllipseBvalue=EllipseB.value;
 const EllipseBconvert=parseFloat(EllipseBvalue);

 const AreaEllipse= 3.14159*EllipseBconvert*EllipseConvert;
 const EllipseSpan= document.getElementById('Ellipse-span');
 EllipseSpan.innerText= AreaEllipse;
}