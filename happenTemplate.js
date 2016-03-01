var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var date = new Date();
            var secondStamp = date.getTime();
            var seconds = secondStamp/1000;
            return String(Math.floor(seconds));
        },
		UnixMillisecond: function(){
            var date = new Date();
            var timeStamp = date.getTime();
            return String(timeStamp);
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  var hour = library.Hour.TwelveHour();
                  var min = library.Minute.DblDigit();
                  var theM = library.Hour.AMPM.UpperCase();
                  var sec = library.Second.DblDigit();
                  return hour.concat(':', min,':', sec,' ', theM);
              },
	   	    WithOutSeconds: function() {
                   var hour = library.Hour.TwelveHour();
                   var min = library.Minute.DblDigit();
                   var theM = library.Hour.AMPM.UpperCase();
                   return hour.concat(':', min,' ', theM);
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var month = library.Month.MonthNumber();
                var day = library.Month.DateOfMonth.Numeral();
                var year = library.Year.YearFull();
                return month.concat('/',day,'/',year);
            },
			Name: function(){
                var month = library.Month.CurrentMonth();
                var day = library.Month.DateOfMonth.Numeral();
                var year = library.Year.YearFull();
                return month.concat(' ',day,',',' ',year)
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var date = new Date();
                var second = date.getSeconds();
                return String(second);
            },
			DblDigit: function(){
                var date = new Date();
                var dblSecond = date.getSeconds();
                if (dblSecond < 10) {
                    var dblString = String(dblSecond);
                    var zeroString = '0';
                    return zeroString.concat(dblString);
                } else {
                    return String(dblSecond);
                }
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var date = new Date();
                var minute = date.getMinutes();
                return String(minute);
            },
			DblDigit: function(){
                var date = new Date();
                var minute = date.getMinutes();
                if (minute < 10) {
                    var minString = String(minute);
                    var zeroString = '0';
                    return zeroString.concat(minString);
                } else {
                    return String(minute);
                }
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                var date = new Date();
                var hour = date.getHours();
                return String(hour);
            },
			TwelveHour: function() {
                var date = new Date();
                var hour = date.getHours();
                if (hour > 12) {
                    var adjustHour = hour - 12;
                    return String(adjustHour);
                } else {
                    return String(hour);
                }
                    
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var date = new Date();
                        var hour = date.getHours();
                        if (hour > 11) {
                            return 'PM';
                        } else {
                            return 'AM'
                        }
                    },
					LowerCase: function(){
                        var date = new Date();
                        var hour = date.getHours();
                        if (hour > 11) {
                            return 'pm';
                        } else {
                            return 'am'
                        }
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
                var date = new Date();
                var dayOfWeek = date.getDay();
                return weekArray[dayOfWeek];
            },
			AbrDayOfWeek: function(){
                var weekAbrevs = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                var date = new Date();
                var dayOfWeek = date.getDay();
                return weekAbrevs[dayOfWeek];
            },
			FirstTwoOfWeek: function(){
                var firstTwo = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fri', 'Sat'];
                var date = new Date();
                var dayOfWeek = date.getDay();
                return firstTwo[dayOfWeek];
            },
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var num = date.getDate();
                        return String(num);
                    },
					Ordinal: function(){
                        var date = new Date();
                        var num = date.getDate();
                        var ord = 'st';
                        return String(num).concat(ord)
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var num = date.getDate();
                        var zeroString = '0';
                        return zeroString.concat(String(num));
                    }
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String(month);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth() +1;
                var monthString = String(month);
                var zeroString = '0';
                return zeroString.concat(monthString); 
            },
			AbrOfCurrentMonth: function(){
                var monthAbbr = 'Mar';
                return monthAbbr;
            },
			CurrentMonth: function(){
                var monthName = 'March';
                return monthName;
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var dayOfYear = date.getDate() + 60;
                        return String(dayOfYear);
                    },
					Ordinal: function(){
                        var date = new Date();
                        var dayOfYear = date.getDate() + 60;
                        var ord = 'st';
                        return String(dayOfYear).concat(ord);
                    }
				}
			})(),
			YearFull: function(){
                var date = new Date();
                var year = date.getFullYear();
                return String(year);
            },
			YearAbr: function(){
                var date = new Date();
                var year = date.getFullYear();
                var yearString = String(year);
                var yearAbr = yearString.replace('20', '');
                return yearAbr;
            }
		}
	})(),
	Defaults: function(){
        var year = library.Year.YearFull();
        var month = library.Month.MonthNumberDblDigit();
        var day = library.Month.DateOfMonth.DateDblDigit();
        var hour = library.Hour.TwentyFourHour();
        var min = library.Minute.DblDigit();
        var sec = library.Second.DblDigit();
        return year.concat('-',month,'-',day,'T',hour,':',min,':',sec);
    }
  }
})();