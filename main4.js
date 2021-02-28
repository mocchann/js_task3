  const dentakuTop = document.getElementById('dentakuTop');
  let state = "start";
  
  function button(nums) {
      dentakuTop.textContent += nums.textContent;
      state = "nu";
  }
  
  function button1(nums) {
    if(state == "nu"){
      dentakuTop.textContent += nums.textContent;
      state = "start";
    }else{
      return;
    }
  }
  
  function calc() {
    dentakuTop.textContent = new Function("return " + dentakuTop.textContent)();
  }
  
  function reset() {
    dentakuTop.textContent = ""
    state = "start";
  }