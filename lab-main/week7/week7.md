Aim: To create a Java application and run it inside a Docker container. DevOps_Lab_Manual (1)-26-34 (3).pdf

Procedure
1. Create project files in VS Code inside the week7 folder:
- Test.java
- Dockerfile
2. Write the Java program in Test.java:

public class Test {
    public static void main(String[] args) {
        int a = 20, b = 30, c;
        c = a * b;
        System.out.println("Hello world");
        System.out.println("value of c is " + c);
    }
}


3. Write the Dockerfile:

FROM eclipse-temurin:17-jdk
WORKDIR /sam
COPY . .
RUN javac Test.java
CMD ["java", "Test"]


4. Open the VS Code terminal in the week7 folder.

5. List Docker images:
docker images


6. Build the Docker image:
docker build -t helloworld .


7. Run the container:
docker run --name mycontainer helloworld


8. Verify the output:
docker logs mycontainer


Expected output:
Hello world
value of c is 600


Result
The Java application was successfully containerized using Docker and executed inside a container.