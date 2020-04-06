import React from 'react';
import '../App.css';
import NavBar  from './vrlNavBar' ;
import Contact  from './vrlContact' ;
import Opac  from './vrlOpac' ;
import Blog  from './vrlBlog' ;
import About  from './vrlAbout' ;
import Home  from './vrlHome' ;
import Services from './vrlServices' ;
import LoyolaMap  from './map' ;
import Footer from './vrlFooter' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Switch,  Route, BrowserHistory } from 'react-router-dom' 


//Para modificar el color del body en React
import {Helmet} from 'react-helmet';



function App() {
  return (
    <div className="CCPFV">  
           <Helmet>
                <style>{

                   'a {color: #9C3;} a:hover{color: #769e26;}.navbar-engage .dropdown .dropdown-menu > li.active > a{color: #9C3;}.navbar-engage .navbar-nav > li.active > a,.navbar-engage .navbar-nav > li.open > a,.navbar-engage .navbar-nav > .active > a:hover,.navbar-engage .navbar-nav > .active > a:focus,.navbar-engage .navbar-nav > .open > a:hover{color: #9C3;}\
                   .navbar-engage .navbar-nav > li a:hover::before,\
                   .navbar-engage .navbar-nav > li.active a::before,\
                   .navbar-engage .navbar-nav > li.open > a::before,\
                   .navbar-engage .navbar-nav > .active > a:focus::before {background: #9C3;}\
                   .navbar-engage .dropdown .dropdown-menu{border-color: #9C3;}\
                   #main-menu > li > a:hover,\
                   #main-menu > li.active > a,\
                   #main-menu > li.open > a,\
                   #main-menu > .active > a:hover,\
                   #main-menu > .active > a:focus,\
                   #main-menu > .open > a:hover{color: #3F51B5;}\
                   #main-menu .dropdown .dropdown-menu > li.active > a{color: #9C3;}\
                   .open>a{color: #9C3 !important;}\
                   .navbar-engage .dropdown .dropdown-menu > li > a:hover, .navbar-engage \
                   .dropdown .dropdown-menu > li > a .active{color: #9C3;}\
                   #main-menu .dropdown .dropdown-menu > li > a:hover,#main-menu \
                   .dropdown .dropdown-menu > li > a:active{color: #9C3;}\
                   .section-title::before{border-color: #9C3;}\
                   .small-title::before{border-color: #9C3;}\
                   .page-header-section{background: #9C3;}\
                   #service-block-main .service-item:hover i{color: #9C3;border-color: #9C3;}\
                   #service-block-main .service-item:hover h2{color: #9C3;}\
                   #service-block-main .service-item:hover .icon-wrapper::before {background: #9C3;}\
                   #service-block-main .service-item:hover .icon-wrapper::after {background: #9C3;}\
                   #portfolio .portfolio-items figure figcaption:hover{background: rgba(153, 204, 51, 0.9);}\
                   #other-services .other-service-item .icon .icon-medium{background: #9C3;}\
                   #other-services .other-service-item:hover .icon-medium{background: #666;}\
                   #other-services .other-service-item .service-content h3{color: #9C3;}\
                   #progress .icon-effect{color: #9C3;}\
                   #clients #clients-scroller .owl-pagination .owl-page.active span{background: #9C3;}\
                   #clients #clients-scroller .owl-pagination .owl-page span{border-color: #9C3;}\
                   #testimonial #testimonial-carousel .carousel-control{color: #9C3;}\
                   #testimonial #testimonial-carousel .carousel-control{color: #9C3;}\
                   #testimonial .item blockquote small{color: #9C3;}\
                   #testimonial .testimonial-inner:before{background: rgba(153, 204, 51, 0.2);}\
                   #blog .blog-item-img .blog-category{background: #9C3;}\
                   #blog .blog-item-img .blog-category{background: #9C3;}\
                   #blog .blog-item-text h3{color: #9C3;}\
                   #blog .blog-item-text .blog-item-info a:hover{color: #9C3;}\
                   #blog .blog-item-text h3 a:hover{color: #9C3;}\
                   .scroll-top:hover{background: #9C3;border-color: #9C3;}\
                   .skill-wrapper .progress .progress-bar{background-color: #9C3;}\
                   .skill-wrapper .progress .percent{color: #9C3;}\
                   #why-choose .icon i{color: #9C3;}\
                   #why-choose .tab-container h2{color: #9C3;}\
                   #why-choose .tab-menu .list-group > a.active{background: #9C3;}\
                   #notice .notice-content{border-color: #9C3;}\
                   #service-block-1 .service-item:hover .service-content h2{color: #9C3;}\
                   #service-block-1 .service-item:hover .icon{border-color: #9C3;}\
                   #service-block-1 .service-item:hover .icon i{background: #9C3;}\
                   #service-block-2 .service-inner:hover i{color: #9C3;}\
                   #service-block-2 .service-inner:hover h3{color: #9C3;}\
                   #team-block-2 .team-member:hover{border-color: #9C3;}\
                   .pricing-table-1 .table-header{background: #9C3;}\
                   #pricing-block-2{background: #9C3;}\
                   .pricing-table-x .plan .price{color: #9C3;}\
                   .pricing-table-x .plan .period{color: rgba(153, 204, 51, 0.7);}\
                   .panel-default .panel-heading a{background: #9C3;}\
                   #blog-page .sidebar .search-box .form-control:focus, #blog-page .sidebar\
                   .search-box button:focus, #blog-page .sidebar \
                   .search-box input:focus, #blog-page .sidebar \
                   .search-box textarea:focus{border-color: #9C3;}\
                   #blog-page .sidebar .plain-search-btn{color: #9C3;}\
                   #blog-page .post-content .reading::after{border-color: #9C3;}\
                   .light li a{color: #9C3;}\
                   #blog-page .widget-title::before{border-color: #9C3  ;}\
                   .flat li a i{background: #9C3;border-color: #9C3;}\
                   #tabs .tabs-style-2 .nav-tabs li.active a, #tabs.tabs-style-2 .nav-tabs li.active a:hover, #tabs .tabs-style-2 \
                   .nav-tabs li.active a:focus, #tabs .tabs-style-2 \
                   .nav-tabs li a:hover{border-color: #9C3;background-color: #9C3;}\
                   #tabs .tabs-style-2 .nav-tabs{border-color: #9C3;}\
                   #contact .contact-info-wrapper .contact-item-wrapper i{background: #9C3;}\
                   .preset-bg{background: #9C3;}.dark-bg{background: rgba(0, 0, 0, 0.1);}\
                   .btn-danger{background-color: #9C3;border-color: #9C3;}\
                   .btn-danger:hover,.btn-danger:active, .btn-danger.active, .open > .dropdown-toggle.btn-danger{\
                     background-color: #90BF34;border-color: #90BF34;}\
                   .page-header .page-header-inner:before{background-color: #90BF34 ;opacity: 0.2;}\
                   .slicknav_btn{border-color: #9C3;}.slicknav_btn:hover{background: #9C3;}\
                   .slicknav_nav a:hover,.slicknav_open .active{color: #9C3;}\
                   .slicknav_menu .slicknav_icon-bar{background: #9C3;}\
                   .tparrows.preview2:hover:after{color: #9C3;#default-tab .nav-tabs > li > a.active , #default-tab \
                   .nav-tabs > li a.active:focus, #default-tab .nav-tabs > li a.active:hover {color: #9C3;}\
                   #default-tab ul.nav-tabs > li a.active::before {background-color: #9C3;}\
                   #round-tab ul.nav-tabs {border-bottom: 1px solid #9C3;}\
                   #round-tab ul li a.active {border-left: 1px solid #9C3  ;border-right: 1px solid #9C3  ;\
                   border-top: 1px solid #9C3  ;color: #9C3;}#vertical-tab ul.nav-tabs li a.active {border-bottom: 3px solid #9C3;}\
                   #vertical-tab ul.nav-tabs li a.active > .fa {color: #9C3;}\
                   #tab-with-icon .nav-tabs li a:hover i, #tab-with-icon .nav-tabs li a:focus, \
                   #tab-with-icon .nav-tabs li a.active i {background: #9C3 none repeat scroll 0 0;}\
                   .btn-outline {border-color: #9C3;color: #9C3;}.btn-outline:hover {background: #9C3;}\
                   .progress-bar {background: #9C3;}#testimonial .testimonial-footer {color: #9C3;}\
                   #testimonial .owl-pagination .owl-page span {border: 1px solid #9C3;}\
                   #testimonial .owl-pagination .owl-page.active span {background: #9C3 none repeat scroll 0 0;}\
                   #testimonial .testimonial-footer a {color: #9C3;}\
                   #single-testimonial-item .testimonial-footer a {color: #9C3;}\
                   #single-testimonial-item .owl-pagination .owl-page.active span {background: #9C3 none repeat scroll 0 0;}\
                   #single-testimonial-item .owl-pagination .owl-page span {border: 1px solid #9C3;}\
                   #color-client-scroller .client-item-wrapper {background: #9C3 none repeat scroll 0 0;}\
                   #clients .client-item-wrapper:hover {border-color: #9C3;}i.icon-default {color: #9C3;}\
                   i.icon-round {background-color: #9C3;}i.icon-round-border {border: 3px solid #9C3;color: #9C3;}\
                   i.icon-box {background-color: #9C3;}i.icon-box-border {border: 3px solid #9C3;color: #9C3;}\
                   .blog-post-footer ul li a {border: 1px solid #9C3;color: #9C3;}\
                   .blog-post-footer ul li a:hover {background: #9C3 none repeat scroll 0 0;\
                   border: 1px solid #9C3;}.blog-post-content blockquote.blockquote {border-left: 5px solid #9C3;}\
                   .blog-pagination nav ul.pagination li.page-item.active a , .blog-pagination nav ul.pagination \
                   li.page-item a:hover , .blog-pagination nav ul.pagination li.page-item a:focus {background: #9C3 none repeat scroll 0 0;\
                   border: 1px solid #9C3;}.form-control:focus {border-color: #9C3  ;}h2.widget-title {color: #9C3;}\
                   .widget.tag-cloud a {background: #9C3;}.sidebar-area .search-bar button i.fa {color: #9C3;}\
                   .contact-title-text h2 {color: #9C3;}.roof-menu ul li.active a {color: #9C3;}\
                   .roof-social-icons a i.fa:hover {background: #9C3;}.service2-single-service .fa {\
                   background: #9C3 none repeat scroll 0 0;}.form-control:focus {border-color: #9C3  ;}\
                   .btn-common {background: #9C3 none repeat scroll 0 0;}\
                   .btn-common::before {background: #7aa427 none repeat scroll 0 0;}\
                   .back-to-top i {background-color: #9C3;}\
                   #carousel-area .carousel-item .carousel-caption {color: #9C3;}\
                   .top_search_icon{color: #9C3;}\
                   #carousel-area .carousel-indicators li:hover, #carousel-area .carousel-indicators li.active {\
                   background: #9C3 none repeat scroll 0 0;}.service-item .icon-wrapper i {color: #9C3;}\
                   .split .details-list h3 {color: #9C3;}#other-services .nav-tabs li a:hover i, #other-services\
                   .nav-tabs li a:focus, #other-services .nav-tabs li a.active i {background: #9C3 none repeat scroll 0 0;}\
                   .btn-common.active {background: #7aa427 none repeat scroll 0 0;}\
                   .sup-desc-wrap .sup-link .left-link, .sup-desc-wrap .sup-link .right-link {\
                     background: #9C3 none repeat scroll 0 0;border: 1px solid #9C3;}\
                   .featured-box .featured-icon i {color: #9C3;}#team .team-item figure figcaption \
                   .orange-line {background: #9C3 none repeat scroll 0 0;}\
                   #team .team-item .social .facebook, #team .team-item .social .twitter,\
                    #team .team-item .social .google-plus {background: #9C3 none repeat scroll 0 0;border: 1px solid #9C3;}\
                   .orange-line {background: #9C3 none repeat scroll 0 0;}\
                   #cool-facts .facts-item i { color: #9C3;}#testimonial .testimonial-inner:hover {border-color: #9C3;}\
                   #blog .blog-item-text .blog-one-footer i {color: #9C3;}#blog .blog-item-text .blog-one-footer a:hover {color: #9C3;}\
                   .portfolio-meta ul li span {color: #9C3;}\
                   #main-menu ul .dropdown .dropdown-menu .dropdown-item.active, #main-menu ul .dropdown .dropdown-menu \
                   .dropdown-item.active:focus, #main-menu ul .dropdown .dropdown-menu .dropdown-item.active:hover {color: #9C3;\
                     background-color: #eee;}#main-menu .nav-link.active {color: #9C3;}\
                   #main-menu .nav-link:hover {color: #9C3;}.sup-desc-wrap .sup-link a:hover {color: #9C3;}\
                   #team .team-item .social a:hover {color: #9C3;}\
                   #main-menu ul .dropdown .dropdown-menu a:hover, #main-menu .dropdown .dropdown-menu a .active {\
                   color: #9C3;}.top_search_con input:focus {border: 1px solid #9C3;}'
                }
            </style>
            </Helmet>
              


      <NavBar />
    
      <Switch>
       <Route path="/about" component={About} />
       <Route path="/opac" component={Opac} />
       <Route path="/about" component={About} />
       <Route path="/blog" component={Blog} />
       <Route path="/contact" component={Contact} />
       <Route path="/servicios" component={Services} />
       <Route path="/" component={Home} />
       </Switch> 
       <Footer />
    </div>
  );
}


export default App;