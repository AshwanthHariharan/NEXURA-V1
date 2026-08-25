// ============================================
// AI CHATBOT - Integration Script
// ============================================

class ChatbotApp {
    constructor() {
        this.API_KEY = "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";
        this.MODEL = "openai/gpt-5-mini";
        this.isOpen = false;
        this.isLoading = false;
        
        // DOM elements
        this.sidebar = document.getElementById('chatbotSidebar');
        this.messagesContainer = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.querySelector('.chatbot-send-btn');
        this.toggleBtn = document.getElementById('chatbotToggle');
        
        // Bind events
        this.bindEvents();
        
        console.log('🤖 Chatbot initialized');
    }
    
    bindEvents() {
        // Send on Enter key
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Auto-resize textarea (if using textarea)
        // Not needed for input
    }
    
    toggle() {
        this.isOpen = !this.isOpen;
        this.sidebar.classList.toggle('open', this.isOpen);
        
        if (this.isOpen) {
            this.input.focus();
            // Create overlay if needed
            this.createOverlay();
        } else {
            this.removeOverlay();
        }
    }
    
    createOverlay() {
        // Remove existing overlay
        this.removeOverlay();
        
        const overlay = document.createElement('div');
        overlay.className = 'chatbot-overlay show';
        overlay.id = 'chatbotOverlay';
        overlay.addEventListener('click', () => this.toggle());
        document.body.appendChild(overlay);
    }
    
    removeOverlay() {
        const existing = document.getElementById('chatbotOverlay');
        if (existing) {
            existing.remove();
        }
    }
    
    async sendMessage() {
        const message = this.input.value.trim();
        
        if (!message) return;
        if (this.isLoading) return;
        
        // Show user message
        this.addMessage(message, 'user');
        
        // Clear input
        this.input.value = '';
        this.setLoading(true);
        
        // Add typing indicator
        const typingId = this.showTypingIndicator();
        
        try {
            const response = await this.callAPI(message);
            
            // Remove typing indicator
            this.removeTypingIndicator(typingId);
            
            // Show bot response
            this.addMessage(response, 'bot');
            
        } catch (error) {
            // Remove typing indicator
            this.removeTypingIndicator(typingId);
            
            // Show error
            this.addMessage(`Sorry, I encountered an error: ${error.message}`, 'bot');
            console.error('Chatbot Error:', error);
        }
        
        this.setLoading(false);
        this.scrollToBottom();
    }
    
    async callAPI(message) {
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.API_KEY}`,
                    "HTTP-Referer": window.location.href,
                    "X-Title": "NEXURA AI Assistant"
                },
                body: JSON.stringify({
                    model: this.MODEL,
                    messages: [
                        {
                            role: "system",
                            content: `You are a helpful AI health assistant for NEXURA, a smart medication management system. 
                            You help users with medication reminders, health tips, wellness advice, and general questions. 
                            Be friendly, concise, and informative. If asked about medication, always remind users to consult their doctor.`
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error.message || 'API Error');
            }
            
            if (data.choices && data.choices.length > 0) {
                return data.choices[0].message.content;
            } else {
                throw new Error('No response from AI');
            }
            
        } catch (error) {
            console.error('API Call Error:', error);
            throw error;
        }
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'chatbot-message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'chatbot-message-content';
        
        // Convert newlines to <br> tags
        const paragraphs = text.split('\n').filter(p => p.trim());
        paragraphs.forEach((p, index) => {
            if (index > 0) {
                const br = document.createElement('br');
                content.appendChild(br);
            }
            const pTag = document.createElement('p');
            pTag.textContent = p;
            content.appendChild(pTag);
        });
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        return messageDiv;
    }
    
    showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const div = document.createElement('div');
        div.className = 'chatbot-message bot';
        div.id = id;
        
        const avatar = document.createElement('div');
        avatar.className = 'chatbot-message-avatar';
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'chatbot-message-content';
        content.innerHTML = `
            <div class="chatbot-typing">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        div.appendChild(avatar);
        div.appendChild(content);
        
        this.messagesContainer.appendChild(div);
        this.scrollToBottom();
        
        return id;
    }
    
    removeTypingIndicator(id) {
        const element = document.getElementById(id);
        if (element) {
            element.remove();
        }
    }
    
    setLoading(loading) {
        this.isLoading = loading;
        this.sendBtn.disabled = loading;
        this.input.disabled = loading;
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 50);
    }
    
    // Quick responses (optional)
    getQuickResponses() {
        return [
            '💊 Medication Reminder',
            '📋 Today\'s Schedule',
            '❤️ Health Tips',
            '⏰ Set Reminder'
        ];
    }
}

// ============================================
// GLOBAL FUNCTIONS
// ============================================

let chatbotInstance = null;

function toggleChatbot() {
    if (!chatbotInstance) {
        chatbotInstance = new ChatbotApp();
    }
    chatbotInstance.toggle();
}

function sendChatbotMessage() {
    if (!chatbotInstance) {
        chatbotInstance = new ChatbotApp();
    }
    chatbotInstance.sendMessage();
}

function handleChatbotKeypress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendChatbotMessage();
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Chatbot script loaded');
    // Instance will be created on first use (lazy loading)
});

// Expose for global use
window.toggleChatbot = toggleChatbot;
window.sendChatbotMessage = sendChatbotMessage;
window.handleChatbotKeypress = handleChatbotKeypress;