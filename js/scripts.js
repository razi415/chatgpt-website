document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const conversationDiv = document.getElementById('conversation');
    const userMessage = document.createElement('p');
    userMessage.textContent = 'You: ' + userInput;
    conversationDiv.appendChild(userMessage);
    document.getElementById('userInput').value = '';

    // Simulate a response from ChatGPT
    const botMessage = document.createElement('p');
    botMessage.textContent = 'ChatGPT: This is a simulated response.';
    conversationDiv.appendChild(botMessage);
});
