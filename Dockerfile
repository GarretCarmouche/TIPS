FROM openjdk:17-jdk-slim
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package
CMD ["java", "-jar", "target/your-application.jar"]
EXPOSE 9090