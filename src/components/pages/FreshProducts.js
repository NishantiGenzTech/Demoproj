import React from 'react';
import ProgressCard from '../Card/ProgressCard';
import '../Styles/fproducts.css'

function FreshProducts() {
    return (
        <section className="fproduc">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="fproduct_img">
                            <img src="../Img/ag.jpg" alt="Product One Img" />
                            <div className="yearbox">
                                <h2>40 Year</h2>
                                <p>Of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="freshprod11">
                            <div className="block-title text-left">
                                <p>fresh products</p>
                                <h3>Growing products</h3>
                               
                            </div>
                            <div className="freshprod11_text">
                                <p>Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo
                                    sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae
                                    onec.</p>
                            </div>
                            <div className="progress-levels">
                               
                                <div className="progress-box">
                                    <div className="inner count-box">
                                        <div className="text">Agriculture</div>
                                        <ProgressCard />
                                    </div>
                                </div>
                                
                                <div className="progress-box">
                                    <div className="inner count-box">
                                        <div className="text">Organic</div>
                                        <ProgressCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FreshProducts;