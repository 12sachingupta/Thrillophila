(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1227],{7068:function(e,r,a){"use strict";var n=a(85893),t=a(67294),i=a(24231),o=a.n(i);r.Z=function(e){let{children:r,componentWrapperClass:a="",carouselItemsContainerClass:i="",itemSize:s=0}=e,$=(0,t.useRef)(null),[d,l]=(0,t.useState)(!1),[u,C]=(0,t.useState)(0),m=(0,t.useRef)(0);return(0,t.useEffect)(()=>{m.current=0},[s]),(0,t.useEffect)(()=>{$?.current&&(l($.current.clientWidth+$.current.scrollLeft<$.current.scrollWidth),m.current=u)},[$,u]),r?(0,n.jsxs)("div",{className:"".concat(o().genericCarouselContainer," ").concat(a),children:[u>0?(0,n.jsx)("div",{className:o().leftIconContainer,onClick(){var e;u>0&&(m.current%s==0?m.current-=s:m.current=m.current-m.current%s-s,null==$||null===(e=$.current)||void 0===e||e.scrollTo({behavior:"smooth",left:m.current}))},children:(0,n.jsx)(_,{})}):null,(0,n.jsx)("div",{className:"".concat(o().genericCarouselItemsContainer," ").concat(i),onScroll:e=>C(e.currentTarget.scrollLeft),ref:$,children:r}),d?(0,n.jsx)("div",{className:o().rightIconContainer,onClick(){var e;d&&(m.current%s==0?m.current+=s:m.current=m.current-m.current%s+s,null==$||null===(e=$.current)||void 0===e||e.scrollTo({behavior:"smooth",left:m.current}))},children:(0,n.jsx)(c,{})}):null]}):null};let _=e=>{let{visible:r=!0,onClick:a}=e;if(r)return(0,n.jsx)("div",{className:o().leftArrowIconBox,onClick:a,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,n.jsx)("path",{d:"M12.1683 5.58398C12.3211 5.73676 12.3975 5.93121 12.3975 6.16732C12.3975 6.40343 12.3211 6.59787 12.1683 6.75065L8.91829 10.0007L12.1683 13.2507C12.3211 13.4034 12.3975 13.5979 12.3975 13.834C12.3975 14.0701 12.3211 14.2645 12.1683 14.4173C12.0155 14.5701 11.8211 14.6465 11.585 14.6465C11.3489 14.6465 11.1544 14.5701 11.0016 14.4173L7.16829 10.584C7.08496 10.5006 7.02579 10.4104 6.99079 10.3132C6.95579 10.2159 6.93857 10.1118 6.93913 10.0007C6.93913 9.88954 6.95663 9.78537 6.99163 9.68815C7.02663 9.59093 7.08552 9.50065 7.16829 9.41732L11.0016 5.58398C11.1544 5.43121 11.3489 5.35482 11.585 5.35482C11.8211 5.35482 12.0155 5.43121 12.1683 5.58398Z",fill:"#515151"})})})},c=e=>{let{visible:r=!0,onClick:a}=e;if(r)return(0,n.jsx)("div",{className:o().rightArrowIconBox,onClick:a,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,n.jsx)("path",{d:"M7.83171 14.416C7.67893 14.2632 7.60254 14.0688 7.60254 13.8327C7.60254 13.5966 7.67893 13.4021 7.83171 13.2493L11.0817 9.99935L7.83171 6.74935C7.67893 6.59657 7.60254 6.40213 7.60254 6.16602C7.60254 5.9299 7.67893 5.73546 7.83171 5.58268C7.98448 5.4299 8.17893 5.35352 8.41504 5.35352C8.65115 5.35352 8.84559 5.4299 8.99837 5.58268L12.8317 9.41602C12.915 9.49935 12.9742 9.58963 13.0092 9.68685C13.0442 9.78407 13.0614 9.88824 13.0609 9.99935C13.0609 10.1105 13.0434 10.2146 13.0084 10.3118C12.9734 10.4091 12.9145 10.4993 12.8317 10.5827L8.99837 14.416C8.84559 14.5688 8.65115 14.6452 8.41504 14.6452C8.17893 14.6452 7.98448 14.5688 7.83171 14.416Z",fill:"#515151"})})})}},83523:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return B}});var n=a(85893),t=a(67294),i=a(7068),o=a(69810),_=a(45811),c=a(67237),s=a(14271),$=a(18849),d=a(3495),l=a(22151),u=a.n(l),C=a(63449),m=a(22229),h=a(64405),p=a(90440),g=e=>{let{product:r,region_contact_number:a,index:i,domLoaded:l,usePreloadImage:g=!1}=e,x=(0,c.T)(),v=r?.bookings_count&&r.bookings_count>0,P=r.handpicked_image.media_urls.original,w=e=>{e.preventDefault();let a=document.getElementById("react-lead-form-container");a?.setAttribute("data-tour-slug",r.slug),a?.setAttribute("data-tour-section_source","handpicked_product_card");let n={name:r.name,strikeThroughPrice:r.strike_through_price,startingPrice:r.starting_price,currency:r.currency,image:P,slug:r.slug};x((0,$.VZ)({leadFormProduct:n}))},k=r?.itinerary_destinations||[],{sendGA4Event:N}=(0,p.Z)(),L=()=>{N({eventName:m.o.REQUEST_CALLBACK_CLICK,eventData:{section_name:"handpick_product_Card",product_slug:r.slug}})},j=()=>{N({eventName:m.o.CALL_BUTTON_CLICK,eventData:{section_name:"handpick_product_Card",product_slug:r.slug}})},B=()=>{N({eventName:m.o.BOOK_NOW_CLICK,eventData:{section_name:"handpick_product_Card",product_slug:r.slug}})},[f,b]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let e=(0,h.bX)("productDestinationList-".concat(r?.slug));k?.length>e&&b(k?.length-e)},[r?.slug]),(0,n.jsx)("div",{className:"product-card-component ".concat(u().wrapper),children:(0,n.jsxs)("a",{href:"/tours/".concat(r.slug),target:"_blank",className:u().container,children:[(0,n.jsxs)("div",{className:"".concat(u().topSection,"  "),children:[r.flights_included&&(0,n.jsx)(o.Z,{}),v&&(0,n.jsxs)("div",{className:u().bookingCountTag,children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"13",viewBox:"0 0 18 13",fill:"none",children:(0,n.jsx)("path",{d:"M8.63555 9.92222C8.63861 9.92579 8.64225 9.92862 8.64626 9.93056C8.65027 9.93249 8.65456 9.93349 8.65891 9.93349C8.66325 9.93349 8.66755 9.93249 8.67155 9.93056C8.67556 9.92862 8.6792 9.92579 8.68226 9.92222L13.9608 3.79711C13.9907 3.76237 13.9909 3.7274 13.9614 3.6922L12.4031 1.86843C12.3947 1.85861 12.3887 1.84645 12.3856 1.83314C12.3825 1.81982 12.3824 1.8058 12.3854 1.79244C12.3883 1.77908 12.3942 1.76684 12.4025 1.7569C12.4107 1.74696 12.421 1.73966 12.4324 1.73573C14.241 1.1234 16.071 0.547434 17.9223 0.0078278C17.9423 0.00180645 17.9551 -0.000741092 17.9607 0.00018527C17.9922 0.00389072 18.0048 0.0217235 17.9984 0.053683C17.5484 2.20238 17.0661 4.34135 16.5515 6.47059C16.5319 6.55211 16.496 6.56346 16.4437 6.50464L14.8315 4.69267C14.821 4.68076 14.8069 4.67415 14.7922 4.67428C14.7775 4.67441 14.7634 4.68127 14.7531 4.69337C12.992 6.73692 11.2283 8.78395 9.462 10.8345C9.18412 11.1568 8.90265 11.6828 8.42654 11.4431C8.35308 11.406 8.25426 11.3148 8.1301 11.1693C7.19625 10.0785 6.24803 8.97802 5.28543 7.86778C5.25829 7.83675 5.23134 7.83675 5.20459 7.86778C3.87308 9.40971 2.53679 10.9614 1.19571 12.5227C1.00726 12.7423 0.86812 12.8782 0.778288 12.9306C0.230915 13.2481 -0.273938 12.4026 0.16983 11.8877C1.67341 10.1443 3.17599 8.39974 4.67757 6.65401C4.92611 6.36568 5.10877 6.18087 5.44174 6.31427C5.52718 6.34855 5.6226 6.42798 5.728 6.55258C6.6914 7.68922 7.66058 8.81244 8.63555 9.92222Z",fill:"white"})}),(0,n.jsxs)("span",{children:[r.bookings_count," booked in last 1 week"]})]}),(0,n.jsx)("div",{className:"".concat(u().imageBox," ").concat(v&&u().redBorder),children:(0,n.jsx)(C.d,{src:g?"".concat(P,"?w=360&dpr=2"):P,alt:P?.caption||r.name,placeholderImg:g?void 0:"".concat(P,"?w=10"),lazyBoundary:"80px",gumlet:g?"false":"true",usePreloadImage:g})})]}),(0,n.jsxs)("div",{className:u().bottomBox,children:[(0,n.jsxs)("div",{className:u().firstRow,children:[(0,n.jsx)("div",{className:u().duration,children:r?.summarized_duration||" "}),(0,n.jsxs)("div",{className:u().reviewBox,children:[(0,n.jsx)("div",{className:u().reviewRatingIcon,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,n.jsx)("path",{d:"M15.4829 5.63406L10.6864 4.90408L8.54222 0.352135C8.48365 0.227506 8.38731 0.126615 8.26829 0.0652895C7.96981 -0.0890138 7.6071 0.0395723 7.45786 0.352135L5.3137 4.90408L0.517213 5.63406C0.384974 5.65384 0.26407 5.71912 0.171503 5.81803C0.0595945 5.93848 -0.0020722 6.10053 5.31712e-05 6.26856C0.00217854 6.4366 0.0679221 6.59688 0.182838 6.71418L3.65316 10.2572L2.83328 15.2602C2.81405 15.3766 2.82635 15.4963 2.86878 15.6057C2.91121 15.7151 2.98207 15.8099 3.07333 15.8793C3.16459 15.9488 3.27259 15.99 3.38509 15.9984C3.4976 16.0068 3.6101 15.982 3.70983 15.9269L8.00004 13.5648L12.2902 15.9269C12.4074 15.9922 12.5434 16.0139 12.6737 15.9902C13.0024 15.9308 13.2235 15.6044 13.1668 15.2602L12.3469 10.2572L15.8172 6.71418C15.9117 6.61724 15.974 6.49064 15.9929 6.35216C16.0439 6.00597 15.8135 5.68549 15.4829 5.63406Z",fill:"#fff"})})}),(0,n.jsx)("div",{className:u().reviewRating,children:r.rating.toFixed(1)}),(0,n.jsxs)("div",{className:u().reviewRatingCount,children:["(",(0,s.$)(r.review_count),")"]})]})]}),(0,n.jsx)("h3",{className:u().name,children:r.name}),k?.length>0&&(0,n.jsxs)("div",{className:u().destinationListWrapper,children:[(0,n.jsx)("div",{className:u().destinationListBox,id:"productDestinationList-".concat(r?.slug),children:k?.map((e,r)=>(0,n.jsxs)("div",{className:u().destinationBox,children:[(0,n.jsxs)("span",{className:u().destinationCountLabel,children:[e.days,"D"]}),(0,n.jsx)("span",{className:u().destinationNameLabel,children:e.location}),r<k?.length-1&&(0,n.jsx)("span",{className:u().destinationNameDivider})]}))}),f>0&&(0,n.jsxs)("div",{className:u().remainingDestinationCountBox,children:["...",(0,n.jsxs)("span",{className:u().remainingDestinationCount,children:["+",f]})]})]}),(0,n.jsx)("div",{className:u().divider}),(0,n.jsxs)("div",{className:u().priceContainer,children:[(0,n.jsx)(_.Z,{className:u().actualPrice,amount:r.starting_price,originalCurrency:r.currency||"INR",removeDecimal:!0,maxAmount:999999}),(0,n.jsx)(_.Z,{className:u().strikeThroughPrice,amount:r.strike_through_price,originalCurrency:r.currency||"INR",removeDecimal:!0,maxAmount:999999}),(0,n.jsx)("span",{className:u().savePriceLeftBorderIcon,children:(0,n.jsx)("svg",{width:"4",height:"24",viewBox:"0 0 4 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.65992 3L0 6L2.65992 9L0 12L2.65992 15L0 18L2.65992 21L0 24H3.5V0H0L2.65992 3Z",fill:"rgba(255, 255, 255, 0.3)"})})}),(0,n.jsxs)("div",{className:u().savePrice,children:["SAVE",(0,n.jsx)(_.Z,{className:"",amount:parseInt(r.strike_through_price)-parseInt(r.starting_price),originalCurrency:r.currency||"INR",removeDecimal:!0,maxAmount:999999})]}),(0,n.jsx)("span",{className:u().savePriceRightBorderIcon,children:(0,n.jsx)("svg",{width:"4",height:"24",viewBox:"0 0 4 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.65992 3L0 6L2.65992 9L0 12L2.65992 15L0 18L2.65992 21L0 24H3.5V0H0L2.65992 3Z",fill:"rgba(255, 255, 255, 0.3)"})})})]}),(0,n.jsx)("div",{className:u().buttonContainer,children:r.enable_online_booking?(0,n.jsx)("div",{className:"".concat(u().filledButton," ").concat(u().bookNowBtn),onClick(){B()},children:"Book Now"}):(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)("a",{className:u().hollowButton,href:"tel:".concat(a),onClick(){j(),(0,d.f)({eventName:m.o.CALL_NOW_CLICKED,eventData:{ga4_product_slug:r.slug}})},children:(0,n.jsx)("div",{className:u().hollowButtonIcon,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",children:(0,n.jsx)("path",{d:"M12.7538 10.1683L11.0772 9.9768C10.8801 9.95363 10.6802 9.97547 10.4927 10.0407C10.3052 10.1059 10.1349 10.2128 9.99464 10.3533L8.78006 11.5685C6.90617 10.615 5.38306 9.09099 4.43002 7.21606L5.6512 5.9942C5.93505 5.7102 6.07367 5.30732 6.02746 4.91104L5.83603 3.24667C5.80038 2.92436 5.64748 2.62643 5.40646 2.40963C5.16544 2.19283 4.85314 2.07232 4.52904 2.07104H3.38707C2.64116 2.07104 2.02067 2.69188 2.06688 3.43821C2.41673 9.07857 6.92519 13.5829 12.5558 13.933C13.3017 13.9792 13.9222 13.3584 13.9222 12.6121V11.4694C13.9288 10.809 13.4205 10.241 12.7538 10.1683Z",fill:"#fff"})})})}),(0,n.jsx)("div",{className:u().filledButton,onClick(e){L(),w(e)},children:"Request Callback"})]})})]})]})})},x=a(84776),v=a(55513),P=a(98744),w=a.n(P),k=e=>{let{isHandPicked:r,productCarouselHeight:a,handleOpenEnquiryForm:t}=e,i=(0,c.C)(e=>e.appSliceReducer.listingPageSaleData),o=(0,c.C)(e=>{var r;return null===(r=e.appSliceReducer)||void 0===r?void 0:r.listingPageData});return(0,n.jsxs)("div",{className:"".concat(w().wrapper," ").concat(r&&w().isHandPicked),style:!r&&a?{height:a+"px"}:{},onClick:()=>t(null,"deal_card"),children:[(0,n.jsxs)("div",{className:w().customerData,children:[(0,n.jsxs)("div",{className:w().customerCount,children:[o?.customerCountLastMonth||"30,000","+"]}),(0,n.jsxs)("div",{className:w().customerLabel,children:["Customers have travelled with us to ",o.destinationName," in the last 30 days."]})]}),(0,n.jsx)("div",{className:w().divider}),(0,n.jsxs)("div",{className:w().saleNameDetailsBox,children:[(0,n.jsx)("div",{children:(0,n.jsx)(v.Z,{saleName:i?.name+"!"})}),(0,n.jsx)("div",{className:w().discountLabel,children:"Get upto 50% Off "})]}),(0,n.jsxs)("div",{className:w().sendEnquiryBox,children:[(0,n.jsx)("div",{className:w().sendEnquiryHelpText,children:"Let our experts curate a dream trip for you!"}),(0,n.jsx)("div",{className:w().sendEnquiryBtn,children:"Connect with an Expert"})]})]})},N=a(91977);a(53334);var L=a(48114),j=a.n(L),B=e=>{let{isHandPicked:r,data:a,region_contact_number:o,domLoaded:_,isMobileSSR:s,handleOpenEnquiryForm:$,containerWrapperClass:d="",usePreloadImage:l,eventProperties:u,eventName:C,activityBookableCard:m,onProductClickCallback:h}=e;(0,N.Z)(s),(0,c.C)(e=>e.currencyReducer.selectedCurrency);let p=(0,c.C)(e=>e.appSliceReducer.listingPageSaleOn),[v,P]=(0,t.useState)(!1),[w,L]=(0,t.useState)(!1),[B,f]=(0,t.useState)(null);return(0,t.useEffect)(()=>{a?.forEach(e=>{var r,a;(null==e||null===(r=e.name)||void 0===r?void 0:r.length)>41&&P(!0),(null==e||null===(a=e.itinerary_destinations)||void 0===a?void 0:a.length)>0&&L(!0)})},[a]),(0,n.jsx)("div",{className:"".concat(j().wrapper," ").concat(d," ").concat(m&&"product-card-carousel-in-box"),style:B?{height:"".concat(B+20,"px")}:{},children:(0,n.jsxs)(i.Z,{componentWrapperClass:j().carouselWrapperClass,carouselItemsContainerClass:j().carouselContainerClass,itemSize:370,children:[a.map((e,a)=>(0,n.jsx)("div",{className:"".concat(j().productCardContainer," ").concat(j().productCardWrapper),onClick(){h&&h("similar_experiences",e.slug)},children:r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(g,{region_contact_number:o,product:e,index:a,domLoaded:_,usePreloadImage:0===a&&l},a)}):(0,n.jsx)(x.Z,{region_contact_number:o,product:e,fixedNameHeight:v,isMobileSSR:s,domLoaded:_,setProductCarouselHeight:f,productCarouselHeight:B,isHorizontalCarousel:!0,usePreloadImage:0===a&&l,eventProperties:u,eventName:C,activityBookableCard:m,isDestinationPresent:w,index:a},a)})),p&&(0,n.jsx)("div",{className:"".concat(j().productCardContainer," ").concat(j().productCardWrapper),children:(0,n.jsx)(k,{isHandPicked:r,productCarouselHeight:B,handleOpenEnquiryForm:$})})]})})}},24231:function(e){e.exports={genericCarouselContainer:"GenericCarousel_genericCarouselContainer__Uavmv",genericCarouselItemsContainer:"GenericCarousel_genericCarouselItemsContainer__pCJXc",temporaryItem:"GenericCarousel_temporaryItem__FUmS9",leftIconContainer:"GenericCarousel_leftIconContainer__zUbzh",rightIconContainer:"GenericCarousel_rightIconContainer__AbXWk",leftArrowIconBox:"GenericCarousel_leftArrowIconBox__orusP",rightArrowIconBox:"GenericCarousel_rightArrowIconBox__HXqb_"}},22151:function(e){e.exports={wrapper:"HandPickedProductCard_wrapper__6ih7N",redBorder:"HandPickedProductCard_redBorder__NVuRv",bookingCountTag:"HandPickedProductCard_bookingCountTag__lFPoH",container:"HandPickedProductCard_container__1lYUZ",topSection:"HandPickedProductCard_topSection__leG_8",imageBox:"HandPickedProductCard_imageBox__xU0qW",divider:"HandPickedProductCard_divider__nHZwD",bottomBox:"HandPickedProductCard_bottomBox__0_otq",firstRow:"HandPickedProductCard_firstRow__t3RHF",duration:"HandPickedProductCard_duration__Jck7N",reviewBox:"HandPickedProductCard_reviewBox__pFL3A",reviewRating:"HandPickedProductCard_reviewRating__JrZeG",reviewRatingCount:"HandPickedProductCard_reviewRatingCount__eZWOp",name:"HandPickedProductCard_name__BvJsb",priceContainer:"HandPickedProductCard_priceContainer__C_6wk",strikeThroughPrice:"HandPickedProductCard_strikeThroughPrice__3piVb",actualPrice:"HandPickedProductCard_actualPrice__ozQcg",buttonContainer:"HandPickedProductCard_buttonContainer__Yx2x6",hollowButtonIcon:"HandPickedProductCard_hollowButtonIcon__r2zm5",hollowButton:"HandPickedProductCard_hollowButton__zHTGn",filledButton:"HandPickedProductCard_filledButton__oNGyL",savePrice:"HandPickedProductCard_savePrice__ZVtvZ",savePriceLeftBorderIcon:"HandPickedProductCard_savePriceLeftBorderIcon__Kglze",savePriceRightBorderIcon:"HandPickedProductCard_savePriceRightBorderIcon__RYt3z",bookNowBtn:"HandPickedProductCard_bookNowBtn__US7M8",destinationListWrapper:"HandPickedProductCard_destinationListWrapper___Ot9Q",destinationListBox:"HandPickedProductCard_destinationListBox__4h6u3",remainingDestinationCountBox:"HandPickedProductCard_remainingDestinationCountBox__vsrY5",remainingDestinationCount:"HandPickedProductCard_remainingDestinationCount__ImNlY",destinationBox:"HandPickedProductCard_destinationBox__7lsyc",destinationCountLabel:"HandPickedProductCard_destinationCountLabel__a9_QV",destinationNameLabel:"HandPickedProductCard_destinationNameLabel__x9FcI",destinationNameDivider:"HandPickedProductCard_destinationNameDivider__WjttG"}},48114:function(e){e.exports={wrapper:"ProductCarousel_wrapper__W201C",productCardContainer:"ProductCarousel_productCardContainer__95wik",productCardWrapper:"ProductCarousel_productCardWrapper__g_GKA",carouselWrapperClass:"ProductCarousel_carouselWrapperClass__Kga_o",carouselContainerClass:"ProductCarousel_carouselContainerClass__wZlkB",reduceGap:"ProductCarousel_reduceGap__zg6Zp",extraRightMargin:"ProductCarousel_extraRightMargin__cEBBl"}},98744:function(e){e.exports={wrapper:"ProductSaleCard_wrapper__kXQul",isHandPicked:"ProductSaleCard_isHandPicked__2TgUt",divider:"ProductSaleCard_divider__Vb_KL",customerData:"ProductSaleCard_customerData__L7gUN",customerCount:"ProductSaleCard_customerCount__Be8AA",customerLabel:"ProductSaleCard_customerLabel__3wWZA",saleNameDetailsBox:"ProductSaleCard_saleNameDetailsBox__cDKvd",discountLabel:"ProductSaleCard_discountLabel__oz_oP",sendEnquiryBox:"ProductSaleCard_sendEnquiryBox__XNCxB",sendEnquiryHelpText:"ProductSaleCard_sendEnquiryHelpText__w_UYj",sendEnquiryBtn:"ProductSaleCard_sendEnquiryBtn__BzCly"}}}]);
