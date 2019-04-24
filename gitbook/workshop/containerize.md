# Containerize

Before we can truly understand K8S, I think it makes sense to understand some basic containerization. 

Containerization is a lightweight alternative to full machine [virtualization](https://www.webopedia.com/TERM/V/virtualization.html) that involves encapsulating an application in a container with its own operating environment. This provides many of the benefits of loading an application onto a [virtual machine](https://www.webopedia.com/TERM/V/virtual_machine.html), as the application can be run on any suitable physical machine without any worries about dependencies.

Containerization has gained recent prominence with the open-source [Docker](https://www.webopedia.com/TERM/D/docker.html). Docker containers are designed to run on everything from physical computers to virtual machines, [bare-metal](https://www.webopedia.com/TERM/B/bare_metal.html) servers, [OpenStack](https://www.webopedia.com/TERM/O/openstack.html) [cloud](https://www.webopedia.com/TERM/C/cloud.html) clusters, public instances and more.

### **Containerization vs. Virtualization via Traditional Hypervisors**

The foundation for containerization lies in the [LinuX Containers](https://www.webopedia.com/TERM/L/linux-containers.html) \(LXC\) format, which is a userspace interface for the [Linux](https://www.webopedia.com/TERM/L/linux.html) kernel containment features. As a result, containerization only works in Linux environments and can only run Linux applications.

This is in contrast with traditional [hypervisors](https://www.webopedia.com/TERM/H/hypervisor.html) like VMware's [ESXi](https://www.webopedia.com/TERM/V/VMware_ESX.html), [Xen](https://www.webopedia.com/TERM/X/Xen.html) or [KVM](https://www.webopedia.com/TERM/K/kvm.html), wherein applications can run on [Windows](https://www.webopedia.com/TERM/M/Microsoft_Windows.html) or any other [operating system](https://www.webopedia.com/TERM/O/operating_system.html) that supports the hypervisor.

Another key difference with containerization as opposed to traditional hypervisors is that containers share the Linux [kernel](https://www.webopedia.com/TERM/K/kernel.html) used by the operating system running the host machine, which means any other containers running on the host machine will also be using the same Linux kernel.

### **Docker Not the Only Containerization Option**

Docker may have been the first to bring attention to containerization, but it's no longer the only container system option. CoreOS recently released a streamlined alternative to Docker called [Rocket](https://www.webopedia.com/TERM/C/coreos-rocket.html).

And Canonical, developers of the [Ubuntu](https://www.webopedia.com/TERM/U/Ubuntu.html) [Linux](http://www.webopedia.com/TERM/L/Linux.html)-based operating system, has announced the LXD containerization engine for Ubuntu, which will also be integrated with [OpenStack](https://www.webopedia.com/TERM/O/openstack.html).

## Docker 

For our workshop we are using docker. 

Docker by itself could be one whole workshop \(it should be\). But we aren't here today to learn docker. So I will quickly go over the main things we need to know for our workshop. 

### Image Registry

The docker images we build needs to have a space to live. You can use both public and private registry. For your super awesome secret app you probably want a private registry. With your IBM Cloud account you actually get a private image registry for free. But for todays workshop we will be using docker hub. More specifically we will use images I already pre-created. But that should not stop us from looking at the process of creating our own. 

## Writing Dockerfile

Lets quickly see how to write a dockerfile

```text
FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py
```

This is a example Dockerfile. 

Each instruction creates one layer:

* `FROM` creates a layer from the `ubuntu:18.04` Docker image.
* `COPY` adds files from your Docker client’s current directory.
* `RUN` builds your application with `make`.
* `CMD` specifies what command to run within the container.

Docker file support the following instructions

[Dockerfile instructions](https://docs.docker.com/develop/develop-images/#dockerfile-instructions)

* [FROM](https://docs.docker.com/develop/develop-images/#from) - Base Image we are building from
* [LABEL](https://docs.docker.com/develop/develop-images/#label) - For organization
* [RUN](https://docs.docker.com/develop/develop-images/#run) - To run a command while building
* [CMD](https://docs.docker.com/develop/develop-images/#cmd) - To run a command at start
* [EXPOSE](https://docs.docker.com/develop/develop-images/#expose) - Expose a port
* [ENV](https://docs.docker.com/develop/develop-images/#env) - Set env variable
* [ADD or COPY](https://docs.docker.com/develop/develop-images/#add-or-copy) - Copy files from host or a previous layer to current layer
* [ENTRYPOINT](https://docs.docker.com/develop/develop-images/#entrypoint) - Main command of the image at runtime
* [VOLUME](https://docs.docker.com/develop/develop-images/#volume) - For any kind of storage \(DB, Local Files etc\)
* [USER](https://docs.docker.com/develop/develop-images/#user) - Set user. Preferably no root if the service allows.
* [WORKDIR](https://docs.docker.com/develop/develop-images/#workdir) - Where RUN and other commands should execute in.
* [ONBUILD](https://docs.docker.com/develop/develop-images/#onbuild) - Executes after current Build completes

Lets look at one of our Dockerfiles that we are using.

```text
# Accept the Go version for the image to be set as a build argument.
# Default to Go 1.12
ARG GO_VERSION=1.12

# First stage: build the executable.
FROM golang:${GO_VERSION}-alpine AS builder

# Create the user and group files that will be used in the running container to
# run the process as an unprivileged user.
RUN mkdir /user && \
    echo 'nobody:x:65534:65534:nobody:/:' > /user/passwd && \
    echo 'nobody:x:65534:' > /user/group

# Install the Certificate-Authority certificates for the app to be able to make
# calls to HTTPS endpoints.
# Git is required for fetching the dependencies.
RUN apk add --no-cache git

# Set the working directory outside $GOPATH to enable the support for modules.
WORKDIR /src

# Fetch dependencies first; they are less susceptible to change on every build
# and will therefore be cached for speeding up the next build
COPY ./go.mod ./go.sum ./
RUN go mod download

# Import the code from the context.
COPY ./ ./

# Build the executable to `/app`. Mark the build as statically linked.
RUN CGO_ENABLED=0 go build \
    -installsuffix 'static' \
    -o /app .

# Final stage: the running container.
FROM scratch AS final

# Import the user and group files from the first stage.
COPY --from=builder /user/group /user/passwd /etc/

# Import the compiled executable from the first stage.
COPY --from=builder /app /app

# Declare the port on which the webserver will be exposed.
# As we're going to run the executable as an unprivileged user, we can't bind
# to ports below 1024.
EXPOSE 8080

# Perform any further action as an unprivileged user.
USER nobody:nobody

# Run the compiled binary.
ENTRYPOINT ["/app"]
```

This is the folder structure

```text
.
├── Dockerfile
├── fib
│   └── fib.go
├── go.mod
├── go.sum
└── main.go
```

##  Best Practices

* Create ephemeral containers
* Exclude with .dockerignore



