git pull;
cd ./client ; 
npm i;
npm run build ; 
cd ../api ;
npm i;
pm2 stop app.js ; 
pm2 start app.js 
