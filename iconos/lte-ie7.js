/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#xe001;',
			'icon-twitter' : '&#xe002;',
			'icon-instagram' : '&#xe003;',
			'icon-feed' : '&#xe004;',
			'icon-youtube' : '&#xe005;',
			'icon-images' : '&#xe006;',
			'icon-camera' : '&#xe007;',
			'icon-pencil' : '&#xe008;',
			'icon-home' : '&#xe009;',
			'icon-folder-open' : '&#xe00a;',
			'icon-tag' : '&#xe00b;',
			'icon-alarm' : '&#xe00c;',
			'icon-clock' : '&#xe00d;',
			'icon-location' : '&#xe00e;',
			'icon-phone' : '&#xe00f;',
			'icon-support' : '&#xe010;',
			'icon-cart' : '&#xe011;',
			'icon-mobile' : '&#xe012;',
			'icon-tablet' : '&#xe013;',
			'icon-screen' : '&#xe014;',
			'icon-cabinet' : '&#xe015;',
			'icon-box-remove' : '&#xe016;',
			'icon-disk' : '&#xe017;',
			'icon-undo' : '&#xe018;',
			'icon-redo' : '&#xe019;',
			'icon-zoom-in' : '&#xe01a;',
			'icon-zoom-out' : '&#xe01b;',
			'icon-user' : '&#xe01c;',
			'icon-users' : '&#xe01d;',
			'icon-bubbles' : '&#xe01e;',
			'icon-users-2' : '&#xe01f;',
			'icon-user-2' : '&#xe020;',
			'icon-expand' : '&#xe021;',
			'icon-contract' : '&#xe022;',
			'icon-key' : '&#xe023;',
			'icon-unlocked' : '&#xe024;',
			'icon-lock' : '&#xe025;',
			'icon-wrench' : '&#xe026;',
			'icon-checkmark-circle' : '&#xe027;',
			'icon-cancel-circle' : '&#xe028;',
			'icon-cogs' : '&#xe029;',
			'icon-cog' : '&#xe02a;',
			'icon-cog-2' : '&#xe02b;',
			'icon-stats' : '&#xe02c;',
			'icon-bars' : '&#xe02d;',
			'icon-gift' : '&#xe02e;',
			'icon-remove' : '&#xe02f;',
			'icon-eye' : '&#xe030;',
			'icon-eye-blocked' : '&#xe031;',
			'icon-html5' : '&#xe032;',
			'icon-css3' : '&#xe033;',
			'icon-lastfm' : '&#xe034;',
			'icon-android' : '&#xe035;',
			'icon-apple' : '&#xe036;',
			'icon-tux' : '&#xe037;',
			'icon-windows8' : '&#xe038;',
			'icon-skype' : '&#xe039;',
			'icon-envelope' : '&#xe03a;',
			'icon-google-plus' : '&#xe000;',
			'icon-arrow-up-left' : '&#xe03b;',
			'icon-arrow-up' : '&#xe03c;',
			'icon-arrow-up-right' : '&#xe03d;',
			'icon-arrow-right' : '&#xe03e;',
			'icon-arrow-down-right' : '&#xe03f;',
			'icon-arrow-down' : '&#xe040;',
			'icon-arrow-down-left' : '&#xe041;',
			'icon-arrow-left' : '&#xe042;',
			'icon-arrow-up-left-2' : '&#xe043;',
			'icon-arrow-up-2' : '&#xe044;',
			'icon-arrow-up-right-2' : '&#xe045;',
			'icon-arrow-right-2' : '&#xe046;',
			'icon-arrow-down-right-2' : '&#xe047;',
			'icon-arrow-down-2' : '&#xe048;',
			'icon-arrow-down-left-2' : '&#xe049;',
			'icon-arrow-left-2' : '&#xe04a;',
			'icon-thumbs-up' : '&#xe04b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};