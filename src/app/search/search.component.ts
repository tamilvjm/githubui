import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/github-service.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;
  searchForm: FormGroup = null;
  @Output() onSearchComplete = new EventEmitter<any>();

  constructor(private githubService: GithubServiceService, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });

    // this.searchForm.get('searchTerm').valueChanges
    //   .pipe(debounceTime(200), filter(term => term.length > 0))
    //   .subscribe(val => {
    //     this.searchUser(val);
    //   });
  }

  searchUser(username) {
    this.githubService.getRepos(username)
      .subscribe(repos => {
        console.log(repos, typeof repos);
        if (!repos || repos.length === 0) {
          this.githubService.getReposFromGithub(username).subscribe(repos => {
            console.log(repos);
            let userDetail = { repos: repos, save: true, user: username };
            this.onSearchComplete.emit(userDetail); 
          },
            (err) => {
              alert(err);
            });
        } else {
          let userDetail = { repos: repos, user: username };
          this.onSearchComplete.emit(userDetail);
        }
      },
      (err) => {
        alert(err);
      });
  }
}
