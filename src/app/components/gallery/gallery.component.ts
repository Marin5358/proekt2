import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  photos: any[] = []; // Array to store fetched photos
  apiUrl = 'https://photospicker.googleapis.com'; // Replace with your valid API endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('Initializing GalleryComponent...');
    this.fetchPhotos(); // Fetch photos when the component initializes
  }

  fetchPhotos(): void {
    console.log('Fetching photos from API:', this.apiUrl);

    // API call
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        console.log('API Response:', data); // Debugging: Log the response from the API
        this.photos = data.results || []; // Ensure the photos array is populated
        console.log('Photos array:', this.photos); // Debugging: Log the photos array
      },
      (error) => {
        console.error('Error fetching photos:', error); // Debugging: Log any errors
      }
    );
  }
}
