# start with a base image
FROM ubuntu:xenial

RUN apt-get -qq update -y && apt-get -qq upgrade -y

# need some things installed
RUN apt-get -qq install -y wget build-essential ca-certificates git


RUN wget -q https://dl.google.com/go/go1.12.6.linux-amd64.tar.gz && tar -xf go1.12.6.linux-amd64.tar.gz && mv go /usr/local && rm go1.12.6.linux-amd64.tar.gz

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



