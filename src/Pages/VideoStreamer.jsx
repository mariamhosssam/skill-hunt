// import React, { useRef, useEffect, useState } from 'react';


// const VideoStreamer = () => {
//   const videoRef = useRef(null);
//   const [recording, setRecording] = useState(false);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [stream, setStream] = useState(null); // Add state for the stream

//   useEffect(() => {
//     const startStreaming = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         setStream(stream); // Save the stream in state
//         if (videoRef.current && recording) { // Check if recording is active
//           videoRef.current.srcObject = stream;
//           // Wait for the 'loadedmetadata' event before playing
//           videoRef.current.addEventListener('loadedmetadata', () => {
//             videoRef.current.play()
//               .catch(error => console.error('Error playing video:', error));
//           });
//         }
//       } catch (error) {
//         console.error('Error accessing media devices:', error);
//       }
//     };

//     startStreaming();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         const stream = videoRef.current.srcObject;
//         const tracks = stream.getTracks();
//         tracks.forEach(track => track.stop());
//       }
//     };
//   }, [recording]); // Add recording as a dependency

//   const startRecording = () => {
//     const recorder = new MediaRecorder(stream); // Use the stream from state
//     const chunks = [];

//     recorder.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         chunks.push(event.data);
//       }
//     };

//     recorder.onstop = () => {
//       setRecording(false);
//       setMediaRecorder(null);
//       setRecordedChunks(chunks);
//     };

//     recorder.start();
//     setRecording(true);
//     setMediaRecorder(recorder);
//   };

//   const stopRecording = () => {
//     if (mediaRecorder && mediaRecorder.state !== 'inactive') {
//       mediaRecorder.stop();
//       videoRef.current.srcObject = null; // Remove the stream from the video element
//     }
//   };

//   const saveRecording = () => {
//     if (recordedChunks.length === 0) {
//       console.error('No recording data to save.');
//       return;
//     }

//     const blob = new Blob(recordedChunks, { type: 'video/webm' });
//     const url = URL.createObjectURL(blob);
//     saveBlobToApi(blob);
//     // Now you can save 'blob' or 'url' to your database
//     console.log('Recording data:', blob);
//     console.log('Recording URL:', url);
//   };

//   const saveBlobToApi = (blob) => {
//     // const formData = new FormData();
//     // const file = new File([blob], 'recording.webm', { type: 'video/webm' });
  
//     // formData.append('file', file);
  
//     // fetch('https://example.com/upload', {
//     //   method: 'POST',
//     //   body: formData
//     // })
//     // .then(response => {
//     //   if (!response.ok) {
//     //     throw new Error('Failed to upload file');
//     //   }
//     //   return response.json();
//     // })
//     // .then(data => {
//     //   console.log('File uploaded successfully:', data);
//     // })
//     // .catch(error => {
//     //   console.error('Error uploading file:', error);
//     // });
//   };
  

//   return (
//     <div>
//       <video ref={videoRef} controls />
//       {!recording ? (
//         <button onClick={startRecording}>Start Recording</button>
//       ) : (
//         <button onClick={stopRecording}>Stop Recording</button>
//       )}
//       <button onClick={saveRecording} disabled={recordedChunks.length === 0}>Save Recording</button>
//     </div>
//   );
// };

// export default VideoStreamer;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { ReactMediaRecorder } from "react-media-recorder";

// const VideoStreamer = () => (
//   <div>
//     <ReactMediaRecorder
//       video
//       render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//         <div>
//           <p>{status}</p>
//           <button onClick={startRecording}>Start Recording</button>
//           <button onClick={stopRecording}>Stop Recording</button>
//           <video src={mediaBlobUrl} controls autoPlay loop />
//         </div>
//       )}
//     />
//   </div>
// );
//  export default VideoStreamer;

import React, { useEffect, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
// import { useMediaRecorder } from 'react-media-recorder';

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

const VideoStreamer = () => {
  const [recordedVideo, setRecordedVideo] = useState(null);
  const { startRecording, stopRecording, mediaBlobUrl, status, clearBlobUrl , pauseRecording,resumeRecording , previewStream} = useReactMediaRecorder({
    video: true,
    
    // onStop: blobUrl => setRecordedVideo(blobUrl)
  });

  const handleDelete = () => {
    console.log("hi:" , mediaBlobUrl)
    setRecordedVideo(null);
    clearBlobUrl(mediaBlobUrl);
    console.log("bye: ",mediaBlobUrl)
  };

  return (
    <div>
      <p>{status}</p>
      {
        status === "idle" ? <button onClick={startRecording}>Start Recording</button> : <button onClick={stopRecording} >Stop Recording</button>
      }
      {/* ({status === "recording"})
       ? <button onClick={startRecording}>Start Recording</button> : <button onClick={pauseRecording} >Pause Recording</button> */}
      {
        status === "paused" ? <button onClick={resumeRecording} >resume Recording </button> :  <button onClick={pauseRecording} disabled={status !== "recording"}>Pause Recording</button>
      }
     
      <button onClick={handleDelete} disabled={status !== "stopped"}>Delete Recording</button>
    
      <video src={mediaBlobUrl} controls autoPlay loop />
      <VideoPreview stream={previewStream} />
    </div>
  );

      }


export default VideoStreamer;