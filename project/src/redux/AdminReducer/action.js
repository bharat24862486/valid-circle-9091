 
import axios from "axios";
 

const url = `http://localhost:8080/admin_data`




const voices = window.speechSynthesis.getVoices();
console.log(voices);
function textTospeech (text) {
    let utternance = new SpeechSynthesisUtterance(text);
    utternance.voice = window.speechSynthesis.getVoices()[3] ;
    speechSynthesis.speak(utternance);
}



export const validate = async (mail, pass, sucessToast,wrongEmailToast, wrongPassToast) => {
  
  let MailId;
  let Pass;
  let promise = await axios.get(url); 
   MailId = promise.data[0]['MailId']
   Pass = promise.data[0]['Pass'] 
 
 
  let DetailsArrAdmin = [MailId, Pass];

  if (mail === MailId) {
    if (pass === Pass) {
      sucessToast('Login Success' , 'Welcome to StyleHub.')  
      sessionStorage.setItem("Admin-login", JSON.stringify(DetailsArrAdmin));
      textTospeech(" Happy to see you back Rahul")
      
      // location.href = "../admin-database/dashboard.html";
    } else {
      
      wrongPassToast(`Wrong Password`, 'Check your Password and try again.')
    }
  } else {
    
    wrongEmailToast(`Wrong Email`, 'Check your Email and try again.')
  }
};









// Reset the Password

export const resetPassFun = async (mail, pass, sucessToast,wrongEmailToast, wrongPassToast) => {
  
  let MailId;
  // let Pass;
  let promise = await axios.get(url); 
   MailId = promise.data[0]['MailId']
  //  Pass = promise.data[0]['Pass'] 
 
 
  
  if (mail === MailId) {
    // if (pass === Pass) {
      const userObj = {
         
        MailId: mail,
        Pass: pass
      }
      let promise = await axios.patch(`${url}/1`, userObj); 
      console.log(promise.data)
      sucessToast('PassWord Changed Sucessfully', 'Please login again' )  
      // sessionStorage.setItem("Admin-login", JSON.stringify(DetailsArrAdmin));
      // textTospeech(" Happy to see you back Rahul")
      
      // location.href = "../admin-database/dashboard.html";
    
    //  else {
      
    //   wrongPassToast()
    // }
  } else {
    
    wrongEmailToast('User not Found', 'Check your email and try again')
  }
};









 
// let resetPass = document.getElementById("resetPassword");
// resetPass.onclick = async () => {
//   let inputEmail = window.prompt("Enter UserID");
//   if (inputEmail === "rahul1905.sk@gmail.com") {
//     let inputPass = window.prompt("Enter New Password");
//     if (inputPass == null) {
//       return;
//     }
//     let dataToSend = {
//       Pass: inputPass,
//     };

//     let res = await fetch (`https://mock-server-wxg2.onrender.com/admin_data/1`, {
//       method: "PATCH",
//       body: JSON.stringify(dataToSend),
//       headers: {
//         "Content-Type" : "application/json"
//       }
//     });

//     res = await res.json();
//     alert("Password Reset Successfull");
//   } else {
//     alert("Invalid UserID");
//   }
// };






// const voices = window.speechSynthesis.getVoices();
// console.log(voices);
// function textTospeech (text) {
//     let utternance = new SpeechSynthesisUtterance(text);
//     utternance.voice = window.speechSynthesis.getVoices()[3] ;
//     speechSynthesis.speak(utternance);
// }

