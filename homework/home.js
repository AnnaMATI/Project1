//  գրել այնպես որ վերջում վերադարձնի միայն անուն ու score օրինակ Albert 53

// const studentsData = [
//     {
//       name: "Albert",
//       lastName: "Einstein",
//       score: 53
//     },
//     {
//       name: "Charles",
//       lastName: "Dickens",
//       score: 84
//     },
//     {
//       name: "Marilyn",
//       lastName: "vos Savant",
//       score: 99
//     },
//   ];

//   const reducedData = studentsData.reduce((acc, student) => {
//    acc[student.name]=student.score;
//    return acc
//   }, {});
  
//   console.log(reducedData);


// գրել այնպես որ վերադարձնի մ ի զանգված կրկնվող արժեքենրով
// let arr = [
//   {name: 'Alice', score: 10},
//   {name: 'Bob', score: 20},
//   {name: 'Juliana', score: 30},
//   {name: 'Karen', score: 30},
//   {name: 'Jona', score: 10},
//   {name: 'Lewis', score: 10},
// ]
// const arr1=arr.reduce((acc, curr)=>{
//   const score=curr.score;
//   if(!acc[score]){
//     acc[score]=[curr]
//   }else{
//     acc[score].push(curr)
//   }return acc;
// })
// console.log(arr1)

// reduce- միջոցով հաշվել գումարը

// const array_reduce = [1,5,6,2,3]
// const arr2=array_reduce.reduce((acc, sum)=>{
// return acc+sum 
// })
//  console.log(arr2)


// ogtagorcel join ev stanal "HELLO" string
// const array_join = ["H","E","L","L","O"]
// console.log (array_join.join(""))


// inchpes karox em tpel 1ic minchev 9 tver@?
// const matrix = [[1,2,3], [4,5,6], [7,8,9]]
// let aray1=matrix[0].concat(matrix[1])
// let aray2=aray1.concat(matrix[2])
// console.log(aray2)

//petq e veradardzi index@ te vortexe ayd number@ gtnvum

// const arr2=[1,5,6,2,3]
// function find_index(arr, num){
// for(i=0; i<arr.length; i++){
//     if(arr[i]===num)
//     return i
// }    
// }
// console.log(find_index([1,5,6,2,3], 1))

// kam 2-rd exanak
// const arr2=[1,5,6,2,3]
// function find_index(arr, num){
//    return arr.indexOf(num)
// }
// console.log(find_index([1,5,6,2,3], 1))


// const name = "Elizabeth"
// const array = name.toLowerCase().split('') //erkrord orinak
// let count = 0
// for(let i = 0 ; i < name.length; i ++){
// if (name[i] == "e" || name[i] == "E"){
// count ++
// }
// }
// console.log(name)


// let count = array.reduce((acc, cur) => {
//     if(cur === 'e') {
//         acc++
//     }
//     return acc;
// }, 0)

// console.log(count)

// hashvel  cankacac tvi qarakusi 

// function square(num){
//        return num**2
//     }
//     console.log(square(5))

// grel while loop-ov cikl, vor@ kkangni miayn ayn jamanak erb payman@wh
// let n=0
// while(true){
//     if(n==7){
//         break;
//     }
//  n++;
//  console.log(n);
// }




//to_map array-i vra ogtagorcel map stexcelov nor array "mapped"

// const to_map = [1,2,3,4,5]
// let y= to_map.map(function(arr){
//     return arr*2
// })
// console.log(y)

// function sum(num){
//     if(num===1){
//         return num 
//     }return num + sum(num-1)
// }
// console.log (sum(5))

// function  power (num, sqr){
//     if(sqr===0){return 1;}
// return num* power(num, sqr-1)}
// console.log (power(2,5))

// function factorial(num){
//     if(num===0){return 1}
//     return num * factorial(num-1)
// }console.log(factorial(5))