//countdown timer
$(function(){

  var time = new Date();
  var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
  console.log(target_time);
  var note = $('#note'),
      note2 = $('#note2'),
      note3 = $('#note3'),
      note4 = $('#note4'),
      note5 = $('#note5'),
      note6 = $('#note6'),
      ts = new Date(2017, 5, 14),
      newYear = true;

  if((new Date()) > ts){
    ts = target_time.valueOf()+1000*60*60*24;
    newYear = false;
  }

  $('.countdown').countdown({
    timestamp	: ts,
    callback	: function(days, hours, minutes, seconds){

      var message = "";

      message += days + " дней" + ( days==1 ? '':'' ) + ", ";
      message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
      message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
      message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";

      if(newYear){
        message += "";
      }
      else {
        message += "";
      }

      note.html(message);
      note2.html(message);
      note3.html(message);
      note4.html(message);
      note5.html(message);
      note6.html(message);
    }
  });

  $('.countdown2').countdown({timestamp: ts});
  $('.countdown3').countdown({timestamp: ts});
  $('.countdown4').countdown({timestamp: ts});
  $('.countdown5').countdown({timestamp: ts});
  $('.countdown6').countdown({timestamp: ts});

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvdW50ZG93biB0aW1lclxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuICB2YXIgdGFyZ2V0X3RpbWUgPSBuZXcgRGF0ZSh0aW1lLmdldEZ1bGxZZWFyKCksIHRpbWUuZ2V0TW9udGgoKSwgdGltZS5nZXREYXRlKCkpO1xyXG4gIGNvbnNvbGUubG9nKHRhcmdldF90aW1lKTtcclxuICB2YXIgbm90ZSA9ICQoJyNub3RlJyksXHJcbiAgICAgIG5vdGUyID0gJCgnI25vdGUyJyksXHJcbiAgICAgIG5vdGUzID0gJCgnI25vdGUzJyksXHJcbiAgICAgIG5vdGU0ID0gJCgnI25vdGU0JyksXHJcbiAgICAgIG5vdGU1ID0gJCgnI25vdGU1JyksXHJcbiAgICAgIG5vdGU2ID0gJCgnI25vdGU2JyksXHJcbiAgICAgIHRzID0gbmV3IERhdGUoMjAxNywgNSwgMTQpLFxyXG4gICAgICBuZXdZZWFyID0gdHJ1ZTtcclxuXHJcbiAgaWYoKG5ldyBEYXRlKCkpID4gdHMpe1xyXG4gICAgdHMgPSB0YXJnZXRfdGltZS52YWx1ZU9mKCkrMTAwMCo2MCo2MCoyNDtcclxuICAgIG5ld1llYXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICQoJy5jb3VudGRvd24nKS5jb3VudGRvd24oe1xyXG4gICAgdGltZXN0YW1wXHQ6IHRzLFxyXG4gICAgY2FsbGJhY2tcdDogZnVuY3Rpb24oZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpe1xyXG5cclxuICAgICAgdmFyIG1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICAgICAgbWVzc2FnZSArPSBkYXlzICsgXCIg0LTQvdC10LlcIiArICggZGF5cz09MSA/ICcnOicnICkgKyBcIiwgXCI7XHJcbiAgICAgIG1lc3NhZ2UgKz0gaG91cnMgKyBcIiDRh9Cw0YHQvtCyXCIgKyAoIGhvdXJzPT0xID8gJyc6JycgKSArIFwiLCBcIjtcclxuICAgICAgbWVzc2FnZSArPSBtaW51dGVzICsgXCIg0LzQuNC90YPRglwiICsgKCBtaW51dGVzPT0xID8gJyc6JycgKSArIFwiINC4IFwiO1xyXG4gICAgICBtZXNzYWdlICs9IHNlY29uZHMgKyBcIiDRgdC10LrRg9C90LRcIiArICggc2Vjb25kcz09MSA/ICcnOicnICkgKyBcIiA8YnIgLz5cIjtcclxuXHJcbiAgICAgIGlmKG5ld1llYXIpe1xyXG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlICs9IFwiXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vdGUuaHRtbChtZXNzYWdlKTtcclxuICAgICAgbm90ZTIuaHRtbChtZXNzYWdlKTtcclxuICAgICAgbm90ZTMuaHRtbChtZXNzYWdlKTtcclxuICAgICAgbm90ZTQuaHRtbChtZXNzYWdlKTtcclxuICAgICAgbm90ZTUuaHRtbChtZXNzYWdlKTtcclxuICAgICAgbm90ZTYuaHRtbChtZXNzYWdlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvdW50ZG93bjInKS5jb3VudGRvd24oe3RpbWVzdGFtcDogdHN9KTtcclxuICAkKCcuY291bnRkb3duMycpLmNvdW50ZG93bih7dGltZXN0YW1wOiB0c30pO1xyXG4gICQoJy5jb3VudGRvd240JykuY291bnRkb3duKHt0aW1lc3RhbXA6IHRzfSk7XHJcbiAgJCgnLmNvdW50ZG93bjUnKS5jb3VudGRvd24oe3RpbWVzdGFtcDogdHN9KTtcclxuICAkKCcuY291bnRkb3duNicpLmNvdW50ZG93bih7dGltZXN0YW1wOiB0c30pO1xyXG5cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
