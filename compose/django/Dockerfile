FROM python:3

WORKDIR /app
COPY backend/requirements*.txt ./
RUN pip install -r requirements-dev.txt

ENV PYTHONUNBUFFERED 1
