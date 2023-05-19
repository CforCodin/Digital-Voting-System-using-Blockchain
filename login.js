
function getVal() {
    const val = document.getElementById('adhaar').value;
    const val1 = document.getElementById('voter').value;
    if(val.toString().length != 12)
    alert("Invalid Adhar or Voter ID");
    else if(val1.toString().length > 10)
    alert("Invalid details");
    else
    alert("Please proceed further to cast your vote tab");
    console.log(val);
  }

