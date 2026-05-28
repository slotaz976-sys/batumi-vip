// Elementlər
const messageInput = document.getElementById("messageInput");
const messagesBox = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");

// Firebase ref
const messagesRef = window.ref(window.db, "messages");

// Mesaj göndər
if (sendBtn) {

  sendBtn.addEventListener("click", () => {

    const text = messageInput.value;

    if (text.trim() === "") return;

    window.push(messagesRef, {
      text: text,
      time: Date.now()
    });

    messageInput.value = "";
  });

}

// Mesajları oxu
window.onValue(messagesRef, (snapshot) => {

  if (!messagesBox) return;

  messagesBox.innerHTML = "";

  snapshot.forEach((child) => {

    const data = child.val();

    messagesBox.innerHTML += `
      <div style="
        background:#222;
        color:white;
        padding:12px;
        margin:10px;
        border-radius:12px;
        font-size:16px;
      ">
        ${data.text}
      </div>
    `;
  });

});