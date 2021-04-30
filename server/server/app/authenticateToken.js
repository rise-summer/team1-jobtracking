const { auth } = require("firebase-admin");
var admin = require("firebase-admin");

var serviceAccount = require("../hive-83b4f-firebase-adminsdk-qk99b-97fe705121.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hive-83b4f.firebaseio.com",
});

//middleware that checks request header for firebase auth token
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const authenticate = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    res.status(403).send("Unauthorized");
    return;
  }
  const idToken = req.headers.authorization.split("Bearer ")[1];
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.body.userEmail = decodedIdToken.email;
    next();
    return;
  } catch (e) {
    res.status(403).send("Unauthorized");
    return;
  }
};

module.exports = authenticate;
