import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_xVM77KS28",
    ClientId: "1kqd4923p9ck8gjc4tqp465s5t"
}

export default new CognitoUserPool(poolData)