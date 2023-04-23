FROM openjdk:17-jdk-slim
WORKDIR /TIPS
COPY pom.xml .
COPY src ./src
RUN apt-get update && apt-get install -y maven
RUN mvn package
EXPOSE 9090
CMD ["java", "-Dserver.port=${PORT}", "-jar", "target/application.jar"]

