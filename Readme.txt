Following are the instructions to run the project:
1.Go to project directory
2.run -> npm install
3.create a .env file and copy the values from .env.example 
4.run ->npm start

Task 1 : Write a nodejs express middleware: that only allows request to proceed 
if req has session and it's applicable only to all URLs that start with pub/proxy 
 and api/proxy (for example pub/proxy/bpm/start or api/proxy/adu-ms/get).

   a.Hit the api ->GET 'http://localhost:5000/api/proxy/adu-ms/get'
   response->'Url not allowed' will sent as error message .
   b.Hit the api ->GET 'http://localhost:5000/pub/proxy/bpm/start'
   response->'Url not allowed' will sent as error message .

   c. UNCOMMENT THE CODE IN app.js ->
app.use(cookieSession({
    signed:false
}))
  d. Hit the above specified apis again and response->
  'Url is allowed because session is present'   


Task 2: Hit the api ->POST 'http://localhost:5000/save/abc'
->this will create 'abc.json' in all_files directory and save the data in file.

 b.Hit the api ->GET 'http://localhost:5000/save/abc'
->this will retrieve the data from  'abc.json' in all_files directory 
and send as the response.

////////////////////////////////////////////////////////////////////

