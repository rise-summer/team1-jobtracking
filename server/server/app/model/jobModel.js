let sql = require('../db');
const uuid = require('uuid');


function Job(job,uid) {
  console.log('job application: ' + JSON.stringify(job));
  this.job_title = job.job_title;
  this.company = job.company;
  this.app_process=job.app_process;
  this.userId=uid;
}

//create job
Job.createJob = (newJob, result) => {
  
  let stmt=`INSERT INTO job(job_title,company,app_process,user_id)
  VALUES(?,?)`;
  let info=[newUser.username,newUser.email]
  sql.query(stmt, info, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, newUser);
    }
  });
};

//get job by id
Job.getById = (userId) => {
  sql.query('SELECT u FROM users WHERE id = ? ', userId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
  });
};

//get all jobs for a user
Job.getAllUsers = (result) => {
  let stmt=`SELECT * FROM users`;
  sql.query(stmt, (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
    result(res);
    return res;
  });
};

//remove job
Job.remove = (userId) => {
  sql.query('DELETE FROM users WHERE id = ?', [userId], (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
  });
};

//update job
Job.update=()=>{

};

module.exports = Job;
