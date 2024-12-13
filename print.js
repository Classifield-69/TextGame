function saveVerdictAsTextFile() {
    try {
     
      const caseSummaryElement = document.querySelector('.CaseSummary p');
      const caseSummary = caseSummaryElement ? caseSummaryElement.textContent.trim() : 'No case summary provided.';
      console.log('Case Summary:', caseSummary);
  
     
      const rulingElement = document.getElementById('textRuled');
      if (!rulingElement) throw new Error('Ruling element (#textRuled) not found.');
      const rulingText = rulingElement.textContent.trim();
      console.log('Ruling Text:', rulingText);
  
     
      const reasoning1Element = document.getElementById('input1');
      const reasoning2Element = document.getElementById('input2');
      const reasoning3Element = document.getElementById('input3');
  
      const reasoning1 = reasoning1Element ? reasoning1Element.value.trim() : 'No key facts provided.';
      const reasoning2 = reasoning2Element ? reasoning2Element.value.trim() : 'No legal reasoning provided.';
      const reasoning3 = reasoning3Element ? reasoning3Element.value.trim() : 'No fairness reasoning provided.';
      console.log('Reasoning:', reasoning1, reasoning2, reasoning3);
  
     
      const orderElement = document.getElementById('text');
      const order = orderElement ? orderElement.value.trim() : 'No order provided.';
      console.log('Order:', order);
  
      
      const fullText = `
  Verdict Section
  ===============
  
  The court reviewed the case where:
  ${caseSummary}
  
  Ruling:
  ${rulingText}
  
  Reasoning:
  The court considered the following key facts: ${reasoning1}.
  It found that these facts related to the applicable laws as follows: ${reasoning2}.
  In terms of justice and fairness, the court concluded that ${reasoning3}.
  
  Order:
  Based on the above reasoning, the court orders the following: ${order}.
  `;
  
      console.log('Generated Text:', fullText);
  
      const blob = new Blob([fullText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'verdict.txt';
      a.click();
  
      URL.revokeObjectURL(url);
      console.log('Text file created and download initiated.');
    } catch (error) {
      console.error('Error in saveVerdictAsTextFile:', error);
      alert(`An error occurred while trying to save the verdict: ${error.message}`);
    }
  }
  