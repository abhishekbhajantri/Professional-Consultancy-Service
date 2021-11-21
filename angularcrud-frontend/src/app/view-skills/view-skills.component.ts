import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.css']
})
export class ViewSkillsComponent implements OnInit {

  constructor(private  skillService : SkillsService) { }

  skills: Skills[]=[];
  ngOnInit(): void {
    this.getAllSkills();
  }

  getAllSkills()
  {
    this.skillService.getSkillsList().subscribe(data => {
      this.skills = data;
      console.log(data);
    });
  }
}
