# Database Documentation

```
version: MySQL latest
```

## Set Up

Install Docker and then run `sh setup.sh`.

The script will build a customized mysql8.0 image from the dockerfile, which is initialized with a database as shown in the sql file, and start a docker container with MySQL8.0 on port 3306.

## DB Schema

TODO: modification required

```
User :
    - id
    - username
    - email
```

```
Job :
    - id
    - job_id
    - job_title
    - company
    - progress
```

```
Post :
    - id
    - post_id
    - title
    - content
    - tag
    - created_at
```
