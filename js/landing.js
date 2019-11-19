"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }

      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    $(document).ready(onLoadLanding);
    var pageDelay = 5 * 1000;
    var quotes = ['Waiting for the caffeine to kick in', 'Brewing the delicious content', 'Finishing my coffee', '[Insert witty quote here]', 'Good things come to those who wait'];

    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function onLoadLanding() {
      var quote = getRandomQuote();
      var landing = $('.center-landing');
      landing.addClass('visible');
      var quoteTag = $('.landing-quote');
      quoteTag.html(quote);
      setTimeout(loadContent, pageDelay);
      spawnSteamGroups(100);
    }

    function loadContent() {
      window.location.href = './index.html';
    }

    function spawnSteamGroups(i) {
      if (i <= 0) return;
      var randomTime = Math.floor(Math.random() * 200 + 150);
      setTimeout(function () {
        spawnSteam();
        spawnSteamGroups(i - 1);
      }, randomTime);
    }

    function spawnSteam() {
      var container = document.getElementsByClassName('coffeeSvg')[0];
      var steamPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      steamPath.classList.add('steamPath');
      steamPath.setAttribute('d', 'M248.5,487.5c65-59,35-89,66-166s86-37,137-88c0,0-14.7,25.9-59,42c-33,12-47.7,4.9-67,48c-17,38-13,70-23,104S248.5,487.5,248.5,487.5z');
      container.appendChild(steamPath);
      steamPath.style.transition = 'opacity 3s ease-in-out, transform 4s ease-in-out';
      var x = 30 + Math.floor(Math.random() * 30);
      var y = 10 - Math.floor(Math.random() * 5);
      steamPath.style.transform = "translate(".concat(x, "%, ").concat(y, "%)");
      setTimeout(function () {
        steamPath.style.opacity = 1;
        x += 5 + Math.floor(Math.random() * 20);
        y -= 15 - Math.floor(Math.random() * 10);
        steamPath.style.transform = "translate(".concat(x, "%, ").concat(y, "%)");
      }, 100);
      setTimeout(function () {
        steamPath.style.opacity = 0;
        setTimeout(function () {
          steamPath.remove();
        }, 3000);
      }, 2000);
    }
  }, {}]
}, {}, [1]);