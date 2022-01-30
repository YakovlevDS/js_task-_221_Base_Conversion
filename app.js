// solution 1
function convert(input, source, target) {
    var t = '', n = input.split('').reduce((n,v)=>n * source.length + source.indexOf(v), 0);
    do { t = target[n % target.length] + t;
         n = Math.floor(n / target.length); 
       } while (n > 0)
    return t;
  }
  
// solution 2

// const convert = (input, source, target) => {
//     let dec = [...input].reduce((pre, val) => pre * source.length + source.indexOf(val), 0);
//     let res = ``;
//     do {
//       res = target[dec % target.length] + res;
//       dec = Math.floor(dec / target.length);
//     } while (dec > 0);
//     return res;
//   };


// solution 3
// function convert(inp, s, t) {
//     var sl=s.length,tl=t.length,il=inp.length,d=[...inp].map((x,y)=>s.indexOf(x)*sl**(il-y-1)).reduce((x,y)=>x+y),li=[]
//     while (d){ li.push(d%tl) ; d = parseInt(d/tl) }
//     return li.reverse().map(x=>t[x]).join('') || t[0]
// }
// solution 4

// function convert(input, source, target) {
//     var t=0,r="";
//     input.split('').forEach(cv=>{t=t*source.length;t=t+source.indexOf(cv);});
//     do {r=target[t%target.length] + r;t=Math.floor(t/target.length);} while(t>0);
//     return r;
//   }



console.log(convert("15", dec, bin));

