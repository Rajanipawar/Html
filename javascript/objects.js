var obj=[{id:101, name: "Rajani", age:22, salary:20000 },{id:102, name: "Shikha", age:22, salary:30000},{id:103, name: "Arpita", age:22, salary:24000},{id:104, name: "Sahil", age:26, salary:37000},{id:105, name: "Sayali", age:23, salary:40000}];

var obj1=[{id:107, name: "Rajani", age:22, salary:20000 },{id:108, name: "Shikha", age:22, salary:30000},{id:109, name: "Arpita", age:22, salary:24000},{id:110, name: "Sahil", age:26, salary:37000},{id:111, name: "Sayali", age:23, salary:40000}];
// console.log(obj);
// console.log(obj[3]);
// for (var i=0;i<obj.length;i++){
//     if (obj[i].salary==30000){
//     console.log(obj[i].name);
//     }
// }
// obj.push({id:106, name: "Pallavi", age:20, salary:18000});
// console.log(obj);

// obj.pop();
// console.log(obj);

// obj.shift();
// console.log(obj);

// obj.unshift({id:106, name: "Pallavi", age:20, salary:18000});
// console.log(obj);

// obj.splice(1,4, {id:106, name: "Pallavi", age:20, salary:18000});
// console.log(obj);

// var obj2=obj.slice(1,4);
// console.log(obj2);

// obj.reverse();
// console.log(obj);

// var obj3=obj.concat(obj1);
// console.log(obj3);


// for (var i in obj){
//     console.log(obj[i]);
// }

// function Addrecord(id,fname,Sal,age){
//     this.id=id;
//     this.name=fname;
//     this.salary=Sal;
//     this.age=age;   
//     this.fullname=function(){
//         return this.name;
//     }

// }
// let record=new Addrecord(112,"Rajvi",34000,25);

// obj.push("id:"+record.id,"name:"+record.name,"salary:"+record.salary,"age:"+record.age);

// for(var i in obj){

//     console.log(obj[i]);
// }

// console.log(record.fullname());


// this.fullname=function(){
//     return this.name;
// }

// console.log(record.fullname());

for(var i in obj){
    if(i<6){
        delete obj[i].salary;
        console.log(obj[i]);
    }
}