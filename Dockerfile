# Use an official Java 11 runtime as the base image
FROM openjdk:11-jdk-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Make sure gradlew is executable
RUN chmod +x ./gradlew

# Build the application using Gradle
RUN ./gradlew build

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the application using the JAR file
CMD ["java", "-jar", "build/libs/TipsApplication.jar"]