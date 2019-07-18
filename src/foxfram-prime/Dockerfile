# start with a base image
FROM ubuntu:xenial

RUN apt-get update -y
RUN apt-get upgrade -y

# need some things installed
RUN apt-get install -y wget
RUN apt-get install -y build-essential
RUN apt-get install -y ca-certificates
RUN apt-get install -y git

RUN wget https://dl.google.com/go/go1.12.6.linux-amd64.tar.gz
RUN tar -xvf go1.12.6.linux-amd64.tar.gz
RUN mv go /usr/local
RUN rm go1.12.6.linux-amd64.tar.gz

ENV GOROOT /usr/local/go

RUN mkdir go

RUN GOPATH=$HOME/go

ENV PATH $GOPATH/bin:$GOROOT/bin:$PATH

WORKDIR /src

COPY ./go.mod ./go.sum ./

RUN go mod download

COPY ./ ./

RUN go build -o /app .

EXPOSE 8080

ENTRYPOINT [ "/app" ]



