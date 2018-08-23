import { Component } from '@angular/core';
import { GithubServiceService } from 'src/app/github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetail: any = {};
  title = 'app';
  constructor(private githubService: GithubServiceService) {
  }
  getUserDetails(data) {
    if (!data) return;
    if (data.save) {
      let repos = data.repos.map((repo) => {
        let obj = {
          username: repo.owner.login,
          name: repo.name,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          html_url: repo.html_url
        };
        return obj;
      });

      this.githubService.saveRepos(repos).subscribe(
        (res) => {
          console.log("Saved");
        },
        (err) => {
          console.log("Error occured");
        }
      );
    }
    this.userDetail = data;
  }
}
