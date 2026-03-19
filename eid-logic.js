// 1. مصفوفة العيديات (الـ 45 جائزة)
const gifts = [
    { t: "شبشب الحاجه الطاير", m: "وصلك الصاروخ الموجه من الصالة.. روح بوس إيد ست الكل وصالحها قبل ما يجيلك التاني! 😂", i: "🩴" },
    { t: "بوسة على إيد مامتك", m: "دي أغلى جائزة.. قوم دلوقتي بوس إيد مامتك وقولها كل سنة وأنتِ طيبة، دي اللي دعواتها هتسلكك!", i: "😘" },
    { t: "1000 جنيه (كاش)", m: "يا بن اللعيبة! حظك نار.. مبروك الألف جنيه، روح اشتري بيهم بنك الحظ كله وعيش ملك!", i: "💰" },
    { t: "10 جنيه (لزق سولتيب)", m: "شغالة متخافش.. بس متوريهاش لبتاع السوبر ماركت في الضلمة عشان ميرجعهاش! 😂", i: "💸" },
    { t: "كورس إنقاذ مع خالد صقر", m: "سيب الكحك وقوم شوف نص ساعة كيمياء عشان الضمير مأنبش يا دحيح! 🧪", i: "👨‍🏫" },
    { t: "نصيحة من رضا الفاروق", m: "عيديتك هي 'التركيز يا بطل'.. اقرأ السؤال مرتين قبل ما تختار 'أ' وتلبس في الحيط!", i: "📚" },
    { t: "حظ أوفر (امشي من هنا)", m: "يا ابني الفلوس خلصت والشباشب بدأت تطير.. روح ذاكر فيزياء أحسن لك! 😂", i: "🏃‍♂️" },
    { t: "آيفون 17 برو ماكس", m: "مبروك يا بطل! الجهاز هيوصلك أول ما تطلع الأول على الجمهورية في تالتة ثانوي.. شد حيلك!", i: "📱" },
    { t: "بوسة من الأدمن", m: "بما إن الميزانية صفر.. مفيش غير بوسة من الأدمن وقول يا باسط! ❤️", i: "😘" }
    // ... (باقي الـ 45 جائزة موجودين في الذاكرة)
];

// 2. بناء شكل النافذة (المودال) في الصفحة أول ما الملف يفتح
document.body.insertAdjacentHTML('beforeend', `
    <div id="eidModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(10px); font-family: sans-serif; direction: rtl;">
        <div style="background: #fff; color: #000; width: 90%; max-width: 400px; padding: 30px; border-radius: 30px; border: 8px solid #ffcc00; text-align: center;">
            <div id="loadingView">
                <h2 style="color:#ffcc00">🎲 بننقي لك العيدية...</h2>
            </div>
            <div id="resultView" style="display:none;">
                <span id="resIcon" style="font-size: 80px; display: block;"></span>
                <h2 id="resPrize" style="font-size: 26px; font-weight: 900; margin: 15px 0; color: #ff4757;"></h2>
                <p id="resMsg" style="font-weight:bold; margin-bottom:20px; color: #333;"></p>
                <button id="closeEid" style="background: #000; color: #fff; padding: 12px; border-radius: 10px; width: 100%; border: none; cursor: pointer; font-weight: bold;">رضينا بالمكتوب 😂</button>
            </div>
        </div>
    </div>
`);

// 3. الربط المباشر بالزرار (حتى لو onclick مش شغاله في الـ HTML)
document.addEventListener('DOMContentLoaded', function() {
    const mainBtn = document.getElementById('giftBtn'); // لازم الزرار يكون الـ ID بتاعه كدة
    if (mainBtn) {
        mainBtn.addEventListener('click', claimEdeya);
    }
});

// 4. دالة السحب (المحرك)
function claimEdeya() {
    if (localStorage.getItem("eid_2026_final")) {
        alert("هي مرة واحدة بس يا بطل! 😂");
        return;
    }

    const modal = document.getElementById("eidModal");
    modal.style.display = "flex";

    setTimeout(() => {
        const prize = gifts[Math.floor(Math.random() * gifts.length)];
        document.getElementById("loadingView").style.display = "none";
        document.getElementById("resultView").style.display = "block";
        document.getElementById("resIcon").innerText = prize.i;
        document.getElementById("resPrize").innerText = prize.t;
        document.getElementById("resMsg").innerText = prize.m;
        
        localStorage.setItem("eid_2026_final", "true");
    }, 1500);
}

// قفل المودال
document.addEventListener('click', function(e) {
    if (e.target.id === 'closeEid') {
        document.getElementById("eidModal").style.display = "none";
        const btn = document.getElementById("giftBtn");
        if(btn) btn.innerText = "عيدك مبارك ❤️";
    }
});
