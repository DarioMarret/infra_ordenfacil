# borrar los archivos de certificados anteriores
sudo rm -r /etc/nginx/sites-available/ordenfacil.org
sudo rm -r /etc/nginx/sites-enabled/ordenfacil.org


sudo cp default.nginx /etc/nginx/sites-available/ordenfacil.org
sudo ln -s /etc/nginx/sites-available/ordenfacil.org /etc/nginx/sites-enabled/ordenfacil.org
sudo systemctl restart nginx
