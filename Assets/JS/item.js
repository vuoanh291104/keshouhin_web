$(document).ready(function () {
    let btnTru = [], btnCong = [], va = [];

    btnCong.push(document.getElementById('cong1'));
    btnCong.push(document.getElementById('cong2'));
    btnCong.push(document.getElementById('cong3'));
    btnTru.push(document.getElementById('tru1'));
    btnTru.push(document.getElementById('tru2'));
    btnTru.push(document.getElementById('tru3'));
    va.push(document.getElementById('value1'));
    va.push(document.getElementById('value2'));
    va.push(document.getElementById('value3'));

    for (let i = 0; i < 3; i++) {
        btnCong[i].addEventListener('click', function () {
            changeValue(1, va[i]);
        });
        btnTru[i].addEventListener('click', function () {
            changeValue(-1, va[i]);
        });
    }
});

function changeValue(a, va) {
    if (va == null) {
        console.log("value is null");
        return;
    }
    const x = Number(va.value) + Number(a);
    if (x >= 0) {
        va.value = x;
    }
}
