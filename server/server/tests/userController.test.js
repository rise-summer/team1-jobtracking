const userModel = require('../app/model/userModel');
const userController = require('../app/controller/userController');
const sinon = require('sinon');

describe('user controller', () => {
  describe('create a new user', () => {
    const user = {
      email: 'test@user.com',
      username: 'test',
      password: 'user'
    };
    const req = {
      body: user
    };
    let res = {};

    beforeEach(() => {
      res = {
        json: sinon.spy(),
        send: sinon.spy(),
        status: sinon.stub().returns({ end: sinon.spy() })
      };
    });

    // beforeEach(() => {
    // const successConnectionObj = {
    //   connect: jest.fn()
    // };
    // sinon.stub(connection, 'conenct').yields(jest.fn());

    // sinon.stub(mysql, 'createConnection').yields(() => jest.fn());
    // });

    afterEach(() => {
      sinon.restore();
    });

    it('should create a new user', async () => {
      const expectedResult = req.body;
      sinon.stub(userModel, 'createUser').yields(null, expectedResult);
      userController.create_a_user(req, res);

      sinon.assert.calledOnce(userModel.createUser);
      sinon.assert.calledWith(res.json, sinon.match({ email: req.body.email }));
      sinon.assert.calledWith(res.json, sinon.match({ username: req.body.username }));
      sinon.assert.calledWith(res.json, sinon.match({ password: req.body.password }));
    });

    it('should return status 422 on server error', () => {
      const error = {
        code: 'auth/email-already-in-use',
        message: 'email in use'
      };
      sinon.stub(userModel, 'createUser').yields(error);

      userController.create_a_user(req, res);
      sinon.assert.calledOnce(userModel.createUser);
      sinon.assert.calledWith(res.status, 422);
    });

    it('should return status 400 on server error', () => {
      const error = {
        code: 'auth/invalid-email',
        message: 'invalid email address'
      };
      sinon.stub(userModel, 'createUser').yields(error);

      userController.create_a_user(req, res);
      sinon.assert.calledOnce(userModel.createUser);
      sinon.assert.calledWith(res.status, 400);
    });
  });
});
