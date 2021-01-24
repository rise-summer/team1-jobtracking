let sql = require('../db');
const uuid = require('uuid');


function Job(job,uid) {
  console.log('job application: ' + JSON.stringify(job));
  this.link=job.link;
  this.position = job.position;
  this.company = job.company;
  this.location=job.location;
  this.app_status=job.app_status;
  this.date_updated=job.date_updated;
  this.deadline=job.deadline;
  this.description=job.description;
  this.notes=job.notes;
  this.userId=uid;
}

//create job
Job.createJob = (newJob, result) => {
  
  let stmt=`INSERT INTO job(link,position,company,location,app_status,date_updated,deadline,description,notes,user_id)
  VALUES(?,?,?,?,?,?,?,?,?,?)`;
  let info=[newJob.link,newJob.position,newJob.company,newJob.location,newJob.app_status,
    newJob.date_updated,newJob.deadline,newJob.description,newJob.notes,newJob.userId]
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
            SET link=?,position=?,company = ?,location=?,app_status = ?,date_updated=?,deadline=?,description=?,notes=?
            WHERE job_id = ?`;
  let info=[updatedJob.link,updatedJob.position,updatedJob.company,updatedJob.location,updatedJob.app_status,
    updatedJob.date_updated,updatedJob.deadline,updatedJob.description,updatedJob.notes,updatedJob.job_id]
    sql.query(stmt,info,(err,res)=>{
        if (err) {
            result(err, null);
        } else {
            result(null, updatedJob);
        }
    })
};

module.exports = Job;
