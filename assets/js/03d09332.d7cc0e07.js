"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"RKE2 Cluster Configuration Reference"},i=void 0,l={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",id:"version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",title:"RKE2 Cluster Configuration Reference",description:"This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster.",source:"@site/versioned_docs/version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md",tags:[],version:"2.6",lastUpdatedAt:1685636581,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"RKE2 Cluster Configuration Reference"},sidebar:"tutorialSidebar",previous:{title:"RKE Cluster Configuration Reference",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},next:{title:"K3s Cluster Configuration Reference",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Editing Clusters with a Form in the Rancher UI",id:"editing-clusters-with-a-form-in-the-rancher-ui",level:2},{value:"Editing Clusters with YAML",id:"editing-clusters-with-yaml",level:2},{value:"Configuration Options in the Rancher UI",id:"configuration-options-in-the-rancher-ui",level:2},{value:"Machine Pool",id:"machine-pool",level:2},{value:"Pool Name",id:"pool-name",level:3},{value:"Machine Count",id:"machine-count",level:3},{value:"Roles",id:"roles",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Auto Replace",id:"auto-replace",level:4},{value:"Drain Before Delete",id:"drain-before-delete",level:4},{value:"Kubernetes Node Labels",id:"kubernetes-node-labels",level:4},{value:"Taints",id:"taints",level:4},{value:"Cluster Configuration",id:"cluster-configuration",level:2},{value:"Basics",id:"basics",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Container Network Provider",id:"container-network-provider",level:4},{value:"Dual-stack Networking",id:"dual-stack-networking",level:5},{value:"Additional Configuration",id:"dual-stack-additional-config",level:6},{value:"Cloud Provider",id:"cloud-provider",level:4},{value:"Default Pod Security Policy",id:"default-pod-security-policy",level:4},{value:"Worker CIS Profile",id:"worker-cis-profile",level:4},{value:"Project Network Isolation",id:"project-network-isolation",level:4},{value:"CoreDNS",id:"coredns",level:4},{value:"NGINX Ingress",id:"nginx-ingress",level:4},{value:"Metrics Server",id:"metrics-server",level:4},{value:"Add-On Config",id:"add-on-config",level:3},{value:"Agent Environment Vars",id:"agent-environment-vars",level:3},{value:"etcd",id:"etcd",level:3},{value:"Automatic Snapshots",id:"automatic-snapshots",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Networking",id:"networking",level:3},{value:"Cluster CIDR",id:"cluster-cidr",level:4},{value:"Dual-stack Networking",id:"dual-stack-networking-1",level:5},{value:"Service CIDR",id:"service-cidr",level:4},{value:"Dual-stack Networking",id:"dual-stack-networking-2",level:5},{value:"Cluster DNS",id:"cluster-dns",level:4},{value:"Cluster Domain",id:"cluster-domain",level:4},{value:"NodePort Service Port Range",id:"nodeport-service-port-range",level:4},{value:"TLS Alternate Names",id:"tls-alternate-names",level:4},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",level:4},{value:"Registries",id:"registries",level:3},{value:"Upgrade Strategy",id:"upgrade-strategy",level:3},{value:"Control Plane Concurrency",id:"control-plane-concurrency",level:4},{value:"Worker Concurrency",id:"worker-concurrency",level:4},{value:"Drain Nodes (Control Plane)",id:"drain-nodes-control-plane",level:4},{value:"Drain Nodes (Worker Nodes)",id:"drain-nodes-worker-nodes",level:4},{value:"Advanced",id:"advanced-1",level:3},{value:"Cluster Config File Reference",id:"cluster-config-file-reference",level:2},{value:"chartValues",id:"chartvalues",level:3},{value:"machineGlobalConfig",id:"machineglobalconfig",level:3},{value:"machineSelectorConfig",id:"machineselectorconfig",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"You can configure the Kubernetes options in one of the two following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-options-in-the-rancher-ui"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set many additional ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/configuration"},"options")," available for an RKE2 installation.")),(0,o.kt)("h2",{id:"editing-clusters-with-a-form-in-the-rancher-ui"},"Editing Clusters with a Form in the Rancher UI"),(0,o.kt)("p",null,"To edit your cluster,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster you want to configure and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),".")),(0,o.kt)("h2",{id:"editing-clusters-with-yaml"},"Editing Clusters with YAML"),(0,o.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set any of the options available in an RKE2 installation by specifying them in YAML."),(0,o.kt)("p",null,"To edit an RKE2 config file directly from the Rancher UI,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster you want to configure and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit as YAML"),"."),(0,o.kt)("li",{parentName:"ol"},"Edit the RKE options under the ",(0,o.kt)("inlineCode",{parentName:"li"},"rkeConfig")," directive.")),(0,o.kt)("h2",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE2 cluster configuration file in YAML. For the complete reference of configurable options for RKE2 Kubernetes clusters in YAML, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/configuration"},"RKE2 documentation."))),(0,o.kt)("h2",{id:"machine-pool"},"Machine Pool"),(0,o.kt)("p",null,"This subsection covers the generic machine pool configurations. For infrastructure provider specific, configurations refer to the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure"},"Azure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean"},"DigitalOcean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},"EC2"))),(0,o.kt)("h3",{id:"pool-name"},"Pool Name"),(0,o.kt)("p",null,"The name of the machine pool."),(0,o.kt)("h3",{id:"machine-count"},"Machine Count"),(0,o.kt)("p",null,"The number of machines in the pool."),(0,o.kt)("h3",{id:"roles"},"Roles"),(0,o.kt)("p",null,"Option to assign etcd, control plane, and worker roles to nodes."),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("h4",{id:"auto-replace"},"Auto Replace"),(0,o.kt)("p",null,"The duration nodes can be unreachable before they are automatically deleted and replaced."),(0,o.kt)("h4",{id:"drain-before-delete"},"Drain Before Delete"),(0,o.kt)("p",null,"Enables draining nodes by evicting all pods before the node is deleted."),(0,o.kt)("h4",{id:"kubernetes-node-labels"},"Kubernetes Node Labels"),(0,o.kt)("p",null,"Add ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," to nodes to help with organization and object selection."),(0,o.kt)("p",null,"For details on label syntax requirements, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation.")),(0,o.kt)("h4",{id:"taints"},"Taints"),(0,o.kt)("p",null,"Add ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," to nodes, which can be used to prevent pods from being scheduled to or executed on nodes, unless the pods have matching tolerations."),(0,o.kt)("h2",{id:"cluster-configuration"},"Cluster Configuration"),(0,o.kt)("h3",{id:"basics"},"Basics"),(0,o.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,o.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,o.kt)("p",null,"For more detail, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Upgrading Kubernetes"),"."),(0,o.kt)("h4",{id:"container-network-provider"},"Container Network Provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you to tear down the entire cluster and all its applications.")),(0,o.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cilium.io/"},"Cilium"),"*"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus"))),(0,o.kt)("p",null,"*"," When using ",(0,o.kt)("a",{parentName:"p",href:"#project-network-isolation"},"project network isolation")," in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/faq/container-network-interface-providers#cilium"},"Cilium CNI"),", it is possible to enable cross-node ingress routing. Click the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/faq/container-network-interface-providers#ingress-routing-across-nodes-in-cilium"},"CNI provider docs")," to learn more."),(0,o.kt)("p",null,"For more details on the different networking providers and how to configure them, please view our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options"},"RKE2 documentation"),"."),(0,o.kt)("h5",{id:"dual-stack-networking"},"Dual-stack Networking"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options#dual-stack-configuration"},"Dual-stack")," networking is supported for all CNI providers. To configure RKE2 in dual-stack mode, set valid IPv4/IPv6 CIDRs for your ",(0,o.kt)("a",{parentName:"p",href:"#cluster-cidr"},"Cluster CIDR")," and/or ",(0,o.kt)("a",{parentName:"p",href:"#service-cidr"},"Service CIDR"),"."),(0,o.kt)("h6",{id:"dual-stack-additional-config"},"Additional Configuration"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"cilium")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"multus,cilium")," as your container network interface provider, ensure the ",(0,o.kt)("strong",{parentName:"p"},"Enable IPv6 Support")," option is also enabled."),(0,o.kt)("h4",{id:"cloud-provider"},"Cloud Provider"),(0,o.kt)("p",null,"You can configure a ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes cloud provider"),". If you want to use dynamically provisioned ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,o.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,o.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"this documentation")," on how to configure the cloud provider.")),(0,o.kt)("h4",{id:"default-pod-security-policy"},"Default Pod Security Policy"),(0,o.kt)("p",null,"Choose the default ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod security policy")," for the cluster. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/pod_security_policies"},"RKE2 documentation")," on the specifications of each available policy."),(0,o.kt)("h4",{id:"worker-cis-profile"},"Worker CIS Profile"),(0,o.kt)("p",null,"Select a ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/cis-scan-guides"},"CIS benchmark")," to validate the system configuration against."),(0,o.kt)("h4",{id:"project-network-isolation"},"Project Network Isolation"),(0,o.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication."),(0,o.kt)("p",null,"Project network isolation is available if you are using any RKE2 network plugin that supports the enforcement of Kubernetes network policies, such as Canal."),(0,o.kt)("h4",{id:"coredns"},"CoreDNS"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"https://coredns.io/"},"CoreDNS")," is installed as the default DNS provider. If CoreDNS is not installed, an alternate DNS provider must be installed yourself. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking#coredns"},"RKE2 documentation")," for additional CoreDNS configurations."),(0,o.kt)("h4",{id:"nginx-ingress"},"NGINX Ingress"),(0,o.kt)("p",null,"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking#nginx-ingress-controller"},"RKE2 documentation")," for additional configuration options."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking#nginx-ingress-controller"},"RKE2 documentation")," for additional configuration options."),(0,o.kt)("h4",{id:"metrics-server"},"Metrics Server"),(0,o.kt)("p",null,"Option to enable or disable ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,o.kt)("p",null,"Each cloud provider capable of launching a cluster using RKE2 can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal."),(0,o.kt)("h3",{id:"add-on-config"},"Add-On Config"),(0,o.kt)("p",null,"Additional Kubernetes manifests, managed as an ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/addons/"},"Add-on"),", to apply to the cluster on startup. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/helm#automatically-deploying-manifests-and-helm-charts"},"RKE2 documentation")," for details."),(0,o.kt)("h3",{id:"agent-environment-vars"},"Agent Environment Vars"),(0,o.kt)("p",null,"Option to set environment variables for ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/rancher-agents/"},"Rancher agents"),". The environment variables can be set using key value pairs. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/reference/linux_agent_config"},"RKE2 documentation")," for more details."),(0,o.kt)("h3",{id:"etcd"},"etcd"),(0,o.kt)("h4",{id:"automatic-snapshots"},"Automatic Snapshots"),(0,o.kt)("p",null,"Option to enable or disable recurring etcd snapshots. If enabled, users have the option to configure the frequency of snapshots. For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/backup_restore#creating-snapshots"},"RKE2 documentation"),". Note that with RKE2, snapshots are stored on each etcd node. This varies from RKE1 which only stores one snapshot per cluster."),(0,o.kt)("h4",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Option to choose whether to expose etcd metrics to the public or only within the cluster."),(0,o.kt)("h3",{id:"networking"},"Networking"),(0,o.kt)("h4",{id:"cluster-cidr"},"Cluster CIDR"),(0,o.kt)("p",null,"IPv4 and/or IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16)."),(0,o.kt)("h5",{id:"dual-stack-networking-1"},"Dual-stack Networking"),(0,o.kt)("p",null,"To configure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options#dual-stack-configuration"},"dual-stack")," mode, enter a valid IPv4/IPv6 CIDR. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"10.42.0.0/16,2001:cafe:42:0::/56"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#dual-stack-additional-config"},"Additional configuration")," is required when using ",(0,o.kt)("inlineCode",{parentName:"p"},"cilium")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"multus,cilium")," as your ",(0,o.kt)("a",{parentName:"p",href:"#container-network"},"container network")," interface provider."),(0,o.kt)("h4",{id:"service-cidr"},"Service CIDR"),(0,o.kt)("p",null,"IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16)."),(0,o.kt)("h5",{id:"dual-stack-networking-2"},"Dual-stack Networking"),(0,o.kt)("p",null,"To configure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options#dual-stack-configuration"},"dual-stack")," mode, enter a valid IPv4/IPv6 CIDR. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"10.42.0.0/16,2001:cafe:42:0::/56"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#dual-stack-additional-config"},"Additional configuration")," is required when using ",(0,o.kt)("inlineCode",{parentName:"p"},"cilium ")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"multus,cilium")," as your ",(0,o.kt)("a",{parentName:"p",href:"#container-network"},"container network")," interface provider."),(0,o.kt)("h4",{id:"cluster-dns"},"Cluster DNS"),(0,o.kt)("p",null,"IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10)."),(0,o.kt)("h4",{id:"cluster-domain"},"Cluster Domain"),(0,o.kt)("p",null,"Select the domain for the cluster. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.local"),"."),(0,o.kt)("h4",{id:"nodeport-service-port-range"},"NodePort Service Port Range"),(0,o.kt)("p",null,"Option to change the range of ports that can be used for ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,o.kt)("h4",{id:"tls-alternate-names"},"TLS Alternate Names"),(0,o.kt)("p",null,"Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert."),(0,o.kt)("h4",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,o.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,o.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,o.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,o.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters#4-authorized-cluster-endpoint"},"architecture section.")),(0,o.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,o.kt)("h3",{id:"registries"},"Registries"),(0,o.kt)("p",null,"Select the image repository to pull Rancher images from. For more details and configuration options, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration"},"RKE2 documentation"),"."),(0,o.kt)("h3",{id:"upgrade-strategy"},"Upgrade Strategy"),(0,o.kt)("h4",{id:"control-plane-concurrency"},"Control Plane Concurrency"),(0,o.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,o.kt)("h4",{id:"worker-concurrency"},"Worker Concurrency"),(0,o.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,o.kt)("h4",{id:"drain-nodes-control-plane"},"Drain Nodes (Control Plane)"),(0,o.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,o.kt)("h4",{id:"drain-nodes-worker-nodes"},"Drain Nodes (Worker Nodes)"),(0,o.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,o.kt)("h3",{id:"advanced-1"},"Advanced"),(0,o.kt)("p",null,"Option to set kubelet options for different nodes. For available options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes documentation"),"."),(0,o.kt)("h2",{id:"cluster-config-file-reference"},"Cluster Config File Reference"),(0,o.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create a config file. Using a config file allows you to set the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/configuration"},"options available")," in an RKE2 installation, including those already listed in ",(0,o.kt)("a",{parentName:"p",href:"#configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),", as well as Rancher-specific parameters."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example Cluster Config File Snippet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  cloudCredentialSecretName: cattle-global-data:cc-s879v\n  kubernetesVersion: v1.23.6+rke2r2\n  localClusterAuthEndpoint: {}\n  rkeConfig:\n    chartValues:\n      rke2-calico: {}\n    etcd:\n      snapshotRetention: 5\n      snapshotScheduleCron: 0 */5 * * *\n    machineGlobalConfig:\n      cni: calico\n      disable-kube-proxy: false\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n    - controlPlaneRole: true\n      etcdRole: true\n      machineConfigRef:\n        kind: Amazonec2Config\n        name: nc-test-pool1-pwl5h\n      name: pool1\n      quantity: 1\n      unhealthyNodeTimeout: 0s\n      workerRole: true\n    machineSelectorConfig:\n    - config:\n        protect-kernel-defaults: false\n    registries: {}\n    upgradeStrategy:\n      controlPlaneConcurrency: "1"\n      controlPlaneDrainOptions:\n        deleteEmptyDirData: true\n        enabled: true\n        gracePeriod: -1\n        ignoreDaemonSets: true\n        timeout: 120\n      workerConcurrency: "1"\n      workerDrainOptions:\n        deleteEmptyDirData: true\n        enabled: true\n        gracePeriod: -1\n        ignoreDaemonSets: true\n        timeout: 120\n'))),(0,o.kt)("h3",{id:"chartvalues"},"chartValues"),(0,o.kt)("p",null,"Option to specify the values for the system charts installed by RKE2/k3s."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"chartValues:\n    chart-name:\n        key: value\n")),(0,o.kt)("h3",{id:"machineglobalconfig"},"machineGlobalConfig"),(0,o.kt)("p",null,"The RKE2/K3s configurations are nested under the ",(0,o.kt)("inlineCode",{parentName:"p"},"machineGlobalConfig")," directive. Any configuration change made here will apply to every node. The configuration options available in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/reference/server_config"},"standalone version of RKE2")," can be applied here."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"machineGlobalConfig:\n    etcd-arg:\n        - key1=value1\n        - key2=value2\n")),(0,o.kt)("h3",{id:"machineselectorconfig"},"machineSelectorConfig"),(0,o.kt)("p",null,"This is the same as ",(0,o.kt)("a",{parentName:"p",href:"#machineglobalconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"machineGlobalConfig"))," except that a ",(0,o.kt)("a",{parentName:"p",href:"#kubernetes-node-labels"},"label")," selector can be specified with the configuration. The configuration will only be applied to nodes that match the provided label selector."),(0,o.kt)("p",null,"Multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," entries are allowed, each specifying their own ",(0,o.kt)("inlineCode",{parentName:"p"},"machineLabelSelector"),". A user can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"matchExpressions"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"matchLabels"),", both, or neither. Omitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"machineLabelSelector")," section of this has the same effect as putting the config in the ",(0,o.kt)("inlineCode",{parentName:"p"},"machineGlobalConfig")," section."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"machineSelectorConfig\n  - config:\n      config-key: config-value\n    machineLabelSelector:\n      matchExpressions:\n        - key: example-key\n          operator: string # Valid operators are In, NotIn, Exists and DoesNotExist.\n          values:\n            - example-value1\n            - example-value2\n      matchLabels:\n        key1: value1\n        key2: value2\n")))}d.isMDXComponent=!0}}]);