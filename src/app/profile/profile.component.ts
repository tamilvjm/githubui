import { Component, OnInit, Input } from '@angular/core';
import { GithubServiceService } from 'src/app/github-service.service';

import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user = null;
  @Input() repos;
  @Output() refresh = new EventEmitter<any>();

  constructor(private githubService: GithubServiceService) {
  }

  starRepo(repoName) {
    console.log("repo name : ", repoName);
    this.githubService.starRepo(this.user, repoName).subscribe((res) => {
      console.log("Starred");
      this.refresh.emit();
    }, (err) => {
      console.log("Error occured while starring");
    })
  }

  ngOnInit() {

  }

}
