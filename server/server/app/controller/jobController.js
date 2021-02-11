let Job = require('../model/jobModel');
let User = require('../model/userModel');

exports.create_job_app = async (req, res) => {
    console.log(req.body);
    console.log(req.body.userEmail)
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        if(err){
            res.status(409).send({ error: true, message: err.message})
            return;
        }
        const userId=result[0].id;
        // console.log(result[0])
        const newJob = new Job(req.body,userId);
        // console.log(newJob)
        Job.createJob(newJob, (error, job) => {
            if (error == null) {
                res.status(200).send({ error: false, message: 'Job successfully created.',data:job});
                return;
            }
            else{
                res.status(409).send({ error: true, message: error.message})
                return;
            }
        });
    });
    
};

exports.get_jobs= async (req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        if(err){
            res.status(409).send({ error: true, message: err.message})
            return;
        }
        const userId=result[0].id;
        Job.getAllJobsForUser(userId,(error,jobs)=>{
            if (error == null) {
                res.status(200).send({ error: false, data: jobs});
                return;
            }
            else{
                res.status(409).send({ error: true, message: error.message})
                return;
            }
        })
    })
};

exports.get_job=async(req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        if(err){
            res.status(409).send({ error: true, message: err.message})
            return;
        }
        const userId=result[0].id;
        const jobId=req.params.jobId
        Job.getJobById(jobId,(error,job)=>{
            if (error == null) {
                if (job[0].user_id===userId){
                    res.status(200).send({ error: false, data: job});
                    return;
                }
                else{
                    res.status(403).send('Unauthorized');
                    return;
                }
                
            }
            else{
                res.status(409).send({ error: true, message: error.message})
                return;
            }
        })
    })
    
}

exports.delete_job=async(req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        if(err){
            res.status(409).send({ error: true, message: err.message})
            return;
        }
        const userId=result[0].id;
        const jobId=req.params.jobId;
        Job.getJobById(jobId,(errno,job)=>{
            if (errno == null) {
                if (job[0].user_id===userId){
                    //allowed
                    Job.remove(jobId,(error,results)=>{
                        if(error==null){
                            res.status(200).send({ error: false, data: results.affectedRows});
                            return;
                        }
                        else{
                            res.status(409).send({ error: true, message: error.message})
                            return;
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

exports.update_job=async(req,res)=>{
    User.getUserByEmail(req.body.userEmail,(err,result)=>{
        if(err){
            res.status(409).send({ error: true, message: err.message})
            return;
        }
        const userId=result[0].id;
        const jobId=req.params.jobId;
        Job.getJobById(jobId,(errno,job)=>{
            if (errno == null) {
                if (job[0].user_id===userId){
                    //allowed
                    const updatedJob=new Job(req.body,userId);
                    updatedJob.job_id=jobId
                    Job.update(updatedJob,(error,results)=>{
                        if(error==null){
                            res.status(200).send({ error: false, data: results});
                            return;
                        }
                        else{
                            res.status(409).send({ error: true, message: error.message})
                            return;
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
                res.status(409).send({ error: true, message: errno.message})
                return;
            }
        })        
    })
}
