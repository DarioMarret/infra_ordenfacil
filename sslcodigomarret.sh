sudo certbot --nginx -d codigomarret.online -m dariomarret74@gmail.com --agree-tos --redirect

sudo cp codigomarret.nginx /etc/nginx/sites-available/codigomarret.online
sudo ln -s /etc/nginx/sites-available/codigomarret.online /etc/nginx/sites-enabled/codigomarret.online

sudo systemctl status certbot.timer

sudo certbot renew --dry-run

sudo systemctl restart nginx