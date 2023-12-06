sudo apt-get install -y nginx

sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d ordenfacil.org -m dariomarret74@gmail.com --agree-tos --redirect

sudo cp default.nginx /etc/nginx/sites-available/ordenfacil.org
sudo ln -s /etc/nginx/sites-available/ordenfacil.org /etc/nginx/sites-enabled/ordenfacil.org


sudo systemctl status certbot.timer

sudo certbot renew --dry-run

sudo systemctl restart nginx