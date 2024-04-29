import Header from "../Components/Header"
import Footer from "../Components/Footer"
const SoftSkillsVideo = () => {
    return (
        <div>
            <Header pageTitle='Soft skills Video Assessment'></Header>

  <style dangerouslySetInnerHTML={{__html: "\n        #video-container {\n            margin: 20px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    \n        #camera, #recorded-video {\n            width: 640px;\n            height: 480px;\n            margin-bottom: 10px;\n        }\n    \n        #record-btn, #stop-btn {\n            padding: 10px;\n            font-size: 16px;\n        }\n    " }} />
  <section className="site-section">
    <div id="video-container">
      <video id="camera" autoPlay playsInline />
      <video id="recorded-video" controls />
      <button id="record-btn">Record</button>
      <button id="stop-btn" disabled>Stop</button>
    </div>
    <a href="applyforjob.html">Company Additional Questions</a>
  </section> 
  <Footer></Footer>
</div>

 
    )
}

export default SoftSkillsVideo
