🎥 Video Review Plugin — Project Overview

This project is a Video Review Plugin that allows users to record or upload videos directly from a frontend interface and submit them for administrative review. The system is designed to support moderation workflows by placing all submitted videos into a pending approval state before they are made available or stored permanently.

The application follows a client–server architecture. The frontend provides an intuitive user experience for recording, previewing, and submitting videos. These videos are sent to a backend API, where they are validated, processed, and temporarily stored. Metadata such as file name and approval status is saved in a database for tracking and management.

An Admin Dashboard allows administrators to review submitted videos and take actions such as approving, rejecting, or deleting content. Once a decision is made, users are notified of the outcome through email or in-app notifications. Approved videos are then stored permanently using a storage solution such as AWS S3 or local storage.

Overall, this project demonstrates a scalable and modular approach to handling user-generated video content with moderation, making it suitable for platforms that require review-based submissions.
![VidReviewFlowChart](https://github.com/user-attachments/assets/4de09e96-56f2-41f8-9b2c-138edf465508)
<img width="1536" height="1024" alt="ChatGPT Image Jan 11, 2026, 10_38_30 PM" src="https://github.com/user-attachments/assets/feb13ea8-75cd-401e-beed-1436227ad560" />
