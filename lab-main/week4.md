Experiment 4: Install and Configure Jenkins on Windows
Aim: To install and configure Jenkins on a Windows system for continuous integration and automation.

Procedure:
1. Check whether Java is installed using java -version.
2. Download and install Jenkins using the Windows installer.
3. Configure Jenkins to run as a Windows service.
4. Open http://localhost:8080 in a browser.
5. Unlock Jenkins using the initial administrator password.
6. Install the suggested plugins.
7. Create an administrator account and open the Jenkins dashboard.
Important commands:
java -version


Result: Jenkins was successfully installed and configured on Windows.
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