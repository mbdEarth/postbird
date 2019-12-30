var strftime = require('strftime');

var helpers = global.ViewHelpers = {
  formatCell: function (value, format) {
    var c = value;
    if (!c) return c;
    switch (format) {
      case 'text':
        var n = $dom(['span']);
        n.innerText = '' + value;
        c = '<span class="text">' + n.innerHTML + '</span>';
        break;
      case 'timestamp':
        var d = new Date(Date.parse(value)); // convert to current timezone
        c = '<time>' + strftime('%Y-%m-%d %H:%M:%S', d) + '</time>';
        break;
    }

    return c;
  },

  truncate: function(str, length) {
    if (typeof str != 'string') str = '' + str;
    if (!length) length = 100;
    if (str.length > length) {
      return str.substr(0, length - 3) + '...';
    } else {
      return str;
    }
  }
};