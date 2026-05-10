async function sendMessage() {

  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;

  if (!userText) return;

  addMessage(userText, "user");

  input.value = "";

  const response = await fetch("https://fastapi-python-boilerplate-one-lovat.vercel.app/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userText
    })
  });

  const data = await response.json();

  addMessage(data.reply, "bot");
}

function addMessage(text, sender) {

  const chatBox = document.getElementById("chat-box");

  const div = document.createElement("div");

  div.classList.add("message");
  div.classList.add(sender);

  div.innerText = text;

  chatBox.appendChild(div);

  chatBox.scrollTop = chatBox.scrollHeight;
}