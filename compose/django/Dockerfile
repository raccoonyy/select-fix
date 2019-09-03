# FROM openjdk:7-jre-alpine


# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache bash \
#     && apk add --no-cache --virtual=build-dependencies unzip \
#     && apk add --no-cache curl \
#     && apk add --no-cache g++ \
#     && apk add --no-cache python3-dev

# RUN apk add --no-cache python3 && \
#     python3 -m ensurepip && \
#     rm -r /usr/lib/python*/ensurepip && \
#     pip3 install --upgrade pip setuptools && \
#     if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
#     if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi && \
#     rm -r /root/.cache

FROM python:3

ENV JAVA_HOME /usr/lib/jvm/java-1.7-openjdk/jre
RUN apt-get update && apt-get install -y g++ default-jdk

WORKDIR /app
COPY backend/requirements*.txt ./
RUN pip install -r requirements-dev.txt

ENV PYTHONUNBUFFERED 1
