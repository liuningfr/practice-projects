	$(document).ready(function() {
		//使用野狗云
	  var ref = new Wilddog("https://danwu.wilddogio.com/messages");
	  var arr = [];
	  //点击send把数据提交到野狗云
	  $(".s_sub").click(function() {
			var text = $(".s_txt").val();
			if(text == "") {
				text = "Say something";
			}
	    ref.child('message').push(text);
	    $(".s_txt").val("");
	  });
	  //enter键触发send
	  $(".s_txt").keypress(function(event) {
			//‘13’是enter键的值
	    if (event.keyCode == "13") {
	      $(".s_sub").trigger('click');
	    }
	  });
	  //点击clear清除弹幕
	  $(".s_del").click(function() {
	    ref.remove();
	    arr = [];
	    $('.dm_show').empty();
	  });
	  //监听到云端数据被添加
	  ref.child('message').on('child_added', function(snapshot) {
	    var text = snapshot.val();
	    arr.push(text);
	    var textObj = $("<div class=\"dm_message\"></div>");
	    textObj.text(text);
	    $(".dm_show").append(textObj);
	    moveObj(textObj);
	  });
		//监听到云端数据被移除
	  ref.on('child_removed', function() {
	    arr = [];
	    $('.dm_show').empty();
	  });
	  //按照时间规则显示弹幕内容。	
	  var topMin = $('.dm_mask').offset().top;
	  var topMax = topMin + $('.dm_mask').height();
	  var _top = topMin;

	  function moveObj(obj) {
	    var _left = $('.dm_mask').width() - obj.width();
	    _top = _top + 50;
	    if (_top > (topMax - 50)) {
	      _top = topMin;
	    }
	    obj.css({
	      left: _left,
	      top: _top,
	      color: getRandomColor()
			});
			//弹幕移动时间为20s-30s
	    var time = 20000 + 10000 * Math.random();
	    obj.animate({
	      left: "-" + _left + "px"
	    }, time, function() {
	      obj.remove();
	    });
	  }
		//定义得到随机颜色的函数
	  var getRandomColor = function() {
	    return '#' + (function(h) {
	      return new Array(7 - h.length).join("0") + h
	    })((Math.random() * 0x1000000 << 0).toString(16))
	  }
		//从弹幕数组中随机得到一个弹幕并显示
	  var getAndRun = function() {
	    if (arr.length > 0) {
	      var n = Math.floor(Math.random() * arr.length);
	      var textObj = $("<div>" + arr[n] + "</div>");
	      $(".dm_show").append(textObj);
	      moveObj(textObj);
	    }

	    setTimeout(getAndRun, 3000);
	  }
	  getAndRun();
	});