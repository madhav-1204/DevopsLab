Experiment 6: Basic Docker Commands
Aim: To learn and execute basic Docker commands for managing images and containers.

Procedure:
1. Install Docker Desktop and start the Docker engine.
2. Verify Docker installation.
3. Download the hello-world image from Docker Hub.
4. Run the image to create a container.
5. List running containers and all containers.
6. View downloaded images.
7. Stop and remove containers, then remove unused images.
Important commands:
Command	Purpose
docker --version	Check Docker version
docker pull hello-world	Download an image
docker run hello-world	Run a container
docker ps	List running containers
docker ps -a	List all containers
docker images	List local images
docker stop CONTAINER_ID	Stop a container
docker rm CONTAINER_ID	Remove a container
docker rmi hello-world	Remove an image

Example workflow:
docker pull hello-world
docker run hello-world
docker ps -a
docker images


Result: Basic Docker commands were executed successfully to download images, create containers, and manage them.