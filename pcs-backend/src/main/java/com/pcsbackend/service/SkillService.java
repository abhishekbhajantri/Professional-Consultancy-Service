package com.pcsbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pcsbackend.entity.Skill;

@Service
public interface SkillService {
	public List<Skill> getAllSkills();
	public void createSkill(Skill skill);
	public Optional<Skill> searchById(Long skillId);
	public void deleteSkill(Long skillId);

}
