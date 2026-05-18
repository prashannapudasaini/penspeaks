import axios from 'axios';

// Replace with actual YouTube Data API V3 endpoint and key when ready
export const fetchLatestVideos = async (channelId) => {
  try {
    // Mocking the response for the UI foundation
    return [
      { id: '1', title: 'The Philosophy of Modern Writing', thumbnail: '' },
      { id: '2', title: 'Why We Read: A Deep Dive', thumbnail: '' },
      { id: '3', title: 'The Solitude of the Author', thumbnail: '' }
    ];
  } catch (error) {
    console.error("Error fetching YouTube data", error);
    return [];
  }
};