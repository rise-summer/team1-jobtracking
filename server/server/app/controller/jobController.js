let Job = require('../model/jobModel');
let User = require('../model/userModel');

exports.create_job_app = async (req, res) => {
    let userId=-1
    User.getUserByEmail(req.userEmail,(err,id)=>{
        userId=id;
    });
    const newJob = new Job(req.body,userId);

    Job.createJob(newJob, (err, job) => {
        if (err == null) {
            res.status(200).send({ error: false, message: 'Job successfully created.'});
            return;
        }
        else{
            res.status(409).send({ error: true, message: 'Error while trying to create job.'})
        }
    });
};