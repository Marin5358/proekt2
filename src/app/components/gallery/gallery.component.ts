import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  photos: any[] = [];
  apiUrl = 'https://photospicker.googleapis.com';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        this.photos = data.results || [];
      },
      (error) => console.error('Error fetching photos:', error)
    );
  }
}
