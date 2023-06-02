"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Projects and Kubernetes Namespaces with Rancher",description:"Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces"},s=void 0,i={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",title:"Projects and Kubernetes Namespaces with Rancher",description:"Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces.md",tags:[],version:"2.5",lastUpdatedAt:1685740776,formattedLastUpdatedAt:"2023\u5e746\u67082\u65e5",frontMatter:{title:"Projects and Kubernetes Namespaces with Rancher",description:"Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces"},sidebar:"tutorialSidebar",previous:{title:"vSphere Storage",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},next:{title:"Cloning Clusters",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"}},l={},c=[{value:"About Namespaces",id:"about-namespaces",level:2},{value:"Role-based access control issues with namespaces and kubectl",id:"role-based-access-control-issues-with-namespaces-and-kubectl",level:3},{value:"About Projects",id:"about-projects",level:2},{value:"The Cluster&#39;s Default Project",id:"the-clusters-default-project",level:3},{value:"The System Project",id:"the-system-project",level:3},{value:"Project Authorization",id:"project-authorization",level:2},{value:"Pod Security Policies",id:"pod-security-policies",level:2},{value:"Creating Projects",id:"creating-projects",level:2},{value:"1. Name a New Project",id:"1-name-a-new-project",level:3},{value:"2. Optional: Select a Pod Security Policy",id:"2-optional-select-a-pod-security-policy",level:3},{value:"3. Recommended: Add Project Members",id:"3-recommended-add-project-members",level:3},{value:"4. Optional: Add Resource Quotas",id:"4-optional-add-resource-quotas",level:3},{value:"Switching between Clusters and Projects",id:"switching-between-clusters-and-projects",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'A namespace is a Kubernetes concept that allows a virtual cluster within a cluster, which is useful for dividing the cluster into separate "virtual clusters" that each have their own access control and resource quotas.'),(0,n.kt)("p",null,"A project is a group of namespaces, and it is a concept introduced by Rancher. Projects allow you to manage multiple namespaces as a group and perform Kubernetes operations in them. You can use projects to support multi-tenancy, so that a team can access a project within a cluster without having access to other projects in the same cluster."),(0,n.kt)("p",null,"This section describes how projects and namespaces work with Rancher."),(0,n.kt)("h2",{id:"about-namespaces"},"About Namespaces"),(0,n.kt)("p",null,"A namespace is a concept introduced by Kubernetes. According to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"official Kubernetes documentation on namespaces,")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces. ","[...]"," Namespaces are intended for use in environments with many users spread across multiple teams, or projects. For clusters with a few to tens of users, you should not need to create or think about namespaces at all.")),(0,n.kt)("p",null,"Namespaces provide the following functionality:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Providing a scope for names:")," Names of resources need to be unique within a namespace, but not across namespaces. Namespaces can not be nested inside one another and each Kubernetes resource can only be in one namespace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Resource quotas:")," Namespaces provide a way to divide cluster resources between multiple users.")),(0,n.kt)("p",null,"You can assign resources at the project level so that each namespace in the project can use them. You can also bypass this inheritance by assigning resources explicitly to a namespace."),(0,n.kt)("p",null,"You can assign the following resources directly to namespaces:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/pages-for-subheaders/workloads-and-pods"},"Workloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/pages-for-subheaders/load-balancer-and-ingress-controller"},"Load Balancers/Ingress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"Service Discovery Records")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/pages-for-subheaders/create-kubernetes-persistent-storage"},"Persistent Volume Claims")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Certificates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"Registries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"Secrets"))),(0,n.kt)("p",null,"To manage permissions in a vanilla Kubernetes cluster, cluster admins configure role-based access policies for each namespace. With Rancher, user permissions are assigned on the project level instead, and permissions are automatically inherited by any namespace owned by the particular project."),(0,n.kt)("p",null,"For more information on creating and moving namespaces, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},"Namespaces"),"."),(0,n.kt)("h3",{id:"role-based-access-control-issues-with-namespaces-and-kubectl"},"Role-based access control issues with namespaces and kubectl"),(0,n.kt)("p",null,"Because projects are a concept introduced by Rancher, kubectl does not have the capability to restrict the creation of namespaces to a project the creator has access to."),(0,n.kt)("p",null,"This means that when standard users with project-scoped permissions create a namespaces with ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),", it may be unusable because ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," doesn't require the new namespace to be scoped within a certain project."),(0,n.kt)("p",null,"If your permissions are restricted to the project level, it is better to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},"create a namespace through Rancher")," to ensure that you will have permission to access the namespace."),(0,n.kt)("p",null,"If a standard user is a project owner, the user will be able to create namespaces within that project. The Rancher UI will prevent that user from creating namespaces outside the scope of the projects they have access to."),(0,n.kt)("h2",{id:"about-projects"},"About Projects"),(0,n.kt)("p",null,"In terms of hierarchy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clusters contain projects"),(0,n.kt)("li",{parentName:"ul"},"Projects contain namespaces")),(0,n.kt)("p",null,"You can use projects to support multi-tenancy, so that a team can access a project within a cluster without having access to other projects in the same cluster."),(0,n.kt)("p",null,"In the base version of Kubernetes, features like role-based access rights or cluster resources are assigned to individual namespaces. A project allows you to save time by giving an individual or a team access to multiple namespaces simultaneously."),(0,n.kt)("p",null,"You can use projects to perform actions such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Assign users to a group of namespaces (i.e., ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects"},"project membership"),")."),(0,n.kt)("li",{parentName:"ul"},"Assign users specific roles in a project. A role can be owner, member, read-only, or ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Assign resources to the project."),(0,n.kt)("li",{parentName:"ul"},"Assign Pod Security Policies.")),(0,n.kt)("p",null,"When you create a cluster, two projects are automatically created within it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-clusters-default-project"},"Default Project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-system-project"},"System Project"))),(0,n.kt)("h3",{id:"the-clusters-default-project"},"The Cluster's Default Project"),(0,n.kt)("p",null,"When you provision a cluster with Rancher, it automatically creates a ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," project for the cluster. This is a project you can use to get started with your cluster, but you can always delete it and replace it with projects that have more descriptive names."),(0,n.kt)("p",null,"If you don't have a need for more than the default namespace, you also do not need more than the ",(0,n.kt)("strong",{parentName:"p"},"Default")," project in Rancher."),(0,n.kt)("p",null,"If you require another level of organization beyond the ",(0,n.kt)("strong",{parentName:"p"},"Default")," project, you can create more projects in Rancher to isolate namespaces, applications and resources."),(0,n.kt)("h3",{id:"the-system-project"},"The System Project"),(0,n.kt)("p",null,"When troubleshooting, you can view the ",(0,n.kt)("inlineCode",{parentName:"p"},"system")," project to check if important namespaces in the Kubernetes system are working properly. This easily accessible project saves you from troubleshooting individual system namespace containers."),(0,n.kt)("p",null,"To open it, open the ",(0,n.kt)("strong",{parentName:"p"},"Global")," menu, and then select the ",(0,n.kt)("inlineCode",{parentName:"p"},"system")," project for your cluster."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"system")," project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Is automatically created when you provision a cluster."),(0,n.kt)("li",{parentName:"ul"},"Lists all namespaces that exist in ",(0,n.kt)("inlineCode",{parentName:"li"},"v3/settings/system-namespaces"),", if they exist."),(0,n.kt)("li",{parentName:"ul"},"Allows you to add more namespaces or move its namespaces to other projects."),(0,n.kt)("li",{parentName:"ul"},"Cannot be deleted because it's required for cluster operations.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," In RKE clusters where the project network isolation option is enabled, the ",(0,n.kt)("inlineCode",{parentName:"p"},"system")," project overrides the project network isolation option so that it can communicate with other projects, collect logs, and check health.")),(0,n.kt)("h2",{id:"project-authorization"},"Project Authorization"),(0,n.kt)("p",null,"Standard users are only authorized for project access in two situations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An administrator, cluster owner or cluster member explicitly adds the standard user to the project's ",(0,n.kt)("strong",{parentName:"li"},"Members")," tab."),(0,n.kt)("li",{parentName:"ul"},"Standard users can access projects that they create themselves.")),(0,n.kt)("h2",{id:"pod-security-policies"},"Pod Security Policies"),(0,n.kt)("p",null,"Rancher extends Kubernetes to allow the application of ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policluster-admin/pod-security-policy/"},"Pod Security Policies")," at the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"},"project level")," in addition to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"cluster level.")," However, as a best practice, we recommend applying Pod Security Policies at the cluster level."),(0,n.kt)("h2",{id:"creating-projects"},"Creating Projects"),(0,n.kt)("p",null,"This section describes how to create a new project with a name and with optional pod security policy, members, and resource quotas."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-name-a-new-project"},"Name a new project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-optional-select-a-pod-security-policy"},"Optional: Select a pod security policy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-recommended-add-project-members"},"Recommended: Add project members.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#4-optional-add-resource-quotas"},"Optional: Add resource quotas."))),(0,n.kt)("h3",{id:"1-name-a-new-project"},"1. Name a New Project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," from the main menu. From the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, open the cluster from which you want to create a project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu, choose ",(0,n.kt)("strong",{parentName:"p"},"Projects/Namespaces"),". Then click ",(0,n.kt)("strong",{parentName:"p"},"Add Project"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Project Name"),"."))),(0,n.kt)("h3",{id:"2-optional-select-a-pod-security-policy"},"2. Optional: Select a Pod Security Policy"),(0,n.kt)("p",null,"This option is only available if you've already created a Pod Security Policy. For instruction, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),"."),(0,n.kt)("p",null,"Assigning a PSP to a project will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Override the cluster's default PSP."),(0,n.kt)("li",{parentName:"ul"},"Apply the PSP to the project."),(0,n.kt)("li",{parentName:"ul"},"Apply the PSP to any namespaces you add to the project later.")),(0,n.kt)("h3",{id:"3-recommended-add-project-members"},"3. Recommended: Add Project Members"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("strong",{parentName:"p"},"Members")," section to provide other users with project access and roles."),(0,n.kt)("p",null,"By default, your user is added as the project ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Notes on Permissions:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Member")," role for a project automatically inherit the ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace creation")," role. However, this role is a ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),", meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Member")," role for a project can create namespaces in other projects they're assigned to, even with only the ",(0,n.kt)("inlineCode",{parentName:"p"},"Read Only")," role assigned.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By default, the Rancher role of ",(0,n.kt)("inlineCode",{parentName:"p"},"project-member")," inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," role, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"project-owner")," role inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," role. As such, both ",(0,n.kt)("inlineCode",{parentName:"p"},"project-member")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"project-owner")," roles will allow for namespace management, including the ability to create and delete namespaces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Custom")," to create a custom role on the fly: ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#custom-project-roles"},"Custom Project Roles"),".")))),(0,n.kt)("p",null,"To add members:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Member"),"."),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Name")," combo box, search for a user or group that you want to assign project access. Note: You can only search for groups if external authentication is enabled."),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Role")," drop-down, choose a role. For more information, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"documentation on project roles."))),(0,n.kt)("h3",{id:"4-optional-add-resource-quotas"},"4. Optional: Add Resource Quotas"),(0,n.kt)("p",null,"Resource quotas limit the resources that a project (and its namespaces) can consume. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"Resource Quotas"),"."),(0,n.kt)("p",null,"To add a resource quota,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Quota"),"."),(0,n.kt)("li",{parentName:"ol"},"Select a Resource Type. For more information, see ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"Resource Quotas."),"."),(0,n.kt)("li",{parentName:"ol"},"Enter values for the ",(0,n.kt)("strong",{parentName:"li"},"Project Limit")," and the ",(0,n.kt)("strong",{parentName:"li"},"Namespace Default Limit"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," Specify ",(0,n.kt)("strong",{parentName:"li"},"Container Default Resource Limit"),", which will be applied to every container started in the project. The parameter is recommended if you have CPU or Memory limits set by the Resource Quota. It can be overridden on per an individual namespace or a container level. For more information, see ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"Container Default Resource Limit")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your project is created. You can view it from the cluster's ",(0,n.kt)("strong",{parentName:"p"},"Projects/Namespaces")," view."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Project Limit"),(0,n.kt)("td",{parentName:"tr",align:null},"The overall resource limit for the project.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespace Default Limit"),(0,n.kt)("td",{parentName:"tr",align:null},"The default resource limit available for each namespace. This limit is propagated to each namespace in the project when created. The combined limit of all project namespaces shouldn't exceed the project limit.")))),(0,n.kt)("h2",{id:"switching-between-clusters-and-projects"},"Switching between Clusters and Projects"),(0,n.kt)("p",null,"To switch between clusters and projects, use the ",(0,n.kt)("strong",{parentName:"p"},"Global")," drop-down available in the main menu."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Global Menu",src:a(31610).Z,width:"1172",height:"634"})),(0,n.kt)("p",null,"Alternatively, you can switch between projects and clusters using the main menu."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To switch between clusters, open the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view and select ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," from the main menu. Then open a cluster."),(0,n.kt)("li",{parentName:"ul"},"To switch between projects, open a cluster, and then select ",(0,n.kt)("strong",{parentName:"li"},"Projects/Namespaces")," from the main menu. Select the link for the project that you want to open.")))}u.isMDXComponent=!0},31610:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/global-menu-6e581bb566265419daf5f7cb9e977a2b.png"}}]);