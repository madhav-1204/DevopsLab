Experiment 5: Integrate a Java Project with Jenkins
Aim: To integrate a Java program with Jenkins and automate its build and execution.

Procedure:
1. Create a Java program named Demo.java.
2. Upload the source code to a GitHub repository.
3. Open Jenkins and create a Freestyle project named JavaDemo.
4. Configure the Git repository URL and select the main branch.
5. Add an Execute Windows batch command build step.
6. Enter the Java compilation and execution commands.
7. Save the job and click Build Now.
8. Check the Console Output for the program output and build status.
Commands used in Jenkins:
javac Demo.java
java Demo


Expected output:
Hello World
Finished: SUCCESS


Result: The Java program was successfully retrieved from GitHub, compiled, and executed through Jenkins.