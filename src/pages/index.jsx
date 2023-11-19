import React from "react";
import {Helmet} from "react-helmet";
import brand_mark from "../images/brand.png";
import hamburger from "../images/menu.png";
import head_img_ctn from "../images/img_ctn_head.jpg";
import Mouse_scroll from "../images/mouse-cursor.png";
import { Link } from "react-router-dom";
import headphone from "../images/headphone.png";
import link from "../images/link.png";
import chill from "../images/chill.png";
import timer from "../images/timer.png";
import write from "../images/wirte.png";
import youtube from "../images/youtube.png";
import developer from "../images/dev_img.jpg";
import face from "../images/facebook.png";
import github from "../images/github.png";
import insta from "../images/instagram.png";

function index(){
    return(
        <section>
            <div className="back_drop_blur">
            </div>
            <header className="wrap_index">
                <Helmet>
                    <title>Chill&Focus</title>
                </Helmet>
                <div className="wrap_ind_head">
                    <div className="menu">
                        <div className="wrap_brand_mark">
                            <img className="brand_mark" src={brand_mark} alt="Chill & Focus brandmark" />
                        </div>
                        <ul className="wrap_list">
                            <li>
                                <button className="ham_btn"><img className="hamburger_img" src={hamburger} alt="hamburger menu" /></button>
                                <ul className="list_responsive">
                                    <li className="list_menu"><Link id="Link_menu" className="Link" to={"https://www.instagram.com/_mey_mey_1308/"} target="_blank">about us</Link></li> 
                                    <li className="list_menu"><Link id="Link_menu" className="Link">submit request</Link></li> 
                                    <li className="list_menu"><Link id="Link_menu" className="Link">Register</Link></li> 
                                    <li className="list_menu"><Link id="Link_menu" className="Link">Sign in</Link></li> 
                                </ul>
                            </li> 
                        </ul>
                    </div>
                    <div className="ind_head">
                        <div className="wrap_text_header">
                            <h1 className="head_text_header">work productivity with us</h1>
                            <p className="script_header">The online tools to help increase your productivity. Focus and relax with lofi music library, binural beats and any music on youtube with link.</p>
                            <div className="wrap_btn_head">
                                <button className="head_btn">register</button>
                                <button className="head_btn">sign in</button>
                            </div>
                        </div>
                        <div className="wrap_3d_img">
                            <div className="wrap_img_head">
                                <img className="head_img_ctn" src={head_img_ctn} alt="img_head"/>
                            </div>
                        </div>
                    </div>
                    <div className="wrap_mouse">
                        <img className="mouse" src={Mouse_scroll} alt="scroll_down"/>
                    </div>
                </div>
            </header>
            <main className="wrap_main_index">
                <div className="wrap_feat">
                    <div className="wrap_feat_header">
                        <p className="feat_head">features</p>
                    </div>
                    <div className="wrap_feat_ctn">
                        <div className="feat_tag">
                            <div className="img_feat">
                                <img className="img_tag" src={headphone} alt="headphone"/>
                            </div>
                            <div className="wrap_tag_ctn">
                                <p className="tag_head">enjoy the music</p>
                                <p className="scr_tag">the music library has many genres such as lofi, focused waves, binural beats, meditation music, jazz and piano.</p>
                                <button className="gotoapp">try feature</button>
                            </div>
                        </div>
                        <div className="feat_tag">
                            <div className="img_feat">
                                <img className="img_tag" src={youtube} alt="youtube"/>
                            </div>
                            <div className="wrap_tag_ctn">
                                <p className="tag_head">music on youtube</p>
                                <p className="scr_tag">Just have the link of the youtube video you like, you can enjoy it!</p>
                                <button className="gotoapp">try feature</button>
                            </div>
                        </div>
                        <div className="feat_tag">
                            <div className="img_feat">
                                <img className="img_tag" src={chill} alt="chill"/>
                            </div>
                            <div className="wrap_tag_ctn">
                                <p className="tag_head">chill & relax</p>
                                <p className="scr_tag">chill, relax whenever you want, while working, enjoying morning coffee or while sleeping.</p>
                                <button className="gotoapp">try feature</button>
                            </div>
                        </div>
                        <div className="feat_tag">
                            <div className="img_feat">
                                <img className="img_tag" src={timer} alt="timer count"/>
                            </div>
                            <div className="wrap_tag_ctn">
                                <p className="tag_head">countdown clock</p>
                                <p className="scr_tag">The countdown clock helps track your work time, focus and improve productivity with the time goals you set.</p>
                                <button className="gotoapp">try feature</button>
                            </div>
                        </div>
                        <div className="feat_tag">
                            <div  className="img_feat">
                                <img className="img_tag" src={link} alt="link"/>
                            </div>
                            <div className="wrap_tag_ctn">
                                <p className="tag_head">link saver</p>
                                <p className="scr_tag">link saver helps save link addresses that are important to you, helping to optimize the time and location of storing your links.</p>
                                <button className="gotoapp">try feature</button>
                            </div>
                        </div>
                        <div className="feat_tag">
                            <div className="img_feat">
                                <img className="img_tag" src={write} alt="write"/>
                            </div>
                            <div className="wrap_tag_ctn">
                                <p className="tag_head">note saver</p>
                                <p className="scr_tag">note saver helps you note your important notes while you focus on productivity, saving time and screen space when using other note saver</p>
                                <button className="gotoapp">try feature</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap_dev">
                    <div className="dev">
                        <div className="wrap_dev_head">
                            <p className="dev_head">developer</p>
                        </div>
                        <div className="wrap_dev_info">
                            <div className="wrap_dev_img">
                                <img className="dev_img" src={developer} alt="developer"/>
                            </div>
                            <div className="dev_info">
                                <p className="dev_name">Trần Minh Quân (Quannichan)</p>
                                <p className="dev_script">hello, currently I am a 2nd year student of VKU university, this is the first application I built and want to develop using Nodejs, Expressjs and Reactjs. With my hobby of listening to music while sleeping, relaxing, studying and working, I find it helps me be very productive, so I created this tool to bring a sense of comfort and concentration to many other users, hoping everyone likes it!</p>
                                <div className="wrap_social">
                                    <a href="https://github.com/Quannichan" target="_blank" className="icon_soc"><img className="soc_img" src={github} alt="github"/></a>
                                    <a href="https://www.facebook.com/NFS2019/" target="_blank" className="icon_soc"><img className="soc_img" src={face} alt="face"/></a>
                                    <a href="https://www.instagram.com/_mey_mey_1308/" className="icon_soc" target="_blank"><img className="soc_img" src={insta} alt="instagram"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default index;