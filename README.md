# IOTgps
gps tracking with teltonika

adding repo

```
echo "[10gen]
name=10gen Repository <br />
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64 <br />
gpgcheck=0" | sudo tee -a /etc/yum.repos.d/10gen.repo <br />
```

install of mongodb

```
sudo yum -y install mongo-10gen-server mongodb-org-shell <br />
sudo yum -y install sysstat <br />
```
We are using /var/lib/mongo folder to save database, log


```
sudo mkdir /var/lib/mongo/data <br />
sudo mkdir /var/lib/mongo/log <br />

```
Set the storage items (data, log) to be owned by the user (mongod) and group (mongod) that MongoDB will be starting under:

```
sudo chown mongod:mongod /var/lib/mongo/data <br />
sudo chown mongod:mongod /var/lib/mongo/log <br />
```

Starting and testing MongoDB

```
sudo chkconfig mongod on <br />
sudo /etc/init.d/mongod start <br />
```