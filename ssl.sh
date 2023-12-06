# borrar los archivos de certificados anteriores
udo rm -rf /etc/nginx/sites-available/ordenfacil.org
sudo rm -rf /etc/nginx/sites-enabled/ordenfacil.org


sudo cp default.nginx /etc/nginx/sites-available/ordenfacil.org
sudo ln -s /etc/nginx/sites-available/ordenfacil.org /etc/nginx/sites-enabled/ordenfacil.org
sudo systemctl restart nginx
