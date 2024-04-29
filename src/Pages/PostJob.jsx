//new
import Footer from "../Components/Footer"
import Header from "../Components/Header"
const PostJob = () => {
    return (
        <div>
            <div id="top">
                <div className="site-wrap">
                    <div className="site-mobile-menu site-navbar-target">
                        <div className="site-mobile-menu-header">
                            <div className="site-mobile-menu-close mt-3">
                                <span className="icon-close2 js-menu-toggle" />
                            </div>
                        </div>
                        <div className="site-mobile-menu-body" />
                    </div> {/* .site-mobile-menu */}
                    {/* NAVBAR */}
                    <Header pageTitle='Post a Job'></Header>

                  
                    <section className="site-section">
                        <div className="container">
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-8 mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h2>Post A Job</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-6">
                                            {/* <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-open_in_new mr-2"></span>Preview</a> */}
                                        </div>
                                        <div className="col-6">
                                            {/* <a href="#" class="btn btn-block btn-primary btn-md">Save Job</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <form className="p-4 p-md-5 border rounded" method="post">
                                        <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>
                                        <div className="form-group">
                                            <label htmlFor="company-website-tw d-block">Upload Featured Image</label> <br />
                                            <label className="btn btn-primary btn-md btn-file">
                                                Browse File<input type="file" hidden />
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="you@yourdomain.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-title">Job Title</label>
                                            <input type="text" className="form-control" id="job-title" placeholder="Product Designer" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-location">Location</label>
                                            <input type="text" className="form-control" id="job-location" placeholder="e.g. New York" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-region">Job Region</label>
                                            <select className="selectpicker border rounded" id="job-region" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Region">
                                                <option>Anywhere</option>
                                                <option>Cairo</option>
                                                <option>Alexandria</option>
                                                <option>Giza</option>
                                                <option>Aswan</option>
                                                <option>Luxor</option>
                                                <option>Sharm El Sheikh</option>
                                                <option>Hurghada</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-type">Job Type</label>
                                            <select className="selectpicker border rounded" id="job-type" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Job Type">
                                                <option>Part Time</option>
                                                <option>Full Time</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-description">Job Description</label>
                                            <div className="editor" id="editor-1">
                                                <p>Write Job Description!</p>
                                            </div>
                                        </div>
                                        <h3 className="text-black my-5 border-bottom pb-2">MCQ Questions</h3>
                                        <label htmlFor="question">Enter your question:</label><br />
                                        <input type="text" id="question" required /><br />
                                        <label htmlFor="options">Enter options (comma separated and the Right Answer First):</label><br />
                                        <input type="text" id="options" required /><br />
                                        <label htmlFor="share">Share this question:</label>
                                        <input type="checkbox" id="share" /><br />
                                        {/* <button type="button" onclick="addQuestion()">Add Question</button> */}
                                        <label className="btn btn-primary btn-md btn-file">
                                            Add Question<input type="file" hidden />
                                        </label>
                                        <h3 className="text-black my-5 border-bottom pb-2">Soft Skills Questions</h3>
                                        <label htmlFor="question">Enter the First Question :</label><br />
                                        <input type="text" id="question" required /><br />
                                        <label htmlFor="options">Enter the Second Question :</label><br />
                                        <input type="text" id="options" required /><br />
                                        <h3 className="text-black my-5 border-bottom pb-2">Additional Questions</h3>
                                        <label htmlFor="question">Enter your question:</label><br />
                                        <input type="text" id="question" required /><br /><br />
                                        {/* <button type="button" onclick="addQuestion()">Add Question</button> */}
                                        <label className="btn btn-primary btn-md btn-file">
                                            Add Question<input type="file" hidden />
                                        </label>
                                        {/* <label for="share">Share this question:</label>
    <input type="checkbox" id="share"><br>
    <button type="button" onclick="addQuestion()">Add Question</button> */}
                                        {/* <br>
    <label class="btn btn-primary btn-md btn-file">
      Submit<input type="file" hidden>
    </label> */}
                                    </form>
                                    <div id="questions-list" />
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-4 ml-auto">
                                    <div className="row">
                                        {/* <div class="col-6">
        <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-open_in_new mr-2"></span>Preview</a>
      </div> */}
                                        <div className="col-6">
                                            <a href="post-job.html" className="btn btn-block btn-primary btn-md">Save Job</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer></Footer>
                </div>
            </div>

        </div>


    )
}
export default PostJob;