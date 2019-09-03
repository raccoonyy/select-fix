FROM python:3

ENV JAVA_HOME /usr/lib/jvm/java-1.7-openjdk/jre
RUN apt-get update && apt-get install -y g++ default-jdk

WORKDIR /app
COPY backend/requirements*.txt ./
RUN pip install -r requirements-dev.txt

ENV PYTHONUNBUFFERED 1
