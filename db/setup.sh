# download mysql 8.0 image from docker
docker build --tag mysqldb .
# start a docker container and open port 3306
docker run --name jobtracking -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw mysqldb < connect.sql
