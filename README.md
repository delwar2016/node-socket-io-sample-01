# node-socket-io-sample-01
This is a sample example of nodejs  with socket.io

This is a very basic example and I hope this will help beginner to catch quickly.
In this example, I am trying to show , 
how server will trigger data to client and how client will trigger data to server.

Following will responsible to send data among all the connected clients.

socket.emit('sendFromServer', {'serverData': new Date()});

here "sendFromServer" is a event, which is a custom event, 
i put it named "sendFromServer", when we will write receive event then we have to use this name.

Say, 
socket.on('sendFromServer', function(data){
    document.getElementById('server-response'). innerHTML= data.serverData;
  });
  
  The above is a receive event.
  
  see, {'serverData': new Date()} this is my data, 
  which i was send from server to client. we can send any object which we want.
  
  I have provide some instruction to run this project. For this first install nodejs , 
  after that clone / download source code.
   Then run the following command- then see what is happening there.... For server side receiving data , we can find in console.

  npm install

  node server.js
  
  After the above command run, go to your brower then type http://localhost:8001/socket.html
  
  yahhhhhhh ! Now its ready. we can see , our page is receiving data from server.
  
  we can write some text in input field and press button then we can see the text in server console.
  
  



