Experiment 9: Automate Running a Containerized Application Using Kubernetes
Aim: To automate the process of running a containerized application developed in Exercise 7 using Kubernetes.
Procedure with commands
1. Build the Docker image
docker build -t helloworld .


2. Log in to Docker Hub
docker login


3. Tag the image
docker tag helloworld:latest chaitanyavarma27/helloworld:latest


4. Push the image to Docker Hub
docker push chaitanyavarma27/helloworld:latest


5. Create a Kubernetes deployment
kubectl create deployment helloworld --image=chaitanyavarma27/helloworld:latest


6. Check the deployment
kubectl get deployments


7. List the pods
kubectl get pods


8. View the application output
kubectl logs <POD_NAME>


Replace <POD_NAME> with the actual pod name displayed by kubectl get pods.

9. Scale the deployment (optional)
kubectl scale deployment helloworld --replicas=2


10. Delete the deployment after completion
kubectl delete deployment helloworld


Expected output
Hello world
value of c is 600