package com.pcsbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcsbackend.entity.Skill;
import com.pcsbackend.serviceImplementation.SkillServiceImpl;

@RestController
@RequestMapping("/skills")
public class SkillController {
	
	@Autowired
	public SkillServiceImpl skillServiceImpl;
	
	//GET ALL SKILLS
	@GetMapping("/all")
	public List<Skill> getAllskills()
	{
		return skillServiceImpl.getAllSkills();
	}
	
	//ADD NEW SKILL
	@PostMapping("/create")
	public void add_skill(@RequestBody Skill skill)
	{
		skillServiceImpl.createSkill(skill);
	}
	
	//GET SKILL BY ID
	@GetMapping("/getby/{id}")
	public Optional<Skill> getById(@PathVariable Long id)
	{
		return skillServiceImpl.searchById(id);
	}
	
	//DELETE SKILL
	@DeleteMapping("/delete/{id}")
	public void delete_skill(@PathVariable Long id)
	{
		skillServiceImpl.deleteSkill(id);
	}


}
