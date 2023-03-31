import axios from "axios";


const url = `http://localhost:8080/admin_data`

export const validate = async (mail, pass) => {
  let MailId;
  let Pass;
  let promise = await axios.get(url); 
   MailId = promise.data[0]['MailId']
   Pass = promise.data[0]['Pass'] 
  // data.forEach((el) => {
  //   MailId = el.MailId;
  //   Pass = el.Pass;
  // });

  console.log('Def mail-->', mail);
  console.log('userinp mail-->', MailId);
  console.log('Def pass-->', pass);
  console.log('userinp pass-->', Pass);
 
  let DetailsArrAdmin = [MailId, Pass];

  if (mail === MailId) {
    if (pass === Pass) {
      alert("login Sucessfull");
      sessionStorage.setItem("Admin-login", JSON.stringify(DetailsArrAdmin));
      // textTospeech(" Happy to see you back Rahul")
      // location.href = "../admin-database/dashboard.html";
    } else {
      alert("Invalid Password");
    }
  } else {
    alert("Invalid Email");
  }
};