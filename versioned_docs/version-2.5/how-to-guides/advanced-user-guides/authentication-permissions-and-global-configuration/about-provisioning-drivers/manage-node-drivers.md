---
title: Node Drivers
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"/>
</head>

Node drivers are used to provision hosts, which Rancher uses to launch and manage Kubernetes clusters. A node driver is the same as a [Docker Machine driver](https://github.com/docker/docs/blob/vnext-engine/machine/drivers/index.md). The availability of which node driver to display when creating node templates is defined based on the node driver's status. Only `active` node drivers will be displayed as an option for creating node templates. By default, Rancher is packaged with many existing Docker Machine drivers, but you can also create custom node drivers to add to Rancher.

If there are specific node drivers that you don't want to show to your users, you would need to de-activate these node drivers.

#### Managing Node Drivers

>**Prerequisites:** To create, edit, or delete drivers, you need _one_ of the following permissions:
>
>- [Administrator Global Permissions](../manage-role-based-access-control-rbac/global-permissions.md)
>- [Custom Global Permissions](../manage-role-based-access-control-rbac/global-permissions.md#custom-global-permissions) with the [Manage Node Drivers](../manage-role-based-access-control-rbac/global-permissions.md) role assigned.

## Activating/Deactivating Node Drivers

By default, Rancher only activates drivers for the most popular cloud providers, Amazon EC2, Azure, DigitalOcean and vSphere. If you want to show or hide any node driver, you can change its status.

1.  From the **Global** view, choose **Tools > Drivers** in the navigation bar. From the **Drivers** page, select the **Node Drivers** tab.

2.	Select the driver that you wish to **Activate** or **Deactivate** and select the appropriate icon.

## Adding Custom Node Drivers

If you want to use a node driver that Rancher doesn't support out-of-the-box, you can add that provider's driver in order to start using them to create node templates and eventually node pools for your Kubernetes cluster.

1.  From the **Global** view, choose **Tools > Drivers** in the navigation bar. From the **Drivers** page, select the **Node Drivers** tab.

2.	Click **Add Node Driver**.

3.	Complete the **Add Node Driver** form. Then click **Create**.

### Developing your own node driver

Node drivers are implemented with [Rancher Machine](https://github.com/rancher/machine), a fork of [Docker Machine](https://github.com/docker/machine). Docker Machine is no longer under active development.

Refer to the original [Docker Machine documentation](https://github.com/docker/docs/blob/vnext-engine/machine/overview.md) for details on how to develop your own node drivers.
