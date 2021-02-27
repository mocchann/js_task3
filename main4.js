  const dentakuTop = document.getElementById('dentakuTop');
  
  function button(nums) {
    dentakuTop.textContent += nums.textContent; 
 
  }
  
  function button1(nums) {
    dentakuTop.textContent += nums.textContent; 
  }
  
  function calc() {
    dentakuTop.textContent = new Function("return " + dentakuTop.textContent)();
  }
  
  function reset() {
    dentakuTop.textContent = ""
  }
  
  