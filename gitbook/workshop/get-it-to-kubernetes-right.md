# Get it to Kubernetes Right

You should already have the repo cloned from the setup step.

Incase you dont

```text
git clone https://github.com/moficodes/app-to-k8s.git
```

```text
cd app-to-k8s/k8s/all-deployment-svc/
```

```text
kubectl apply -f .
```

You should an output like

```text
service/factorial-service created
deployment.apps/fact-deploy created
service/fib-service created
deployment.apps/fib-deploy created
service/prime-service created
deployment.apps/prime-deploy created
service/ui-service created
deployment.apps/foxfram-ui created
```

Whoa! alot of thing happened pretty fast. 

Lets take a step back a look at each of the parts individually.

```text
cat foxfram-fib-v1-deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name:  fib-deploy
  namespace: default
  labels:
    app: fib
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fib
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: fib
        version: v1
    spec:
      containers:
      - image:  moficodes/foxfram-fib:0.0.5
        name:  fib
        imagePullPolicy: Always
        resources:
          requests:
            cpu: "250m"
            memory: "128Mi"
          limits:
            cpu: "250m"
            memory: "128Mi"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 3
          periodSeconds: 3
        ports:
        - containerPort:  8080
          name: http
      restartPolicy: Always
```

This looks way longer than what we saw initially. Why is that?

First We have some labels. Labels are kubernetes way of uniquely identifying components. You can put labels of anything. In our case we put labels of the app and and version. \(App and version are not key words\)

In the template for our container wen can see we have the image name. The image is hosted in [docker hub](https://cloud.docker.com/u/moficodes/repository/list). 

**Update Strategy**

```text
...
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
    type: RollingUpdate
...
```

This block manages how our app updates. We have chose rolling update. Means the app will update incrementally. `maxSurge` defines how many extra pods we can spawn. `maxUnavailable` defines how many pods we are allowed to have less than spec.

So if our replica count is 3 during an update we may have 2-4 pods available with the current settings. For a crucial service you may want to have a higher `maxSurge` and a lower `maxUnavailable` count.

**Resource Quota**

```text
...
        resources:
          requests:
            cpu: "250m"
            memory: "128Mi"
          limits:
            cpu: "250m"
            memory: "128Mi"
...
```

This part is interesting and a great feature in kubernetes. We can set pod level resource constrains so one service does not end up starving others. This kind of constraints can be setup for namespaces as well. This is great for isolating userspace and managing resource per team or per service.

**Liveness Probe**

```text
...
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 3
          periodSeconds: 3
...
```

Next we have something called a liveness probe. There is another probe called readiness probe. So liveness probe and readiness probe can look for some sign that the pod is alive or ready to serve request. In my app I setup a http liveness probe, k8s apiserver is making a http get request to the /health endpoint once every 3 second. In my app I have a random number generator and once about every 10 checks the health check fails and the app restart. 

```text
kubectl get po

NAME                           READY   STATUS    RESTARTS   AGE
fact-deploy-576cd9b5c4-jhqd6   1/1     Running   2          39m
fact-deploy-576cd9b5c4-lzzpk   1/1     Running   0          39m
fact-deploy-576cd9b5c4-xmfg7   1/1     Running   1          39m
```

The restart happens randomly.



You can define liveness and readiness probes to be 

* A Command
* Http Request
* TCP Probe

Liveness and Readiness probes are super useful when you are waiting for some process to start before you start serving request or if a crucial component of your app goes away.

