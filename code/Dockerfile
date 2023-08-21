FROM ghcr.io/linuxserver/code-server:latest

RUN apt-get update && \
    apt-get install -y docker.io docker-compose && \
    groupmod -g 971 docker && \
    usermod -aG docker abc
