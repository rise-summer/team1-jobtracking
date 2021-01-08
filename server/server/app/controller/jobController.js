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
            }
        });
    });
    
    
};