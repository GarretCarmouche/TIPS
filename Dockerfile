FROM openjdk:17-jdk-slim
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN apt-get update && apt-get install -y maven
RUN mvn package
CMD ["java", "-jar", "target/your-application.jar"]
EXPOSE 8080