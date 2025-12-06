// Small client-side interactions and form handlers
// Populate any footer year placeholders (ids starting with "year")
document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

// Vehicle models map for dynamic model dropdowns
const MODEL_MAP = {
  sedan: ["Maruti Suzuki Dzire", "Maruti Suzuki Ciaz", "Honda City", "Honda Amaze", "Toyota Altis"],
  hatch: ["Maruti WagonR", "Maruti Swift", "Maruti Baleno", "Maruti Celerio"],
  suv: ["Hyundai Creta", "Tata Nexon", "Mahindra XUV700", "Mahindra Scorpio", "Toyota Fortuner", "Kia Carens", "Maruti Ertiga"],
  mpv: ["Toyota Innova", "Innova Crysta", "Innova Hycross", "Maruti Ertiga"],
  tempo: ["Tempo Traveller (12 seater)", "Tempo Traveller (15 seater)", "Tempo Traveller (17 seater)", "Tempo Traveller (20 seater)", "Tempo Traveller (26 seater)"],
  coach: ["27 Seater", "35 Seater", "45 Seater", "52 Seater", "65 Seater"]
};

function populateModels(modelSelect, category){
  if(!modelSelect) return;
  modelSelect.innerHTML = '<option value="">-- Select model --</option>';
  const list = MODEL_MAP[category] || [];
  list.forEach(m=>{
    const opt = document.createElement('option');
    opt.value = m; opt.textContent = m; modelSelect.appendChild(opt);
  });
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, function(m){
    return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m];
  });
}

// Wire up category -> model on page load for any model select present
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('select[id="category"]').forEach(catSel=>{
    const modelSel = document.getElementById('model');
    // Populate initial if value present
    if(catSel.value) populateModels(modelSel, catSel.value);
    catSel.addEventListener('change', e=> populateModels(modelSel, e.target.value));
  });
});

// Helper: open console and run:
// JSON.parse(localStorage.getItem('bookings')) to view demo bookings

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
  });
}
