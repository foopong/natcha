// Import stylesheets
import "./style.css";

//0. Import LIFF SDK
import liff from "@line/liff"

// Body element
const body = document.getElementById("body")

//Profile elements
const pictureUrl = document.getElementById("pictureUrl")
const userId = document.getElementById("userId")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")
const email = document.getElementById("email")

//Button elements
const btnShare = document.getElementById("btnShare")


async function main() {
  //2. liff.ready
  liff.ready.then(() => {
    if (liff.getOS() === "android") {
      body.style.backgroundColor = "#888888"
    } 
    //if (liff.isInClient()) {
      getUserProfile()
    //}
    btnShare.style.display = "block" 
  })
  //3. Try a LIFF function
  //4. Check where LIFF was opened
  //5. Call getUserProfile()
  //10. Show Share Button

  //1. Initialize LIFF app)
  await liff.init({liffId: "1654925313-5dlZOgAD"})
}
main();

//6. Creat getUserProfile()
//*7. Get email
async function getUserProfile() {
    const profille = await liff.getProfile()
    pictureUrl.src = profille.pictureUrl
    userId.innerHTML = "<b>userId: </b>" + profile.userId
    displayName.innerHTML = "<b>displayName: </b>" + profile.displayName
    statusMessage.innerHTML = "<b>statusMessage: </b>" + profile.statusMessage
    email.innerHTML = "<b>email: </b>" + liff.getDecodedIDToken().email
} 

//*8. Create ShareMsg()
async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: "text",
      text: "This msg was shared by LIFF"
    }
  ])
  if (result) {
    alert("MSG was shared!")
  } else {
    alert("ShareTargetPicker was canceled by user")
  }
  liff.closeWindow()
}
//11. Add close window

//9. Add event listner to share button
btnShare.onclick = () => {
  shareMsg()
}