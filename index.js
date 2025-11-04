var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(
    `<DOCTYPE html>
        <html>
                <head>
                        <title>Portfolio</title>
                </head>                

                <body style="text-align: center; font-family: Arial, Helvetica, sans-serif;">
                    <section style="padding: 3px;">
                        <h1>My Mini Portfolio (V1)</h1>
                        <p>Here you will see my coding progress... hopefully.</p>
                    </section>
                    <section style="padding: 3px;">
                        <h2>Allow me to introduce myself</h2>
                        <p>My name is Fatimah, and I am a Creative Computing student.</p>
                        <p>If you're an employer, PLEASE HIRE ME &#128516;</p>
                    </section>
                    <section style="padding: 3px;">
                        <h2>Projects</h2>
                        <h3>Insert Project 1...</h3>
                        <h3>Insert Project 2...</h3>
                        <h3>Insert Project 3...</h3>
                    </section>
                    <section style="padding: 3px;">
                        <p>Thank you for taking a pit stop here!</p>
                    </section>
                </body>
        </html>
    `);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});