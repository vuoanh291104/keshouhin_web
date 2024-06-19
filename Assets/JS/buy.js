const districtsByProvince = {
    "An Giang": ["Long Xuyên", "Châu Đốc", "Tân Châu", "An Phú", "Châu Phú", "Châu Thành", "Chợ Mới", "Phú Tân", "Thoại Sơn", "Tri Tôn", "Tịnh Biên"],
    "Bà Rịa - Vũng Tàu": ["Vũng Tàu", "Bà Rịa", "Phú Mỹ", "Châu Đức", "Côn Đảo", "Đất Đỏ", "Long Điền", "Xuyên Mộc"],
    "Bạc Liêu": ["Bạc Liêu", "Hồng Dân", "Phước Long", "Vĩnh Lợi", "Giá Rai", "Đông Hải"],
    "Bắc Giang": ["Bắc Giang", "Hiệp Hòa", "Lạng Giang", "Lục Nam", "Lục Ngạn", "Sơn Động", "Tân Yên", "Việt Yên", "Yên Dũng", "Yên Thế"],
    "Bắc Kạn": ["Bắc Kạn", "Ba Bể", "Bạch Thông", "Chợ Đồn", "Chợ Mới", "Na Rì", "Ngân Sơn", "Pác Nặm"],
    "Bắc Ninh": ["Bắc Ninh", "Gia Bình", "Lương Tài", "Quế Võ", "Thuận Thành", "Tiên Du", "Từ Sơn", "Yên Phong"],
    "Bến Tre": ["Bến Tre", "Ba Tri", "Bình Đại", "Châu Thành", "Chợ Lách", "Giồng Trôm", "Mỏ Cày Bắc", "Mỏ Cày Nam", "Thạnh Phú"],
    "Bình Dương": ["Thủ Dầu Một", "Bến Cát", "Dĩ An", "Phú Giáo", "Tân Uyên", "Thuận An", "Bàu Bàng", "Dầu Tiếng"],
    "Bình Định": ["Quy Nhơn", "An Lão", "An Nhơn", "Hoài Ân", "Hoài Nhơn", "Phù Mỹ", "Phù Cát", "Tây Sơn", "Tuy Phước", "Vân Canh", "Vĩnh Thạnh"],
    "Bình Phước": ["Đồng Xoài", "Bình Long", "Bù Đăng", "Bù Đốp", "Bù Gia Mập", "Chơn Thành", "Đồng Phú", "Hớn Quản", "Lộc Ninh", "Phú Riềng"],
    "Bình Thuận": ["Phan Thiết", "Bắc Bình", "Đức Linh", "Hàm Tân", "Hàm Thuận Bắc", "Hàm Thuận Nam", "La Gi", "Phú Quí", "Tánh Linh", "Tuy Phong"],
    "Cà Mau": ["Cà Mau", "Cái Nước", "Đầm Dơi", "Năm Căn", "Ngọc Hiển", "Phú Tân", "Thới Bình", "Trần Văn Thời", "U Minh"],
    "Cao Bằng": ["Cao Bằng", "Bảo Lạc", "Bảo Lâm", "Hà Quảng", "Hạ Lang", "Hòa An", "Nguyên Bình", "Phục Hoà", "Quảng Uyên", "Thạch An", "Thạch Đà", "Trà Lĩnh", "Trùng Khánh"],
    "Cần Thơ": ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt", "Vĩnh Thạnh", "Cờ Đỏ", "Phong Điền", "Thới Lai"],
    "Đà Nẵng": ["Hải Châu", "Cẩm Lệ", "Thanh Khê", "Liên Chiểu", "Sơn Trà", "Ngũ Hành Sơn", "Hòa Vang"],
    "Đắk Lắk": ["Buôn Ma Thuột", "Buôn Hồ", "Buôn Đôn", "Cư Kuin", "Cư M'gar", "Ea H'leo", "Ea Kar", "Ea Súp", "Krông Ana", "Krông Bông", "Krông Buk", "Krông Năng", "Krông Pắk", "Lắk", "M'Đrăk"],
    "Đắk Nông": ["Gia Nghĩa", "Cư Jút", "Đắk GLong", "Đắk Mil", "Đắk R'Lấp", "Đắk Song", "Krông Nô", "Tuy Đức"],
    "Điện Biên": ["Điện Biên Phủ", "Điện Biên", "Mường Ảng", "Mường Chà", "Mường Lay", "Mường Nhé", "Nậm Pồ", "Tủa Chùa", "Tuần Giáo"],
    "Đồng Nai": ["Biên Hòa", "Long Khánh", "Cẩm Mỹ", "Định Quán", "Long Thành", "Nhơn Trạch", "Tân Phú", "Thống Nhất", "Trảng Bom", "Vĩnh Cửu", "Xuân Lộc"],
    "Đồng Tháp": ["Cao Lãnh", "Hồng Ngự", "Cao Lãnh", "Châu Thành", "Hồng Ngự", "Lai Vung", "Lấp Vò", "Tam Nông", "Tân Hồng", "Thanh Bình", "Tháp Mười"],
    "Gia Lai": ["Pleiku", "An Khê", "AYun Pa", "Chư Păh", "Chư Prông", "Chư Pưh", "Chư Sê", "Đăk Đoa", "Đăk Pơ", "Đức Cơ", "Ia Grai", "Ia Pa", "K'Bang", "Kông Chro", "Krông Pa", "Mang Yang", "Phú Thiện"],
    "Hà Giang": ["Hà Giang", "Bắc Mê", "Bắc Quang", "Đồng Văn", "Hoàng Su Phì", "Mèo Vạc", "Quản Bạ", "Quang Bình", "Vị Xuyên", "Xín Mần", "Yên Minh"],
    "Hà Nam": ["Phủ Lý", "Bình Lục", "Duy Tiên", "Kim Bảng", "Lý Nhân", "Thanh Liêm"],
    "Hà Nội": ["Ba Đình", "Bắc Từ Liêm", "Cầu Giấy", "Đống Đa", "Hà Đông", "Hai Bà Trưng", "Hoàn Kiếm", "Hoàng Mai", "Long Biên", "Nam Từ Liêm", "Tây Hồ", "Thanh Xuân", "Sóc Sơn", "Đông Anh", "Gia Lâm", "Thanh Trì", "Thường Tín", "Phú Xuyên", "Mê Linh", "Ba Vì", "Phúc Thọ", "Đan Phượng", "Hoài Đức", "Quốc Oai", "Thạch Thất", "Chương Mỹ", "Thanh Oai", "Ứng Hòa", "Mỹ Đức"],
    "Hà Tĩnh": ["Hà Tĩnh", "Cẩm Xuyên", "Can Lộc", "Đức Thọ", "Hồng Lĩnh", "Hương Khê", "Hương Sơn", "Kỳ Anh", "Lộc Hà", "Nghi Xuân", "Thạch Hà", "Vũ Quang"],
    "Hải Dương": ["Hải Dương", "Bình Giang", "Cẩm Giàng", "Chí Linh", "Gia Lộc", "Kim Thành", "Kinh Môn", "Nam Sách", "Ninh Giang", "Thanh Hà", "Thanh Miện", "Tứ Kỳ"],
    "Hải Phòng": ["Hồng Bàng", "Ngô Quyền", "Lê Chân", "Hải An", "Kiến An", "Đồ Sơn", "Dương Kinh", "Thuỷ Nguyên", "An Dương", "An Lão", "Kiến Thụy", "Tiên Lãng", "Vĩnh Bảo", "Cát Hải", "Bạch Long Vĩ"],
    "Hậu Giang": ["Vị Thanh", "Châu Thành", "Châu Thành A", "Long Mỹ", "Phụng Hiệp", "Vị Thủy", "Ngã Bảy", "Long Mỹ"],
    "Hòa Bình": ["Hòa Bình", "Cao Phong", "Đà Bắc", "Kim Bôi", "Kỳ Sơn", "Lạc Sơn", "Lạc Thủy", "Lương Sơn", "Mai Châu", "Tân Lạc", "Yên Thủy"],
    "Hưng Yên": ["Hưng Yên", "Ân Thi", "Khoái Châu", "Kim Động", "Mỹ Hào", "Phù Cừ", "Tiên Lữ", "Văn Giang", "Văn Lâm", "Yên Mỹ"],
    "Khánh Hòa": ["Nha Trang", "Cam Lâm", "Cam Ranh", "Diên Khánh", "Khánh Sơn", "Khánh Vĩnh", "Ninh Hòa", "Trường Sa", "Vạn Ninh"],
    "Kiên Giang": ["Rạch Giá", "An Biên", "An Minh", "Châu Thành", "Giang Thành", "Giồng Riềng", "Gò Quao", "Hòn Đất", "Kiên Hải", "Kiên Lương", "Phú Quốc", "Tân Hiệp", "U Minh Thượng", "Vĩnh Thuận"],
    "Kon Tum": ["Kon Tum", "Đắk Glei", "Đắk Hà", "Đắk Tô", "Ia H' Drai", "Kon Plông", "Kon Rẫy", "Ngọc Hồi", "Sa Thầy", "Tu Mơ Rông"],
    "Lai Châu": ["Lai Châu", "Mường Tè", "Phong Thổ", "Sìn Hồ", "Tam Đường", "Tân Uyên", "Than Uyên", "Nậm Nhùn"],
    "Lâm Đồng": ["Đà Lạt", "Bảo Lâm", "Bảo Lộc", "Cát Tiên", "Đạ Huoai", "Đạ Tẻh", "Đam Rông", "Di Linh", "Đơn Dương", "Đức Trọng", "Lạc Dương", "Lâm Hà"],
    "Lạng Sơn": ["Lạng Sơn", "Bắc Sơn", "Bình Gia", "Cao Lộc", "Chi Lăng", "Đình Lập", "Hữu Lũng", "Lộc Bình", "Tràng Định", "Văn Lãng", "Văn Quan"],
    "Lào Cai": ["Lào Cai", "Bắc Hà", "Bảo Thắng", "Bảo Yên", "Bát Xát", "Mường Khương", "Sa Pa", "Văn Bàn", "Si Ma Cai"],
    "Long An": ["Tân An", "Bến Lức", "Cần Đước", "Cần Giuộc", "Châu Thành", "Đức Hòa", "Đức Huệ", "Mộc Hóa", "Tân Hưng", "Tân Thạnh", "Tân Trụ", "Thạnh Hóa", "Thủ Thừa", "Vĩnh Hưng"],
    "Nam Định": ["Nam Định", "Giao Thủy", "Hải Hậu", "Mỹ Lộc", "Nam Trực", "Nghĩa Hưng", "Trực Ninh", "Vụ Bản", "Xuân Trường", "Ý Yên"],
    "Nghệ An": ["Vinh", "Cửa Lò", "Thái Hòa", "Thái Hoà", "Anh Sơn", "Con Cuông", "Diễn Châu", "Đô Lương", "Hoàng Mai", "Hưng Nguyên", "Kỳ Sơn", "Nam Đàn", "Nghi Lộc", "Nghĩa Đàn", "Quế Phong", "Quỳ Châu", "Quỳ Hợp", "Quỳnh Lưu", "Tân Kỳ", "Thành Châu", "Thanh Châu", "Tương Dương", "Yên Thành"],
    "Ninh Bình": ["Ninh Bình", "Tam Điệp", "Nho Quan", "Gia Viễn", "Hoa Lư", "Yên Khánh", "Kim Sơn", "Yên Mô"],
    "Ninh Thuận": ["Phan Rang-Tháp Chàm", "Bác Ái", "Ninh Hải", "Ninh Phước", "Ninh Sơn", "Thuận Bắc", "Thuận Nam"],
    "Phú Thọ": ["Việt Trì", "Cẩm Khê", "Đoan Hùng", "Hạ Hoà", "Lâm Thao", "Phù Ninh", "Tam Nông", "Tân Sơn", "Thanh Ba", "Thanh Sơn", "Thanh Thủy", "Yên Lập"],
    "Phú Yên": ["Tuy Hòa", "Đông Hòa", "Đồng Xuân", "Phú Hòa", "Sơn Hòa", "Sông Cầu", "Tây Hòa", "Tuy An"],
    "Quảng Bình": ["Đồng Hới", "Ba Đồn", "Bố Trạch", "Lệ Thủy", "Minh Hóa", "Quảng Ninh", "Quảng Trạch", "Tuyên Hóa"],
    "Quảng Nam": ["Tam Kỳ", "Hội An", "Đại Lộc", "Điện Bàn", "Duy Xuyên", "Hòa Vang", "Nam Giang", "Nam Trà My", "Nông Sơn", "Núi Thành", "Phú Ninh", "Phước Sơn", "Quế Sơn", "Tây Giang", "Thăng Bình", "Tiên Phước"],
    "Quảng Ngãi": ["Quảng Ngãi", "Bình Sơn", "Bình Sơn", "Đức Phổ", "Ba Tơ", "Minh Long", "Mộ Đức", "Nghĩa Hành", "Sơn Hà", "Sơn Tây", "Tây Trà", "Trà Bồng", "Tư Nghĩa", "Lý Sơn"],
    "Quảng Ninh": ["Hạ Long", "Cẩm Phả", "Móng Cái", "Uông Bí", "Quảng Yên", "Đông Triều", "Tiên Yên", "Ba Chẽ", "Bình Liêu", "Cô Tô", "Đầm Hà", "Hải Hà", "Hoành Bồ", "Vân Đồn"],
    "Quảng Trị": ["Đông Hà", "Quảng Trị", "Cam Lộ", "Cồn Cỏ", "Đa Krông", "Gio Linh", "Hải Lăng", "Hướng Hóa", "Triệu Phong", "Vĩnh Linh"],
    "Sóc Trăng": ["Sóc Trăng", "Châu Thành", "Cù Lao Dung", "Kế Sách", "Long Phú", "Mỹ Tú", "Mỹ Xuyên", "Ngã Năm", "Thạnh Trị", "Trần Đề", "Vĩnh Châu"],
    "Sơn La": ["Sơn La", "Bắc Yên", "Mai Sơn", "Mộc Châu", "Mường La", "Phù Yên", "Quỳnh Nhai", "Sông Mã", "Thuận Châu", "Vân Hồ", "Yên Châu"],
    "Tây Ninh": ["Tây Ninh", "Bến Cầu", "Châu Thành", "Dương Minh Châu", "Gò Dầu", "Hòa Thành", "Tân Biên", "Tân Châu", "Trảng Bàng"],
    "Thái Bình": ["Thái Bình", "Đông Hưng", "Hưng Hà", "Kiến Xương", "Quỳnh Phụ", "Thái Thụy", "Tiền Hải", "Vũ Thư"],
    "Thái Nguyên": ["Thái Nguyên", "Đại Từ", "Định Hóa", "Đồng Hỷ", "Phổ Yên", "Phú Bình", "Phú Lương", "Võ Nhai"],
    "Thanh Hóa": ["Thanh Hóa", "Bá Thước", "Cẩm Thủy", "Đông Sơn", "Hà Trung", "Hậu Lộc", "Hoằng Hóa", "Lang Chánh", "Mường Lát", "Nga Sơn", "Ngọc Lặc", "Như Thanh", "Như Xuân", "Nông Cống", "Quan Hóa", "Quan Sơn", "Quảng Xương", "Thạch Thành", "Thiệu Hóa", "Thọ Xuân", "Thường Xuân", "Tĩnh Gia", "Triệu Sơn", "Vĩnh Lộc", "Yên Định"],
    "Thừa Thiên Huế": ["Huế", "A Lưới", "Hương Thủy", "Hương Trà", "Nam Đông", "Phong Điền", "Phú Lộc", "Phú Vang", "Quảng Điền"],
    "Tiền Giang": ["Mỹ Tho", "Cai Lậy", "Cái Bè", "Châu Thành", "Chợ Gạo", "Gò Công", "Gò Công Đông", "Gò Công Tây", "Tân Phú Đông", "Tân Phước"],
    "Trà Vinh": ["Trà Vinh", "Càng Long", "Cầu Kè", "Cầu Ngang", "Châu Thành", "Duyên Hải", "Tiểu Cần", "Trà Cú"],
    "Tuyên Quang": ["Tuyên Quang", "Chiêm Hóa", "Định Hóa", "Hàm Yên", "Lâm Bình", "Na Hang", "Sơn Dương", "Yên Sơn"],
    "Vĩnh Long": ["Vĩnh Long", "Bình Minh", "Bình Tân", "Long Hồ", "Mang Thít", "Tam Bình", "Trà Ôn", "Vũng Liêm"],
    "Vĩnh Phúc": ["Vĩnh Yên", "Bình Xuyên", "Lập Thạch", "Phúc Yên", "Sông Lô", "Tam Đảo", "Tam Dương", "Vĩnh Tường", "Yên Lạc"],
    "Yên Bái": ["Yên Bái", "Lục Yên", "Mù Cang Chải", "Trạm Tấu", "Trấn Yên", "Văn Chấn", "Văn Yên", "Yên Bình"],
    "TP Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12", "Bình Tân", "Bình Thạnh", "Gò Vấp", "Phú Nhuận", "Tân Bình", "Tân Phú", "Thủ Đức", "Bình Chánh", "Cần Giờ", "Củ Chi", "Hóc Môn", "Nhà Bè"]
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('vietnam-provinces').addEventListener('change', function () {
        const province = this.value;
        const districtsSelect = document.getElementById('districtSelect');

        districtsSelect.innerHTML = '<option value="">Select a district</option>';

        if (province) {
            const districts = districtsByProvince[province];
            districtsSelect.disabled = false;

            districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtsSelect.appendChild(option);
            });
        } else {
            districtsSelect.disabled = true;
        }
    });
});
function checkDonHang() {
    let ketQuaCheck = true;
    const myInps = document.querySelectorAll('.myInp');
    for (let inp of myInps) {
        switch (inp.type) {
            case "text":
                ketQuaCheck &&= inp.value !== '';
                if (!ketQuaCheck) {
                    alert('Tên người dùng hoặc địa chỉ không hợp lệ!');
                    return;
                }
                break;
            case "tel":
                const chinhQuySDT = /^[0-9]{10}$/;
                ketQuaCheck &&= chinhQuySDT.test(inp.value);
                if (!ketQuaCheck) {
                    alert('Số điện thoại không hợp lệ.');
                    return;
                }
                break;

            default:
                ketQuaCheck &&= inp.value !== '';
                if (!ketQuaCheck) {
                    alert('Vui lòng kiểm tra lại ' + inp.type);
                    return;
                }
                break;
        }
    }
    if (ketQuaCheck) {
        alert("Thông báo: Đặt hàng thành công. Bạn sẽ nhận hàng dự kiến vào 30/02/2025");
        window.location.href = 'Cart.html';
    }
}