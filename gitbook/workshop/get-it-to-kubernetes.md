# Get it to Kubernetes

Kubernetes has many things

```text
NAME                              SHORTNAMES   APIGROUP                       NAMESPACED   KIND
bindings                                                                      true         Binding
componentstatuses                 cs                                          false        ComponentStatus
configmaps                        cm                                          true         ConfigMap
endpoints                         ep                                          true         Endpoints
events                            ev                                          true         Event
limitranges                       limits                                      true         LimitRange
namespaces                        ns                                          false        Namespace
nodes                             no                                          false        Node
persistentvolumeclaims            pvc                                         true         PersistentVolumeClaim
persistentvolumes                 pv                                          false        PersistentVolume
pods                              po                                          true         Pod
podtemplates                                                                  true         PodTemplate
replicationcontrollers            rc                                          true         ReplicationController
resourcequotas                    quota                                       true         ResourceQuota
secrets                                                                       true         Secret
serviceaccounts                   sa                                          true         ServiceAccount
services                          svc                                         true         Service
initializerconfigurations                      admissionregistration.k8s.io   false        InitializerConfiguration
mutatingwebhookconfigurations                  admissionregistration.k8s.io   false        MutatingWebhookConfiguration
validatingwebhookconfigurations                admissionregistration.k8s.io   false        ValidatingWebhookConfiguration
customresourcedefinitions         crd,crds     apiextensions.k8s.io           false        CustomResourceDefinition
apiservices                                    apiregistration.k8s.io         false        APIService
controllerrevisions                            apps                           true         ControllerRevision
daemonsets                        ds           apps                           true         DaemonSet
deployments                       deploy       apps                           true         Deployment
replicasets                       rs           apps                           true         ReplicaSet
statefulsets                      sts          apps                           true         StatefulSet
meshpolicies                                   authentication.istio.io        false        MeshPolicy
policies                                       authentication.istio.io        true         Policy
tokenreviews                                   authentication.k8s.io          false        TokenReview
localsubjectaccessreviews                      authorization.k8s.io           true         LocalSubjectAccessReview
selfsubjectaccessreviews                       authorization.k8s.io           false        SelfSubjectAccessReview
selfsubjectrulesreviews                        authorization.k8s.io           false        SelfSubjectRulesReview
subjectaccessreviews                           authorization.k8s.io           false        SubjectAccessReview
horizontalpodautoscalers          hpa          autoscaling                    true         HorizontalPodAutoscaler
cronjobs                          cj           batch                          true         CronJob
jobs                                           batch                          true         Job
certificatesigningrequests        csr          certificates.k8s.io            false        CertificateSigningRequest
certificates                      cert,certs   certmanager.k8s.io             true         Certificate
challenges                                     certmanager.k8s.io             true         Challenge
clusterissuers                                 certmanager.k8s.io             false        ClusterIssuer
issuers                                        certmanager.k8s.io             true         Issuer
orders                                         certmanager.k8s.io             true         Order
leases                                         coordination.k8s.io            true         Lease
events                            ev           events.k8s.io                  true         Event
daemonsets                        ds           extensions                     true         DaemonSet
deployments                       deploy       extensions                     true         Deployment
ingresses                         ing          extensions                     true         Ingress
networkpolicies                   netpol       extensions                     true         NetworkPolicy
podsecuritypolicies               psp          extensions                     false        PodSecurityPolicy
replicasets                       rs           extensions                     true         ReplicaSet
nodes                                          metrics.k8s.io                 false        NodeMetrics
pods                                           metrics.k8s.io                 true         PodMetrics
networkpolicies                   netpol       networking.k8s.io              true         NetworkPolicy
poddisruptionbudgets              pdb          policy                         true         PodDisruptionBudget
podsecuritypolicies               psp          policy                         false        PodSecurityPolicy
clusterrolebindings                            rbac.authorization.k8s.io      false        ClusterRoleBinding
clusterroles                                   rbac.authorization.k8s.io      false        ClusterRole
rolebindings                                   rbac.authorization.k8s.io      true         RoleBinding
roles                                          rbac.authorization.k8s.io      true         Role
priorityclasses                   pc           scheduling.k8s.io              false        PriorityClass
storageclasses                    sc           storage.k8s.io                 false        StorageClass
volumeattachments                              storage.k8s.io                 false        VolumeAttachment
```

To get our app to run on K8S we don't need to know all of them. At the bare minimum we need to deal with 3 of these. Pods, Deployments and Services.

### Pods

Pods is the smallest unit in kubernetes. Each pod has to have atleast one container. But can have more. In some advanced kubernetes setup there are more that one container. Sidecar container, init container etc. 

```text
apiVersion: v1
kind: Pod
metadata:
  name: pod-example
spec:
  containers:
  - name: ubuntu
    image: ubuntu:trusty
```

This is the most minimal pod you can create. 

| Field | Description |
| :--- | :--- |
| `apiVersion` string | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md\#resources |
| `kind` string | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md\#types-kinds |
| `metadata` [ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.14/#objectmeta-v1-meta) | Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md\#metadata |
| `spec` [PodSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.14/#podspec-v1-core) | Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md\#spec-and-status |

In k8s we should never create a pod this way. Because pods by itself can not self restart or scale if needed.

For that we use a replicaset or deployment.

### Deployment

A _Deployment_ controller provides declarative updates for [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod/) and [ReplicaSets](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/).

You describe a _desired state_ in a Deployment object, and the Deployment controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.

```text
apiVersion: apps/v1
kind: Deployment
metadata:
  # Unique key of the Deployment instance
  name: deployment-example
spec:
  # 3 Pods should exist at all times.
  replicas: 3
  template:
    metadata:
      labels:
        # Apply this label to pods and default
        # the Deployment label selector to this value
        app: nginx
    spec:
      containers:
      - name: nginx
        # Run this image
        image: nginx:1.10
```

The pod spec is embedded in the deployment under template.

Finally we need a way to make the app available to the world. We use a service for that.

### Service

Kubernetes [`Pods`](https://kubernetes.io/docs/concepts/workloads/pods/pod/) are mortal. They are born and when they die, they are not resurrected. [`ReplicaSets`](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) in particular create and destroy `Pods` dynamically \(e.g. when scaling out or in\). While each `Pod` gets its own IP address, even those IP addresses cannot be relied upon to be stable over time. This leads to a problem: if some set of `Pods` \(let’s call them backends\) provides functionality to other `Pods` \(let’s call them frontends\) inside the Kubernetes cluster, how do those frontends find out and keep track of which backends are in that set?

Enter `Services`.

A Kubernetes `Service` is an abstraction which defines a logical set of `Pods` and a policy by which to access them - sometimes called a micro-service. The set of `Pods` targeted by a `Service` is \(usually\) determined by a [`Label Selector`](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors) \(see below for why you might want a `Service` without a selector\).

```text
kind: Service
apiVersion: v1
metadata:
  # Unique key of the Service instance
  name: service-example
spec:
  ports:
    # Accept traffic sent to port 80
    - name: http
      port: 80
      targetPort: 80
  selector:
    # this label selector
    app: nginx
```

There are few types of services out there.



For some parts of your application \(e.g. frontends\) you may want to expose a Service onto an external \(outside of your cluster\) IP address.

Kubernetes `ServiceTypes` allow you to specify what kind of service you want. The default is `ClusterIP`.

`Type` values and their behaviors are:

* `ClusterIP`: Exposes the service on a cluster-internal IP. Choosing this value makes the service only reachable from within the cluster. This is the default `ServiceType`.
* [`NodePort`](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport): Exposes the service on each Node’s IP at a static port \(the `NodePort`\). A `ClusterIP` service, to which the `NodePort` service will route, is automatically created. You’ll be able to contact the `NodePort` service, from outside the cluster, by requesting `<NodeIP>:<NodePort>`.
* [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer): Exposes the service externally using a cloud provider’s load balancer. `NodePort` and `ClusterIP` services, to which the external load balancer will route, are automatically created.
* [`ExternalName`](https://kubernetes.io/docs/concepts/services-networking/service/#externalname): Maps the service to the contents of the `externalName` field \(e.g. `foo.bar.example.com`\), by returning a `CNAME` record with its value. No proxying of any kind is set up. This requires version 1.7 or higher of `kube-dns`.

ClusterIP is cluster internal. We will see both ClusterIP and LoadBalancer in depth in a second.

