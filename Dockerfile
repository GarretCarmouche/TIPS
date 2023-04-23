# FROM tomcat:9-jdk17-openjdk-slim
# WORKDIR /TIPS
# COPY pom.xml .
# COPY src ./src
# RUN apt-get update && apt-get install -y maven
# RUN mvn package
# EXPOSE 9090
# CMD ["java", "-Dserver.port=${PORT}", "-jar", "target/application.jar"]
FROM tomcat:9-jdk17-openjdk-slim

WORKDIR /usr/local/tomcat/webapps

COPY target/myapp.war .

EXPOSE 9090

CMD ["catalina.sh", "run"]
