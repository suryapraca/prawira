// Chat Bot Logic
const toggleChatBtn = document.getElementById('toggle-chat');
const closeChatBtn = document.getElementById('close-chat');
const chatBox = document.getElementById('chat-box');
const chatBody = document.getElementById('chat-body');
const chatOptions = document.getElementById('chat-options');

// Toggle Chat
toggleChatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
    setTimeout(() => {
        chatBox.classList.toggle('scale-0');
    }, 10); // Slight delay for transition
});

closeChatBtn.addEventListener('click', () => {
    chatBox.classList.add('scale-0');
    setTimeout(() => {
        chatBox.classList.add('hidden');
    }, 300);
});

// FAQ Logic
function askBot(topic) {
    // User Message (Visual only, to show what was clicked)
    let userText = '';
    let botResponse = '';

    switch (topic) {
        case 'price':
            userText = '💰 Berapa harga sewanya?';
            botResponse = `
                <b>Harga Sewa Prawira Rentcar:</b><br><br>
                🚗 <b>Avanza/Xenia:</b> Mulai Rp 250rb/24jam (Lepas Kunci)<br>
                🚙 <b>Innova Reborn:</b> Mulai Rp 450rb/24jam<br>
                🚐 <b>Hiace Premio:</b> Mulai Rp 1.2jt (Inc. Driver+BBM)<br>
                🚘 <b>Fortuner VRZ:</b> Mulai Rp 1.5jt (Inc. Driver)<br><br>
                <i>*Harga dapat berubah saat high season</i>
            `;
            break;
        case 'lepas-kunci':
            userText = '🔑 Syarat lepas kunci?';
            botResponse = `
                <b>Syarat Sewa Lepas Kunci:</b><br><br>
                1. E-KTP Asli (Wajib)<br>
                2. SIM A Aktif<br>
                3. NPWP / ID Card Pegawai<br>
                4. Akun Sosmed Aktif (IG/FB)<br>
                5. Bersedia difoto dengan unit<br><br>
                <i>Proses verifikasi cepat cuma 15 menit!</i>
            `;
            break;
        case 'with-driver':
            userText = '👨‍✈️ Fasilitas sewa dengan driver?';
            botResponse = `
                <b>Keuntungan Sewa dengan Driver:</b><br><br>
                ✅ Driver profesional & ramah<br>
                ✅ Hafal rute wisata & kuliner<br>
                ✅ Tidak capek menyetir<br>
                ✅ Tanggung jawab kerusakan unit ada di driver<br><br>
                <i>Biaya makan driver ikut penyewa atau bisa diganti uang makan Rp 50rb/hari.</i>
            `;
            break;
        case 'payment':
            userText = '💳 Metode pembayarannya?';
            botResponse = `
                <b>Metode Pembayaran:</b><br><br>
                Kami menerima pembayaran via:<br>
                🏧 Transfer Bank (BCA, Mandiri, BRI)<br>
                💸 E-Wallet (OVO, GoPay, Dana)<br>
                💵 Tunai di Lokasi<br><br>
                <i>DP minimal 25% untuk booking jadwal.</i>
            `;
            break;
        default:
            return;
    }

    // Append User Bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'flex justify-end animate-fade-in-up';
    userBubble.innerHTML = `
        <div class="bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
            ${userText}
        </div>
    `;
    chatBody.appendChild(userBubble);
    chatOptions.remove(); // Remove options after selection to keep it clean (or can keep them)

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Show Typing Indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'flex gap-3 animate-fade-in-up';
    typingIndicator.id = 'typing-indicator';
    typingIndicator.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 border border-brand-200">
            <img src="logo 1.png" alt="Bot" class="w-5 h-5 object-contain">
        </div>
        <div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-600 flex items-center gap-1">
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
        </div>
    `;
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate Delay and Show Response
    setTimeout(() => {
        document.getElementById('typing-indicator').remove();

        const botBubble = document.createElement('div');
        botBubble.className = 'flex gap-3 animate-fade-in-up';
        botBubble.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 border border-brand-200">
                <img src="logo 1.png" alt="Bot" class="w-5 h-5 object-contain">
            </div>
            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-600">
                ${botResponse}
            </div>
        `;
        chatBody.appendChild(botBubble);

        // Re-append options for further questions
        setTimeout(() => {
            const newOptions = chatOptions.cloneNode(true); // Clone original options
            chatBody.appendChild(newOptions);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);

        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1500);
}

// Add keyframe animation for messages
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.3s ease-out forwards;
    }
`;
document.head.appendChild(styleSheet);
