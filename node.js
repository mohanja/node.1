

var fs=require('fs')
 
var currenttime=()=>{
var dt=new Date();
var date=(dt.getDate())
var month=(dt.getMonth()+1)

var year=dt.getFullYear()
var hours=dt.getHours()
var minutes=dt.getMinutes()
var seconds=dt.getSeconds()

var output=date+"."+month+"."+year
var time=hours+"-"+minutes+"-"+seconds
console.log("currnet time : "+time)
return "current date : "+ output 
}
fs.writeFile("./current timestamp/date-time.txt",currenttime(),(err)=>{
   console.log('complited file wirte')
})

fs.readFile("./date-time.txt", (err, buff) => {
  
   if (err) {
     console.error(err);
     return;
   }
   console.log("succes");
});

