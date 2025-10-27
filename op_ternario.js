let x=100,y=1000,z=22;
let M =(x>y)?( (x>z)? x : z ):( (y>z)? y : z );
console.log(`el mayor es ${M}`);