## Prerequisites
* PostgreSQL
* PGAdmin
* Typescript
* Node
* npm

## Connect to postgres
Follow the steps in [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04).  
The name of the database is `typescript-ang-uni`.

Install and configure [PGAdmin](https://www.digitalocean.com/community/tutorials/how-to-install-configure-pgadmin4-server-mode)  
Go to your home folder and create the pgAdmin folder and the virtualenv fot it:

```
$ mkdir .pgAdmin
$ cd .pgAdmin
virtualenv -p python3 pgAdmin
```

Activate your virtualenv
```
source bin/activate
```

Install pgAdmin
```
wget https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v4.9/pip/pgadmin4-4.9-py2.py3-none-any.whl
```
