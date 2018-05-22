
# Intro

pi_react, serving piousbox.com

# Develop
 NODE_ENV=development_production NODE_PATH=./config/development_production node dist/server.js

# Deploy Setup
Install node

From: https://nodesource.com/blog/installing-node-js-tutorial-ubuntu/
 curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
 sudo apt-get install -y nodejs
 node --version # 6.14.2

checkout the code (this should be capistrano-like)
* npm install?

make sure config is ok

make sure static assets are deployed as well

update code on production, restart.

I need a service there...

* /lib/systemd/system/pi_react.service
<pre>
[Unit]
Description=pi_react

[Service]
Environment=NODE_ENV=production
Environment=NODE_PATH=/home/ubuntu/projects/pi_react/current/config/production
ExecStart=/usr/bin/node /home/ubuntu/projects/pi_react/current/dist/server.js
Restart=always
StandardOutput=syslog
StandardError=syslog
User=ubuntu

[Install]
WantedBy=multi-user.target
</pre>
* ubuntu@ip-10-0-1-81:/etc/systemd/system/multi-user.target.wants$ 
* sudo ln -s /lib/systemd/system/pi_react.service .
* sudo systemctl start pi_react.service
* sudo systemctl restart pi_react.service

# Deploy Revision
on change of pi_react:
ssh into app_81
<pre>
 git pull
 npm install
 sudo systemctl restart pi_react.service
 journalctl -u pi_react.service
 
 NODE_ENV=production NODE_PATH=/home/ubuntu/projects/pi_react/current/config/production /usr/bin/node /home/ubuntu/projects/pi_react/current/dist/server.js

 NODE_ENV=development NODE_PATH=/home/ubuntu/.node_modules:/home/ubuntu/projects/pi_react/current/config/production /usr/bin/node /home/ubuntu/projects/pi_react/current/dist/server.js
</pre>





