Make a fly.io account. Install Docker and have it running. Then type this in your terminal and hit enter after every line.

In your terminal:

<pre>
cd /path/to/where_you_want_this_to_be_stored
git clone https://github.com/genderev/assassin_server.git
cd assassin_server
flyctl init
flyctl deploy
</pre>

For <code> flyctl init </code>, the default configuration is to use the Dockerfile to install and listen on port 8080. 
If you want to install the server with default config, <strong><a href="https://docs.docker.com/get-docker/">install Docker</a></strong> and have the Docker daemon running while you deploy to fly.io. (If it's already on your computer, great!)

If you don't want to install with the default config, well...I can't tell you what to do. Go be free!

If you haven't installed npm, learn about it <a href="https://www.w3schools.com/nodejs/nodejs_npm.asp">here</a> and install it <a href="https://www.npmjs.com/get-npm">here</a>.


Inside the folder for <code>assassin_server</code>, on your computer, go to the file server.js and add this: <code> console.log(drive.key)</code>.
Then run <code> npm install</code> and <code> npm start </code> from that folder inside the terminal. 
Now go to <code> http://localhost:8080 </code> in your browser. In the terminal, you will see the result of <code> console.log(drive.key)</code>. Save it! You can use this to access your data if your server ever goes down etc.




