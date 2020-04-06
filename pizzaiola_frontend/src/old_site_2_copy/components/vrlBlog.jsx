import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="classNameic-blog-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-9  justify-content-end ">
            <article className="blog-post-wrapper wow fadeInUp" data-wow-delay="0.3s">
              <header className="author-info">
                <div className="tag-posted-in">
                  <ul className="list-unstyled">
                    <li><i className="fa fa-tag"></i> <a href="#">User Experience</a></li>
                  </ul>
                </div>
                <div className="author-posted">
                  <div className="media">
                    <div className="media-left">
                      <a href="#"><img className="img-circle img-responsive" src="assets/img/blog/avatar/avatar1.jpg" alt=""/></a>
                    </div>
                    <div className="media-body">
                      <span className="author-name"><a href="#"><b>Al Amin Khan</b></a></span><br/>
                      <span className="published-time"><i className="fa fa-calendar"></i> 18 hrs ago</span>
                    </div>
                  </div>
                </div>
              </header>
              <section className="featured-wrapper">
                <a href="#">
                  <img src="assets/img/blog/blog-post-1.jpg" alt=""/>
                </a>
              </section>
              <section className="blog-post-content">
                <div>
                  <h2 className="blog-post-title"><a href="#">Principles of UX Design</a></h2>
                </div>
                <div className="blog-post">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae incidunt unde aliquid dolorum qui voluptatibus ipsa voluptatem aliquam quisquam quis a enim quas reprehenderit dicta, expedita. Vel repellat sunt qui, repudiandae ratione perferendis, dicta provident, laboriosam dolorum repellendus ad!</p>
                </div>
              </section>
              <footer className="blog-post-footer clearfix">
                <ul className="post-meta pull-left">
                  <li>
                    <span><a href="#"><i className="fa fa-comments"></i> 25</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-thumbs-up"></i> 250</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-share"></i> Share</a></span>
                  </li>
                </ul>
                <a href="#" className="pull-right btn btn-common btn-xs text-uppercase">Read more</a>
              </footer>
            </article>
            <article className="blog-post-wrapper format-slider wow fadeInUp" data-wow-delay="0.3s">
              <header className="author-info">
                <div className="tag-posted-in">
                  <ul className="list-unstyled">
                    <li><i className="fa fa-tag"></i> <a href="#">Photography</a></li>
                  </ul>
                </div>
                <div className="author-posted">
                  <div className="media">
                    <div className="media-left">
                      <a href="#"><img className="img-circle" src="assets/img/blog/avatar/avatar2.jpg" alt=""/></a>
                    </div>
                    <div className="media-body">
                      <span className="author-name"><a href="#"><b>Michel J.</b></a></span><br/>
                      <span className="published-time"><i className="fa fa-calendar"></i> 1 day ago</span>
                    </div>
                  </div>
                </div>
              </header>
              <section className="featured-wrapper">
                <div id="carousel-image-slider" className="owl-carousel">
                  <div className="item">
                    <img src="assets/img/blog/blog-slider/carousel-01.jpg" alt=""/>
                  </div>
                  <div className="item">
                    <img src="assets/img/blog/blog-slider/carousel-02.jpg" alt=""/>
                  </div>
                  <div className="item">
                    <img src="assets/img/blog/blog-slider/carousel-03.jpg" alt=""/>
                  </div>
                  <div className="item">
                    <img src="assets/img/blog/blog-slider/carousel-04.jpg" alt=""/>
                  </div>
                </div>
              </section>
              <section className="blog-post-content">
                <div>
                  <h2 className="blog-post-title"><a href="#">Microw photography Basics</a></h2>
                </div>
                <div className="blog-post">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae incidunt unde aliquid dolorum qui voluptatibus ipsa voluptatem aliquam quisquam quis a enim quas reprehenderit dicta, expedita. Vel repellat sunt qui, repudiandae ratione perferendis, dicta provident, laboriosam dolorum repellendus ad!</p>
                </div>
              </section>
              <footer className="blog-post-footer clearfix">
                <ul className="post-meta pull-left">
                  <li>
                    <span><a href="#"><i className="fa fa-comments"></i> 25</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-thumbs-up"></i> 250</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-share"></i> Share</a></span>
                  </li>
                </ul>
                <a href="#" className="pull-right btn btn-common btn-xs text-uppercase">Read more</a>
              </footer>
            </article>
            <article className="blog-post-wrapper format-video wow fadeInUp" data-wow-delay="0.3s">
              <header className="author-info">
                <div className="tag-posted-in">
                  <ul className="list-unstyled">
                    <li><i className="fa fa-tag"></i> <a href="#">Video Editing</a></li>
                  </ul>
                </div>
                <div className="author-posted">
                  <div className="media">
                    <div className="media-left">
                      <a href="#"><img className="img-circle" src="assets/img/blog/avatar/avatar3.jpg" alt=""/></a>
                    </div>
                    <div className="media-body">
                      <span className="author-name"><a href="#"><b>Saif Russel</b></a></span><br/>
                      <span className="published-time"><i className="fa fa-calendar"></i> 2 Days ago</span>
                    </div>
                  </div>
                </div>
              </header>
              <section className="featured-wrapper">
                <iframe height="350" width="100%" src="https://www.youtube.com/embed/cNS25F_IxuI?list=PL0ZplvDGpXLfeBBcsdDUKOdoVZEJ1F3Um" allowFullScreen></iframe>
              </section>
              <section className="blog-post-content">
                <div>
                  <h2 className="blog-post-title"><a href="#">Fundamental of video editing</a></h2>
                </div>
                <div className="blog-post">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae incidunt unde aliquid dolorum qui voluptatibus ipsa voluptatem aliquam quisquam quis a enim quas reprehenderit dicta, expedita. Vel repellat sunt qui, repudiandae ratione perferendis, dicta provident, laboriosam dolorum repellendus ad!</p>
                </div>
              </section>
              <footer className="blog-post-footer clearfix">
                <ul className="post-meta pull-left">
                  <li>
                    <span><a href="#"><i className="fa fa-comments"></i> 25</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-thumbs-up"></i> 250</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-share"></i> Share</a></span>
                  </li>
                </ul>
                <a href="#" className="pull-right btn btn-common btn-xs text-uppercase">Read more</a>
              </footer>
            </article>
            <article className="blog-post-wrapper wow fadeInUp" data-wow-delay="0.3s">
              <header className="author-info">
                <div className="tag-posted-in">
                  <ul className="list-unstyled">
                    <li><i className="fa fa-tag"></i> <a href="#">Reading</a></li>
                  </ul>
                </div>
                <div className="author-posted">
                  <div className="media">
                    <div className="media-left">
                      <a href="#"><img className="img-circle" src="assets/img/blog/avatar/avatar5.jpg" alt=""/></a>
                    </div>
                    <div className="media-body">
                      <span className="author-name"><a href="#"><b>Mosharrof</b></a></span><br/>
                      <span className="published-time"><i className="fa fa-calendar"></i> 2 hrs ago</span>
                    </div>
                  </div>
                </div>
              </header>
              <section className="blog-post-content">
                <div>
                  <h2 className="blog-post-title"><a href="#">Post without featured image</a></h2>
                </div>
                <div className="blog-post">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae incidunt unde aliquid dolorum qui voluptatibus ipsa voluptatem aliquam quisquam quis a enim quas reprehenderit dicta, expedita. Vel repellat sunt qui, repudiandae ratione perferendis, dicta provident, laboriosam dolorum repellendus ad!</p>
                </div>
              </section>
              <footer className="blog-post-footer clearfix">
                <ul className="post-meta pull-left">
                  <li>
                    <span><a href="#"><i className="fa fa-comments"></i> 25</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-thumbs-up"></i> 250</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-share"></i> Share</a></span>
                  </li>
                </ul>
                <a href="#" className="pull-right btn btn-common btn-xs text-uppercase">Read more</a>
              </footer>
            </article>
            <article className="blog-post-wrapper format-audio wow fadeInUp" data-wow-delay="0.3s">
              <header className="author-info">
                <div className="tag-posted-in">
                  <ul className="list-unstyled">
                    <li><i className="fa fa-tag"></i> <a href="#">Song , Mp3</a></li>
                  </ul>
                </div>
                <div className="author-posted">
                  <div className="media">
                    <div className="media-left">
                      <a href="#"><img className="img-circle" src="assets/img/blog/avatar/avatar4.jpg" alt=""/></a>
                    </div>
                    <div className="media-body">
                      <span className="author-name"><a href="#"><b>Jennifer Lopez</b></a></span><br/>
                      <span className="published-time"><i className="fa fa-calendar"></i> 5 Days ago</span>
                    </div>
                  </div>
                </div>
              </header>
              <section className="featured-wrapper">
                <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181436429&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
              </section>
              <section className="blog-post-content">
                <div>
                  <h2 className="blog-post-title"><a href="#">Soundcloud audio embed post</a></h2>
                </div>
                <div className="blog-post">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae incidunt unde aliquid dolorum qui voluptatibus ipsa voluptatem aliquam quisquam quis a enim quas reprehenderit dicta, expedita. Vel repellat sunt qui, repudiandae ratione perferendis, dicta provident, laboriosam dolorum repellendus ad!</p>
                </div>
              </section>
              <footer className="blog-post-footer clearfix">
                <ul className="post-meta pull-left">
                  <li>
                    <span><a href="#"><i className="fa fa-comments"></i> 25</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-thumbs-up"></i> 250</a></span>
                  </li>
                  <li>
                    <span><a href="#"><i className="fa fa-share"></i> Share</a></span>
                  </li>
                </ul>
                <a href="#" className="pull-right btn btn-common btn-xs text-uppercase">Read more</a>
              </footer>
            </article>
            <article className="blog-post-wrapper format-qoute wow fadeInUp" data-wow-delay="0.3s">
              <section className="blog-post-content">
                <blockquote className="blockquote">
                  <p>Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.</p>
                  <a href="#"><span>- Bradley Whitford</span></a>
                </blockquote>
              </section>
            </article>

            <div className="blog-pagination clearfix wow fadeInUp" data-wow-delay="0.3s">
              <nav aria-label="..." className="">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-label="Previous">
                      <i className="fa fa-angle-left"></i>
                       Prev
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      Next 
                      <i className="fa fa-angle-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-md-3 pull-xs-left">
            <div className="sidebar-area">
              <aside className="widget search-bar wow fadeInUp" data-wow-delay="0.3s">
                <form>
                  <input type="text" placeholder="Search" className="form-control"/>
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>
              </aside>
              <aside className="widget text-widgets wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="widget-title">Text Widget</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorem fuga ad corrupti, ullam, eos natus, repellat officiis sit labore a aspernatur quisquam. In, unde.</p>
              </aside>
              <aside className="widget popular-post wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="widget-title">Popular Post</h2>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <a href="#"><img className="img-responsive" src="assets/img/blog/avatar/avatar1.jpg" alt=""/></a>
                      </div>
                      <div className="media-body">
                        <h4><a href="#">Principles of UX Design</a></h4>
                        <span className="published-time"><i className="fa fa-calendar"></i> 18 hrs ago</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <a href="#"><img className="img-responsive" src="assets/img/blog/avatar/avatar2.jpg" alt=""/></a>
                      </div>
                      <div className="media-body">
                        <h4><a href="#">The unknown mystery of Momy</a></h4>
                        <span className="published-time"><i className="fa fa-calendar"></i> 5 Days ago</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <a href="#"><img className="img-responsive" src="assets/img/blog/avatar/avatar3.jpg" alt=""/></a>
                      </div>
                      <div className="media-body">
                        <h4><a href="#">IMDM top 250 Movies</a></h4>
                        <span className="published-time"><i className="fa fa-calendar"></i> 6 Days ago</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <a href="#"><img className="img-responsive" src="assets/img/blog/avatar/avatar4.jpg" alt=""/></a>
                      </div>
                      <div className="media-body">
                        <h4><a href="#">Meteor.JS Fundamentals</a></h4>
                        <span className="published-time"><i className="fa fa-calendar"></i> 7 Days ago</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </aside>
              <aside className="widget flickr-widget wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="widget-title">Flickr Feed</h2>
                <div className="plain-flicker-gallery">
                  <a href="#" title="Pan Masala"><img src="assets/img/flicker/img1.jpg" alt=""/></a>
                  <a href="#" title="Sports Template for Joomla"><img src="assets/img/flicker/img2.jpg" alt=""/></a>
                  <a href="" title="Apple Keyboard"><img src="assets/img/flicker/img3.jpg" alt=""/></a>
                  <a href="" title="Hard Working"><img src="assets/img/flicker/img4.jpg" alt=""/></a>
                  <a href="" title="Smile"><img src="assets/img/flicker/img5.jpg" alt=""/></a>
                  <a href="" title="Puzzle"><img src="assets/img/flicker/img6.jpg" alt=""/></a>
                  <a href="#" title="Pan Masala"><img src="assets/img/flicker/img1.jpg" alt=""/></a>
                  <a href="#" title="Sports Template for Joomla"><img src="assets/img/flicker/img2.jpg" alt=""/></a>
                  <a href="" title="Apple Keyboard"><img src="assets/img/flicker/img3.jpg" alt=""/></a>
                </div>
              </aside>
              <aside className="widget subscribe-widget wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="widget-title">Subscribe</h2>
                <div className="subscribe-area">
                  <p>Subscribe to our news latter to get regular update and blog posts.</p>
                  <form className="form-group">
                    <div className="input-group">
                      <input type="email" className="form-control input-block-level" placeholder="hello@youremail.com"/>
                    </div>
                    <button type="submit" className="mt-10 btn btn-common btn-block">Subscribe</button>
                  </form>
                </div>
              </aside>
              <aside className="widget tag-cloud wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="widget-title">Tag clouds</h2>
                <div className="clearfix">
                  <ul>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">PSD</a></li>
                    <li><a href="#">Coding</a></li>
                    <li><a href="#">UI</a></li>
                    <li><a href="#">Sublime</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Hosting</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Arts</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Technology</a></li>
                </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
