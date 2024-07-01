Dự án này chúng tôi đã tiến hành xây dựng giao diện( font-end) của một website thương mại điện tử chuyên kinh doanh về mặt hàng mỹ phẩm. Trang web của chúng tôi có tên là Hoshi.
Và để đáp ứng nhu cầu của người dùng, trang web hiện đang có những giao diện  như: giao diện trang chủ, sản phẩm, giỏ hàng, đặt hàng, đăng nhập, đăng ký, flash sales,....
1. Về ngôn ngữ giao diện: sử dụng HTML, CSS để định dạng khối, vị trí, màu sắc, kích cỡ,... của các phần tử;  JavaScript để xử lý các chuyển động của các phần tử có trong trang web.
2. Về dữ liệu: trang web sử dụng file json làm file lưu dữ liệu. Trong file dữ liệu sẽ chứa các thông tin như tên, giá, hình ảnh, hãng sản phẩm, phân loại, mô tả chi tiết về sản phẩm,.... Và dữ liệu của file đều được đọc bằng js.
3. Về giao diện trang web: mỗi giao diện đều có các phần chung là header, main, footer
   * Header: gồm có icon đăng  nhập, icon giỏ hàng, khung tìm kiếm, thanh menu gồm icon menu, thẻ home, thẻ flash sale, thẻ hot, thẻ about. Di chuột vào icon menu thì menu con sẽ mở ra, di chuyển vào từng mục của menu con, thì sẽ có thêm các mục con tương ứng xuất hiện bên phải.
   * Footer: chứa các thông tin liên hệ như email, số điện thoại, facebook, instagram, tiktok
   *  Giao diện trang chủ: gồm các thành phần như slider( các hoạt ảnh được chạy tự động), phần flash sale sẽ có các sản phẩm đại diện đang được flash sale, sản phẩm sẽ tự chạy, hoặc ấn nút trái, phải để di chuyển sang trái hoặc sang phải. Phần thương hiệu sẽ hiện lên các thương hiệu nổi bật mà bên shop liên kết. Trên phần footer sẽ có nút xem thêm, khi ấn vào sẽ đến trang tất cả sản phẩm.
   * Giao diện trang flashsale: khi ấn vào thẻ flash sale của thanh menu thì sẽ chuyển sang trang flash sale, gồm có:
	   + bộ đếm thời gian ( flash sale sẽ thực hiện trong 2 tiếng, khi thực hiện xog sẽ chuyển qua lượt mới) đếm lùi thời gian flash sale.
	   + các sản phẩm được flash sale trong file dữ liệu sẽ được hiện lên gồm hình ảnh, giá gốc, giá flash sale, giảm bao nhiêu phần trăm so với giá gốc, nút thêm vào giỏ hàng.
	   
  - Giao diện trang hot: khi ấn vào thẻ hot của thanh menu thì sẽ chuyển sang trang hot, gồm có: 
	  - Bộ lọc sản phẩm theo các đề mục: dưỡng ẩm, giảm mụn,.... hoặc bộ lọc theo giá
	  - Các sản phẩm nằm trong mục hot được đọc lên từ file data.  
- Giao diện trang about: gồm hình ảnh thương hiệu, video quảng cáo shop, slogan, cam kết tầm nhìn sứ mệnh. 
- Giao diện đăng nhập và đăng ký: khi ấn icon đăng nhập hộp thoại đăng nhập sẽ hiện lên và trôi từ trên xuống, gồm hai khung là username và passowrd, bạn nhập thông tin tại đây để truy cập vô tài khoản. Nếu chưa có tài khoản thì ấn Đăng ký.
- Giao diện đăng ký: bao gồm các khung nhập thông tin như tên, số điện thoại, email, giới tính, password.
- Giao diện trang giỏ hàng: bao gồm các sản phẩm được thêm vào giỏ hàng, số lượng sản phẩm, giá tiền, tổng tiền các sản phẩm đã chọn, nút thanh toán.
- Giao diện đặt hàng: Khi ấn vào nút thanh toán sẽ chuyển sang trang đặt hàng, các sản phẩm được chọn sẽ hiện ở đây cùng với thông tin, giá và số lượng của nó, bạn nhập tên, địa chỉ, số điện thoại, chọn tỉnh/ thành phố, quận/ huyện trong khung select, tổng tiền các sản phẩm đã chọn đã được tính, chọn nút đặt hàng để đặt hàng.
- Giao diện trang chi tiết sản phẩm: gồm hình ảnh, tên, giá, mã giảm giá, nút thêm vào giỏ hàng, nút mua hàng, bộ tăng giảm số lượng, hình ảnh logo thương hiệu  của sản phẩm, thông tin chi tiết sản phẩm.
** Lưu ý: Trang giỏ hàng và đặt hàng chưa được  xử lý bằng dữ liệu nên đang tạm thời dùng hình ảnh đại diện. Chúng tôi sẽ phát triển thêm.
4. Hướng dẫn chạy sản phẩm: 
	- Clone link git hub về máy, sau đó mở file bằng IDE của máy cá nhân, vào Asset, vào home.html và tiến hành chạy.
	- IDE tôi dùng là visual studio code, trước tiên cài extentions live server, sau khi cài xong, nhìn dưới góc màn hình bên phải và chọn Go Live.
5. Video Demo sản phẩm: https://drive.google.com/drive/folders/1GJnwbUXbaFVF7IBzhHIuEtj25poIo8Zq?usp=drive_link