---
id: workshop-intro
title: Workshop
sidebar_label: Introduction
---
We will make use of Cloud Shell for this workshop.

This saves the local setup.

Although you probably setup you local system at some point anyway but we will save some time now by using the cloud shell.

[Cloud Shell](https://cloudshell-console-devadv.us-south.cf.cloud.ibm.com/)

Passcode: `kube101`

You can login using your IBM Cloud Login

Click on the terminal icon to start a terminal session. This terminal has all the tools we need for the workshop preinstalled.





If you want to setup you local machine as well follow these steps:

## Install IBM Cloud CLI

You use the [IBM Cloud CLI installer](https://console.bluemix.net/docs/cli/reference/ibmcloud/download_cli.html#install_use) or the OS-specific shell installers below.

* MacOS

  ```bash
  curl -fsSL https://clis.ng.bluemix.net/install/osx | sh
  ```

* Linux

  ```bash
  curl -fsSL https://clis.ng.bluemix.net/install/linux | sh
  ```

* Windows Powershell \(Run as Administrator\)

  ```bash
  iex(New-Object Net.WebClient).DownloadString('https://clis.ng.bluemix.net/install/powershell')
  ```

## Install IBM CLI Plugins

For the lab we will need a few plugins.

* container-service

  ```bash
  ibmcloud plugin install container-service
  ```

## Install kubectl tooling

[Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) to enable access to your cluster.

* MacOS
  * Homebrew

    ```bash
    brew install kubernetes-cli
    ```

  * MacPorts

    ```bash
    sudo port selfupdate
    sudo port install kubectl
    ```
* Linux
  * Ubuntu, Debian or HypriotOS

    ```bash
    sudo apt-get update && sudo apt-get install -y apt-transport-https
    curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
    echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
    sudo apt-get update
    sudo apt-get install -y kubectl
    ```

  * CentOS, RHEL or Fedora

    ```bash
    cat <<EOF > /etc/yum.repos.d/kubernetes.repo
    [kubernetes]
    name=Kubernetes
    baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
    enabled=1
    gpgcheck=1
    repo_gpgcheck=1
    gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
    EOF
    yum install -y kubectl
    ```

  * Snap

    ```bash
    sudo snap install helm --classic
    ```
* Windows
  * Powershell

    ```bash
    Install-Script -Name install-kubectl -Scope CurrentUser -Force
    install-kubectl.ps1 [-DownloadLocation <path>]
    ```

    > Note ``If you do not specify a `DownloadLocation`, `kubectl` will be installed in the user's temp Directory.``

  * Chocolatey

    ```bash
    choco install kubernetes-helm
    ```

You can also install using [curl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-using-curl).

Once Kubernetes is installed, test that the CLI works.

```bash
kubectl version
```



## Docker Install

[Install Docker For your OS](https://docs.docker.com/v17.12/install/)

