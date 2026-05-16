// FAQ data — The Buddy Patch
// Each FAQ has Thai + English versions of question + answer
// Answers are HTML strings (sanitized: only basic tags used)

window.FAQ_CATEGORIES = [
  { id: "start",   icon: "rocket",     th: "ข้อมูลทั่วไป",       en: "General Info" },
  { id: "safety",  icon: "shield",     th: "แผ่นแปะเหมาะกับใคร", en: "Who It's For" },
  { id: "tech",    icon: "molecule",   th: "เทคโนโลยี",          en: "Technology" },
  { id: "blends",  icon: "leaf",       th: "วิตามินและสารสกัด",  en: "Vitamins & Extracts" },
  { id: "ship",    icon: "box",        th: "การจัดส่ง",          en: "Shipping" },
  { id: "contact", icon: "chat",       th: "ติดต่อเรา",            en: "Contact" }
];

window.FAQ_ITEMS = [
  // ─── GETTING STARTED ───────────────────────────────────────────────
  {
    id: "how-to-use", category: "start", sku: "all", popular: true,
    q_th: "วิธีใช้ The Buddy Patch ทำยังไง?",
    q_en: "How do I use The Buddy Patch?",
    a_th: `<p>ใช้งานง่ายแค่ <strong>3 ขั้นตอน:</strong></p>
      <ol>
        <li>แกะแผ่นแปะออกจากซอง กดให้แผ่นแปะให้แนบสนิทกับผิวหนัง</li>
        <li>เลือกตำแหน่งที่แห้งและไม่มีขน เช่น แขนด้านใน เหนือหน้าอก</li>
        <li>เพื่อประสิทธิภาพที่ดีที่สุด แนะนำให้แปะอย่างน้อย 4-8 ชั่วโมง</li>
      </ol>
      <div class="callout">
        <strong>ข้อควรระวัง</strong>
        <ul>
          <li>ห้ามแปะตรงบริเวณที่มีแผล หรือบริเวณที่มีการทาครีม / โลชั่น / ออย</li>
          <li>แผ่นแปะ 1 แผ่นใช้ได้ 1 ครั้ง ไม่สามารถใช้ซ้ำได้ แปะแผ่นแปะครั้งละ 1 แผ่น</li>
          <li>ผู้ที่มีประวัติแพ้พลาสเตอร์ปิดแผล ให้ทดลองแปะ 15-30 นาทีก่อน</li>
        </ul>
      </div>`,
    a_en: `<p>Just <strong>3 simple steps:</strong></p>
      <ol>
        <li>Peel the patch from the pouch and press it firmly onto your skin.</li>
        <li>Choose a dry, hair-free area such as the inner arm or upper chest.</li>
        <li>For best results, wear for at least 4-8 hours.</li>
      </ol>
      <div class="callout">
        <strong>Heads up</strong>
        <ul>
          <li>Don't apply over broken skin, or areas with lotion / cream / oil.</li>
          <li>One patch is single-use — never reuse. Wear one patch at a time.</li>
          <li>If you have a history of bandage-adhesive sensitivity, test for 15-30 minutes first.</li>
        </ul>
      </div>`
  },
  {
    id: "best-spot", category: "start", sku: "all", popular: true,
    q_th: "ตำแหน่งไหนแปะดีที่สุด?",
    q_en: "Where's the best spot to apply it?",
    a_th: `<p>แปะผิวบริเวณ ไม่มีขน · ไม่มีการทาผลิตภัณฑ์บำรุงผิว เพื่อให้แผ่นแปะติดแนบสนิทได้ดีที่สุด</p>
      <div class="two-col">
        <div>
          <div class="col-head good">ตำแหน่งแนะนำ</div>
          <ul class="tick">
            <li>ด้านในของแขนใต้ข้อมือ</li>
            <li>ต้นแขนด้านใน</li>
            <li>เหนือหน้าอก</li>
            <li>ต้นคอ</li>
          </ul>
        </div>
        <div>
          <div class="col-head bad">ตำแหน่งที่ควรเลี่ยง</div>
          <ul class="cross">
            <li>บริเวณที่มีแผล รอยถลอก</li>
            <li>บริเวณที่ทาครีม / โลชั่น / น้ำมัน / น้ำหอม</li>
            <li>บริเวณเปียกหรือเหงื่อออก</li>
            <li>บริเวณที่มีขนเยอะ</li>
          </ul>
        </div>
      </div>`,
    a_en: `<p>Apply to skin that is <strong>hair-free and not moisturized</strong> so the patch sits flush against the skin.</p>
      <div class="two-col">
        <div>
          <div class="col-head good">Recommended</div>
          <ul class="tick">
            <li>Inner forearm (below the wrist)</li>
            <li>Upper inner arm</li>
            <li>Upper chest</li>
            <li>Back of the neck</li>
          </ul>
        </div>
        <div>
          <div class="col-head bad">Avoid</div>
          <ul class="cross">
            <li>Broken skin, cuts, abrasions</li>
            <li>Areas with cream / lotion / oil / perfume</li>
            <li>Wet or sweaty areas</li>
            <li>Hairy areas</li>
          </ul>
        </div>
      </div>`
  },
  {
    id: "how-long-wear", category: "start", sku: "all",
    q_th: "แปะได้นานแค่ไหน?",
    q_en: "How long do I keep the patch on?",
    a_th: `<p>สามารถแปะได้นานสูงสุด <strong>8 ชั่วโมง</strong> สำหรับการแปะ 1 แผ่น</p>
      <p>ระบบ <strong>Slow-Release</strong> จะค่อย ๆ ปล่อยวิตามินและสารสกัดอย่างต่อเนื่อง เมื่อครบ 8 ชั่วโมงให้ลอกแผ่นแปะออก</p>`,
    a_en: `<p>Wear for up to <strong>8 hours</strong> per patch.</p>
      <p>Our <strong>Slow-Release</strong> system delivers vitamins and extracts gradually. Peel off once the 8 hours are up.</p>`
  },
  {
    id: "when-effect", category: "start", sku: "all", popular: true,
    q_th: "ใช้เวลานานแค่ไหนถึงเห็นผล?",
    q_en: "How fast does it kick in?",
    a_th: `<p><strong>ออกฤทธิ์หลังแปะ 30 นาที - 1 ชั่วโมง</strong></p>
      <p>วิตามินและสารสกัดในแผ่นแปะต้องใช้เวลาในการออกฤทธิ์ 30 นาที - 1 ชั่วโมงตามงานวิจัย หลังจากนั้นจะค่อย ๆ ทำงานต่อเนื่องไปจนครบ 8 ชั่วโมง</p>
      <div class="tip">💡 <strong>Tip:</strong> แปะ <em>Relax Patch</em> ก่อนเดินทาง 30-60 นาที เพื่อให้พักผ่อนระหว่างเดินทางได้ดีขึ้น</div>`,
    a_en: `<p><strong>Active in 30 minutes – 1 hour after applying.</strong></p>
      <p>Research shows the vitamins and extracts in the patch take 30-60 minutes to reach effect, then keep working steadily for the full 8 hours.</p>
      <div class="tip">💡 <strong>Tip:</strong> Apply <em>Relax Patch</em> 30-60 minutes before travel for better rest along the way.</div>`
  },
  {
    id: "when-apply", category: "start", sku: "all",
    q_th: "แปะเวลาไหนของแต่ละสูตรดีที่สุด?",
    q_en: "When should I apply each formula?",
    a_th: `<table class="dt">
      <tr><th>สูตร</th><th>ช่วงเวลาที่แนะนำ</th></tr>
      <tr><td><span class="dot focus"></span> <strong>Focus Mode</strong></td><td>ก่อนทำงาน / เรียน / อ่านหนังสือ อย่างน้อย 30-60 นาที</td></tr>
      <tr><td><span class="dot revive"></span> <strong>Relax Mode</strong></td><td>ก่อนเข้านอน / เวลารู้สึกเครียด / ใช้ระหว่างเดินทางนาน ๆ เช่น ขึ้นเครื่องบิน นั่งรถไฟ</td></tr>
      <tr><td><span class="dot night"></span> <strong>Night Out Mode</strong></td><td>ก่อนดื่ม 30-60 นาที ช่วยให้สนุกได้นานขึ้น / ระหว่างหรือหลังดื่ม ช่วยให้ตื่นมาสดชื่น</td></tr>
    </table>`,
    a_en: `<table class="dt">
      <tr><th>Formula</th><th>Best timing</th></tr>
      <tr><td><span class="dot focus"></span> <strong>Focus Mode</strong></td><td>At least 30-60 min before work / study / reading</td></tr>
      <tr><td><span class="dot revive"></span> <strong>Relax Mode</strong></td><td>Before bed / when stressed / on long-haul travel (flights, trains)</td></tr>
      <tr><td><span class="dot night"></span> <strong>Night Out Mode</strong></td><td>30-60 min before drinking (longer fun) / during or after (fresh next morning)</td></tr>
    </table>`
  },
  {
    id: "multi-patch", category: "start", sku: "all",
    q_th: "แปะหลายแผ่นพร้อมกันได้ไหม?",
    q_en: "Can I wear multiple patches at once?",
    a_th: `<p><strong>แนะนำให้แปะครั้งละ 1 แผ่นต่อการใช้งาน</strong> เนื่องจาก 1 แผ่นมีปริมาณวิตามินและสารสกัดเพียงพอในการเห็นผล</p>
      <p>🔄 <strong>แปะหลายสูตรใน 1 วันได้</strong> เช่น ตอนเช้าแปะ Focus - เย็นแปะ Relax แต่ <em>ไม่แปะพร้อมกัน</em> ในช่วงเวลาเดียวกัน</p>`,
    a_en: `<p><strong>Wear one patch at a time</strong> — one patch already carries enough vitamins and extracts for full effect.</p>
      <p>🔄 <strong>You can wear different formulas in one day</strong> — e.g. Focus in the morning, Relax in the evening — just <em>not overlapping</em> at the same time.</p>`
  },
  {
    id: "storage", category: "start", sku: "all",
    q_th: "เก็บรักษายังไง?",
    q_en: "How should I store them?",
    a_th: `<ul>
      <li>เก็บในที่ <strong>แห้ง ไม่มีความชื้น</strong></li>
      <li>เลี่ยงแสงแดดโดยตรง</li>
      <li><strong>เก็บให้พ้นมือเด็ก</strong></li>
    </ul>`,
    a_en: `<ul>
      <li>Store in a <strong>dry, low-humidity</strong> place</li>
      <li>Avoid direct sunlight</li>
      <li><strong>Keep out of reach of children</strong></li>
    </ul>`
  },
  {
    id: "waterproof", category: "start", sku: "all",
    q_th: "แผ่นแปะกันน้ำไหม?",
    q_en: "Is the patch waterproof?",
    a_th: `<p>สามารถกันละอองน้ำได้ เช่น ล้างมือ น้ำกระเด็น แต่<strong>ไม่แนะนำให้แปะแล้วอาบน้ำ ว่ายน้ำ หรือออกกำลังที่เหงื่อออก</strong> เนื่องจากอาจจะรบกวนการทำงานของแผ่นแปะและอาจทำให้หลุดง่ายได้</p>`,
    a_en: `<p>Splash-resistant — handwashing and incidental water are fine. But <strong>don't shower, swim, or do heavy-sweat workouts</strong> while wearing it, as moisture may interfere with the patch and cause it to peel off.</p>`
  },
  {
    id: "reuse", category: "start", sku: "all",
    q_th: "ลอกออกแล้วแปะซ้ำได้ไหม?",
    q_en: "Can I re-stick a patch after peeling it off?",
    a_th: `<p><strong>ไม่ได้</strong> แผ่นแปะใช้ได้ครั้งเดียว ไม่สามารถนำกลับมาใช้ซ้ำได้</p>
      <div class="tip">💡 <strong>Tip:</strong> แปะให้แนบสนิทตั้งแต่ครั้งแรก ไม่ให้มีมุมเผยอ</div>`,
    a_en: `<p><strong>No.</strong> Patches are single-use — once peeled, they can't be reused.</p>
      <div class="tip">💡 <strong>Tip:</strong> Press firmly from the first try, leaving no lifted edges.</div>`
  },

  // ─── SAFETY ────────────────────────────────────────────────────────
  {
    id: "who-can-use", category: "safety", sku: "all",
    q_th: "ใครใช้ The Buddy Patch ได้?",
    q_en: "Who can use The Buddy Patch?",
    a_th: `<p>ใช้ได้กับ <strong>ทุกเพศ ทุกวัย ตั้งแต่ 12 ปีขึ้นไป</strong></p>
      <p>ทั้งสายเดินทาง · สายบินดึก · สายทำงาน · สายปาร์ตี้ ออกแบบมาเพื่อเป็นส่วนหนึ่งของชีวิตประจำวันของทุกคน</p>`,
    a_en: `<p>Anyone <strong>aged 12 and up</strong>, regardless of gender.</p>
      <p>Travelers · late-night flyers · knowledge workers · social butterflies — designed to slot into anyone's everyday.</p>`
  },
  {
    id: "who-should-avoid", category: "safety", sku: "all", popular: true,
    q_th: "ใครควรเลี่ยง / ปรึกษาแพทย์ก่อนใช้?",
    q_en: "Who should avoid it or check with a doctor first?",
    a_th: `<div class="callout danger">
        <strong>🔴 กลุ่มที่ควรเลี่ยง</strong>
        <ul>
          <li>เด็กอายุต่ำกว่า 12 ปี</li>
          <li>ผู้ที่ตั้งครรภ์ ให้นมบุตร หรือวางแผนมีบุตร</li>
        </ul>
      </div>
      <div class="callout warn">
        <strong>🟡 กลุ่มที่ควรปรึกษาแพทย์ก่อน</strong>
        <ul>
          <li>ผู้ที่มีโรคประจำตัว</li>
          <li>ผู้ที่รับประทานยารักษาโรคบางอย่างอยู่เป็นประจำ</li>
        </ul>
      </div>
      <p class="muted">หากไม่แน่ใจสามารถสอบถามแอดมินก่อนใช้ได้ที่ <a href="https://lin.ee/HFaPgO8">LINE OA</a> · แผ่นแปะไม่มีผลในการรักษาโรค</p>`,
    a_en: `<div class="callout danger">
        <strong>🔴 Avoid if you are</strong>
        <ul>
          <li>Under 12 years old</li>
          <li>Pregnant, breastfeeding, or planning for pregnancy</li>
        </ul>
      </div>
      <div class="callout warn">
        <strong>🟡 Consult a doctor first if you</strong>
        <ul>
          <li>Have chronic conditions</li>
          <li>Take regular prescription medication</li>
        </ul>
      </div>
      <p class="muted">Not sure? Message us on <a href="https://lin.ee/HFaPgO8">LINE OA</a> first · the patch is not intended to treat or cure any disease.</p>`
  },

  {
    id: "kids", category: "safety", sku: "all",
    q_th: "เด็กใช้ได้ไหม?",
    q_en: "Is it safe for children?",
    a_th: `<p><strong>แนะนำให้ใช้ในเด็กอายุ 12 ปีขึ้นไปเท่านั้น</strong></p>`,
    a_en: `<p><strong>Recommended for ages 12 and up only.</strong></p>`
  },

  // ─── TECHNOLOGY ────────────────────────────────────────────────────
  {
    id: "what-is", category: "tech", sku: "all", popular: true,
    q_th: "The Buddy Patch คืออะไร?",
    q_en: "What exactly is The Buddy Patch?",
    a_th: `<p><strong>The Buddy Patch</strong> คือ <em>Transdermal Patch</em> แผ่นแปะที่มีวิตามินและสารสกัดธรรมชาติ</p>
      <p>วิตามินและสารสกัดบนแผ่นถูกออกแบบให้มีโมเลกุลเล็กเพียงพอที่จะ <strong>ซึมผ่านผิวหนังได้โดยตรง</strong> โดยไม่ถูกรบกวนด้วยระบบย่อยอาหาร เป็นทางเลือกให้กับผู้ที่ไม่อยากทานเป็นแบบเม็ด</p>
      <p>เทคโนโลยีเดียวกับ <strong>แผ่นแปะนิโคติน</strong> (เลิกบุหรี่) และ <strong>แผ่นแปะคุมกำเนิด</strong> ที่ใช้กันแพร่หลายทั่วโลก</p>`,
    a_en: `<p><strong>The Buddy Patch</strong> is a <em>Transdermal Patch</em> — a wear-on-skin supplement carrying vitamins and natural extracts.</p>
      <p>The actives are formulated as molecules small enough to <strong>cross the skin barrier directly</strong> without going through the digestive system — a real option for anyone who'd rather skip pills.</p>
      <p>Same technology as <strong>nicotine patches</strong> (smoking cessation) and <strong>contraceptive patches</strong> used worldwide.</p>`
  },
  {
    id: "slow-release", category: "tech", sku: "all",
    q_th: "Slow-Release คืออะไร?",
    q_en: "What is slow-release?",
    a_th: `<p><strong>Slow-Release</strong> = กลไกที่แผ่นแปะค่อย ๆ ปล่อยวิตามินและสารสกัดอย่างต่อเนื่องตลอดเวลาใช้งาน ซึ่งจะช่วยในการคงระดับวิตามินและสารสกัดให้คงที่ตลอดเวลาการใช้งาน</p>`,
    a_en: `<p><strong>Slow-Release</strong> = the mechanism that gradually releases vitamins and extracts throughout the wear time, keeping levels steady across the full session.</p>`
  },
  {
    id: "vs-pills", category: "tech", sku: "all", popular: true,
    q_th: "ต่างจากวิตามินเม็ดยังไง?",
    q_en: "How is this different from vitamin pills?",
    a_th: `<table class="dt cmp">
      <tr><th></th><th>💊 วิตามินแบบเม็ด</th><th>🩹 The Buddy Patch</th></tr>
      <tr><td>เส้นทาง</td><td>ย่อย → ตับ → เลือด</td><td>ผิวหนัง → เลือด <em>(bypass)</em></td></tr>
      <tr><td>ระยะเวลา</td><td>สั้น เป็นช่วง ๆ</td><td>ต่อเนื่อง 8 ชม.</td></tr>
      <tr><td>สารก่อแพ้</td><td>อาจมีกลูเตน · ไข่ · แป้ง</td><td>Latex Free + Gluten Free</td></tr>
      <tr><td>ปริมาณ</td><td>สูงต่อหน่วย</td><td>น้อยกว่า แต่ดูดซึมดีกว่า</td></tr>
    </table>`,
    a_en: `<table class="dt cmp">
      <tr><th></th><th>💊 Vitamin pills</th><th>🩹 The Buddy Patch</th></tr>
      <tr><td>Route</td><td>Gut → liver → blood</td><td>Skin → blood <em>(bypass)</em></td></tr>
      <tr><td>Duration</td><td>Short, in bursts</td><td>Continuous 8 h</td></tr>
      <tr><td>Allergens</td><td>May contain gluten · egg · fillers</td><td>Latex Free + Gluten Free</td></tr>
      <tr><td>Dose</td><td>Higher per unit</td><td>Lower, but better absorbed</td></tr>
    </table>`
  },

  // ─── FORMULAS ──────────────────────────────────────────────────────
  {
    id: "formulas", category: "blends", sku: "all", popular: true,
    q_th: "มีกี่สูตร แต่ละสูตรช่วยอะไร?",
    q_en: "How many formulas, and what does each do?",
    a_th: `<table class="dt fm">
      <tr><th>สูตร</th><th>ช่วยเรื่องอะไร</th><th>เหมาะกับสายไหน</th></tr>
      <tr><td><span class="sku-tag focus">Focus Mode</span></td><td>บำรุงสมอง · เสริมสมาธิและความจำ</td><td>สายทำงาน · สายเรียน</td></tr>
      <tr><td><span class="sku-tag revive">Relax Mode</span></td><td>ผ่อนคลาย · นอนหลับลึก · ตื่นมาสดชื่น</td><td>สายเดินทาง · สายนอนยาก</td></tr>
      <tr><td><span class="sku-tag night">Night Out Mode</span></td><td>ไม่แฮงค์ · ดื่มสนุกขึ้น</td><td>สายดื่ม · สายปาร์ตี้</td></tr>
    </table>`,
    a_en: `<table class="dt fm">
      <tr><th>Formula</th><th>What it helps</th><th>Who it's for</th></tr>
      <tr><td><span class="sku-tag focus">Focus Mode</span></td><td>Brain support · sharper focus and memory</td><td>Knowledge workers · students</td></tr>
      <tr><td><span class="sku-tag revive">Relax Mode</span></td><td>Unwind · deeper sleep · fresh mornings</td><td>Travelers · light sleepers</td></tr>
      <tr><td><span class="sku-tag night">Night Out Mode</span></td><td>No hangover · drink longer</td><td>Social drinkers · partygoers</td></tr>
    </table>`
  },
  {
    id: "focus-ing", category: "blends", sku: "focus",
    q_th: "Focus Patch มีส่วนประกอบอะไร?",
    q_en: "What's in Focus Patch?",
    a_th: `<p><strong>สารสกัดหลัก:</strong></p>
      <ul>
        <li>🌿 <strong>Ginkgo Biloba</strong> (ใบแปะก๊วย)</li>
        <li>⚡ <strong>L-Carnitine</strong></li>
        <li>🍃 <strong>Centella Asiatica</strong> (ใบบัวบก)</li>
      </ul>`,
    a_en: `<p><strong>Key extracts:</strong></p>
      <ul>
        <li>🌿 <strong>Ginkgo Biloba</strong></li>
        <li>⚡ <strong>L-Carnitine</strong></li>
        <li>🍃 <strong>Centella Asiatica</strong></li>
      </ul>`
  },
  {
    id: "revive-ing", category: "blends", sku: "revive",
    q_th: "Revive มีส่วนประกอบอะไร?",
    q_en: "What's in Revive?",
    a_th: `<p><strong>สารสกัดหลัก:</strong></p>
      <ul>
        <li>🌼 <strong>Marigold</strong> (ดอกดาวเรือง)</li>
        <li>🌿 <strong>Valerian Root</strong> (รากวาเลอเรียน)</li>
        <li>🍵 <strong>L-Theanine</strong></li>
        <li>🌸 <strong>Hops</strong></li>
        <li>🌱 <strong>Ashwagandha</strong> (โสมอินเดีย)</li>
        <li>💚 <strong>GABA</strong></li>
      </ul>`,
    a_en: `<p><strong>Key extracts:</strong></p>
      <ul>
        <li>🌼 <strong>Marigold</strong></li>
        <li>🌿 <strong>Valerian Root</strong></li>
        <li>🍵 <strong>L-Theanine</strong></li>
        <li>🌸 <strong>Hops</strong></li>
        <li>🌱 <strong>Ashwagandha</strong></li>
        <li>💚 <strong>GABA</strong></li>
      </ul>`
  },
  {
    id: "night-ing", category: "blends", sku: "night",
    q_th: "Night Out Patch มีส่วนประกอบอะไร?",
    q_en: "What's in Night Out Patch?",
    a_th: `<p><strong>สารสกัดหลัก:</strong></p>
      <ul>
        <li>🍵 <strong>Green Tea Extract</strong> (ชาเขียว)</li>
        <li>🌿 <strong>Milk Thistle</strong></li>
        <li>💪 <strong>NAC</strong> (N-Acetylcysteine)</li>
        <li>❤️ <strong>CoQ10</strong></li>
        <li>🌼 <strong>หญ้าดอกขาว</strong> (Vernonia Cinerea)</li>
        <li>🍃 <strong>ว่านรางจืด</strong> (Thunbergia Laurifolia)</li>
      </ul>`,
    a_en: `<p><strong>Key extracts:</strong></p>
      <ul>
        <li>🍵 <strong>Green Tea Extract</strong></li>
        <li>🌿 <strong>Milk Thistle</strong></li>
        <li>💪 <strong>NAC</strong> (N-Acetylcysteine)</li>
        <li>❤️ <strong>CoQ10</strong></li>
        <li>🌼 <strong>Vernonia Cinerea</strong></li>
        <li>🍃 <strong>Thunbergia Laurifolia</strong></li>
      </ul>`
  },

  // ─── SHIPPING ──────────────────────────────────────────────────────
  {
    id: "ship-time", category: "ship", sku: "all", popular: true,
    q_th: "ใช้เวลาส่งกี่วัน?",
    q_en: "How long does shipping take?",
    a_th: `<ul>
      <li><strong>กทม. + ปริมณฑล:</strong> 1-3 วันทำการหลังสั่งซื้อ</li>
      <li><strong>ต่างจังหวัด:</strong> 3-5 วันทำการ (ขึ้นอยู่กับพื้นที่)</li>
    </ul>`,
    a_en: `<ul>
      <li><strong>Bangkok + metropolitan area:</strong> 1-3 business days</li>
      <li><strong>Upcountry:</strong> 3-5 business days (depends on location)</li>
    </ul>`
  },
  {
    id: "ship-express", category: "ship", sku: "all",
    q_th: "มีจัดส่งด่วน / ส่งวันนี้ไหม?",
    q_en: "Is there same-day or express shipping?",
    a_th: `<p><strong>มีบริการส่งด่วน</strong> สำหรับลูกค้าในกรุงเทพและปริมณฑล ติดต่อแอดมินที่ <a href="https://lin.ee/HFaPgO8">LINE OA</a></p>`,
    a_en: `<p><strong>Express shipping available</strong> for customers in Bangkok and the metropolitan area. Message our admins on <a href="https://lin.ee/HFaPgO8">LINE OA</a>.</p>`
  },
  {
    id: "ship-cost", category: "ship", sku: "all", popular: true,
    q_th: "ค่าจัดส่งเท่าไหร่?",
    q_en: "What does shipping cost?",
    a_th: `<p class="muted">ติดต่อสอบถามค่าจัดส่งที่ <a href="https://lin.ee/HFaPgO8">LINE OA</a></p>`,
    a_en: `<p class="muted">Message <a href="https://lin.ee/HFaPgO8">LINE OA</a> to ask about shipping fees.</p>`
  },

  // ─── CONTACT ───────────────────────────────────────────────────────
  {
    id: "contact-where", category: "contact", sku: "all",
    q_th: "ติดต่อที่ไหนได้บ้าง?",
    q_en: "How do I get in touch?",
    a_th: `<table class="dt ct">
      <tr><th>ช่องทาง</th></tr>
      <tr><td>💚 <a href="https://lin.ee/HFaPgO8"><strong>LINE OA</strong> @thebuddypatch</a></td></tr>
      <tr><td>📧 <a href="mailto:thebuddypatch@gmail.com"><strong>thebuddypatch@gmail.com</strong></a></td></tr>
      <tr><td>📘 <a href="https://www.facebook.com/profile.php?id=61556132864333">Facebook</a></td></tr>
      <tr><td>📸 <a href="https://www.instagram.com/thebuddypatch">Instagram</a></td></tr>
      <tr><td>🎵 <a href="https://www.tiktok.com/@thebuddypatch">TikTok</a></td></tr>
    </table>`,
    a_en: `<table class="dt ct">
      <tr><th>Channel</th></tr>
      <tr><td>💚 <a href="https://lin.ee/HFaPgO8"><strong>LINE OA</strong> @thebuddypatch</a></td></tr>
      <tr><td>📧 <a href="mailto:thebuddypatch@gmail.com"><strong>thebuddypatch@gmail.com</strong></a></td></tr>
      <tr><td>📘 <a href="https://www.facebook.com/profile.php?id=61556132864333">Facebook</a></td></tr>
      <tr><td>📸 <a href="https://www.instagram.com/thebuddypatch">Instagram</a></td></tr>
      <tr><td>🎵 <a href="https://www.tiktok.com/@thebuddypatch">TikTok</a></td></tr>
    </table>`
  },
  {
    id: "partnership", category: "contact", sku: "all",
    q_th: "อยากติดต่อทีม Marketing / Partnership",
    q_en: "How do I reach Marketing or Partnership?",
    a_th: `<p>ส่งรายละเอียดที่อีเมล <strong>thebuddypatch@gmail.com</strong> พร้อมระบุ:</p>
      <ul>
        <li>ชื่อ · เบอร์โทร · อีเมลสำหรับติดต่อกลับ</li>
        <li>รายละเอียดงาน / โปรเจกต์</li>
        <li>เอกสารแนบ (ถ้ามี)</li>
      </ul>
      <p class="muted">ทีมจะติดต่อกลับภายใน 2-3 วันทำการ</p>`,
    a_en: `<p>Email <strong>thebuddypatch@gmail.com</strong> with:</p>
      <ul>
        <li>Name, phone, email for follow-up</li>
        <li>Project / opportunity details</li>
        <li>Any attached documents</li>
      </ul>
      <p class="muted">We'll reply within 2-3 business days.</p>`
  },
];

// Popular question IDs for hero chips
window.FAQ_POPULAR_IDS = ["how-to-use", "best-spot", "vs-pills", "ship-time"];
