//triangle Resize when index is loaded
// let triangle = document.querySelector(".triangle");
// window.addEventListener("load", (event) => {triangleResize()});
// function triangleResize() {
//     triangle.style.width = "9%";
//     triangle.style.height = "20%";
// }
// function triangleResizeDown() {
//     triangle.style.width = "7vw";
//     triangle.style.height = "7vw";
// }
// setTimeout(triangleResizeDown, 2000);

//triangle click
let collectionBg = document.querySelector(".collectionBg");
let triangle = document.querySelector(".triangle");

let i_triangle = true;
function openCollection() {
    if (i_triangle == true) {
        collectionBg.style.display = "flex";
        triangle.style.setProperty("background-color", "rgb(174, 196, 231)");
        i_triangle = false;
    } else {
        collectionBg.style.display = "none";
        triangle.style.setProperty("background-color", "red");
        i_triangle = true;
    }
}

// //adding results to collection
// //Collection Page 1
// var Q1_input = document.querySelector(".slider");
// var sliderResult = document.getElementById("sliderResult");
// let P1 = document.getElementById("P1");
// Q1_input.addEventListener("input", showResultCollection);

// //Collection Page 2
// let P2 = document.getElementById("P2");
// bookThicknessInput.addEventListener("input", showResultCollection);

// //for all changes in input in every questions -> update every pages in collection
// function showResultCollection() {
//     let value = document.getElementById("myRange").value;
//     let roundedValue = Math.floor( value / 10 );
//     let message = 'Unexpected result';

//     switch ( roundedValue ) {
//         case 0: message ='a pair of glasses'; break;
//         case 1: message ='a cap'; break;
//         case 2: message ='an onion'; break;
//         case 3: message ='a cup of coffee'; break;
//         case 4: message ='a canned corn'; break;
//         case 5: message ='a pair of shoes'; break;
//         case 6: message ='a bottle of water'; break;
//         case 7: message ='a laptop'; break;
//         case 8: message ='a bag of grocery'; break;
//         case 9: message ='a chair'; break;
//         case 10: message ='more than anything'; break;
//     }
//     P1.innerHTML = "A story of " + message;

//     let thicknessValue = document.getElementById("bookThicknessInput").value;
//     P2.innerHTML = "who is " + thicknessValue + "cm tall.";
// }


//Collection Flipping
let collectionRightAll = document.querySelectorAll(".collectionRight");
let i_P1 = true;
let i_P2 = true;
let i_P3 = true;
let i_P4 = true;
let i_P5 = true;
let i_P6 = true;
let i_P7 = true;
let i_P8 = true;
let i_P9 = true;
function flipP1() {
    if (i_P1 == true){
        collectionRightAll[8].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[8].style.setProperty("transform-origin", "0%");
        collectionRightAll[8].style.setProperty("z-index", "11");
        i_P1 = false; 
    } else {
        collectionRightAll[8].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[8].style.setProperty("z-index", "19");
        i_P1 = true; 
    }
    console.log("clicked");
}
function flipP2() {
    if (i_P2 == true){
        collectionRightAll[7].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[7].style.setProperty("transform-origin", "0%");
        collectionRightAll[7].style.setProperty("z-index", "12");
        i_P2 = false; 
    } else {
        collectionRightAll[7].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[7].style.setProperty("z-index", "18");
        i_P2 = true; 
    }
}
function flipP3() {
    if (i_P3 == true){
        collectionRightAll[6].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[6].style.setProperty("transform-origin", "0%");
        collectionRightAll[6].style.setProperty("z-index", "13");
        i_P3 = false; 
    } else {
        collectionRightAll[6].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[6].style.setProperty("z-index", "17");
        i_P3 = true; 
    }
}
function flipP4() {
    if (i_P4 == true){
        collectionRightAll[5].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[5].style.setProperty("transform-origin", "0%");
        collectionRightAll[5].style.setProperty("z-index", "14");
        i_P4 = false; 
    } else {
        collectionRightAll[5].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[5].style.setProperty("z-index", "16");
        i_P4 = true; 
    }
}
function flipP5() {
    if (i_P5 == true){
        collectionRightAll[4].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[4].style.setProperty("transform-origin", "0%");
        collectionRightAll[4].style.setProperty("z-index", "15");
        i_P5 = false; 
    } else {
        collectionRightAll[4].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[4].style.setProperty("z-index", "15");
        i_P5 = true; 
    }
}
function flipP6() {
    if (i_P6 == true){
        collectionRightAll[3].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[3].style.setProperty("transform-origin", "0%");
        collectionRightAll[3].style.setProperty("z-index", "16");
        i_P6 = false; 
    } else {
        collectionRightAll[3].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[3].style.setProperty("z-index", "14");
        i_P6 = true; 
    }
}
function flipP7() {
    if (i_P7 == true){
        collectionRightAll[2].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[2].style.setProperty("transform-origin", "0%");
        collectionRightAll[2].style.setProperty("z-index", "17");
        i_P7 = false; 
    } else {
        collectionRightAll[2].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[2].style.setProperty("z-index", "13");
        i_P7 = true; 
    }
}
function flipP8() {
    if (i_P8 == true){
        collectionRightAll[1].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[1].style.setProperty("transform-origin", "0%");
        collectionRightAll[1].style.setProperty("z-index", "18");
        i_P8 = false; 
    } else {
        collectionRightAll[1].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[1].style.setProperty("z-index", "12");
        i_P8 = true; 
    }
}
function flipP9() {
    if (i_P9 == true){
        collectionRightAll[0].style.setProperty("transform", "rotateY(-180deg)");
        collectionRightAll[0].style.setProperty("transform-origin", "0%");
        collectionRightAll[0].style.setProperty("z-index", "19");
        i_P9 = false; 
    } else {
        collectionRightAll[0].style.setProperty("transform", "rotateY(0deg)");
        collectionRightAll[0].style.setProperty("z-index", "11");
        i_P9 = true; 
    }
}


//Question01 show slider value
var Q1_input = document.querySelector(".slider");
var sliderResult = document.getElementById("sliderResult");

Q1_input.addEventListener("input", showSliderResult);

function showSliderResult() {
    let value = document.getElementById("myRange").value;
    let roundedValue = Math.floor( value / 10 );
    let message = 'Unexpected result';

    switch ( roundedValue ) {
        case 0: message ='a pair of glasses'; break;
        case 1: message ='a cap'; break;
        case 2: message ='an onion'; break;
        case 3: message ='a cup of coffee'; break;
        case 4: message ='a canned corn'; break;
        case 5: message ='a pair of shoes'; break;
        case 6: message ='a bottle of water'; break;
        case 7: message ='a laptop'; break;
        case 8: message ='a bag of grocery'; break;
        case 9: message ='a chair'; break;
        case 10: message ='more than anything'; break;
    }
    sliderResult.innerHTML = message;
}

//Q2 adding book measurement numbers ()()()
let bookMeasurementWidth = document.getElementById("bookMeasurementWidth");
let bookMeasurementHeight = document.getElementById("bookMeasurementHeight");
let bookMeasurementThickness = document.getElementById("bookMeasurementThickness");

let bookMeasurements = document.querySelectorAll(".bookMeasurement");
let bookMeasurement = document.querySelector(".bookMeasurement");
let bookMeasurementAll = document.querySelector(".bookMeasurementAll");

let bookWidthInput = document.querySelector(".bookWidthInput");
bookWidthInput.addEventListener("input", showBookWidthResult);
function showBookWidthResult(){
    let text = "";
    let value = document.getElementById("bookWidthInput").value
    for (let i = 0; i < value; i++) {
    text += "()" ;
    }
    bookMeasurementWidth.innerHTML = text;

    //change image width
    let bookMeasurements = document.querySelectorAll(".bookMeasurement");
    let bookMeasurement = document.querySelector(".bookMeasurement");
    let bookImageWidth = value * 30;
    bookMeasurements.forEach(bookMeasurement => {
        bookMeasurement.style.setProperty("width", bookImageWidth + "px");
    });
}

let bookHeightInput = document.querySelector(".bookHeightInput");
bookHeightInput.addEventListener("input", showBookHeightResult);
function showBookHeightResult(){
    let text = "";
    let value = document.getElementById("bookHeightInput").value
    for (let i = 0; i < value; i++) {
    text += "()" ;
    }
    bookMeasurementHeight.innerHTML = text;

    //change image height
    let bookMeasurements = document.querySelectorAll(".bookMeasurement");
    let bookMeasurement = document.querySelector(".bookMeasurement");
    let bookImageHeight = value * 30;
    bookMeasurements.forEach(bookMeasurement => {
        bookMeasurement.style.setProperty("height", bookImageHeight + "px");
        bookMeasurement.style.setProperty("margin-top", "-" + bookImageHeight + "px");
    });
    bookMeasurements[bookMeasurements.length - 1].style.setProperty("margin-top", "0px");
}

let bookThicknessInput = document.querySelector(".bookThicknessInput");
bookThicknessInput.addEventListener("input", showBookThicknessResult);
function showBookThicknessResult(){
    let text = "";
    let thicknessValue = document.getElementById("bookThicknessInput").value
    bookMeasurementAll.replaceChildren();
    let widthValue = document.getElementById("bookWidthInput").value
    let heightValue = document.getElementById("bookHeightInput").value

    for (let i = 0; i < thicknessValue; i++) {
    text += "()" ;
    }
    bookMeasurementThickness.innerHTML = text;

    let bookImageWidth = widthValue * 30;
    // bookMeasurements.forEach(bookMeasurement => {
    //     bookMeasurement.style.setProperty("width", bookImageWidth + "px");
    // });
    let bookImageHeight = heightValue * 30;
    // bookMeasurements.forEach(bookMeasurement => {
    //     bookMeasurement.style.setProperty("height", bookImageHeight + "px");
    //     bookMeasurement.style.setProperty("margin-top", "-" + bookImageHeight + "px");
    // });
    
    //create new elements for image thickness
    for (let i = 0; i < thicknessValue * 3; i++){
    let thickness = document.createElement("div");
    thickness.className = "bookMeasurement";
    thickness.style.setProperty("width", bookImageWidth + "px");
    thickness.style.setProperty("height", bookImageHeight + "px");
    thickness.style.setProperty("margin-top", "-" + bookImageHeight + "px");
    document.querySelector(".bookMeasurementAll").appendChild(thickness);
    }
    let newBookMeasurements = document.querySelectorAll(".bookMeasurement");
        if (newBookMeasurements.length > 0) {
            newBookMeasurements[newBookMeasurements.length - 1].style.marginTop = "0px";
        }
}

//Question3 Slider Paper Color
let paperColor = document.querySelector(".paperColor");
let Q3_inputH = document.getElementById("Q3_rangeH");
let Q3_inputS = document.getElementById("Q3_rangeS");
let Q3_inputL = document.getElementById("Q3_rangeL");
Q3_inputH.addEventListener("input", showSliderColorResult);
Q3_inputS.addEventListener("input", showSliderColorResult);
Q3_inputL.addEventListener("input", showSliderColorResult);

function showSliderColorResult() {
    let valueH = document.getElementById("Q3_rangeH").value;
    let valueS = document.getElementById("Q3_rangeS").value;
    let valueL = document.getElementById("Q3_rangeL").value;

    paperColor.style.setProperty("--Q3_H", valueH);
    paperColor.style.setProperty("--Q3_S", valueS + "%");
    paperColor.style.setProperty("--Q3_L", valueL + "%");

    // console.log (valueH);
}

//Question4 Canvas drawing a curve
let curveLine = document.getElementById("curveLine");
let Q4_inputCurveHeight = document.getElementById("Q4_rangeCurveHeight");
Q4_inputCurveHeight.addEventListener("input", showSliderCurveResult);

function showSliderCurveResult() {
    let valueCurveHeight = Q4_inputCurveHeight.value;
    curveLine.setAttribute("d", "M 10 600 q 240 " + valueCurveHeight + " 480 0");
}

//Question5 Slider Paper Texture
let paperTexture = document.querySelector(".paperTexture");

let Q5_range_transparent01 = document.getElementById("Q5_range_transparent01");
let Q5_range_black = document.getElementById("Q5_range_black");
let Q5_range_transparent02 = document.getElementById("Q5_range_transparent02");
let Q5_range_bgSize = document.getElementById("Q5_range_bgSize");
let Q5_range_gradient = document.getElementById("Q5_range_gradient");
Q5_range_transparent01.addEventListener("input", showSliderTextureResult);
Q5_range_black.addEventListener("input", showSliderTextureResult);
Q5_range_transparent02.addEventListener("input", showSliderTextureResult);
Q5_range_bgSize.addEventListener("input", showSliderTextureResult);
Q5_range_gradient.addEventListener("input", showSliderTextureResult);

function showSliderTextureResult() {
    let value_transparent01 = Q5_range_transparent01.value
    let value_black = Q5_range_black.value
    let value_transparent02 = Q5_range_transparent02.value
    let value_bgSize = Q5_range_bgSize.value

    //theses values from sliders are strings, so convert!
    let value_gradient = Q5_range_gradient.value
    let value_gradient_converted = parseInt(value_gradient, 10);
    let gradientType;
    switch ( value_gradient_converted ) {
        case 0: gradientType = "conic-gradient"; break;
        case 1: gradientType = "radial-gradient"; break;
        case 2: gradientType = "linear-gradient"; break;
        case 3: gradientType = "conic-gradient"; break;
        default: gradientType = "radial-gradient";
    }
    console.log (gradientType);
    console.log (value_gradient_converted);

    // paperTexture.style.setProperty("--Q5_transparent01", value_transparent01 + "%");
    // paperTexture.style.setProperty("--Q5_black", value_black + "%");
    // paperTexture.style.setProperty("--Q5_transparent02", value_transparent02 + "%");
    // paperTexture.style.setProperty("--Q5_bgSize", value_bgSize + "px");

    // paperTexture.style.setProperty("background-image", gradientType + "(transparent" + value_transparent01 + "%," + value_black + "%," + value_transparent02 + "%)");
    paperTexture.style.backgroundImage = `${gradientType}(
        transparent ${value_transparent01}%,
        black ${value_black}%,
        transparent ${value_transparent02}%
    )`;
    paperTexture.style.setProperty("--Q5_bgSize", value_bgSize + "px");
}

//Question6 how to flip
let flipPosButtonAll = document.querySelectorAll(".flipPos");
let flip_i = 0;
flipPosButtonAll.forEach(button => {
    button.addEventListener("click", function() {
        if (flip_i == 0){
            this.style.backgroundColor = "red";
            this.style.border = "none";
            flip_i = 1;
        } else if (flip_i == 1) {
            this.style.backgroundColor = "rgb(255, 245, 152)";
            this.style.border = "none";
            flip_i = 2;
        } else if (flip_i == 2) {
            this.style.backgroundColor = "rgb(174, 196, 231)";
            this.style.border = "none";
            flip_i = 3;
        } else if (flip_i == 3) {
            this.style.backgroundColor = "rgb(104, 78, 35)";
            this.style.border = "none";
            flip_i = 4;
        } else if (flip_i == 4) {
            this.style.backgroundColor = "rgb(210, 218, 163)";
            this.style.border = "none";
            flip_i = 0;
        }
    });
});

//adding results to collection
//Collection Page 1
var Q1_input = document.querySelector(".slider");
var sliderResult = document.getElementById("sliderResult");
let P1 = document.getElementById("P1");
Q1_input.addEventListener("input", showResultP1);

function showResultP1() {
    let value = document.getElementById("myRange").value;
    let roundedValue = Math.floor( value / 10 );
    let message = 'Unexpected result';

    switch ( roundedValue ) {
        case 0: message ='a pair of glasses'; break;
        case 1: message ='a cap'; break;
        case 2: message ='an onion'; break;
        case 3: message ='a cup of coffee'; break;
        case 4: message ='a canned corn'; break;
        case 5: message ='a pair of shoes'; break;
        case 6: message ='a bottle of water'; break;
        case 7: message ='a laptop'; break;
        case 8: message ='a bag of grocery'; break;
        case 9: message ='a chair'; break;
        case 10: message ='a desk with books'; break;
    }
    P1.innerHTML = "A story of " + message;
}

//Collection Page 2 
let P2 = document.getElementById("P2");
bookThicknessInput.addEventListener("input", showResultP2);
function showResultP2() {
    let thicknessValue = document.getElementById("bookThicknessInput").value;
    P2.innerHTML = "who is " + thicknessValue + " cm tall.";
}

//Collection Page 3
let P3 = document.getElementById("P3");
let Q7_input01 = document.getElementById("Q7_input01");
Q7_input01.addEventListener("input", showResultP3);

function showResultP3() {
    let value = document.getElementById("myRange").value;
    let roundedValue = Math.floor( value / 10 );
    let message = 'Unexpected result';

    switch ( roundedValue ) {
        case 0: message ='a pair of glasses'; break;
        case 1: message ='a cap'; break;
        case 2: message ='an onion'; break;
        case 3: message ='a cup of coffee'; break;
        case 4: message ='a canned corn'; break;
        case 5: message ='a pair of shoes'; break;
        case 6: message ='a bottle of water'; break;
        case 7: message ='a laptop'; break;
        case 8: message ='a bag of grocery'; break;
        case 9: message ='a chair'; break;
        case 10: message ='a desk with books'; break;
    }
    let Q7_input01Value = document.getElementById("Q7_input01").value;
    P3.innerHTML = "One day " + message + " was walking to " + Q7_input01Value + ".";
}

//Collection Page 4
let P4 = document.getElementById("P4");
bookWidthInput.addEventListener("input", showResultP4);
function showResultP4() {
    let widthValue = document.getElementById("bookWidthInput").value;
    P4.innerHTML = "It took " + widthValue + " days to even get half way there.";
}

//Collection Page 5
let P5 = document.getElementById("P5");
Q4_inputCurveHeight.addEventListener("input", showResultP5);
function showResultP5() {
    let Q4_value = Q4_inputCurveHeight.value;
    let Q4_roundedValue = Math.floor( Q4_value * (-1) / 5 );
    let Q4_message = "a human";

    switch ( Q4_roundedValue ) {
        case 0: Q4_message ='a human'; break;
        case 1: Q4_message ='a pigeon'; break;
        case 2: Q4_message ='an ant'; break;
        case 3: Q4_message ='anna'; break;
        case 4: Q4_message ='a cat'; break;
    }

    let value = document.getElementById("myRange").value;
    let roundedValue = Math.floor( value / 10 );
    let message = 'Unexpected result';

    switch ( roundedValue ) {
        case 0: message ='a pair of glasses'; break;
        case 1: message ='a cap'; break;
        case 2: message ='an onion'; break;
        case 3: message ='a cup of coffee'; break;
        case 4: message ='a canned corn'; break;
        case 5: message ='a pair of shoes'; break;
        case 6: message ='a bottle of water'; break;
        case 7: message ='a laptop'; break;
        case 8: message ='a bag of grocery'; break;
        case 9: message ='a chair'; break;
        case 10: message ='a desk with books'; break;
    }
    P5.innerHTML = message + " decided to get into " + Q4_message + "'s shirt pocket";
}

//Collection Page 6
let P6_1 = document.getElementById("P6_1");
let P6_2 = document.getElementById("P6_2");
let P6_color = document.getElementById("P6_color");

Q3_inputH.addEventListener("input", showResultP6);
Q3_inputS.addEventListener("input", showResultP6);
Q3_inputL.addEventListener("input", showResultP6);

function showResultP6() {
    let valueH = document.getElementById("Q3_rangeH").value;
    let valueS = document.getElementById("Q3_rangeS").value;
    let valueL = document.getElementById("Q3_rangeL").value;

    P6_color.style.setProperty("--P6_H", valueH);
    P6_color.style.setProperty("--P6_S", valueS + "%");
    P6_color.style.setProperty("--P6_L", valueL + "%");

    P6_1.innerHTML = "and cannot help feeling ";
    P6_color.style.display = "block";
    P6_2.innerHTML = " inside that pocket.";
}

//Collection Page 7
let P7 = document.getElementById("P7");
Q5_range_transparent01.addEventListener("input", showResultP7);
Q5_range_black.addEventListener("input", showResultP7);
Q5_range_transparent02.addEventListener("input", showResultP7);
Q5_range_bgSize.addEventListener("input", showResultP7);
Q5_range_gradient.addEventListener("input", showResultP7);

function showResultP7 () {
    let value = Q5_range_bgSize.value;
    let roundedValue = Math.floor( value / 10 );
    let message = 'Unexpected result';

    switch ( roundedValue ) {
        case 0: message ='textured but smooth'; break;
        case 1: message ='grainy'; break;
        case 2: message ='an onion'; break;
        case 3: message ='uneven'; break;
        case 4: message ='stormy'; break;
        case 5: message ='rough'; break;
        case 6: message ='rustic'; break;
        case 7: message ='bumpy'; break;
        case 8: message ='smooth with some uneven paths'; break;
        case 9: message ='very smooooth'; break;
        case 10: message ='slippery'; break;
    }

    P7.innerHTML = "It was a " + message + " journey.";
}

//Collection Page 8
let P8 = document.getElementById("P8");
let P9 = document.getElementById("P9");
flipPosButtonAll.forEach(button => {
    button.addEventListener("click", function() {
        let Q4_value = Q4_inputCurveHeight.value;
        let Q4_roundedValue = Math.floor( Q4_value * (-1) / 5 );
        let Q4_message = "a human";

        switch ( Q4_roundedValue ) {
            case 0: Q4_message ='a human'; break;
            case 1: Q4_message ='a pigeon'; break;
            case 2: Q4_message ='an ant'; break;
            case 3: Q4_message ='anna'; break;
            case 4: Q4_message ='a cat'; break;
        }

        let value = document.getElementById("myRange").value;
        let roundedValue = Math.floor( value / 10 );
        let message = 'Unexpected result';

        switch ( roundedValue ) {
            case 0: message ='a pair of glasses'; break;
            case 1: message ='a cap'; break;
            case 2: message ='an onion'; break;
            case 3: message ='a cup of coffee'; break;
            case 4: message ='a canned corn'; break;
            case 5: message ='a pair of shoes'; break;
            case 6: message ='a bottle of water'; break;
            case 7: message ='a laptop'; break;
            case 8: message ='a bag of grocery'; break;
            case 9: message ='a chair'; break;
            case 10: message ='a desk with books'; break;
        }
        P8.innerHTML = "Until " + Q4_message + " pick " + message + " up with a thumb, an index finger and a pinky.";
        P9.innerHTML = "To be continued... Thank you for taking time to get to know your 'book'."
    });
});