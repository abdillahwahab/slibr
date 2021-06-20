// Copyright abdillahwahab and Rachmat Ismail
// 2021
// abdillahwahab@gmail.com
// rachmatismail88@gmail.com
// 

import React, { useState } from 'react';
import icon_home from '../icons/icon_home.svg';
import icon_library from '../icons/icon_library.svg';
import icon_history from '../icons/icon_history.svg';
import icon_book from '../icons/icon_book.svg';
import icon_profile from '../icons/icon_profile.svg';
import xample_book1 from '../icons/book_xample.jpg';

import icon_bell from '../icons/icon_bell.svg';
import icon_star from '../icons/icon_star.svg';
import separator_point from '../icons/separator_point.svg';
import icon_bagage from '../icons/icon_bagage.svg';

export class SLibrDashboard extends React.Component {

  render(){
    return (
    	<div className="cintainer dashboard">
    	     <div className="container mini-profile row">
    	         <div className="col-2 avatar1">
                    <img src={icon_profile} className="icon-bell" alt="icon" />
    	         </div>
    	         <div className="col-8 label-name">
    	            <span className="name_in_dashboard">Selamat Datang</span>
    	            <br/>
    	            <span className="name_in_dashboard">Joko Lelur</span>
    	         </div>
    	         <div className="col-2">
                    <img src={icon_bell} className="icon-bell" alt="icon" />
    	         </div>
    	     </div>
		     <div className="center_box col">
	            <div className="col-md-12 ft">
	              <p className="text"><strong>Kamu hari ini adalah apa yang kamu baca 5 tahun lalu.</strong></p>
	              <h4 className="text"><strong>IDR 55.000,00</strong></h4>
	            </div>
	            <div className="row ft">
		            <div className="col-md-6 row ft">
		                <div className="ft">
                            <img src={icon_bagage}  alt="icon" height="40" />
                        </div>
                        <div className="col ft">
	                        <span className="text">Buku Terpinjam</span>
	                        <br/>
	                        <span className="text">50%</span>
                        </div>
		            </div>
		            <div className="col-md-6 row ft">
		                <div className="ft">
                            <img src={icon_bagage}  alt="icon" height="40" />
                        </div>
                        <div className="col ft">
	                        <span className="text">Buku Dipinjam</span>
	                        <br/>
	                        <span className="text">45%</span>
                        </div>
		            </div>
	            </div>
		     </div>
		     <div className="container popup_login">
		         <div className="dashboard_content">
		             <p className=""><strong>Recomendation:</strong></p>
			         <div className="center_box row">
			            <div className="col-md-10 order-md-1 ">
			              <p className=""><strong>Think Sex and Grow Rich:</strong></p>
			              <h4 className=""><strong>IDR 5.000,00</strong></h4>
			              <div className="row flex">
			                  <div className="ft col-md-3">
			                      <img src={icon_star}  alt="icon" />
			                      <span className="text"><strong>4.5</strong></span>
			                  </div>
			                  <div className="ft col-md-4">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">By Marcus El</span>
			                  </div>
			                  <div className="ft col-md-5">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">Buku Motivasi</span>
			                  </div>
			              </div>
			            </div>
			            <div className="col-md-2 order-md-2">
			              <img src={xample_book1} className="" height="100" />

			            </div>
			         </div>

			         <div className="center_box row">
			            <div className="col-md-10 order-md-1 ">
			              <p className=""><strong>Think Sex and Grow Rich:</strong></p>
			              <h4 className=""><strong>IDR 5.000,00</strong></h4>
			              <div className="row flex">
			                  <div className="ft col-md-3">
			                      <img src={icon_star}  alt="icon" />
			                      <span className="text"><strong>4.5</strong></span>
			                  </div>
			                  <div className="ft col-md-4">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">By Marcus El</span>
			                  </div>
			                  <div className="ft col-md-5">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">Buku Motivasi</span>
			                  </div>
			              </div>
			            </div>
			            <div className="col-md-2 order-md-2">
			              <img src={xample_book1} className="" height="100" />

			            </div>
			         </div>

			         <div className="center_box row">
			            <div className="col-md-10 order-md-1 ">
			              <p className=""><strong>Think Sex and Grow Rich:</strong></p>
			              <h4 className=""><strong>IDR 5.000,00</strong></h4>
			              <div className="row flex">
			                  <div className="ft col-md-3">
			                      <img src={icon_star}  alt="icon" />
			                      <span className="text"><strong>4.5</strong></span>
			                  </div>
			                  <div className="ft col-md-4">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">By Marcus El</span>
			                  </div>
			                  <div className="ft col-md-5">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">Buku Motivasi</span>
			                  </div>
			              </div>
			            </div>
			            <div className="col-md-2 order-md-2">
			              <img src={xample_book1} className="" height="100" />

			            </div>
			         </div>

			         <div className="center_box row">
			            <div className="col-md-10 order-md-1 ">
			              <p className=""><strong>Think Sex and Grow Rich:</strong></p>
			              <h4 className=""><strong>IDR 5.000,00</strong></h4>
			              <div className="row flex">
			                  <div className="ft col-md-3">
			                      <img src={icon_star}  alt="icon" />
			                      <span className="text"><strong>4.5</strong></span>
			                  </div>
			                  <div className="ft col-md-4">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">By Marcus El</span>
			                  </div>
			                  <div className="ft col-md-5">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">Buku Motivasi</span>
			                  </div>
			              </div>
			            </div>
			            <div className="col-md-2 order-md-2">
			              <img src={xample_book1} className="" height="100" />

			            </div>
			         </div>

			         <div className="center_box row">
			            <div className="col-md-10 order-md-1 ">
			              <p className=""><strong>Think Sex and Grow Rich:</strong></p>
			              <h4 className=""><strong>IDR 5.000,00</strong></h4>
			              <div className="row flex">
			                  <div className="ft col-md-3">
			                      <img src={icon_star}  alt="icon" />
			                      <span className="text"><strong>4.5</strong></span>
			                  </div>
			                  <div className="ft col-md-4">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">By Marcus El</span>
			                  </div>
			                  <div className="ft col-md-5">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">Buku Motivasi</span>
			                  </div>
			              </div>
			            </div>
			            <div className="col-md-2 order-md-2">
			              <img src={xample_book1} className="" height="100" />

			            </div>
			         </div>

			         <div className="center_box row">
			            <div className="col-md-10 order-md-1 ">
			              <p className=""><strong>Think Sex and Grow Rich:</strong></p>
			              <h4 className=""><strong>IDR 5.000,00</strong></h4>
			              <div className="row flex">
			                  <div className="ft col-md-3">
			                      <img src={icon_star}  alt="icon" />
			                      <span className="text"><strong>4.5</strong></span>
			                  </div>
			                  <div className="ft col-md-4">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">By Marcus El</span>
			                  </div>
			                  <div className="ft col-md-5">
			                      <img src={separator_point}  alt="icon" />
			                      <span className="text">Buku Motivasi</span>
			                  </div>
			              </div>
			            </div>
			            <div className="col-md-2 order-md-2">
			              <img src={xample_book1} className="" height="100" />

			            </div>
			         </div>

		         </div>
		     </div>
	        <div className="slibr-navigation" >
	            <div className="frame-silbr-navigation">
	                <div className="slibr-menu col">
	                    <img src={icon_home} className="icon" alt="icon" />
	                    <span>Home</span>
	                </div>
	                <div className="slibr-menu col">
	                    <img src={icon_library} className="icon" alt="icon" />
	                    <span>Library</span>
	                </div>
	                <div className="slibr-menu col">
	                    <img src={icon_history} className="icon" alt="icon" />
	                    <span>History</span>
	                </div>
	                <div className="slibr-menu col">
	                    <img src={icon_book} className="icon" alt="icon" />
	                    <span>Book</span>
	                </div>
	                <div className="slibr-menu col">
	                    <img src={icon_profile} className="icon" alt="icon" />
	                    <span>Profile</span>
	                </div>
	            </div>
	        </div>

	    </div>
      );
  }
}
