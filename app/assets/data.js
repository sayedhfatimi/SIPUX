window.$ = window.jQuery = require('jquery')

$.get("https://api.blockcypher.com/v1/btc/main/addrs/3QvPr4XsrJiSsmLbBgFY8z7uoKCHc6VZjr", function(data) {
    console.log(data)
})