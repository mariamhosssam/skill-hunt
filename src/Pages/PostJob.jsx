//







// don't forget the part of ( token ) and ( Image ) 







//
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../Helpers";



const PostJob = () => {


    /*           for image file        */
    const [fileName, setFileName] = useState('');
    const [imageFile, setImageFile] = useState(null);
  
    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      setFileName(file.name);
      setImageFile(file);
    };

    /////////////////////////////////////////////////////////

    /*            for job description       */
    const [jobDescription, setJobDescription] = useState(""); // State to store the job description

    // Function to handle job description input change
    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value); // Update job description in state
    };
    /////////////////////////////////////////////////////////

    /*          for checkBox                 */
    const [isChecked, setIsChecked] = useState(false); // State to manage the checkbox value

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked); // Update checkbox value in state
    };
  //////////////////////////////////////////////////////////////////////  

    /*                      for questions                 */
    const [questions, setQuestions] = useState([]);

    const handleAddQuestion = (questionType) => {
        if (questionType == "TECH") {
            const techquestion = {
                questionBody: document.getElementById('tech-question').value,
                chooses: document.getElementById('options').value.split(',').map(option => ({ chooseBody: option })),
                modelAnswer: document.getElementById('answer').value,
                hasChooses:true,
                questionType: questionType

            };
            // Add the new question to the existing list of questions
            setQuestions([...questions, techquestion]);
        }
        else if (questionType == "SOFT") {
            const softquestion = {
                questionBody: document.getElementById('soft-question').value,
                hasChooses:false,
                modelAnswer:"",
                chooses:null,
                questionType: questionType
            };
            // Add the new question to the existing list of questions
            setQuestions([...questions, softquestion]);
        }
        else if (questionType == "ADD") {
            const addquestion = {
                questionBody: document.getElementById('add-question').value,
                hasChooses: false,
                modelAnswer:"",
                chooses:null,
                questionType: questionType
            };
            // Add the new question to the existing list of questions
            setQuestions([...questions, addquestion]);
        }


        // Clear the input fields after adding the question
        document.getElementById('tech-question').value = '';
        document.getElementById('soft-question').value = '';
        document.getElementById('add-question').value = '';
        document.getElementById('options').value = '';
        document.getElementById('answer').value = '';

       
    };

    //////////////////////////////////////////////

    localStorage.setItem('token', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY29tcGFueUBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzEzNzkyMjUxfQ.lxp21vSkatrrCa6GpTSED2nfDBuWslRTxMZSExuZwWz9td7-iGmDZkmpC5tq8Nd3zfQUqyr_47_pSYzcI6RcjA');
    /// dont forgret this

    const handleSubmit = async  (event) => {


        const newjob = {    
  jobTitle: document.getElementById('job-title').value,
  jobRegion: document.getElementById('job-region').value,
  jobType: document.getElementById('job-type').value,
  jobDescription: document.getElementById('editor-1').textContent,
  questions: questions,
  isShared: isChecked,
  token: localStorage.getItem('token'),
  image: null// imageFile            // dont forgret this
        }

        console.log(newjob);
        
            event.preventDefault();    
            
        
            axios.post(`${baseUrl}/Job/ADD JOB`, newjob)
            .then(async(response) => {
                if (response.status === 200) {
                    let jobPosted = localStorage.getItem('JobPosted');
                    let jobPostedArray = [];
        
                    if (jobPosted) {
                        try {
                            jobPostedArray = JSON.parse(jobPosted);
                        } catch (error) {
                            console.error('Error parsing localStorage:', error);
                        }
                    }
        
                    jobPostedArray.push(response.data); // Assuming response.data contains the posted job data
        
                    localStorage.setItem('JobPosted', JSON.stringify(jobPostedArray));
                    alert('The Job Added Done!');
                }
            })
            .catch((error) => {
                console.log('Error adding job:', error);
                alert('Error adding job:', error);
            });

     }


    //////////////////////////////////////////

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
                                    <form className="p-4 p-md-5 border rounded" method="post" onSubmit={handleSubmit}>
                                        <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>


                                        <div className="form-group">
                                            <label htmlFor="company-website-tw d-block">Upload Featured Image</label> <br />
                                            <label className="btn btn-primary btn-md btn-file">
                                                Browse File
                                                <input type="file" id="image" hidden onChange={handleFileSelect} />
                                            </label>
                                            {/* Display the file name */}
                                            {fileName && <p>Selected File: {fileName}</p>}
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="you@yourdomain.com" required  />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-title">Job Title</label>
                                            <input type="text" className="form-control" id="job-title" placeholder="Product Designer" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-location">Location</label>
                                            <input type="text" className="form-control" id="job-location" placeholder="e.g. New York" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-region">Job Region</label>
                                            <select className="selectpicker border rounded" id="job-region" data-style="btn-black" required data-width="100%" data-live-search="true" title="Select Region">
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
                                            <select className="selectpicker border rounded" id="job-type" data-style="btn-black" required data-width="100%" data-live-search="true" title="Select Job Type">
                                                <option>Part Time</option>
                                                <option>Full Time</option>
                                                <option>Internship</option>
                                            </select>
                                        </div>



                                        <div className="form-group">
                                            <label htmlFor="job-description"  >Job Description</label>
                                            <div className="editor" id="editor-1" value={jobDescription}
                                                    onChange={handleJobDescriptionChange}>
                                                
                                            </div>
                                        </div>



                                        <div>
                                            <h3 className="text-black my-5 border-bottom pb-2">MCQ Questions</h3>
                                            <div className="form-group">
                                                <label htmlFor="tech-question">Enter your question:</label><br />
                                                <input type="text" id="tech-question" className="form-control"  /><br />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="options">Enter options (comma separated and the Right Answer First):</label><br />
                                                <input type="text" id="options" className="form-control"  /><br />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="answer">Enter the answer:</label><br />
                                                <input type="text" id="answer" className="form-control"  /><br />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="share">Share this question:</label>
                                                <input type="checkbox" id="share" checked={isChecked} onChange={handleCheckboxChange} /><br />
                                            </div>
                                            <div className="form-group">
                                                <button type="button" onClick={() => handleAddQuestion("TECH")} className="btn btn-primary btn-md btn-file">
                                                    Add Question
                                                </button>
                                            </div>
                                        </div>




                                        <div>
                                            <h3 className="text-black my-5 border-bottom pb-2">Soft Skills Questions</h3>
                                            <div className="form-group">
                                                <label htmlFor="soft-question">Enter the soft skills Question:</label><br />
                                                <input type="text" id="soft-question" className="form-control"  /><br />
                                            </div>

                                        </div>
                                        <button type="button" onClick={() => handleAddQuestion("SOFT")} className="btn btn-primary btn-md btn-file">
                                            Add Question
                                        </button>



                                        <h3 className="text-black my-5 border-bottom pb-2">Additional Questions</h3>
                                        <label htmlFor="question">Enter your question:</label><br />
                                        <input type="text" id="add-question" className="form-control"  /><br /><br />
                                        <button type="button" onClick={() => handleAddQuestion("ADD")} className="btn btn-primary btn-md btn-file">
                                            Add Question
                                        </button>

                                        <div className="row align-items-center mb-5 pt-5">
                                            <div className="col-lg-4 ml-auto">
                                                <div className="row">


                                                    <div className="col-6">
                                                        <button type="submit" className="btn btn-block btn-primary btn-md">Save Job</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                    <div id="questions-list" />
                                </div>
                            </div> {/**end of form */}

                        </div>
                    </section>
                    <Footer></Footer>
                </div>
            </div>

        </div>


    )
}
export default PostJob;