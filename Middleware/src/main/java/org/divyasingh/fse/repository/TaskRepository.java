package org.divyasingh.fse.repository;

import org.divyasingh.fse.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
	
	/*@Query(value="select new org.divyasingh.fse.dto.TaskDTO(t.taskId, t.taskName, "
			+ "t.startDate, t.endDate, t.priority, t.parentId, t.parentTask, t.status,t.user, t.projectId) from Task t")
	List<TaskDTO> findAllDto();*/

}
