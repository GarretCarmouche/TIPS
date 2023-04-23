FROM tomcat:9-jdk17-openjdk-slim
WORKDIR /TIPS
COPY pom.xml .
COPY src ./src
RUN apt-get update && apt-get install -y maven
RUN mvn package
EXPOSE 9090
CMD ["java", "-jar", "target/application.jar"]
#"-Dserver.port=${PORT}",