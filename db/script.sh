# download mysql 8.0 image from docker
docker pull mysql/mysql-server:8.0
# start a docker container and open port 3306
docker run --name=jobtracking -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql/mysql-server:8.0