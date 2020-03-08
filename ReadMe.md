1. Docker command to run : sudo docker run -p 80:80 -d -v "/etc/nginx/nginx.conf":"/etc/nginx/nginx.conf" -v "$(pwd)":/usr/share/nginx/html nginx

2. The configuration file is important whether its in a local directory or any other directory.: Why ?
Because it contains a line : include /etc/nginx/sites-enabled/*;

3. So what ?
Inside that folder we have a default file which says 

server {
        listen 80;
        root /var/www/html;

        server_name www.walluri.com;
        index index.html index.htm;

        location / {
                try_files $uri
        }
}


