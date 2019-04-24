# Kubernetes Best Practices

We got our app running. But definitely thats not the end of road. 

* Make sure to use the multi-stage build for your Docker images as much as possible
* Log and monitor everything you care about and remember: **If its not monitored it doesn’t exist**
* Leverage the Build cache and use the builder pattern to decrease your build time through faster build process
* Always use small base image keeping the number of layers minimised so that you build small images with less attack surface
* Always tag your images and don’t use the latest tag
* Make sure to always scan all your Docker Images and Containers for potential threats
* Never use any random Docker Image\(s\) and always use authorised images in your environment
* Categorise and accordingly split up your cluster through [Namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
* Use Network Policies to implement proper network segmentation and [Role Based Access Control\(RBAC\)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) to create administrative boundaries between resources for proper segregation and control
* Never use Passwords, or API tokens in plain text or as environment variables, use secrets instead
* Use non-root user inside container with proper host to container, UID and GID mapping
* Make sure to always use [Readiness & Liveness probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/)
* Use the ‘record’ option whenever performing updates for easier rollbacks
* For the purpose of bootstrapping don’t use sidecar, Use [init container](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) instead
* Ensure that the [Readiness & Liveness probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/) are always properly utilised and monitored 

