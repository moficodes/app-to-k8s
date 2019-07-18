# start with a base image
FROM ubuntu:xenial

RUN apt-get -qq update -y && apt-get -qq upgrade -y

# need some things installed
RUN apt-get -qq install -y wget build-essential ca-certificates git

# Create the user and group files that will be used in the running container to
# run the process as an unprivileged user.
RUN mkdir /user && \
    echo 'nobody:x:65534:65534:nobody:/:' > /user/passwd && \
    echo 'nobody:x:65534:' > /user/group

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

# Perform any further action as an unprivileged user.
USER nobody:nobody

ENTRYPOINT [ "/app" ]



