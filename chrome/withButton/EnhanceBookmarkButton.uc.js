//右键书签按钮弹出书签菜单
(function() {
  var add = document.getElementById('bookmarks-menu-button');
  if (!add) return;
  add.setAttribute("tooltiptext", "左键：将此页加为书签\n右键：弹出书签菜单");
  add.addEventListener("click", function(e) {
    if (e.button == 2) {
      document.getElementById('BMB_bookmarksPopup').showPopup();
    }
  }, false);
  add.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
})();
