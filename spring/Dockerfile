FROM openjdk:18
MAINTAINER baeldung.com
COPY target/test-0.0.1-SNAPSHOT.war service.war
ENTRYPOINT ["java","-jar","/service.war"]