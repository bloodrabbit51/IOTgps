# IOTgps
gps tracking with teltonika

adding repo

```
echo "[10gen]
name=10gen Repository 
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64 
gpgcheck=0" | sudo tee -a /etc/yum.repos.d/10gen.repo 
```

install of mongodb

```
sudo yum -y install mongo-10gen-server mongodb-org-shell 
sudo yum -y install sysstat 
```
We are using /var/lib/mongo folder to save database, log


```
sudo mkdir /var/lib/mongo/data 
sudo mkdir /var/lib/mongo/log 

```
Set the storage items (data, log) to be owned by the user (mongod) and group (mongod) that MongoDB will be starting under:

```
sudo chown mongod:mongod /var/lib/mongo/data 
sudo chown mongod:mongod /var/lib/mongo/log 
```

Starting and testing MongoDB

```
sudo chkconfig mongod on 
sudo /etc/init.d/mongod start 
```