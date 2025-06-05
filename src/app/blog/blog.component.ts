import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blog: any;
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.blog = {
      title:
        'Dafina Salon Bogor - Salon terbaik di Bogor dan Salon termurah di Bogor',
      description: 'salon bukit cimanggu, salon wanita bogor',
      keywords:
        'salon bukit cimanggu, salon wanita bogor, salon bukit cimanggu, mua bogor, salon muslimah bogor, salon bcc',
    };

    this.titleService.setTitle(this.blog.title);
    this.metaService.updateTag({
      name: 'description',
      content: this.blog.description,
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: this.blog.keywords,
    });
  }
}
