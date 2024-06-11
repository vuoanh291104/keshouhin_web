$(document).ready(function () {
    $('.lsSanPham').load('itemGioHang.html .item', function () {
        // Hàm gọi lại để thực hiện sau khi nội dung được tải
        // Bạn có thể đặt việc gán sự kiện ở đây
        var btnTru = document.getElementById('tru');
        var btnCong = document.getElementById('cong');
        var va = document.getElementById('value');
        btnTru.addEventListener('click', function () {
            changeValue(-1);
        });
        btnCong.addEventListener('click', function () {
            changeValue(1);
        });
    });
});


function changeValue(a) {
    var btnTru = document.getElementById('tru');
    var btnCong = document.getElementById('cong');
    var va = document.getElementById('value');
    if (btnCong == null || btnTru == null || va == null) {
        console.log("have null");
        return;
    }
    const x = Number(va.value) + Number(a);
    if (x >= 0) {
        va.value = x;
    }
}
