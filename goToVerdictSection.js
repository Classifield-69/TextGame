let selectedRuling = "";

function goToVerdictSection(verdictRuling) {
  const verdictSection = document.getElementById('verdictSection');
  const textRuled = document.getElementById('textRuled');
  
  if (verdictRuling === 'Plaintiff') {
    textRuled.textContent = 'I rule in favor of the Plaintiff.';
    selectedRuling = 'Plaintiff';
  } else if (verdictRuling === 'Defendant') {
    textRuled.textContent = 'I rule in favor of the Defendant.';
    selectedRuling = 'Defendant';
  }
  
  verdictSection.scrollIntoView({ behavior: 'smooth' });
}
