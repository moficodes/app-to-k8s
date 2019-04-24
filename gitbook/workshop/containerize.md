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

The docker images we build needs to have a space to live. You can use both public and private registry. For your super awesome secret app you probably want a private registry. With your IBM Cloud account you actually get a private image registry for free. But for todays workshop we will be using docker hub.

  




