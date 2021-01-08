let Job = require('../model/jobModel');
let User = require('../model/userModel');

exports.create_job_app = async (req, res) => {
    // console.log(req.body.userEmail)
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        // console.log('result from getuser:'+err+' '+result)
        userId=result[0].id;
        // console.log(result[0])
        const newJob = new Job(req.body,userId);
        Job.createJob(newJob, (err, job) => {
            if (err == null) {
                res.status(200).send({ error: false, message: 'Job successfully created.'});
                return;
            }
            else{
                res.status(409).send({ error: true, message: err.message})
                return;
            }
        });
    });
    
};

exports.get_jobs= async (req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        userId=result[0].id;
        Job.getAllJobsForUser(userId,(err,jobs)=>{
            if (err == null) {
                res.status(200).send({ error: false, data: jobs});
                return;
            }
            else{
                res.status(409).send({ error: true, message: err.message})
                return;
            }
        })
    })
};

exports.get_job=async(req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        userId=result[0].id;
        jobId=req.params.jobId
        Job.getJobById(jobId,(err,job)=>{
            if (err == null) {
                // console.log(job[0].user_id)
                if (job[0].user_id==userId){
                    res.status(200).send({ error: false, data: job});
                    return;
                }
                else{
                    res.status(403).send('Unauthorized');
                    return;
                }
                
            }
            else{
                res.status(409).send({ error: true, message: err.message})
                return;
            }
        })
    })
    
}

exports.delete_job=async(req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        userId=result[0].id;
        jobId=req.params.jobId;
        Job.getJobById(jobId,(err,job)=>{
            if (err == null) {
                // console.log(job[0].user_id)
                if (job[0].user_id==userId){
                    //allowed
                    Job.remove(jobId,(error,results)=>{
                        if(error==null){
                            res.status(200).send({ error: false, data: results.affectedRows});
                            return;
                        }
                        else{
                            res.status(409).send({ error: true, message: error.message})
                        }
                    })
                }
                else{
                    //not allowed
                    res.status(403).send('Unauthorized');
                    return;
                }
            }
            else{
                res.status(409).send({ error: true, message: err.message})
                return;
            }
        })
    })
}