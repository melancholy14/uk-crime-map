(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{310:function(e,t,n){e.exports=n(554)},318:function(e,t,n){},554:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(1),c=n.n(r),o=n(79),i=n.n(o),l=n(567),u=n(573),s=n(572),d=n(49),m=n(24),h=n(308),f=n(287),p=n(11);n(318);function b(){var e=Object(a.a)(["\n    order: 0;\n    background: darkslateblue;\n    color: yellow;\n    line-height: 2rem;\n    height: 2.5rem;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    position: relative;\n    display: flex;\n\n    @media screen and (min-width: 768px) {\n      height: 4rem;\n      display: initial;\n    }\n\n    .title {\n      width: calc(100% - 11rem);\n      text-align: center;\n      font-size: larger;\n      font-weight: bolder;\n\n      @media screen and (min-width: 768px) {\n        width: initial;\n      }\n    }\n\n    .email {\n      width: 10rem;\n      text-align: right;\n      padding: 0 1rem 0 0;\n      font-size: small;\n\n      @media screen and (min-width: 768px) {\n        width: initial;\n        padding: 0 1rem;\n      }\n\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n    }\n"]);return b=function(){return e},e}var g=p.a.header(b()),v=c.a.memo(function(){return c.a.createElement(g,null,c.a.createElement("div",{className:"title"},"CRIME MAP"),c.a.createElement("div",{className:"email"},c.a.createElement("span",{className:"smaller"},c.a.createElement("a",{href:"mailto:melancholy8914@gmail.com"},"melancholy8914@gmail.com"))))}),E=n(28),O=n(57),y=n(58),j=n(62),w=n(59),x=n(64),k=n(290),C=n(94),S="containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS",A="containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE",_="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST",L="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS",D="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE",R="containers/SearchPage/actions/SEARCH_REQUEST",I="containers/SearchPage/actions/SEARCH_SUCCESS",N="containers/SearchPage/actions/SEARCH_FAILURE";function P(e){var t=e.reduce(function(e,t){return{min:e.min&&e.min<t.date?e.min:t.date,max:e.max&&e.max>t.date?e.max:t.date,dates:e.dates?Object(C.a)(e.dates).concat([{value:t.date}]):[{value:t.date}]}},{min:"",max:"",dates:[]});return{type:S,data:{availability:e,date:t}}}function T(e){return{type:I,data:e}}function M(e){return{type:N,message:e}}var Y=n(72),H="all-crime",U={"all-crime":"#d17f68","anti-social-behaviour":"#73b638","bicycle-theft":"#a45dcf",burglary:"#5fbc6e","criminal-damage-arson":"#c0489a",drugs:"#4b7d3c","other-theft":"#666dc6","possession-of-weapons":"#d99938","public-order":"#5e99d2",robbery:"#cc4f32",shoplifting:"#49b9a9","theft-from-the-person":"#c7496a","vehicle-crime":"#adac4d","violent-crime":"#c581bb","other-crime":"#8b6c2f"},$="containers/MapPage/actions/SAVE_LOCATION",q="containers/MapPage/actions/INITIAL_CRIME_CIRCLES",z="containers/MapPage/actions/FILTER_CRIME_CIRCLES",F=function(e){return.25*e+.75},G=function(e){return 225*e+25};function B(e){return{type:$,data:e}}function K(e){var t=e.reduce(function(e,t){var n=t.category,a=t.location,r=(a=void 0===a?{}:a).latitude,c=a.longitude,o=a.street,i=void 0===o?{}:o;return e[i.id]?Object(E.a)({},e,Object(Y.a)({},i.id,Object(E.a)({},e[i.id],{count:e[i.id].count+1}))):Object(E.a)({},e,Object(Y.a)({},i.id,{category:n,fillColor:U[n],street:i,count:1,latlng:[parseFloat(r),parseFloat(c)]}))},{}),n=Object.values(t),a=Math.max.apply(Math,Object(C.a)(n.map(function(e){return e.count}))),r=n.map(function(e){return Object(E.a)({},e,{opacity:F(e.count/a),radius:G(e.count/a)})});return{type:q,data:r}}var W=n(44),V=n(92),Q=function(e){return e.search},J=Object(V.a)([function(e){return e.form},Q],function(e,t){var n=e.search,a=(n=void 0===n?{}:n).values,r=((a=void 0===a?{}:a).minDate,a.maxDate,a.postcode,Object(W.a)(a,["minDate","maxDate","postcode"])),c=n.active,o=t.category,i=[];if(c)if(c===H)i=o.map(function(e){return Object(E.a)({},e,{checked:r[c]})});else{var l=Object.values(r).every(function(e){return e});i=o.map(function(e){return Object(E.a)({},e,{checked:e.url===H?l:void 0===r[e.url]||!!r[e.url]})})}else i=o.map(function(e){return Object(E.a)({},e,{checked:void 0===r[e.url]||!!r[e.url]})});return i}),X=Object(V.a)([Q],function(e){e.loading,e.message;return Object(W.a)(e,["loading","message"])}),Z=Object(V.a)([Q],function(e){return{loading:e.loading,message:e.message}});function ee(){var e=Object(a.a)(["\n  border: none;\n  font-size: large;\n  background: transparent;\n"]);return ee=function(){return e},e}function te(){var e=Object(a.a)(["\n  position: fixed;\n  background-color: white;\n  padding: 0.5rem;\n  right: 0;\n  left: 0;\n  text-align: right;\n\n  bottom: 4rem;\n  border-top: 1px dotted black;\n\n  @media screen and (min-width: 426px) {\n    bottom: 6.5rem;\n    padding: 1rem;\n  }\n\n  @media screen and (min-width: 769px) {\n    right: 10%;\n    left: 10%;\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(a.a)(["\n  position: fixed;\n  background: white;\n  min-height: 10rem;\n  // height: calc(50% - 6rem);\n  overflow: auto;\n  top: 7.5rem;\n  left: 0;\n  right: 0;\n  bottom: ",";\n  \n  @media screen and (min-width: 426px) {\n    top: 10rem;\n    bottom: ","\n  }\n\n  @media screen and (min-width: 769px) {\n    right: 10%;\n    left: 10%;\n  }\n"]);return ne=function(){return e},e}function ae(){var e=Object(a.a)(["\n  display: inline-block;\n  width: 2rem;\n  font-size: large;\n  font-weight: bold;    \n  border: 0;\n  background-color: black;\n  color: white;\n"]);return ae=function(){return e},e}function re(){var e=Object(a.a)(["\n  display: inline-block;\n  width: calc(100% - 2rem);\n"]);return re=function(){return e},e}function ce(){var e=Object(a.a)(["\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 4.5rem;\n  height: 3rem;\n  background-color: black;\n  color: white;\n  vertical-align: middle;\n  line-height: 3rem;\n  text-align: center;\n\n  @media screen and (min-width: 426px) {\n    top: 7rem;\n  }\n\n  @media screen and (min-width: 769px) {\n    right: 10%;\n    left: 10%;\n  }\n\n  .close {\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  display: ",";\n"]);return oe=function(){return e},e}var ie=p.a.div(oe(),function(e){return e.show?"block":"none"}),le=p.a.div(ce()),ue=p.a.div(re()),se=p.a.button(ae()),de=p.a.div(ne(),function(e){return e.fixed?"6.5rem":"initial"},function(e){return e.fixed?"10em":"initial"}),me=p.a.div(te()),he=p.a.button(ee()),fe=c.a.memo(function(e){var t=e.title,n=e.show,a=e.onClose,r=e.fixedBottom,o=void 0!==r&&r,i=e.children;return c.a.createElement(ie,{show:n},t&&c.a.createElement(le,null,c.a.createElement(ue,null,t),a&&!o&&c.a.createElement(se,{type:"button",onClick:a},"X")),c.a.createElement(de,{fixed:o},i),a&&o&&c.a.createElement(me,null,a&&c.a.createElement(he,{type:"button",onClick:a},"Close")))});fe.defaultProps={title:null,onClose:null,fixedBottom:!1};var pe=fe;function be(){var e=Object(a.a)(["\n  display: table-cell;\n"]);return be=function(){return e},e}function ge(){var e=Object(a.a)(["\n  display: table-cell;\n  font-weight: 600;\n  width: 4rem;\n"]);return ge=function(){return e},e}function ve(){var e=Object(a.a)(["\n  display: table-row;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(a.a)(["\n  margin: 0.5rem auto;\n  display: table;\n\n  box-shadow: 1.5px 2px 1px 1px;\n  border-radius: 0.5rem;\n  width: -webkit-fill-available;\n  padding: 0.5rem;\n"]);return Ee=function(){return e},e}var Oe=p.a.div(Ee()),ye=p.a.div(ve()),je=p.a.div(ge()),we=p.a.div(be()),xe=function(e){var t=e.children;return c.a.createElement(je,null,t)},ke=function(e){var t=e.children;return c.a.createElement(we,null,t)},Ce=function(e){var t=e.children;return c.a.createElement(ye,null,t)},Se=function(e){var t=e.children;return c.a.createElement(Oe,null,t)},Ae=n(291);function _e(){var e=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  display: ","\n\n  & > div {\n    // margin: 15rem auto;\n    position: absolute;\n    top: 47.5%;\n    left: 47.5%;\n  }\n"]);return _e=function(){return e},e}var Le=p.a.div(_e(),function(e){return e.loading?"block":"none"}),De=c.a.memo(function(e){var t=e.loading;return c.a.createElement(Le,{loading:t},c.a.createElement(Ae.PulseLoader,{color:"#fff",loading:t}))});function Re(){var e=Object(a.a)(["\n  margin: 1rem;\n  padding: 1rem 0.5rem;\n"]);return Re=function(){return e},e}var Ie=p.a.div(Re()),Ne=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(j.a)(this,Object(w.a)(t).call(this))).toggleModal=function(){var t=e.state.show;e.setState({show:!t})},e.state={show:!1},e}return Object(x.a)(t,e),Object(y.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.message;e.message!==t&&this.toggleModal()}},{key:"render",value:function(){var e=this.props.message,t=this.state.show;return c.a.createElement(pe,{title:"Something goes wrong",show:t,onClose:this.toggleModal},c.a.createElement(Ie,null,e))}}]),t}(c.a.PureComponent);function Pe(){var e=Object(a.a)(["\n  border: 1px solid lightgray;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  min-width: 5rem;\n  background-color: white;\n  font-family: inherit;\n"]);return Pe=function(){return e},e}p.a.select(Pe());function Te(){var e=Object(a.a)(["\n  background-color: black;\n  color: white;\n  font-weight: bolder;\n  padding: 0.3rem 1rem;\n  border: 0;\n  border-radius: 0.5rem;\n  min-height: 1.5rem;\n  font-family: inherit;\n"]);return Te=function(){return e},e}var Me=p.a.button(Te()),Ye=c.a.memo(function(e){var t=e.onClick,n=e.className,a=e.children,r=Object(W.a)(e,["onClick","className","children"]);return c.a.createElement(Me,Object.assign({onClick:t,className:n},r),a)});c.a.memo(function(e){var t=e.id,n=e.name,a=e.checked,r=e.onChange,o=Object(W.a)(e,["id","name","checked","onChange"]);return c.a.createElement("input",Object.assign({type:"checkbox",name:n,id:t,onChange:r,checked:a},o))});function He(){var e=Object(a.a)(["\n  display: ",";\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-top: none;\n\n  position: absolute;\n  top: 3rem;\n  bottom: 0;\n  overflow: auto;\n\n  animation: fadeEffect 1s;\n  @keyframes fadeEffect {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return He=function(){return e},e}function Ue(){var e=Object(a.a)(["\n  background-color: ",";\n  // float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n  font-size: medium;\n\n  &:hover {\n    background-color: #ddd;\n  }\n"]);return Ue=function(){return e},e}function $e(){var e=Object(a.a)(["\n  overflow: hidden;\n  background-color: #f1f1f1;\n  border: 1px solid #ccc;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n"]);return $e=function(){return e},e}function qe(){var e=Object(a.a)(["\n  position: relative;\n  height: 100%;\n"]);return qe=function(){return e},e}var ze=p.a.div(qe()),Fe=p.a.div($e()),Ge=p.a.button(Ue(),function(e){return e.active?"#ccc":"inherit"}),Be=p.a.div(He(),function(e){return e.active?"block":"none"}),Ke=Object(r.memo)(function(e){var t=e.data,n=e.activeKey,a=e.onSelect;return c.a.createElement(Fe,null,t&&t.map(function(e,t){return c.a.createElement(Ge,{key:e,active:n===t,onClick:a(t)},e)}))}),We=Object(r.memo)(function(e){var t=e.activeKey,n=e.titles,a=void 0===n?[]:n,r=e.children;return r&&r.map(function(e,n){return c.a.createElement(Be,{key:a[n],id:n,active:t===n},e)})}),Ve=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(j.a)(this,Object(w.a)(t).call(this))).titles=[],e.select=function(t){return function(){e.setState({id:t})}},e.renderChildren=function(){try{var t=e.props,n=t.onSelect,a=void 0===n?e.select:n,r=t.children,o=e.state.id;return c.a.Children.map(r,function(t){if(t){if(t.type===We)return c.a.cloneElement(t,{activeKey:o,titles:e.titles});if(t.type===Ke)return e.titles=t.props.data,c.a.cloneElement(t,{activeKey:o,onSelect:a})}return c.a.createElement("div",null)})}catch(i){return console.error(i),c.a.createElement("div",null)}},e.state={id:0},e}return Object(x.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement(ze,null,this.renderChildren())}}]),t}(c.a.Component);Ve.Title=Ke,Ve.Body=We;var Qe=Ve,Je=n(560),Xe=n(565),Ze=n(568);function et(){var e=Object(a.a)(["\n  border: 1px solid lightgray;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  min-width: 5rem;\n  font-family: inherit;\n"]);return et=function(){return e},e}var tt=Object(p.a)(Ze.a)(et()),nt={Text:function(e){return c.a.createElement(tt,Object.assign({component:"input",type:"text"},e))},Select:function(e){var t=e.options,n=Object(W.a)(e,["options"]);return c.a.createElement(tt,Object.assign({component:"select"},n),t&&t.map(function(e){var t=e.value,n=e.text,a=void 0===n?t:n;return c.a.createElement("option",{key:t,value:t},a)}))},Checkbox:function(e){return c.a.createElement(Ze.a,Object.assign({component:"input",type:"checkbox"},e))}};function at(){var e=Object(a.a)(["\n  padding: 0.5rem;\n  display: inline-block;\n  min-width: 4.5rem;\n\n  & > label {\n    font-size: smaller;\n    text-transform: capitalize;\n    font-weight: bold;\n  }\n\n  &.select {\n    padding: 0.25rem 0.5rem;\n\n    @media screen and (min-width: 425px) {\n      min-width: 15rem;\n    }\n  }\n\n  &.crimes, &.buttons {\n    width: calc(100% - 1rem);\n  }\n\n  &.crimes {\n    height: 5.5rem\n    overflow: auto;\n\n    @media screen and (min-width: 768px) {\n      height: initial;\n    }\n\n    .each-crime {\n      display: inline-block;\n\n      min-width: 50%;\n      @media screen and (min-width: 768px) {\n        min-width: calc(100% / 3);\n      }\n      @media screen and (min-width: 1024px) {\n        min-width: 25%;\n      }\n\n      font-size: small;\n      line-height: 1rem;\n      vertical-align: middle;\n\n      label {\n        font-size: smaller;\n        font-weight: bolder;\n      }\n\n      .color {\n        width: 0.75rem;\n        height: 0.75rem;\n        display: inline-block;\n        border-radius: 0.5rem;\n        margin: 0 0.3rem;\n      }\n    }\n  }\n\n  &.buttons {\n    button {\n      width: 100%;\n    }\n  }\n"]);return at=function(){return e},e}var rt=p.a.div(at()),ct=function(e){var t=e.id,n=e.className,a=e.children;return c.a.createElement(rt,{id:t,className:n},a)};ct.defaultProps={id:null,className:""};var ot=ct,it=Object(Xe.a)({form:"search"})(function(e){var t=e.dates,n=e.category,a=e.onCheckCategory,r=e.handleSubmit;return c.a.createElement(Je.a,{onSubmit:r},c.a.createElement(ot,null,"date"),c.a.createElement(ot,{className:"select",id:"select_date"},c.a.createElement(nt.Select,{name:"minDate",options:t}),c.a.createElement("span",null," ~ "),c.a.createElement(nt.Select,{name:"maxDate",options:t})),c.a.createElement(ot,null,"postcode"),c.a.createElement(ot,{className:"select"},c.a.createElement(nt.Text,{name:"postcode",id:"postcode"})),c.a.createElement(ot,{className:"crimes"},n&&n.map(function(e){var t=e.url,n=e.checked,r=e.name;return c.a.createElement("div",{className:"each-crime",key:t},c.a.createElement("label",{htmlFor:"checkbox_".concat(t)},c.a.createElement(nt.Checkbox,{name:t,id:"checkbox_".concat(t),onChange:a,checked:n}),r,t!==H&&c.a.createElement("span",{className:"color",style:{backgroundColor:U[t]}})))})),c.a.createElement(ot,{className:"buttons"},c.a.createElement(Ye,{type:"submit"},"SEARCH")))});function lt(){var e=Object(a.a)(["\n  order: 1;\n  margin: 0.25rem;\n\n  @media screen and (min-width: 768px) {\n    margin: 0.5rem;\n    padding: 0.5rem;\n  }\n"]);return lt=function(){return e},e}var ut=p.a.aside(lt()),st=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).checkCategory=Object(k.debounce)(function(){var e=n.props,t=e.categories;(0,e.onFilterCrimeCategory)(t.reduce(function(e,t){return t.checked&&e.push(t.url),e},[]))},250),n.search=function(e){var t=n.props,a=t.search.date,r=(a=void 0===a?{}:a).dates;(0,t.onSearch)(Object(E.a)({},e,{dates:r}))},n}return Object(x.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.meta,n=t.message,a=t.loading,o=e.search.date,i=(o=void 0===o?{}:o).dates,l=e.categories;return c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(ut,null,c.a.createElement(it,{dates:i,category:l,onCheckCategory:this.checkCategory,onSubmit:this.search}),c.a.createElement(De,{loading:a}),c.a.createElement(Ne,{message:n})))}}]),t}(c.a.PureComponent);st.defaultProps={search:{availability:[],category:[]},meta:{message:null,loading:!1},onSelectCrimeCategory:function(){},onFilterCrimeCategory:function(){},onSearch:function(){}};var dt=Object(d.b)(function(e){return{search:X(e),meta:Z(e),categories:J(e)}},function(e){return{onSearch:function(t){return e(function(e){var t=e.minDate,n=e.maxDate,a=e.dates,r=e.postcode,c=a[0].value,o=t||c,i=n||c,l=a.reduce(function(e,t){return o<=t.value&&t.value<=i?Object(C.a)(e).concat([t.value]):e},[]).sort(function(e,t){return e.localeCompare(t)});return{type:R,data:{dates:l,postcode:r}}}(t))},onFilterCrimeCategory:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:z,data:e}}(t))}}})(st),mt=n(566),ht=n(571),ft=n(561),pt=n(574),bt=n(569),gt="containers/AnalysePage/LOAD_GRAPHS_REQUEST",vt="containers/AnalysePage/LOAD_GRAPHS_SUCCESS",Et="containers/AnalysePage/LOAD_GRAPHS_FAILURE",Ot="containers/AnalysePage/LOAD_NEWS_REQUEST",yt="containers/AnalysePage/LOAD_NEWS_SUCCESS",jt="containers/AnalysePage/LOAD_NEWS_FAILURE",wt="containers/AnalysePage/LOAD_NEIGHBOURHOOD_REQUEST",xt="containers/AnalysePage/LOAD_NEIGHBOURHOOD_SUCCESS",kt="containers/AnalysePage/LOAD_NEIGHBOURHOOD_FAILURE",Ct="containers/AnalysePage/SAVE_STREET_DATA",St="containers/AnalysePage/TOGGLE_SHOW";function At(e,t,n,a){return{type:xt,data:{init:e,team:t,events:n,priorities:a}}}function _t(e){return{type:Ct,data:e}}function Lt(e){return{type:St,data:e}}var Dt=Object(V.a)([function(e){return e.map}],function(e){return e});function Rt(){var e=Object(a.a)(["\n  order: 2;\n  height: 32.5rem;\n  z-index: 0;\n\n  .leaflet-container {\n    height: 100%;\n    margin: 0.5rem;\n    border-radius: 1.5rem;\n  }\n"]);return Rt=function(){return e},e}var It=p.a.main(Rt()),Nt=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).map=null,n.handleClick=function(e){(0,n.props.onSaveLocation)(e.latlng)},n.handleLocationFound=function(e){(0,n.props.onSaveLocation)(e.latlng)},n.handleCircle=function(e,t){return function(){var a=n.props,r=a.onLoadGraphRequest,c=a.onLoadNewsRequest,o=a.onLoadNeigbourhoodRequest,i=a.onToggleAnalyseModal;r(e),c(t),o(t),i(!0)}},n}return Object(x.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.map&&this.map.leafletElement&&this.map.leafletElement.locate()}},{key:"render",value:function(){var e=this,t=this.props,n=t.circles,a=t.latlng,r=void 0===a?{}:a,o=r||{},i=o.lat,l=o.lng;return c.a.createElement(It,{className:"map"},c.a.createElement(mt.a,{center:r,ref:function(t){e.map=t},zoom:13,onClick:this.handleClick,onLocationfound:this.handleLocationFound},c.a.createElement(ht.a,{attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r&&c.a.createElement(ft.a,{position:[i,l]},c.a.createElement(pt.a,null,"You clicked here!!\n              Latitude: ".concat(i,"\n              Longitude: ").concat(l))),n&&n.map(function(t){var n=t.latlng,a=t.street,r=t.radius,o=t.count,i=t.opacity,l=void 0===i?.5:i,u=t.fillColor;return c.a.createElement(bt.a,{fillColor:u,fillOpacity:l,stroke:!1,radius:r,center:n,key:n,onClick:e.handleCircle(a,n)},c.a.createElement(pt.a,null,"Street Id: ".concat(a.id,"\n                  Street Name: ").concat(a.name,"\n                  Crime Count: ").concat(o)))})))}}]),t}(c.a.PureComponent),Pt=Object(d.b)(function(e){return Object(E.a)({},Dt(e))},function(e){return{onSaveLocation:function(t){return e(B(t))},onLoadGraphRequest:function(t){return e({type:gt,street:t})},onLoadNewsRequest:function(t){return e(function(e){return{type:Ot,latlng:e}}(t))},onLoadNeigbourhoodRequest:function(t){return e(function(e){return{type:wt,latlng:e}}(t))},onToggleAnalyseModal:function(t){return e(Lt(t))}}})(Nt),Tt=Object(V.a)([function(e){return e.analyse}],function(e){return e}),Mt=n(101),Yt=n.n(Mt);function Ht(){var e=Object(a.a)(["\n  & > div {\n    width: 95%;\n    margin: auto;\n\n    @media screen and (min-width: 768px) {\n      display: inline-table;\n      width: 45%;\n      margin: 0.5rem;\n    }\n\n    & > div {\n      line-height: 2rem;\n  \n      & > div {\n        padding: 0 0.5rem;\n        font-size: smaller;\n      }\n    }\n  }\n"]);return Ht=function(){return e},e}var Ut=p.a.div(Ht()),$t=c.a.memo(function(e){var t=e.news;return c.a.createElement(Ut,null,t&&t.map(function(e){var t=e.id,n=e.sectionName,a=e.pillarName,r=e.webTitle,o=e.webUrl,i=e.webPublicationDate;return c.a.createElement(Se,{key:t},c.a.createElement(Ce,null,c.a.createElement(xe,null,"Date"),c.a.createElement(ke,null,Yt()(i,"Do MMM YYYY HH:mm"))),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Section"),c.a.createElement(ke,null,n)),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Pillar"),c.a.createElement(ke,null,a)),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Title"),c.a.createElement(ke,null,c.a.createElement("a",{href:o,target:"_new"},r))))}))}),qt=n(562),zt=n(276),Ft=n(277),Gt=n(555),Bt=n(563),Kt=n(521),Wt=n(564),Vt=n(556);function Qt(){var e=Object(a.a)(["\n  display: inline-block;\n  padding: 0 0.5rem;\n"]);return Qt=function(){return e},e}var Jt=p.a.div(Qt()),Xt=function(e){var t=e.graph,n=(t=void 0===t?{}:t).date,a=t.category,r=t.outcome,o=window.innerWidth;return o>=768&&(o=.75*o/2),o-=35,c.a.createElement("div",null,n&&c.a.createElement(Jt,null,c.a.createElement("p",null,"Number of crimes by date"),c.a.createElement(qt.a,{width:o,height:o,data:n},c.a.createElement(zt.a,{dataKey:"date"}),c.a.createElement(Ft.a,{type:"number",yAxisId:0}),c.a.createElement(Gt.a,null),c.a.createElement(Bt.a,{strokeDasharray:"3 3"}),c.a.createElement(Kt.a,{type:"basis",dataKey:"count",stroke:"#ff7300",yAxisId:0}))),a&&c.a.createElement(Jt,null,c.a.createElement("p",null,"Number of crimes by category"),c.a.createElement(Wt.a,{width:o,height:o,data:a},c.a.createElement(zt.a,{dataKey:"category"}),c.a.createElement(Ft.a,{type:"number",yAxisId:0}),c.a.createElement(Gt.a,null),c.a.createElement(Bt.a,{strokeDasharray:"3 3"}),c.a.createElement(Vt.a,{legendType:"line",dataKey:"count",fill:"#387908",yAxisId:0}))),r&&c.a.createElement(Jt,null,c.a.createElement("p",null,"Number of crimes by outcome"),c.a.createElement(Wt.a,{width:o,height:o,data:r},c.a.createElement(zt.a,{dataKey:"outcome"}),c.a.createElement(Ft.a,{type:"number",yAxisId:0}),c.a.createElement(Gt.a,null),c.a.createElement(Bt.a,{strokeDasharray:"3 3"}),c.a.createElement(Vt.a,{legendType:"circle",dataKey:"count",fill:"#38abc8",yAxisId:0}))))},Zt=n(138),en=n.n(Zt);function tn(){var e=Object(a.a)(["\n  border: 1px solid #a4a4a4;\n  border-radius: 5px;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n"]);return tn=function(){return e},e}function nn(){var e=Object(a.a)(["\n  font-style: italic;\n  font-weight: lighter;\n  font-size: larger;\n"]);return nn=function(){return e},e}function an(){var e=Object(a.a)(["\n  padding: 1rem;\n  font-size: smaller;\n"]);return an=function(){return e},e}var rn=p.a.div(an()),cn=p.a.div(nn()),on=p.a.div(tn()),ln=c.a.memo(function(e){var t=e.data,n=void 0===t?{}:t,a=n.init,r=n.team,o=n.events,i=n.priorities,l=a.contact_details,u=(l=void 0===l?{}:l).email,s=l.facebook,d=l.twitter,m=a.description,h=a.links,f=a.locations,p=a.name,b=a.url_force;return c.a.createElement(rn,null,c.a.createElement("h3",null,p),c.a.createElement("ul",null,b&&c.a.createElement("li",null,b),u&&c.a.createElement("li",null,u),s&&c.a.createElement("li",null,s),d&&c.a.createElement("li",null,d)),c.a.createElement("div",null,m&&en()(m)),c.a.createElement("hr",null),c.a.createElement("h4",null,"You may want to know..."),c.a.createElement("div",null,h&&h.map(function(e,t){var n=e.title,a=e.url;return c.a.createElement("div",{key:n},c.a.createElement("h4",null,n),c.a.createElement("div",null,a),c.a.createElement("div",null,"".concat(f[t].name,", ").concat(f[t].address,", ").concat(f[t].postcode)))})),c.a.createElement("hr",null),c.a.createElement("h4",null,"TEAM"),c.a.createElement("div",null,r&&r.map(function(e){var t=e.name,n=e.bio;return c.a.createElement(on,{key:t},c.a.createElement(cn,null,t),c.a.createElement("div",null,n&&en()(n)))})),c.a.createElement("hr",null),c.a.createElement("h4",null,"EVENTS"),c.a.createElement("div",null,o&&o.map(function(e){var t=e.title,n=e.start_date,a=e.end_date,r=e.type,o=e.address,i=e.description;return c.a.createElement(Se,{key:"".concat(t,"_").concat(n,"_").concat(a)},c.a.createElement(Ce,null,c.a.createElement(xe,null,"Title"),c.a.createElement(ke,null,t)),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Type"),c.a.createElement(ke,null,r)),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Date"),c.a.createElement(ke,null,"".concat(Yt()(n,"Do MMM YYYY HH:mm")," ~ ").concat(Yt()(a,"Do MMM YYYY HH:mm")))),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Address"),c.a.createElement(ke,null,o)),c.a.createElement(Ce,null,c.a.createElement(xe,null,"Description"),c.a.createElement(ke,null,i&&en()(i))))})),c.a.createElement("hr",null),c.a.createElement("h4",null,"PRIORITIES"),c.a.createElement("div",null,i&&i.map(function(e){var t=e.issue,n=e.action,a=Object(W.a)(e,["issue","action"]);return c.a.createElement(Se,{key:"".concat(t,"_").concat(n)},c.a.createElement(Ce,null,c.a.createElement(xe,null,"Issue"),c.a.createElement(ke,null,Yt()(a["issue-date"],"Do MMM YYYY HH:mm"))),c.a.createElement(Ce,null,c.a.createElement(xe,null),c.a.createElement(ke,null,t&&en()(t))),n&&c.a.createElement(Ce,null,c.a.createElement(xe,null,"action"),c.a.createElement(ke,null,Yt()(a["action-date"],"Do MMM YYYY HH:mm"))),n&&c.a.createElement(Ce,null,c.a.createElement(xe,null),c.a.createElement(ke,null,n&&en()(n))))})))}),un=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(j.a)(this,Object(w.a)(t).call(this))).toggleShow=function(){var t=e.props,n=t.show;(0,t.onToggleShow)(!n)},e.select=function(t){return function(){return e.setState({select:t})}},e.state={select:0},e}return Object(x.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.graph,n=e.news,a=e.street,r=(a=void 0===a?{}:a).name,o=e.neighbourhood,i=e.show,l=this.state.select;return c.a.createElement(pe,{title:r,show:i,onClose:this.toggleShow,fixedBottom:!0},c.a.createElement(Qe,{select:l},c.a.createElement(Qe.Title,{data:["Graphs","News","Neighbourhood"]}),c.a.createElement(Qe.Body,null,c.a.createElement(Xt,{graph:t}),c.a.createElement($t,{news:n}),c.a.createElement(ln,{data:o}))))}}]),t}(c.a.PureComponent),sn=Object(d.b)(function(e){return Object(E.a)({},Tt(e))},function(e){return{onToggleShow:function(t){return e(Lt(t))}}})(un),dn=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(dt,null),c.a.createElement(Pt,null),c.a.createElement(sn,null))};function mn(){var e=Object(a.a)(["\n  text-align: center;\n"]);return mn=function(){return e},e}var hn=p.a.div(mn()),fn=c.a.memo(function(e){var t=e.location,n=(t=void 0===t?{}:t).pathname;return c.a.createElement(hn,null,c.a.createElement("h1",null,"NOT FOUND"),c.a.createElement("h3",null,"We do not have this location"),c.a.createElement("h2",null,n),c.a.createElement("h3",null,"which you typed"))}),pn=n(570),bn=n(37),gn=n.n(bn),vn={availability:[],category:[],crimes:[],message:"",loading:!1};var En={latlng:{lat:51.505,lng:-.09},crimes:[],circles:[],message:""};var On={graph:{date:[],category:[],outcome:[]},street:{},news:[],neighbourhood:{init:{},team:[],events:[],priorities:[]},show:!1,message:""};var yn=Object(m.combineReducers)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:En,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return gn()(e,{latlng:{$set:t.data}});case q:return gn()(e,{crimes:{$set:t.data},circles:{$set:t.data}});case z:var n=e.crimes.filter(function(e){var n=e.category;return t.data&&t.data.includes(n)});return gn()(e,{circles:{$set:n}});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return gn()(e,{$merge:Object(E.a)({},t.data,{loading:!0})});case S:var n=t.data||{},a=n.availability,r=n.date;return gn()(e,{availability:{$set:a},date:{$set:r}});case L:return gn()(e,{category:{$set:t.data}});case I:return gn()(e,{crimes:{$set:t.data}});case A:case D:return gn()(e,{message:{$set:t.message}});case N:return gn()(e,{message:{$set:t.message},loading:{$set:!1}});default:return e}},analyse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt:return gn()(e,{graph:{$set:t.data}});case yt:return gn()(e,{news:{$set:t.data}});case Ct:return gn()(e,{street:{$set:t.data}});case xt:return gn()(e,{neighbourhood:{$set:t.data}});case St:return gn()(e,{show:{$set:t.data}});case jt:case Et:case kt:return gn()(e,{message:{$set:t.message}});default:return e}},form:pn.a}),jn=n(23),wn=n.n(jn),xn=n(13),kn=n(305),Cn=n(306),Sn=n.n(Cn),An={police:"https://data.police.uk/api",guardian:"https://content.guardianapis.com/search",mapquest:"https://open.mapquestapi.com/geocoding/v1"},_n={guardian:"36ecd8a8-f9be-4d95-9643-4095fae41301",mapquest:"7qAl9AvfefdHSIOkkLrVvSc466ZoHenG"};function Ln(e){return Dn.apply(this,arguments)}function Dn(){return(Dn=Object(kn.a)(wn.a.mark(function e(t){var n,a;return wn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=2;break}return e.abrupt("return",t);case 2:return(n=new Error).response=t,e.prev=4,e.next=7,t.json();case 7:throw a=e.sent,n.body=a,n.message=a.message||t.statusText,n;case 13:throw e.prev=13,e.t0=e.catch(4),e.t0;case 16:case"end":return e.stop()}},e,this,[[4,13]])}))).apply(this,arguments)}function Rn(e){return 204===e.status||205===e.status?null:e}function In(e,t){return Sn.a.get(e,t).then(Ln).then(Rn)}var Nn=wn.a.mark(Yn),Pn=wn.a.mark(Hn),Tn=wn.a.mark(Un),Mn=wn.a.mark($n);function Yn(){var e;return wn.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(xn.b)(In,"".concat(An.police,"/crimes-street-dates"));case 3:return e=t.sent,t.next=6,Object(xn.d)(P(e.data));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.next=13,Object(xn.d)((n=t.t0.message,{type:A,message:n}));case 13:case"end":return t.stop()}var n},Nn,this,[[0,8]])}function Hn(){var e,t,n,a,r=arguments;return wn.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=e.date,c.prev=1,n=t||(new Date).toLocaleDateString(),c.next=5,Object(xn.b)(In,"".concat(An.police,"/crime-categories?date=").concat(n));case 5:return a=c.sent,c.next=8,Object(xn.d)((i=a.data,{type:L,data:i}));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),console.log(c.t0),c.next=15,Object(xn.d)((o=c.t0.message,{type:D,message:o}));case 15:case"end":return c.stop()}var o,i},Pn,this,[[1,10]])}function Un(){var e,t,n,a,r,c,o,i,l,u,s,d,m,h,f,p,b,g=arguments;return wn.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return e=g.length>0&&void 0!==g[0]?g[0]:{},t=e.data,n=(t=void 0===t?{}:t).dates,a=t.postcode,v.prev=3,v.next=6,Object(xn.e)(function(e){return e.map.latlng});case 6:if(r=v.sent,c=r.lat,o=r.lng,!a){v.next=18;break}return i={options:{},location:{street:"",city:"",state:"",postalCode:a,adminArea1:"GB"}},v.next=13,Object(xn.b)(In,"".concat(An.mapquest,"/address?key=").concat(_n.mapquest,"&json=").concat(JSON.stringify(i)));case 13:l=v.sent,u=l.data,(s=(u=void 0===u?{}:u).results)&&s.length>0&&(d=s[0].locations,m=(void 0===d?[]:d)[0].latLng,h=(m=void 0===m?{}:m).lat,f=m.lng,c=h,o=f);case 18:if(!(c&&o&&n&&n.length>0)){v.next=31;break}return v.next=21,Object(xn.a)(n.map(function(e){return Object(xn.b)(In,"".concat(An.police,"/crimes-street/all-crime?lat=").concat(c,"&lng=").concat(o,"&date=").concat(e))}));case 21:return p=v.sent,b=p&&p.reduce(function(e,t){return Object(C.a)(e).concat(Object(C.a)(t&&t.data))},[]),v.next=25,Object(xn.d)(B({lat:c,lng:o}));case 25:return v.next=27,Object(xn.d)(T(b));case 27:return v.next=29,Object(xn.d)(K(b));case 29:v.next=33;break;case 31:return v.next=33,Object(xn.d)(M("There is no position info! Please, click the map and tell me where you want to know"));case 33:v.next=40;break;case 35:return v.prev=35,v.t0=v.catch(3),console.log(v.t0),v.next=40,Object(xn.d)(M(v.t0.message));case 40:case"end":return v.stop()}},Tn,this,[[3,35]])}function $n(){return wn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xn.c)(Yn);case 2:return e.next=4,Object(xn.c)(Hn);case 4:return e.next=6,Object(xn.f)(_,Hn);case 6:return e.next=8,Object(xn.f)(R,Un);case 8:case"end":return e.stop()}},Mn,this)}var qn=n(193),zn=wn.a.mark(Kn),Fn=wn.a.mark(Wn),Gn=wn.a.mark(Vn),Bn=wn.a.mark(Qn);function Kn(e){var t,n,a,r,c,o,i,l;return wn.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.street,u.prev=1,u.next=4,Object(xn.e)(function(e){return e.search.crimes});case 4:return n=u.sent,a=n&&n.filter(function(e){var n=e.location,a=(n=void 0===n?{}:n).street;return(a=void 0===a?{}:a).id===t.id}),u.next=8,Object(xn.e)(function(e){return e.search.dates});case 8:return r=u.sent,c=a.reduce(function(e,t){var n=t.month,a=t.category,r=t.outcome_status,c=t.outcomes,o=(c=void 0===c?r||{}:c).category;return{date:Object(E.a)({},e.date,Object(Y.a)({},n,e.date[n]?e.date[n]+1:1)),category:Object(E.a)({},e.category,Object(Y.a)({},a,e.category[a]?e.category[a]+1:1)),outcome:Object(E.a)({},e.outcome,Object(Y.a)({},o,e.outcome[o]?e.outcome[o]+1:1))}},{date:{},category:{},outcome:{}}),o=c.date,i=c.category,l=c.outcome,u.next=12,Object(xn.d)((d={date:r.map(function(e){return{date:e,count:o[e]||0}}),category:Object.entries(i).map(function(e){var t=Object(qn.a)(e,2);return{category:t[0],count:t[1]}}),outcome:Object.entries(l).map(function(e){var t=Object(qn.a)(e,2);return{outcome:t[0],count:t[1]}})},{type:vt,data:d}));case 12:return u.next=14,Object(xn.d)(_t(t));case 14:u.next=21;break;case 16:return u.prev=16,u.t0=u.catch(1),console.error(u.t0),u.next=21,Object(xn.d)((s=u.t0.message,{type:Et,message:s}));case 21:case"end":return u.stop()}var s,d},zn,this,[[1,16]])}function Wn(e){var t,n,a,r,c,o,i,l,u,s,d,m,h,f,p,b,g;return wn.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t=e.latlng,v.prev=1,n="".concat(An.mapquest,"/reverse?key=").concat(_n.mapquest,"&location=").concat(t.join(","),"&includeRoadMetadata=true&includeNearestIntersection=true"),v.next=5,Object(xn.b)(In,n);case 5:return a=v.sent,r=a.data,c=(r=void 0===r?{}:r).results,o=(void 0===c?[]:c)[0].locations,i=(void 0===o?[]:o)[0],l=i.street,u=i.adminArea5,s=i.postalCode,d="".concat(u," AND ").concat(l||s),v.next=14,Object(xn.e)(function(e){return e.search.dates});case 14:return m=v.sent,h="".concat(An.guardian,"?q=").concat(d,"&from-date=").concat(m[0],"-01&api-key=").concat(_n.guardian),v.next=18,Object(xn.b)(In,h);case 18:return f=v.sent,p=f.data,b=(p=void 0===p?{}:p).response.results,(g=void 0===b?[]:b).sort(function(e,t){return t.webPublicationDate.localeCompare(e.webPublicationDate)}),v.next=25,Object(xn.d)({type:yt,data:g});case 25:v.next=32;break;case 27:return v.prev=27,v.t0=v.catch(1),console.error(v.t0),v.next=32,Object(xn.d)((E=v.t0.message,{type:jt,message:E}));case 32:case"end":return v.stop()}var E},Fn,this,[[1,27]])}function Vn(e){var t,n,a,r,c,o,i,l,u,s,d,m,h;return wn.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return t=e.latlng,f.prev=1,n="".concat(An.police,"/locate-neighbourhood?q=").concat(t.join(",")),f.next=5,Object(xn.b)(In,n);case 5:return a=f.sent,r=a.data,c=r.force,o=r.neighbourhood,i="".concat(An.police,"/").concat(c,"/").concat(o),f.next=12,Object(xn.a)([Object(xn.b)(In,i),Object(xn.b)(In,"".concat(i,"/people")),Object(xn.b)(In,"".concat(i,"/events")),Object(xn.b)(In,"".concat(i,"/priorities"))]);case 12:return l=f.sent,u=Object(qn.a)(l,4),s=u[0].data,d=u[1].data,m=u[2].data,h=u[3].data,f.next=20,Object(xn.d)(At(s,d,m,h));case 20:f.next=27;break;case 22:return f.prev=22,f.t0=f.catch(1),console.error(f.t0),f.next=27,Object(xn.d)((p=f.t0.message,{type:kt,message:p}));case 27:case"end":return f.stop()}var p},Gn,this,[[1,22]])}function Qn(){return wn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xn.f)(gt,Kn);case 2:return e.next=4,Object(xn.f)(Ot,Wn);case 4:return e.next=6,Object(xn.f)(wt,Vn);case 6:case"end":return e.stop()}},Bn,this)}var Jn=wn.a.mark(Xn);function Xn(){return wn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xn.a)([$n,Qn].map(xn.c));case 2:case"end":return e.stop()}},Jn,this)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Zn(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Zn=function(){return e},e}var ea=Object(h.a)(),ta=Object(m.createStore)(yn,Object(f.composeWithDevTools)(Object(m.applyMiddleware)(ea)));ea.run(Xn);var na=p.a.div(Zn());i.a.render(c.a.createElement(d.a,{store:ta},c.a.createElement(na,null,c.a.createElement(v,null),c.a.createElement(l.a,null,c.a.createElement(u.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:dn}),c.a.createElement(s.a,{component:fn}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[310,2,1]]]);
//# sourceMappingURL=main.a183b92c.chunk.js.map