function circleArea (r) {
    const pi = 3.14;
    const area = pi*r**2;
    console.log(area)


};

function circleCircumference(r){
    const pi=3.14;
    const circum = 2*pi*r
    console.log(circum)

}

module.exports={
    circleArea,
    circleCircumference,
}

