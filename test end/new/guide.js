// Lời hướng dẫn
var guide = document.getElementById('guide');
var guideCtx = guide.getContext('2d');
var a = '+ Dùng phím di chuyển để điều khiển rắn';
var b = '+ Cố gắng ăn thật nhiều thức ăn trên màn hình để điểm càng cao' 
var c = '+ Không để đầu rắn chạm vào mình.';
var d = '+ Không đâm vào tường bao';
guideCtx.font = "15px Georgia";
guideCtx.fillStyle = colorGround;
guideCtx.fillText(a, 0, 120);
guideCtx.font = "15px Georgia";
guideCtx.fillStyle = colorGround;
guideCtx.fillText(b, 0, 150);
guideCtx.font = "15px Georgia";
guideCtx.fillStyle = colorGround;
guideCtx.fillText(c, 0, 180);
guideCtx.font = "15px Georgia";
guideCtx.fillStyle = colorGround;
guideCtx.fillText(d, 0, 210);