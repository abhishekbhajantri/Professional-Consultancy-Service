package com.pcsbackend.serviceImplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pcsbackend.entity.Skill;
import com.pcsbackend.repository.SkillRepository;
import com.pcsbackend.service.SkillService;

@Service
public class SkillServiceImpl implements SkillService{

	@Autowired
	private SkillRepository skillRepository;
	
	@Override
	public List<Skill> getAllSkills() 
	{
		return skillRepository.findAll();
	}

	@Override
	public void createSkill(Skill skill) 
	{
		skillRepository.save(skill);
	}

	@Override
	public Optional<Skill> searchById(Long skillId) 
	{
		return skillRepository.findById(skillId);
	}

	@Override
	public void deleteSkill(Long skillId) 
	{
		skillRepository.deleteById(skillId);
	}
}
