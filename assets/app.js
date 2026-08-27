
const products=[
 {ar:"مبثوث عود فاخر",en:"Luxury Oud Mabthuth",price:"—",icon:"🪵",descAr:"خلطة فاخرة برائحة عود دافئة وثابتة.",descEn:"A refined oud blend with a warm, lasting aroma."},
 {ar:"مبثوث المسك",en:"Musk Mabthuth",price:"—",icon:"🌿",descAr:"لمسة ناعمة تجمع الفخامة والنظافة.",descEn:"A soft, elegant blend with a clean luxurious character."},
 {ar:"مبثوث النخبة",en:"Elite Mabthuth",price:"—",icon:"✨",descAr:"اختيار مميز للمناسبات والهدايا.",descEn:"A premium choice for occasions and gifts."}
];
let lang="ar";
const dict={
 ar:{navHome:"الرئيسية",navProducts:"المنتجات",navAbout:"من نحن",navContact:"تواصل معنا",eyebrow:"نفحة عود • NAFHAT OUD",heroTitle:"رائحة تترك أثرًا.",heroText:"متجر نفحة عود للمبثوث والبخور — هوية فاخرة، منتجات مختارة، وتجربة طلب سهلة.",shop:"تصفح المنتجات",wa:"اطلب عبر واتساب",products:"منتجات مختارة",productsSub:"قريبًا ستجد تشكيلتنا الكاملة من المبثوث والبخور.",why:"لماذا نفحة عود؟",contact:"اطلب الآن",contactSub:"اختر المنتج وتواصل معنا مباشرة عبر واتساب.",whats:"واتساب",payments:"الدفع عبر المحافظ الإلكترونية",footer:"نفحة عود — مبثوث وبخور بجودة وهوية فاخرة.",about:"نحن نبني علامة يمنية تهتم بجودة الرائحة، أناقة التغليف، ورضا العميل.",details:"طلب المنتج"},
 en:{navHome:"Home",navProducts:"Products",navAbout:"About",navContact:"Contact",eyebrow:"NAFHAT OUD • نفحة عود",heroTitle:"A scent that leaves a mark.",heroText:"Nafhat Oud for premium mabthuth and incense — refined identity, selected products and an easy ordering experience.",shop:"Browse products",wa:"Order on WhatsApp",products:"Featured Products",productsSub:"Our full collection of mabthuth and incense is coming soon.",why:"Why Nafhat Oud?",contact:"Order now",contactSub:"Choose a product and contact us directly on WhatsApp.",whats:"WhatsApp",payments:"Payment via e-wallets",footer:"Nafhat Oud — premium mabthuth and incense.",about:"A Yemeni brand focused on fragrance quality, elegant packaging and customer satisfaction.",details:"Order product"}
};
function applyLang(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=dict[lang][e.dataset.i18n]);
 document.getElementById("langBtn").textContent=lang==="ar"?"EN":"العربية";
 renderProducts();
}
function renderProducts(){
 const box=document.getElementById("products");
 box.innerHTML=products.map((p,i)=>`<article class="product"><div class="product-img">${p.icon}</div><div class="product-body"><h3>${lang==="ar"?p.ar:p.en}</h3><div class="price">${p.price}</div><p>${lang==="ar"?p.descAr:p.descEn}</p><button class="order" onclick="order(${i})">${dict[lang].details}</button></div></article>`).join("");
}
function order(i){
 const p=products[i], name=lang==="ar"?p.ar:p.en;
 const text=encodeURIComponent((lang==="ar"?"السلام عليكم، أريد طلب: ":"Hello, I would like to order: ")+name);
 window.open("https://wa.me/967774310096?text="+text,"_blank");
}
document.getElementById("langBtn").onclick=()=>{lang=lang==="ar"?"en":"ar";applyLang()};
document.querySelectorAll(".wa-link").forEach(a=>a.href="https://wa.me/967774310096");
applyLang();
