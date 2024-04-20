import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { PlayCircleOutline as PlayIcon } from '@mui/icons-material';

const Collections = () => {
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: "CMPE 272 - Cloud Computing",
            lectures: [
                { id: '1a', title: "Lecture 1", url: "https://example.com/lecture1.mp4" },
                { id: '1b', title: "Lecture 2", url: "https://example.com/lecture2.mp4" },
                { id: '1c', title: "Lecture 3", url: "https://example.com/lecture3.mp4" },
                { id: '1d', title: "Lecture 4", url: "https://example.com/lecture4.mp4" },
                { id: '1e', title: "Lecture 5", url: "https://example.com/lecture5.mp4" },
                { id: '1f', title: "Lecture 6", url: "https://example.com/lecture6.mp4" },
                { id: '1g', title: "Lecture 7", url: "https://example.com/lecture7.mp4" },
                { id: '1h', title: "Lecture 8", url: "https://example.com/lecture8.mp4" },
                { id: '1i', title: "Lecture 9", url: "https://example.com/lecture9.mp4" },
                { id: '1j', title: "Lecture 10", url: "https://example.com/lecture10.mp4" },

                // Add more lectures as needed
            ],
        },
        {
            id: 2,
            name: "CMPE 273 - Machine Learning",
            lectures: [
                { id: '2a', title: "Lecture 1", url: "https://example.com/lecture1.mp4" },
                { id: '2b', title: "Lecture 2", url: "https://example.com/lecture2.mp4" },
                { id: '2c', title: "Lecture 3", url: "https://example.com/lecture3.mp4" },
                // Add more lectures as needed
            ],
        },
        {
            id: 3,
            name: "CMPE 285 - Software Testing ",
            lectures: [
                { id: '3a', title: "Lecture 1", url: "https://example.com/lecture1.mp4" },
                { id: '3b', title: "Lecture 2", url: "https://example.com/lecture2.mp4" },
                // Add more lectures as needed
            ],
        },
        {
            id: 4,
            name: "CMPE 180 - Blockchain Leanring",
            lectures: [
                { id: '4a', title: "Lecture 1", url: "https://example.com/lecture1.mp4" },
                { id: '4b', title: "Lecture 2", url: "https://example.com/lecture2.mp4" },
                // Add more lectures as needed
            ],
        },
        {
            id: 5,
            name: "CMPE 180 - Data Strcuture and Algorithm",
            lectures: [
                { id: '4a', title: "Lecture 1", url: "https://example.com/lecture1.mp4" },
                { id: '4b', title: "Lecture 2", url: "https://example.com/lecture2.mp4" },
                { id: '4c', title: "Lecture 3", url: "https://example.com/lecture2.mp4" },
                { id: '4d', title: "Lecture 4", url: "https://example.com/lecture2.mp4" },

                // Add more lectures as needed
            ],
        },
    ]);
    const [currentLectureUrl, setCurrentLectureUrl] = useState('');

    const handleLectureClick = (lectureUrl) => {
        setCurrentLectureUrl(lectureUrl);
    };

    return (
        <div className="collections-container">
            {courses.map((course) => (
                <div key={course.id} className="course-container">
                    <h2>{course.name}</h2>
                    <div className="lectures-container overflow-x-auto whitespace-nowrap">
                        {course.lectures.map((lecture) => (
                            <button
                                key={lecture.id}
                                onClick={() => handleLectureClick(lecture.url)}
                                className="lecture-button bg-white shadow-md rounded-lg cursor-pointer inline-block p-2 m-2"
                            >
                                {lecture.title}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            {currentLectureUrl && (
                <ReactPlayer url={currentLectureUrl} playing controls width="100%" />
            )}
        </div>
    );
};

export default Collections;
