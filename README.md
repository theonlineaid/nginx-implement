## Command list
```
docker run --name bootstrap -v bootstrap:/usr/share/nginx/html -d -p 8000:80 nginx
docker exec -it nginx-container ls /usr/share/nginx/html/
docker cp /pcpath/bootstrap/. nginx-container:/usr/share/nginx/html/
```

## Alternative Approach
If you want to use docker run directly without Docker Compose:

- 01 Build the Docker Image:

```
docker build -t custom-nginx .

```
- 02 Run the Docker Container:

```
docker run --name bootstrap -v /pcpath/bootstrap:/usr/share/nginx/html -d -p 8000:80 custom-nginx

```
This command mounts the bootstrap directory from your host into the Nginx container and maps port 8000 on your host to port 80 in the container.

Both methods will serve the files in the bootstrap directory through Nginx, accessible at http://localhost:8000.