document.querySelector('.pArg').addEventListener('click', () => {
    document.getElementById('plaintiffArg').style.display = 'block';
  });
  
  document.querySelectorAll('.goBack').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('plaintiffArg').style.display = 'none';
    });
  });
  
  document.querySelector('.dArg').addEventListener('click', () => {
    document.getElementById('defendantArg').style.display = 'block';
  });
  
  document.querySelectorAll('.goBack').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('defendantArg').style.display = 'none';
    });
  });
  
  document.querySelector('.pEvi').addEventListener('click', () => {
    document.getElementById('plaintiffEvi').style.display = 'block';
  });
  
  document.querySelectorAll('.goBack').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('plaintiffEvi').style.display = 'none';
    });
  });
  
  document.querySelector('.dEvi').addEventListener('click', () => {
    document.getElementById('defendantEvi').style.display = 'block';
  });
  
  document.querySelectorAll('.goBack').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('defendantEvi').style.display = 'none';
    });
  });