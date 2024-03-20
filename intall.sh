# instalar node 18 y npm

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar docker

sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# Instalar docker-compose

sudo apt-get install -y docker-compose

# Instalar nginx y certbot

sudo apt-get install -y nginx

sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d ordenfacil.org -m dariomarret74@gmail.com --agree-tos --redirect


sudo certbot --nginx -d flashchat.chat -m dariomarret74@gmail.com --agree-tos --redirect

sudo cp default.nginx /etc/nginx/sites-available/ordenfacil.org
sudo ln -s /etc/nginx/sites-available/flashchat.chat /etc/nginx/sites-enabled/flashchat.chat


sudo systemctl status certbot.timer

sudo certbot renew --dry-run

sudo systemctl restart nginx