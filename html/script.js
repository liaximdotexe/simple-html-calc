function getInputValues(){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    return{num1, num2};
}

function add(){
    const {num1, num2}=getInputValues();
    if(!isNaN(num1)&&!isNaN(num2)) {
        document.getElementById('result').textContent = num1 + num2;
    }else{
        alert('Please input a valid number');
    }
}