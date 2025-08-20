function skillsMember(member) {
  return {
    name: member.name,
    skills: member.skills || [],
    addSkill: function(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
    },
    removeSkill: function(skill) {
      const index = this.skills.indexOf(skill);
      if (index > -1) {
        this.skills.splice(index, 1);
      }
    },
    hasSkill: function(skill) {
      return this.skills.includes(skill);
    }
  };
}