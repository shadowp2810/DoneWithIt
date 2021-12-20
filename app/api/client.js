import { create } from "apisauce";

//We call it and give a configuration object.
const apiClient = create({
  baseURL: "http://192.168.1.5:9000/api/",
});

/*
Now we have methods like get post put and so on.
And whever we call server promise is always resolved.

When promise is resolved we get a response object
And instead of using a try catch block, we just check reponse.ok
And if it is not ok we look at response.problem


Problem is a string and it can be one of these values.
NONE             null               200-299       No problems.
CLIENT_ERROR     'CLIENT_ERROR'     400-499       Any non-specific 400 series error.
SERVER_ERROR     'SERVER_ERROR'     500-599       Any 500 series error.
TIMEOUT_ERROR    'TIMEOUT_ERROR'    ---           Server didn't respond in time.
CONNECTION_ERROR 'CONNECTION_ERROR' ---           Server not available, bad dns.
NETWORK_ERROR    'NETWORK_ERROR'    ---           Network not available.
CANCEL_ERROR     'CANCEL_ERROR'     ---           Request has been cancelled. Only possible if `cancelToken` is provided in config, see axios `Cancellation`.

Api sause gives us standardized errors.
*/

export default apiClient;
