// قائمة الجوائز المحدثة - منصة تانية ثانوي الرسمية 🌙
const gifts = [
    // فئة البرستيج
    { t: "آيفون 17 برو ماكس", m: "مبروك يا بطل! الجهاز هيوصلك أول ما تطلع الأول على الجمهورية في تالتة ثانوي.. شد حيلك!", i: "📱" },
    { t: "1000 جنيه (كاش)", m: "مبروك يا وحش! روح اشتري بيهم بنك الحظ كله وعيش ملك في العيد.", i: "💵" },
    { t: "عزومة كباب وكفتة", m: "المنصة عزماك على غدوة فاخرة.. بس الحساب على زميلك اللي بعتلك لينك المنصة! 😂", i: "🍗" },
    
    // فئة الفلوس
    { t: "200 جنيه عيدية", m: "عيدية محترمة جداً.. كفاية كحك وبسكويت النهاردة وانزل اتفسح يا نجم.", i: "💰" },
    { t: "100 جنيه (نوطة واحدة)", m: "مروقين عليك أهو.. روح جيب بيهم كيس شيبسي عائلي وادعي للأدمن.", i: "💸" },
    { t: "50 جنيه ناشفة", m: "خمسين جنيه بحالها.. تصرفها في الهنا وفي دروس الفيزياء يا بطل.", i: "💵" },

    // فئة الهزار والفقر الجميل
    { t: "20 جنيه (مكرمشة)", m: "دي كانت في جيب الجاكيت من الشتا اللي فات.. بركة برضه!", i: "📉" },
    { t: "نص جنيه مخروم", m: "تذكار نادر من المنصة.. روحي بوسي إيد طنط وقوليها المنصة بتعيد عليكي! 🥨", i: "🪙" },
    { t: "بريزة (10 قروش)", m: "دي أثرية من أيام الوزرا القدام.. شيلها للزمن يمكن تغلى في تالتة ثانوي.", i: "👴" },
    
    // فئة الدحيحة والقلب الطيب
    { t: "ذاكر أول يوم العيد", m: "دي أحلى عيدية.. افتح صفحة واحدة بس كيمياء عشان الضمير مأنبش يا دحيح! 🧪", i: "📚" },
    { t: "دعوة من القلب", m: "يا رب تخلص من تانية ثانوي على خير وتدخل الكلية اللي نفسك فيها وتفرح أهلك.", i: "🤲" },
    { t: "بوسة من الأدمن", m: "أغلى حاجة في المنصة والله.. كل سنة وأنت طيب يا حبيب قلبي. 😘", i: "❤️" },
    { t: "حظ أوفر (للأسف)", m: "حظك النهاردة راح يشتري لبس العيد ولسه مجاش.. جرب السنة الجاية! 😂", i: "🤷‍♂️" }
];

// إنشاء نافذة العيدية (المودال) تلقائياً عند تحميل الملف
document.body.insertAdjacentHTML('beforeend', `
    <div id="eidModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; align-items: center; justify-content: center; backdrop-filter: blur(10px); font-family: 'Cairo', sans-serif; direction: rtl;">
        <div style="background: #fff; color: #000; width: 90%; max-width: 400px; padding: 30px; border-radius: 30px; border: 8px solid #ffcc00; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div id="loadingView">
                <h2 style="color:#ffcc00; margin-bottom: 20px;">🎲 جاري سحب العيدية...</h2>
                <div style="width: 50px; height: 50px; border: 5px solid #f3f3f3; border-top: 5px solid #ffcc00; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
                <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
            </div>
            <div id="resultView" style="display:none;">
                <span id="resIcon" style="font-size: 80px; display: block;"></span>
                <h2 id="resPrize" style="font-size: 28px; font-weight: 900; margin: 15px 0; color: #ff4757;"></h2>
                <p id="resMsg" style="font-size: 18px; line-height: 1.6; color: #333; margin-bottom: 25px;"></p>
                <button onclick="document.getElementById('eidModal').style.display='none'" style="background: #000; color: #fff; padding: 15px; border-radius: 15px; width: 100%; border: none; cursor: pointer; font-size: 18px; font-weight: bold; transition: 0.3s;">رضينا بالمكتوب 😂</button>
            </div>
        </div>
    </div>
`);

// الوظيفة الأساسية للزرار
function claimEdeya() {
    // التأكد إذا كان الطالب أخذ العيدية مسبقاً
    if (localStorage.getItem("eid_claimed_2026")) {
        alert("إيه يا وحش؟ هي تكية؟ خدت عيديتك مرة خلاص، روح كُل كحك بقى! 😂");
        return;
    }

    document.getElementById("eidModal").style.display = "flex";
    document.getElementById("loadingView").style.display = "block";
    document.getElementById("resultView").style.display = "none";

    // محاكاة وقت السحب
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * gifts.length);
        const prize = gifts[randomIndex];
        
        document.getElementById("loadingView").style.display = "none";
        document.getElementById("resultView").style.display = "block";
        
        document.getElementById("resIcon").innerText = prize.i;
        document.getElementById("resPrize").innerText = prize.t;
        document.getElementById("resMsg").innerText = prize.m;
        
        // حفظ الحالة عشان مياخدش تاني
        localStorage.setItem("eid_claimed_2026", "true");
        
        // تغيير شكل الزرار الأصلي بعد السحب
        const mainBtn = document.getElementById("giftBtn");
        if(mainBtn) {
            mainBtn.innerText = "عيدك مبارك يا بطل ❤️";
            mainBtn.style.background = "#444";
            mainBtn.style.boxShadow = "none";
        }
    }, 2000);
}
