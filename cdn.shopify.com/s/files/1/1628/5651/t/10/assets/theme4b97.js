!function(e){e.fn.prepareTransition=function(){return this.each((function(){var t=e(this);t.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",(function(){t.removeClass("is-transitioning")}));var n=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var r=0;e.each(n,(function(e,n){r=parseFloat(t.css(n))||r})),0!=r&&(t.addClass("is-transitioning"),t[0].offsetWidth)}))}}(jQuery);var afterResize=function(){var e={};return function(t,n,r){r||(r="Don't call this twice without a uniqueId"),e[r]&&clearTimeout(e[r]),e[r]=setTimeout(t,n)}}();window.theme=window.theme||{},theme.cacheSelectors=function(){theme.cache={$w:$(window),$body:$("body"),$mobileNavTrigger:$("#MobileNavTrigger"),$mobileNav:$("#MobileNav"),$mobileSublistTrigger:$(".mobile-nav__sublist-trigger"),cartNoteAdd:".cart__note-add",cartNote:".cart__note",$searchInput:$(".search-bar__input"),$searchSubmit:$(".search-bar__submit")}},theme.init=function(){theme.cacheSelectors(),theme.mobileNav(),theme.cartPage(),theme.drawersInit()},theme.mobileNav=function(){theme.cache.$mobileNavTrigger.on("click",(function(){theme.cache.$mobileNav.slideToggle(220)})),theme.cache.$mobileSublistTrigger.on("click",(function(e){var t=$(this);e.preventDefault(),t.toggleClass("is-active").next(".mobile-nav__sublist").slideToggle(200)}))},theme.cartPage=function(){theme.cache.$body.on("click",theme.cache.cartNoteAdd,(function(){$(this).addClass("is-hidden"),$(theme.cache.cartNote).addClass("is-active"),ajaxifyShopify.sizeDrawer()}))},theme.drawersInit=function(){$("#PageContainer").addClass("drawer-page-content"),$(".js-drawer-open-top").attr("aria-controls","SearchDrawer").attr("aria-expanded","false"),theme.SearchDrawer=new theme.Drawers("SearchDrawer","top",{onDrawerOpen:theme.searchFocus})},theme.searchFocus=function(){theme.cache.$searchInput.focus(),theme.cache.$searchInput[0].setSelectionRange(0,theme.cache.$searchInput[0].value.length)},theme.searchSubmit=function(){theme.cache.$searchSubmit.on("click",(function(e){0==theme.cache.$searchInput.val().length&&(e.preventDefault(),theme.cache.$searchInput.focus())}))},theme.Drawers=function(){var e=function(e,t,n){var r={close:".js-drawer-close",open:".js-drawer-open-"+t,openClass:"js-drawer-open",dirOpenClass:"js-drawer-open-"+t};if(this.$nodes={parent:$("body, html"),page:$("#PageContainer")},this.config=$.extend(r,n),this.position=t,this.$drawer=$("#"+e),!this.$drawer.length)return!1;this.drawerIsOpen=!1,this.init()};return e.prototype.init=function(){$(this.config.open).on("click",$.proxy(this.open,this)),this.$drawer.on("click",this.config.close,$.proxy(this.close,this))},e.prototype.open=function(e){var t=!1;if(e?e.preventDefault():t=!0,e&&e.stopPropagation&&(e.stopPropagation(),this.$activeSource=$(e.currentTarget)),this.drawerIsOpen&&!t)return this.close();this.$drawer.prepareTransition(),this.$nodes.parent.addClass(this.config.openClass+" "+this.config.dirOpenClass),this.drawerIsOpen=!0,this.trapFocus({$container:this.$drawer,$elementToFocus:this.$drawer.find(".drawer__close-button"),namespace:"drawer_focus"}),this.config.onDrawerOpen&&"function"==typeof this.config.onDrawerOpen&&(t||this.config.onDrawerOpen()),this.$activeSource&&this.$activeSource.attr("aria-expanded")&&this.$activeSource.attr("aria-expanded","true"),this.$nodes.parent.on("keyup.drawer",$.proxy((function(e){if(27===e.keyCode)return this.close(),!1}),this)),this.$nodes.page.on("touchmove.drawer",(function(){return!1})),this.$nodes.page.on("click.drawer",$.proxy((function(){return this.close(),!1}),this))},e.prototype.close=function(){this.drawerIsOpen&&($(document.activeElement).trigger("blur"),this.$drawer.prepareTransition(),this.$nodes.parent.removeClass(this.config.dirOpenClass+" "+this.config.openClass),this.drawerIsOpen=!1,this.removeTrapFocus({$container:this.$drawer,namespace:"drawer_focus"}),this.$nodes.page.off(".drawer"),this.$nodes.parent.off(".drawer"))},e.prototype.trapFocus=function(e){var t=e.eventNamespace?"focusin."+eventNamespace:"focusin";e.$elementToFocus||(e.$elementToFocus=e.$container),e.$container.attr("tabindex","-1"),e.$elementToFocus.focus(),$(document).on(t,(function(t){e.$container[0]===t.target||e.$container.has(t.target).length||e.$container.focus()}))},e.prototype.removeTrapFocus=function(e){var t=e.namespace?"focusin."+e.namespace:"focusin";e.$container&&e.$container.length&&e.$container.removeAttr("tabindex"),$(document).off(t)},e}(),$(theme.init);
//# sourceMappingURL=/s/files/1/1628/5651/t/10/assets/theme.js.map?v=11498154881225707759
