// Loop กับ Array
 
        //    0  1    2   3   4
let data1 = [10, 20, 30, 40, 50]
 
// การเข้าถึงทุกข้อมูลใน Array เพื่อเอาไปใช้งานใดๆ
// วิธีที่ 1
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i] * 100)
}
console.log('-------------------------')
// วิธีที่ 2
data1.forEach((value)=>{
    console.log(value * 100)
});
console.log('-------------------------')
// วิธีที่ 3 แนะนำ *****
data1.map((value)=>{
    console.log(value * 100)
})
console.log('-------------------------')
// วิธีที่ 4
for (let value of data1) {
    console.log(value * 100)
}
console.log('-------------------------')
// วิธีที่ 5
for (let i in data1) {
    console.log(data1[i] * 100)
}