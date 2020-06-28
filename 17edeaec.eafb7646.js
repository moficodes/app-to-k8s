(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),o=a(6),r=(a(0),a(137)),s=a(140),i={id:"shallow-dive",title:"Kubernetes Shallow Dive",sidebar_label:"Kubernetes Shallow Dive"},l={id:"shallow-dive",isDocsHomePage:!1,title:"Kubernetes Shallow Dive",description:"We all probably heard of Kubernetes. If we did not hear about it yet we will.",source:"@site/docs/shallow-dive.mdx",permalink:"/docs/shallow-dive",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/shallow-dive.mdx",sidebar_label:"Kubernetes Shallow Dive",sidebar:"docs",previous:{title:"Setup",permalink:"/docs/setup"},next:{title:"Workshop",permalink:"/docs/workshop-intro"}},c=[{value:"Why do I need Kubernetes and what can it do?",id:"why-do-i-need-kubernetes-and-what-can-it-do",children:[]},{value:"What Kubernetes is not",id:"what-kubernetes-is-not",children:[]},{value:"Why containers",id:"why-containers",children:[]},{value:"Kubernetes architecture",id:"kubernetes-architecture",children:[]},{value:"Kubernetes resource model",id:"kubernetes-resource-model",children:[]},{value:"Hardware",id:"hardware",children:[{value:"<strong>Node</strong>",id:"node",children:[]},{value:"<strong>The Cluster</strong>",id:"the-cluster",children:[]}]},{value:"Software",id:"software",children:[{value:"<strong>Containers</strong>",id:"containers",children:[]},{value:"<strong>Pod</strong>",id:"pod",children:[]},{value:"<strong>Deployment</strong>",id:"deployment",children:[]},{value:"<strong>Ingress</strong>",id:"ingress",children:[]}]}],d={rightToc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We all probably heard of Kubernetes. If we did not hear about it yet we will."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Kubernetes is a portable, extensible open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available."))),Object(r.b)("p",null,"Thats the definition of Kubernetes from the Kubernetes official documentation."),Object(r.b)("p",null,"Honestly that is not super clear what Kubernetes is from that documentation. And the reason it is not clear is because Kubernetes is many things. Its a container platform, a microservices platform a portable cloud platform and so much more."),Object(r.b)("p",null,"As Kelsey Hightower so very aptly put"),Object(r.b)("img",{alt:"Kelsey Tweets about K8s",src:Object(s.a)("img/kelsey.png")}),Object(r.b)("p",null,"Kubernetes is an abstraction on the infrastructure that helps automate many important but mundane and labor intensive work that was being done by many teams across the industry over and over and over again. K8s ","(","Short for Kubernetes",")"," gives a great starting point for most people and gives a way to standardize best practices across the industry. What most people don\u2019t even realize is that K8s is making the skills of platform and system engineers portable across industries and companies as well as making it easy for companies to find talent."),Object(r.b)("p",null,"I still don\u2019t think I am anywhere closer to defining what K8s actually is. I don\u2019t think there is a short and concise definition for it. Instead lets talk about how K8s came to be, what it is made of and what problems it solves and maybe we will have a clearer view about the purpose of K8s."),Object(r.b)("h2",{id:"why-do-i-need-kubernetes-and-what-can-it-do"},"Why do I need Kubernetes and what can it do?"),Object(r.b)("p",null,"Kubernetes has a number of features. It can be thought of as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a container platform"),Object(r.b)("li",{parentName:"ul"},"a microservices platform"),Object(r.b)("li",{parentName:"ul"},"a portable cloud platform and a lot more.")),Object(r.b)("p",null,"Kubernetes provides a ",Object(r.b)("strong",{parentName:"p"},"container-centric")," management environment. It orchestrates computing, networking, and storage infrastructure on behalf of user workloads. This provides much of the simplicity of Platform as a Service ","(","PaaS",")"," with the flexibility of Infrastructure as a Service ","(","IaaS",")",", and enables portability across infrastructure providers."),Object(r.b)("h2",{id:"what-kubernetes-is-not"},"What Kubernetes is not"),Object(r.b)("p",null,"Kubernetes is not a traditional, all-inclusive PaaS ","(","Platform as a Service",")"," system. Since Kubernetes operates at the container level rather than at the hardware level, it provides some generally applicable features common to PaaS offerings, such as deployment, scaling, load balancing, logging, and monitoring. However, Kubernetes is not monolithic, and these default solutions are optional and pluggable. Kubernetes provides the building blocks for building developer platforms, but preserves user choice and flexibility where it is important. Kubernetes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Does not limit the types of applications supported. Kubernetes aims to support an extremely diverse variety of workloads, including stateless, stateful, and data-processing workloads. If an application can run in a container, it should run great on Kubernetes."),Object(r.b)("li",{parentName:"ul"},"Does not deploy source code and does not build your application. Continuous Integration, Delivery, and Deployment ","(","CI/CD",")"," workflows are determined by organization cultures and preferences as well as technical requirements."),Object(r.b)("li",{parentName:"ul"},"Does not provide application-level services, such as middleware ","(","e.g., message buses",")",", data-processing frameworks ","(","for example, Spark",")",", databases ","(","e.g., mysql",")",", caches, nor cluster storage systems ","(","e.g., Ceph",")"," as built-in services. Such components can run on Kubernetes, and/or can be accessed by applications running on Kubernetes through portable mechanisms, such as the Open Service Broker."),Object(r.b)("li",{parentName:"ul"},"Does not dictate logging, monitoring, or alerting solutions. It provides some integrations as proof of concept, and mechanisms to collect and export metrics."),Object(r.b)("li",{parentName:"ul"},"Does not provide nor mandate a configuration language/system ","(","e.g., ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/google/jsonnet"}),"jsonnet"),")",". It provides a declarative API that may be targeted by arbitrary forms of declarative specifications."),Object(r.b)("li",{parentName:"ul"},"Does not provide nor adopt any comprehensive machine configuration, maintenance, management, or self-healing systems.")),Object(r.b)("p",null,"Additionally, Kubernetes is not a mere ",Object(r.b)("em",{parentName:"p"},"orchestration system"),". In fact, it eliminates the need for orchestration. The technical definition of ",Object(r.b)("em",{parentName:"p"},"orchestration")," is execution of a defined workflow: first do A, then B, then C. In contrast, Kubernetes is comprised of a set of independent, composable control processes that continuously drive the current state towards the provided desired state. It shouldn\u2019t matter how you get from A to C. Centralized control is also not required. This results in a system that is easier to use and more powerful, robust, resilient, and extensible."),Object(r.b)("h2",{id:"why-containers"},"Why containers"),Object(r.b)("p",null,"Looking for reasons why you should be using containers"),Object(r.b)("img",{alt:"docker vs vm",src:Object(s.a)("img/docker-vs-vm.png")}),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"Old Way")," to deploy applications was to install the applications on a host using the operating-system package manager. This had the disadvantage of entangling the applications\u2019 executables, configuration, libraries, and lifecycles with each other and with the host OS. One could build immutable virtual-machine images in order to achieve predictable rollouts and rollbacks, but VMs are heavyweight and non-portable. The ",Object(r.b)("em",{parentName:"p"},"New Way")," is to deploy containers based on operating-system-level virtualization rather than hardware virtualization. These containers are isolated from each other and from the host: they have their own filesystems, they can\u2019t see each others\u2019 processes, and their computational resource usage can be bounded. They are easier to build than VMs, and because they are decoupled from the underlying infrastructure and from the host filesystem, they are portable across clouds and OS distributions. Because containers are small and fast, one application can be packed in each container image. This one-to-one application-to-image relationship unlocks the full benefits of containers. With containers, immutable container images can be created at build/release time rather than deployment time, since each application doesn\u2019t need to be composed with the rest of the application stack, nor married to the production infrastructure environment. Generating container images at build/release time enables a consistent environment to be carried from development into production. Similarly, containers are vastly more transparent than VMs, which facilitates monitoring and management. This is especially true when the containers\u2019 process lifecycles are managed by the infrastructure rather than hidden by a process supervisor inside the container. Finally, with a single application per container, managing the containers becomes tantamount to managing deployment of the application. Summary of container benefits:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Agile application creation and deployment"),": Increased ease and efficiency of container image creation compared to VM image use."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Continuous development, integration, and deployment"),": Provides for reliable and frequent container image build and deployment with quick and easy rollbacks ","(","due to image immutability",")","."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Dev and Ops separation of concerns"),": Create application container images at build/release time rather than deployment time, thereby decoupling applications from infrastructure."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Observability")," Not only surfaces OS-level information and metrics, but also application health and other signals."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Environmental consistency across development, testing, and production"),": Runs the same on a laptop as it does in the cloud."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cloud and OS distribution portability"),": Runs on Ubuntu, RHEL, CoreOS, on-prem, Google Kubernetes Engine, and anywhere else."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Application-centric management"),": Raises the level of abstraction from running an OS on virtual hardware to running an application on an OS using logical resources."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Loosely coupled, distributed, elastic, liberated")," ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://martinfowler.com/articles/microservices.html"}),Object(r.b)("strong",{parentName:"a"},"micro-services")),": Applications are broken into smaller, independent pieces and can be deployed and managed dynamically \u2013 not a monolithic stack running on one big single-purpose machine."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Resource isolation"),": Predictable application performance."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Resource utilization"),": High efficiency and density.")),Object(r.b)("h3",{id:""}),Object(r.b)("h2",{id:"kubernetes-architecture"},"Kubernetes architecture"),Object(r.b)("p",null,"At its core, Kubernetes is a data store ","(","etcd",")",". The declarative model is stored in the data store as objects, that means when you say I want 5 instances of a container then that request is stored into the data store. This information change is watched and delegated to Controllers to take action. Controllers then react to the model and attempt to take action to achieve the desired state. The power of Kubernetes is in its simplistic model. As shown, API server is a simple HTTP server handling create/read/update/delete","(","CRUD",")"," operations on the data store. Then the controller picks up the change you wanted and makes that happen. Controllers are responsible for instantiating the actual resource represented by any Kubernetes resource. These actual resources are what your application needs to allow it to run successful"),Object(r.b)("img",{alt:"Kubernetes Flow",src:Object(s.a)("img/k8s-flow.png")}),Object(r.b)("h2",{id:"kubernetes-resource-model"},"Kubernetes resource model"),Object(r.b)("p",null,"Kubernetes Infrastructure defines a resource for every purpose. Each resource is monitored and processed by a controller. When you define your application, it contains a collection of these resources. This collection will then be read by Controllers to build your applications actual backing instances. Some of resources that you may work with are listed below for your reference, for a full list you should go to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/"}),"https://kubernetes.io/docs/concepts/"),". In this class we will only use a few of them, like Pod, Deployment, etc."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Config Maps holds configuration data for pods to consume."),Object(r.b)("li",{parentName:"ul"},"Daemon Sets ensure that each node in the cluster runs this Pod"),Object(r.b)("li",{parentName:"ul"},"Deployments defines a desired state of a deployment object"),Object(r.b)("li",{parentName:"ul"},"Events provides lifecycle events on Pods and other deployment objects"),Object(r.b)("li",{parentName:"ul"},"Endpoints allows a inbound connections to reach the cluster services"),Object(r.b)("li",{parentName:"ul"},"Ingress is a collection of rules that allow inbound connections to reach the cluster services"),Object(r.b)("li",{parentName:"ul"},"Jobs creates one or more pods and as they complete successfully the job is marked as completed."),Object(r.b)("li",{parentName:"ul"},"Node is a worker machine in Kubernetes"),Object(r.b)("li",{parentName:"ul"},"Namespaces are multiple virtual clusters backed by the same physical cluster"),Object(r.b)("li",{parentName:"ul"},"Pods are the smallest deployable units of computing that can be created and managed in Kubernetes"),Object(r.b)("li",{parentName:"ul"},"Persistent Volumes provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed"),Object(r.b)("li",{parentName:"ul"},"Replica Sets ensures that a specified number of pod replicas are running at any given time"),Object(r.b)("li",{parentName:"ul"},"Secrets are intended to hold sensitive information, such as passwords, OAuth tokens, and ssh keys"),Object(r.b)("li",{parentName:"ul"},"Service Accounts provides an identity for processes that run in a Pod"),Object(r.b)("li",{parentName:"ul"},"Services is an abstraction which defines a logical set of Pods and a policy by which to access them - sometimes called a micro-service."),Object(r.b)("li",{parentName:"ul"},"Stateful Sets is the workload API object used to manage stateful applications."),Object(r.b)("li",{parentName:"ul"},"and more...")),Object(r.b)("img",{alt:"Kubernetes Flow",src:Object(s.a)("img/architecture.png")}),Object(r.b)("h2",{id:"hardware"},"Hardware"),Object(r.b)("h3",{id:"node"},Object(r.b)("strong",{parentName:"h3"},"Node")),Object(r.b)("img",{alt:"Kubernetes Flow",src:Object(s.a)("img/compute.png")}),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/architecture/nodes/"}),"node")," is the smallest unit of computing hardware in Kubernetes. It is a representation of a single machine in your cluster. In most production systems, a node will likely be either a physical machine in a datacenter, or virtual machine hosted on a cloud provider like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/"}),"Google Cloud Platform"),". Don\u2019t let conventions limit you, however; in theory, you can make a node out of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/jkrippy/status/932800484703862784"}),"almost")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.hypriot.com/post/setup-kubernetes-raspberry-pi-cluster/"}),"anything"),". Thinking of a machine as a \u201cnode\u201d allows us to insert a layer of abstraction. Now, instead of worrying about the unique characteristics of any individual machine, we can instead simply view each machine as a set of CPU and RAM resources that can be utilized. In this way, any machine can substitute any other machine in a Kubernetes cluster."),Object(r.b)("h3",{id:"the-cluster"},Object(r.b)("strong",{parentName:"h3"},"The Cluster")),Object(r.b)("img",{alt:"Kubernetes Flow",src:Object(s.a)("img/nodes.png")}),Object(r.b)("p",null,"Although working with individual nodes can be useful, it\u2019s not the Kubernetes way. In general, you should think about the cluster as a whole, instead of worrying about the state of individual nodes. In Kubernetes, nodes pool together their resources to form a more powerful machine. When you deploy programs onto the cluster, it intelligently handles distributing work to the individual nodes for you. If any nodes are added or removed, the cluster will shift around work as necessary. It shouldn\u2019t matter to the program, or the programmer, which individual machines are actually running the code. If this kind of hivemind-like system reminds you of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://memory-alpha.wikia.com/wiki/Borg"}),"Borg from Star Trek"),", you\u2019re not alone; \u201cBorg\u201d is the name for the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.kubernetes.io/2015/04/borg-predecessor-to-kubernetes.html"}),"internal Google project"),"Kubernetes was based on."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Persistent Volumes")," Because programs running on your cluster aren\u2019t guaranteed to run on a specific node, data can\u2019t be saved to any arbitrary place in the file system. If a program tries to save data to a file for later, but is then relocated onto a new node, the file will no longer be where the program expects it to be. For this reason, the traditional local storage associated to each node is treated as a temporary cache to hold programs, but any data saved locally can not be expected to persist"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1200/1*kF57zE9a5YCzhILHdmuRvQ.png",alt:null}))),Object(r.b)("p",null,"To store data permanently, Kubernetes uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"Persistent Volumes"),". While the CPU and RAM resources of all nodes are effectively pooled and managed by the cluster, persistent file storage is not. Instead, local or cloud drives can be attached to the cluster as a Persistent Volume. This can be thought of as plugging an external hard drive in to the cluster. Persistent Volumes provide a file system that can be mounted to the cluster, without being associated with any particular node."),Object(r.b)("h2",{id:"software"},"Software"),Object(r.b)("h3",{id:"containers"},Object(r.b)("strong",{parentName:"h3"},"Containers")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://camo.githubusercontent.com/29690b72d0d0be8349cf6965fbc67395bb050535/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a494c696e7a7a4d646e44356f513654753262664267512e706e67"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://camo.githubusercontent.com/29690b72d0d0be8349cf6965fbc67395bb050535/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a494c696e7a7a4d646e44356f513654753262664267512e706e67",alt:null}))),Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://camo.githubusercontent.com/b1285eef90c7a9f60cd200abe32af08b8710424a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f323030302f312a494c696e7a7a4d646e44356f513654753262664267512e706e67"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://camo.githubusercontent.com/b1285eef90c7a9f60cd200abe32af08b8710424a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f323030302f312a494c696e7a7a4d646e44356f513654753262664267512e706e67",alt:null})))),Object(r.b)("p",null,"Programs running on Kubernetes are packaged as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/what-container"}),"Linux containers"),". Containers are a widely accepted standard, so there are already many ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/explore/"}),"pre-built images")," that can be deployed on Kubernetes. Containerization allows you to create self-contained Linux execution environments. Any program and all its dependencies can be bundled up into a single file and then shared on the internet. Anyone can download the container and deploy it on their infrastructure with very little setup required. Creating a container can be done programmatically, allowing powerful ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.sonatype.com/achieving-ci/cd-with-kubernetes"}),"CI and CD")," pipelines to be formed. Multiple programs can be added into a single container, but you should limit yourself to one process per container if at all possible. It\u2019s better to have many small containers than one large one. If each container has a tight focus, updates are easier to deploy and issues are easier to diagnose."),Object(r.b)("h3",{id:"pod"},Object(r.b)("strong",{parentName:"h3"},"Pod")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1600/1*8OD0MgDNu3Csq0tGpS8Obg.png",alt:null}))),Object(r.b)("p",null,"Unlike other systems you may have used in the past, Kubernetes doesn\u2019t run containers directly; instead it wraps one or more containers into a higher-level structure called a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/"}),"pod"),". Any containers in the same pod will share the same resources and local network. Containers can easily communicate with other containers in the same pod as though they were on the same machine while maintaining a degree of isolation from others. Pods are used as the unit of replication in Kubernetes. If your application becomes too popular and a single pod instance can\u2019t carry the load, Kubernetes can be configured to deploy new replicas of your pod to the cluster as necessary. Even when not under heavy load, it is standard to have multiple copies of a pod running at any time in a production system to allow load balancing and failure resistance. Pods can hold multiple containers, but you should limit yourself when possible. Because pods are scaled up and down as a unit, all containers in a pod must scale together, regardless of their individual needs. This leads to wasted resources and an expensive bill. To resolve this, pods should remain as small as possible, typically holding only a main process and its tightly-coupled helper containers ","(","these helper containers are typically referred to as \u201cside-cars\u201d",")","."),Object(r.b)("h3",{id:"deployment"},Object(r.b)("strong",{parentName:"h3"},"Deployment")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1600/1*iTAVk3glVD95hb-X3HiCKg.png",alt:null}))),Object(r.b)("p",null,"Although pods are the basic unit of computation in Kubernetes, they are not typically directly launched on a cluster. Instead, pods are usually managed by one more layer of abstraction: the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"}),"deployment"),". A deployment\u2019s primary purpose is to declare how many replicas of a pod should be running at a time. When a deployment is added to the cluster, it will automatically spin up the requested number of pods, and then monitor them. If a pod dies, the deployment will automatically re-create it. Using a deployment, you don\u2019t have to deal with pods manually. You can just declare the desired state of the system, and it will be managed for you automatically."),Object(r.b)("h3",{id:"ingress"},Object(r.b)("strong",{parentName:"h3"},"Ingress")),Object(r.b)("p",null,"*","*","*","*"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1600/1*tBJ-_g4Mk5OkfzLEHrRsRw.png",alt:null}))),Object(r.b)("p",null,"Using the concepts described above, you can create a cluster of nodes, and launch deployments of pods onto the cluster. There is one last problem to solve, however: allowing external traffic to your application. By default, Kubernetes provides isolation between pods and the outside world. If you want to communicate with a service running in a pod, you have to open up a channel for communication. This is referred to as ingress. There are multiple ways to add ingress to your cluster. The most common ways are by adding either an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"}),"Ingress")," controller, or a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"}),"LoadBalancer"),". The exact tradeoffs between these two options are out of scope for this post, but you must be aware that ingress is something you need to handle before you can experiment with Kubernetes."))}u.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(s,".").concat(p)]||u[p]||b[p]||r;return a?o.a.createElement(h,i(i({ref:t},c),{},{components:a})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},138:function(e,t,a){"use strict";var n=a(0),o=a(36);t.a=function(){return Object(n.useContext)(o.a)}},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(138),o=a(142);function r(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:r="/",url:s}={}}=Object(n.a)();if(!e)return e;if(t)return r+e;if(!Object(o.a)(e))return e;const i=r+e.replace(/^\//,"");return a?s+i:i}},142:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);