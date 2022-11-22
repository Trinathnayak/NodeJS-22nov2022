const http=require("http")
http.createServer((req,res)=>{
	res.write("P.B.Siddhartha College is Under the Trinath Nayak Control")
	res.end()
}).listen(2003)