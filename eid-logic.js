// ده كود الجوائز والنافذة
const gifts = [
    { t: "1000 جنيه (كاش)", m: "مبروك يا وحش! عيش ملك.", i: "💵" },
    { t: "آيفون 17 برو ماكس", m: "هتاخده لما تطلع الأول على الجمهورية!", i: "📱" },
    { t: "نص جنيه مخروم", m: "تذكار نادر من الأدمن.", i: "🥨" },
    { t: "دعوة من القلب", m: "يا رب تنجح وتدخل الكلية اللي نفسك فيها.", i: "🤲" }
];

// أول ما الصفحة تفتح، بنجهز "النافذة" في الخلفية
document.body.insertAdjacentHTML('beforeend', `
    <div id="eidModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; align-items: center; justify-content: center; backdrop-filter: blur(10px); font-family: sans-serif;">
        <div style="background: #fff; color: #000; width: 90%; max-width: 400px; padding: 30px; border-radius: 30px; border: 8px solid #ffcc00; text-align: center;">
            <div id="loadingView">
                <h2 style="color:#ffcc00">🎲 بننقي لك العيدية...</h2>
            </div>
            <div id="resultView" style="display:none;">
                <span id="resIcon" style="font-size: 80px; display: block;"></span>
                <h2 id="resPrize" style="font-size: 28px; font-weight: 900; margin: 10px 0; color: #ff4757;"></h2>
                <p id="resMsg" style="font-weight:bold; margin-bottom:20px;"></p>
                <button onclick="document.getElementById('eidModal').style.display='none'" style="background: #000; color: #fff; padding: 12px; border-radius: 10px; width: 100%; border: none; cursor: pointer; font-weight: bold;">شكراً يا أدمن 😂</button>
            </div>
        </div>
    </div>
`);

// دي الوظيفة اللي الزرار بتاعك هينادي عليها
function claimEdeya() {
    if (localStorage.getItem("eid_2026")) {
        alert("هي مرة واحدة بس يا بطل! 😂");
        return;
    }
    document.getElementById("eidModal").style.display = "flex";
    setTimeout(() => {
        const pick = gifts[Math.floor(Math.random() * gifts.length)];
        document.getElementById("loadingView").style.display = "none";
        document.getElementById("resultView").style.display = "block";
        document.getElementById("resIcon").innerText = pick.i;
        document.getElementById("resPrize").innerText = pick.t;
        document.getElementById("resMsg").innerText = pick.m;
        localStorage.setItem("eid_2026", "true");
    }, 1500);
}
