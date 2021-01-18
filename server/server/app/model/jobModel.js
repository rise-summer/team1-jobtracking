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
  VALUES(?,?,?,?)`;
  let info=[newJob.job_title,newJob.company,newJob.app_process,newJob.userId]
  sql.query(stmt, info, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, newJob);
    }
  });
};

//get job by id
Job.getJobById = (jobId,result) => {
  sql.query('SELECT * FROM job WHERE job_id = ? ', jobId, (err, res) => {
    if (err) {
        result(err,null)
    }
    else{
        // console.log(res)
        result(null,res)
    }
  });
};

//get all jobs for a user
Job.getAllJobsForUser = (userId,result) => {
  let stmt=`SELECT * FROM job WHERE user_id=?`;
  sql.query(stmt, userId, (err, res) => {
    if (err) {
        result(err,null)
    }
    else{
        // console.log(res)
        result(null,res)
    }
  });
};

//remove job
Job.remove = (jobId,result) => {
  sql.query('DELETE FROM job WHERE job_id = ?', jobId, (err, res) => {
    if (err) {
        result(err,null)
    }
    else{
        // console.log(res)
        result(null,res)
    }
  });
};

//update job
Job.update=(updatedJob,result)=>{
    let stmt=`UPDATE job
                SET job_title = ?, company = ?, app_process = ?
                WHERE job_id = ?`;
    let info=[updatedJob.job_title,updatedJob.company,updatedJob.app_process,updatedJob.job_id]
    sql.query(stmt,info,(err,res)=>{
        if (err) {
            result(err, null);
        } else {
            result(null, updatedJob);
        }
    })
};

module.exports = Job;
