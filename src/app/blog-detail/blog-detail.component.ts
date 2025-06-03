import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog: any;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.blog = {
      title: 'Judul Blog Dinamis',
      description: 'Ini adalah deskripsi blog yang dinamis',
    };

    this.titleService.setTitle(this.blog.title);
    this.metaService.updateTag({
      name: 'description',
      content: this.blog.description,
    });
  }
}
