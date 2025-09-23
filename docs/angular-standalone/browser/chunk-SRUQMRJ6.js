import{s as Re,t as he}from"./chunk-MEDECE2Y.js";import{f as ke,g as Oe,k as ue}from"./chunk-3HOAJMTB.js";import{Fa as Se,J as we,Lb as W,M as Le,Ma as Fe,Pa as Ee,Qa as I,V as A,W as _e,X as R,Xa as U,gb as P,j as Ce,jb as He,k as se,la as De,n as Te,o as de,s as z,ub as Ve,vb as fe,w as Z,wb as ze,zb as Ae}from"./chunk-HHR3YHBD.js";import{$a as c,Db as M,Ea as ee,Ec as re,Fa as ve,Fb as r,Fc as le,Gb as ye,Hb as be,Ib as b,Ja as d,Jb as ne,Kb as g,Kc as Me,Lb as v,Lc as ce,Nc as pe,Ob as H,Pa as te,Pc as me,Rb as k,Sb as p,Tb as ie,Ub as oe,Va as S,W as ge,Wa as j,X as $,Y as B,Za as F,aa as L,ac as V,bb as C,bc as xe,cc as x,dc as K,fa as f,ga as h,kb as _,nc as q,oa as X,pb as l,qb as m,rb as u,sb as y,sc as ae,ta as D,vc as Ie,wb as Q,xb as N,yb as T,zb as E}from"./chunk-RQUXQMDV.js";var Pe=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var Ke=["pMenuItemContent",""],G=t=>({$implicit:t}),qe=()=>({exact:!1}),Ze=t=>({item:t});function Ue(t,a){t&1&&T(0)}function We(t,a){if(t&1&&(m(0,"a",6),c(1,Ue,1,0,"ng-container",7),u()),t&2){let e=r(2),n=H(4);p(e.cx("itemLink")),l("target",e.item.target),_("title",e.item.title)("href",e.item.url||null,ve)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),d(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",x(10,G,e.item))}}function Ye(t,a){t&1&&T(0)}function Ge(t,a){if(t&1&&(m(0,"a",8),c(1,Ye,1,0,"ng-container",7),u()),t&2){let e=r(2),n=H(4);p(e.cx("itemLink")),l("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||xe(18,qe))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),_("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),d(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",x(19,G,e.item))}}function Je(t,a){if(t&1&&(Q(0),c(1,We,2,12,"a",4)(2,Ge,2,21,"a",5),N()),t&2){let e=r();d(),l("ngIf",!(e.item!=null&&e.item.routerLink)),d(),l("ngIf",e.item==null?null:e.item.routerLink)}}function Xe(t,a){}function et(t,a){t&1&&c(0,Xe,0,0,"ng-template")}function tt(t,a){if(t&1&&(Q(0),c(1,et,1,0,null,7),N()),t&2){let e=r();d(),l("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",x(2,G,e.item))}}function nt(t,a){if(t&1&&y(0,"span"),t&2){let e=r(2);k(e.item.iconStyle),p(e.cx("itemIcon",x(4,Ze,e.item)))}}function it(t,a){if(t&1&&(m(0,"span"),ie(1),u()),t&2){let e=r(2);p(e.cx("itemLabel")),d(),oe(e.item.label)}}function ot(t,a){if(t&1&&y(0,"span",12),t&2){let e=r(2);l("innerHTML",e.sanitizeHtml(e.item.label),ee)}}function at(t,a){if(t&1&&y(0,"p-badge",13),t&2){let e=r(2);l("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function rt(t,a){if(t&1&&c(0,nt,1,6,"span",9)(1,it,2,3,"span",10)(2,ot,1,1,"ng-template",null,1,q)(4,at,1,2,"p-badge",11),t&2){let e=H(3),n=r();l("ngIf",n.item.icon),d(),l("ngIf",n.item.escape!==!1)("ngIfElse",e),d(3),l("ngIf",n.item.badge)}}var lt=["start"],st=["end"],dt=["header"],ct=["item"],pt=["submenuheader"],mt=["list"],ut=["container"],_t=(t,a)=>({showTransitionParams:t,hideTransitionParams:a}),ft=t=>({value:"visible",params:t}),$e=(t,a)=>({item:t,id:a});function ht(t,a){t&1&&T(0)}function gt(t,a){if(t&1&&(m(0,"div"),c(1,ht,1,0,"ng-container",8),u()),t&2){let e=r(2);p(e.cx("start")),_("data-pc-section","start"),d(),l("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function vt(t,a){if(t&1&&y(0,"li",12),t&2){let e=r(4);p(e.cx("separator"))}}function yt(t,a){if(t&1&&(m(0,"span"),ie(1),u()),t&2){let e=r(3).$implicit;d(),oe(e.label)}}function bt(t,a){if(t&1&&y(0,"span",16),t&2){let e=r(3).$implicit,n=r(3);l("innerHTML",n.sanitizeHtml(e.label),ee)}}function xt(t,a){if(t&1&&(Q(0),c(1,yt,2,1,"span",15)(2,bt,1,1,"ng-template",null,2,q),N()),t&2){let e=H(3),n=r(2).$implicit;d(),l("ngIf",n.escape!==!1)("ngIfElse",e)}}function It(t,a){t&1&&T(0)}function Ct(t,a){if(t&1&&(m(0,"li",13),c(1,xt,4,2,"ng-container",7)(2,It,1,0,"ng-container",14),u()),t&2){let e=r(),n=e.$implicit,i=e.index,o=r(3);p(o.cx("submenuLabel")),l("tooltipOptions",n.tooltipOptions),_("data-automationid",n.automationId)("id",o.menuitemId(n,o.id,i)),d(),l("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),d(),l("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",x(8,G,n))}}function Tt(t,a){if(t&1&&y(0,"li",12),t&2){let e=r(5);p(e.cx("separator"))}}function Mt(t,a){if(t&1){let e=E();m(0,"li",18),M("onMenuItemClick",function(i){f(e);let o=r(),s=o.$implicit,O=o.index,w=r().index,J=r(3);return h(J.itemClick(i,J.menuitemId(s,J.id,w,O)))}),u()}if(t&2){let e=r(),n=e.$implicit,i=e.index,o=r().index,s=r(3);k(n.style),p(s.cn(s.cx("item",K(13,$e,n,s.menuitemId(n,s.id,o,i))),n==null?null:n.styleClass)),l("pMenuItemContent",n)("itemTemplate",s.itemTemplate??s._itemTemplate)("tooltipOptions",n.tooltipOptions),_("data-pc-section","menuitem")("aria-label",s.label(n.label))("data-p-focused",s.isItemFocused(s.menuitemId(n,s.id,o,i)))("data-p-disabled",s.disabled(n.disabled))("aria-disabled",s.disabled(n.disabled))("id",s.menuitemId(n,s.id,o,i))}}function kt(t,a){if(t&1&&c(0,Tt,1,2,"li",10)(1,Mt,1,16,"li",17),t&2){let e=a.$implicit,n=r().$implicit;l("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),d(),l("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Ot(t,a){if(t&1&&c(0,vt,1,2,"li",10)(1,Ct,3,10,"li",11)(2,kt,2,2,"ng-template",9),t&2){let e=a.$implicit;l("ngIf",e.separator&&e.visible!==!1),d(),l("ngIf",!e.separator),d(),l("ngForOf",e.items)}}function wt(t,a){if(t&1&&c(0,Ot,3,3,"ng-template",9),t&2){let e=r(2);l("ngForOf",e.model)}}function Lt(t,a){if(t&1&&y(0,"li",12),t&2){let e=r(4);p(e.cx("separator"))}}function Dt(t,a){if(t&1){let e=E();m(0,"li",20),M("onMenuItemClick",function(i){f(e);let o=r(),s=o.$implicit,O=o.index,w=r(3);return h(w.itemClick(i,w.menuitemId(s,w.id,O)))}),u()}if(t&2){let e=r(),n=e.$implicit,i=e.index,o=r(3);p(o.cn(o.cx("item",K(12,$e,n,o.menuitemId(n,o.id,i))),n==null?null:n.styleClass)),l("pMenuItemContent",n)("itemTemplate",o.itemTemplate??o._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),_("data-pc-section","menuitem")("aria-label",o.label(n.label))("data-p-focused",o.isItemFocused(o.menuitemId(n,o.id,i)))("data-p-disabled",o.disabled(n.disabled))("aria-disabled",o.disabled(n.disabled))("id",o.menuitemId(n,o.id,i))}}function St(t,a){if(t&1&&c(0,Lt,1,2,"li",10)(1,Dt,1,15,"li",19),t&2){let e=a.$implicit;l("ngIf",e.separator&&e.visible!==!1),d(),l("ngIf",!e.separator&&e.visible!==!1)}}function Ft(t,a){if(t&1&&c(0,St,2,2,"ng-template",9),t&2){let e=r(2);l("ngForOf",e.model)}}function Et(t,a){t&1&&T(0)}function Ht(t,a){if(t&1&&(m(0,"div"),c(1,Et,1,0,"ng-container",8),u()),t&2){let e=r(2);p(e.cx("end")),_("data-pc-section","end"),d(),l("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function Vt(t,a){if(t&1){let e=E();m(0,"div",4,0),M("click",function(i){f(e);let o=r();return h(o.onOverlayClick(i))})("@overlayAnimation.start",function(i){f(e);let o=r();return h(o.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){f(e);let o=r();return h(o.onOverlayAnimationEnd(i))}),c(2,gt,2,4,"div",5),m(3,"ul",6,1),M("focus",function(i){f(e);let o=r();return h(o.onListFocus(i))})("blur",function(i){f(e);let o=r();return h(o.onListBlur(i))})("keydown",function(i){f(e);let o=r();return h(o.onListKeyDown(i))}),c(5,wt,1,1,null,7)(6,Ft,1,1,null,7),u(),c(7,Ht,2,4,"div",5),u()}if(t&2){let e=r();k(e.sx("root")),p(e.cn(e.cx("root"),e.styleClass)),l("ngStyle",e.style)("@overlayAnimation",x(24,ft,K(21,_t,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),_("data-pc-name","menu")("id",e.id),d(2),l("ngIf",e.startTemplate??e._startTemplate),d(),p(e.cx("list")),_("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),d(2),l("ngIf",e.hasSubMenu()),d(),l("ngIf",!e.hasSubMenu()),d(),l("ngIf",e.endTemplate??e._endTemplate)}}var zt={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},At={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:a,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(a.disabled)},a.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},Y=(()=>{class t extends U{name="menu";theme=Pe;classes=At;inlineStyles=zt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Rt=(()=>{class t extends P{item;itemTemplate;onMenuItemClick=new C;menu;_componentStyle=L(Y);constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)(te(ge(()=>Be)))};static \u0275cmp=S({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[V([Y]),F],attrs:Ke,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let o=E();m(0,"div",2),M("click",function(O){return f(o),h(i.onItemClick(O,i.item))}),c(1,Je,3,2,"ng-container",3)(2,tt,2,4,"ng-container",3)(3,rt,5,4,"ng-template",null,0,q),u()}n&2&&(p(i.cx("itemContent")),_("data-pc-section","content"),d(),l("ngIf",!i.itemTemplate),d(),l("ngIf",i.itemTemplate))},dependencies:[z,se,de,ue,ke,Oe,He,he,fe,Ve,I],encapsulation:2})}return t})(),Be=(()=>{class t extends P{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=Ie(void 0);onShow=new C;onHide=new C;onBlur=new C;onFocus=new C;listViewChild;containerViewChild;$appendTo=ae(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ae(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=X(-1);selectedOptionIndex=X(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=L(Y);constructor(e){super(),this.overlayService=e,this.id=this.id||Se("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),R(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&W.clear(e.element);break}}alignOverlay(){this.relativeAlign?Le(this.container,this.target):we(this.container,this.target)}appendOverlay(){ze.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&W.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!De()&&this.hide()}menuitemId(e,n,i,o){return e?.id??`${n}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(R(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)R(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(A(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=_e(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&_e(n,'a[data-pc-section="action"]');this.popup&&R(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...A(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...A(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=A(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&Z(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),o=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&o&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&Z(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&Z(this.platformId)&&(this.scrollHandler=new Ae(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&W.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)(te(Fe))};static \u0275cmp=S({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,o){if(n&1&&(b(o,lt,4),b(o,st,4),b(o,dt,4),b(o,ct,4),b(o,pt,4),b(o,Ee,4)),n&2){let s;g(s=v())&&(i.startTemplate=s.first),g(s=v())&&(i.endTemplate=s.first),g(s=v())&&(i.headerTemplate=s.first),g(s=v())&&(i.itemTemplate=s.first),g(s=v())&&(i.submenuHeaderTemplate=s.first),g(s=v())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(ne(mt,5),ne(ut,5)),n&2){let o;g(o=v())&&(i.listViewChild=o.first),g(o=v())&&(i.containerViewChild=o.first)}},inputs:{model:"model",popup:[2,"popup","popup",re],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",re],baseZIndex:[2,"baseZIndex","baseZIndex",le],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",le],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[V([Y]),F],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&c(0,Vt,8,26,"div",3),n&2&&l("ngIf",!i.popup||i.visible)},dependencies:[z,Ce,se,de,Te,ue,Rt,he,Re,fe,I],encapsulation:2,data:{animation:[Me("overlayAnimation",[me(":enter",[pe({opacity:0,transform:"scaleY(0.8)"}),ce("{{showTransitionParams}}")]),me(":leave",[ce("{{hideTransitionParams}}",pe({opacity:0}))])])]},changeDetection:0})}return t})(),Tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Be,I,I]})}return t})();var je=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Pt=["*"],$t={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},Bt={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},Qe=(()=>{class t extends U{name="divider";theme=je;classes=Bt;inlineStyles=$t;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var jt=(()=>{class t extends P{styleClass;layout="horizontal";type="solid";align;_componentStyle=L(Qe);static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(n,i){n&2&&(_("aria-orientation",i.layout),k(i.sx("root")),p(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[V([Qe]),F],ngContentSelectors:Pt,decls:2,vars:2,template:function(n,i){n&1&&(ye(),m(0,"div"),be(1),u()),n&2&&p(i.cx("content"))},dependencies:[z,I],encapsulation:2,changeDetection:0})}return t})(),Pn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[jt]})}return t})();export{Be as a,Tn as b,jt as c,Pn as d};
