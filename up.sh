docker login -u "djmarret1992" -p "Tumadre1@" docker.io
docker-compose up -d && docker ps

sleep 5
pm2 restart all