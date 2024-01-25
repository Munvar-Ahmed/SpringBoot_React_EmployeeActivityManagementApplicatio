package ca.munvar.EmpActivity.repository;

import ca.munvar.EmpActivity.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
